define(['mui'], function(mui) {
    console.log(mui);
    var indexs = 0;
    //点击完成按钮跳转页面
    var btn = document.querySelector('#btn');
    btn.addEventListener('tap', function() {
        location.href = "../pages/create.html"
    })
    var list = document.querySelector('#list'); //ul
    var li = [...list.querySelectorAll('li')];
    var line = document.querySelector('.line');
    var slider = document.querySelector('#slider');
    //点击图标切换类
    mui('#slider').on('tap', ".mui-icon", function() {
        // slider.classList.add('active')
        //  document.querySelector('active').classList.remove('active');
        // if(this.className=="active"){

        // }


    })

    function keyChange() {
        mui('#list').on('tap', 'li', function() {
            var val = this.innerHTML;
            if (val === "完成") {

            } else if (val === "X") {
                //点击 "X" 使用slice截取第一位和最后赋值给它
                var del = line.innerHTML = line.innerHTML.slice(0, -1);
                if (!line.innerHTML) {
                    line.innerHTML = "0.00";
                } else {
                    if (line.innerHTML === "0.00") {
                        line.innerHTML = "";
                    }
                }
            } else {
                line.innerHTML += val;
            }
        })
    }
    keyChange()


})