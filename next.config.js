const withPlugins = require("next-compose-plugins");
const withImages = require("next-images");
const nextConfig = {
   images: {
      domains: ["file.hstatic.net", "theme.hstatic.net", "product.hstatic.net"],
   },
   env: {
      MONGO_URI: "mongodb://localhost:27017/camelia_web",
   },
};
module.exports = withPlugins([withImages], nextConfig);
