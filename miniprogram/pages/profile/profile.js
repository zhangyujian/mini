Page({
  data: {
    user: {
      name: 'Hi, Mini 会员',
      avatar:
        'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=240&q=80',
      level: '黑金会员',
      benefits: ['每月专属礼包', '贵宾客服', '生日礼遇']
    },
    shortcuts: [
      {
        id: 'orders',
        title: '我的订单',
        description: '查看全部订单记录'
      },
      {
        id: 'coupons',
        title: '优惠券',
        description: '3 张待使用优惠券'
      },
      {
        id: 'address',
        title: '收货地址',
        description: '管理默认地址'
      }
    ],
    guides: [
      {
        title: '如何获得积分？',
        content: '完成订单、参与签到活动即可获得积分，可用于抵扣现金。'
      },
      {
        title: '售后服务流程',
        content: '7 天无理由退换，申请售后后专属客服将在 2 小时内联系你。'
      }
    ]
  },

  onShortcutTap(event) {
    const { id } = event.currentTarget.dataset;
    wx.showToast({
      title: `${id} 功能待上线`,
      icon: 'none'
    });
  },

  contactService() {
    wx.showModal({
      title: '联系客服',
      content: '拨打 400-888-1234 或通过小程序客服入口与我们联系。'
    });
  }
});
