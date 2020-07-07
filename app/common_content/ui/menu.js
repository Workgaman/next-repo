module.exports = [
  {
    key: 'home',
    name: 'Home',
    icon: 'home',
    link: '/app',

    child: [
      {
        key: 'dashboard',
        name: 'Dashboard',
        title: true,
      },
      {
        key: 'personal',
        name: 'Analytic',
        icon: 'settings_brightness',
        link: '/app'
      },
      {
        key: 'crm',
        name: 'Marketing',
        icon: 'settings_system_daydream',
        link: '/app/marketing-dashboard'
      },
   
    

    ]
  },
  
  {
    key: 'setting',
    name: 'Setting',
    icon: 'settings',
    isShown:"setting",
    link: '/app/question-bank',
    child: [
        {
        key: 'Question Bank management',
        name: 'Question Bank management',
        icon: 'perm_contact_calendar',
        link: '/app/question-bank'
      },
        {
        key: 'Reward Type',
        name: 'Reward Type',
        icon: 'perm_contact_calendar',
        link: '/app/reward-type'
      },
      {
        key: 'Category Management',
        name: 'Category Management',
        icon: 'perm_contact_calendar',
        link: '/app/category-management'
      },
      {
        key: 'Contest Property Management',
        name: 'Contest Property Management',
        icon: 'perm_contact_calendar',
        link: '/app/contest-property-management'
      },
      {
        key: 'Master Question Bank',
        name: 'Master Question Bank',
        icon: 'perm_contact_calendar',
        link: '/app/master-question-bank'
      },
    ]
  },
  {
    key: 'Text Trivia',
    name: 'Text Trivia',
    icon: 'widgets',
    isShown:"isOTT",

    link: '/app/manage-contest',
    child: [
      {
        key: ' Text Trivia',
        name: ' Text Trivia',
        title: true,
      },
      
      {
        key: 'Manage Contest',
        name: 'Manage Contest',
        icon: 'perm_contact_calendar',
        link: '/app/manage-contest'
      },
      {
        key: 'Expired Contest',
        name: 'Expired Contest',
        icon: 'perm_contact_calendar',
        link: '/app/expired-contest'
      }
    ]
  },
  {
    key: 'Scratch & Win',
    name: 'Scratch & Win',
    icon: 'touch_app',
    isShown:"isSNW",

    link: '/app/scratch-contest',
    child: [
      {
        key: ' Scratch &  Win',
        name: ' Scratch &  Win',
        title: true,
      },
      
      {
        key: 'Manage Contest',
        name: 'Manage Contest',
        icon: 'perm_contact_calendar',
        link: '/app/scratch-contest'
      },
      {
        key: 'Expired Contest',
        name: 'Expired Contest',
        icon: 'perm_contact_calendar',
        link: '/app/scratch-expired'
      }
    ]

  },
  {
    key: 'Live Trivia',
    name: 'Live Trivia',
    icon: 'live_tv',
    isShown:"isLIVE",
    link: '/app/live-contest',
      child: [
      {
        key: ' Live Trivia',
        name: ' Live Trivia',
        title: true,
      },
      
      {
        key: 'Manage Contest',
        name: 'Manage Contest',
        icon: 'perm_contact_calendar',
        link: '/app/live-contest'
      },
      {
        key: 'Expired Contest',
        name: 'Expired Contest',
        icon: 'perm_contact_calendar',
        link: '/app/live-expired'
      },
      {
        key: 'Todays Contest',
        name: 'Todays Contest',
        icon: 'perm_contact_calendar',
        link: '/app/live-todays'
      }
    ]
  },
  
  {
    key: 'Shoppable',
    name: 'Shoppable',
    icon: 'shopping_cart',
    link: '/app/manage-merchant',
    isShown:"isSHOP",

    child: [
       {
        key: ' Shoppable',
        name: ' Shoppable',
        title: true,
      },
      {
        key: 'Manage Merchant',
        name: 'Manage Merchant',
        icon: 'perm_contact_calendar',
        link: '/app/manage-merchant'
      }]
  },
  {
    key: 'Fan Club',
    name: 'Fan Club',
    icon: 'people',
    link: '/app',
    child: []
  },
   {
    key: 'Challenge Games',
    name: 'Challenge Games',
    icon: 'videogame_asset',
    link: '/app',
    isShown:"isCHALLANGE",
    child: []
  },
   {
    key: 'Video Trivia',
    name: 'Video Trivia',
    icon: 'ondemand_video',
    isShown:"isVIDEO",
    link: '/app',
    child: []
  },
  {
    key: 'KYC',
    name: 'KYC',
    icon: 'all_inclusive',
    link: '/app',
    child: []
  }
];
