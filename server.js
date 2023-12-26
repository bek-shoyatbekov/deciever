import http from "http";

import app from "./src/app.js";
import config from "./src/config/index.js";
import logger from "./src/logger/pino.js";







const server = http.createServer(app);









const PORT = config.app.port;


server.listen(PORT, "127.0.0.1", () => {
    logger.info({}, "Server is running on port %s", PORT)
})