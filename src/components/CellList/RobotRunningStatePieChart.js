import React, { Component } from 'react'
import {
    View,
    Text,
    ScrollView
} from 'react-native';
import PieChart from '../Echarts/PieChart'


export default class RobotRunningStatePieChart extends Component {

    render() {
        return (
            <View>
                <ScrollView>
                    <Text>机器人运行状态饼图</Text>
                    <PieChart />
                    <Text>机器人开动率饼图</Text>
                    <PieChart />
                </ScrollView>
            </View>
        )
    }
}
