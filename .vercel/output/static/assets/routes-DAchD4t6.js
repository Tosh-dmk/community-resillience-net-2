import { o as e } from "./useStore-75krDqnZ.js";
import { o as t, t as n } from "./button-DASjVavO.js";
import { o as r } from "./Logo-B79n9_zK.js";
import { t as i } from "./useSuspenseQuery-BhLrdu7W.js";
import { n as a, t as o } from "./wifi-off-BRtn41Cm.js";
import { t as s } from "./badge-dollar-sign-DkJHWVtV.js";
import { t as c } from "./building-2-T_UotKfj.js";
import { t as l } from "./circle-check-CPytu466.js";
import { t as u } from "./file-text-Ci706SLq.js";
import { n as d, t as f } from "./InteractiveMap-DK-zOEKj.js";
import { t as p } from "./shield-check-DYzUTOe_.js";
import { t as m } from "./sprout-Bvb5UyZs.js";
import { t as h } from "./trending-up-CP-mUrrk.js";
import { t as g } from "./users-BMIJ3Mt2.js";
import { a as _, j as v, k as y, x as b, y as x } from "./index-B9tAZozu.js";
import { t as S } from "./AssistantPanel-CcEOkq7L.js";
var C = r(`handshake`, [
    [`path`, { d: `m11 17 2 2a1 1 0 1 0 3-3`, key: `efffak` }],
    [
      `path`,
      {
        d: `m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4`,
        key: `9pr0kb`,
      },
    ],
    [`path`, { d: `m21 3 1 11h-2`, key: `1tisrp` }],
    [`path`, { d: `M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3`, key: `1uvwmv` }],
    [`path`, { d: `M3 4h8`, key: `1ep09j` }],
  ]),
  w = e(),
  T = {
    government: `bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-300`,
    non_profit: `bg-orange-50 text-orange-700 dark:bg-orange-950 dark:text-orange-300`,
    community: `bg-emerald-50 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300`,
    donor: `bg-purple-50 text-purple-700 dark:bg-purple-950 dark:text-purple-300`,
  },
  E = {
    government: `Government`,
    non_profit: `Non-Profit`,
    community: `Community`,
    donor: `Donor`,
  },
  D = [
    {
      n: `01`,
      icon: u,
      title: `Report Your Impact`,
      body: `Submit your situation via web or dial *483*111# from any feature phone — no internet needed.`,
      accent: `text-orange-600`,
      bg: `bg-orange-50 dark:bg-orange-950`,
    },
    {
      n: `02`,
      icon: s,
      title: `Match Climate Finance`,
      body: `HopeBridge surfaces vetted emergency grants, cash transfers, and rebuilding funds you qualify for.`,
      accent: `text-blue-600`,
      bg: `bg-blue-50 dark:bg-blue-950`,
    },
    {
      n: `03`,
      icon: m,
      title: `Rebuild & Adapt`,
      body: `Access mutual aid, step-by-step guides, and resilience programs to rebuild stronger than before.`,
      accent: `text-accent`,
      bg: `bg-brand-100 dark:bg-brand-100/20`,
    },
  ],
  O = [
    {
      n: `1`,
      icon: u,
      title: `Report Damage`,
      body: `Submit your situation and documentation for faster aid matching.`,
      cta: `Start Report`,
      to: `/report`,
    },
    {
      n: `2`,
      icon: s,
      title: `Climate Finance`,
      body: `Browse emergency grants, cash transfers & adaptation programs you qualify for.`,
      cta: `Find Funding`,
      to: `/funding`,
    },
    {
      n: `3`,
      icon: g,
      title: `Local Help`,
      body: `Connect with nearby community groups offering meals, tools, and labor.`,
      cta: `Join Group`,
      to: `/community`,
    },
  ],
  k = [
    { value: `KES 4.2B+`, label: `Climate funds mobilized across Kenya`, icon: h },
    { value: `12,400+`, label: `Families matched to verified programs`, icon: C },
    { value: `47 Counties`, label: `Offline USSD access nationwide`, icon: o },
    { value: `230+ NGOs`, label: `Vetted partner organizations`, icon: c },
  ];
