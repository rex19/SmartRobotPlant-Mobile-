
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';
import { StackNavigator } from 'react-navigation';

import TabNavigator from 'react-native-tab-navigator';
const TabNavigatorItem = TabNavigator.Item;


import TabNavigatorItems from './src/components/TabNavigatorItems/index'
import Navbars from './src/components/Navbar/index'
import About from './src/components/About/index'
import TotalData from './src/components/TotalData/index'
import CellData from './src/components/CellData/index'
import CellList from './src/components/CellList/index'

import LineChart from './src/components/Echarts/LineChart'
import RobotRunningStatePieChart from './src/components/CellList/RobotRunningStatePieChart'
import RobotAlarmAndProductionTypePieCharts from './src/components/CellList/RobotAlarmAndProductionTypePieCharts'
import RobotDayAndSevenDayOutputsBarCharts from './src/components/CellList/RobotDayAndSevenDayOutputsBarCharts'
import RobotDayDowntimeBarCharts from './src/components/CellList/RobotDayDowntimeBarCharts'
import RobotWeldData from './src/components/CellList/RobotWeldData'
import RobotAlarmRecordTable from './src/components/CellList/RobotAlarmRecordTable'
// import LineChart from './src/components/Chart/lineChart'

// import CRUD from './src/unit/Fetch';
// const crud = new CRUD();



export default class SecondProject extends Component {


  render() {
    // const { navigate } = this.props.navigation;
    // var tabBarView = this.tabBarView();   ./src/images/1.png
    return (
      <View style={styles.container}>
        {/*<Text>11</Text>*/}
        <TabNavigatorItems navigation={this.props.navigation} />
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  tab: {
    height: 52,
    alignItems: 'center',
    backgroundColor: '#f4f5f6',
  },
  tabIcon: {
    width: 25,
    height: 25,
  },
  badgeView: {
    width: 22,
    height: 14,
    backgroundColor: '#f85959',
    borderWidth: 1,
    marginLeft: 10,
    marginTop: 3,
    borderColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },
  badgeText: {
    color: '#fff',
    fontSize: 8,
  }
});

const MainScreen = StackNavigator({
  SecondProject: { screen: SecondProject }, //main
  About: { screen: About },
  TotalData: {
    screen: TotalData,
    navigationOptions: ({ navigation }) => ({
      title: navigation.state.params.name,
      headerTitleStyle: {
        alignSelf: 'center'
      }
    }),
  },
  CellData: { screen: CellData },
  CellList: {
    screen: CellList,
    navigationOptions: ({ navigation }) => ({
      title: '工作站'+navigation.state.params.CellNo,
      headerTitleStyle: {
        alignSelf: 'center'
      }
    }),
  },
  LineChart: {
    screen: LineChart,
    navigationOptions: ({ navigation }) => ({
      title: navigation.state.params.name,
      headerTitleStyle: {
        alignSelf: 'center'
      }
    }),
  },
  RobotRunningStatePieChart: { screen: RobotRunningStatePieChart },
  RobotAlarmAndProductionTypePieCharts: { screen: RobotAlarmAndProductionTypePieCharts },
  RobotDayAndSevenDayOutputsBarCharts: { screen: RobotDayAndSevenDayOutputsBarCharts },
  RobotDayDowntimeBarCharts: { screen: RobotDayDowntimeBarCharts },
  RobotAlarmRecordTable: { screen: RobotAlarmRecordTable },
  RobotWeldData: { screen: RobotWeldData }
});

AppRegistry.registerComponent('SecondProject', () => MainScreen);




