import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const sanityClient = createClient({
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID || 'placeholder',
  dataset: import.meta.env.VITE_SANITY_DATASET || 'production',
  useCdn: true, // set to `false` to bypass the edge cache
  apiVersion: '2024-03-23', // use current date (YYYY-MM-DD) to target the latest API version
});

const builder = imageUrlBuilder(sanityClient);

export function urlFor(source) {
  return builder.image(source);
}

/**
 * Helper to check if Sanity is configured
 */
export const isSanityConfigured = () => {
  return !!(import.meta.env.VITE_SANITY_PROJECT_ID && import.meta.env.VITE_SANITY_PROJECT_ID !== 'placeholder');
};
