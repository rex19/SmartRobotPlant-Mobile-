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
                    <Text>机器人报警类型饼图</Text>
                    <PieChart />
                    <Text>机器人产品分布饼图</Text>
                    <PieChart />
                </ScrollView>
            </View>
        )
    }
}
