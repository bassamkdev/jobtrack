import logger from "loglevel";
import { startServer } from "./start";
logger.setLevel("info");
startServer({ port: 5000 });
