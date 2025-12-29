import { createClient } from 'next-sanity';
import imageUrlBuilder from '@sanity/image-url';
import { projectId, dataset, apiVersion, useCdn } from './env';

export const client = createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn,
}); // Set to false for real-time updates during dev

const builder = imageUrlBuilder(client);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function urlFor(source: any) {
    return builder.image(source);
}
