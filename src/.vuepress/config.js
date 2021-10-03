// Константы с роутами к страницам
const PAGE_VUE = '/pages/vue/';
const PAGE_REACT = '/pages/react/';

// Ссылки на разделы
const NAV = [
  {
    text: 'Vue.js',
    link: PAGE_VUE
  },
  {
    text: 'React.js',
    link: PAGE_REACT
  },
];
// Ссылки внутри раздела
const SIDEBAR = {
  [PAGE_VUE]: [
    {
      title: 'Информация',
      children: [
        ['info', 'Vue.js'],
      ]
    }
  ],
  [PAGE_REACT]: [
    {
      title: 'Информация',
      children: [
        ['info', 'React.js'],
      ]
    }
  ]
};
module.exports = {
  themeConfig: {
    nav: NAV,
    sidebar: SIDEBAR
  },
  base: "/elena-site/"
};
