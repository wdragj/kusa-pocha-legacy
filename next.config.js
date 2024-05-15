/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'k.kakaocdn.net'
      },
      {
        protocol: 'https',
        hostname: 'avatar.vercel.sh'
      },
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com'
      },
      {
        protocol: 'https',
        hostname: 'nextui.org'
      },
    ]
  }
};

module.exports = nextConfig;
