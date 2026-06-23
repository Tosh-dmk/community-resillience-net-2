import { r as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { t as Button } from "./button-DRsC1qZi.mjs";
import { A as LoaderCircle, L as Globe, Y as CircleCheck, _ as Send, c as TriangleAlert, h as ShieldCheck, k as MapPin, l as TrendingUp, m as Smartphone, nt as Building2, o as Users, ot as BadgeDollarSign, q as Clock3, st as ArrowUpRight, t as Zap, tt as ChartColumn } from "../_libs/lucide-react.mjs";
import { t as PageShell } from "./PageShell-DcwVYdMv.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { t as Progress } from "./progress-Crx1Tb8I.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/operations-D1BvU0oX.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var MOCK_BENEFICIARIES = [
	{
		id: "b1",
		name: "Achieng Otieno",
		county: "Kisumu",
		disasterType: "flood",
		needs: ["Temporary housing", "Food & clean water"],
		status: "under_review",
		severity: 4,
		submitted: "2 hours ago",
		phone: "0712 xxx xxx"
	},
	{
		id: "b2",
		name: "Kamau Njoroge",
		county: "Murang'a",
		disasterType: "landslide",
		needs: ["Rebuilding materials", "Medical aid"],
		status: "matched",
		severity: 5,
		submitted: "5 hours ago",
		phone: "0722 xxx xxx"
	},
	{
		id: "b3",
		name: "Halima Abdi",
		county: "Turkana",
		disasterType: "drought",
		needs: ["M-Pesa cash assistance", "Food & clean water"],
		status: "submitted",
		severity: 5,
		submitted: "8 hours ago",
		phone: "0733 xxx xxx"
	},
	{
		id: "b4",
		name: "Omondi Wafula",
		county: "Busia",
		disasterType: "flood",
		needs: ["Temporary housing", "Rebuilding materials"],
		status: "in_progress",
		severity: 3,
		submitted: "1 day ago",
		phone: "0745 xxx xxx"
	},
	{
		id: "b5",
		name: "Fatuma Hassan",
		county: "Garissa",
		disasterType: "drought",
		needs: ["M-Pesa cash assistance"],
		status: "resolved",
		severity: 4,
		submitted: "2 days ago",
		phone: "0754 xxx xxx"
	},
	{
		id: "b6",
		name: "Chebet Koech",
		county: "West Pokot",
		disasterType: "landslide",
		needs: [
			"Temporary housing",
			"Medical aid",
			"Food & clean water"
		],
		status: "under_review",
		severity: 5,
		submitted: "3 hours ago",
		phone: "0768 xxx xxx"
	}
];
var statusConfig = {
	submitted: {
		label: "Submitted",
		color: "bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-300",
		icon: Clock3
	},
	under_review: {
		label: "Under Review",
		color: "bg-amber-50 text-amber-700 dark:bg-amber-950 dark:text-amber-300",
		icon: TriangleAlert
	},
	matched: {
		label: "Aid Matched",
		color: "bg-purple-50 text-purple-700 dark:bg-purple-950 dark:text-purple-300",
		icon: ShieldCheck
	},
	in_progress: {
		label: "In Progress",
		color: "bg-brand-100 text-brand-800",
		icon: Zap
	},
	resolved: {
		label: "Resolved",
		color: "bg-emerald-50 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300",
		icon: CircleCheck
	}
};
var disasterLabel = {
	flood: "Flood",
	drought: "Drought",
	landslide: "Landslide",
	storm: "Storm",
	earthquake: "Earthquake",
	wildfire: "Wildfire",
	other: "Other"
};
var impactMetrics = [
	{
		label: "Total Climate Finance Mobilized",
		value: "KES 4.28B",
		change: "+12.4%",
		icon: BadgeDollarSign,
		color: "text-emerald-600",
		bg: "bg-emerald-50 dark:bg-emerald-950"
	},
	{
		label: "Families Matched to Programs",
		value: "12,847",
		change: "+834 this week",
		icon: Users,
		color: "text-blue-600",
		bg: "bg-blue-50 dark:bg-blue-950"
	},
	{
		label: "USSD Offline Applications",
		value: "3,214",
		change: "Last 30 days",
		icon: Smartphone,
		color: "text-amber-600",
		bg: "bg-amber-50 dark:bg-amber-950"
	},
	{
		label: "Active Partner Organizations",
		value: "231",
		change: "Across 47 counties",
		icon: Globe,
		color: "text-accent",
		bg: "bg-brand-100 dark:bg-brand-100/20"
	}
];
var regionFinanceData = [
	{
		region: "Western (Busia/Kisumu)",
		disbursed: 820,
		goal: 1200,
		type: "Flood Recovery"
	},
	{
		region: "Northern Kenya (ASAL)",
		disbursed: 1480,
		goal: 2e3,
		type: "Drought Relief"
	},
	{
		region: "Rift Valley",
		disbursed: 540,
		goal: 900,
		type: "Landslide Response"
	},
	{
		region: "Coastal Region",
		disbursed: 390,
		goal: 600,
		type: "Storm Recovery"
	},
	{
		region: "Nairobi Metro",
		disbursed: 280,
		goal: 400,
		type: "Urban Flooding"
	}
];
var saasPlans = [
	{
		name: "NGO Resilience Suite",
		price: "KES 25,000",
		period: "/month",
		description: "For NGOs managing 50–500 beneficiaries in disaster-hit areas.",
		features: [
			"Beneficiary pipeline management",
			"SMS dispatch & USSD tracking",
			"Climate finance matching engine",
			"Monthly impact reporting",
			"Priority verification queue"
		],
		cta: "Start Free Trial",
		accent: false,
		tag: "Most Popular"
	},
	{
		name: "County Government License",
		price: "KES 150,000",
		period: "/month",
		description: "County-wide disaster coordination and government reporting tools.",
		features: [
			"County-level operations dashboard",
			"Multi-ward beneficiary tracking",
			"USSD analytics & NDMA API integration",
			"Emergency broadcast system",
			"Custom climate risk heat maps",
			"Dedicated support & SLA"
		],
		cta: "Request Demo",
		accent: true,
		tag: "Enterprise"
	},
	{
		name: "Marketplace Listing",
		price: "1.5%",
		period: "coordination fee",
		description: "For NGOs and government programs promoting grant opportunities on HopeBridge.",
		features: [
			"Verified program badge",
			"Promoted placement in marketplace",
			"USSD Option 3 integration",
			"Application analytics dashboard",
			"Beneficiary reach reports"
		],
		cta: "List Your Program",
		accent: false,
		tag: ""
	}
];
function OperationsPage() {
	const [activeTab, setActiveTab] = (0, import_react.useState)("beneficiaries");
	const [beneficiaries, setBeneficiaries] = (0, import_react.useState)(MOCK_BENEFICIARIES);
	const [disbursing, setDisbursing] = (0, import_react.useState)(null);
	const [verifying, setVerifying] = (0, import_react.useState)(null);
	const handleVerify = (id) => {
		setVerifying(id);
		setTimeout(() => {
			setBeneficiaries((prev) => prev.map((b) => b.id === id ? {
				...b,
				status: "matched"
			} : b));
			setVerifying(null);
			toast.success("Damage verified. Beneficiary matched with aid programs.");
		}, 1400);
	};
	const handleDisburse = (b) => {
		setDisbursing(b.id);
		window.dispatchEvent(new CustomEvent("demo:stk", { detail: {
			amount: 8500,
			account: `HB-${b.id.toUpperCase()}`
		} }));
		setTimeout(() => {
			setBeneficiaries((prev) => prev.map((ben) => ben.id === b.id ? {
				...ben,
				status: "in_progress"
			} : ben));
			setDisbursing(null);
			toast.success(`Cash assistance dispatched to ${b.name} via M-Pesa.`);
			window.dispatchEvent(new CustomEvent("demo:sms", { detail: {
				title: "HopeBridge Disbursement",
				body: `KES 8,500 emergency cash assistance has been sent to ${b.name} (${b.county} County) via M-Pesa. Ref: HB-${b.id.toUpperCase()}-CASH.`
			} }));
		}, 2e3);
	};
	const handleResolve = (id) => {
		setBeneficiaries((prev) => prev.map((b) => b.id === id ? {
			...b,
			status: "resolved"
		} : b));
		toast.success("Case marked as resolved.");
	};
	const statusCounts = beneficiaries.reduce((acc, b) => {
		acc[b.status] = (acc[b.status] || 0) + 1;
		return acc;
	}, {});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-7xl px-4 py-12",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "mb-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-3 inline-flex items-center gap-2 rounded-full border border-accent/25 bg-accent/10 px-3 py-1 text-xs font-semibold text-accent",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Building2, { className: "size-3.5" }), "Disaster Operations Portal"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "font-serif text-3xl font-semibold text-foreground md:text-4xl",
						children: "Coordinator Dashboard"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-muted-foreground max-w-xl",
						children: "Manage beneficiary pipelines, coordinate climate-finance disbursements, and track impact — for NGOs and government agencies coordinating climate recovery at scale."
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex gap-2 shrink-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							variant: "outline",
							size: "sm",
							className: "rounded-full",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartColumn, { className: "size-4 mr-1.5" }), " Export Report"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							size: "sm",
							className: "rounded-full",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { className: "size-4 mr-1.5" }), " Broadcast Alert"]
						})]
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mb-8 flex gap-1 border-b border-border",
				children: [
					{
						key: "beneficiaries",
						label: "Beneficiary Pipeline",
						icon: Users
					},
					{
						key: "impact",
						label: "Impact & Finance",
						icon: TrendingUp
					},
					{
						key: "saas",
						label: "SaaS & Pricing",
						icon: BadgeDollarSign
					}
				].map((tab) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					id: `ops-tab-${tab.key}`,
					onClick: () => setActiveTab(tab.key),
					className: `flex items-center gap-1.5 pb-3 px-2 text-sm font-semibold border-b-2 transition-colors cursor-pointer ${activeTab === tab.key ? "border-accent text-accent" : "border-transparent text-muted-foreground hover:text-foreground"}`,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(tab.icon, { className: "size-4" }), tab.label]
				}, tab.key))
			}),
			activeTab === "beneficiaries" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mb-6 grid grid-cols-2 gap-3 sm:grid-cols-5",
				children: Object.entries(statusConfig).map(([key, conf]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-xl border border-border bg-card p-3 text-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xl font-serif font-semibold text-foreground",
						children: statusCounts[key] ?? 0
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[10px] font-medium text-muted-foreground mt-0.5",
						children: conf.label
					})]
				}, key))
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "space-y-3",
				children: beneficiaries.map((b) => {
					const conf = statusConfig[b.status];
					const StatusIcon = conf.icon;
					const isDisbursingThis = disbursing === b.id;
					const isVerifyingThis = verifying === b.id;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "rounded-2xl border border-border bg-card p-5 transition-all hover:shadow-soft",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex-1",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-3 flex-wrap",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
												className: "font-semibold text-foreground",
												children: b.name
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: `flex items-center gap-1 rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide ${conf.color}`,
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusIcon, { className: "size-3" }), conf.label]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "rounded-md bg-muted px-2 py-0.5 text-[10px] font-medium text-muted-foreground",
												children: [
													"Severity ",
													b.severity,
													"/5"
												]
											})
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-1.5 flex flex-wrap items-center gap-3 text-xs text-muted-foreground",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "flex items-center gap-1",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "size-3" }),
													b.county,
													" County"
												]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "•" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: disasterLabel[b.disasterType] }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "•" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: b.submitted })
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-2 flex flex-wrap gap-1.5",
										children: b.needs.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "rounded-md bg-muted px-2 py-0.5 text-[10px] font-medium text-muted-foreground",
											children: n
										}, n))
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-wrap gap-2 shrink-0",
								children: [
									b.status === "submitted" || b.status === "under_review" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										size: "sm",
										variant: "outline",
										className: "rounded-full text-xs",
										onClick: () => handleVerify(b.id),
										disabled: isVerifyingThis,
										children: isVerifyingThis ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "size-3 animate-spin mr-1" }), " Verifying..."] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "size-3 mr-1" }), " Verify Damage"] })
									}) : null,
									b.status === "matched" || b.status === "in_progress" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										size: "sm",
										className: "rounded-full text-xs",
										onClick: () => handleDisburse(b),
										disabled: isDisbursingThis || b.status === "in_progress",
										children: isDisbursingThis ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "size-3 animate-spin mr-1" }), " Sending M-Pesa..."] }) : b.status === "in_progress" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Zap, { className: "size-3 mr-1" }), " Disbursed"] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BadgeDollarSign, { className: "size-3 mr-1" }), " Disburse Cash"] })
									}) : null,
									b.status === "in_progress" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
										size: "sm",
										variant: "outline",
										className: "rounded-full text-xs",
										onClick: () => handleResolve(b.id),
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "size-3 mr-1" }), " Mark Resolved"]
									}) : null,
									b.status === "resolved" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "flex items-center gap-1 text-xs font-medium text-emerald-600",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "size-4" }), " Case Closed"]
									}) : null
								]
							})]
						})
					}, b.id);
				})
			})] }),
			activeTab === "impact" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid grid-cols-2 gap-4 md:grid-cols-4",
						children: impactMetrics.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-2xl border border-border bg-card p-5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: `mb-3 flex size-10 items-center justify-center rounded-xl ${m.bg}`,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(m.icon, { className: `size-5 ${m.color}` })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-serif text-2xl font-semibold text-foreground",
									children: m.value
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-0.5 text-xs font-medium text-muted-foreground",
									children: m.label
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-1 flex items-center gap-1 text-[10px] text-emerald-600 font-semibold",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-3" }), m.change]
								})
							]
						}, m.label))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-2xl border border-border bg-card p-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mb-5 font-serif text-xl font-semibold text-foreground",
							children: "Regional Climate Finance Distribution (KES Millions)"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "space-y-4",
							children: regionFinanceData.map((r) => {
								const pct = Math.round(r.disbursed / r.goal * 100);
								return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mb-1.5 flex items-center justify-between text-sm",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-medium text-foreground",
										children: r.region
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "ml-2 text-xs text-muted-foreground",
										children: r.type
									})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "text-xs font-semibold text-muted-foreground",
										children: [
											"KES ",
											r.disbursed,
											"M / ",
											r.goal,
											"M (",
											pct,
											"%)"
										]
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Progress, {
									value: pct,
									className: "h-2"
								})] }, r.region);
							})
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-1 gap-4 md:grid-cols-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-2xl border border-border bg-card p-5 text-center",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Smartphone, { className: "size-8 mx-auto text-amber-500 mb-2" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-serif text-3xl font-semibold text-foreground",
										children: "38%"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm text-muted-foreground mt-1",
										children: "of applications via USSD (offline)"
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-2xl border border-border bg-card p-5 text-center",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Globe, { className: "size-8 mx-auto text-accent mb-2" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-serif text-3xl font-semibold text-foreground",
										children: "62%"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm text-muted-foreground mt-1",
										children: "via web platform"
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-2xl border border-border bg-card p-5 text-center",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BadgeDollarSign, { className: "size-8 mx-auto text-emerald-500 mb-2" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-serif text-3xl font-semibold text-foreground",
										children: "KES 8,200"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm text-muted-foreground mt-1",
										children: "avg. grant per beneficiary"
									})
								]
							})
						]
					})
				]
			}),
			activeTab === "saas" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-10 max-w-2xl",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-serif text-2xl font-semibold text-foreground",
						children: "HopeBridge Sustainability Model"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-muted-foreground",
						children: "HopeBridge generates revenue by providing tools, dashboards, and marketplace access to the NGOs, government agencies, and development partners who use the platform to coordinate climate-finance delivery at scale."
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-1 gap-6 md:grid-cols-3",
					children: saasPlans.map((plan) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: `relative flex flex-col rounded-3xl border p-6 ${plan.accent ? "border-accent bg-primary text-primary-foreground" : "border-border bg-card"}`,
						children: [
							plan.tag && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: `absolute -top-3 left-6 rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wider ${plan.accent ? "bg-accent text-white" : "bg-brand-100 text-brand-800"}`,
								children: plan.tag
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mb-5",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: `font-serif text-lg font-semibold ${plan.accent ? "text-primary-foreground" : "text-foreground"}`,
										children: plan.name
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-2 flex items-baseline gap-1",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: `font-serif text-3xl font-bold ${plan.accent ? "text-primary-foreground" : "text-foreground"}`,
											children: plan.price
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: `text-sm ${plan.accent ? "text-primary-foreground/70" : "text-muted-foreground"}`,
											children: plan.period
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: `mt-2 text-sm ${plan.accent ? "text-primary-foreground/75" : "text-muted-foreground"}`,
										children: plan.description
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "flex-1 space-y-2 mb-6",
								children: plan.features.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: `flex items-start gap-2 text-sm ${plan.accent ? "text-primary-foreground/85" : "text-muted-foreground"}`,
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: `size-4 shrink-0 mt-0.5 ${plan.accent ? "text-primary-foreground" : "text-accent"}` }), f]
								}, f))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: plan.accent ? "secondary" : "default",
								className: "w-full rounded-full",
								size: "sm",
								onClick: () => toast.success(`${plan.cta} — HopeBridge sales team will reach out within 24 hours.`),
								children: plan.cta
							})
						]
					}, plan.name))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-10 rounded-2xl border border-border bg-card p-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-serif text-lg font-semibold text-foreground mb-4",
						children: "Why organizations choose HopeBridge"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid grid-cols-1 gap-4 sm:grid-cols-3",
						children: [
							{
								title: "Last-mile access",
								body: "USSD integration ensures programs reach communities even with zero internet connectivity."
							},
							{
								title: "Instant M-Pesa",
								body: "Disburse emergency cash assistance directly to beneficiaries via M-Pesa in under 5 minutes."
							},
							{
								title: "Verified impact",
								body: "Every disbursement logged with GPS, timestamp, and beneficiary confirmation for donor reporting."
							}
						].map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-xl border border-border p-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "size-5 text-accent mb-2" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-semibold text-foreground text-sm",
									children: c.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-xs text-muted-foreground",
									children: c.body
								})
							]
						}, c.title))
					})]
				})
			] })
		]
	}) });
}
//#endregion
export { OperationsPage as component };
