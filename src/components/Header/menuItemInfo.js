import { HEADER_MENU_TYPE } from '@/utils/constant';

const menuItemInfo = [
  {
    title: 'Systems',
    url: '/',
    mode: HEADER_MENU_TYPE.NORMAL,
    submenu: [
      { title: 'System overview', url: '/systems' },
      { title: 'BASWA Home', url: '/worth-knowing/baswa-living/' },
      { title: 'BASWA Commercial', url: '/worth-knowing/baswa-commercial/' },
      { title: 'Worth Knowing', url: '/worth-knowing/' },
      { title: 'Downloads', url: '/documentation-downloads/' },
    ],
  },

  {
    title: 'About us',
    url: '/',
    mode: HEADER_MENU_TYPE.NORMAL,
    submenu: [
      { title: 'About us', url: '/about-us' },
      { title: 'Team', url: '/about-us/team' },
      { title: 'Location', url: '/about-us/locations' },
      { title: 'Career', url: '/about-us/career' },
      { title: 'Intstaller', url: '/about-us/installer' },
    ],
  },
  {
    title: 'Reference',
    url: '/reference',
    mode: HEADER_MENU_TYPE.NORMAL,
    submenu: [],
  },
  {
    title: 'Healthy Architecture',
    url: '/worth-knowing/healthyarchitecture',
    mode: HEADER_MENU_TYPE.NORMAL,
    submenu: [],
  },
  {
    title: 'Contact',
    url: '/contact',
    mode: HEADER_MENU_TYPE.NORMAL,
    submenu: [],
  },
  {
    title: 'Order sample',
    mode: HEADER_MENU_TYPE.MODAL,
    url: '',
    submenu: [],
  },

  {
    title: 'EN',
    mode: HEADER_MENU_TYPE.LANGUAGE,

    url: '',
    submenu: [{ title: 'DE' }, { title: 'FR' }],
  },
];

export default menuItemInfo;
