import { Application } from "https://deno.land/x/oak@v17.1.2/mod.ts";
import router from "./routes.ts";

const app = new Application();

app.use(router.routes());
app.use(router.allowedMethods());

const port = Number(Deno.env.get("PORT")) || 3000;
console.log(`Server running on http://localhost:${port}`);
await app.listen({ port: port });