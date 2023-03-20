import sanityClient from '../../sanityClient';

export async function load() {
	const data = await sanityClient.fetch(`*[_type == 'service'] {
    _id,
    name,
    description,
    price
  }`);

	if (data) {
		return {
			services: data
		};
	}
	return {
		status: 500,
		body: new Error('Internal Server Error')
	};
}
