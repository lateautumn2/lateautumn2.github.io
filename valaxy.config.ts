import {defineValaxyConfig} from 'valaxy'
import type { UserThemeConfig } from 'valaxy-theme-yun'
import { addonWaline } from 'valaxy-addon-waline'

/**
 * User Config
 * do not use export const
 */
export default defineValaxyConfig<UserThemeConfig>  ({
  theme: 'yun',

  themeConfig: {
    bg_image: {
      enable: true,
      dark: '/image/dark.jpg',
      url:  '/image/auto.jpg',
    },
    banner: {
      enable: true,
      title: '山岸逢秋',
    },
    say: {
      enable: true,
      api: "/poetry.json",
    },
    pages: [
      {
        name: '留言板',
        url: '/comment/',
        icon: 'i-ri-clipboard-line',
        color: '#737de5',
      },
      {
        name: '相册',
        url: '/albums/',
        icon: 'i-ri-gallery-line',
        color: '#43abee',
      },
      {
        name: '友邻',
        url: '/links/',
        icon: 'i-ri-open-arm-line',
        color: '#4bbea4',
      },
    ],

    footer: {
      since: 2021,
      beian: {
        enable: false,
        icp: '浙ICP备2021035374号',
      },
      powered: true,
      icon:{
        enable:false
      }
    },
  },
  addons: [
    addonWaline({
      serverURL: 'https://waline.0v0.day',
      comment:true,
      pageview:true
    }),
  ],
  unocss: {
    safelist: [
      'i-ri-home-line',
    ],
  },
})


