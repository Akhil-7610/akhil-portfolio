/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/webp", "image/avif"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.codehelp.in",
        port: "",
        pathname: "/favicon.ico",
      },
      {
        protocol: "https",
        hostname: "www.sdbihanipgcollegesgnr.org",
        port: "",
        pathname: "/Content/images/favicon.ico",
      },
    ],
    unoptimized: false,
  },
};

export default nextConfig;
