//把路由封装成模块
const express = require('express');
// 引入单独路由模块
const loginRouter = require('./login');
const userRouter = require('./user');
const pageRouter = require('./page');
const loadRouter = require('./load');
const shopRouter=require('./shop');

// const shopcarRouter = require('./shopcar');


let Router = express.Router();
// 关于订单列表
Router.use('/shop',shopRouter);
// 关于用户登录的路由
Router.use('/login',loginRouter);
// 关于用户操作的路由
Router.use('/user',userRouter);

// 商品操作的路由
Router.use('/page',pageRouter);
// 添加商品的路由
Router.use('/load',loadRouter);
// 订单的路由
// Router.use('/shopcar',shopcarRouter);

module.exports = Router;