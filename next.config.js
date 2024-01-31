// const { withNextVideo } = require('next-video\process')



/** @type {import('next').NextConfig} */
const nextConfig = {
  images:{
    domain:["cdn.sanity.io"]
  }
}

// module.exports = withNextVideo(nextConfig)

module.exports = {
    images: {
      domains: ['images.unsplash.com'],
    },
  }
// next.config.js
module.exports = {
  webpack: (config, { isServer }) => {
    // Add a rule for MP4 files
    config.module.rules.push({
      test: /\.(mp4|mov|avi)$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            publicPath: '/_next/static/videos/', // Adjust the path as needed
            outputPath: 'static/videos/', // Adjust the path as needed
          },
        },
      ],
    });

    // For server-side rendering of MP4 files
    if (isServer) {
      const originalEntry = config.entry;
      config.entry = async () => {
        const entries = await originalEntry();
        if (entries['main.js'] && !entries['main.js'].includes('./server.js')) {
          entries['main.js'].unshift('./server.js');
        }
        return entries;
      };
    }

    return config;
  },
};
