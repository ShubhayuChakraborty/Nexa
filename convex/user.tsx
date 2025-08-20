import {v} from 'convex/values';
import { query, mutation } from './_generated/server';

export const getUser=query({
    args:{
        email:v.string()
    },
    handler: async (ctx, args) => {
        const result = await ctx.db.query("users")

     .filter((q) => q.eq(q.field("email"), args.email))
     .collect()
     return result;


    }
})

export const createUser = mutation({
    args: {
        name: v.string(),
        email: v.string(),
        image: v.string(),
    },
    handler: async (ctx, args) => {
        const userId = await ctx.db.insert("users", {
            name: args.name,
            email: args.email,
            image: args.image,
        });
        return userId;
    },
});