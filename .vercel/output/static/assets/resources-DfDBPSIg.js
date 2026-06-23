import { o as e } from "./useStore-75krDqnZ.js";
import { o as t } from "./button-DASjVavO.js";
import { o as n } from "./Logo-B79n9_zK.js";
import { t as r } from "./useSuspenseQuery-BhLrdu7W.js";
import { n as i, r as a, t as o } from "./house-8PM0e6W3.js";
import { A as s, S as c, a as l } from "./index-B9tAZozu.js";
var u = n(`banknote`, [
    [`rect`, { width: `20`, height: `12`, x: `2`, y: `6`, rx: `2`, key: `9lu3g6` }],
    [`circle`, { cx: `12`, cy: `12`, r: `2`, key: `1c9p78` }],
    [`path`, { d: `M6 12h.01M18 12h.01`, key: `113zkx` }],
  ]),
  d = n(`bell`, [
    [`path`, { d: `M10.268 21a2 2 0 0 0 3.464 0`, key: `vwvbt9` }],
    [
      `path`,
      {
        d: `M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326`,
        key: `11g9vi`,
      },
    ],
  ]),
  f = n(`file-check`, [
    [
      `path`,
      {
        d: `M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z`,
        key: `1oefj6`,
      },
    ],
    [`path`, { d: `M14 2v5a1 1 0 0 0 1 1h5`, key: `wfsgrz` }],
    [`path`, { d: `m9 15 2 2 4-4`, key: `1grp1n` }],
  ]),
  p = e(),
  m = [
    {
      icon: s,
      title: `Immediately after a disaster`,
      body: `Safety first: check for hazards, document damage, and contact local chiefs or Kenya Red Cross.`,
      tag: `Safety`,
    },
    {
      icon: f,
      title: `Filing insurance & government claims`,
      body: `Step-by-step checklist for logging losses and registering for aid at nearby Huduma Centers.`,
      tag: `Paperwork`,
    },
    {
      icon: o,
      title: `Finding temporary shelter`,
      body: `Accessing local schools, church shelters, and government relocation spaces while you rebuild.`,
      tag: `Housing`,
    },
    {
      icon: u,
      title: `Applying for NDMA & NGO aid`,
      body: `How to register for the Hunger Safety Net Programme (HSNP) cash transfers and NGO rebuilding grants.`,
      tag: `Funding`,
    },
    {
      icon: i,
      title: `Community chamas & support`,
      body: `Leveraging self-help groups, local Harambees, and community networks to share reconstruction resources.`,
      tag: `Wellbeing`,
    },
    {
      icon: a,
      title: `Rebuilding stronger`,
      body: `Resilient building advice for flood plains (elevated structures) and drought-resistant soil rehabilitation.`,
      tag: `Rebuilding`,
    },
  ],
  h = {
    high: `bg-destructive/10 text-destructive`,
    medium: `bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300`,
    info: `bg-brand-100 text-brand-800`,
  };
function g() {
  let { data: e } = r(c());
  return (0, p.jsx)(l, {
    children: (0, p.jsxs)(`div`, {
      className: `mx-auto max-w-7xl px-4 py-12`,
      children: [
        (0, p.jsxs)(`header`, {
          className: `max-w-2xl`,
          children: [
            (0, p.jsx)(`h1`, {
              className: `font-serif text-4xl font-semibold text-foreground`,
              children: `Recovery resource hub`,
            }),
            (0, p.jsx)(`p`, {
              className: `mt-3 text-muted-foreground`,
              children: `Practical, plain-language guides for every stage of recovery — plus live updates on the programs available to you.`,
            }),
          ],
        }),
        (0, p.jsxs)(`div`, {
          className: `mt-10 grid grid-cols-1 gap-10 lg:grid-cols-3`,
          children: [
            (0, p.jsxs)(`div`, {
              className: `lg:col-span-2`,
              children: [
                (0, p.jsx)(`h2`, {
                  className: `mb-6 font-serif text-2xl font-semibold text-foreground`,
                  children: `Recovery guides`,
                }),
                (0, p.jsx)(`div`, {
                  className: `grid grid-cols-1 gap-6 sm:grid-cols-2`,
                  children: m.map((e) =>
                    (0, p.jsxs)(
                      t,
                      {
                        to: `/resources/guides/$guideId`,
                        params: { guideId: e.tag.toLowerCase() },
                        className: `rounded-2xl border border-border bg-card p-6 transition-all hover:shadow-soft block text-left`,
                        children: [
                          (0, p.jsx)(`div`, {
                            className: `mb-4 flex size-11 items-center justify-center rounded-2xl bg-brand-100 text-brand-800`,
                            children: (0, p.jsx)(e.icon, {
                              className: `size-5`,
                              "aria-hidden": `true`,
                            }),
                          }),
                          (0, p.jsx)(`span`, {
                            className: `text-[11px] font-bold uppercase tracking-wide text-brand-400`,
                            children: e.tag,
                          }),
                          (0, p.jsx)(`h3`, {
                            className: `mt-1 font-serif text-lg font-semibold text-foreground`,
                            children: e.title,
                          }),
                          (0, p.jsx)(`p`, {
                            className: `mt-2 text-sm text-muted-foreground`,
                            children: e.body,
                          }),
                        ],
                      },
                      e.title,
                    ),
                  ),
                }),
              ],
            }),
            (0, p.jsxs)(`aside`, {
              children: [
                (0, p.jsxs)(`h2`, {
                  className: `mb-6 flex items-center gap-2 font-serif text-2xl font-semibold text-foreground`,
                  children: [
                    (0, p.jsx)(d, { className: `size-5 text-accent`, "aria-hidden": `true` }),
                    ` Live updates`,
                  ],
                }),
                (0, p.jsx)(`div`, {
                  className: `space-y-4`,
                  children: e.map((e) =>
                    (0, p.jsxs)(
                      `article`,
                      {
                        className: `rounded-2xl border border-border bg-card p-5`,
                        children: [
                          (0, p.jsxs)(`div`, {
                            className: `flex items-center justify-between gap-2`,
                            children: [
                              (0, p.jsx)(`span`, {
                                className: `rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide ${h[e.severity] ?? h.info}`,
                                children: e.severity,
                              }),
                              (0, p.jsx)(`span`, {
                                className: `text-xs text-muted-foreground`,
                                children: e.region,
                              }),
                            ],
                          }),
                          (0, p.jsx)(`h3`, {
                            className: `mt-3 font-semibold leading-snug text-foreground`,
                            children: e.title,
                          }),
                          (0, p.jsx)(`p`, {
                            className: `mt-1.5 text-sm text-muted-foreground`,
                            children: e.body,
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
        }),
      ],
    }),
  });
}
export { g as component };
