import { siteConfig } from './lib/site-config'

export default siteConfig({
  // the site's root Notion page (required)
  rootNotionPageId: 'c69255a4bf594facaba0257769751304',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: 'Noel\'s Dev Blog',
  domain: 'dev.noelwatters.xyz',
  author: 'Noel Watters',

  // open graph metadata (optional)
  description: 'A humble dev blog',

  // social usernames (optional)
  // twitter: 'loken01',
  // github: 'loken01',
  // linkedin: 'noelwatters',
  // newsletter: '#', // optional newsletter URL
  // youtube: '#', // optional youtube channel name or `channel/UCGbXXXXXXXXXXXXXXXXXXXXXX`

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: 'https://noelwatters.xyz/page-icon.png',
  defaultPageCover: 'https://noelwatters.xyz/page-cover.jpg',
  defaultPageCoverPosition: 0.5,

  // whether or not to enable support for LQIP preview images (optional)
  isPreviewImageSupportEnabled: true,

  // whether or not redis is enabled for caching generated preview images (optional)
  // NOTE: if you enable redis, you need to set the `REDIS_HOST` and `REDIS_PASSWORD`
  // environment variables. see the readme for more info
  isRedisEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  // pageUrlOverrides: {
  //   '/about': '889ec72882a541729241d652dea58050'
  // },
  pageUrlOverrides: null,

  // whether to use the default notion navigation style or a custom one with links to
  // important pages
  //navigationStyle: 'default',
   navigationStyle: 'custom',
  navigationLinks: [
    {
      title: 'About',
      pageId: '889ec72882a541729241d652dea58050',
      url: 'about'
    }
  ],
  footerDarkModeButton: false,
  headerDarkModeButton: false,
  githubShareButton: false,
  forceTheme: false
})
