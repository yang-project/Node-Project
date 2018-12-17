document.addEventListener('DOMContentLoaded', () => {
    //================验证码=======================
    let code = document.querySelector('#code');
    //点击生成验证码
    code.onclick = function () {
        update();
    }
    update();
    //更新验证码
    function update() {
        var num = randomNum();
        code.innerHTML = num;
        var color = randomColor(16);
        code.style.color = color;
    }
    var num = '';
    //生成验证码
    function randomNum() {
        num = '';
        var numLength = 5;
        var codes = '0123456789zxcvbnmasdfghjklqwertyuiopZXCVBNMASDFGHJKLQWERTYUIOP';
        for (var i = 0; i < numLength; i++) {
            num += codes.charAt(parseInt(Math.random() * codes.length));
        }
        return num;
    }
    //生成随机颜色
    function randomColor(str) {
        if (str == 16) {
            //生成16进制的   '0123456789abcdef'  #666677
            var str = '0123456789abcdef';
            var color = '#';
            for (var i = 0; i < 6; i++) {
                color += str.charAt(parseInt(Math.random() * str.length));
            }

            return color;

        } else if (str == 'rgb') {
            //rgb(255,255,0) 生成3个随机数，每个随机数应该在  0-255
            var r = parseInt(Math.random() * 256);
            var g = parseInt(Math.random() * 256);
            var b = parseInt(Math.random() * 256);

            return 'rgb(' + r + ',' + g + ',' + b + ')';

        } else {
            alert('参数传错了');
        }
    }
    //验证码检验
    let isok = false;
    let codeNum = document.querySelector('#codeNum');
    codeNum.onblur = () => {
        var codeVal = codeNum.value.trim();
        var randNum = code.innerHTML;
        //非空判断
        if (codeVal) {
            if (codeVal == randNum) {
                codeNum.classList.remove('is-invalid');
                codeNum.classList.add('is-valid');
                isok = true;
            } else {
                codeNum.classList.remove('is-valid');
                codeNum.classList.add('is-invalid');
                codeNum.value = '';
                codeNum.focus();
                isok = false;
            }
        }
    }

    //====================================================
    //================登陆========================
    let username = document.querySelector('#username');
    let password = document.querySelector('#password');
    let btnLogin = document.querySelector('.btnLogin');
    let status = [200, 304];

    btnLogin.onclick = (e) => {
        let _username = username.value;
        let _password = password.value;
        let codeVal = codeNum.value;
        console.log(2);
        let xhr = new XMLHttpRequest;
        xhr.onload = () => {
            console.log(2);
            if (status.includes(xhr.status)) {
                let res = JSON.parse(xhr.responseText);
                console.log(res);
                if (res.status == 1 && codeVal) {
                    location.href = '../index.html';
                } else {
                    username.classList.add('is-invalid');
                    password.classList.add('is-invalid');
                }
            }
        }
        xhr.open('post', '/login', true);
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.send(`username=${_username}&password=${_password}&time=${new Date()}`);

        e.preventDefault();
    }
});