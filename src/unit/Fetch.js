
let IP = 'dsm.smart-flow.cn'
let Post = '7001'
let Api = 'FANUC/api'

// let TodayRobotOutputsUrl = 'http://dsm.smart-flow.cn:7001/FANUC/api/TodayRobotOutputs/'
let TodayRobotOutputsUrl = `http://${IP}:${Post}/${Api}/TodayRobotOutputs/`

let RobotWeldDataUrl = `http://${IP}:${Post}/${Api}/UnitMeasurementHistory/`

export {
    TodayRobotOutputsUrl, RobotWeldDataUrl
}
