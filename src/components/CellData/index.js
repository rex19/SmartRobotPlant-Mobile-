import React, { Component } from 'react'

import { Button, Carousel, Grid, List } from 'antd-mobile';
import { StyleSheet, Text, View, ViewStyle, ScrollView } from 'react-native';
// import TabNavigatorItems from '../TabNavigatorItems/index'
import Tab from '../Tab/index'

// const data = Array.from(new Array(12)).map((_val, i) => ({
//     icon: 'https://os.alipayobjects.com/rmsportal/IptWdCkrtkAUfjE.png',
//     text: `工作站${i}`,
// }));
const data = [
    {
        icon: 'https://os.alipayobjects.com/rmsportal/IptWdCkrtkAUfjE.png',
        text: `工作站0`,
    },
    {
        icon: 'https://os.alipayobjects.com/rmsportal/IptWdCkrtkAUfjE.png',
        text: `工作站1`,
    },
    {
        icon: 'https://os.alipayobjects.com/rmsportal/IptWdCkrtkAUfjE.png',
        text: `工作站2`,
    },
    {
        icon: 'https://os.alipayobjects.com/rmsportal/IptWdCkrtkAUfjE.png',
        text: `工作站3`,
    },
    {
        icon: 'https://os.alipayobjects.com/rmsportal/IptWdCkrtkAUfjE.png',
        text: `工作站4`,
    },
    {
        icon: 'https://os.alipayobjects.com/rmsportal/IptWdCkrtkAUfjE.png',
        text: `工作站5`,
    },
    {
        icon: 'https://os.alipayobjects.com/rmsportal/IptWdCkrtkAUfjE.png',
        text: `工作站6`,
    },
    {
        icon: 'https://os.alipayobjects.com/rmsportal/IptWdCkrtkAUfjE.png',
        text: `工作站7`,
    },
    {
        icon: 'https://os.alipayobjects.com/rmsportal/IptWdCkrtkAUfjE.png',
        text: `工作站8`,
    },
    {
        icon: 'https://os.alipayobjects.com/rmsportal/IptWdCkrtkAUfjE.png',
        text: `工作站9`,
    },
    {
        icon: 'https://os.alipayobjects.com/rmsportal/IptWdCkrtkAUfjE.png',
        text: `工作站10`,
    },
    {
        icon: 'https://os.alipayobjects.com/rmsportal/IptWdCkrtkAUfjE.png',
        text: `工作站11`,
    }
]





export default class CellData extends Component {
    onselectedIndexChange(index) {
        /* tslint:disable: no-console */
        console.log('change to', index);
    }

    handleClickStation(_el, index) {
        // alert(index)
        this.props.navigation.navigate('CellList', { CellNo: index })
    }

    render() {
        // const { navigate } = this.props.navigation;
        return (
            <View>
                <View style={{ marginTop: 30 }}>
                    <View style={{ paddingHorizontal: 15 }}>
                        <Carousel
                            autoplayTimeout={2}
                            vertical
                            dots={false}
                            dragging={false}
                            swiping={false}
                            autoplay
                            infinite
                        >
                            <View style={{ backgroundColor: 'red' }}>
                                <Text style={{ fontSize: 22 }}>Robot1故障</Text>
                            </View>
                            <View style={{ backgroundColor: 'red' }}>
                                <Text style={{ fontSize: 22 }}>Robot2故障</Text>
                            </View>
                        </Carousel>
                    </View>


                    <ScrollView>
                        <View style={[{ margin: 10 }]}><Text>工作站</Text></View>
                        <Grid data={data} columnNum={3} isCarousel carouselMaxRow={4} onClick={this.handleClickStation.bind(this)}
                           
                        />
                    </ScrollView>

                    {/*<TabNavigatorItems />     onClick={(_el, index) => alert(index)}*/}
                </View>
                {/*<Tab style={styles.tab} component={<Text> CellData</Text>} navigate={navigate} />*/}
            </View>
        )
    }
}
const styles = StyleSheet.create({
    tab: {
        bottom: 0
    }
});