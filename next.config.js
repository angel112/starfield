/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

const withTM = require('next-transpile-modules')(['@splinetool/react-spline', '@splinetool/runtime', 'react-spline']);


module.exports = withTM(nextConfig);