import Elysia  from "elysia";
import { getUser }  from "../controllers/user.ctrl";

export const usrRoute = (app: Elysia) => app
    .get('/user/:id', getUser)
