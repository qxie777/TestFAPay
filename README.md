# TestFAPay

1. Run cors antwhere. We are accessing REST API from local html, so we need this CORS proxy to help us with CORS issues. See https://stackoverflow.com/questions/43871637/no-access-control-allow-origin-header-is-present-on-the-requested-resource-whe. 
  ```
  git clone https://github.com/Rob--W/cors-anywhere.git
  cd cors-anywhere/
  npm install
  node server.js
  ```
2. Clone this repo and open index.html in your favorite browser.
