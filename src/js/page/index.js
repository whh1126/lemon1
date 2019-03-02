define(['mui', "echarts", 'picker'], function(mui, echarts, picker) {

    init()

    function init() {
        mui.init();
        Earts()
        menu()
        click()
        tab()
    }

    function menu() {
        var aside = document.querySelector('#big-aside'),
            allpay = [...document.querySelectorAll('#allpay>li')],
            pays = document.querySelector('.pays'),
            spending = document.querySelector('.spending'),
            spans = [...spending.querySelectorAll('span')];
        mui('.spending').on('tap', '.all', function() {
                console.log(111);
            })
            //点击全部支出相应的li加上类名
    }

    function Earts() {
        var myChart = echarts.init(document.getElementById('main'));
        // 指定图表的配置项和数据
        var option = {
            title: {
                text: 'ECharts 入门示例'
            },
            tooltip: {},
            legend: {
                data: ['销量']
            },
            xAxis: {
                data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
            },
            yAxis: {},
            series: [{
                name: '销量',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20]
            }]
        };
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
    }

    //点击事件
    function click() {
        var month = document.querySelector('.month');
        var year = document.querySelector('.year');
        var Year = new Date().getFullYear();
        var Month = new Date().getMonth() + 1;
        var icon = document.querySelector('.mui-icon-gear');
        var sure = document.querySelector('#sure');
        var reset = document.querySelector('#rest');
        //操作菜单
        //点击icon禁止侧滑菜单
        icon.addEventListener('tap', function() {
                mui('.mui-off-canvas-wrap').offCanvas('show');
            })
            //点击确定按钮菜单消失
        sure.addEventListener('tap', function() {
                mui('.mui-off-canvas-wrap').offCanvas('close');
            })
            //点击月
        month.addEventListener('tap', function() {
                var picker = new mui.PopPicker({
                    type: "date",
                    endDate: new Date(2016, 04, 25),
                });
                picker.setData([{
                    value: 'month',
                    text: '月'
                }, {
                    value: 'year',
                    text: '年'
                }]);
                picker.show(function(selectItems) {
                    document.querySelector(".month").innerHTML = selectItems[0].text;
                    if (selectItems[0].value === "year") {
                        month.innerHTML = Year;
                    } else if (selectItems[0].value === "month") {
                        year.innerHTML = Year + "-" + Month;
                    }
                    console.log(selectItems[0].text); //智子
                    console.log(selectItems[0].value); //zz 
                })
            })
            //获取年
        year.addEventListener('tap', function() {
            var title = document.querySelector("h5[data-id=title-y]");
            console.log(title);
            // var titleM = document.querySelector(h5["data-id=title-m"]);
            // var pinker = document.querySelector(h5["data-id=picker-m"]);
            // console.log(title, titleM, pinker);
            var dtPicker = new mui.DtPicker({
                type: "month"
            });
            dtPicker.show(function(selectItems) {
                console.log(selectItems.y); //{text: "2016",value: 2016} 
                console.log(selectItems.m); //{text: "05",value: "05"} 
            })
        })

    }
    //阻止冒泡
    var offCanvasInner = document.querySelector('.mui-inner-wrap');
    offCanvasInner.addEventListener('drag', function(event) {
        event.stopPropagation();
    });

    function tab() {
        //tab切换
        var active = document.querySelector('.active');
        var chart = document.querySelector('.chart');
        var hide = document.querySelector('#table-swiper');
        var main = document.querySelector('#main');
        //图表
        chart.addEventListener('tap', function() {
                this.className = "active";
                main.style.display = "block";
            })
            //菜单
        active.addEventListener('tap', function() {
            main.style.display = "none";
            this.className = "";
        })
    }

    //跳转页面
    var addicon = document.querySelector(".mui-icon-plusempty");
    addicon.addEventListener('tap', function() {
        location.href = "../../pages/addbill.html";
    })
})