const withPlugins = require("next-compose-plugins");
const withImages = require("next-images");

const nextConfig = {
   images: {
      domains: ["file.hstatic.net", "theme.hstatic.net", "product.hstatic.net"],
   },
   env: {
      MONGO_URI: "mongodb://localhost:27017/camelia_web",
      MONGO_URI_ONLINE:
         "mongodb+srv://camelia:msang77335@cameliacluster.iyu2m.mongodb.net/camelia?retryWrites=true&w=majority",
   },
};
module.exports = withPlugins([[withImages]], nextConfig);
