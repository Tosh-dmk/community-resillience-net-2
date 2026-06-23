import { r as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { p as Sparkles } from "../_libs/lucide-react.mjs";
import { t as PageShell } from "./PageShell-DcwVYdMv.mjs";
import { t as AssistantPanel } from "./AssistantPanel-B4T5n5ZB.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/assistant-BXREr2N0.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var prompts = [
  "My shamba in Nyando has flooded and we need emergency housing and clean water.",
  "I'm a trader in Mombasa whose shop inventory was destroyed by storm winds.",
  "My farm in Turkana is struggling after months of severe drought — what NDMA aid exists?",
  "A landslide swept through our village in West Pokot. Where do I get tents and food?",
];
function Assistant() {
  const [situation, setSituation] = (0, import_react.useState)("");
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageShell, {
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
      className: "mx-auto max-w-3xl px-4 py-12",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
          className: "text-center",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
              className:
                "mx-auto mb-4 flex size-12 items-center justify-center rounded-2xl bg-brand-100 text-brand-800",
              children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, {
                className: "size-6",
                "aria-hidden": "true",
              }),
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
              className: "font-serif text-4xl font-semibold text-foreground",
              children: "Find the right aid, faster",
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
              className: "mt-3 text-muted-foreground",
              children:
                "Tell us what happened and what you need. Our assistant will match you with relevant programs and support.",
            }),
          ],
        }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
          className: "mt-10",
          children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AssistantPanel, {
            situation,
            setSituation,
          }),
        }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
          className: "mt-8",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
              className: "mb-3 text-sm font-medium text-muted-foreground",
              children: "Not sure where to start? Try one of these:",
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
              className: "flex flex-wrap gap-2",
              children: prompts.map((p) =>
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                  "button",
                  {
                    type: "button",
                    onClick: () => setSituation(p),
                    className:
                      "rounded-full border border-border bg-card px-3 py-1.5 text-xs text-muted-foreground hover:bg-accent hover:text-foreground cursor-pointer transition-colors text-left font-normal",
                    children: p,
                  },
                  p,
                ),
              ),
            }),
          ],
        }),
      ],
    }),
  });
}
//#endregion
export { Assistant as component };
