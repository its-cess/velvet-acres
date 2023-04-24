import { s as sanityClient } from "../../../chunks/sanityClient.js";
async function load() {
  const data = await sanityClient.fetch(`*[_type =='service'] {
			_id,
			name,
			description,
			price
  }`);
  const additionalData = await sanityClient.fetch(`*[_type == 'additionalService'] {
		_id,
		name,
		description,
		price
}`);
  if (data && additionalData) {
    return {
      services: data,
      additionalServices: additionalData
    };
  }
  return {
    status: 500,
    body: new Error("Internal Server Error")
  };
}
export {
  load
};
