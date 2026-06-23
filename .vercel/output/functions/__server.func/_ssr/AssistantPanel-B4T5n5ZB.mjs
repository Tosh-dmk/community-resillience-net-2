import { r as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { t as Button } from "./button-DRsC1qZi.mjs";
import { t as useMutation } from "../_libs/tanstack__react-query.mjs";
import {
  A as LoaderCircle,
  U as ExternalLink,
  _ as Send,
  p as Sparkles,
} from "../_libs/lucide-react.mjs";
import { l as createServerFn } from "./esm-Dova13aH.mjs";
import { n as useServerFn, t as createSsrRpc } from "./createSsrRpc-DwF6gIBN.mjs";
import { t as Textarea } from "./textarea-DBn9CRiI.mjs";
import { i as stringType, r as objectType } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/AssistantPanel-B4T5n5ZB.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var Input = objectType({
  situation: stringType().trim().min(1, "Please describe your situation").max(2e3),
});
var askAssistant = createServerFn({ method: "POST" })
  .validator((d) => Input.parse(d))
  .handler(createSsrRpc("a25da347868e1aa3590e1280af68cec37d48865abed05dc6d83b2e090c30c963"));
var categoryLabel = {
  government: "Government",
  non_profit: "Non-Profit",
  community: "Community",
  donor: "Donor",
};
function AssistantPanel({
  initialSituation = "",
  situation: controlledSituation,
  setSituation: controlledSetSituation,
}) {
  const [internalSituation, setInternalSituation] = (0, import_react.useState)(initialSituation);
  const isControlled = controlledSituation !== void 0 && controlledSetSituation !== void 0;
  const situation = isControlled ? controlledSituation : internalSituation;
  const setSituation = isControlled ? controlledSetSituation : setInternalSituation;
  const callAssistant = useServerFn(askAssistant);
  const mutation = useMutation({
    mutationFn: (value) => callAssistant({ data: { situation: value } }),
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!situation.trim()) return;
    mutation.mutate(situation.trim());
  };
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
    className: "space-y-6",
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("form", {
        onSubmit: handleSubmit,
        className: "rounded-2xl border border-border bg-card p-2 shadow-card",
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
          className: "flex flex-col gap-3 p-3 sm:flex-row sm:items-end",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
              className: "flex-1",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
                  htmlFor: "situation",
                  className: "mb-2 flex items-center gap-1.5 text-sm font-semibold text-accent",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, {
                      className: "size-4",
                      "aria-hidden": "true",
                    }),
                    " AI Assistant",
                  ],
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
                  id: "situation",
                  value: situation,
                  onChange: (e) => setSituation(e.target.value),
                  placeholder:
                    "I need help with farming seeds and temporary shelter after flooding in Kisumu...",
                  rows: 3,
                  maxLength: 2e3,
                  className:
                    "resize-none border-0 bg-transparent px-0 text-base shadow-none focus-visible:ring-0",
                }),
              ],
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
              type: "submit",
              disabled: mutation.isPending || !situation.trim(),
              className: "rounded-xl",
              size: "lg",
              children: mutation.isPending
                ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, {
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, {
                        className: "animate-spin",
                      }),
                      " Finding aid",
                    ],
                  })
                : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, {
                    children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, {}), " Find Aid"],
                  }),
            }),
          ],
        }),
      }),
      mutation.isError &&
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
          className:
            "rounded-xl border border-destructive/30 bg-destructive/5 p-4 text-sm text-destructive",
          children: mutation.error.message,
        }),
      mutation.data &&
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
          className: "animate-fade-up space-y-6",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
              className: "rounded-2xl border border-border bg-card p-6",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                  className: "mb-3 flex items-center gap-2 text-sm font-semibold text-accent",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, {
                      className: "size-4",
                      "aria-hidden": "true",
                    }),
                    " Recommendation",
                  ],
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                  className: "whitespace-pre-line leading-relaxed text-foreground",
                  children: mutation.data.message,
                }),
              ],
            }),
            mutation.data.recommended.length > 0 &&
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                className: "grid gap-4 sm:grid-cols-2",
                children: mutation.data.recommended.map((org) =>
                  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                    "div",
                    {
                      className: "flex flex-col rounded-2xl border border-border bg-card p-5",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                          className: "mb-2 flex items-center justify-between gap-2",
                          children: [
                            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                              className:
                                "rounded-full bg-brand-100 px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-brand-800",
                              children: categoryLabel[org.category],
                            }),
                            org.amount_label &&
                              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                                className: "text-xs font-medium text-muted-foreground",
                                children: org.amount_label,
                              }),
                          ],
                        }),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
                          className: "font-serif text-lg font-semibold text-foreground",
                          children: org.name,
                        }),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                          className: "mt-1.5 flex-1 text-sm text-muted-foreground",
                          children: org.description,
                        }),
                        org.website &&
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                            className: "mt-4 flex justify-end border-t border-border pt-3",
                            children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
                              size: "sm",
                              className: "rounded-full h-8 px-3 text-xs",
                              asChild: true,
                              children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
                                href: org.website,
                                target: "_blank",
                                rel: "noopener noreferrer",
                                children: [
                                  "Apply ",
                                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, {
                                    className: "ml-1.5 size-3",
                                  }),
                                ],
                              }),
                            }),
                          }),
                      ],
                    },
                    org.id,
                  ),
                ),
              }),
          ],
        }),
    ],
  });
}
//#endregion
export { AssistantPanel as t };
