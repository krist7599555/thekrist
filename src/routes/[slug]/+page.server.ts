import { getBlog } from '../blog.remote';
import type { PageServerLoad } from './$types';

export const load = (async ({ params }) => {
    return {
        slug: params.slug,
        blog: await getBlog(params.slug)
    };
}) satisfies PageServerLoad;
