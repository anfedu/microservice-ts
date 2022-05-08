import "reflect-metadata";
import { initConnection } from "#root/db/connection";
import server from "#root/server/server";

initConnection().then(() => {
  server();
});
