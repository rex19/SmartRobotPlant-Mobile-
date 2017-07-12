import React, { Component } from 'react'
import {
    View,
    Text,
    ScrollView
} from 'react-native';
import BarChart from '../Echarts/BarChart'


export default class RobotDayDowntimeBarCharts extends Component {

    render() {
        return (
            <View>
                <ScrollView>
                    <Text>机器人当天停机类型</Text>
                    <BarChart />
                </ScrollView>
            </View>
        )
    }
}
