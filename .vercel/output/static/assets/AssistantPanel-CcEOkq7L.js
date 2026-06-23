import { n as e } from "./chunk-Bh1tDfsg.js";
import { G as t, o as n } from "./useStore-75krDqnZ.js";
import { t as r } from "./button-DASjVavO.js";
import { n as i, t as a } from "./createServerFn-CYy1nZ7z.js";
import { t as o } from "./useMutation-BNzYlUKz.js";
import { t as s } from "./external-link-DpUUiOXd.js";
import { t as c } from "./loader-circle-CHqB8Jlp.js";
import { t as l } from "./send-Bu1cOtSv.js";
import { G as u, O as d } from "./index-B9tAZozu.js";
import { t as f } from "./textarea-Dy7XALEH.js";
var p = e(t(), 1),
  m = a({ method: `POST` }).handler(
    u(`a25da347868e1aa3590e1280af68cec37d48865abed05dc6d83b2e090c30c963`),
  ),
  h = n(),
  g = {
    government: `Government`,
    non_profit: `Non-Profit`,
    community: `Community`,
    donor: `Donor`,
  };
function _({ initialSituation: e = ``, situation: t, setSituation: n }) {
  let [a, u] = (0, p.useState)(e),
    _ = t !== void 0 && n !== void 0,
    v = _ ? t : a,
    y = _ ? n : u,
    b = i(m),
    x = o({ mutationFn: (e) => b({ data: { situation: e } }) });
  return (0, h.jsxs)(`div`, {
    className: `space-y-6`,
    children: [
      (0, h.jsx)(`form`, {
        onSubmit: (e) => {
          (e.preventDefault(), v.trim() && x.mutate(v.trim()));
        },
        className: `rounded-2xl border border-border bg-card p-2 shadow-card`,
        children: (0, h.jsxs)(`div`, {
          className: `flex flex-col gap-3 p-3 sm:flex-row sm:items-end`,
          children: [
            (0, h.jsxs)(`div`, {
              className: `flex-1`,
              children: [
                (0, h.jsxs)(`label`, {
                  htmlFor: `situation`,
                  className: `mb-2 flex items-center gap-1.5 text-sm font-semibold text-accent`,
                  children: [
                    (0, h.jsx)(d, { className: `size-4`, "aria-hidden": `true` }),
                    ` AI Assistant`,
                  ],
                }),
                (0, h.jsx)(f, {
                  id: `situation`,
                  value: v,
                  onChange: (e) => y(e.target.value),
                  placeholder: `I need help with farming seeds and temporary shelter after flooding in Kisumu...`,
                  rows: 3,
                  maxLength: 2e3,
                  className: `resize-none border-0 bg-transparent px-0 text-base shadow-none focus-visible:ring-0`,
                }),
              ],
            }),
            (0, h.jsx)(r, {
              type: `submit`,
              disabled: x.isPending || !v.trim(),
              className: `rounded-xl`,
              size: `lg`,
              children: x.isPending
                ? (0, h.jsxs)(h.Fragment, {
                    children: [(0, h.jsx)(c, { className: `animate-spin` }), ` Finding aid`],
                  })
                : (0, h.jsxs)(h.Fragment, { children: [(0, h.jsx)(l, {}), ` Find Aid`] }),
            }),
          ],
        }),
      }),
      x.isError &&
        (0, h.jsx)(`div`, {
          className: `rounded-xl border border-destructive/30 bg-destructive/5 p-4 text-sm text-destructive`,
          children: x.error.message,
        }),
      x.data &&
        (0, h.jsxs)(`div`, {
          className: `animate-fade-up space-y-6`,
          children: [
            (0, h.jsxs)(`div`, {
              className: `rounded-2xl border border-border bg-card p-6`,
              children: [
                (0, h.jsxs)(`div`, {
                  className: `mb-3 flex items-center gap-2 text-sm font-semibold text-accent`,
                  children: [
                    (0, h.jsx)(d, { className: `size-4`, "aria-hidden": `true` }),
                    ` Recommendation`,
                  ],
                }),
                (0, h.jsx)(`p`, {
                  className: `whitespace-pre-line leading-relaxed text-foreground`,
                  children: x.data.message,
                }),
              ],
            }),
            x.data.recommended.length > 0 &&
              (0, h.jsx)(`div`, {
                className: `grid gap-4 sm:grid-cols-2`,
                children: x.data.recommended.map((e) =>
                  (0, h.jsxs)(
                    `div`,
                    {
                      className: `flex flex-col rounded-2xl border border-border bg-card p-5`,
                      children: [
                        (0, h.jsxs)(`div`, {
                          className: `mb-2 flex items-center justify-between gap-2`,
                          children: [
                            (0, h.jsx)(`span`, {
                              className: `rounded-full bg-brand-100 px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-brand-800`,
                              children: g[e.category],
                            }),
                            e.amount_label &&
                              (0, h.jsx)(`span`, {
                                className: `text-xs font-medium text-muted-foreground`,
                                children: e.amount_label,
                              }),
                          ],
                        }),
                        (0, h.jsx)(`h4`, {
                          className: `font-serif text-lg font-semibold text-foreground`,
                          children: e.name,
                        }),
                        (0, h.jsx)(`p`, {
                          className: `mt-1.5 flex-1 text-sm text-muted-foreground`,
                          children: e.description,
                        }),
                        e.website &&
                          (0, h.jsx)(`div`, {
                            className: `mt-4 flex justify-end border-t border-border pt-3`,
                            children: (0, h.jsx)(r, {
                              size: `sm`,
                              className: `rounded-full h-8 px-3 text-xs`,
                              asChild: !0,
                              children: (0, h.jsxs)(`a`, {
                                href: e.website,
                                target: `_blank`,
                                rel: `noopener noreferrer`,
                                children: [`Apply `, (0, h.jsx)(s, { className: `ml-1.5 size-3` })],
                              }),
                            }),
                          }),
                      ],
                    },
                    e.id,
                  ),
                ),
              }),
          ],
        }),
    ],
  });
}
export { _ as t };
