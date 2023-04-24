import { s as sanityClient } from "../../../chunks/sanityClient.js";
async function load() {
  const data = await sanityClient.fetch(`*[_type == 'facility'] {
    _id,
    description
  }`);
  if (data) {
    return {
      facility: data
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
