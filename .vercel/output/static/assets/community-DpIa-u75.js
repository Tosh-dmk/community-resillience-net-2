import { n as e } from "./chunk-Bh1tDfsg.js";
import { G as t, o as n } from "./useStore-75krDqnZ.js";
import { o as r, t as i } from "./button-DASjVavO.js";
import { o as a } from "./Logo-B79n9_zK.js";
import { t as o } from "./useSuspenseQuery-BhLrdu7W.js";
import { t as s } from "./send-Bu1cOtSv.js";
import { t as c } from "./users-BMIJ3Mt2.js";
import { C as l, T as u, a as d } from "./index-B9tAZozu.js";
var f = a(`heart-handshake`, [
    [
      `path`,
      {
        d: `M19.414 14.414C21 12.828 22 11.5 22 9.5a5.5 5.5 0 0 0-9.591-3.676.6.6 0 0 1-.818.001A5.5 5.5 0 0 0 2 9.5c0 2.3 1.5 4 3 5.5l5.535 5.362a2 2 0 0 0 2.879.052 2.12 2.12 0 0 0-.004-3 2.124 2.124 0 1 0 3-3 2.124 2.124 0 0 0 3.004 0 2 2 0 0 0 0-2.828l-1.881-1.882a2.41 2.41 0 0 0-3.409 0l-1.71 1.71a2 2 0 0 1-2.828 0 2 2 0 0 1 0-2.828l2.823-2.762`,
        key: `17lmqv`,
      },
    ],
  ]),
  p = a(`message-circle`, [
    [
      `path`,
      {
        d: `M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719`,
        key: `1sd12s`,
      },
    ],
  ]),
  m = a(`square-check-big`, [
    [
      `path`,
      { d: `M21 10.656V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12.344`, key: `2acyp4` },
    ],
    [`path`, { d: `m9 11 3 3L22 4`, key: `1pflzl` }],
  ]),
  h = a(`user-plus`, [
    [`path`, { d: `M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2`, key: `1yyitq` }],
    [`circle`, { cx: `9`, cy: `7`, r: `4`, key: `nufk8` }],
    [`line`, { x1: `19`, x2: `19`, y1: `8`, y2: `14`, key: `1bvyxn` }],
    [`line`, { x1: `22`, x2: `16`, y1: `11`, y2: `11`, key: `1shjgl` }],
  ]),
  g = e(t()),
  _ = n();
