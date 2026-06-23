import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import {
  B as FileText,
  G as Coins,
  M as House,
  P as HeartPulse,
  Y as CircleCheck,
  a as Waves,
  c as TriangleAlert,
  lt as ArrowLeft,
  r as Wind,
  rt as BookOpen,
  u as Sun,
  w as Mountain,
  x as Phone,
  z as Flame,
} from "../_libs/lucide-react.mjs";
import { t as PageShell } from "./PageShell-DcwVYdMv.mjs";
import { t as Route } from "./resources_.guides._guideId-B322GzVF.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/resources_.guides._guideId-Nlt54YUk.js
var import_jsx_runtime = require_jsx_runtime();
var guidesData = {
  safety: {
    title: "Immediately After a Disaster",
    icon: TriangleAlert,
    content: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, {
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
          className: "text-muted-foreground mb-8 text-lg",
          children:
            "The first few hours and days following a climate disaster are critical for saving lives and ensuring long-term recovery. Select your specific disaster situation below to access immediate emergency action steps, safety protocols, and vital local contacts.",
        }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
          className: "grid grid-cols-1 md:grid-cols-2 gap-6 not-prose",
          children: [
            {
              id: "safety-floods",
              title: "Floods & Flash Floods",
              desc: "What to do during and immediately after rising water levels or flash floods.",
              icon: Waves,
              color:
                "text-blue-500 bg-blue-500/10 border-blue-500/20 dark:bg-blue-950/30 dark:border-blue-900/50",
            },
            {
              id: "safety-droughts",
              title: "Droughts & Dry Spells",
              desc: "Managing severe water shortages, heat exhaustion, and securing livestock.",
              icon: Sun,
              color:
                "text-amber-500 bg-amber-500/10 border-amber-500/20 dark:bg-amber-950/30 dark:border-amber-900/50",
            },
            {
              id: "safety-landslides",
              title: "Landslides & Mudslides",
              desc: "Evacuation alerts, assessing soil movement, and reporting trapped persons.",
              icon: Mountain,
              color:
                "text-emerald-500 bg-emerald-500/10 border-emerald-500/20 dark:bg-emerald-950/30 dark:border-emerald-900/50",
            },
            {
              id: "safety-storms",
              title: "Storms & Strong Winds",
              desc: "Immediate steps during lightning storms, strong winds, and power failures.",
              icon: Wind,
              color:
                "text-cyan-500 bg-cyan-500/10 border-cyan-500/20 dark:bg-cyan-950/30 dark:border-cyan-900/50",
            },
            {
              id: "safety-wildfires",
              title: "Wildfires & Bushfires",
              desc: "Evacuation routes, dealing with thick smoke, and assessing burning hotspots.",
              icon: Flame,
              color:
                "text-orange-500 bg-orange-500/10 border-orange-500/20 dark:bg-orange-950/30 dark:border-orange-900/50",
            },
          ].map((d) =>
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
              Link,
              {
                to: "/resources/guides/$guideId",
                params: { guideId: d.id },
                className:
                  "group flex flex-col p-6 rounded-2xl border border-border bg-card hover:bg-card hover:border-brand-500/30 transition-all duration-300 text-left hover:shadow-soft",
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                    className: `mb-4 flex size-12 items-center justify-center rounded-2xl border ${d.color}`,
                    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(d.icon, {
                      className: "size-6 transition-transform group-hover:scale-110",
                    }),
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
                    className:
                      "font-serif text-xl font-semibold text-foreground group-hover:text-brand-500 transition-colors",
                    children: d.title,
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                    className: "mt-2 text-sm text-muted-foreground leading-relaxed",
                    children: d.desc,
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
                    className:
                      "mt-4 text-xs font-semibold text-brand-600 dark:text-brand-400 group-hover:underline flex items-center gap-1",
                    children: [
                      "View Safety Guide ",
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                        className: "transition-transform group-hover:translate-x-1",
                        children: "→",
                      }),
                    ],
                  }),
                ],
              },
              d.id,
            ),
          ),
        }),
      ],
    }),
  },
  "safety-floods": {
    title: "Floods & Flash Floods Safety",
    icon: Waves,
    content: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, {
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
          className: "mb-8",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
              className: "text-2xl font-serif font-semibold mb-3",
              children: "Immediate Actions After Flooding",
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
              className: "text-muted-foreground mb-4",
              children:
                "When floodwaters begin to recede, or immediately after a flash flood, follow these critical safety steps:",
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
              className: "space-y-3 mb-6",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
                  className: "flex items-start gap-2",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, {
                      className: "size-5 text-emerald-500 mt-0.5 shrink-0",
                    }),
                    " ",
                    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
                          children: "Avoid Moving Water:",
                        }),
                        " Do not walk or drive through floodwaters. Just 15cm of fast-moving water can knock you down, and 30cm can float or sweep away most vehicles.",
                      ],
                    }),
                  ],
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
                  className: "flex items-start gap-2",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, {
                      className: "size-5 text-emerald-500 mt-0.5 shrink-0",
                    }),
                    " ",
                    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
                          children: "Inspect for Gas/Power Hazards:",
                        }),
                        " Do not turn on electricity or use electrical appliances if your house is wet or standing in water. Check for broken gas lines or electrical cables.",
                      ],
                    }),
                  ],
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
                  className: "flex items-start gap-2",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, {
                      className: "size-5 text-emerald-500 mt-0.5 shrink-0",
                    }),
                    " ",
                    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
                          children: "Boil and Treat Water:",
                        }),
                        " Floodwaters contaminate local wells, pipes, and water tables. Boil all water for drinking, cooking, and brushing teeth for at least 1 full minute, or treat it with chlorine tablets (e.g., Aquatabs).",
                      ],
                    }),
                  ],
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
                  className: "flex items-start gap-2",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, {
                      className: "size-5 text-emerald-500 mt-0.5 shrink-0",
                    }),
                    " ",
                    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
                          children: "Document Damage First:",
                        }),
                        " Before you begin cleaning up, take clear, timestamped photos of your property, structure, and ruined belongings for county relief or insurance claims.",
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
          className: "mb-8 p-6 bg-red-500/10 border border-red-500/20 rounded-2xl",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
              className:
                "text-xl font-semibold text-red-700 dark:text-red-400 mb-3 flex items-center gap-2",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "size-5" }),
                " Emergency Contacts",
              ],
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
              className: "space-y-2 text-red-900 dark:text-red-200",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
                      children: "Kenya Red Cross Society (Toll-Free Helpline):",
                    }),
                    " 1199",
                  ],
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
                      children: "National Disaster Operations Centre:",
                    }),
                    " 020 2215105",
                  ],
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
                      children: "St John Ambulance (Emergency Dispatch):",
                    }),
                    " 0721 225 285",
                  ],
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
                      children: "Police Emergency Line:",
                    }),
                    " 999 / 112",
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  },
  "safety-droughts": {
    title: "Drought & Water Scarcity Safety",
    icon: Sun,
    content: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, {
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
          className: "mb-8",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
              className: "text-2xl font-serif font-semibold mb-3",
              children: "Immediate Actions During Severe Droughts",
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
              className: "text-muted-foreground mb-4",
              children:
                "When a dry spell turns severe, local communities must coordinate to ensure water safety and health preservation:",
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
              className: "space-y-3 mb-6",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
                  className: "flex items-start gap-2",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, {
                      className: "size-5 text-emerald-500 mt-0.5 shrink-0",
                    }),
                    " ",
                    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
                          children: "Strict Water Allocation:",
                        }),
                        " Reserve clean, fresh water strictly for drinking and hygiene. Implement greywater recycling (use laundry or kitchen water to flush toilets and support kitchen gardens).",
                      ],
                    }),
                  ],
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
                  className: "flex items-start gap-2",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, {
                      className: "size-5 text-emerald-500 mt-0.5 shrink-0",
                    }),
                    " ",
                    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
                          children: "Monitor Vulnerable Persons:",
                        }),
                        " Watch young children, the elderly, and livestock for signs of severe dehydration, heat stroke, or malnutrition. Protect skin from extreme sunlight.",
                      ],
                    }),
                  ],
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
                  className: "flex items-start gap-2",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, {
                      className: "size-5 text-emerald-500 mt-0.5 shrink-0",
                    }),
                    " ",
                    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
                          children: "Register for Aid & Food Programs:",
                        }),
                        " Visit the local Chief's office or Huduma Center to verify registration for the Hunger Safety Net Programme (HSNP) cash transfers or NGO food distributions.",
                      ],
                    }),
                  ],
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
                  className: "flex items-start gap-2",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, {
                      className: "size-5 text-emerald-500 mt-0.5 shrink-0",
                    }),
                    " ",
                    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
                          children: "Cover Open Water Sources:",
                        }),
                        " Keep all community water pans, boreholes, and tanks covered or shaded to minimize evaporation and prevent contamination from wild animals.",
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
          className: "mb-8 p-6 bg-amber-500/10 border border-amber-500/20 rounded-2xl",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
              className:
                "text-xl font-semibold text-amber-700 dark:text-amber-400 mb-3 flex items-center gap-2",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "size-5" }),
                " Drought & Food Relief Contacts",
              ],
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
              className: "space-y-2 text-amber-900 dark:text-amber-200",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
                      children: "National Drought Management Authority (NDMA):",
                    }),
                    " 020 2227496",
                  ],
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
                      children: "World Food Programme (WFP) Kenya:",
                    }),
                    " 020 7622040",
                  ],
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
                      children: "Kenya Red Cross Relief Services:",
                    }),
                    " 1199",
                  ],
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
                      children: "County Water Department Kiosks:",
                    }),
                    " Contact your local sub-county water officer.",
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  },
  "safety-landslides": {
    title: "Landslide & Mudslide Safety",
    icon: Mountain,
    content: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, {
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
          className: "mb-8",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
              className: "text-2xl font-serif font-semibold mb-3",
              children: "Immediate Actions During & After Landslides",
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
              className: "text-muted-foreground mb-4",
              children:
                "In hilly areas (such as Murang'a, West Pokot, or parts of Rift Valley) heavy rainfall can trigger sudden soil collapse:",
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
              className: "space-y-3 mb-6",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
                  className: "flex items-start gap-2",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, {
                      className: "size-5 text-emerald-500 mt-0.5 shrink-0",
                    }),
                    " ",
                    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
                          children: "Evacuate Immediately:",
                        }),
                        " If you hear rumbling, trees cracking, or see sudden mud/rocks moving, leave the structure immediately. Move out of the direct path of the landslide.",
                      ],
                    }),
                  ],
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
                  className: "flex items-start gap-2",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, {
                      className: "size-5 text-emerald-500 mt-0.5 shrink-0",
                    }),
                    " ",
                    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
                          children: "Stay Clear of the Slide Area:",
                        }),
                        " Avoid entering the slide zone. Additional landslides, slope failures, or mudflows can occur hours or days after the initial collapse.",
                      ],
                    }),
                  ],
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
                  className: "flex items-start gap-2",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, {
                      className: "size-5 text-emerald-500 mt-0.5 shrink-0",
                    }),
                    " ",
                    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
                          children: "Report Trapped Persons:",
                        }),
                        " Immediately contact the local administration or Kenya Red Cross if neighbors are unaccounted for or suspected to be trapped in mud debris.",
                      ],
                    }),
                  ],
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
                  className: "flex items-start gap-2",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, {
                      className: "size-5 text-emerald-500 mt-0.5 shrink-0",
                    }),
                    " ",
                    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
                          children: "Check for Broken Utilities:",
                        }),
                        " Look for and report damaged water pipes, sewage lines, or cracked electrical poles to avoid subsequent hazards.",
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
          className: "mb-8 p-6 bg-emerald-500/10 border border-emerald-500/20 rounded-2xl",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
              className:
                "text-xl font-semibold text-emerald-700 dark:text-emerald-400 mb-3 flex items-center gap-2",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "size-5" }),
                " Mudslide Emergency Contacts",
              ],
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
              className: "space-y-2 text-emerald-900 dark:text-emerald-200",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
                      children: "Kenya Red Cross Emergency Response:",
                    }),
                    " 1199",
                  ],
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
                      children: "National Disaster Management Unit (NDMU):",
                    }),
                    " 020 2210851",
                  ],
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
                      children: "Police Dispatch (Toll-Free):",
                    }),
                    " 999 / 112",
                  ],
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
                      children: "Local Administration Hotline:",
                    }),
                    " Contact your Sub-Location Assistant Chief.",
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  },
  "safety-storms": {
    title: "Storms & Strong Winds Safety",
    icon: Wind,
    content: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, {
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
          className: "mb-8",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
              className: "text-2xl font-serif font-semibold mb-3",
              children: "Immediate Actions During & After Storms",
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
              className: "text-muted-foreground mb-4",
              children:
                "Severe windstorms, cyclones, and lightning strikes require immediate precautionary measures:",
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
              className: "space-y-3 mb-6",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
                  className: "flex items-start gap-2",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, {
                      className: "size-5 text-emerald-500 mt-0.5 shrink-0",
                    }),
                    " ",
                    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
                          children: "Seek Indoor Shelter:",
                        }),
                        " Go indoors immediately. Stay away from windows, glass doors, and outer walls. Avoid sheltering under tall, isolated trees or electrical poles.",
                      ],
                    }),
                  ],
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
                  className: "flex items-start gap-2",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, {
                      className: "size-5 text-emerald-500 mt-0.5 shrink-0",
                    }),
                    " ",
                    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
                          children: "Unplug Electronic Devices:",
                        }),
                        " Power surges from lightning strikes can ruin equipment and cause electrical fires. Disconnect major appliances during storms.",
                      ],
                    }),
                  ],
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
                  className: "flex items-start gap-2",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, {
                      className: "size-5 text-emerald-500 mt-0.5 shrink-0",
                    }),
                    " ",
                    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
                          children: "Avoid Downed Power Lines:",
                        }),
                        " Never approach or touch fallen utility lines. Assume they are live and dangerous. Report them immediately to Kenya Power (KPLC).",
                      ],
                    }),
                  ],
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
                  className: "flex items-start gap-2",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, {
                      className: "size-5 text-emerald-500 mt-0.5 shrink-0",
                    }),
                    " ",
                    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
                          children: "Clear Structural Hazards:",
                        }),
                        " Secure loose iron sheets or timber in your homestead. Ensure that gutters and drains are clear of debris to prevent overflow.",
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
          className: "mb-8 p-6 bg-cyan-500/10 border border-cyan-500/20 rounded-2xl",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
              className:
                "text-xl font-semibold text-cyan-700 dark:text-cyan-400 mb-3 flex items-center gap-2",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "size-5" }),
                " Storm and Power Contacts",
              ],
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
              className: "space-y-2 text-cyan-900 dark:text-cyan-200",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
                      children: "Kenya Power (KPLC) Emergency Line:",
                    }),
                    " 97771 or 0703 070 707",
                  ],
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
                      children: "St John Ambulance Emergency Hotline:",
                    }),
                    " 0721 225 285",
                  ],
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
                      children: "Kenya Meteorological Department (KMD):",
                    }),
                    " meteo.go.ke (for active storm warnings)",
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  },
  "safety-wildfires": {
    title: "Wildfire & Bushfire Safety",
    icon: Flame,
    content: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, {
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
          className: "mb-8",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
              className: "text-2xl font-serif font-semibold mb-3",
              children: "Immediate Actions During & After Wildfires",
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
              className: "text-muted-foreground mb-4",
              children:
                "In dry grasslands or forests (such as Mount Kenya or Mau Forest buffer zones), wildfires can spread rapidly due to dry winds:",
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
              className: "space-y-3 mb-6",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
                  className: "flex items-start gap-2",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, {
                      className: "size-5 text-emerald-500 mt-0.5 shrink-0",
                    }),
                    " ",
                    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
                          children: "Evacuate Early:",
                        }),
                        " Evacuate in the direction opposite to the fire's movement. Do not wait for an official order if you see heavy smoke or approaching flames.",
                      ],
                    }),
                  ],
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
                  className: "flex items-start gap-2",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, {
                      className: "size-5 text-emerald-500 mt-0.5 shrink-0",
                    }),
                    " ",
                    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
                          children: "Protect Air Quality:",
                        }),
                        " Cover your nose and mouth with a wet, thick cloth or mask to filter smoke and ash particles. Close doors, windows, and fireplace dampers.",
                      ],
                    }),
                  ],
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
                  className: "flex items-start gap-2",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, {
                      className: "size-5 text-emerald-500 mt-0.5 shrink-0",
                    }),
                    " ",
                    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
                          children: "Clear Defensible Space:",
                        }),
                        " Clear dry branches, leaves, and firewood at least 10 meters from structures. Wet your roof and walls with water if you have supply.",
                      ],
                    }),
                  ],
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
                  className: "flex items-start gap-2",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, {
                      className: "size-5 text-emerald-500 mt-0.5 shrink-0",
                    }),
                    " ",
                    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
                          children: "Monitor Smoldering Embers:",
                        }),
                        " After the fire passes, check rooftops, wooden fences, and crop borders for hidden ember hotspots that could reignite.",
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
          className: "mb-8 p-6 bg-orange-500/10 border border-orange-500/20 rounded-2xl",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
              className:
                "text-xl font-semibold text-orange-700 dark:text-orange-400 mb-3 flex items-center gap-2",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "size-5" }),
                " Forest & Bushfire Contacts",
              ],
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
              className: "space-y-2 text-orange-900 dark:text-orange-200",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
                      children: "Kenya Forest Service (KFS) Fire Hotline:",
                    }),
                    " 020 2385311",
                  ],
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
                      children: "Kenya Wildlife Service (KWS) (Parks/Buffers):",
                    }),
                    " 0800 597 000 (Toll-free)",
                  ],
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
                      children: "Kenya Red Cross Society (Evacuations/Medical):",
                    }),
                    " 1199",
                  ],
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
                      children: "National Disaster Operations Centre:",
                    }),
                    " 020 2215105",
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  },
  paperwork: {
    title: "Navigating Insurance & Grants",
    icon: FileText,
    content: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, {
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
          className: "mb-8",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
              className: "text-2xl font-serif font-semibold mb-3",
              children: "Documenting Damage",
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
              className: "text-muted-foreground mb-4",
              children:
                "Before cleaning up, document everything for local insurance or county relief claims:",
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
              className: "space-y-3 mb-6",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
                  className: "flex items-start gap-2",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, {
                      className: "size-5 text-emerald-500 mt-0.5 shrink-0",
                    }),
                    " ",
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                      children:
                        "Take clear, timestamped photos and videos of all damaged property and structures.",
                    }),
                  ],
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
                  className: "flex items-start gap-2",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, {
                      className: "size-5 text-emerald-500 mt-0.5 shrink-0",
                    }),
                    " ",
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                      children:
                        "Make an inventory list of lost or ruined items. Include purchase receipts if available.",
                    }),
                  ],
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
                  className: "flex items-start gap-2",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, {
                      className: "size-5 text-emerald-500 mt-0.5 shrink-0",
                    }),
                    " ",
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                      children:
                        "Obtain a Police Abstract if requested by your insurance provider (e.g., Jubilee, Britam) for significant property loss.",
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
          className: "mb-8",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
              className: "text-2xl font-serif font-semibold mb-3",
              children: "Applying for County Assistance",
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
              className: "text-muted-foreground mb-4",
              children: "Many county governments provide emergency stipends or relief kits.",
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ol", {
              className: "list-decimal pl-5 space-y-2 text-muted-foreground",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
                  children: "Visit your local Chief's office to register as an affected person.",
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
                  children: "Bring your original National ID and copies.",
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
                  children:
                    "Fill out the Disaster Needs Assessment form provided by the county officials or Red Cross volunteers.",
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  },
  housing: {
    title: "Finding Temporary Local Shelter",
    icon: House,
    content: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, {
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
          className: "mb-8",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
              className: "text-2xl font-serif font-semibold mb-3",
              children: "Immediate Shelter Options",
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
              className: "text-muted-foreground mb-4",
              children: "If your home is uninhabitable, consider these options:",
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
              className: "space-y-3 mb-6",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
                  className: "flex items-start gap-2",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, {
                      className: "size-5 text-emerald-500 mt-0.5 shrink-0",
                    }),
                    " ",
                    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
                          children: "Evacuation Centers:",
                        }),
                        " Check our Assistance Map for active Red Cross camps, social halls, and schools currently acting as shelters.",
                      ],
                    }),
                  ],
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
                  className: "flex items-start gap-2",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, {
                      className: "size-5 text-emerald-500 mt-0.5 shrink-0",
                    }),
                    " ",
                    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
                          children: "Host Families:",
                        }),
                        " Reach out to community groups on HopeBridge. Many locals open their doors to displaced neighbors.",
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
          className:
            "mb-8 p-6 bg-brand-50 border border-brand-200 dark:bg-brand-950/30 dark:border-brand-800 rounded-2xl",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
              className: "text-xl font-semibold mb-2",
              children: "Long-term Relocation",
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
              className: "text-sm text-muted-foreground mb-4",
              children:
                "If you need to rent a new place, look for government resettlement stipends. Contact the Ministry of Lands, Public Works, Housing and Urban Development for long-term housing initiatives.",
            }),
          ],
        }),
      ],
    }),
  },
  funding: {
    title: "Community Funding & M-Pesa Campaigns",
    icon: Coins,
    content: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, {
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
        className: "mb-8",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
            className: "text-2xl font-serif font-semibold mb-3",
            children: "Crowdsourcing via Paybills",
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
            className: "text-muted-foreground mb-4",
            children:
              "Setting up a transparent M-Pesa Paybill is the fastest way to gather funds from well-wishers across Kenya.",
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
            className: "space-y-3 mb-6",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
                className: "flex items-start gap-2",
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, {
                    className: "size-5 text-emerald-500 mt-0.5 shrink-0",
                  }),
                  " ",
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                    children:
                      "Register a dedicated M-Changa account or acquire a Safaricom Paybill/Till number for your community group.",
                  }),
                ],
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
                className: "flex items-start gap-2",
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, {
                    className: "size-5 text-emerald-500 mt-0.5 shrink-0",
                  }),
                  " ",
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                    children:
                      "Share the Paybill on HopeBridge and social media with a clear breakdown of how funds will be used (e.g., buying maize flour, blankets, iron sheets).",
                  }),
                ],
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
                className: "flex items-start gap-2",
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, {
                    className: "size-5 text-emerald-500 mt-0.5 shrink-0",
                  }),
                  " ",
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                    children: "Keep receipts and update your donors regularly.",
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    }),
  },
  wellbeing: {
    title: "Community Chamas & Support",
    icon: HeartPulse,
    content: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, {
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
          className: "mb-8",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
              className: "text-2xl font-serif font-semibold mb-3",
              children: "Tapping into Local Chamas & Harambees",
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
              className: "text-muted-foreground mb-4",
              children:
                "In Kenya, community-led mutual aid is often the fastest way to mobilize resources after a disaster. Connect with local networks:",
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
              className: "space-y-3 mb-6",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
                  className: "flex items-start gap-2",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, {
                      className: "size-5 text-emerald-500 mt-0.5 shrink-0",
                    }),
                    " ",
                    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
                          children: "Chama Recovery Funds:",
                        }),
                        " Many women-led and neighborhood self-help groups (chamas) pivot to emergency cash transfers or rotating credit to help affected members buy food and basic household items.",
                      ],
                    }),
                  ],
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
                  className: "flex items-start gap-2",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, {
                      className: "size-5 text-emerald-500 mt-0.5 shrink-0",
                    }),
                    " ",
                    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
                          children: "Organizing a Harambee:",
                        }),
                        " Coordinate with community elders and local administration to set up a digital or physical fund drive for severe cases (medical bills, rebuilding houses).",
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
          className: "mb-8",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
              className: "text-2xl font-serif font-semibold mb-3",
              children: "Emotional & Mental Wellbeing",
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
              className: "text-muted-foreground mb-4",
              children:
                "Disasters cause significant emotional trauma. Do not neglect your mental health:",
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
              className: "space-y-3 mb-6",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
                  className: "flex items-start gap-2",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, {
                      className: "size-5 text-emerald-500 mt-0.5 shrink-0",
                    }),
                    " ",
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                      children:
                        "Talk to peers and neighbors in local community circles. Sharing your experiences helps reduce feelings of isolation.",
                    }),
                  ],
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
                  className: "flex items-start gap-2",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, {
                      className: "size-5 text-emerald-500 mt-0.5 shrink-0",
                    }),
                    " ",
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                      children:
                        "Keep a regular routine where possible, focusing on adequate rest, water, and nutritious food.",
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
          className:
            "mb-8 p-6 bg-brand-50 border border-brand-200 dark:bg-brand-950/30 dark:border-brand-800 rounded-2xl",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
              className: "text-xl font-semibold mb-3 flex items-center gap-2",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeartPulse, {
                  className: "size-5 text-brand-500",
                }),
                " Professional Counselling Resources",
              ],
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
              className: "text-sm text-muted-foreground mb-3",
              children:
                "If you or your family members are experiencing severe stress, depression, or sleep problems, reach out for free professional counselling:",
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
              className: "space-y-2 text-sm text-muted-foreground",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
                      children: "Kenya Red Cross Society (24/7 Psychosocial Support helpline):",
                    }),
                    " Call 1199",
                  ],
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
                      children: "Befrienders Kenya (Suicide Prevention & Crisis Line):",
                    }),
                    " Call +254 722 178 177",
                  ],
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
                      children: "County Referral Hospitals:",
                    }),
                    " Visit the department of mental health or social work at your nearest Level 4 or Level 5 hospital.",
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  },
  rebuilding: {
    title: "Rebuilding Stronger & Resilient Agriculture",
    icon: BookOpen,
    content: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, {
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
          className: "mb-8",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
              className: "text-2xl font-serif font-semibold mb-3",
              children: "Climate-Resilient Construction",
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
              className: "text-muted-foreground mb-4",
              children:
                "When rebuilding homes in disaster-prone zones, incorporate these structural safety measures:",
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
              className: "space-y-3 mb-6",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
                  className: "flex items-start gap-2",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, {
                      className: "size-5 text-emerald-500 mt-0.5 shrink-0",
                    }),
                    " ",
                    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
                          children: "Flood Plains (e.g., Budalangi, Nyando):",
                        }),
                        " Build raised foundation plinths (at least 1 meter above historic high-water marks) or build houses on reinforced concrete pillars. Use water-resistant building materials on lower walls.",
                      ],
                    }),
                  ],
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
                  className: "flex items-start gap-2",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, {
                      className: "size-5 text-emerald-500 mt-0.5 shrink-0",
                    }),
                    " ",
                    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
                          children: "Storm & Wind Zones:",
                        }),
                        " Secure roofs with heavy-duty metal strapping (hurricane clips) rather than just nails. Ensure proper roof pitch (between 30 to 45 degrees) to reduce wind lift forces.",
                      ],
                    }),
                  ],
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
                  className: "flex items-start gap-2",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, {
                      className: "size-5 text-emerald-500 mt-0.5 shrink-0",
                    }),
                    " ",
                    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
                          children: "Landslide-Prone Areas:",
                        }),
                        " Rebuild away from steep slopes and runout paths. Construct retaining walls or implement terracing to secure loose soil.",
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
          className: "mb-8",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
              className: "text-2xl font-serif font-semibold mb-3",
              children: "Drought-Resilient Agriculture & Land Management",
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
              className: "text-muted-foreground mb-4",
              children: "Recover and protect your shamba from droughts and soil degradation:",
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
              className: "space-y-3 mb-6",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
                  className: "flex items-start gap-2",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, {
                      className: "size-5 text-emerald-500 mt-0.5 shrink-0",
                    }),
                    " ",
                    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
                          children: "Soil Moisture Conservation:",
                        }),
                        " Apply thick organic mulch (straw, leaves, maize stalks) around crops to prevent water evaporation. Implement minimal tillage to maintain soil structure.",
                      ],
                    }),
                  ],
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
                  className: "flex items-start gap-2",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, {
                      className: "size-5 text-emerald-500 mt-0.5 shrink-0",
                    }),
                    " ",
                    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
                          children: "Drought-Tolerant Crops:",
                        }),
                        " Transition to farming certified early-maturing or drought-tolerant seed varieties (e.g., sorghum, millet, green grams, cassava, drought-resistant maize).",
                      ],
                    }),
                  ],
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
                  className: "flex items-start gap-2",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, {
                      className: "size-5 text-emerald-500 mt-0.5 shrink-0",
                    }),
                    " ",
                    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
                          children: "Water Harvesting:",
                        }),
                        " Dig farm ponds (water pans) or install gutters and tanks for rainwater collection during the short rains.",
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
          className: "mb-8 p-6 bg-emerald-500/10 border border-emerald-500/20 rounded-2xl",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
              className:
                "text-xl font-semibold text-emerald-800 dark:text-emerald-300 mb-2 flex items-center gap-2",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookOpen, { className: "size-5" }),
                " Resilient Rebuilding Contacts",
              ],
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
              className: "text-sm text-emerald-900 dark:text-emerald-200",
              children:
                "For advice on resilient construction and agricultural extension services, contact:",
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
              className: "mt-2 space-y-1 text-sm text-emerald-900 dark:text-emerald-200",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
                      children: "National Construction Authority (NCA):",
                    }),
                    " nca.go.ke (for certified contractors and building codes)",
                  ],
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
                      children: "Ministry of Agriculture Extension Services:",
                    }),
                    " Visit your local Sub-County Agricultural Officer's office.",
                  ],
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
                      children: "KALRO (Kenya Agricultural & Livestock Research Organization):",
                    }),
                    " kalro.go.ke (for drought-resistant seeds advice)",
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  },
};
function GuideDetail() {
  const { guideId } = Route.useParams();
  const guide = guidesData[guideId] || {
    title: `${guideId.replace("-", " ")} Guide`,
    icon: FileText,
    content: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
      className: "text-center py-12",
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
        className: "text-muted-foreground mb-6",
        children:
          "This comprehensive recovery guide is currently being finalized by our disaster response experts. Please check back soon.",
      }),
    }),
  };
  const Icon = guide.icon;
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageShell, {
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
      className: "mx-auto max-w-4xl px-4 py-12",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
          className: "mb-8",
          children: [
            guideId.startsWith("safety-")
              ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
                  to: "/resources/guides/$guideId",
                  params: { guideId: "safety" },
                  className:
                    "inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground mb-6",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, {
                      className: "size-4 mr-2",
                    }),
                    " Back to Safety Guides",
                  ],
                })
              : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
                  to: "/resources",
                  className:
                    "inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground mb-6",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, {
                      className: "size-4 mr-2",
                    }),
                    " Back to Resources",
                  ],
                }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
              className: "flex items-center gap-4",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                  className:
                    "size-16 rounded-2xl bg-brand-100 text-brand-800 flex items-center justify-center dark:bg-brand-950 dark:text-brand-300",
                  children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
                    className: "size-8",
                  }),
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
                  className:
                    "font-serif text-3xl md:text-5xl font-semibold text-foreground capitalize",
                  children: guide.title,
                }),
              ],
            }),
          ],
        }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
          className:
            "prose prose-lg dark:prose-invert max-w-none bg-card border border-border p-8 md:p-12 rounded-3xl",
          children: guide.content,
        }),
      ],
    }),
  });
}
//#endregion
export { GuideDetail as component };
