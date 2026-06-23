import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { t as Button } from "./button-DRsC1qZi.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as useAuth } from "./Logo-D-O7Z-vc.mjs";
import { i as useQuery } from "../_libs/tanstack__react-query.mjs";
import { V as FilePlusCorner, Y as CircleCheck, ct as ArrowRight, f as Sprout, i as WifiOff, m as Smartphone, nt as Building2, ot as BadgeDollarSign, p as Sparkles, q as Clock3 } from "../_libs/lucide-react.mjs";
import { a as organizationsQuery, i as myReportsQuery, t as PageShell } from "./PageShell-DcwVYdMv.mjs";
import { n as DashboardSkeleton } from "./Skeletons-DGtzFcLY.mjs";
import { t as Progress } from "./progress-Crx1Tb8I.mjs";
import { t as CLIMATE_FINANCE_OPPORTUNITIES } from "./climateData-dT3WkdSQ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/dashboard-BiGUXi5i.js
var import_jsx_runtime = require_jsx_runtime();
var RECOVERY_BLUEPRINTS = {
	flood: {
		steps: [
			"Relocate to nearest shelter or relief center",
			"Document property damage with photos for verification",
			"Register with local chief or KRCS for emergency aid",
			"Apply for Ministry of Devolution iron sheet distribution",
			"Join Flood Survivors community chama for peer support"
		],
		grantTags: [
			"flood",
			"housing",
			"emergency",
			"materials"
		]
	},
	drought: {
		steps: [
			"Register for NDMA HSNP cash transfer at local Huduma Centre",
			"Request emergency water trucking through county government",
			"Join Drought Resilience ASAL Network community group",
			"Apply for KENAFF seed recovery kit for next planting season",
			"Explore KCEP-CRAL adaptation subsidy for drought-resistant crops"
		],
		grantTags: [
			"drought",
			"ASAL",
			"seeds",
			"M-Pesa"
		]
	},
	landslide: {
		steps: [
			"Evacuate to safer higher ground immediately",
			"Contact West Pokot/Muranga county disaster management",
			"Report damage via HopeBridge USSD: *483*111# → Option 1",
			"Apply for Plan International emergency shelter support",
			"File for government rebuilding materials assistance"
		],
		grantTags: [
			"landslide",
			"shelter",
			"emergency",
			"housing"
		]
	},
	storm: {
		steps: [
			"Check for structural damage before re-entering buildings",
			"Report roof damage for iron sheet distribution eligibility",
			"Apply for Kenya Red Cross emergency cash assistance",
			"Claim MSME rebuild grant if business stock was damaged",
			"Join Nairobi Urban Flood Help group for peer support"
		],
		grantTags: [
			"storm",
			"housing",
			"business",
			"emergency"
		]
	},
	earthquake: {
		steps: [
			"Do not re-enter buildings until structurally cleared",
			"Register with Red Cross for emergency shelter kit",
			"Document structural damage for insurance and aid eligibility",
			"Apply for emergency cash assistance for immediate needs",
			"Access community mental health support resources"
		],
		grantTags: [
			"emergency",
			"shelter",
			"medical"
		]
	},
	wildfire: {
		steps: [
			"Ensure complete evacuation from affected zone",
			"Report fire damage to county fire brigade and NDMA",
			"Apply for livelihood recovery grant to restart farming",
			"Request seed recovery kits for next planting season",
			"Join community chama for shared land restoration effort"
		],
		grantTags: [
			"agriculture",
			"seeds",
			"livelihood"
		]
	},
	other: {
		steps: [
			"Contact local chief or county disaster coordinator",
			"Submit a detailed damage report via HopeBridge",
			"Browse the Climate Finance Marketplace for matching grants",
			"Connect with a relevant community support group",
			"Access the AI Recovery Assistant for tailored guidance"
		],
		grantTags: ["emergency", "grants"]
	}
};
var statusOrder = [
	"submitted",
	"under_review",
	"matched",
	"in_progress",
	"resolved"
];
var statusLabel = {
	submitted: "Submitted",
	under_review: "Under review",
	matched: "Matched with aid",
	in_progress: "In progress",
	resolved: "Resolved"
};
var disasterLabel = {
	flood: "Flood",
	earthquake: "Earthquake",
	drought: "Drought",
	landslide: "Landslide",
	storm: "Storm",
	wildfire: "Wildfire",
	other: "Other"
};
function progressFor(status) {
	const idx = statusOrder.indexOf(status);
	return Math.round((idx + 1) / statusOrder.length * 100);
}
function Dashboard() {
	const { user } = useAuth();
	const { data: reports = [], isLoading } = useQuery(myReportsQuery(user?.id));
	const { data: orgs = [] } = useQuery(organizationsQuery());
	if (isLoading) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DashboardSkeleton, {});
	const firstName = (user?.user_metadata?.full_name)?.split(" ")[0] ?? user?.email?.split("@")[0] ?? "there";
	const recommended = orgs.slice(0, 3);
	const latest = reports[0];
	const blueprint = latest ? RECOVERY_BLUEPRINTS[latest.disaster_type] ?? RECOVERY_BLUEPRINTS.other : null;
	const matchedGrants = blueprint ? CLIMATE_FINANCE_OPPORTUNITIES.filter((op) => blueprint.grantTags.some((tag) => op.tags.includes(tag))).slice(0, 3) : [];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-7xl px-4 py-12",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
				className: "font-serif text-3xl font-semibold text-foreground",
				children: ["Welcome, ", firstName]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-muted-foreground",
				children: "Here's where your recovery stands today."
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					variant: "outline",
					className: "rounded-full",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/funding",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BadgeDollarSign, { className: "size-4" }), " Find Funding"]
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					className: "rounded-full",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/report",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilePlusCorner, { className: "size-4" }), " New report"]
					})
				})]
			})]
		}), reports.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-10 rounded-3xl border border-dashed border-border bg-card p-10 text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-serif text-xl font-semibold text-foreground",
					children: "Let's start your recovery"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mx-auto mt-2 max-w-md text-muted-foreground",
					children: "Report what happened and what you need. We'll match you with relevant aid and support right away."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					className: "mt-6 rounded-full",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/report",
						children: "Report damage"
					})
				})
			]
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-10 grid grid-cols-1 gap-8 lg:grid-cols-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-6 lg:col-span-2",
				children: [
					blueprint && latest && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-2xl border border-accent/30 bg-accent/5 p-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mb-4 flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sprout, { className: "size-5 text-accent" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "font-serif text-lg font-semibold text-foreground",
									children: "Your Climate Recovery Blueprint"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mb-4 text-sm text-muted-foreground",
								children: [
									"Based on your ",
									disasterLabel[latest.disaster_type].toLowerCase(),
									" report in",
									" ",
									latest.location,
									", here are your recommended recovery steps:"
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
								className: "space-y-2",
								children: blueprint.steps.map((step, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex items-start gap-3 text-sm",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "flex size-5 shrink-0 items-center justify-center rounded-full bg-accent text-[10px] font-bold text-accent-foreground mt-0.5",
										children: i + 1
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-foreground",
										children: step
									})]
								}, i))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-4 flex items-center gap-2 rounded-lg bg-amber-50 dark:bg-amber-950/30 border border-amber-200/50 px-3 py-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WifiOff, { className: "size-4 shrink-0 text-amber-600" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-xs text-amber-800 dark:text-amber-300",
									children: [
										"Access these steps offline — dial",
										" ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", {
											className: "font-mono font-bold",
											children: "*483*111#"
										}),
										" from any phone."
									]
								})]
							})
						]
					}),
					matchedGrants.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-2xl border border-border bg-card p-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mb-4 flex items-center justify-between gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BadgeDollarSign, { className: "size-5 text-accent" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "font-serif text-lg font-semibold text-foreground",
									children: "Matched Climate Finance"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								variant: "ghost",
								size: "sm",
								className: "text-accent",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/funding",
									children: ["See all ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-3 ml-1" })]
								})
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "space-y-3",
							children: matchedGrants.map((grant) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between gap-4 rounded-xl border border-border p-4",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "min-w-0",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "font-semibold text-foreground text-sm truncate",
											children: grant.title
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-xs text-muted-foreground",
											children: grant.provider
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "shrink-0 text-right",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-sm font-semibold text-accent",
											children: grant.amount
										}), grant.ussd && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "text-[10px] text-amber-600 flex items-center gap-0.5 justify-end",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WifiOff, { className: "size-2.5" }), " USSD"]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										asChild: true,
										size: "sm",
										className: "rounded-full shrink-0",
										variant: "outline",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
											to: "/funding",
											children: "Apply"
										})
									})
								]
							}, grant.id))
						})]
					}),
					latest && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-2xl border border-border bg-card p-8",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-start justify-between gap-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
									className: "font-serif text-lg font-semibold text-foreground",
									children: [
										disasterLabel[latest.disaster_type],
										" recovery — ",
										latest.location
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-sm text-muted-foreground",
									children: statusLabel[latest.status]
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "rounded-full bg-brand-100 px-2.5 py-1 text-xs font-bold text-brand-800",
									children: [progressFor(latest.status), "%"]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Progress, {
								value: progressFor(latest.status),
								className: "mt-6 h-3"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-4 flex flex-wrap gap-2",
								children: latest.needs.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "rounded-md bg-muted px-2 py-0.5 text-xs font-medium text-muted-foreground",
									children: n
								}, n))
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-serif text-xl font-semibold text-foreground",
						children: "All reports"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "space-y-3",
						children: reports.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "flex items-center justify-between gap-4 rounded-2xl border border-border bg-card p-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "min-w-0",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2",
									children: [r.status === "resolved" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "size-4 shrink-0 text-emerald-600" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock3, { className: "size-4 shrink-0 text-accent" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h4", {
										className: "truncate font-semibold text-foreground",
										children: [
											disasterLabel[r.disaster_type],
											" — ",
											r.location
										]
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 truncate text-sm text-muted-foreground",
									children: r.description
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "shrink-0 text-xs font-medium text-muted-foreground",
								children: statusLabel[r.status]
							})]
						}, r.id))
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
				className: "space-y-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-2xl bg-primary p-6 text-primary-foreground",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2 text-sm font-semibold",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, {
									className: "size-4",
									"aria-hidden": "true"
								}), " Recovery Assistant"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-primary-foreground/75",
								children: "Describe your situation to find specific programs you may qualify for."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								variant: "secondary",
								className: "mt-4 w-full rounded-full",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/assistant",
									children: "Ask the assistant"
								})
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-2xl border border-amber-200/60 bg-amber-50 dark:bg-amber-950/30 p-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2 mb-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Smartphone, { className: "size-4 text-amber-700 dark:text-amber-400" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-sm font-semibold text-amber-800 dark:text-amber-300",
									children: "Offline USSD Access"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-xs text-amber-700 dark:text-amber-400 leading-relaxed",
								children: [
									"No internet? Dial ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", {
										className: "font-mono font-bold",
										children: "*483*111#"
									}),
									" from any phone to report, request supplies, or apply for climate grants."
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => window.dispatchEvent(new CustomEvent("demo:open-ussd")),
								className: "mt-3 text-xs font-semibold text-amber-800 dark:text-amber-300 underline cursor-pointer",
								children: "Open USSD Simulator →"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-2xl border border-border bg-card p-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Building2, { className: "size-5 text-accent mb-2" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm font-semibold text-foreground",
								children: "Are you an NGO coordinator?"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-xs text-muted-foreground",
								children: "Access the full operations dashboard to manage beneficiaries and coordinate climate-finance disbursements."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								size: "sm",
								variant: "outline",
								className: "mt-3 w-full rounded-full",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/operations",
									children: "View Ops Portal"
								})
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "px-1 pt-2 font-serif text-lg font-semibold text-foreground",
						children: "Recommended programs"
					}),
					recommended.map((o) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/organizations",
						className: "block rounded-2xl border border-border bg-card p-5 transition-colors hover:border-accent/40",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
								className: "font-semibold text-foreground",
								children: o.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4 shrink-0 text-accent" })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 line-clamp-2 text-sm text-muted-foreground",
							children: o.description
						})]
					}, o.id))
				]
			})]
		})]
	}) });
}
//#endregion
export { Dashboard as component };
