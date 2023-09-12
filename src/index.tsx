import Elysia  from "elysia";
import { usrRoute } from "../routes/usr.route";
import { html } from "@elysiajs/html"

const app = new Elysia()
.use(html())
.get("/", () => {
  return (
  <div> 
  <h1>Ho</h1> 
  </div>
  )
})
.use(usrRoute)
.listen(3000)