import { n as e } from "./chunk-Bh1tDfsg.js";
import { G as t, o as n } from "./useStore-75krDqnZ.js";
import { t as r } from "./button-DASjVavO.js";
import { t as i } from "./useSuspenseQuery-BhLrdu7W.js";
import { t as a } from "./external-link-DpUUiOXd.js";
import { t as o } from "./search-Dev9YtHV.js";
import { t as s } from "./shield-check-DYzUTOe_.js";
import { a as c, x as l } from "./index-B9tAZozu.js";
import { t as u } from "./input-nIY2wL7O.js";
var d = e(t()),
  f = n(),
  p = [
    { value: `all`, label: `All` },
    { value: `government`, label: `Government` },
    { value: `non_profit`, label: `Non-Profit` },
    { value: `community`, label: `Community` },
    { value: `donor`, label: `Donor` },
  ],
  m = {
    government: `bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-300`,
    non_profit: `bg-orange-50 text-orange-700 dark:bg-orange-950 dark:text-orange-300`,
    community: `bg-emerald-50 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300`,
    donor: `bg-purple-50 text-purple-700 dark:bg-purple-950 dark:text-purple-300`,
  },
  h = {
    government: `Government`,
    non_profit: `Non-Profit`,
    community: `Community`,
    donor: `Donor`,
  };
function g() {
  let { data: e } = i(l()),
    [t, n] = (0, d.useState)(``),
    [g, _] = (0, d.useState)(`all`),
    v = (0, d.useMemo)(() => {
      let n = t.trim().toLowerCase();
      return e.filter((e) => {
        let t = g === `all` || e.category === g,
          r =
            !n ||
            e.name.toLowerCase().includes(n) ||
            e.description.toLowerCase().includes(n) ||
            e.tags.some((e) => e.toLowerCase().includes(n));
        return t && r;
      });
    }, [e, t, g]);
  return (0, f.jsx)(c, {
    children: (0, f.jsxs)(`div`, {
      className: `mx-auto max-w-7xl px-4 py-12`,
      children: [
        (0, f.jsxs)(`header`, {
          className: `max-w-2xl`,
          children: [
            (0, f.jsx)(`h1`, {
              className: `font-serif text-4xl font-semibold text-foreground`,
              children: `Verified aid & funding`,
            }),
            (0, f.jsx)(`p`, {
              className: `mt-3 text-muted-foreground`,
              children: `Every organization listed here is vetted. Search by need, location, or program type to find the right support.`,
            }),
          ],
        }),
        (0, f.jsxs)(`div`, {
          className: `mt-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between`,
          children: [
            (0, f.jsxs)(`div`, {
              className: `relative max-w-md flex-1`,
              children: [
                (0, f.jsx)(o, {
                  className: `pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground`,
                }),
                (0, f.jsx)(u, {
                  value: t,
                  onChange: (e) => n(e.target.value),
                  placeholder: `Search programs, e.g. housing, grants, flood...`,
                  className: `pl-9`,
                  "aria-label": `Search aid programs`,
                }),
              ],
            }),
            (0, f.jsx)(`div`, {
              className: `flex flex-wrap gap-2`,
              children: p.map((e) =>
                (0, f.jsx)(
                  r,
                  {
                    variant: g === e.value ? `default` : `outline`,
                    size: `sm`,
                    className: `rounded-full`,
                    onClick: () => _(e.value),
                    children: e.label,
                  },
                  e.value,
                ),
              ),
            }),
          ],
        }),
        (0, f.jsx)(`div`, {
          className: `mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3`,
          children: v.map((e) =>
            (0, f.jsxs)(
              `article`,
              {
                className: `flex flex-col rounded-2xl border border-border bg-card p-6`,
                children: [
                  (0, f.jsxs)(`div`, {
                    className: `flex items-start justify-between`,
                    children: [
                      (0, f.jsx)(`div`, {
                        className: `grid size-12 place-items-center rounded-xl bg-brand-100 font-serif font-bold text-brand-800`,
                        children: e.name.charAt(0),
                      }),
                      (0, f.jsx)(`span`, {
                        className: `rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wide ${m[e.category]}`,
                        children: h[e.category],
                      }),
                    ],
                  }),
                  (0, f.jsxs)(`div`, {
                    className: `mt-4 flex items-center gap-1.5`,
                    children: [
                      (0, f.jsx)(`h2`, {
                        className: `font-semibold text-foreground`,
                        children: e.name,
                      }),
                      e.verified &&
                        (0, f.jsx)(s, {
                          className: `size-4 text-accent`,
                          "aria-label": `Verified organization`,
                        }),
                    ],
                  }),
                  (0, f.jsx)(`p`, {
                    className: `mt-2 flex-1 text-sm text-muted-foreground`,
                    children: e.description,
                  }),
                  (0, f.jsxs)(`div`, {
                    className: `mt-4 flex flex-wrap gap-1.5`,
                    children: [
                      (0, f.jsx)(`span`, {
                        className: `rounded-md bg-muted px-2 py-0.5 text-[11px] font-medium text-muted-foreground`,
                        children: e.region,
                      }),
                      e.tags
                        .slice(0, 2)
                        .map((e) =>
                          (0, f.jsx)(
                            `span`,
                            {
                              className: `rounded-md bg-muted px-2 py-0.5 text-[11px] font-medium text-muted-foreground`,
                              children: e,
                            },
                            e,
                          ),
                        ),
                    ],
                  }),
                  (0, f.jsxs)(`div`, {
                    className: `mt-6 flex items-center justify-between border-t border-border pt-4`,
                    children: [
                      (0, f.jsxs)(`div`, {
                        className: `text-sm`,
                        children: [
                          e.amount_label &&
                            (0, f.jsx)(`span`, {
                              className: `font-semibold text-foreground`,
                              children: e.amount_label,
                            }),
                          e.deadline &&
                            (0, f.jsxs)(`span`, {
                              className: `block text-xs text-muted-foreground`,
                              children: [`Deadline: `, e.deadline],
                            }),
                        ],
                      }),
                      e.website
                        ? (0, f.jsx)(r, {
                            size: `sm`,
                            className: `rounded-full`,
                            asChild: !0,
                            children: (0, f.jsxs)(`a`, {
                              href: e.website,
                              target: `_blank`,
                              rel: `noopener noreferrer`,
                              children: [
                                `Apply `,
                                (0, f.jsx)(a, { className: `size-3.5`, "aria-hidden": `true` }),
                              ],
                            }),
                          })
                        : (0, f.jsxs)(r, {
                            size: `sm`,
                            className: `rounded-full`,
                            disabled: !0,
                            children: [
                              `Apply `,
                              (0, f.jsx)(a, { className: `size-3.5`, "aria-hidden": `true` }),
                            ],
                          }),
                    ],
                  }),
                ],
              },
              e.id,
            ),
          ),
        }),
        v.length === 0 &&
          (0, f.jsx)(`p`, {
            className: `mt-16 text-center text-muted-foreground`,
            children: `No programs match your search. Try a different term or filter.`,
          }),
      ],
    }),
  });
}
export { g as component };
