// this file is like defining a modals
import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  files: defineTable({ name: v.string(), orgId: v.string() }).index(
    "by_orgId",
    ["orgId"]
  ),

  users: defineTable({
    tokenIdentifier: v.string(),
    name: v.string(),
    image: v.string(),
    // orgId:v.array()
  }),
});
