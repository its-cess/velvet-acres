import { createClient } from '@sanity/client';

const sanityClient = createClient({
	projectId: process.env.SANITY_STUDIO_PROJECT_ID,
	dataset: 'production',
	apiVersion: '2023-03-19',
	useCdn: false
});

export default sanityClient;
