module.exports = {
  apps: [
    {
      name: "AIShop",
      script: "src/server.js",
      watch: true,
      env: {
        NODE_ENV: "production",
        PORT: 3001,
      },
    },
  ],
};
