import { r as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { t as Button } from "./button-DRsC1qZi.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as useSuspenseQuery } from "../_libs/tanstack__react-query.mjs";
import {
  D as MessageCircle,
  F as HeartHandshake,
  _ as Send,
  d as SquareCheckBig,
  n as X,
  o as Users,
  s as UserPlus,
} from "../_libs/lucide-react.mjs";
import { s as supportGroupsQuery, t as PageShell } from "./PageShell-DcwVYdMv.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/community-CXId4jLN.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function GroupPortalModal({ group, onClose }) {
  const [chatMsg, setChatMsg] = (0, import_react.useState)("");
  const [messages, setMessages] = (0, import_react.useState)([
    {
      id: 1,
      user: "Amina K.",
      text: "We need 5 more volunteers at the distribution center.",
      time: "10:30 AM",
    },
    {
      id: 2,
      user: "David O.",
      text: "On my way! Bringing extra bottled water.",
      time: "10:32 AM",
    },
  ]);
  const [tasks, setTasks] = (0, import_react.useState)([
    {
      id: 1,
      title: "Sort donations at the local school hall",
      claimed: false,
    },
    {
      id: 2,
      title: "Distribute blankets to temporary shelter",
      claimed: true,
    },
    {
      id: 3,
      title: "Help clean up debris on the main road",
      claimed: false,
    },
  ]);
  const handleSend = (e) => {
    e.preventDefault();
    if (!chatMsg.trim()) return;
    setMessages([
      ...messages,
      {
        id: Date.now(),
        user: "You",
        text: chatMsg.trim(),
        time: "Just now",
      },
    ]);
    setChatMsg("");
  };
  const toggleTask = (id) => {
    setTasks(
      tasks.map((t) =>
        t.id === id
          ? {
              ...t,
              claimed: !t.claimed,
            }
          : t,
      ),
    );
  };
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
    className:
      "fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm p-4",
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
      className:
        "w-full max-w-4xl rounded-3xl bg-card border border-border flex flex-col md:flex-row shadow-xl relative animate-in fade-in zoom-in-95 duration-200 overflow-hidden max-h-[90vh]",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
          onClick: onClose,
          className:
            "absolute right-4 top-4 z-10 text-muted-foreground hover:text-foreground bg-card rounded-full p-1 shadow-sm cursor-pointer",
          children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" }),
        }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
          className: "w-full md:w-1/3 bg-muted/30 p-6 border-r border-border overflow-y-auto",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
              className: "font-serif text-2xl font-semibold text-foreground mb-2 pr-6",
              children: group.name,
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
              className: "text-sm text-muted-foreground mb-4",
              children: group.description,
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
              className: "flex items-center gap-4 mb-6",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                  className: "flex -space-x-2",
                  children: [1, 2, 3, 4].map((i) =>
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                      "div",
                      {
                        className:
                          "size-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-xs font-bold border-2 border-card",
                        children: String.fromCharCode(64 + i),
                      },
                      i,
                    ),
                  ),
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
                  className: "text-xs font-medium text-muted-foreground",
                  children: ["+", group.member_count, " members"],
                }),
              ],
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
              className: "font-semibold text-foreground mb-3 flex items-center gap-2",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SquareCheckBig, {
                  className: "size-4 text-brand-500",
                }),
                " Active Tasks",
              ],
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
              className: "space-y-3",
              children: tasks.map((t) =>
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                  "li",
                  {
                    className: "flex items-start gap-3 bg-card p-3 rounded-xl border border-border",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
                        type: "checkbox",
                        checked: t.claimed,
                        onChange: () => toggleTask(t.id),
                        className:
                          "mt-1 size-4 rounded border-border text-brand-500 focus:ring-brand-500",
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                        className: `text-sm ${t.claimed ? "line-through text-muted-foreground" : "text-foreground"}`,
                        children: t.title,
                      }),
                    ],
                  },
                  t.id,
                ),
              ),
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
              className: "w-full mt-6",
              variant: "outline",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserPlus, { className: "size-4 mr-2" }),
                " Share Invite Link",
              ],
            }),
          ],
        }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
          className: "w-full md:w-2/3 flex flex-col bg-card h-[60vh] md:h-auto",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
              className: "p-4 border-b border-border bg-muted/10 flex items-center gap-2",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, {
                  className: "size-5 text-accent",
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
                  className: "font-semibold text-foreground",
                  children: "Live Community Chat",
                }),
              ],
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
              className: "flex-1 overflow-y-auto p-4 space-y-4",
              children: messages.map((m) =>
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                  "div",
                  {
                    className: `flex flex-col max-w-[80%] ${m.user === "You" ? "ml-auto items-end" : "mr-auto items-start"}`,
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
                        className: "text-[10px] text-muted-foreground mb-1 px-1",
                        children: [m.user, " • ", m.time],
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                        className: `px-4 py-2 rounded-2xl text-sm ${m.user === "You" ? "bg-accent text-accent-foreground rounded-tr-sm" : "bg-muted text-foreground rounded-tl-sm"}`,
                        children: m.text,
                      }),
                    ],
                  },
                  m.id,
                ),
              ),
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
              onSubmit: handleSend,
              className: "p-4 border-t border-border bg-muted/10 flex gap-2",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
                  type: "text",
                  placeholder: "Type a message...",
                  value: chatMsg,
                  onChange: (e) => setChatMsg(e.target.value),
                  className:
                    "flex-1 rounded-full border border-border bg-background px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-accent text-foreground",
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
                  type: "submit",
                  size: "icon",
                  className: "rounded-full shrink-0",
                  children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, {
                    className: "size-4",
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
function Community() {
  const { data: groups } = useSuspenseQuery(supportGroupsQuery());
  const [selectedGroup, setSelectedGroup] = (0, import_react.useState)(null);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageShell, {
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
        className: "mx-auto max-w-7xl px-4 py-12",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
            className: "max-w-2xl",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
                className: "font-serif text-4xl font-semibold text-foreground",
                children: "You're part of a community",
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                className: "mt-3 text-muted-foreground",
                children:
                  "Connect with people who understand what you're going through. Share resources, ask questions, and lend a hand where you can.",
              }),
            ],
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
            className: "mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3",
            children: groups.map((g) =>
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                "article",
                {
                  className: "flex flex-col rounded-2xl border border-border bg-card p-6",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                      className: "flex items-center justify-between",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                          className:
                            "rounded-full bg-brand-100 px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-brand-800",
                          children: g.topic,
                        }),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
                          className:
                            "flex items-center gap-1 text-xs font-medium text-muted-foreground",
                          children: [
                            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, {
                              className: "size-3.5",
                              "aria-hidden": "true",
                            }),
                            g.member_count.toLocaleString(),
                          ],
                        }),
                      ],
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
                      className: "mt-4 font-serif text-xl font-semibold text-foreground",
                      children: g.name,
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                      className: "mt-2 flex-1 text-sm text-muted-foreground",
                      children: g.description,
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                      className:
                        "mt-5 flex items-center justify-between border-t border-border pt-4",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                          className: "text-xs text-muted-foreground",
                          children: g.region,
                        }),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
                          onClick: () => setSelectedGroup(g),
                          size: "sm",
                          className: "rounded-full",
                          children: [
                            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, {
                              className: "size-4",
                            }),
                            " Join Group",
                          ],
                        }),
                      ],
                    }),
                  ],
                },
                g.id,
              ),
            ),
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
            className: "mt-16 rounded-3xl bg-primary p-8 text-primary-foreground md:p-12",
            children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
              className:
                "flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                  className: "max-w-2xl",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                      className:
                        "mb-3 inline-flex size-11 items-center justify-center rounded-2xl bg-primary-foreground/15",
                      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeartHandshake, {
                        className: "size-6",
                        "aria-hidden": "true",
                      }),
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
                      className: "font-serif text-2xl font-semibold md:text-3xl",
                      children: "Want to help others rebuild?",
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                      className: "mt-2 text-primary-foreground/75",
                      children:
                        "Offer your time, tools, or skills. Volunteers are the backbone of every recovery.",
                    }),
                  ],
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
                  asChild: true,
                  size: "lg",
                  variant: "secondary",
                  className: "rounded-full",
                  children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
                    to: "/report",
                    children: "Become a volunteer",
                  }),
                }),
              ],
            }),
          }),
        ],
      }),
      selectedGroup &&
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GroupPortalModal, {
          group: selectedGroup,
          onClose: () => setSelectedGroup(null),
        }),
    ],
  });
}
//#endregion
export { Community as component };
