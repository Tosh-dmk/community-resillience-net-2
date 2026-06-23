import { r as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { t as Button } from "./button-DRsC1qZi.mjs";
import { r as useSuspenseQuery, t as useMutation } from "../_libs/tanstack__react-query.mjs";
import { A as LoaderCircle, L as Globe, N as Heart, R as Funnel, Y as CircleCheck, ct as ArrowRight, i as WifiOff, l as TrendingUp, m as Smartphone, n as X, ot as BadgeDollarSign, v as Search } from "../_libs/lucide-react.mjs";
import { a as organizationsQuery, t as PageShell } from "./PageShell-DcwVYdMv.mjs";
import { l as createServerFn } from "./esm-Dova13aH.mjs";
import { n as useServerFn, t as createSsrRpc } from "./createSsrRpc-DwF6gIBN.mjs";
import { a as unionType, i as stringType, n as numberType, r as objectType } from "../_libs/zod.mjs";
import { t as Input } from "./input-DicJzR9-.mjs";
import { t as Progress } from "./progress-Crx1Tb8I.mjs";
import { t as CLIMATE_FINANCE_OPPORTUNITIES } from "./climateData-dT3WkdSQ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/funding-BdHswOfu.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var DonateInput = objectType({
	phone: stringType().trim().min(9, "Phone number is too short"),
	amount: unionType([stringType(), numberType()]).transform((val) => Number(val)),
	paybill: stringType().optional(),
	account: stringType().optional()
});
var donateMpesa = createServerFn({ method: "POST" }).validator((d) => DonateInput.parse(d)).handler(createSsrRpc("08c0f4a1c7011e203225a5b0245a2799f753c0109e9955231e482d967e4ae04e"));
var campaigns = [
	{
		id: "c1",
		title: "Budalangi Community Hall Rebuild",
		location: "Busia County",
		raised: 58e4,
		goal: 9e5,
		donors: 312
	},
	{
		id: "c2",
		title: "Emergency Roofing for Nyando Flood Families",
		location: "Kisumu County",
		raised: 35e4,
		goal: 5e5,
		donors: 245
	},
	{
		id: "c3",
		title: "Clean Water & Boreholes for Turkana",
		location: "Turkana County",
		raised: 82e4,
		goal: 12e5,
		donors: 589
	}
];
var currency = (n) => n.toLocaleString("en-KE", {
	style: "currency",
	currency: "KES",
	maximumFractionDigits: 0
});
var fundingTypeStyles = {
	"Cash Transfer": "bg-emerald-50 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300",
	"Rebuilding Grant": "bg-orange-50 text-orange-700 dark:bg-orange-950 dark:text-orange-300",
	"Adaptation Subsidy": "bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-300",
	"Livelihood Recovery": "bg-purple-50 text-purple-700 dark:bg-purple-950 dark:text-purple-300",
	"Emergency Aid": "bg-red-50 text-red-700 dark:bg-red-950 dark:text-red-300",
	"Equity Finance": "bg-amber-50 text-amber-700 dark:bg-amber-950 dark:text-amber-300"
};
var typeFilters = [
	{
		value: "all",
		label: "All Types"
	},
	{
		value: "Cash Transfer",
		label: "Cash Transfers"
	},
	{
		value: "Rebuilding Grant",
		label: "Rebuilding Grants"
	},
	{
		value: "Adaptation Subsidy",
		label: "Adaptation"
	},
	{
		value: "Livelihood Recovery",
		label: "Livelihood"
	},
	{
		value: "Emergency Aid",
		label: "Emergency Aid"
	}
];
function DonateModal({ campaign, onClose }) {
	const [phone, setPhone] = (0, import_react.useState)("");
	const [amount, setAmount] = (0, import_react.useState)("");
	const [isProcessing, setIsProcessing] = (0, import_react.useState)(false);
	const callDonate = useServerFn(donateMpesa);
	const mutation = useMutation({ mutationFn: (args) => callDonate({ data: args }) });
	(0, import_react.useEffect)(() => {
		const handleSuccess = () => {
			mutation.mutate({
				phone: phone.trim(),
				amount: amount.trim(),
				paybill: "222911",
				account: campaign.title.substring(0, 20).toUpperCase()
			});
			setIsProcessing(false);
		};
		window.addEventListener("demo:stk-success", handleSuccess);
		return () => window.removeEventListener("demo:stk-success", handleSuccess);
	}, [
		phone,
		amount,
		campaign.title
	]);
	const handleDonate = (e) => {
		e.preventDefault();
		if (!phone.trim() || !amount.trim()) return;
		setIsProcessing(true);
		window.dispatchEvent(new CustomEvent("demo:stk", { detail: {
			amount: Number(amount),
			account: campaign.title.substring(0, 20).toUpperCase()
		} }));
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm p-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "w-full max-w-md rounded-3xl bg-card border border-border p-6 shadow-xl relative animate-in fade-in zoom-in-95 duration-200",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: onClose,
					className: "absolute right-4 top-4 text-muted-foreground hover:text-foreground cursor-pointer",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-serif text-2xl font-semibold text-foreground mb-1",
					children: "Donate with M-Pesa"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-sm text-muted-foreground mb-6",
					children: ["Supporting ", campaign.title]
				}),
				mutation.isSuccess ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-4 text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "size-8 text-emerald-500 mx-auto mb-2" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-emerald-700 dark:text-emerald-300 font-medium",
							children: mutation.data.message
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-xs text-muted-foreground mt-2",
							children: ["Receipt: ", mutation.data.receipt]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							onClick: onClose,
							className: "mt-4 w-full",
							variant: "outline",
							children: "Close"
						})
					]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit: handleDonate,
					className: "space-y-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-xl bg-muted/50 p-4 mb-6 border border-border",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex justify-between text-sm mb-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-muted-foreground",
									children: "Paybill Number:"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-bold text-foreground",
									children: "222911"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex justify-between text-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-muted-foreground",
									children: "Account Number:"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-bold text-foreground",
									children: campaign.title.substring(0, 20).toUpperCase()
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							htmlFor: "phone",
							className: "block text-sm font-medium text-foreground mb-1",
							children: "M-Pesa Phone Number"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							id: "phone",
							type: "tel",
							required: true,
							placeholder: "e.g. 0700 000 000",
							className: "w-full rounded-lg border border-border bg-background px-3 py-2 text-foreground focus:outline-none focus:ring-2 focus:ring-accent",
							value: phone,
							onChange: (e) => setPhone(e.target.value),
							disabled: isProcessing || mutation.isPending
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							htmlFor: "amount",
							className: "block text-sm font-medium text-foreground mb-1",
							children: "Amount (KES)"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							id: "amount",
							type: "number",
							required: true,
							placeholder: "Amount in KES",
							className: "w-full rounded-lg border border-border bg-background px-3 py-2 text-foreground focus:outline-none focus:ring-2 focus:ring-accent",
							value: amount,
							onChange: (e) => setAmount(e.target.value),
							disabled: isProcessing || mutation.isPending
						})] }),
						mutation.isError && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-destructive mb-2",
							children: mutation.error.message
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							type: "submit",
							className: "w-full mt-2",
							disabled: isProcessing || mutation.isPending,
							children: [isProcessing || mutation.isPending ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "size-4 animate-spin mr-2" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, { className: "size-4 mr-2" }), isProcessing ? "Waiting for PIN entry..." : mutation.isPending ? "Processing..." : "Donate via STK Push"]
						})
					]
				})
			]
		})
	});
}
function GrantApplyModal({ opportunity, onClose }) {
	const [submitted, setSubmitted] = (0, import_react.useState)(false);
	const [name, setName] = (0, import_react.useState)("");
	const [county, setCounty] = (0, import_react.useState)("");
	const [phone, setPhone] = (0, import_react.useState)("");
	const [loading, setLoading] = (0, import_react.useState)(false);
	const handleApply = (e) => {
		e.preventDefault();
		setLoading(true);
		setTimeout(() => {
			setLoading(false);
			setSubmitted(true);
			window.dispatchEvent(new CustomEvent("demo:sms", { detail: {
				title: opportunity.provider,
				body: `Your application for "${opportunity.title}" has been received. Reference: HB-${Math.floor(Math.random() * 9e4) + 1e4}. Verification within 5-7 business days.`
			} }));
		}, 1800);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm p-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "w-full max-w-md rounded-3xl bg-card border border-border p-6 shadow-xl relative animate-in fade-in zoom-in-95 duration-200",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				onClick: onClose,
				className: "absolute right-4 top-4 text-muted-foreground hover:text-foreground cursor-pointer",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" })
			}), submitted ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "py-4 text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "size-12 text-emerald-500 mx-auto mb-4" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-serif text-xl font-semibold text-foreground mb-2",
						children: "Application Received"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-sm text-muted-foreground mb-2",
						children: [
							"Your application for ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: opportunity.title }),
							" is under review."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-muted-foreground",
						children: "Check your dashboard for status updates. An SMS confirmation has been sent."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						onClick: onClose,
						className: "mt-6 w-full rounded-full",
						children: "Close"
					})
				]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: `rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide ${fundingTypeStyles[opportunity.type] ?? "bg-muted text-muted-foreground"}`,
						children: opportunity.type
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-serif text-xl font-semibold text-foreground mt-2",
						children: opportunity.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-sm text-muted-foreground",
						children: ["By ", opportunity.provider]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 font-semibold text-accent text-lg",
						children: opportunity.amount
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				onSubmit: handleApply,
				className: "space-y-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
						className: "block text-sm font-medium text-foreground mb-1",
						children: "Full Name"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						required: true,
						placeholder: "Your full name",
						value: name,
						onChange: (e) => setName(e.target.value),
						className: "w-full rounded-lg border border-border bg-background px-3 py-2 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent"
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
						className: "block text-sm font-medium text-foreground mb-1",
						children: "County"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						required: true,
						placeholder: "e.g. Kisumu, Turkana, Mombasa",
						value: county,
						onChange: (e) => setCounty(e.target.value),
						className: "w-full rounded-lg border border-border bg-background px-3 py-2 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent"
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
						className: "block text-sm font-medium text-foreground mb-1",
						children: "M-Pesa / Phone Number"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						required: true,
						type: "tel",
						placeholder: "e.g. 0712 345 678",
						value: phone,
						onChange: (e) => setPhone(e.target.value),
						className: "w-full rounded-lg border border-border bg-background px-3 py-2 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent"
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-lg bg-amber-50 dark:bg-amber-950/50 border border-amber-200/50 p-3 text-xs text-amber-800 dark:text-amber-300",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WifiOff, { className: "size-3 inline mr-1" }),
							"Also accessible offline: dial ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", {
								className: "font-mono",
								children: "*483*111#"
							}),
							" → Option 3 (Climate Grants)"
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "submit",
						className: "w-full rounded-full",
						disabled: loading,
						children: loading ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "size-4 animate-spin mr-2" }), " Submitting..."] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["Submit Application ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4 ml-1" })] })
					})
				]
			})] })]
		})
	});
}
function Funding() {
	const { data: orgs } = useSuspenseQuery(organizationsQuery());
	const [selectedCampaign, setSelectedCampaign] = (0, import_react.useState)(null);
	const [selectedOpportunity, setSelectedOpportunity] = (0, import_react.useState)(null);
	const [activeTab, setActiveTab] = (0, import_react.useState)("marketplace");
	const [searchQuery, setSearchQuery] = (0, import_react.useState)("");
	const [typeFilter, setTypeFilter] = (0, import_react.useState)("all");
	const filteredOpportunities = CLIMATE_FINANCE_OPPORTUNITIES.filter((op) => {
		const matchesType = typeFilter === "all" || op.type === typeFilter;
		const q = searchQuery.trim().toLowerCase();
		const matchesSearch = !q || op.title.toLowerCase().includes(q) || op.provider.toLowerCase().includes(q) || op.type.toLowerCase().includes(q) || op.tags.some((t) => t.toLowerCase().includes(q));
		return matchesType && matchesSearch;
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageShell, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-4 py-12",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
					className: "max-w-3xl mb-10",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mb-3 inline-flex items-center gap-2 rounded-full border border-accent/25 bg-accent/10 px-3 py-1 text-xs font-semibold text-accent",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BadgeDollarSign, { className: "size-3.5" }), "Climate Finance & Aid Marketplace"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "font-serif text-4xl font-semibold text-foreground",
							children: "Find the funding you qualify for"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-muted-foreground",
							children: "Climate finance exists. HopeBridge helps communities find it. Browse verified grants, cash transfers, and adaptation programs — and apply in minutes."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-5 flex items-center gap-2.5 rounded-xl border border-amber-200/60 bg-amber-50/80 px-4 py-2.5 dark:bg-amber-950/30 dark:border-amber-800/40",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Smartphone, { className: "size-4 shrink-0 text-amber-700 dark:text-amber-400" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-sm text-amber-800 dark:text-amber-300",
								children: [
									"All programs accessible offline — dial",
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", {
										className: "font-mono font-bold",
										children: "*483*111#"
									}),
									" → option",
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "3. Climate Grants" })
								]
							})]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-8 flex gap-2 border-b border-border",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						id: "tab-marketplace",
						onClick: () => setActiveTab("marketplace"),
						className: `pb-3 px-1 text-sm font-semibold border-b-2 transition-colors cursor-pointer ${activeTab === "marketplace" ? "border-accent text-accent" : "border-transparent text-muted-foreground hover:text-foreground"}`,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BadgeDollarSign, { className: "size-4 inline mr-1.5" }), "Resilience & Adaptation Grants"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						id: "tab-campaigns",
						onClick: () => setActiveTab("campaigns"),
						className: `pb-3 px-1 text-sm font-semibold border-b-2 transition-colors cursor-pointer ${activeTab === "campaigns" ? "border-accent text-accent" : "border-transparent text-muted-foreground hover:text-foreground"}`,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, { className: "size-4 inline mr-1.5" }), "Community Aid Campaigns"]
					})]
				}),
				activeTab === "marketplace" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-6 flex flex-col gap-3 sm:flex-row sm:items-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative flex-1 max-w-md",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								value: searchQuery,
								onChange: (e) => setSearchQuery(e.target.value),
								placeholder: "Search grants, cash transfers, providers...",
								className: "pl-9",
								"aria-label": "Search climate finance programs"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex flex-wrap gap-2",
							children: typeFilters.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: typeFilter === f.value ? "default" : "outline",
								size: "sm",
								className: "rounded-full text-xs",
								onClick: () => setTypeFilter(f.value),
								children: f.label
							}, f.value))
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-6 flex flex-wrap gap-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2 text-sm text-muted-foreground",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Funnel, { className: "size-4" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-semibold text-foreground",
										children: filteredOpportunities.length
									}),
									" ",
									"programs found"
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2 text-sm text-muted-foreground",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Globe, { className: "size-4" }),
									"Covering ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-semibold text-foreground mx-1",
										children: "47"
									}),
									" Kenyan counties"
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2 text-sm text-muted-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WifiOff, { className: "size-4" }), "USSD-accessible"]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3",
						children: filteredOpportunities.map((op) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "flex flex-col rounded-2xl border border-border bg-card p-5 transition-all hover:shadow-soft",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-start justify-between gap-2 mb-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: `rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide ${fundingTypeStyles[op.type] ?? "bg-muted text-muted-foreground"}`,
										children: op.type
									}), op.ussd && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										title: "Accessible via USSD",
										className: "flex items-center gap-1 text-[10px] font-bold text-amber-600 dark:text-amber-400",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WifiOff, { className: "size-3" }), " USSD"]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex-1",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "font-serif font-semibold text-foreground leading-snug",
											children: op.title
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-1 text-xs text-muted-foreground",
											children: op.provider
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-3 text-sm text-muted-foreground line-clamp-3",
											children: op.description
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-4 flex flex-wrap gap-1.5",
									children: op.tags.slice(0, 3).map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "rounded-md bg-muted px-2 py-0.5 text-[10px] font-medium text-muted-foreground",
										children: t
									}, t))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-4 flex items-center justify-between border-t border-border pt-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-semibold text-accent text-sm",
										children: op.amount
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-[10px] text-muted-foreground",
										children: op.coverage
									})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										size: "sm",
										className: "rounded-full",
										onClick: () => setSelectedOpportunity(op),
										children: "Apply"
									})]
								})
							]
						}, op.id))
					}),
					filteredOpportunities.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-12 text-center text-muted-foreground",
						children: "No programs match your search. Try a different term or filter."
					})
				] }),
				activeTab === "campaigns" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-8 flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrendingUp, { className: "size-5 text-accent" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-serif text-2xl font-semibold text-foreground",
							children: "Active community campaigns"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid grid-cols-1 gap-6 md:grid-cols-3",
						children: campaigns.map((c) => {
							const pct = Math.min(100, Math.round(c.raised / c.goal * 100));
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
								className: "flex flex-col rounded-2xl border border-border bg-card p-6",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-xs font-medium text-muted-foreground",
										children: c.location
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "mt-2 font-serif text-lg font-semibold text-foreground",
										children: c.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-5 flex-1",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Progress, {
												value: pct,
												className: "h-2"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "mt-3 flex items-baseline justify-between",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "font-semibold text-foreground",
													children: currency(c.raised)
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
													className: "text-sm text-muted-foreground",
													children: ["of ", currency(c.goal)]
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
												className: "mt-1 text-xs text-muted-foreground",
												children: [
													pct,
													"% funded • ",
													c.donors,
													" donors"
												]
											})
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
										onClick: () => setSelectedCampaign(c),
										className: "mt-6 rounded-full",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, { className: "size-4" }), " Donate via M-Pesa"]
									})
								]
							}, c.id);
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "mt-16",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mb-6 font-serif text-2xl font-semibold text-foreground",
							children: "Financial assistance you may qualify for"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid grid-cols-1 gap-4 md:grid-cols-2",
							children: orgs.filter((o) => o.amount_label).slice(0, 4).map((o) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
								className: "flex items-center justify-between gap-4 rounded-2xl border border-border bg-card p-5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-semibold text-foreground",
									children: o.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-sm text-muted-foreground",
									children: o.description
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "shrink-0 text-right",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "block font-semibold text-accent",
										children: o.amount_label
									}), o.deadline && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-xs text-muted-foreground",
										children: o.deadline
									})]
								})]
							}, o.id))
						})]
					})
				] })
			]
		}),
		selectedCampaign && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DonateModal, {
			campaign: selectedCampaign,
			onClose: () => setSelectedCampaign(null)
		}),
		selectedOpportunity && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GrantApplyModal, {
			opportunity: selectedOpportunity,
			onClose: () => setSelectedOpportunity(null)
		})
	] });
}
//#endregion
export { Funding as component };
