// pages/first/first.ts
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //存放轮播图数据的列表
    swiperList: [],
    urlImg: [{
      index: 1,
      urlImage:
        'https://k.sinaimg.cn/n/default/1_img/upload/3933d981/799/w1014h585/20230913/4426-84f2d2c5e6fbec4072f420635aa53a84.jpg/w710h400z1l50t1q75138.jpg?by=comos'
    },
    {
      index: 2,
      urlImage:
        'https://k.sinaimg.cn/n/default/1_img/upload/3933d981/80/w1024h656/20230913/4da2-d894e74472e704d2b82ad3dcde168101.jpg/w640slw.jpg'
    }],
    //存放九宫格数据列表
    gridList: [] as { index: number; name: string }[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
    this.getSwiperList()
    this.getGridList()
  },
  //获取轮播图数据的方法
  getSwiperList() {
    wx.request({
      url: 'https://www.escook.cn/slides',
      method: 'GET',
      success: (res) => {
        console.log(res)
        this.setData({
          SwiperList: this.data.urlImg
        })
        //console.log(this.data.swiperList)
      }
    })
  },
  //获取九宫格数据方法
  getGridList() {
    wx.request({
      url: 'https://www.escook.cn/categories',
      method: 'GET',
      success: (res) => {
        console.log(res)
        const gridList = [{
          index: 1,
          name: "h1"
        }, {
          index: 2,
          name: "h2"
        },
        {
          index: 3,
          name: "h3"
        },
        {
          index: 4,
          name: "h4"
        }]
        this.setData({
          gridList: gridList
        })
      }
    })
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