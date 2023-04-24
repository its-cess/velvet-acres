import { createClient } from '@sanity/client';
import { PUBLIC_SANITY_STUDIO_PROJECT_ID } from '$env/static/public';

const sanityClient = createClient({
	projectId: PUBLIC_SANITY_STUDIO_PROJECT_ID,
	dataset: 'production',
	apiVersion: '2023-03-19',
	useCdn: false
});

export default sanityClient;
