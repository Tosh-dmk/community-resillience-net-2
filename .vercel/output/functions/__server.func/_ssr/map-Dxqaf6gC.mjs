import { r as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { t as Button } from "./button-DRsC1qZi.mjs";
import { r as useSuspenseQuery } from "../_libs/tanstack__react-query.mjs";
import { C as Navigation, K as Clock, k as MapPin, x as Phone } from "../_libs/lucide-react.mjs";
import { r as assistanceCentersQuery, t as PageShell } from "./PageShell-DcwVYdMv.mjs";
import { t as InteractiveMap } from "./InteractiveMap-BmhZ9Pjv.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/map-Dxqaf6gC.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function MapPage() {
	const { data: centers } = useSuspenseQuery(assistanceCentersQuery());
	const [selectedId, setSelectedId] = (0, import_react.useState)(centers[0]?.id);
	const [showHazards, setShowHazards] = (0, import_react.useState)(false);
	const selected = centers.find((c) => c.id === selectedId) ?? centers[0];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-7xl px-4 py-12",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
			className: "flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "max-w-2xl",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-serif text-4xl font-semibold text-foreground",
					children: "Assistance near you"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-muted-foreground",
					children: "Shelters, supply points, and recovery hubs — with the services they offer right now."
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-2 self-start sm:self-center bg-card border border-border rounded-full px-4 py-2 shadow-sm shrink-0",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-xs font-bold text-red-500 animate-pulse",
						children: "●"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
						htmlFor: "hazards-toggle",
						className: "text-xs font-semibold text-muted-foreground uppercase cursor-pointer select-none",
						children: "Show Hazard Alerts"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						id: "hazards-toggle",
						type: "checkbox",
						checked: showHazards,
						onChange: (e) => setShowHazards(e.target.checked),
						className: "size-4 text-brand-500 rounded border-border focus:ring-brand-500 cursor-pointer"
					})
				]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-8 grid grid-cols-1 gap-6 lg:grid-cols-5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "lg:col-span-2",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "space-y-3",
					"aria-label": "Assistance centers",
					children: centers.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => setSelectedId(c.id),
						className: `w-full rounded-2xl border p-5 text-left transition-colors ${selected?.id === c.id ? "border-accent bg-card ring-1 ring-accent" : "border-border bg-card hover:border-accent/40"}`,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-start justify-between gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "font-semibold text-foreground",
									children: c.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: `shrink-0 text-xs font-semibold ${c.is_open ? "text-emerald-600" : "text-muted-foreground"}`,
									children: c.is_open ? "● Open" : "Closed"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-1 flex items-center gap-1 text-sm text-muted-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, {
									className: "size-3.5 shrink-0",
									"aria-hidden": "true"
								}), c.address]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-3 flex flex-wrap gap-1.5",
								children: c.services.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "rounded-md bg-muted px-2 py-0.5 text-[11px] font-medium text-muted-foreground",
									children: s
								}, s))
							})
						]
					}) }, c.id))
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "lg:col-span-3",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative overflow-hidden rounded-3xl ring-1 ring-border",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InteractiveMap, {
						centers,
						selectedId,
						onSelectId: setSelectedId,
						showHazards,
						className: "h-[300px] w-full rounded-3xl md:h-[440px]"
					}), selected && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "absolute z-[1000] bottom-4 left-4 right-4 rounded-2xl bg-card/95 p-6 shadow-soft backdrop-blur-sm sm:left-6 sm:right-auto sm:max-w-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mb-3 flex items-center justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs font-bold uppercase tracking-widest text-brand-400",
									children: selected.region
								}), selected.is_open && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "flex items-center gap-1 text-xs font-semibold text-emerald-600",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, {
										className: "size-3.5",
										"aria-hidden": "true"
									}), " Active now"]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-serif text-lg font-semibold text-foreground",
								children: selected.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm text-muted-foreground",
								children: selected.address
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-4 flex gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									size: "sm",
									className: "flex-1",
									asChild: true,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: `https://www.google.com/maps/dir/?api=1&destination=${selected.lat},${selected.lng}`,
										target: "_blank",
										rel: "noopener noreferrer",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navigation, {
											className: "size-4",
											"aria-hidden": "true"
										}), " Get Directions"]
									})
								}), selected.phone && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									variant: "outline",
									size: "sm",
									"aria-label": "Call center",
									asChild: true,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: `tel:${selected.phone}`,
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, {
											className: "size-4",
											"aria-hidden": "true"
										}), " Call"]
									})
								})]
							})
						]
					})]
				})
			})]
		})]
	}) });
}
//#endregion
export { MapPage as component };
