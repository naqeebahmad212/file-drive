import { internalMutation, mutation, query } from "./_generated/server";
import { ConvexError, v } from "convex/values";

export const createUser = internalMutation({
  args: { tokenIdentifier: v.string(), name: v.string(), image: v.string() },
  async handler(ctx, args) {
    await ctx.db.insert("users", {
      tokenIdentifier: args.tokenIdentifier,
      // orgIds: [],
      name: args.name,
      image: args.image,
    });
  },
});
