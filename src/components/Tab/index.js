import React from 'react';
// import {
//   AppRegistry,
//   StyleSheet,
//   Text,
//   View,
//   Button
// } from 'react-native';
import {
    Text,
    StyleSheet
} from 'react-native';
import { TabBar, Icon } from 'antd-mobile';
// import 'tab'
/* eslint global-require: 0 */



export default class Tab extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'redTab',
            hidden: false,
        };
    }


    renderContent(pageText) {
        return (
            <div style={{ backgroundColor: 'white', height: '100%', textAlign: 'center' }}>
                <div style={{ paddingTop: 60 }}>你已点击“{pageText}” tab， 当前展示“{pageText}”信息</div>
                <a style={{ display: 'block', marginTop: 40, marginBottom: 600, color: '#108ee9' }}
                    onClick={(e) => {
                        e.preventDefault();
                        this.setState({
                            hidden: !this.state.hidden,
                        });
                    }}
                >
                    点击切换 tab-bar 显示/隐藏
         </a>
            </div>
        );
    }

    render() {
        let component = this.props.component
        const navigate = this.props.navigate;

        console.log('navigate', navigate);

        console.log('component', component);

        return (

            <TabBar
                unselectedTintColor="#949494"
                tintColor="#33A3F4"
                barTintColor="white"
                hidden={this.state.hidden}
                style={
                    styles.tab
                }
            >
                <TabBar.Item
                    title="生活"
                    key="生活"
                    icon={<div style={{
                        width: '0.44rem',
                        height: '0.44rem',
                        background: 'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  0.42rem 0.42rem no-repeat'
                    }}
                    />
                    }
                    selectedIcon={<div style={{
                        width: '0.44rem',
                        height: '0.44rem',
                        background: 'url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  0.42rem 0.42rem no-repeat'
                    }}
                    />
                    }
                    selected={this.state.selectedTab === 'blueTab'}
                    badge={1}
                    onPress={() => {
                        console.log('component', component);
                        this.setState({
                            selectedTab: 'blueTab',
                        });
                        navigate('Main')
                    }}
                    data-seed="logId"
                >
                    <Text title="main" > </Text>

                </TabBar.Item>
                <TabBar.Item
                    title="生活"
                    key="生活"
                    icon={<div style={{
                        width: '0.44rem',
                        height: '0.44rem',
                        background: 'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  0.42rem 0.42rem no-repeat'
                    }}
                    />
                    }
                    selectedIcon={<div style={{
                        width: '0.44rem',
                        height: '0.44rem',
                        background: 'url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  0.42rem 0.42rem no-repeat'
                    }}
                    />
                    }
                    selected={this.state.selectedTab === 'redTab'}
                    badge={1}
                    onPress={() => {
                        console.log('component', component);
                        this.setState({
                            selectedTab: 'redTab',
                        });
                        navigate('CellData')
                    }}
                    data-seed="logId"
                >
                    {component}
                </TabBar.Item>

            </TabBar>

        )
    }
}

const styles = StyleSheet.create({
    tab: {
        bottom: 0 ,
    }
});
