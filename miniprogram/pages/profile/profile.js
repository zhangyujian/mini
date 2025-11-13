Page({
  data: {
    user: {
      name: 'Hi, Global Member',
      avatar:
        'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=240&q=80',
      level: 'Ambassador Tier',
      benefits: ['Early access drops', 'Priority customs support', 'Birthday exclusives']
    },
    shortcuts: [
      {
        id: 'orders',
        title: 'Order history',
        description: 'Track shipments and download invoices'
      },
      {
        id: 'coupons',
        title: 'Rewards & coupons',
        description: '2 rewards ready to redeem'
      },
      {
        id: 'address',
        title: 'Shipping addresses',
        description: 'Manage global delivery locations'
      }
    ],
    guides: [
      {
        title: 'How do I earn rewards?',
        content: 'Complete purchases, refer friends, and share campaign links to collect reward points redeemable at checkout.'
      },
      {
        title: 'International returns policy',
        content: 'You have 30 days from delivery to request a return. Our concierge team will arrange region-specific pickup labels.'
      }
    ]
  },

  onShortcutTap(event) {
    const { id } = event.currentTarget.dataset;
    wx.showToast({
      title: `${id} coming soon`,
      icon: 'none'
    });
  },

  contactService() {
    wx.showModal({
      title: 'Global concierge',
      content: 'Email support@globalshop.example or reach us on WhatsApp +1-202-555-0199 for 24/7 assistance.'
    });
  }
});
