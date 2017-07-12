import React, { Component } from 'react'

// import { Button } from 'antd-mobile';
import Echarts from 'native-echarts';


export default class PieChart extends Component {

    render() {
        const option = {
            title: {
                text: '计划完成率',
                textStyle: {
                    color: 'white',
                }
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'cross',
                    crossStyle: {
                        color: '#999'
                    }
                }
            },
            toolbox: {
                feature: {
                    dataView: { show: true, readOnly: false },
                    magicType: { show: true, type: ['line', 'bar'] },
                    restore: { show: true },
                    saveAsImage: { show: true }
                }
            },
            // legend: {
            //     data: ['年/月/周计划完成率']
            // },
            xAxis: [
                {
                    type: 'category',
                    // data: this.props.TodayAllRobotsxSevenDaysAllRobotsOutputs.XAxisTitle || ['第2月', '第3月', '第4月', '第5月', '-', '-', '-', '-', '第7周', '第8周', '第9周', '第10周', '第11周', '第12周', '第13周', '第14周', '第15周', '第16周', '第17周', '第18周', '第19周', '第20周', '第21周', '第22周'],
                    data: ['2015年', '2016年', '-', '4月', '5月', '6月', '-', '第11周', '第12周', '第13周', '第14周', '第15周', '第16周', '第17周', '第18周', '第19周', '第20周', '第21周', '第22周'],

                    // axisLine: {
                    //     lineStyle: {
                    //         color: 'white'
                    //     }
                    // },
                    axisPointer: {
                        type: 'shadow'
                    }
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    name: '百分比',
                    // min: 0,
                    // max: 250,
                    // interval: 50,
                    // axisLine: {
                    //     lineStyle: {
                    //         color: 'white'
                    //     }
                    // },
                    axisLabel: {
                        formatter: '{value}% '
                    }
                }
            ],
            series: [
                {
                    name: '计划完成率',
                    type: 'bar',
                    itemStyle: {
                        normal: {
                            color: '#7CFC00'
                        },
                    },
                    // data: this.props.TodayAllRobotsxSevenDaysAllRobotsOutputs.Data ||  [2881.0, 2892.9, 2803.0, 2854.2, 0,0,0,0,725.6, 776.7, 735.6, 762.2, 725.6, 776.7, 735.6, 762.2, 725.6, 776.7, 735.6, 762.2, 725.6, 776.7, 735.6, 762.2]
                    data:  [95.0, 96.9, 0, 95.0, 96.2, 97, 0, 91.6, 92.7, 92.6, 93.2, 93.6, 94.1, 91.6, 95.1, 95.6, 95.7, 95.9, 96.0]
                }
            ]
        };
        return (
            // <Button className="btn" type="primary" onClick={e => console.log(e)}>Rex--About</Button>
            <Echarts option={option} height={300} />
        )
    }
}
