const siteMetadata = {
  title: 'trongtomo',
  author: 'trongtomo',
  headerTitle: 'trongtomo',
  description: 'Software Engineer',
  language: 'en-us',
  theme: 'dark', // system, dark or light
  siteUrl: 'https://trongtomo.com',
  siteRepo: 'https://github.com/trongtomo/templateWebsite',
  siteLogo: '/static/images/logo.png',
  image: '/static/images/avatar.webp',
  socialBanner: '/static/images/twitter-card.png',
  email: 'trongnguyen98@gmail.com',
  github: 'https://github.com/trongtomo',
  twitter: 'https://twitter.com/trongtomo',
  facebook: 'https://www.facebook.com/nguyen.trong.750983/',
  linkedin: 'https://www.linkedin.com/in/trongtomo/',
  spotify: 'https://open.spotify.com/user/21ccm4vn7zltnrodjb264dnza',
  steam: 'https://steamcommunity.com/id/fakerankmeister/',
  locale: 'en-US',
  comment: {
    provider: 'giscus',
    giscusConfig: {
      repo: process.env.NEXT_PUBLIC_GISCUS_REPO || '',
      repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID || '',
      category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY || '',
      categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID || '',
      mapping: 'pathname',
      reactions: '1',
      metadata: '0',
      theme: 'light',
      darkTheme: 'transparent_dark',
      themeURL: '',
    },
  },
}

module.exports = siteMetadata
