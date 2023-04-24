import { c as create_ssr_component, v as validate_component, h as each, f as escape } from "../../../chunks/index.js";
import { H as Heading } from "../../../chunks/Heading.js";
import { G as GridContainer, B as BaseCard } from "../../../chunks/BaseCard.js";
import { P as PortableText, D as DefaultListItem } from "../../../chunks/DefaultListItem.js";
const AdditionalServices = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { additionalServices } = $$props;
  if ($$props.additionalServices === void 0 && $$bindings.additionalServices && additionalServices !== void 0)
    $$bindings.additionalServices(additionalServices);
  return `${validate_component(Heading, "Heading").$$render($$result, { secondary: true }, {}, {
    default: () => {
      return `Additional Services`;
    }
  })}
${validate_component(GridContainer, "GridContainer").$$render($$result, {}, {}, {
    default: () => {
      return `${each(additionalServices, (additional) => {
        return `${validate_component(BaseCard, "BaseCard").$$render($$result, {}, {}, {
          default: () => {
            return `${validate_component(Heading, "Heading").$$render($$result, { secondary: true, tertiary: true }, {}, {
              default: () => {
                return `${escape(additional.name)}`;
              }
            })}
			<p class="my-4 text-xl">${escape(additional.description)}</p>
			${additional.name === "Riding Lessons" ? `<span class="text-tan text-xl">$${escape(additional.price)}/hour</span>` : `<span class="text-tan text-xl">$${escape(additional.price)}/month</span>`}
		`;
          }
        })}`;
      })}`;
    }
  })}`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let { services } = $$props;
  let { additionalServices } = $$props;
  services = data.services;
  additionalServices = data.additionalServices;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  if ($$props.services === void 0 && $$bindings.services && services !== void 0)
    $$bindings.services(services);
  if ($$props.additionalServices === void 0 && $$bindings.additionalServices && additionalServices !== void 0)
    $$bindings.additionalServices(additionalServices);
  return `${$$result.head += `<!-- HEAD_svelte-r5k5c_START -->${$$result.title = `<title>Services | Velvet Acres</title>`, ""}<!-- HEAD_svelte-r5k5c_END -->`, ""}

${services ? `${validate_component(Heading, "Heading").$$render($$result, {}, {}, {
    default: () => {
      return `Services`;
    }
  })}
	<div class="flex flex-col md:flex-row max-w-3xl mx-auto gap-10">${each(services, (service) => {
    return `${validate_component(BaseCard, "BaseCard").$$render($$result, {}, {}, {
      default: () => {
        return `${validate_component(Heading, "Heading").$$render($$result, { secondary: true, tertiary: true }, {}, {
          default: () => {
            return `${escape(service.name)}`;
          }
        })}
				<span class="text-tan text-xl">$${escape(service.price)}/month</span>
				<div class="text-left pt-3 text-xl">${validate_component(PortableText, "PortableText").$$render(
          $$result,
          {
            value: service.description,
            components: {
              listItem: {
                bullet: DefaultListItem,
                normal: DefaultListItem
              }
            }
          },
          {},
          {}
        )}</div>
			`;
      }
    })}`;
  })}</div>` : `<h3>Please check back later to see our services!</h3>`}

${additionalServices ? `${validate_component(AdditionalServices, "AdditionalServices").$$render($$result, { additionalServices }, {}, {})}` : ``}`;
});
export {
  Page as default
};
