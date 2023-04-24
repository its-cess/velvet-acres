import { c as create_ssr_component, h as each, b as add_attribute, v as validate_component } from "../../../chunks/index.js";
import { P as PortableText, D as DefaultListItem } from "../../../chunks/DefaultListItem.js";
import { H as Heading } from "../../../chunks/Heading.js";
const Slideshow_svelte_svelte_type_style_lang = "";
const css = {
  code: ".arrow.svelte-dpgr6n{z-index:50;display:flex;height:-moz-fit-content;height:fit-content;cursor:pointer;justify-content:center;border-radius:9999px;background-color:rgb(63 78 79 / var(--tw-bg-opacity));--tw-bg-opacity:0.6;padding:0.5rem;padding-left:1rem;padding-right:1rem;font-size:2.25rem;line-height:2.5rem;--tw-text-opacity:1;color:rgb(220 215 201 / var(--tw-text-opacity))\n}.arrow.svelte-dpgr6n:hover{--tw-bg-opacity:0.8;--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity))\n}",
  map: null
};
const Slideshow = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let images = [
    {
      id: "1",
      path: "/images/arena.svg",
      description: "Covered indoor riding arena"
    },
    {
      id: "2",
      path: "/images/barn.svg",
      description: "Barn aisleway with stalls on both sides"
    },
    {
      id: "3",
      path: "/images/pasture.svg",
      description: "Green pasture with white four board fencing"
    },
    {
      id: "4",
      path: "/images/tack.svg",
      description: "Wall with lots of hanging bridles"
    }
  ];
  $$result.css.add(css);
  return `<div class="flex min-h-[600px] items-center"><div class="arrow ml-2 lg:ml-20 svelte-dpgr6n"><button>❮</button></div>
	<div class="flex z-0 justify-center items-center w-full overflow-hidden">${each(images, (image) => {
    return `<img${add_attribute("src", image.path, 0)}${add_attribute("alt", image.description, 0)} class="absolute w-[800px] h-auto object-cover rounded-lg shadow-md">`;
  })}</div>
	<div class="arrow mr-2 lg:mr-20 svelte-dpgr6n"><button>❯</button></div>
</div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let { facilities } = $$props;
  facilities = data.facility;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  if ($$props.facilities === void 0 && $$bindings.facilities && facilities !== void 0)
    $$bindings.facilities(facilities);
  return `${$$result.head += `<!-- HEAD_svelte-1tjsf5l_START -->${$$result.title = `<title>Facilities | Velvet Acres</title>`, ""}<!-- HEAD_svelte-1tjsf5l_END -->`, ""}

${validate_component(Heading, "Heading").$$render($$result, {}, {}, {
    default: () => {
      return `The Facilities`;
    }
  })}
<div class="flex flex-col md:flex-row items-center md:m-4 gap-8 md:justify-center"><div class="ml-6 m-y-0 p-5 md:p-3 text-xl md:text-2xl">${each(facilities, (facility) => {
    return `${validate_component(PortableText, "PortableText").$$render(
      $$result,
      {
        value: facility.description,
        components: {
          listItem: {
            bullet: DefaultListItem,
            normal: DefaultListItem
          }
        }
      },
      {},
      {}
    )}`;
  })}</div>
	<div><img class="h-[300px] rounded-lg shadow-md" src="/images/dressage.svg" alt="Buckskin horse doing dressage"></div></div>

${validate_component(Slideshow, "Slideshow").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
