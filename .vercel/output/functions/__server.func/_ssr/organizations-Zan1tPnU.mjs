import { r as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { t as Button } from "./button-DRsC1qZi.mjs";
import { r as useSuspenseQuery } from "../_libs/tanstack__react-query.mjs";
import { U as ExternalLink, h as ShieldCheck, v as Search } from "../_libs/lucide-react.mjs";
import { a as organizationsQuery, t as PageShell } from "./PageShell-DcwVYdMv.mjs";
import { t as Input } from "./input-DicJzR9-.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/organizations-Zan1tPnU.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var filters = [
  {
    value: "all",
    label: "All",
  },
  {
    value: "government",
    label: "Government",
  },
  {
    value: "non_profit",
    label: "Non-Profit",
  },
  {
    value: "community",
    label: "Community",
  },
  {
    value: "donor",
    label: "Donor",
  },
];
var categoryStyles = {
  government: "bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-300",
  non_profit: "bg-orange-50 text-orange-700 dark:bg-orange-950 dark:text-orange-300",
  community: "bg-emerald-50 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300",
  donor: "bg-purple-50 text-purple-700 dark:bg-purple-950 dark:text-purple-300",
};
var categoryLabel = {
  government: "Government",
  non_profit: "Non-Profit",
  community: "Community",
  donor: "Donor",
};
function Organizations() {
  const { data: orgs } = useSuspenseQuery(organizationsQuery());
  const [query, setQuery] = (0, import_react.useState)("");
  const [filter, setFilter] = (0, import_react.useState)("all");
  const filtered = (0, import_react.useMemo)(() => {
    const q = query.trim().toLowerCase();
    return orgs.filter((o) => {
      const matchesFilter = filter === "all" || o.category === filter;
      const matchesQuery =
        !q ||
        o.name.toLowerCase().includes(q) ||
        o.description.toLowerCase().includes(q) ||
        o.tags.some((t) => t.toLowerCase().includes(q));
      return matchesFilter && matchesQuery;
    });
  }, [orgs, query, filter]);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageShell, {
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
      className: "mx-auto max-w-7xl px-4 py-12",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
          className: "max-w-2xl",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
              className: "font-serif text-4xl font-semibold text-foreground",
              children: "Verified aid & funding",
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
              className: "mt-3 text-muted-foreground",
              children:
                "Every organization listed here is vetted. Search by need, location, or program type to find the right support.",
            }),
          ],
        }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
          className: "mt-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
              className: "relative max-w-md flex-1",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, {
                  className:
                    "pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground",
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
                  value: query,
                  onChange: (e) => setQuery(e.target.value),
                  placeholder: "Search programs, e.g. housing, grants, flood...",
                  className: "pl-9",
                  "aria-label": "Search aid programs",
                }),
              ],
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
              className: "flex flex-wrap gap-2",
              children: filters.map((f) =>
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                  Button,
                  {
                    variant: filter === f.value ? "default" : "outline",
                    size: "sm",
                    className: "rounded-full",
                    onClick: () => setFilter(f.value),
                    children: f.label,
                  },
                  f.value,
                ),
              ),
            }),
          ],
        }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
          className: "mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3",
          children: filtered.map((o) =>
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
              "article",
              {
                className: "flex flex-col rounded-2xl border border-border bg-card p-6",
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                    className: "flex items-start justify-between",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                        className:
                          "grid size-12 place-items-center rounded-xl bg-brand-100 font-serif font-bold text-brand-800",
                        children: o.name.charAt(0),
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                        className: `rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wide ${categoryStyles[o.category]}`,
                        children: categoryLabel[o.category],
                      }),
                    ],
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                    className: "mt-4 flex items-center gap-1.5",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
                        className: "font-semibold text-foreground",
                        children: o.name,
                      }),
                      o.verified &&
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, {
                          className: "size-4 text-accent",
                          "aria-label": "Verified organization",
                        }),
                    ],
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                    className: "mt-2 flex-1 text-sm text-muted-foreground",
                    children: o.description,
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                    className: "mt-4 flex flex-wrap gap-1.5",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                        className:
                          "rounded-md bg-muted px-2 py-0.5 text-[11px] font-medium text-muted-foreground",
                        children: o.region,
                      }),
                      o.tags.slice(0, 2).map((t) =>
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                          "span",
                          {
                            className:
                              "rounded-md bg-muted px-2 py-0.5 text-[11px] font-medium text-muted-foreground",
                            children: t,
                          },
                          t,
                        ),
                      ),
                    ],
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                    className: "mt-6 flex items-center justify-between border-t border-border pt-4",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                        className: "text-sm",
                        children: [
                          o.amount_label &&
                            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                              className: "font-semibold text-foreground",
                              children: o.amount_label,
                            }),
                          o.deadline &&
                            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
                              className: "block text-xs text-muted-foreground",
                              children: ["Deadline: ", o.deadline],
                            }),
                        ],
                      }),
                      o.website
                        ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
                            size: "sm",
                            className: "rounded-full",
                            asChild: true,
                            children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
                              href: o.website,
                              target: "_blank",
                              rel: "noopener noreferrer",
                              children: [
                                "Apply ",
                                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, {
                                  className: "size-3.5",
                                  "aria-hidden": "true",
                                }),
                              ],
                            }),
                          })
                        : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
                            size: "sm",
                            className: "rounded-full",
                            disabled: true,
                            children: [
                              "Apply ",
                              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, {
                                className: "size-3.5",
                                "aria-hidden": "true",
                              }),
                            ],
                          }),
                    ],
                  }),
                ],
              },
              o.id,
            ),
          ),
        }),
        filtered.length === 0 &&
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
            className: "mt-16 text-center text-muted-foreground",
            children: "No programs match your search. Try a different term or filter.",
          }),
      ],
    }),
  });
}
//#endregion
export { Organizations as component };
