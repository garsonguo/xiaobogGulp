/**
 * Created by Administrator on 2017/2/15.
 */
$(document).ready(function () {


    //jqtj
    var jqtj=echarts.init(document.getElementById("qjtj"));

    var option_jqtj = {
        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
            orient: 'vertical',
            left: 'left',
            data: ['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
        },
        series : [
            {
                name: '访问来源',
                type: 'pie',
                radius : '55%',
                center: ['50%', '60%'],
                data:[
                    {value:335, name:'直接访问'},
                    {value:310, name:'邮件营销'},
                    {value:234, name:'联盟广告'},
                    {value:135, name:'视频广告'},
                    {value:1548, name:'搜索引擎'}
                ],
                itemStyle: {
                    emphasis: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ]
    };

    jqtj.setOption(option_jqtj);


    //全省不动产登记与交易趋势
    var djjyqs=echarts.init(document.getElementById("djjyqs"));

    var option_djjyqs = {
        tooltip : {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        legend: {
            data:['直接访问','邮件营销','联盟广告','视频广告','搜索引擎','百度','谷歌']
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis : [
            {
                type : 'category',
                data : ['周一','周二','周三','周四','周五','周六','周日']
            }
        ],
        yAxis : [
            {
                type : 'value'
            }
        ],
        series : [
            {
                name:'直接访问',
                type:'bar',
                data:[320, 332, 301, 334, 390, 330, 320]
            },
            {
                name:'邮件营销',
                type:'bar',
                stack: '广告',
                data:[120, 132, 101, 134, 90, 230, 210]
            },
            {
                name:'联盟广告',
                type:'bar',
                stack: '广告',
                data:[220, 182, 191, 234, 290, 330, 310]
            },
            {
                name:'视频广告',
                type:'bar',
                stack: '广告',
                data:[150, 232, 201, 154, 190, 330, 410]
            },
            {
                name:'搜索引擎',
                type:'bar',
                data:[862, 1018, 964, 1026, 1679, 1600, 1570],
                markLine : {
                    lineStyle: {
                        normal: {
                            type: 'dashed'
                        }
                    },
                    data : [
                        [{type : 'min'}, {type : 'max'}]
                    ]
                }
            },
            {
                name:'百度',
                type:'bar',
                barWidth : 5,
                stack: '搜索引擎',
                data:[620, 732, 701, 734, 1090, 1130, 1120]
            },
            {
                name:'谷歌',
                type:'bar',
                stack: '搜索引擎',
                data:[120, 132, 101, 134, 290, 230, 220]
            }
        ]
    };

    djjyqs.setOption(option_djjyqs);

    //全省不动产交易金额与抵押金额趋势
    var jydyqs=echarts.init(document.getElementById("jydyqs"));

    var option_jydyqs = {
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data:['最高气温','最低气温']
        },
        xAxis:  {
            type: 'category',
            boundaryGap: false,
            data: ['周一','周二','周三','周四','周五','周六','周日']
        },
        yAxis: {
            type: 'value',
            axisLabel: {
                formatter: '{value} °C'
            }
        },
        series: [
            {
                name:'最高气温',
                type:'line',
                data:[11, 11, 15, 13, 12, 13, 10],
                markPoint: {
                    data: [
                        {type: 'max', name: '最大值'},
                        {type: 'min', name: '最小值'}
                    ]
                },
                markLine: {
                    data: [
                        {type: 'average', name: '平均值'}
                    ]
                }
            },
            {
                name:'最低气温',
                type:'line',
                data:[1, -2, 2, 5, 3, 2, 0],
                markPoint: {
                    data: [
                        {name: '周最低', value: -2, xAxis: 1, yAxis: -1.5}
                    ]
                },
                markLine: {
                    data: [
                        {type: 'average', name: '平均值'},
                        [{
                            symbol: 'none',
                            x: '90%',
                            yAxis: 'max'
                        }, {
                            symbol: 'circle',
                            label: {
                                normal: {
                                    position: 'start',
                                    formatter: '最大值'
                                }
                            },
                            type: 'max',
                            name: '最高点'
                        }]
                    ]
                }
            }
        ]
    };

    jydyqs.setOption(option_jydyqs);

    //地图
    var dt = echarts.init(document.getElementById('dt'));

    var data=[
        {name:"长沙",value:10},
        {name:"岳阳",value:7},
        {name:"常德",value:20},
        {name:"张家界",value:2}
    ];

    var convertedData = [
        data,
        data.sort(function (a, b) {
            return a.value - b.value;
        }).slice(0, 6)
    ];

    var categoryData = [];
    var count = data.length;
    for(var i=0;i<data.length;i++){
        categoryData.push(data[i].name);
    }

    var dtdata=[{name:"长沙",value:20}]

    option = {
        backgroundColor: '#fff',
        geo: {
            type: 'scatter',
            map: '湖南',
            left: '10',
            right: '40%',
            label: {
                emphasis: {
                    show: true
                },
                normal:{
                    show:true
                }
            },
            roam: true,
            itemStyle: {
                normal: {
                    areaColor: '#EEEEEE',
                    borderColor: '#111'
                },
                emphasis: {
                    areaColor: '#FF7A7B'
                }
            }
        },
        tooltip : {
            trigger: 'item'
        },
        grid: {
            right: 40,
            top: 50,
            bottom: 40,
            width: '30%'
        },
        xAxis: {
            type: 'value',
            scale: true,
            position: 'top',
            boundaryGap: false,
            splitLine: {show: false},
            axisLine: {show: false},
            axisTick: {show: false},
            axisLabel: {margin: 2, textStyle: {color: '#aaa'}},
        },
        yAxis: {
            type: 'category',
            name: '',
            nameGap: 16,
            axisLine: {show: false, lineStyle: {color: '#333'}},
            axisTick: {show: false, lineStyle: {color: '#333'}},
            axisLabel: {interval: 0, textStyle: {color: '#333'}},
            data: categoryData
        },
        series : [
            {
                name: '',
                type: 'map',
                coordinateSystem: 'geo',
                label: {
                    normal: {
                        formatter: '{b}',
                        position: 'right',
                        show: false
                    },
                    emphasis: {
                        show: true
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#ddb926'
                    }
                },
                data:dtdata
            },
            {
                id: 'bar',
                zlevel: 2,
                type: 'bar',
                symbol: 'none',
                itemStyle: {
                    normal: {
                        color: '#FF9600'
                    }
                },
                data: data
            }
        ]
    };

    dt.setOption(option);
})