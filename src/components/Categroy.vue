<template>
    <div id='tab'>
        <search></search>
        <div class="tab-bar">
             <!-- 左边区域 -->
          <div class='Left clearfix' >
             <a href="javascript:;"
              @click="tab(index)"   v-for="(item,index) in Datas" 
            :key='item.id'
              :class="{active : index===curId}">
              {{item.name}}
            </a>
          </div>
          <!-- 右边区域 -->
    
            <div class="tab-con"  v-for="(content,index) in items" :key='content.id' v-show="index==curId">
               <!-- v-show="indx===curId" v-show="index==curId"-->
                <div v-for="leaf in content.leaf" :key="leaf.id">

                  <p class="name"><span>|</span>{{leaf.name}}</p>

                  <div class="item-wrapper clearfix" >
                  <div class="goods-item" v-for="con in leaf.leaf" :key="con.id" @click="goto('Goodlist',con.id)">
                      <img :src="con.cover" class="goods-img">                    
                      <p class="goods-name">{{con.name}}</p>
                  </div>
                  </div> 
                </div>
              </div>
              
            </div>
          
        </div>
        

   
</template>
<script>
import search from "./Search/search.vue";
export default {
  data() {
    return {
      curId: 0,
      items: [],
      Datas: [],
      canshu: []
      // contents: []
    };
    // selected: true
  },
  components: {
    // 第二步：局部注册组件
    search
  },
  methods: {
    tab(index) {
      this.curId = index;
      this.a = this.curId;
      console.log(this.curId);
    },

    goto(name, index) {
      this.$router.push({
        name: name,
        // 路由传参
        query: { thridCategoryId: index }
      });
    }
  },
  created() {
    this.$ajax
      .get("/api/f/app/s_10020/loadCategory ")
      .then(res => {
        //s
        let data = res.data.data;
        this.items = data;
        // console.log(res.data.data);

        console.log(this.items);
        console.log(res.data.data[0]);
        console.log(res.data.data[0].leaf);
        var datas = [];

        for (let i = 0; i < this.items.length; i++) {
          var json = {};
          console.log(11);
          json["id"] = i;
          json["name"] = this.items[i].name;
          datas.push(json);
          // console.log(json);
        }
        console.log(datas);
        this.Datas = datas;
      })
      .catch(() => {
        // Indicator.close();
      });
  },
  computed: {
    DD: function() {
      // var datas = [];
      // for (let i = 0; i < this.items.length; i++) {
      //   var json = {};
      //   console.log(11);
      //   json["id"] = i;
      //   json["name"] = this.items[i].name;
      //   datas.push(json);
      //   // console.log(json);
      // }
      // console.log(datas);
      // return datas;
    }
  }
};
</script>
<style>
#tab {
  width: 320px;
}
.tab-bar {
  display: flex;
  justify-content: space-between;
}
.tab-bar .Left {
  /* display: flex; */
  /* flex-direction: column; */
  width: 99px;
  height: 477px;
  /* position: fixed;
  top: 0.96rem;
  bottom: 50px;
  left: 0; */
  overflow: hidden;
}
.tab-bar .Left a {
  display: block;
  font-size: 0.8rem;
  width: 93.8px;
  height: 43.66px;
  text-align: center;
  line-height: 43.66px;
  border-bottom: 1px solid #e4e5e7;
  text-decoration: none;
  color: dimgray;
}
.tab-con {
  height: 477px;
  flex: 1;
  overflow: auto;

  padding-left: 10px;
}
.tab-con span {
  display: inline-block;
  width: 5px;
  margin-right: 3px;
  color: #000;
}
.tab-con .name {
  margin: 8.5px 0;
  width: 100%;
  height: 17px;
}
.tab-con .item-wrapper .goods-item {
  width: 48%;
  height: 91px;
  margin: 8.5px 2px;
  float: left;
  box-sizing: border-box;
  border: 1px solid beige;
  text-align: center;
}
.tab-con .item-wrapper .goods-img {
  width: 70px;
  height: 70px;
}
.tab-con .item-wrapper .goods-name {
  width: 100%;
  font-size: 12px;
  text-align: center;
}
.clearfix {
  zoom: 1;
}
.clearfix:after {
  display: block;
  content: "";
  clear: both;
}
.tab-bar .active {
  background-color: darkgray;
}
</style>
