Page({
  data: {
    currentIndex: 0
  },

  onLoad: function() {
    // 页面加载时的逻辑
  },

  // 切换轮播图
  changeSlider: function(e) {
    this.setData({
      currentIndex: e.detail.current
    })
  },

  // 克隆按钮点击事件
  handleClone: function() {
    wx.showToast({
      title: '克隆成功',
      icon: 'success'
    })
  },

  // 分享按钮点击事件
  handleShare: function() {
    wx.showShareMenu({
      withShareTicket: true,
      menus: ['shareAppMessage', 'shareTimeline']
    })
  }
}) 