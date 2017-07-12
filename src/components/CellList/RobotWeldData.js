import React, { Component } from 'react'
import {
    View,
    Text,
    ScrollView
} from 'react-native';
// import { Modal, Button, WingBlank, WhiteSpace, List } from 'antd-mobile';
import { RobotWeldDataUrl } from '../../unit/Fetch.js'
import { Popup, List, Button, InputItem } from 'antd-mobile';
import LineChart from '../Echarts/LineChart'

const Item = List.Item;


class PopupContent extends React.Component {
    state = {
        sel: '',
    };
    onSel = (sel) => {
        this.setState({ sel });
        this.props.onClose();
    };
    render() {
        return (
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
        );
    }
}


export default class RobotWeldData extends Component {


    componentDidMount() {
        console.log('RobotWeldData 打印', this.props.navigation.state.params.CellNo, )
        fetch(RobotWeldDataUrl + this.props.navigation.state.params.CellNo, { methon: "GET" })
            .then((response) => {
                return response.json();
            })
            .then((responseJson) => {
                console.log('responseJson', responseJson)
                // this.setState({ TodayRobotOutputs: responseJson.OutputsQuantity })
            })
            .catch((error) => {
                alert('error::', error)
            }).done();
    }

    onMaskClose = () => {
        console.log('onMaskClose');
    };
    onClick = (e) => {
        e.preventDefault(); // 修复 Android 上点击穿透
        Popup.show(<PopupContent onClose={() => Popup.hide()} />, this.onMaskClose());
    };
    render() {
        return (
            <View >
                <ScrollView>
                    <Button onClick={this.onClick}>显示参数</Button>
                    <LineChart />
                    <LineChart />
                </ScrollView>
            </View>
        );
    }

};