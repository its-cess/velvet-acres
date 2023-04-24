import { c as create_ssr_component, b as add_attribute, d as createEventDispatcher, v as validate_component } from "../../chunks/index.js";
const styles = "";
const Hamburger = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { width = 24 } = $$props;
  let { height = 24 } = $$props;
  if ($$props.width === void 0 && $$bindings.width && width !== void 0)
    $$bindings.width(width);
  if ($$props.height === void 0 && $$bindings.height && height !== void 0)
    $$bindings.height(height);
  return `<svg${add_attribute("width", width, 0)}${add_attribute("height", height, 0)} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M24 6.75008H0V5.25006H24V6.75008Z"></path><path d="M24 12.7501H0V11.2501H24V12.7501Z"></path><path d="M24 18.7502H0V17.2502H24V18.7502Z"></path></svg>`;
});
const MobileNav_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "ul.svelte-dpn9s3 li a.svelte-dpn9s3{font-family:Lato, sans-serif;font-size:1.25rem;line-height:1.75rem;--tw-text-opacity:1;color:rgb(220 215 201 / var(--tw-text-opacity))\n}ul.svelte-dpn9s3 li a.svelte-dpn9s3:hover{font-size:1.5rem;line-height:2rem;font-weight:700;--tw-text-opacity:1;color:rgb(162 123 92 / var(--tw-text-opacity))\n}",
  map: null
};
const MobileNav = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  createEventDispatcher();
  let { isMobileNavShowing = false } = $$props;
  if ($$props.isMobileNavShowing === void 0 && $$bindings.isMobileNavShowing && isMobileNavShowing !== void 0)
    $$bindings.isMobileNavShowing(isMobileNavShowing);
  $$result.css.add(css$1);
  return `<nav class="flex flex-row justify-between bg-green text-cream font-playfair"><div><button>${validate_component(Hamburger, "Hamburger").$$render($$result, { height: 32, width: 32 }, {}, {})}</button>
		${isMobileNavShowing ? `<div class="absolute right-0 top-[3.5rem] z-40 w-full bg-green bg-opacity-90 text-right p-5"><ul class="mr-8 svelte-dpn9s3"><li><a href="/horses" class="svelte-dpn9s3">Our Horses</a></li>
					<li><a href="/facility" class="svelte-dpn9s3">Facilities</a></li>
					<li><a href="/services" class="svelte-dpn9s3">Services</a></li>
					<li><a href="/contact" class="svelte-dpn9s3">Contact Us</a></li></ul></div>` : ``}</div>
</nav>`;
});
const Navbar_svelte_svelte_type_style_lang = "";
const css = {
  code: "ul.svelte-dpn9s3 li a.svelte-dpn9s3{font-family:Lato, sans-serif;font-size:1.25rem;line-height:1.75rem;--tw-text-opacity:1;color:rgb(220 215 201 / var(--tw-text-opacity))\n}ul.svelte-dpn9s3 li a.svelte-dpn9s3:hover{font-size:1.5rem;line-height:2rem;font-weight:700;--tw-text-opacity:1;color:rgb(162 123 92 / var(--tw-text-opacity))\n}",
  map: null
};
const Navbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let isMobileNavOpen = false;
  $$result.css.add(css);
  return `<nav class="flex flex-row justify-between items-center px-7 py-3 bg-green text-cream font-playfair"><div><a href="/"><h2 class="text-2xl playfair hover:text-dark-green hover:text-3xl">Velvet Acres</h2></a></div>
	<ul class="hidden md:flex gap-10 svelte-dpn9s3"><li><a href="/horses" class="svelte-dpn9s3">Our Horses</a></li>
		<li><a href="/facility" class="svelte-dpn9s3">Facilities</a></li>
		<li><a href="/services" class="svelte-dpn9s3">Services</a></li>
		<li><a href="/contact" class="svelte-dpn9s3">Contact Us</a></li></ul>

	
	<div class="block md:hidden">${validate_component(MobileNav, "MobileNav").$$render($$result, { isMobileNavShowing: isMobileNavOpen }, {}, {})}</div>
</nav>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Navbar, "Navbar").$$render($$result, {}, {}, {})}
${slots.default ? slots.default({}) : ``}`;
});
export {
  Layout as default
};
