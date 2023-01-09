/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental:{
    newNextLinkBehavior: false,
    appDir: true}

}

module.exports = nextConfig
