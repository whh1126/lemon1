require.config({
        baseUrl: "/js/",
        paths: {
            "mui": "libs/mui",
            "index": "page/index",
            "flexible": "libs/flexible",
            "dtpicker": "libs/mui.dtpicker",
            "poppicker": "libs/mui.poppicker",
            "picker": "libs/mui.picker.min",
            "echarts": "https://cdn.bootcss.com/echarts/4.2.0-rc.2/echarts-en",
            "addbill": "page/addbill",
            "create": "page/create",
            "until": "page/until"
        },
        shim: {
            "picker": {
                deps: ['mui']
            }
        }
    })
    //mof