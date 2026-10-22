import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "DegenCore",
  description: "Meme Launchpad on Ethereum",
  // Jika menggunakan custom domain (misal docs.degencore.fun), hapus baris base di bawah
  base: '/degencore-docs/',

  themeConfig: {
    logo: '/logo.png', // Pastikan file ini ada di docs/public/logo.png
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Whitepaper', link: '/launch' }
    ],
    sidebar: [
      {
        text: 'Whitepaper',
        items: [
          { text: 'Introduction', link: '/' },
          { text: 'How to Launch', link: '/launch' },
          { text: 'Buy & Sell Mechanics', link: '/trading' },
          { text: 'Tokenomics', link: '/tokenomics' }
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/YOUR_GITHUB_USERNAME/degencore-docs' },
      { icon: 'twitter', link: 'https://twitter.com/degencore' } // Ganti dengan link X Anda
    ],
    footer: {
      message: 'Fair Launch. No Presale. Liquidity Burned.',
      copyright: 'Copyright © 2026 DegenCore'
    }
  }
})
