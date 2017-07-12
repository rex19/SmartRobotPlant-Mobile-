import React, { Component } from 'react'
import { NavBar, Icon } from 'antd-mobile';
import {
    View,
    Text
} from 'react-native';


export default class Navbars extends Component {

    render() {
        return (
            <View>
                {/*<Text>11</Text>*/}
                <NavBar
                    leftContent="back"
                    mode="light"
                    onLeftClick={() => console.log('onLeftClick')}
                    rightContent={[
                        <Icon key="0" type="search" style={{ marginRight: '0.32rem' }} />,
                        <Icon key="1" type="ellipsis" />,
                    ]}
                >NavBar</NavBar>
            </View>
        )
    }
}
