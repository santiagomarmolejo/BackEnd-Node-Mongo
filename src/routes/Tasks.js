import { Router } from "express"
import { getTasks } from "../controllers/Tasks";

const router = Router();

router.get('/getTasks', getTasks);

module.exports = router;