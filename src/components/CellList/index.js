import React, { Component } from 'react'

import { Button, List } from 'antd-mobile';
import {
    View,
    Text
} from 'react-native';

import { TodayRobotOutputsUrl } from '../../unit/Fetch.js'

const Item = List.Item;
const Brief = Item.Brief;

export default class CellList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            TodayRobotOutputs: 0
        }
    }


    componentDidMount() {
        // console.log('CellList 打印', this.props.navigation.state.params.CellNo, )
        // fetch('http://dsm.smart-flow.cn:7001/FANUC/api/TodayRobotOutputs/'+ this.props.navigation.state.params.CellNo, { methon: "GET" })
        fetch(TodayRobotOutputsUrl + this.props.navigation.state.params.CellNo, { methon: "GET" })
            .then((response) => {
                return response.json();
            })
            .then((responseJson) => {
                this.setState({ TodayRobotOutputs: responseJson.OutputsQuantity })
            })
            .catch((error) => {
                alert('error::', error)
            }).done();
    }

    render() {
        // console.log('this.state.TodayRobotOutputs', this.state.TodayRobotOutputs)
        const { navigate } = this.props.navigation;
        return (
            <View>
                {/*<Button className="btn" type="primary" onClick={e => console.log(e)}>Rex--Start</Button>*/}
                <List renderHeader={() => '工作站详细信息'} className="my-list">
                    <Item multipleLine>
                        OEE <Brief>80%</Brief>
                    </Item>
                    <Item
                        multipleLine
                        platform="android"
                    >
                        产量<Brief>{this.state.TodayRobotOutputs}</Brief>
                    </Item>
                    <Item
                        arrow="horizontal"
                        thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
                        multipleLine
                        onClick={() => { navigate('RobotRunningStatePieChart', { name: 'RobotRunningStatePieChart' }) }}
                    >
                        机器人运行状态/开动率 <Brief>饼图</Brief>
                    </Item>
                    <Item
                        arrow="horizontal"
                        thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
                        multipleLine
                        onClick={() => { navigate('RobotAlarmAndProductionTypePieCharts', { name: 'RobotAlarmAndProductionTypePieCharts' }) }}
                    >
                        机器人报警类型/产品分布 <Brief>饼图</Brief>
                    </Item>
                    <Item
                        arrow="horizontal"
                        thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
                        multipleLine
                        onClick={() => { navigate('RobotDayAndSevenDayOutputsBarCharts', { name: 'RobotDayAndSevenDayOutputsBarCharts' }) }}
                    >
                        工作站当天/最近7天产量 <Brief>柱形图</Brief>
                    </Item>
                    <Item
                        arrow="horizontal"
                        thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
                        multipleLine
                        onClick={() => { navigate('RobotDayDowntimeBarCharts', { name: 'RobotDayDowntimeBarCharts' }) }}
                    >
                        工作站当天停机记录 <Brief>柱形图</Brief>
                    </Item>
                    <Item
                        arrow="horizontal"
                        thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
                        multipleLine
                        onClick={() => { navigate('RobotAlarmRecordTable', { name: 'RobotAlarmRecordTable' }) }}
                    >
                        机器人实时报警信息 <Brief>表格</Brief>
                    </Item>
                    <Item
                        arrow="horizontal"
                        thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
                        multipleLine
                        onClick={() => { navigate('RobotWeldData', { name: 'RobotWeldData', CellNo: this.props.navigation.state.params.CellNo }) }}
                    >
                        机器人焊接实时数据 <Brief>趋势图</Brief>
                    </Item>
                </List>
            </View>
        )
    }
}
