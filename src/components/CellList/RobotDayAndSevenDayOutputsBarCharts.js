import React, { Component } from 'react'
import {
    View,
    Text,
    ScrollView
} from 'react-native';
import BarChart from '../Echarts/BarChart'


export default class RobotDayAndSevenDayOutputsBarCharts extends Component {

    render() {
        return (
            <View>
                <ScrollView>
                    <Text>工作站当天产量</Text>
                    <BarChart />
                    <Text>工作站最近七天产量</Text>
                    <BarChart />
                </ScrollView>
            </View>
        )
    }
}
