// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   allowedDevOrigins: ["*.preview.same-app.com"],
//   // Enable 'export' for static deployment to GitHub Pages
//   // Uncomment the next line when deploying:
//   // output: 'export',
//   basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
//   images: {
//     unoptimized: true,
//     domains: [
//       "source.unsplash.com",
//       "images.unsplash.com",
//       "ext.same-assets.com",
//       "ugc.same-assets.com",
//     ],
//     remotePatterns: [
//       {
//         protocol: "https",
//         hostname: "source.unsplash.com",
//         pathname: "/**",
//       },
//       {
//         protocol: "https",
//         hostname: "images.unsplash.com",
//         pathname: "/**",
//       },
//       {
//         protocol: "https",
//         hostname: "ext.same-assets.com",
//         pathname: "/**",
//       },
//       {
//         protocol: "https",
//         hostname: "ugc.same-assets.com",
//         pathname: "/**",
//       },
//     ],
//   },
// };

// module.exports = nextConfig;


/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '',         // 不要有前缀
  assetPrefix: undefined,

  allowedDevOrigins: ['*.preview.same-app.com'],

  images: {
    unoptimized: true,
    domains: [
      'source.unsplash.com',
      'images.unsplash.com',
      'ext.same-assets.com',
      'ugc.same-assets.com',
    ],
    remotePatterns: [
      { protocol: 'https', hostname: 'source.unsplash.com', pathname: '/**' },
      { protocol: 'https', hostname: 'images.unsplash.com', pathname: '/**' },
      { protocol: 'https', hostname: 'ext.same-assets.com', pathname: '/**' },
      { protocol: 'https', hostname: 'ugc.same-assets.com', pathname: '/**' },
    ],
  },
};

module.exports = nextConfig;
