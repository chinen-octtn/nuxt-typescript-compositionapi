export default {
  head() {
    const siteName = 'テストサイト'
    const type = this.meta.url === '/' ? 'website' : 'article'
    const site = 'https://example.com'
    const url = site + this.meta.url

    return {
      htmlAttrs: {
        lang: 'ja',
      },
      title: this.meta.title,
      meta: [
        {
          hid: 'format-detection',
          property: 'format-detection',
          content: 'telephone=no',
        },
        {
          hid: 'og:type',
          property: 'og:type',
          content: type,
        },
        {
          hid: 'og:site_name',
          property: 'og:site_name',
          content: siteName,
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: this.meta.title,
        },
        {
          hid: 'twitter:title',
          property: 'twitter:title',
          content: this.meta.title,
        },
        {
          hid: 'description',
          property: 'description',
          content: this.meta.description,
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.meta.description,
        },
        {
          hid: 'twitter:description',
          property: 'twitter:description',
          content: this.meta.description,
        },
        {
          hid: 'twitter:card',
          property: 'twitter:card',
          content: 'summary',
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: url,
        },
        {
          hid: 'twitter:url',
          property: 'twitter:url',
          content: url,
        },
        {
          hid: 'og:locale',
          property: 'og:locale',
          content: 'ja_JP',
        },
      ],
      link: [
        {
          hid: 'canonical',
          rel: 'canonical',
          href: url,
        },
      ],
    }
  },
}