function v({ group: e, onClose: t }) {
  let [n, r] = (0, g.useState)(``),
    [a, o] = (0, g.useState)([
      {
        id: 1,
        user: `Amina K.`,
        text: `We need 5 more volunteers at the distribution center.`,
        time: `10:30 AM`,
      },
      {
        id: 2,
        user: `David O.`,
        text: `On my way! Bringing extra bottled water.`,
        time: `10:32 AM`,
      },
    ]),
    [c, l] = (0, g.useState)([
      { id: 1, title: `Sort donations at the local school hall`, claimed: !1 },
      { id: 2, title: `Distribute blankets to temporary shelter`, claimed: !0 },
      { id: 3, title: `Help clean up debris on the main road`, claimed: !1 },
    ]),
    d = (e) => {
      (e.preventDefault(),
        n.trim() &&
          (o([...a, { id: Date.now(), user: `You`, text: n.trim(), time: `Just now` }]), r(``)));
    },
    f = (e) => {
      l(c.map((t) => (t.id === e ? { ...t, claimed: !t.claimed } : t)));
    };
  return (0, _.jsx)(`div`, {
    className: `fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm p-4`,
    children: (0, _.jsxs)(`div`, {
      className: `w-full max-w-4xl rounded-3xl bg-card border border-border flex flex-col md:flex-row shadow-xl relative animate-in fade-in zoom-in-95 duration-200 overflow-hidden max-h-[90vh]`,
      children: [
        (0, _.jsx)(`button`, {
          onClick: t,
          className: `absolute right-4 top-4 z-10 text-muted-foreground hover:text-foreground bg-card rounded-full p-1 shadow-sm cursor-pointer`,
          children: (0, _.jsx)(u, { className: `size-5` }),
        }),
        (0, _.jsxs)(`div`, {
          className: `w-full md:w-1/3 bg-muted/30 p-6 border-r border-border overflow-y-auto`,
          children: [
            (0, _.jsx)(`h2`, {
              className: `font-serif text-2xl font-semibold text-foreground mb-2 pr-6`,
              children: e.name,
            }),
            (0, _.jsx)(`p`, {
              className: `text-sm text-muted-foreground mb-4`,
              children: e.description,
            }),
            (0, _.jsxs)(`div`, {
              className: `flex items-center gap-4 mb-6`,
              children: [
                (0, _.jsx)(`div`, {
                  className: `flex -space-x-2`,
                  children: [1, 2, 3, 4].map((e) =>
                    (0, _.jsx)(
                      `div`,
                      {
                        className: `size-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-xs font-bold border-2 border-card`,
                        children: String.fromCharCode(64 + e),
                      },
                      e,
                    ),
                  ),
                }),
                (0, _.jsxs)(`span`, {
                  className: `text-xs font-medium text-muted-foreground`,
                  children: [`+`, e.member_count, ` members`],
                }),
              ],
            }),
            (0, _.jsxs)(`h3`, {
              className: `font-semibold text-foreground mb-3 flex items-center gap-2`,
              children: [(0, _.jsx)(m, { className: `size-4 text-brand-500` }), ` Active Tasks`],
            }),
            (0, _.jsx)(`ul`, {
              className: `space-y-3`,
              children: c.map((e) =>
                (0, _.jsxs)(
                  `li`,
                  {
                    className: `flex items-start gap-3 bg-card p-3 rounded-xl border border-border`,
                    children: [
                      (0, _.jsx)(`input`, {
                        type: `checkbox`,
                        checked: e.claimed,
                        onChange: () => f(e.id),
                        className: `mt-1 size-4 rounded border-border text-brand-500 focus:ring-brand-500`,
                      }),
                      (0, _.jsx)(`span`, {
                        className: `text-sm ${e.claimed ? `line-through text-muted-foreground` : `text-foreground`}`,
                        children: e.title,
                      }),
                    ],
                  },
                  e.id,
                ),
              ),
            }),
            (0, _.jsxs)(i, {
              className: `w-full mt-6`,
              variant: `outline`,
              children: [(0, _.jsx)(h, { className: `size-4 mr-2` }), ` Share Invite Link`],
            }),
          ],
        }),
        (0, _.jsxs)(`div`, {
          className: `w-full md:w-2/3 flex flex-col bg-card h-[60vh] md:h-auto`,
          children: [
            (0, _.jsxs)(`div`, {
              className: `p-4 border-b border-border bg-muted/10 flex items-center gap-2`,
              children: [
                (0, _.jsx)(p, { className: `size-5 text-accent` }),
                (0, _.jsx)(`h3`, {
                  className: `font-semibold text-foreground`,
                  children: `Live Community Chat`,
                }),
              ],
            }),
            (0, _.jsx)(`div`, {
              className: `flex-1 overflow-y-auto p-4 space-y-4`,
              children: a.map((e) =>
                (0, _.jsxs)(
                  `div`,
                  {
                    className: `flex flex-col max-w-[80%] ${e.user === `You` ? `ml-auto items-end` : `mr-auto items-start`}`,
                    children: [
                      (0, _.jsxs)(`span`, {
                        className: `text-[10px] text-muted-foreground mb-1 px-1`,
                        children: [e.user, ` • `, e.time],
                      }),
                      (0, _.jsx)(`div`, {
                        className: `px-4 py-2 rounded-2xl text-sm ${e.user === `You` ? `bg-accent text-accent-foreground rounded-tr-sm` : `bg-muted text-foreground rounded-tl-sm`}`,
                        children: e.text,
                      }),
                    ],
                  },
                  e.id,
                ),
              ),
            }),
            (0, _.jsxs)(`form`, {
              onSubmit: d,
              className: `p-4 border-t border-border bg-muted/10 flex gap-2`,
              children: [
                (0, _.jsx)(`input`, {
                  type: `text`,
                  placeholder: `Type a message...`,
                  value: n,
                  onChange: (e) => r(e.target.value),
                  className: `flex-1 rounded-full border border-border bg-background px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-accent text-foreground`,
                }),
                (0, _.jsx)(i, {
                  type: `submit`,
                  size: `icon`,
                  className: `rounded-full shrink-0`,
                  children: (0, _.jsx)(s, { className: `size-4` }),
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  });
}
function y() {
  let { data: e } = o(l()),
    [t, n] = (0, g.useState)(null);
  return (0, _.jsxs)(d, {
    children: [
      (0, _.jsxs)(`div`, {
        className: `mx-auto max-w-7xl px-4 py-12`,
        children: [
          (0, _.jsxs)(`header`, {
            className: `max-w-2xl`,
            children: [
              (0, _.jsx)(`h1`, {
                className: `font-serif text-4xl font-semibold text-foreground`,
                children: `You're part of a community`,
              }),
              (0, _.jsx)(`p`, {
                className: `mt-3 text-muted-foreground`,
                children: `Connect with people who understand what you're going through. Share resources, ask questions, and lend a hand where you can.`,
              }),
            ],
          }),
          (0, _.jsx)(`div`, {
            className: `mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3`,
            children: e.map((e) =>
              (0, _.jsxs)(
                `article`,
                {
                  className: `flex flex-col rounded-2xl border border-border bg-card p-6`,
                  children: [
                    (0, _.jsxs)(`div`, {
                      className: `flex items-center justify-between`,
                      children: [
                        (0, _.jsx)(`span`, {
                          className: `rounded-full bg-brand-100 px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-brand-800`,
                          children: e.topic,
                        }),
                        (0, _.jsxs)(`span`, {
                          className: `flex items-center gap-1 text-xs font-medium text-muted-foreground`,
                          children: [
                            (0, _.jsx)(c, { className: `size-3.5`, "aria-hidden": `true` }),
                            e.member_count.toLocaleString(),
                          ],
                        }),
                      ],
                    }),
                    (0, _.jsx)(`h2`, {
                      className: `mt-4 font-serif text-xl font-semibold text-foreground`,
                      children: e.name,
                    }),
                    (0, _.jsx)(`p`, {
                      className: `mt-2 flex-1 text-sm text-muted-foreground`,
                      children: e.description,
                    }),
                    (0, _.jsxs)(`div`, {
                      className: `mt-5 flex items-center justify-between border-t border-border pt-4`,
                      children: [
                        (0, _.jsx)(`span`, {
                          className: `text-xs text-muted-foreground`,
                          children: e.region,
                        }),
                        (0, _.jsxs)(i, {
                          onClick: () => n(e),
                          size: `sm`,
                          className: `rounded-full`,
                          children: [(0, _.jsx)(p, { className: `size-4` }), ` Join Group`],
                        }),
                      ],
                    }),
                  ],
                },
                e.id,
              ),
            ),
          }),
          (0, _.jsx)(`section`, {
            className: `mt-16 rounded-3xl bg-primary p-8 text-primary-foreground md:p-12`,
            children: (0, _.jsxs)(`div`, {
              className: `flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between`,
              children: [
                (0, _.jsxs)(`div`, {
                  className: `max-w-2xl`,
                  children: [
                    (0, _.jsx)(`div`, {
                      className: `mb-3 inline-flex size-11 items-center justify-center rounded-2xl bg-primary-foreground/15`,
                      children: (0, _.jsx)(f, { className: `size-6`, "aria-hidden": `true` }),
                    }),
                    (0, _.jsx)(`h2`, {
                      className: `font-serif text-2xl font-semibold md:text-3xl`,
                      children: `Want to help others rebuild?`,
                    }),
                    (0, _.jsx)(`p`, {
                      className: `mt-2 text-primary-foreground/75`,
                      children: `Offer your time, tools, or skills. Volunteers are the backbone of every recovery.`,
                    }),
                  ],
                }),
                (0, _.jsx)(i, {
                  asChild: !0,
                  size: `lg`,
                  variant: `secondary`,
                  className: `rounded-full`,
                  children: (0, _.jsx)(r, { to: `/report`, children: `Become a volunteer` }),
                }),
              ],
            }),
          }),
        ],
      }),
      t && (0, _.jsx)(v, { group: t, onClose: () => n(null) }),
    ],
  });
}
export { y as component };
