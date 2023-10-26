import { drizzle } from "drizzle-orm/better-sqlite3";
import Database from "better-sqlite3";
import { singleton } from "@/util/singleton.server";
import * as schema from "./schema";

const sqlite = new Database("./db/sqlite.db");
export const db = singleton("drizzle", () => drizzle(sqlite, { schema }));
