import React, { Component } from 'react'

import { Card, WingBlank, WhiteSpace, Button } from 'antd-mobile';
import {
    View,
    Text,
    ScrollView
} from 'react-native';

export default class TotalData extends Component {


    render() {
        return (
            <View>
                <ScrollView>
                    <WingBlank size="lg">
                        <WhiteSpace size="lg" />
                        {/*<Button className="btn" type="primary" onClick={e => console.log(e)}>Rex--Start</Button>*/}
                        <Card>
                            <Card.Header
                                title="产量"
                                thumbStyle={{ width: 30, height: 30 }}
                                extra="this is extra"
                            />
                            <Card.Body>
                                <View style={{ height: 42 }}>
                                    <Text style={{ marginLeft: 16, fontSize: 26 }}>4000</Text>
                                </View>
                            </Card.Body>
                        </Card>
                        <WhiteSpace size="lg" />
                    </WingBlank>
                    <WingBlank size="lg">
                        <WhiteSpace size="lg" />
                        <Card>
                            <Card.Header
                                title="设备开动率"
                                thumbStyle={{ width: 30, height: 30 }}
                                extra="this is extra"
                            />
                            <Card.Body>
                                <View style={{ height: 42 }}>
                                    <Text style={{ marginLeft: 16, fontSize: 26 }}>75%</Text>
                                </View>
                            </Card.Body>
                        </Card>
                        <WhiteSpace size="lg" />
                    </WingBlank>
                    <WingBlank size="lg">
                        <WhiteSpace size="lg" />
                        <Card>
                            <Card.Header
                                title="计划完成率"
                                thumbStyle={{ width: 30, height: 30 }}
                                extra="this is extra"
                            />
                            <Card.Body>
                                <View style={{ height: 42 }}>
                                    <Text style={{ marginLeft: 16, fontSize: 26 }}>65%</Text>
                                </View>
                            </Card.Body>
                        </Card>
                        <WhiteSpace size="lg" />
                    </WingBlank>
                    <WingBlank size="lg">
                        <WhiteSpace size="lg" />
                        <Card>
                            <Card.Header
                                title="安全生产时间"
                                thumbStyle={{ width: 30, height: 30 }}
                                extra="this is extra"
                            />
                            <Card.Body>
                                <View style={{ height: 42 }}>
                                    <Text style={{ marginLeft: 16, fontSize: 26 }}>75日</Text>
                                </View>
                            </Card.Body>
                        </Card>
                        <WhiteSpace size="lg" />
                    </WingBlank>
                </ScrollView>
            </View>
        )
    }
}


// import React, { Component } from 'react'

// import { Button } from 'antd-mobile';


// export default class TotalData extends Component {

//     render() {
//         return (
//                 <Button className="btn" type="primary" onClick={e => console.log(e)}>Rex--Start</Button>
//             )
//     }
// }
