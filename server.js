import http from "http";

import app from "./src/app.js";
import config from "./src/config/index.js";







const server = http.createServer(app);











server.listen(config.app.port, "127.0.0.1", () => {
    
})