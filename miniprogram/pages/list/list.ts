// pages/list/list.ts
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userList: [
      { id: 1, name: '小红' },
      { id: 2, name: '小白' },
      { id: 3, name: '小蓝' }
    ],
    arr1: ['apple', 'banana', 'pear'],
    sex: 1,
    info: 'init data',
    msgList: [{ msg: 'hello' }, { msg: 'world' }],
    imgSrc: 'http://www.itheima.com/images/logo.png',
    randomNum: Math.random().toFixed(2) * 10,
    count: 0,
    msg: '你好！'
  },
  getInfo() {
    wx.request({
      url: 'https://www.escook.cn/api/get',
      method: 'GET',
      data: {
        name: 'zs',
        age: 20
      },
      success: (res) => {
        console.log(res.data)
      }
    })
  },
  postInfo() {
    wx.request({
      url: 'https://www.escook.cn/api/post',
      method: 'POST',
      data: {
        name: 'ls',
        age: 33
      },
      success: (res) => {
        console.log(res.data)
      }
    })
  },
  //输入框的函数
  inputHandler(e) {
    this.setData({
      msg: e.detail.value
    })
    console.log(e.detail.value)
  },
  btnTapHandler(e) {
    console.log(e)
  },
  changeCount(e) {
    this.setData({
      count: this.data.count + 1
    })
    console.log('ok')
    console.log(e.target.dataset.number)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
    this.getInfo()
    this.postInfo()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})