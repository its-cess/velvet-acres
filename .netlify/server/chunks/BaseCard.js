import { c as create_ssr_component } from "./index.js";
const GridContainer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="container mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-3 gap-y-3 px-4">${slots.default ? slots.default({}) : ``}</div>`;
});
const BaseCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="container mx-auto text-center bg-[#ffffff] p-8 max-w-sm rounded-xl drop-shadow-md min-w-min leading-relaxed">${slots.default ? slots.default({}) : ``}</div>`;
});
export {
  BaseCard as B,
  GridContainer as G
};
