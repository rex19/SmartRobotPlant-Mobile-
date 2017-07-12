import React, { Component } from 'react'

// import { Button } from 'antd-mobile';
import Echarts from 'native-echarts';
var data = [22, 358, 630, 722, 724, 708, 699, 697, 697, 698, 698, 698, 698, 698, 698, 698, 698, 538, 274, 345, 576, 694, 718, 710, 701, 698, 697, 698, 698, 698, 698, 0, 0, 0, 38, 167, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 200, 541, 700, 728, 714, 702, 697, 697, 697, 698, 698, 698, 698, 698, 698, 698, 698, 698, 698, 698, 698, 668, 441, 252, 189, 185, 190, 196, 200, 198, 181, 196, 209, 202, 196, 184, 191, 205, 209, 208, 208, 207, 210, 215, 231, 219, 185, 191, 195, 179, 150, 144, 136, 143, 159, 167, 159, 159, 167, 163, 169, 175, 187, 191, 194, 202, 195, 180, 169, 185, 190, 184, 174, 160, 160, 156, 145, 142, 151, 176, 194, 197, 191, 183, 178, 176, 165, 144, 137, 136, 136, 257, 541, 690, 651, 402, 235, 198, 237, 286, 306, 297, 283, 271, 258, 245, 238, 246, 253, 254, 251, 257, 269, 283, 311, 500, 657, 711, 713, 704, 699, 697, 562, 386, 280, 252, 254, 250, 238, 223, 216, 214, 212, 209, 204, 186, 172, 190, 216, 219, 208, 196, 189, 183, 178, 169, 196, 205, 190, 166, 153, 140, 125, 122, 125, 126, 135, 137, 140, 142, 150, 160, 174, 173, 164, 182, 187, 182, 183, 187, 190, 195, 197, 197, 196, 194, 192, 187, 183, 178, 171, 157, 154, 155, 143, 131, 130, 146, 156, 153, 161, 174, 176, 185, 194, 200, 208, 211, 214, 203, 217, 236, 255, 279, 300, 320, 326, 339, 362, 263, 212, 201, 196, 186, 170, 177, 175, 153, 124, 114, 116, 120, 125, 129, 125, 119, 133, 143, 166, 187, 188, 201, 222, 254, 272, 269, 256, 242, 241, 245, 261, 278, 277, 261, 245, 250, 280, 284, 275, 286, 295, 285, 228, 180, 158, 171, 177, 159, 154, 159, 161, 173, 182, 184, 186, 188, 179, 164, 145, 114, 103, 115, 131, 137, 150, 163, 184, 204, 214, 221, 219, 194, 180, 173, 171, 167, 165, 165, 159, 158, 156, 156, 145, 130, 129, 138, 146, 149, 155, 170, 174, 185, 192, 195, 198, 200, 201, 205, 217, 223, 195, 157, 142, 133, 128, 139, 153, 162, 176, 176, 172, 179, 170, 161, 169, 176, 188, 189, 192, 186, 178, 159, 144, 132, 119, 119, 126, 139, 149, 159, 165, 162, 366, 609, 647, 436, 264, 212, 238, 285, 0, 0, 0, 39, 168, 0, 0, 0];


export default class LineChart extends Component {
    // static navigationOptions = {
    //     title:  this.props.navigation.navigate.params.name,
    // }

    render() {
        const option = {
            title: {
                text: '电流'
            },
            tooltip: {
                trigger: 'axis'
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
            //     data: ['标准电压', '电压']
            // },
            xAxis: [
                {
                    type: 'category',
                    show: false,
                    // data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                    data: data
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    boundaryGap: ['20%', '20%'],
                    position: 'left',
                    axisLabel: {
                        formatter: '{value} A'
                    }
                },
                // {
                //     type: 'value',
                //     name: '安培',
                //     show: true,
                //     position: 'left',
                //     boundaryGap: ['20%', '20%'],
                //     axisLabel: {
                //         formatter: '{value} A'
                //     }
                // }, 
                {
                    type: 'value',
                    show: false,
                    position: 'right',
                    boundaryGap: ['20%', '20%'],
                    name: '安培',
                    axisLabel: {
                        formatter: '{value} A'
                    }
                }
            ],
            visualMap: {
                show: false,
                bottom: 20,
                right: 0,
                pieces: [{
                    gt: 0,
                    lte: 150,
                    color: '#096'
                }, {
                    gt: 150,
                    lte: 300,
                    color: '#ffde33'
                }, {
                    gt: 300,
                    lte: 450,
                    color: '#ff9933'
                }, {
                    gt: 450,
                    lte: 600,
                    color: '#cc0033'
                }, {
                    gt: 600,
                    color: '#7e0023'
                }],
                outOfRange: {
                    color: '#999'
                }
            },
            dataZoom: [{
                type: 'inside',
                start: 0,
                end: 100
            }],
            series: [

                {
                    name: '电压',
                    type: 'line',
                    yAxisIndex: 1,
                    // data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    data: data,
                    markPoint: {
                        data: [
                            { type: 'max', name: '最大值', symbol: 'diamond' },
                            { type: 'min', name: '最小值', symbol: 'arrow' }
                        ]
                    },
                    markLine: {
                        silent: true,
                        data: [{
                            yAxis: 150
                        },
                        {
                            yAxis: 300
                        }, {
                            yAxis: 450
                        }, {
                            yAxis: 600
                        }
                        ]
                    }
                }]
        };
        return (
            <Echarts option={option} height={300} />
        )
    }
}