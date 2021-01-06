import { Router } from "express";
import getMany from "./list-items.controllers";

function getListItemsRoutes() {
  const router = Router();

  router.route("/:id").get(getMany);

  return router;
}

export { getListItemsRoutes };
