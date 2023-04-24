import { c as create_ssr_component, f as escape } from "./index.js";
const Heading = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { secondary = void 0 } = $$props;
  let { justify = void 0 } = $$props;
  let { tertiary = void 0 } = $$props;
  if ($$props.secondary === void 0 && $$bindings.secondary && secondary !== void 0)
    $$bindings.secondary(secondary);
  if ($$props.justify === void 0 && $$bindings.justify && justify !== void 0)
    $$bindings.justify(justify);
  if ($$props.tertiary === void 0 && $$bindings.tertiary && tertiary !== void 0)
    $$bindings.tertiary(tertiary);
  return `<h1 class="${"text-dark-green font-playfair " + escape(secondary ? "text-2xl" : "text-3xl", true) + " " + escape(justify ? "text-left" : "text-center", true) + " " + escape(tertiary ? "" : "py-10", true)}">${slots.default ? slots.default({}) : ``}</h1>`;
});
export {
  Heading as H
};
