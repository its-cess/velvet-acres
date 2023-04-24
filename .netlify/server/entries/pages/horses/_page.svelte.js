import { c as create_ssr_component, v as validate_component, h as each, b as add_attribute, f as escape } from "../../../chunks/index.js";
import { H as Heading } from "../../../chunks/Heading.js";
import { G as GridContainer, B as BaseCard } from "../../../chunks/BaseCard.js";
import { s as sanityClient } from "../../../chunks/sanityClient.js";
import imageUrlBuilder from "@sanity/image-url";
const calculateAge = (birthday) => {
  const today = /* @__PURE__ */ new Date();
  const birthDate = new Date(birthday);
  let age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || m === 0 && today.getDate() < birthDate.getDate()) {
    age--;
  }
  return age;
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let { horses } = $$props;
  horses = data.horses;
  const builder = imageUrlBuilder(sanityClient);
  function urlFor(source) {
    return builder.image(source);
  }
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  if ($$props.horses === void 0 && $$bindings.horses && horses !== void 0)
    $$bindings.horses(horses);
  return `${$$result.head += `<!-- HEAD_svelte-d64874_START -->${$$result.title = `<title>Our Horses | Velvet Acres</title>`, ""}<!-- HEAD_svelte-d64874_END -->`, ""}

${validate_component(Heading, "Heading").$$render($$result, {}, {}, {
    default: () => {
      return `Our Horses`;
    }
  })}
${validate_component(GridContainer, "GridContainer").$$render($$result, {}, {}, {
    default: () => {
      return `${each(horses, (horse) => {
        return `${validate_component(BaseCard, "BaseCard").$$render($$result, {}, {}, {
          default: () => {
            return `<img class="rounded-md mx-auto pb-3 drop-shadow-md"${add_attribute("src", urlFor(horse.image).width(350).url(), 0)}${add_attribute("alt", horse.registeredName, 0)}>
			${validate_component(Heading, "Heading").$$render($$result, { tertiary: true }, {}, {
              default: () => {
                return `${escape(horse.registeredName)}`;
              }
            })}
			${validate_component(Heading, "Heading").$$render($$result, { secondary: true, tertiary: true }, {}, {
              default: () => {
                return `&quot;${escape(horse.barnName)}&quot;`;
              }
            })}
			<span class="text-lg">${escape(horse.breed)}</span>
			<br>
			<span>${escape(horse.sex)},</span>
			<span class="ml-2"><span class="text-xl text-dark-green font-playfair">${escape(calculateAge(horse.birthday))}</span>
				years old
			</span>
			<p class="pt-3">${escape(horse.bio)}</p>
		`;
          }
        })}`;
      })}`;
    }
  })}`;
});
export {
  Page as default
};
