import { Router } from "express";
import { getOne, getMany } from "./job.controllers";

function getJobRoutes() {
  const router = Router();
  router.route("/").post(getMany);
  router.route("/:id").get(getOne);

  return router;
}

export { getJobRoutes };
