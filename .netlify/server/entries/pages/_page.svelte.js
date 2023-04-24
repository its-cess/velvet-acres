import { c as create_ssr_component, v as validate_component } from "../../chunks/index.js";
import { H as Heading } from "../../chunks/Heading.js";
const Hero = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<main class="h-[800px] bg-fixed bg-velvetAcres bg-cover"><img class="mx-auto h-[800px] opacity-[.88]" src="/images/velvet-acres.svg" alt="Velvet Acres logo"></main>`;
});
const About = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Heading, "Heading").$$render($$result, {}, {}, {
    default: () => {
      return `About Us`;
    }
  })}
<div class="contianer px-20"><p class="text-2xl mb-[4rem] px-2 lg:px-20">Velvet Acres is a premier horse boarding facility located in New Richmond, Ohio approximately 30
		minutes outside of Cincinnati. We pride ourselves on providing exceptional care and services for
		horses and their owners. When boarding at Velvet Acres, you can expect high-quality horse care,
		cleanliness, and upgrades to the facilities often.
		<br>
		<br>
		At Velvet Acres, we understand that each horse is unique and requires personalized attention and
		care. We pride ourselves on treating your horses as if they were our own. Owner is on-site and we
		are committed to the well-being of every horse that is boarded with us.
		<br>
		<br>
		Please call us at (877) 555-1234 to schedule a tour and check our availability.
	</p></div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-de94rr_START -->${$$result.title = `<title>Horse Boarding | Velvet Acres</title>`, ""}<!-- HEAD_svelte-de94rr_END -->`, ""}

${validate_component(Hero, "Hero").$$render($$result, {}, {}, {})}
${validate_component(About, "About").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
