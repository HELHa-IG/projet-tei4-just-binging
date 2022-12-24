const PROXY_CONFIG = [
  {
    context: [
      "/api",
    ],
    target: "https://localhost:7238",
    secure: false,
    changeOrigin:true
  }
]

module.exports = PROXY_CONFIG;
