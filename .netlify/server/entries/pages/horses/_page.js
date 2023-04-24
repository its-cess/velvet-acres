import { s as sanityClient } from "../../../chunks/sanityClient.js";
async function load() {
  const data = await sanityClient.fetch(`*[_type == 'horse'] {
    _id,
    image,
    registeredName,
    barnName,
    breed,
    birthday,
    sex,
    bio
  }`);
  if (data) {
    return {
      horses: data
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
