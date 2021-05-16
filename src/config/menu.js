const menuConfig = [{
  title: '数据处理',
  icon: 'el-icon-data-board',
  path: 'data',
  group: [{
    title: 'url处理',
    path: 'url',
    childen: [{
      title: 'decode',
      path: '/url/decode'
    }, {
      title: 'encode',
      path: '/url/encode'
    }],
  }, {
    title: '接口处理',
    path: 'api',
    childen: [{
      title: '返回结果',
      path: '/api/response'
    }, {
      title: '请求参数',
      path: '/api/request'
    }],
  }],
}];



export default menuConfig;