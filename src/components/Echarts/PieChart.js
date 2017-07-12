import React, { Component } from 'react'

// import { Button } from 'antd-mobile';
import Echarts from 'native-echarts';


export default class PieChart extends Component {

    render() {
        const option = {
             title: {
                text: '机器人运行状态',
                textStyle: {
                    color: 'white',
                },
                left: 'right',
                top: 0
            },
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },

            legend: {
                orient: 'vertical',
                x: 'left',
                data: ['故障', '停机', '等待', '运行'],
                textStyle: {
                    color: 'white',
                },
            },
            series: [{
                name: '机器人运行状态',
                type: 'pie',
                radius: '68%',
                center: ['50%', '60%'],
                clockwise: false,
                data: [{
                    value:  10,
                    name: '故障'
                }, {
                    value:  10,
                    name: '停机'
                }, {
                    value: 10,
                    name: '等待'
                }, {
                    value:  70,
                    name: '运行'
                }],
                label: {
                    normal: {
                        show: false,
                        textStyle: {
                            // color: '#999',
                            fontSize: '14px',
                        }
                    }
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                itemStyle: {
                    normal: {
                        borderWidth: 4,
                        borderColor: 'rgba(0, 0, 0, 0)',
                    },
                    emphasis: {
                        borderWidth: 0,
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }],
            color: [
                '#DC143C',//red
                '#696969',//gray
                '#FFD700', //yellow
                '#32CD32',//green
                '#c8efff'
            ]
        };
        return (
            // <Button className="btn" type="primary" onClick={e => console.log(e)}>Rex--About</Button>
            <Echarts option={option}  height={300} />
        )
    }
}
