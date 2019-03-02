define(['mui', 'until'], function(mui, until) {
    console.log(decodeURI(until().type))
        // console.log(until);
    var help = document.querySelector('.mui-icon-help'); //目标图标
    var icons = document.querySelector('.icons'); //所有图标的父元素
    mui('.icons').on('tap', '.mui-icon', function() {
        help.className = this.className;
        //目标图标=点击的图标
    })

    function getIcon() {
        mui.ajax('/api/seeIcon', {
            dataType: 'json', //服务器返回json格式数据
            type: 'get', //HTTP请求类型
            success: function(data) {
                // console.log(data.data);
                //获得服务器响应
                if (data.code == 1) {
                    render(data.data);
                }
            }
        });
    }
    getIcon()

    function render(data) {
        var n = 10;
        var group = Math.ceil(data.length / n);
        var html = ``;
        for (var i = 0; i < group; i++) {
            data.forEach(function(item, k) {
                var start = i * n;
                console.log(start);
                if (k >= start && k < (start + n)) {
                    html += `<dl>
                    <dt class="${item.icon}"></dt>
                </dl>`
                }
            })
        }
        icons.innerHTML += html;
    }
    //添加分类
    function addClassify() {
        var save = document.querySelector('#save');
        save.addEventListener('tap', function() {
            var inp = document.querySelector('#inp').value;
            var iconss = document.getElementById('iconss');
            var type = until().type || "支出";

            console.log(iconss, type);
            if (!inp) {
                alert('请先输入分类名');
                return
            }
            var data = {
                icon: iconss.className,
                cname: inp,
                uid: getUid(),
                type: type
            }
            console.log(data);
            mui.ajax('/api/getCurom', {
                type: "get",
                data: {
                    icon: iconss.className,
                    cname: inp,
                    uid: getUid(),
                    type: type
                },
                dataType: "json",
                success: function(data) {
                    console.log(data);
                    if (data.code == 1) {
                        location.href = "../../pages/addbill.html"

                    } else if (data.code == 4) {
                        alert('该分类已存在');
                    }
                }
            })
        })

        function getUid() {
            var ls = window.localStorage;
            //没有获取到uid
            if (ls.getItem("uid")) {
                //就return 停止获取uid
                return ls.getItem('uid');
            } else {
                //否则的话获取
                ls.setItem('uid', "5c74d8049e599842379e7887")
            }
            //   console.log(ls.setItem('uid'));

        }
        getUid()
    }
    addClassify()
        //本地存储


})