import express from "express";
// any other routes imports would go here
import { getItemRoutes } from "../resources/item/item.router";
import { getListRoutes } from "../resources/list/list.router";
function getRoutes() {
  // create a router for all the routes of our app
  const router = express.Router();
  router.use("/item", getItemRoutes());
  router.use("/list", getListRoutes());
  // any additional routes would go here
  return router;
}
export { getRoutes };