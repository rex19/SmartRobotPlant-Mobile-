

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
} from 'react-native';
// import { StackNavigator } from 'react-navigation';

import TabNavigator from 'react-native-tab-navigator';
const TabNavigatorItem = TabNavigator.Item;

import Navbars from '../Navbar/index'
import About from '../About/index'
import TotalData from '../TotalData/index'
import CellData from '../CellData/index'
import CellList from '../CellList/index'

import LineChart from '../Echarts/LineChart'

const TAB_NORMAL_1 = require('../../images/1.png');
const TAB_NORMAL_2 = require('../../images/2.png');
const TAB_NORMAL_3 = require('../../images/3.jpg');
const TAB_NORMAL_4 = require('../../images/4.jpg');

const TAB_PRESS_1 = require('../../images/5.png');
const TAB_PRESS_2 = require('../../images/6.png');
const TAB_PRESS_3 = require('../../images/7.png');
const TAB_PRESS_4 = require('../../images/8.png');

export default class TabNavigatorItems extends Component {
    constructor() {
        super();
        this.state = {
            selectedTab: 'Home'
        }
    }

    // static navigationOptions = {
    //     title:  'HOME',
    // }

    /** 
    tab点击方法 
    **/
    onPress(tabName) {
        if (tabName === 'Home') {
            this.setState(
                {
                    selectedTab: tabName,
                    // tabContentTest: <TotalData />;
                }
            );
        } else if (tabName === 'Video') {
            this.setState(
                {
                    selectedTab: tabName,
                    // tabContentTest: <CellData />;
                }
            );
        }
        else if (tabName === 'Follow') {
            this.setState(
                {
                    selectedTab: tabName,
                    // tabContentTest: <CellData />;
                }
            );
        }
        else if (tabName === 'Mine') {
            this.setState(
                {
                    selectedTab: tabName,
                    // tabContentTest: <CellData />;
                }
            );
            // this.props.navigation.navigate('LineChart', { name: 'LineChart' })
        }
    }
    /** 
    渲染每项 
    **/
    renderTabView(title, tabName, tabContent, isBadge) {
        console.log('renderTabView ',title, tabName,)
        var tabNomal;
        var tabPress;
        switch (tabName) {
            case 'Home':
                console.log('Home')
                // let getMoviesFromApi = await crud.getMoviesFromApi();
                // console.log('getMoviesFromApi', getMoviesFromApi)
                tabNomal = TAB_NORMAL_3;
                tabPress = TAB_NORMAL_3;
                tabContentTest = <TotalData />;
                // tabContentTest = <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}><Text>{tabContent}</Text></View>;
                break;
            case 'Video':
                console.log('Video')
                tabNomal = TAB_PRESS_2;
                tabPress = TAB_PRESS_2;
                tabContentTest = <CellData  navigation={this.props.navigation} />;
                // tabContentTest = <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}><Text>{tabContent}</Text></View>;
                break;
            case 'Follow':
                console.log('Follow')
                tabNomal = TAB_PRESS_3;
                tabPress = TAB_PRESS_3;
                // tabContentTest = <CellList />;
                tabContentTest = <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}><Text>{tabContent}</Text></View>;
                break;
            case 'Mine':
                console.log('Mine')
                // this.props.navigation.navigate('TotalData', { name: 'TotalData' })
                tabNomal = TAB_PRESS_4;
                tabPress = TAB_PRESS_4;
                // tabContentTest = <RobotAlarmRecordTable />
                tabContentTest = <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}><Text>{tabContent}</Text></View>;
                break;
            default:

        }
        return (
            // <View>
               
                <TabNavigatorItem
                    title={title}
                    renderIcon={() => <Image style={styles.tabIcon} source={tabNomal} />}
                    renderSelectedIcon={() => <Image style={styles.tabIcon} source={tabPress} />}
                    selected={this.state.selectedTab === tabName}
                    selectedTitleStyle={{ color: '#f85959' }}
                    onPress={() => this.onPress(tabName)}
                    renderBadge={() => isBadge ? <View style={styles.badgeView}><Text style={styles.badgeText}>15</Text></View> : null}
                >
                    {tabContentTest}
                    {/*<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}><Text>{tabContentTest}</Text></View>*/}
                </TabNavigatorItem>
            // </View>

        );
    }

    /** 
    自定义tabbar 
    **/
    tabBarView() {
        return (
            <TabNavigator
                tabBarStyle={styles.tab}
                //sceneStyle={{paddingBottom:0}}
            >
                {this.renderTabView('车间', 'Home', '车间板块', true)}
                {this.renderTabView('工作站', 'Video', '工作站板块', false)}
                {this.renderTabView('接口1', 'Follow', '接口1板块', false)}
                {this.renderTabView('接口2', 'Mine', '接口2板块', false)}
            </TabNavigator>
        );
    }


    render() {
        // const { navigate } = this.props.navigation;
        var tabBarView = this.tabBarView();
        return (
            <View style={styles.container}>
                {/*<Navbars />*/}
                {tabBarView}
            </View>

            /*<View style={styles.container}>
              <Text style={styles.welcome}>
                Welcome to React Native!
              </Text>
              <Text style={styles.instructions}>
                To get started, edit index.android.js
              </Text>
              <Text style={styles.instructions}>
                Double tap R on your keyboard to reload,{'\n'}
                Shake or press menu button for dev menu
              </Text>
            </View>*/
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











import React, { Component } from 'react'
import {
    View,
    Text
} from 'react-native';
import { Modal, Button, WingBlank, WhiteSpace, List } from 'antd-mobile';
import LineChart from '../Echarts/LineChart'

const Item = List.Item;
export default class RobotWeldData extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false
        };
    }
    showModal = () => {
        console.log('showModal')
        this.setState({
            visible: true,
        });
    }
    onClose = () => {
        this.setState({
            visible: false,
        });
    }

    render() {

        return (
            <View>
                <WingBlank>
                    <Button onClick={this.showModal}>焊接参数</Button>
                </WingBlank>
                <LineChart />
                <LineChart />

                <Modal
                    transparent={false}
                    visible={this.state.visible}
                    animationType="slide-up"
                    onClose={this.onClose}
                >
                    <View style={{ paddingVertical: 220 }}>
                        <List renderHeader={() => '焊接参数'} className="my-list" >
                            <Item
                                multipleLine
                                platform="android"
                            >
                                工件序列号:
                    </Item>
                            <Item
                                multipleLine
                                platform="android"
                            >
                                焊缝号:
                    </Item>
                            <Item
                                multipleLine
                                platform="android"
                            >
                                开始时间:
                    </Item>
                            <Item
                                multipleLine
                                platform="android"
                            >
                                结束时间:
                    </Item>
                            <Item
                                multipleLine
                                platform="android"
                            >
                                采集周期:
                    </Item>
                            <Item
                                multipleLine
                                platform="android"
                            >
                                电压标准值:
                    </Item>
                            <Item
                                multipleLine
                                platform="android"
                            >
                                电压上下限波动(%):
                    </Item>
                            <Item
                                multipleLine
                                platform="android"
                            >
                                电流标准值:
                    </Item>
                            <Item
                                multipleLine
                                platform="android"
                            >
                                电流上下限波动(%):
                    </Item>
                            <Item
                                multipleLine
                                platform="android"
                            >
                                质量状态:
                    </Item>
                            <Item
                                multipleLine
                                platform="android"
                            >
                                数据上传时间:
                    </Item>
                        </List>
                    </View>
                    <Button type="primary" inline onClick={this.onClose}>close modal</Button>
                </Modal>

            </View>
        )
    }
}
