import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { t as Button } from "./button-DRsC1qZi.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as useSuspenseQuery } from "../_libs/tanstack__react-query.mjs";
import { B as FileText, C as Navigation, I as Handshake, Y as CircleCheck, ct as ArrowRight, f as Sprout, h as ShieldCheck, i as WifiOff, l as TrendingUp, m as Smartphone, nt as Building2, o as Users, ot as BadgeDollarSign, x as Phone } from "../_libs/lucide-react.mjs";
import { a as organizationsQuery, r as assistanceCentersQuery, t as PageShell } from "./PageShell-DcwVYdMv.mjs";
import { t as AssistantPanel } from "./AssistantPanel-B4T5n5ZB.mjs";
import { t as InteractiveMap } from "./InteractiveMap-BmhZ9Pjv.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-YRpsli8N.js
var import_jsx_runtime = require_jsx_runtime();
var categoryStyles = {
	government: "bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-300",
	non_profit: "bg-orange-50 text-orange-700 dark:bg-orange-950 dark:text-orange-300",
	community: "bg-emerald-50 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300",
	donor: "bg-purple-50 text-purple-700 dark:bg-purple-950 dark:text-purple-300"
};
var categoryLabel = {
	government: "Government",
	non_profit: "Non-Profit",
	community: "Community",
	donor: "Donor"
};
var howItWorksSteps = [
	{
		n: "01",
		icon: FileText,
		title: "Report Your Impact",
		body: "Submit your situation via web or dial *483*111# from any feature phone — no internet needed.",
		accent: "text-orange-600",
		bg: "bg-orange-50 dark:bg-orange-950"
	},
	{
		n: "02",
		icon: BadgeDollarSign,
		title: "Match Climate Finance",
		body: "HopeBridge surfaces vetted emergency grants, cash transfers, and rebuilding funds you qualify for.",
		accent: "text-blue-600",
		bg: "bg-blue-50 dark:bg-blue-950"
	},
	{
		n: "03",
		icon: Sprout,
		title: "Rebuild & Adapt",
		body: "Access mutual aid, step-by-step guides, and resilience programs to rebuild stronger than before.",
		accent: "text-accent",
		bg: "bg-brand-100 dark:bg-brand-100/20"
	}
];
var actions = [
	{
		n: "1",
		icon: FileText,
		title: "Report Damage",
		body: "Submit your situation and documentation for faster aid matching.",
		cta: "Start Report",
		to: "/report"
	},
	{
		n: "2",
		icon: BadgeDollarSign,
		title: "Climate Finance",
		body: "Browse emergency grants, cash transfers & adaptation programs you qualify for.",
		cta: "Find Funding",
		to: "/funding"
	},
	{
		n: "3",
		icon: Users,
		title: "Local Help",
		body: "Connect with nearby community groups offering meals, tools, and labor.",
		cta: "Join Group",
		to: "/community"
	}
];
var impactStats = [
	{
		value: "KES 4.2B+",
		label: "Climate funds mobilized across Kenya",
		icon: TrendingUp
	},
	{
		value: "12,400+",
		label: "Families matched to verified programs",
		icon: Handshake
	},
	{
		value: "47 Counties",
		label: "Offline USSD access nationwide",
		icon: WifiOff
	},
	{
		value: "230+ NGOs",
		label: "Vetted partner organizations",
		icon: Building2
	}
];
function Index() {
	const { data: orgs } = useSuspenseQuery(organizationsQuery());
	const { data: centers } = useSuspenseQuery(assistanceCentersQuery());
	const nearest = centers[0];
	const programs = orgs.slice(0, 3);
	const openUssd = () => {
		window.dispatchEvent(new CustomEvent("demo:open-ussd"));
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-7xl px-4 py-10 md:py-16",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "mb-20 animate-fade-up",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mb-5 inline-flex items-center gap-2 rounded-full border border-accent/25 bg-accent/10 px-3.5 py-1.5 text-xs font-semibold text-accent",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sprout, { className: "size-3.5" }), "Climate Finance & Community Resilience Platform"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
							className: "font-serif text-4xl font-semibold leading-[1.1] text-foreground md:text-6xl",
							children: [
								"Climate disasters happen.",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "italic text-accent",
									children: "Recovery funding exists."
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground",
							children: "HopeBridge connects climate-affected communities with emergency grants, cash assistance, vetted aid organizations, and resilience programs — accessible online or offline via USSD."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 flex flex-wrap gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								size: "lg",
								className: "rounded-full",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/funding",
									children: "Find Climate Finance"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								variant: "outline",
								size: "lg",
								className: "rounded-full gap-2",
								onClick: openUssd,
								id: "hero-ussd-btn",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Smartphone, { className: "size-4" }), "Offline USSD Demo"]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 flex items-center gap-3 rounded-2xl border border-border bg-card px-4 py-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex size-8 shrink-0 items-center justify-center rounded-lg bg-emerald-100 dark:bg-emerald-950",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WifiOff, { className: "size-4 text-emerald-700 dark:text-emerald-400" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-sm text-muted-foreground",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-semibold text-foreground",
										children: "Works without internet."
									}),
									" ",
									"Dial",
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", {
										className: "rounded bg-muted px-1.5 py-0.5 font-mono text-xs text-foreground",
										children: "*483*111#"
									}),
									" ",
									"from any feature phone to report damage and access grants."
								]
							})]
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-3xl border border-border bg-card p-6 shadow-soft",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mb-4 flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex size-8 items-center justify-center rounded-xl bg-brand-100 text-brand-800",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "size-4" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm font-semibold text-foreground",
								children: "Recovery Assistant"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-muted-foreground",
								children: "Describe your situation to find matching funds"
							})] })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AssistantPanel, {})]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "mb-20",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-2 gap-4 md:grid-cols-4",
					children: impactStats.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-2xl border border-border bg-card p-5 text-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(s.icon, { className: "mx-auto size-5 text-accent mb-2" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-serif text-2xl font-semibold text-foreground",
								children: s.value
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-xs text-muted-foreground",
								children: s.label
							})
						]
					}, s.label))
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mb-20",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-10 text-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-serif text-3xl font-semibold text-foreground md:text-4xl",
						children: "How HopeBridge works"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-muted-foreground",
						children: "Three steps from disaster to recovery funding — with or without internet."
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-1 gap-6 md:grid-cols-3",
					children: howItWorksSteps.map((step) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative rounded-3xl border border-border bg-card p-8",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mb-6 flex items-center justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: `flex size-12 items-center justify-center rounded-2xl ${step.bg}`,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(step.icon, { className: `size-6 ${step.accent}` })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-serif text-4xl font-bold text-border",
									children: step.n
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-serif text-xl font-semibold text-foreground",
								children: step.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-sm leading-relaxed text-muted-foreground",
								children: step.body
							})
						]
					}, step.n))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "mb-20 overflow-hidden rounded-[2.5rem] border border-border bg-card",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-1 lg:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "p-8 md:p-12",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mb-4 inline-flex items-center gap-2 rounded-full bg-amber-100 px-3 py-1 text-xs font-bold uppercase tracking-wider text-amber-800 dark:bg-amber-950 dark:text-amber-300",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WifiOff, { className: "size-3" }), " Offline First"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-serif text-3xl font-semibold text-foreground md:text-4xl",
								children: "Climate finance, even without internet"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 text-muted-foreground",
								children: "In rural and flood-affected areas, connectivity disappears when it's needed most. HopeBridge's USSD interface works on any feature phone, with no data required."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-6 space-y-3",
								children: [
									"Report disaster damage from any phone",
									"Request emergency supplies & shelter locations",
									"Browse & apply for climate grants",
									"Talk to local chiefs and coordinators"
								].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex items-center gap-3 text-sm",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "size-4 shrink-0 text-accent" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-foreground",
										children: item
									})]
								}, item))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-8 flex flex-wrap gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
									size: "lg",
									className: "rounded-full gap-2",
									onClick: openUssd,
									id: "ussd-section-btn",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Smartphone, { className: "size-4" }), "Launch USSD Simulator"]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									asChild: true,
									variant: "outline",
									size: "lg",
									className: "rounded-full",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/resources",
										children: "Learn More"
									})
								})]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex items-center justify-center bg-gradient-to-br from-brand-100/60 to-accent/10 p-8 md:p-12 dark:from-brand-100/10 dark:to-accent/5",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "w-48 rounded-2xl bg-neutral-800 p-2 border-2 border-neutral-700 shadow-xl",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "h-28 bg-[#8fa48c] border-2 border-[#788e75] rounded-md p-2 font-mono text-neutral-900 text-[9px] leading-tight flex flex-col gap-0.5",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-right opacity-75",
										children: "Safaricom"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-center font-bold tracking-widest py-0.5 border-b border-neutral-700/20 mb-1 text-xs",
										children: "*483*111#"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "font-bold",
										children: "HopeBridge Portal"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: "1. Report Hazard" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: "2. Request Supplies" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-emerald-800 font-bold",
										children: "3. Climate Grants ✓"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: "4. Nearest Shelter" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: "5. Talk to Chief" })
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-2 grid grid-cols-3 gap-0.5 w-full",
								children: [
									"1",
									"2",
									"3",
									"4",
									"5",
									"6",
									"7",
									"8",
									"9",
									"*",
									"0",
									"#"
								].map((k) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "h-5 rounded bg-neutral-700 flex items-center justify-center text-neutral-300 text-[8px] font-bold",
									children: k
								}, k))
							})]
						})
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "mb-20 grid grid-cols-1 gap-6 md:grid-cols-3",
				children: actions.map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "group relative overflow-hidden rounded-3xl border border-border bg-card p-8 transition-all hover:shadow-soft",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mb-6 flex size-12 items-center justify-center rounded-2xl bg-brand-100 text-brand-800",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(a.icon, {
								className: "size-6",
								"aria-hidden": "true"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-serif text-2xl font-semibold text-foreground",
							children: a.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-muted-foreground",
							children: a.body
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: a.to,
							className: "mt-6 inline-flex items-center font-semibold text-accent",
							children: [a.cta, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "ml-2 size-4 transition-transform group-hover:translate-x-1" })]
						})
					]
				}, a.n))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mb-20",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-8 flex items-end justify-between gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-serif text-3xl font-semibold text-foreground",
						children: "Assistance Near You"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-muted-foreground",
						children: "Temporary shelters, distribution centers, and aid hubs — updated in real time."
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						variant: "ghost",
						className: "hidden shrink-0 text-accent sm:inline-flex",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/map",
							children: "Expand map view"
						})
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative overflow-hidden rounded-3xl ring-1 ring-border",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InteractiveMap, {
						centers,
						selectedId: nearest?.id,
						className: "h-[320px] w-full rounded-3xl md:h-[420px]"
					}), nearest && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "absolute z-[1000] bottom-4 left-4 right-4 max-w-sm rounded-2xl bg-card/95 p-6 shadow-soft backdrop-blur-sm sm:bottom-6 sm:left-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mb-4 flex items-center justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs font-bold uppercase tracking-widest text-brand-400",
									children: "Nearest Center"
								}), nearest.is_open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "flex items-center gap-1 text-xs font-semibold text-emerald-600",
									children: "● Active Now"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-serif text-lg font-semibold text-foreground",
								children: nearest.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-1 text-sm text-muted-foreground",
								children: [
									nearest.address,
									" • ",
									nearest.services.slice(0, 3).join(", ")
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-4 flex gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									asChild: true,
									size: "sm",
									className: "flex-1",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: `https://www.google.com/maps/dir/?api=1&destination=${nearest.lat},${nearest.lng}`,
										target: "_blank",
										rel: "noopener noreferrer",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navigation, {
											className: "size-4",
											"aria-hidden": "true"
										}), " Get Directions"]
									})
								}), nearest.phone && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									variant: "outline",
									size: "sm",
									"aria-label": "Call center",
									asChild: true,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: `tel:${nearest.phone}`,
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, {
											className: "size-4",
											"aria-hidden": "true"
										})
									})
								})]
							})
						]
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mb-20",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-8 flex items-end justify-between gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-serif text-3xl font-semibold text-foreground",
						children: "Active Climate Finance Programs"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-muted-foreground",
						children: "Verified organizations currently accepting applications across Kenya."
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						variant: "ghost",
						className: "hidden shrink-0 text-accent sm:inline-flex",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/funding",
							children: "View all funding"
						})
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3",
					children: programs.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-2xl border border-border bg-card p-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-start justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "grid size-12 place-items-center rounded-xl bg-brand-100 font-serif font-bold text-brand-800",
									children: p.name.charAt(0)
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: `rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wide ${categoryStyles[p.category]}`,
									children: categoryLabel[p.category]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-4 font-semibold text-foreground",
								children: p.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 line-clamp-3 text-sm text-muted-foreground",
								children: p.description
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-6 flex items-center justify-between border-t border-border pt-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs font-medium text-muted-foreground",
									children: p.amount_label ?? p.deadline ?? "Available now"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/funding",
									className: "text-sm font-semibold text-accent",
									children: "Apply →"
								})]
							})
						]
					}, p.id))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "grid grid-cols-1 gap-6 md:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-[2.5rem] bg-primary p-8 text-primary-foreground md:p-10",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, { className: "mb-4 size-8 text-primary-foreground/60" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-serif text-2xl font-semibold md:text-3xl",
							children: "The heart of recovery is community."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-sm text-primary-foreground/75",
							children: "Connect with others who have faced similar challenges. Share resources, find volunteers, or talk with people who understand."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 flex flex-wrap gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								size: "sm",
								variant: "secondary",
								className: "rounded-full",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/community",
									children: "Browse support groups"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								size: "sm",
								variant: "outline",
								className: "rounded-full border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/community",
									children: "Become a volunteer"
								})
							})]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-[2.5rem] border border-border bg-card p-8 md:p-10",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Building2, { className: "mb-4 size-8 text-accent" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-serif text-2xl font-semibold text-foreground md:text-3xl",
							children: "Are you an NGO or government agency?"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-sm text-muted-foreground",
							children: "HopeBridge provides coordination dashboards, beneficiary tracking, and climate-finance analytics for organizations operating at scale."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-8",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								size: "sm",
								className: "rounded-full",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/operations",
									children: "View Operations Portal"
								})
							})
						})
					]
				})]
			})
		]
	}) });
}
//#endregion
export { Index as component };
