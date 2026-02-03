import { query } from "$app/server";
import { sortBy } from "remeda";
import { render } from "svelte/server";
import { string } from "valibot";

const BLOGS = await Promise.all(
    Object.entries(import.meta.glob("./*.svx", { eager: true })).map(
        async ([path, mod]: [string, any]) => ({
            filepath: path,
            meta: { expand: false, ...mod.metadata } as Record<
                "title" | "date" | "slug" | "tags" | "expand",
                any
            >,
            html: await render(mod.default, {}),
        }),
    ),
);
export type Blog = (typeof BLOGS)[number];

export const getAllBlogs = query(async () => {
    return sortBy(BLOGS, (blog) => new Date(blog.meta.date).getTime()).reverse();
});

export const getBlog = query(string(), async (slug: string) => {
    const blog = BLOGS.find((blog) => blog.meta.slug === slug);
    if (!blog) {
        throw new Error("Blog not found");
    }
    return blog;
});
