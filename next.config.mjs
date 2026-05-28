// /** @type {import('next').NextConfig} */
// const nextConfig = {
//    images: {
//     domains: ['www.allrecipes.com'],
//   },
//   reactCompiler: true,
// };

// export default nextConfig;


/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {  //for all kind of image types supported
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
      {
        protocol: "http",
        hostname: "**",
      },
    ],
  },

  reactCompiler: true,
};

export default nextConfig;