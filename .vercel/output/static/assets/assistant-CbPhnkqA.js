import { n as e } from "./chunk-Bh1tDfsg.js";
import { G as t, o as n } from "./useStore-75krDqnZ.js";
import { O as r, a as i } from "./index-B9tAZozu.js";
import { t as a } from "./AssistantPanel-CcEOkq7L.js";
var o = e(t()),
  s = n(),
  c = [
    `My shamba in Nyando has flooded and we need emergency housing and clean water.`,
    `I'm a trader in Mombasa whose shop inventory was destroyed by storm winds.`,
    `My farm in Turkana is struggling after months of severe drought — what NDMA aid exists?`,
    `A landslide swept through our village in West Pokot. Where do I get tents and food?`,
  ];
function l() {
  let [e, t] = (0, o.useState)(``);
  return (0, s.jsx)(i, {
    children: (0, s.jsxs)(`div`, {
      className: `mx-auto max-w-3xl px-4 py-12`,
      children: [
        (0, s.jsxs)(`header`, {
          className: `text-center`,
          children: [
            (0, s.jsx)(`div`, {
              className: `mx-auto mb-4 flex size-12 items-center justify-center rounded-2xl bg-brand-100 text-brand-800`,
              children: (0, s.jsx)(r, { className: `size-6`, "aria-hidden": `true` }),
            }),
            (0, s.jsx)(`h1`, {
              className: `font-serif text-4xl font-semibold text-foreground`,
              children: `Find the right aid, faster`,
            }),
            (0, s.jsx)(`p`, {
              className: `mt-3 text-muted-foreground`,
              children: `Tell us what happened and what you need. Our assistant will match you with relevant programs and support.`,
            }),
          ],
        }),
        (0, s.jsx)(`div`, {
          className: `mt-10`,
          children: (0, s.jsx)(a, { situation: e, setSituation: t }),
        }),
        (0, s.jsxs)(`div`, {
          className: `mt-8`,
          children: [
            (0, s.jsx)(`p`, {
              className: `mb-3 text-sm font-medium text-muted-foreground`,
              children: `Not sure where to start? Try one of these:`,
            }),
            (0, s.jsx)(`div`, {
              className: `flex flex-wrap gap-2`,
              children: c.map((e) =>
                (0, s.jsx)(
                  `button`,
                  {
                    type: `button`,
                    onClick: () => t(e),
                    className: `rounded-full border border-border bg-card px-3 py-1.5 text-xs text-muted-foreground hover:bg-accent hover:text-foreground cursor-pointer transition-colors text-left font-normal`,
                    children: e,
                  },
                  e,
                ),
              ),
            }),
          ],
        }),
      ],
    }),
  });
}
export { l as component };
