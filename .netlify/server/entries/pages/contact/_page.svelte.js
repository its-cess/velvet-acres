import { c as create_ssr_component, v as validate_component } from "../../../chunks/index.js";
import { H as Heading } from "../../../chunks/Heading.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "p.svelte-1vtondk{margin-top:1.5rem\n}span.svelte-1vtondk{font-family:Playfair Display, serif\n}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-a03214_START -->${$$result.title = `<title>Contact Us | Velvet Acres</title>`, ""}<!-- HEAD_svelte-a03214_END -->`, ""}

<main class="h-[800px] md:h-[400px] lg:h-[850px] bg-fixed bg-contactUs bg-cover bg-no-repeat"><div class="relative top-8 md:top-12 lg:top-32 w-fit mx-auto bg-white bg-opacity-[.60] p-4 md:p-8 lg:p-12 rounded-full">${validate_component(Heading, "Heading").$$render($$result, {}, {}, {
    default: () => {
      return `Contact Us`;
    }
  })}</div></main>

<div class="flex flex-col-reverse lg:flex-row justify-center items-center"><img class="flex-grow-0 -m-24 lg:m-0" src="/images/velvet-acres.svg" alt="Velvet Acres logo">
	<div class="flex-grow-0 py-8"><div class="px-10 text-2xl md:text-3xl"><p class="svelte-1vtondk">We are located at:</p>
			<span class="svelte-1vtondk">1234 Main Street
				<br>
				New Richmond, OH 45155
			</span>
			<p class="svelte-1vtondk">Phone Number:</p>
			<span class="svelte-1vtondk">(877) 555-1234 </span>
			<p class="svelte-1vtondk">Please call to schedule a tour and check our availability.</p></div></div>
</div>`;
});
export {
  Page as default
};
