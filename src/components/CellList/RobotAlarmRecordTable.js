import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  ListView,
  Image
} from 'react-native';
// import { Table } from 'antd-mobile';
var iconData = require('./data.json');
// import Icon from 'react-native-vector-icons/Ionicons';




export default class RobotAlarmRecordTable extends Component {
  constructor(props) {
    super(props);

    // 初始化getSectionData
    var getSectionData = (dataBlob, sectionID) => {
      return dataBlob[sectionID];
    };

    // 初始化getRowData
    var getRowData = (dataBlob, sectionID, rowID) => {
      return dataBlob[sectionID + ':' + rowID];
    };

    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      dataSource: new ListView.DataSource({
        getSectionData: getSectionData,
        getRowData: getRowData,
        rowHasChanged: (r1, r2) => r1 !== r2,
        sectionHeaderHasChanged: (s1, s2) => s1 !== s2
      })
    };
  }

  // 耗时、复杂操作放到这里处理
  componentDidMount() {
    // 加载数据
    this.loadData();
  }

  // 加载数据
  loadData() {
    // 拿到json数据中的数组
    var jsonData = iconData.data;
    // 定义变量
    var dataBlob = {},
      sectionIDs = [],
      rowIDs = [],
      icons = [];
    // 遍历数组中对应的数据并存入变量内
    for (var i = 0; i < jsonData.length; i++) {
      // 将组号存入 sectionIDs 中
      sectionIDs.push(i);
      // 将每组头部需要显示的内容存入 dataBlob 中
      dataBlob[i] = jsonData[i].title;
      // 取出该组所有的 icon
      icons = jsonData[i].icons;
      rowIDs[i] = [];
      // 遍历所有 icon
      for (var j = 0; j < icons.length; j++) {
        // 设置标识
        rowIDs[i].push(j);
        // 根据标识,将数据存入 dataBlob
        dataBlob[i + ':' + j] = icons[j];
      }
    }
    // 刷新dataSource状态
    this.setState({
      dataSource: this.state.dataSource.cloneWithRowsAndSections(dataBlob, sectionIDs, rowIDs)
    });
  }

  render() {
    return (
      <View style={styles.container}>
         {/*实例化顶部View*/}
        <View style={styles.topViewStyle}>
          <Text style={{ fontSize: 21 }}>工作站报警记录</Text>
        </View>
        {/*// 实例化ListView*/}
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderRow}
          renderSectionHeader={this.renderSectionHeader}
        />
      </View>
    );
  }

  // 返回一个Item   style={{ marginTop: 15, marginLeft: 10 }}
  renderRow(rowData, sectionID, rowID) {
    return (
      <View style={styles.itemStyle}>
        {/*<Image source={{ uri: rowData.icon }} style={{ width: 60, height: 60, marginTop: 10, marginLeft: 10 }}></Image>*/}
        <Text >机器人YH号:AR25407{'\n'}严重等级:SERVO{'\n'}报警信息:SRVO-003 Deadman switch released{'\n'}报警时间:2017-06-20T10:58:46</Text>
        {/*<Text >报警信息：SRVO-003 Deadman switch released</Text>*/}
        {/*<Text >报警时间：2017-06-20T10:58:46</Text>*/}
      </View>
    );
  }

  // 返回一个SectionHeader
  renderSectionHeader(sectionData, sectionID) {
    return (
      <Text style={{ backgroundColor: 'yellow' }}>{sectionData}</Text>
    );
  }
}
var styles = StyleSheet.create({
  container: {
    flex: 1
  },

  topViewStyle: {
    // 尺寸
    height: 44,
    // 边距
    marginTop: 20,
    // 对齐方式
    justifyContent: 'center',
    alignItems: 'center'
  },

  itemStyle: {
    // 尺寸
    height: 80,
    // 主轴方向
    flexDirection: 'row',
    // 下边框
    borderBottomWidth: 1,
    borderBottomColor: 'gray'
  },
})

// var styles = StyleSheet.create({
//   row: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     padding: 10,
//     backgroundColor: '#F6F6F6',
//   },
//   thumb: {
//     width: 64,
//     height: 64,
//   },
//   text: {
//     flex: 1,
//   },
// });