function A() {
  let { data: e } = i(b()),
    { data: r } = i(x()),
    s = r[0],
    u = e.slice(0, 3),
    h = () => {
      window.dispatchEvent(new CustomEvent(`demo:open-ussd`));
    };
  return (0, w.jsx)(_, {
    children: (0, w.jsxs)(`div`, {
      className: `mx-auto max-w-7xl px-4 py-10 md:py-16`,
      children: [
        (0, w.jsx)(`section`, {
          className: `mb-20 animate-fade-up`,
          children: (0, w.jsxs)(`div`, {
            className: `grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center`,
            children: [
              (0, w.jsxs)(`div`, {
                children: [
                  (0, w.jsxs)(`div`, {
                    className: `mb-5 inline-flex items-center gap-2 rounded-full border border-accent/25 bg-accent/10 px-3.5 py-1.5 text-xs font-semibold text-accent`,
                    children: [
                      (0, w.jsx)(m, { className: `size-3.5` }),
                      `Climate Finance & Community Resilience Platform`,
                    ],
                  }),
                  (0, w.jsxs)(`h1`, {
                    className: `font-serif text-4xl font-semibold leading-[1.1] text-foreground md:text-6xl`,
                    children: [
                      `Climate disasters happen.`,
                      ` `,
                      (0, w.jsx)(`span`, {
                        className: `italic text-accent`,
                        children: `Recovery funding exists.`,
                      }),
                    ],
                  }),
                  (0, w.jsx)(`p`, {
                    className: `mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground`,
                    children: `HopeBridge connects climate-affected communities with emergency grants, cash assistance, vetted aid organizations, and resilience programs — accessible online or offline via USSD.`,
                  }),
                  (0, w.jsxs)(`div`, {
                    className: `mt-8 flex flex-wrap gap-3`,
                    children: [
                      (0, w.jsx)(n, {
                        asChild: !0,
                        size: `lg`,
                        className: `rounded-full`,
                        children: (0, w.jsx)(t, {
                          to: `/funding`,
                          children: `Find Climate Finance`,
                        }),
                      }),
                      (0, w.jsxs)(n, {
                        variant: `outline`,
                        size: `lg`,
                        className: `rounded-full gap-2`,
                        onClick: h,
                        id: `hero-ussd-btn`,
                        children: [(0, w.jsx)(y, { className: `size-4` }), `Offline USSD Demo`],
                      }),
                    ],
                  }),
                  (0, w.jsxs)(`div`, {
                    className: `mt-8 flex items-center gap-3 rounded-2xl border border-border bg-card px-4 py-3`,
                    children: [
                      (0, w.jsx)(`div`, {
                        className: `flex size-8 shrink-0 items-center justify-center rounded-lg bg-emerald-100 dark:bg-emerald-950`,
                        children: (0, w.jsx)(o, {
                          className: `size-4 text-emerald-700 dark:text-emerald-400`,
                        }),
                      }),
                      (0, w.jsxs)(`p`, {
                        className: `text-sm text-muted-foreground`,
                        children: [
                          (0, w.jsx)(`span`, {
                            className: `font-semibold text-foreground`,
                            children: `Works without internet.`,
                          }),
                          ` `,
                          `Dial`,
                          ` `,
                          (0, w.jsx)(`code`, {
                            className: `rounded bg-muted px-1.5 py-0.5 font-mono text-xs text-foreground`,
                            children: `*483*111#`,
                          }),
                          ` `,
                          `from any feature phone to report damage and access grants.`,
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              (0, w.jsxs)(`div`, {
                className: `rounded-3xl border border-border bg-card p-6 shadow-soft`,
                children: [
                  (0, w.jsxs)(`div`, {
                    className: `mb-4 flex items-center gap-2`,
                    children: [
                      (0, w.jsx)(`div`, {
                        className: `flex size-8 items-center justify-center rounded-xl bg-brand-100 text-brand-800`,
                        children: (0, w.jsx)(p, { className: `size-4` }),
                      }),
                      (0, w.jsxs)(`div`, {
                        children: [
                          (0, w.jsx)(`p`, {
                            className: `text-sm font-semibold text-foreground`,
                            children: `Recovery Assistant`,
                          }),
                          (0, w.jsx)(`p`, {
                            className: `text-xs text-muted-foreground`,
                            children: `Describe your situation to find matching funds`,
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, w.jsx)(S, {}),
                ],
              }),
            ],
          }),
        }),
        (0, w.jsx)(`section`, {
          className: `mb-20`,
          children: (0, w.jsx)(`div`, {
            className: `grid grid-cols-2 gap-4 md:grid-cols-4`,
            children: k.map((e) =>
              (0, w.jsxs)(
                `div`,
                {
                  className: `rounded-2xl border border-border bg-card p-5 text-center`,
                  children: [
                    (0, w.jsx)(e.icon, { className: `mx-auto size-5 text-accent mb-2` }),
                    (0, w.jsx)(`p`, {
                      className: `font-serif text-2xl font-semibold text-foreground`,
                      children: e.value,
                    }),
                    (0, w.jsx)(`p`, {
                      className: `mt-1 text-xs text-muted-foreground`,
                      children: e.label,
                    }),
                  ],
                },
                e.label,
              ),
            ),
          }),
        }),
        (0, w.jsxs)(`section`, {
          className: `mb-20`,
          children: [
            (0, w.jsxs)(`div`, {
              className: `mb-10 text-center`,
              children: [
                (0, w.jsx)(`h2`, {
                  className: `font-serif text-3xl font-semibold text-foreground md:text-4xl`,
                  children: `How HopeBridge works`,
                }),
                (0, w.jsx)(`p`, {
                  className: `mt-3 text-muted-foreground`,
                  children: `Three steps from disaster to recovery funding — with or without internet.`,
                }),
              ],
            }),
            (0, w.jsx)(`div`, {
              className: `grid grid-cols-1 gap-6 md:grid-cols-3`,
              children: D.map((e) =>
                (0, w.jsxs)(
                  `div`,
                  {
                    className: `relative rounded-3xl border border-border bg-card p-8`,
                    children: [
                      (0, w.jsxs)(`div`, {
                        className: `mb-6 flex items-center justify-between`,
                        children: [
                          (0, w.jsx)(`div`, {
                            className: `flex size-12 items-center justify-center rounded-2xl ${e.bg}`,
                            children: (0, w.jsx)(e.icon, { className: `size-6 ${e.accent}` }),
                          }),
                          (0, w.jsx)(`span`, {
                            className: `font-serif text-4xl font-bold text-border`,
                            children: e.n,
                          }),
                        ],
                      }),
                      (0, w.jsx)(`h3`, {
                        className: `font-serif text-xl font-semibold text-foreground`,
                        children: e.title,
                      }),
                      (0, w.jsx)(`p`, {
                        className: `mt-3 text-sm leading-relaxed text-muted-foreground`,
                        children: e.body,
                      }),
                    ],
                  },
                  e.n,
                ),
              ),
            }),
          ],
        }),
        (0, w.jsx)(`section`, {
          className: `mb-20 overflow-hidden rounded-[2.5rem] border border-border bg-card`,
          children: (0, w.jsxs)(`div`, {
            className: `grid grid-cols-1 lg:grid-cols-2`,
            children: [
              (0, w.jsxs)(`div`, {
                className: `p-8 md:p-12`,
                children: [
                  (0, w.jsxs)(`div`, {
                    className: `mb-4 inline-flex items-center gap-2 rounded-full bg-amber-100 px-3 py-1 text-xs font-bold uppercase tracking-wider text-amber-800 dark:bg-amber-950 dark:text-amber-300`,
                    children: [(0, w.jsx)(o, { className: `size-3` }), ` Offline First`],
                  }),
                  (0, w.jsx)(`h2`, {
                    className: `font-serif text-3xl font-semibold text-foreground md:text-4xl`,
                    children: `Climate finance, even without internet`,
                  }),
                  (0, w.jsx)(`p`, {
                    className: `mt-4 text-muted-foreground`,
                    children: `In rural and flood-affected areas, connectivity disappears when it's needed most. HopeBridge's USSD interface works on any feature phone, with no data required.`,
                  }),
                  (0, w.jsx)(`ul`, {
                    className: `mt-6 space-y-3`,
                    children: [
                      `Report disaster damage from any phone`,
                      `Request emergency supplies & shelter locations`,
                      `Browse & apply for climate grants`,
                      `Talk to local chiefs and coordinators`,
                    ].map((e) =>
                      (0, w.jsxs)(
                        `li`,
                        {
                          className: `flex items-center gap-3 text-sm`,
                          children: [
                            (0, w.jsx)(l, { className: `size-4 shrink-0 text-accent` }),
                            (0, w.jsx)(`span`, { className: `text-foreground`, children: e }),
                          ],
                        },
                        e,
                      ),
                    ),
                  }),
                  (0, w.jsxs)(`div`, {
                    className: `mt-8 flex flex-wrap gap-3`,
                    children: [
                      (0, w.jsxs)(n, {
                        size: `lg`,
                        className: `rounded-full gap-2`,
                        onClick: h,
                        id: `ussd-section-btn`,
                        children: [(0, w.jsx)(y, { className: `size-4` }), `Launch USSD Simulator`],
                      }),
                      (0, w.jsx)(n, {
                        asChild: !0,
                        variant: `outline`,
                        size: `lg`,
                        className: `rounded-full`,
                        children: (0, w.jsx)(t, { to: `/resources`, children: `Learn More` }),
                      }),
                    ],
                  }),
                ],
              }),
              (0, w.jsx)(`div`, {
                className: `flex items-center justify-center bg-gradient-to-br from-brand-100/60 to-accent/10 p-8 md:p-12 dark:from-brand-100/10 dark:to-accent/5`,
                children: (0, w.jsxs)(`div`, {
                  className: `w-48 rounded-2xl bg-neutral-800 p-2 border-2 border-neutral-700 shadow-xl`,
                  children: [
                    (0, w.jsxs)(`div`, {
                      className: `h-28 bg-[#8fa48c] border-2 border-[#788e75] rounded-md p-2 font-mono text-neutral-900 text-[9px] leading-tight flex flex-col gap-0.5`,
                      children: [
                        (0, w.jsx)(`div`, {
                          className: `text-right opacity-75`,
                          children: `Safaricom`,
                        }),
                        (0, w.jsx)(`div`, {
                          className: `text-center font-bold tracking-widest py-0.5 border-b border-neutral-700/20 mb-1 text-xs`,
                          children: `*483*111#`,
                        }),
                        (0, w.jsx)(`div`, {
                          className: `font-bold`,
                          children: `HopeBridge Portal`,
                        }),
                        (0, w.jsx)(`div`, { children: `1. Report Hazard` }),
                        (0, w.jsx)(`div`, { children: `2. Request Supplies` }),
                        (0, w.jsx)(`div`, {
                          className: `text-emerald-800 font-bold`,
                          children: `3. Climate Grants ✓`,
                        }),
                        (0, w.jsx)(`div`, { children: `4. Nearest Shelter` }),
                        (0, w.jsx)(`div`, { children: `5. Talk to Chief` }),
                      ],
                    }),
                    (0, w.jsx)(`div`, {
                      className: `mt-2 grid grid-cols-3 gap-0.5 w-full`,
                      children: [`1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`, `*`, `0`, `#`].map(
                        (e) =>
                          (0, w.jsx)(
                            `div`,
                            {
                              className: `h-5 rounded bg-neutral-700 flex items-center justify-center text-neutral-300 text-[8px] font-bold`,
                              children: e,
                            },
                            e,
                          ),
                      ),
                    }),
                  ],
                }),
              }),
            ],
          }),
        }),
        (0, w.jsx)(`section`, {
          className: `mb-20 grid grid-cols-1 gap-6 md:grid-cols-3`,
          children: O.map((e) =>
            (0, w.jsxs)(
              `div`,
              {
                className: `group relative overflow-hidden rounded-3xl border border-border bg-card p-8 transition-all hover:shadow-soft`,
                children: [
                  (0, w.jsx)(`div`, {
                    className: `mb-6 flex size-12 items-center justify-center rounded-2xl bg-brand-100 text-brand-800`,
                    children: (0, w.jsx)(e.icon, { className: `size-6`, "aria-hidden": `true` }),
                  }),
                  (0, w.jsx)(`h3`, {
                    className: `font-serif text-2xl font-semibold text-foreground`,
                    children: e.title,
                  }),
                  (0, w.jsx)(`p`, { className: `mt-3 text-muted-foreground`, children: e.body }),
                  (0, w.jsxs)(t, {
                    to: e.to,
                    className: `mt-6 inline-flex items-center font-semibold text-accent`,
                    children: [
                      e.cta,
                      (0, w.jsx)(a, {
                        className: `ml-2 size-4 transition-transform group-hover:translate-x-1`,
                      }),
                    ],
                  }),
                ],
              },
              e.n,
            ),
          ),
        }),
        (0, w.jsxs)(`section`, {
          className: `mb-20`,
          children: [
            (0, w.jsxs)(`div`, {
              className: `mb-8 flex items-end justify-between gap-4`,
              children: [
                (0, w.jsxs)(`div`, {
                  children: [
                    (0, w.jsx)(`h2`, {
                      className: `font-serif text-3xl font-semibold text-foreground`,
                      children: `Assistance Near You`,
                    }),
                    (0, w.jsx)(`p`, {
                      className: `mt-2 text-muted-foreground`,
                      children: `Temporary shelters, distribution centers, and aid hubs — updated in real time.`,
                    }),
                  ],
                }),
                (0, w.jsx)(n, {
                  asChild: !0,
                  variant: `ghost`,
                  className: `hidden shrink-0 text-accent sm:inline-flex`,
                  children: (0, w.jsx)(t, { to: `/map`, children: `Expand map view` }),
                }),
              ],
            }),
            (0, w.jsxs)(`div`, {
              className: `relative overflow-hidden rounded-3xl ring-1 ring-border`,
              children: [
                (0, w.jsx)(f, {
                  centers: r,
                  selectedId: s?.id,
                  className: `h-[320px] w-full rounded-3xl md:h-[420px]`,
                }),
                s &&
                  (0, w.jsxs)(`div`, {
                    className: `absolute z-[1000] bottom-4 left-4 right-4 max-w-sm rounded-2xl bg-card/95 p-6 shadow-soft backdrop-blur-sm sm:bottom-6 sm:left-6`,
                    children: [
                      (0, w.jsxs)(`div`, {
                        className: `mb-4 flex items-center justify-between`,
                        children: [
                          (0, w.jsx)(`span`, {
                            className: `text-xs font-bold uppercase tracking-widest text-brand-400`,
                            children: `Nearest Center`,
                          }),
                          s.is_open &&
                            (0, w.jsx)(`span`, {
                              className: `flex items-center gap-1 text-xs font-semibold text-emerald-600`,
                              children: `● Active Now`,
                            }),
                        ],
                      }),
                      (0, w.jsx)(`h3`, {
                        className: `font-serif text-lg font-semibold text-foreground`,
                        children: s.name,
                      }),
                      (0, w.jsxs)(`p`, {
                        className: `mt-1 text-sm text-muted-foreground`,
                        children: [s.address, ` • `, s.services.slice(0, 3).join(`, `)],
                      }),
                      (0, w.jsxs)(`div`, {
                        className: `mt-4 flex gap-2`,
                        children: [
                          (0, w.jsx)(n, {
                            asChild: !0,
                            size: `sm`,
                            className: `flex-1`,
                            children: (0, w.jsxs)(`a`, {
                              href: `https://www.google.com/maps/dir/?api=1&destination=${s.lat},${s.lng}`,
                              target: `_blank`,
                              rel: `noopener noreferrer`,
                              children: [
                                (0, w.jsx)(d, { className: `size-4`, "aria-hidden": `true` }),
                                ` Get Directions`,
                              ],
                            }),
                          }),
                          s.phone &&
                            (0, w.jsx)(n, {
                              variant: `outline`,
                              size: `sm`,
                              "aria-label": `Call center`,
                              asChild: !0,
                              children: (0, w.jsx)(`a`, {
                                href: `tel:${s.phone}`,
                                children: (0, w.jsx)(v, {
                                  className: `size-4`,
                                  "aria-hidden": `true`,
                                }),
                              }),
                            }),
                        ],
                      }),
                    ],
                  }),
              ],
            }),
          ],
        }),
        (0, w.jsxs)(`section`, {
          className: `mb-20`,
          children: [
            (0, w.jsxs)(`div`, {
              className: `mb-8 flex items-end justify-between gap-4`,
              children: [
                (0, w.jsxs)(`div`, {
                  children: [
                    (0, w.jsx)(`h2`, {
                      className: `font-serif text-3xl font-semibold text-foreground`,
                      children: `Active Climate Finance Programs`,
                    }),
                    (0, w.jsx)(`p`, {
                      className: `mt-2 text-muted-foreground`,
                      children: `Verified organizations currently accepting applications across Kenya.`,
                    }),
                  ],
                }),
                (0, w.jsx)(n, {
                  asChild: !0,
                  variant: `ghost`,
                  className: `hidden shrink-0 text-accent sm:inline-flex`,
                  children: (0, w.jsx)(t, { to: `/funding`, children: `View all funding` }),
                }),
              ],
            }),
            (0, w.jsx)(`div`, {
              className: `grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3`,
              children: u.map((e) =>
                (0, w.jsxs)(
                  `div`,
                  {
                    className: `rounded-2xl border border-border bg-card p-6`,
                    children: [
                      (0, w.jsxs)(`div`, {
                        className: `flex items-start justify-between`,
                        children: [
                          (0, w.jsx)(`div`, {
                            className: `grid size-12 place-items-center rounded-xl bg-brand-100 font-serif font-bold text-brand-800`,
                            children: e.name.charAt(0),
                          }),
                          (0, w.jsx)(`span`, {
                            className: `rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wide ${T[e.category]}`,
                            children: E[e.category],
                          }),
                        ],
                      }),
                      (0, w.jsx)(`h3`, {
                        className: `mt-4 font-semibold text-foreground`,
                        children: e.name,
                      }),
                      (0, w.jsx)(`p`, {
                        className: `mt-2 line-clamp-3 text-sm text-muted-foreground`,
                        children: e.description,
                      }),
                      (0, w.jsxs)(`div`, {
                        className: `mt-6 flex items-center justify-between border-t border-border pt-4`,
                        children: [
                          (0, w.jsx)(`span`, {
                            className: `text-xs font-medium text-muted-foreground`,
                            children: e.amount_label ?? e.deadline ?? `Available now`,
                          }),
                          (0, w.jsx)(t, {
                            to: `/funding`,
                            className: `text-sm font-semibold text-accent`,
                            children: `Apply →`,
                          }),
                        ],
                      }),
                    ],
                  },
                  e.id,
                ),
              ),
            }),
          ],
        }),
        (0, w.jsxs)(`section`, {
          className: `grid grid-cols-1 gap-6 md:grid-cols-2`,
          children: [
            (0, w.jsxs)(`div`, {
              className: `rounded-[2.5rem] bg-primary p-8 text-primary-foreground md:p-10`,
              children: [
                (0, w.jsx)(g, { className: `mb-4 size-8 text-primary-foreground/60` }),
                (0, w.jsx)(`h2`, {
                  className: `font-serif text-2xl font-semibold md:text-3xl`,
                  children: `The heart of recovery is community.`,
                }),
                (0, w.jsx)(`p`, {
                  className: `mt-4 text-sm text-primary-foreground/75`,
                  children: `Connect with others who have faced similar challenges. Share resources, find volunteers, or talk with people who understand.`,
                }),
                (0, w.jsxs)(`div`, {
                  className: `mt-8 flex flex-wrap gap-3`,
                  children: [
                    (0, w.jsx)(n, {
                      asChild: !0,
                      size: `sm`,
                      variant: `secondary`,
                      className: `rounded-full`,
                      children: (0, w.jsx)(t, {
                        to: `/community`,
                        children: `Browse support groups`,
                      }),
                    }),
                    (0, w.jsx)(n, {
                      asChild: !0,
                      size: `sm`,
                      variant: `outline`,
                      className: `rounded-full border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground`,
                      children: (0, w.jsx)(t, { to: `/community`, children: `Become a volunteer` }),
                    }),
                  ],
                }),
              ],
            }),
            (0, w.jsxs)(`div`, {
              className: `rounded-[2.5rem] border border-border bg-card p-8 md:p-10`,
              children: [
                (0, w.jsx)(c, { className: `mb-4 size-8 text-accent` }),
                (0, w.jsx)(`h2`, {
                  className: `font-serif text-2xl font-semibold text-foreground md:text-3xl`,
                  children: `Are you an NGO or government agency?`,
                }),
                (0, w.jsx)(`p`, {
                  className: `mt-4 text-sm text-muted-foreground`,
                  children: `HopeBridge provides coordination dashboards, beneficiary tracking, and climate-finance analytics for organizations operating at scale.`,
                }),
                (0, w.jsx)(`div`, {
                  className: `mt-8`,
                  children: (0, w.jsx)(n, {
                    asChild: !0,
                    size: `sm`,
                    className: `rounded-full`,
                    children: (0, w.jsx)(t, {
                      to: `/operations`,
                      children: `View Operations Portal`,
                    }),
                  }),
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  });
}
export { A as component };
