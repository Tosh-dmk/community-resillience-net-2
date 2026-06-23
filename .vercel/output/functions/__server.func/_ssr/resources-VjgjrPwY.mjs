import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as useSuspenseQuery } from "../_libs/tanstack__react-query.mjs";
import { H as FileCheck, M as House, P as HeartPulse, at as Banknote, g as ShieldAlert, it as Bell, rt as BookOpen } from "../_libs/lucide-react.mjs";
import { o as reliefUpdatesQuery, t as PageShell } from "./PageShell-DcwVYdMv.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/resources-VjgjrPwY.js
var import_jsx_runtime = require_jsx_runtime();
var guides = [
	{
		icon: ShieldAlert,
		title: "Immediately after a disaster",
		body: "Safety first: check for hazards, document damage, and contact local chiefs or Kenya Red Cross.",
		tag: "Safety"
	},
	{
		icon: FileCheck,
		title: "Filing insurance & government claims",
		body: "Step-by-step checklist for logging losses and registering for aid at nearby Huduma Centers.",
		tag: "Paperwork"
	},
	{
		icon: House,
		title: "Finding temporary shelter",
		body: "Accessing local schools, church shelters, and government relocation spaces while you rebuild.",
		tag: "Housing"
	},
	{
		icon: Banknote,
		title: "Applying for NDMA & NGO aid",
		body: "How to register for the Hunger Safety Net Programme (HSNP) cash transfers and NGO rebuilding grants.",
		tag: "Funding"
	},
	{
		icon: HeartPulse,
		title: "Community chamas & support",
		body: "Leveraging self-help groups, local Harambees, and community networks to share reconstruction resources.",
		tag: "Wellbeing"
	},
	{
		icon: BookOpen,
		title: "Rebuilding stronger",
		body: "Resilient building advice for flood plains (elevated structures) and drought-resistant soil rehabilitation.",
		tag: "Rebuilding"
	}
];
var severityStyles = {
	high: "bg-destructive/10 text-destructive",
	medium: "bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300",
	info: "bg-brand-100 text-brand-800"
};
function Resources() {
	const { data: updates } = useSuspenseQuery(reliefUpdatesQuery());
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-7xl px-4 py-12",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
			className: "max-w-2xl",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-serif text-4xl font-semibold text-foreground",
				children: "Recovery resource hub"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-muted-foreground",
				children: "Practical, plain-language guides for every stage of recovery — plus live updates on the programs available to you."
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-10 grid grid-cols-1 gap-10 lg:grid-cols-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "lg:col-span-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mb-6 font-serif text-2xl font-semibold text-foreground",
					children: "Recovery guides"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-1 gap-6 sm:grid-cols-2",
					children: guides.map((g) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/resources/guides/$guideId",
						params: { guideId: g.tag.toLowerCase() },
						className: "rounded-2xl border border-border bg-card p-6 transition-all hover:shadow-soft block text-left",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mb-4 flex size-11 items-center justify-center rounded-2xl bg-brand-100 text-brand-800",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(g.icon, {
									className: "size-5",
									"aria-hidden": "true"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[11px] font-bold uppercase tracking-wide text-brand-400",
								children: g.tag
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-1 font-serif text-lg font-semibold text-foreground",
								children: g.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-muted-foreground",
								children: g.body
							})
						]
					}, g.title))
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
				className: "mb-6 flex items-center gap-2 font-serif text-2xl font-semibold text-foreground",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bell, {
					className: "size-5 text-accent",
					"aria-hidden": "true"
				}), " Live updates"]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "space-y-4",
				children: updates.map((u) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "rounded-2xl border border-border bg-card p-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: `rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide ${severityStyles[u.severity] ?? severityStyles.info}`,
								children: u.severity
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs text-muted-foreground",
								children: u.region
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-3 font-semibold leading-snug text-foreground",
							children: u.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1.5 text-sm text-muted-foreground",
							children: u.body
						})
					]
				}, u.id))
			})] })]
		})]
	}) });
}
//#endregion
export { Resources as component };
