/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}
module.exports = {
  env: {
    SERVIDOR: process.env.SERVIDOR
  },
  nextConfig
};
