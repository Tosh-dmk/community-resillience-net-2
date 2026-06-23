import { r as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { t as Button } from "./button-DRsC1qZi.mjs";
import { t as supabase } from "./client-DG-YIv9O.mjs";
import { _ as useNavigate, c as HeadContent, d as createRouter, f as Outlet, g as Link, h as createRootRouteWithContext, j as redirect, l as useRouterState, m as createFileRoute, p as lazyRouteComponent, s as Scripts, v as useRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as AuthProvider } from "./Logo-D-O7Z-vc.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { a as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { E as MessageSquare, J as CircleDot, S as PhoneIncoming, W as CornerDownLeft, b as Play, g as ShieldAlert, m as Smartphone, n as X, p as Sparkles, x as Phone } from "../_libs/lucide-react.mjs";
import { a as organizationsQuery, n as ThemeProvider, o as reliefUpdatesQuery, r as assistanceCentersQuery, s as supportGroupsQuery } from "./PageShell-DcwVYdMv.mjs";
import { t as RouteError } from "./route-boundaries-vglIa9qS.mjs";
import { t as Toaster } from "../_libs/sonner.mjs";
import { a as OrganizationsSkeleton, i as MapSkeleton, o as ResourcesSkeleton, r as FundingSkeleton, t as CommunitySkeleton } from "./Skeletons-DGtzFcLY.mjs";
import { t as Route$14 } from "./resources_.guides._guideId-B322GzVF.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-I5bysO3j.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var GRANT_OPTIONS = [
	{
		key: "1",
		name: "HSNP Cash (KES 5,400)",
		amount: "5,400",
		provider: "NDMA"
	},
	{
		key: "2",
		name: "MSME Rebuild Grant",
		amount: "100,000",
		provider: "Safaricom Foundation"
	},
	{
		key: "3",
		name: "Seed Recovery Kit",
		amount: "8,000-18,000",
		provider: "KENAFF"
	}
];
function UssdSimulator({ onClose }) {
	const [screen, setScreen] = (0, import_react.useState)("dial");
	const [inputCode, setInputCode] = (0, import_react.useState)("*483*111#");
	const [menuInput, setMenuInput] = (0, import_react.useState)("");
	const [textLog, setTextLog] = (0, import_react.useState)([]);
	const [isDemoRunning, setIsDemoRunning] = (0, import_react.useState)(false);
	const [activeOption, setActiveOption] = (0, import_react.useState)(null);
	const [selectedGrant, setSelectedGrant] = (0, import_react.useState)(null);
	const [grantCounty, setGrantCounty] = (0, import_react.useState)("");
	const demoTimers = (0, import_react.useRef)([]);
	const MAIN_MENU = [
		"HopeBridge Portal",
		"1. Report Hazard",
		"2. Request Supplies",
		"3. Climate Grants",
		"4. Nearest Shelter",
		"5. Talk to Chief"
	];
	const clearDemoTimers = () => {
		demoTimers.current.forEach(clearTimeout);
		demoTimers.current = [];
		setIsDemoRunning(false);
		setActiveOption(null);
	};
	(0, import_react.useEffect)(() => {
		return () => clearDemoTimers();
	}, []);
	const handleDial = () => {
		if (inputCode === "*483*111#") {
			setScreen("main");
			setTextLog(MAIN_MENU);
		} else alert("Invalid code! Try dialing *483*111#");
	};
	const handleMenuSubmit = (e) => {
		if (e) e.preventDefault();
		const opt = menuInput.trim();
		setMenuInput("");
		if (screen === "main") if (opt === "1") {
			setScreen("report");
			setTextLog([
				"Select Hazard Type:",
				"1. Flood",
				"2. Landslide",
				"3. Drought"
			]);
		} else if (opt === "2") {
			setScreen("request");
			setTextLog([
				"Request Urgent Supplies:",
				"1. Clean Water",
				"2. Relief Food",
				"3. Shelter / Tents"
			]);
		} else if (opt === "3") {
			setScreen("grants");
			setTextLog([
				"Climate Finance Grants:",
				"1. HSNP Cash (KES 5,400)",
				"2. MSME Rebuild Grant",
				"3. Seed Recovery Kit",
				"0. Back"
			]);
		} else if (opt === "4") {
			setScreen("shelter");
			setTextLog(["Enter County Name:", "(e.g. Kisumu, Nairobi, Garissa)"]);
		} else if (opt === "5") {
			setScreen("helpline");
			setTextLog([
				"Connecting to Local Chief...",
				"Nelson (Nyando): +254 722 000 000",
				"Press 0 to go back"
			]);
			setTimeout(() => {
				window.dispatchEvent(new CustomEvent("demo:sms", { detail: {
					title: "Chief Nelson (Nyando)",
					body: "Habari. I am coordinating the emergency response. If you have an emergency, report via USSD Option 1 or evacuate to Ahero Base."
				} }));
			}, 800);
		} else setTextLog(["Invalid option!", ...MAIN_MENU]);
		else if (screen === "grants") {
			const grant = GRANT_OPTIONS.find((g) => g.key === opt);
			if (grant) {
				setSelectedGrant(grant);
				setScreen("grants-county");
				setTextLog([
					`${grant.name}`,
					`Provider: ${grant.provider}`,
					"",
					"Enter your County to",
					"verify eligibility:"
				]);
			} else if (opt === "0") {
				setScreen("main");
				setTextLog(MAIN_MENU);
			} else setTextLog([
				"Invalid option!",
				"Climate Finance Grants:",
				"1. HSNP Cash (KES 5,400)",
				"2. MSME Rebuild Grant",
				"3. Seed Recovery Kit",
				"0. Back"
			]);
		} else if (screen === "grants-county") if (opt.length > 2) {
			setGrantCounty(opt);
			const countyName = opt.charAt(0).toUpperCase() + opt.slice(1).toLowerCase();
			setScreen("grants-confirm");
			setTextLog([
				`County: ${countyName}`,
				`Grant: ${selectedGrant?.name}`,
				`Amount: KES ${selectedGrant?.amount}`,
				"",
				"1. Confirm Application",
				"2. Cancel"
			]);
		} else setTextLog(["Please enter valid county:", "(e.g. Kisumu, Turkana)"]);
		else if (screen === "grants-confirm") if (opt === "1") {
			setScreen("submitting");
			setTextLog(["Submitting grant application...", "Please wait..."]);
			const countyName = grantCounty.charAt(0).toUpperCase() + grantCounty.slice(1).toLowerCase();
			setTimeout(() => {
				setScreen("done");
				setTextLog([
					"Application Submitted!",
					`Grant: ${selectedGrant?.name}`,
					`Ref: HB-${Math.floor(Math.random() * 9e4) + 1e4}`,
					"Verification: 5-7 days",
					"SMS confirmation sent."
				]);
				window.dispatchEvent(new CustomEvent("demo:sms", { detail: {
					title: selectedGrant?.provider ?? "HopeBridge Finance",
					body: `Grant application for "${selectedGrant?.name}" received for ${countyName} County. Ref: HB-${Math.floor(Math.random() * 9e4) + 1e4}. Verification within 5-7 business days. Funds via M-Pesa on approval.`
				} }));
			}, 1500);
		} else if (opt === "2") {
			setScreen("main");
			setTextLog(MAIN_MENU);
			setSelectedGrant(null);
		} else setTextLog(["Press 1 to Confirm", "Press 2 to Cancel"]);
		else if (screen === "report") if ([
			"1",
			"2",
			"3"
		].includes(opt)) {
			setScreen("submitting");
			setTextLog(["Submitting Report via USSD..."]);
			let hazardType = "Hazard";
			if (opt === "1") hazardType = "Flood";
			if (opt === "2") hazardType = "Landslide";
			if (opt === "3") hazardType = "Drought";
			setTimeout(() => {
				setScreen("done");
				setTextLog([
					"Report Submitted!",
					"Local rescue team notified.",
					"Thank you."
				]);
				window.dispatchEvent(new CustomEvent("demo:sms", { detail: {
					title: "USSD Alert Gateway",
					body: `USSD damage report (${hazardType}) processed for your location. Verification dispatch triggered.`
				} }));
			}, 1200);
		} else setTextLog([
			"Invalid option!",
			"Select Hazard Type:",
			"1. Flood",
			"2. Landslide",
			"3. Drought"
		]);
		else if (screen === "request") if ([
			"1",
			"2",
			"3"
		].includes(opt)) {
			setScreen("submitting");
			setTextLog(["Processing request..."]);
			let supplyType = "Supplies";
			if (opt === "1") supplyType = "Clean Water";
			if (opt === "2") supplyType = "Relief Food";
			if (opt === "3") supplyType = "Shelter / Tents";
			setTimeout(() => {
				setScreen("done");
				setTextLog([
					"Supplies requested!",
					"Red Cross volunteers alerted.",
					"Keep phone active."
				]);
				window.dispatchEvent(new CustomEvent("demo:sms", { detail: {
					title: "HopeBridge Logistics",
					body: `Your request for ${supplyType} has been received. Ticket HB-${Math.floor(Math.random() * 9e3) + 1e3}. A volunteer will contact you shortly.`
				} }));
			}, 1200);
		} else setTextLog([
			"Invalid option!",
			"Request Urgent Supplies:",
			"1. Clean Water",
			"2. Relief Food",
			"3. Shelter / Tents"
		]);
		else if (screen === "shelter") if (opt.length > 2) {
			setScreen("submitting");
			setTextLog([`Searching shelters in ${opt}...`]);
			const countyName = opt.charAt(0).toUpperCase() + opt.slice(1);
			setTimeout(() => {
				setScreen("done");
				setTextLog([
					"Active Shelter found:",
					"Ahero Multipurpose Center",
					"Call: +254 711 000 999",
					"Capacity: 45 vacancies"
				]);
				window.dispatchEvent(new CustomEvent("demo:sms", { detail: {
					title: "Red Cross Shelter Info",
					body: `Shelter directory: Active shelter in ${countyName} County is Ahero Multipurpose Center. Call base: +254 711 000 999. Capacity: 45 vacancies. First aid & clean water available.`
				} }));
			}, 1200);
		} else setTextLog(["Please enter a valid county name:", "(e.g. Kisumu, Nairobi, Garissa)"]);
		else if (screen === "helpline") {
			if (opt === "0") {
				setScreen("main");
				setTextLog(MAIN_MENU);
			}
		} else if (screen === "done") {
			setScreen("dial");
			setInputCode("*483*111#");
			setSelectedGrant(null);
			setGrantCounty("");
		}
	};
	const runAutomatedDemo = (option) => {
		clearDemoTimers();
		setIsDemoRunning(true);
		setActiveOption(option);
		setScreen("dial");
		setInputCode("*483*111#");
		setMenuInput("");
		setSelectedGrant(null);
		setGrantCounty("");
		const addTimer = (fn, delay) => {
			const id = setTimeout(fn, delay);
			demoTimers.current.push(id);
		};
		addTimer(() => {
			setScreen("main");
			setTextLog(MAIN_MENU);
			addTimer(() => {
				setMenuInput(option);
				addTimer(() => {
					setMenuInput("");
					if (option === "1") {
						setScreen("report");
						setTextLog([
							"Select Hazard Type:",
							"1. Flood",
							"2. Landslide",
							"3. Drought"
						]);
						addTimer(() => {
							setMenuInput("1");
							addTimer(() => {
								setMenuInput("");
								setScreen("submitting");
								setTextLog(["Submitting Report via USSD..."]);
								addTimer(() => {
									setScreen("done");
									setTextLog([
										"Report Submitted!",
										"Local rescue team notified.",
										"Thank you."
									]);
									setIsDemoRunning(false);
									setActiveOption(null);
									window.dispatchEvent(new CustomEvent("demo:sms", { detail: {
										title: "USSD Alert Gateway",
										body: "USSD damage report (Flood) processed for Nyando region. Verification team dispatched."
									} }));
								}, 1500);
							}, 1200);
						}, 1500);
					} else if (option === "2") {
						setScreen("request");
						setTextLog([
							"Request Urgent Supplies:",
							"1. Clean Water",
							"2. Relief Food",
							"3. Shelter / Tents"
						]);
						addTimer(() => {
							setMenuInput("2");
							addTimer(() => {
								setMenuInput("");
								setScreen("submitting");
								setTextLog(["Processing request..."]);
								addTimer(() => {
									setScreen("done");
									setTextLog([
										"Supplies requested!",
										"Red Cross volunteers alerted.",
										"Keep phone active."
									]);
									setIsDemoRunning(false);
									setActiveOption(null);
									window.dispatchEvent(new CustomEvent("demo:sms", { detail: {
										title: "HopeBridge Logistics",
										body: "Your request for Relief Food has been received. Ticket HB-8421. A volunteer will contact you shortly."
									} }));
								}, 1500);
							}, 1200);
						}, 1500);
					} else if (option === "3") {
						const grant = GRANT_OPTIONS[0];
						setSelectedGrant(grant);
						setScreen("grants");
						setTextLog([
							"Climate Finance Grants:",
							"1. HSNP Cash (KES 5,400)",
							"2. MSME Rebuild Grant",
							"3. Seed Recovery Kit",
							"0. Back"
						]);
						addTimer(() => {
							setMenuInput("1");
							addTimer(() => {
								setMenuInput("");
								setScreen("grants-county");
								setTextLog([
									`${grant.name}`,
									`Provider: ${grant.provider}`,
									"",
									"Enter County to",
									"verify eligibility:"
								]);
								addTimer(() => {
									setMenuInput("T");
									addTimer(() => {
										setMenuInput("Tu");
									}, 150);
									addTimer(() => {
										setMenuInput("Tur");
									}, 300);
									addTimer(() => {
										setMenuInput("Turk");
									}, 450);
									addTimer(() => {
										setMenuInput("Turka");
									}, 600);
									addTimer(() => {
										setMenuInput("Turkan");
									}, 750);
									addTimer(() => {
										setMenuInput("Turkana");
										addTimer(() => {
											setMenuInput("");
											setGrantCounty("Turkana");
											setScreen("grants-confirm");
											setTextLog([
												"County: Turkana",
												`Grant: ${grant.name}`,
												`Amount: KES ${grant.amount}`,
												"",
												"1. Confirm Application",
												"2. Cancel"
											]);
											addTimer(() => {
												setMenuInput("1");
												addTimer(() => {
													setMenuInput("");
													setScreen("submitting");
													setTextLog(["Submitting grant application...", "Please wait..."]);
													addTimer(() => {
														setScreen("done");
														setTextLog([
															"Application Submitted!",
															`Grant: ${grant.name}`,
															"Ref: HB-72841",
															"Verification: 5-7 days",
															"SMS confirmation sent."
														]);
														setIsDemoRunning(false);
														setActiveOption(null);
														window.dispatchEvent(new CustomEvent("demo:sms", { detail: {
															title: "NDMA HSNP",
															body: `Grant application for "HSNP Cash (KES 5,400)" received for Turkana County. Ref: HB-72841. Verification within 5-7 business days. Funds via M-Pesa on approval.`
														} }));
													}, 1500);
												}, 1200);
											}, 1800);
										}, 1200);
									}, 900);
								}, 1200);
							}, 1200);
						}, 1500);
					} else if (option === "4") {
						setScreen("shelter");
						setTextLog(["Enter County Name:", "(e.g. Kisumu, Nairobi, Garissa)"]);
						addTimer(() => {
							setMenuInput("K");
							addTimer(() => {
								setMenuInput("Ki");
							}, 150);
							addTimer(() => {
								setMenuInput("Kis");
							}, 300);
							addTimer(() => {
								setMenuInput("Kisu");
							}, 450);
							addTimer(() => {
								setMenuInput("Kisum");
							}, 600);
							addTimer(() => {
								setMenuInput("Kisumu");
								addTimer(() => {
									setMenuInput("");
									setScreen("submitting");
									setTextLog(["Searching shelters in Kisumu..."]);
									addTimer(() => {
										setScreen("done");
										setTextLog([
											"Active Shelter found:",
											"Ahero Multipurpose Center",
											"Call: +254 711 000 999",
											"Capacity: 45 vacancies"
										]);
										setIsDemoRunning(false);
										setActiveOption(null);
										window.dispatchEvent(new CustomEvent("demo:sms", { detail: {
											title: "Red Cross Shelter Info",
											body: "Shelter directory: Active shelter in Kisumu County is Ahero Multipurpose Center. Call base: +254 711 000 999. Capacity: 45 vacancies. First aid & clean water available."
										} }));
									}, 1500);
								}, 1200);
							}, 750);
						}, 1200);
					} else if (option === "5") {
						setScreen("helpline");
						setTextLog([
							"Connecting to Local Chief...",
							"Nelson (Nyando): +254 722 000 000",
							"Press 0 to go back"
						]);
						addTimer(() => {
							window.dispatchEvent(new CustomEvent("demo:sms", { detail: {
								title: "Chief Nelson (Nyando)",
								body: "Habari. I am coordinating the emergency response. If you have an emergency, report via USSD Option 1 or evacuate to Ahero Base."
							} }));
							addTimer(() => {
								setScreen("dial");
								setIsDemoRunning(false);
								setActiveOption(null);
							}, 3e3);
						}, 800);
					}
				}, 1200);
			}, 1500);
		}, 1200);
	};
	const pressKey = (key) => {
		if (isDemoRunning) return;
		if (screen === "dial") setInputCode((prev) => prev + key);
		else setMenuInput((prev) => prev + key);
	};
	const handleBackspace = () => {
		if (isDemoRunning) return;
		if (screen === "dial") setInputCode((prev) => prev.slice(0, -1));
		else setMenuInput((prev) => prev.slice(0, -1));
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "w-full max-w-sm rounded-2xl border border-border bg-card py-3 px-4 shadow-soft select-none font-sans",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-2 flex items-center justify-between border-b border-border pb-1.5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
					className: "font-serif text-lg font-semibold text-foreground flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Smartphone, { className: "size-4.5 text-accent" }), " USSD Feature Phone"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "rounded-full bg-emerald-50 px-1.5 py-0.5 text-[8px] font-bold uppercase tracking-wider text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300",
					children: "Dialer Active"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-[11px] text-muted-foreground mb-2 leading-relaxed",
				children: [
					"Simulate offline climate-finance access via standard network codes (dial",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
						className: "text-foreground",
						children: "*483*111#"
					}),
					"). No internet required."
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-2 space-y-1 rounded-xl bg-muted/40 p-2 border border-border",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-[9px] font-bold uppercase tracking-wider text-muted-foreground block mb-0.5",
					children: "Auto-Play USSD Demos"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-2 gap-1 sm:grid-cols-3",
					children: [
						{
							key: "1",
							label: "1. Report Damage"
						},
						{
							key: "2",
							label: "2. Get Supplies"
						},
						{
							key: "3",
							label: "3. Climate Grants ✓"
						},
						{
							key: "4",
							label: "4. Find Shelter"
						},
						{
							key: "5",
							label: "5. Talk to Chief"
						}
					].map((btn) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						size: "xs",
						variant: "secondary",
						className: `text-[9px] font-bold py-1 cursor-pointer flex items-center justify-center gap-1 h-7 ${activeOption === btn.key ? "bg-amber-500/20 text-amber-700 dark:text-amber-300 border-amber-500/35" : btn.key === "3" ? "bg-emerald-100 hover:bg-emerald-200 dark:bg-emerald-900/40 dark:hover:bg-emerald-800/40 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800" : "bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-800 dark:hover:bg-neutral-700 text-foreground border border-border"}`,
						onClick: () => runAutomatedDemo(btn.key),
						disabled: isDemoRunning,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, { className: "size-2 fill-current shrink-0" }), btn.label]
					}, btn.key))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto w-54 rounded-2xl bg-neutral-800 p-2 border-2 border-neutral-700 shadow-xl flex flex-col items-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "w-full h-28 bg-[#8fa48c] border-2 border-[#788e75] rounded-md p-1.5 font-mono text-neutral-900 flex flex-col justify-between shadow-inner",
						children: screen === "dial" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col justify-between h-full",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-right text-[9px] opacity-75",
									children: "Safaricom"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-center text-base font-bold tracking-widest py-0.5",
									children: inputCode || "Dial Code..."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-[9px] opacity-75",
									children: "Press Dial Below"
								})
							]
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
							onSubmit: handleMenuSubmit,
							className: "flex flex-col h-full justify-between",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-[9px] leading-tight flex-1 overflow-y-auto space-y-0.5",
									children: textLog.map((line, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: line.includes("Climate") || line.includes("Grant") ? "font-bold text-emerald-900" : "",
										children: line
									}, i))
								}),
								screen !== "submitting" && screen !== "done" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center border-t border-neutral-700/30 pt-1 mt-1",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-[9px] font-bold mr-1",
											children: "Input:"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											type: "text",
											className: "flex-1 min-w-0 bg-transparent outline-none border-b border-neutral-800 text-[11px] font-bold font-mono text-neutral-900 h-4",
											value: menuInput,
											onChange: (e) => setMenuInput(e.target.value),
											autoFocus: true,
											disabled: isDemoRunning
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "submit",
											className: "ml-1 cursor-pointer",
											disabled: isDemoRunning,
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CornerDownLeft, { className: "size-2.5" })
										})
									]
								}),
								screen === "done" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-center border-t border-neutral-700/30 pt-1 mt-1",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "submit",
										className: "text-[8px] font-bold uppercase underline cursor-pointer",
										children: "Dismiss"
									})
								})
							]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "w-full flex justify-between px-1 py-1.5 border-b border-neutral-700",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							size: "xs",
							variant: "outline",
							className: "bg-neutral-700 text-neutral-300 hover:bg-neutral-600 border-neutral-600 text-[9px] px-1.5 h-6.5 cursor-pointer",
							onClick: handleBackspace,
							disabled: isDemoRunning,
							children: "Clear"
						}), screen === "dial" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: handleDial,
							className: "size-7 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white flex items-center justify-center shadow-lg transition-transform hover:scale-105 cursor-pointer",
							title: "Dial Code",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleDot, { className: "size-3.5" })
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => {
								clearDemoTimers();
								setScreen("dial");
								setInputCode("*483*111#");
								setMenuInput("");
								setSelectedGrant(null);
								setGrantCounty("");
							},
							className: "size-7 rounded-full bg-red-600 hover:bg-red-500 text-white flex items-center justify-center shadow-lg transition-transform hover:scale-105 cursor-pointer",
							title: "Hang Up",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-3.5" })
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid grid-cols-3 gap-1 mt-2 w-full px-1",
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
						].map((key) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => pressKey(key),
							disabled: isDemoRunning,
							className: "h-7 rounded bg-neutral-700 hover:bg-neutral-600 text-neutral-100 font-bold border border-neutral-650 flex flex-col items-center justify-center text-xs transition-colors active:bg-neutral-550 cursor-pointer disabled:opacity-50",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: key })
						}, key))
					})
				]
			}),
			onClose && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-2.5 pt-2 border-t border-border flex justify-start",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					size: "xs",
					className: "rounded-xl px-3 py-1 bg-red-600 hover:bg-red-700 text-white text-[9px] font-bold uppercase tracking-wider cursor-pointer h-7",
					onClick: onClose,
					children: "← Back to App"
				})
			})
		]
	});
}
var styles_default = "/assets/styles-By14l1W0.css";
var Toaster$1 = ({ ...props }) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster, {
		className: "toaster group",
		toastOptions: { classNames: {
			toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
			description: "group-[.toast]:text-muted-foreground",
			actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
			cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
		} },
		...props
	});
};
function DemoPanel() {
	const [isOpen, setIsOpen] = (0, import_react.useState)(false);
	const navigate = useNavigate();
	const handleAutofill = (scenario) => {
		navigate({ to: "/report" });
		setTimeout(() => {
			window.dispatchEvent(new CustomEvent("demo:autofill", { detail: { scenario } }));
		}, 200);
	};
	const triggerChiefSms = () => {
		window.dispatchEvent(new CustomEvent("demo:sms", { detail: {
			title: "Chief Nelson (Nyando)",
			body: "EMERGENCY: River Nyando water levels have breached the danger mark. Evacuation to Ahero Center is active. Evacuate immediately."
		} }));
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "fixed bottom-6 right-6 z-[9999] pointer-events-auto select-none font-sans",
		children: [!isOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
			onClick: () => setIsOpen(true),
			className: "flex items-center gap-2 rounded-full bg-neutral-900 text-white hover:bg-neutral-800 border border-neutral-700 px-4 py-3 shadow-2xl transition-all duration-300 transform hover:scale-105 cursor-pointer font-semibold text-xs tracking-wider uppercase",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "size-4 text-amber-400 animate-pulse" }), "Demo Panel"]
		}), isOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "w-80 rounded-3xl bg-neutral-900 text-white border border-neutral-800 shadow-2xl p-5 animate-in slide-in-from-bottom-5 fade-in-50 duration-300",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between border-b border-neutral-800 pb-3 mb-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
					className: "font-serif font-bold text-lg flex items-center gap-2 text-neutral-100",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "size-4 text-amber-400" }), " Demo Panel"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => setIsOpen(false),
					className: "text-neutral-500 hover:text-neutral-300 cursor-pointer",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4" })
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
						className: "text-[11px] font-bold uppercase tracking-wider text-neutral-400 mb-2.5",
						children: "Autofill Scenarios (Demo Flow)"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							size: "sm",
							className: "w-full justify-start bg-neutral-800 hover:bg-neutral-700 text-neutral-200 border border-neutral-700/50 text-xs font-medium cursor-pointer",
							onClick: () => handleAutofill("nyando"),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, { className: "size-3.5 mr-2 text-amber-400 shrink-0" }), "Autofill: Nyando Flood"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							size: "sm",
							className: "w-full justify-start bg-neutral-800 hover:bg-neutral-700 text-neutral-200 border border-neutral-700/50 text-xs font-medium cursor-pointer",
							onClick: () => handleAutofill("turkana"),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, { className: "size-3.5 mr-2 text-amber-400 shrink-0" }), "Autofill: Turkana Drought"]
						})]
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
						className: "text-[11px] font-bold uppercase tracking-wider text-neutral-400 mb-2.5",
						children: "Simulate Mobile Interactions"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							size: "sm",
							className: "w-full justify-start bg-neutral-800 hover:bg-neutral-700 text-neutral-200 border border-neutral-700/50 text-xs font-medium cursor-pointer",
							onClick: () => window.dispatchEvent(new CustomEvent("demo:open-ussd")),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Smartphone, { className: "size-3.5 mr-2 text-amber-400 shrink-0" }), "Launch USSD Simulator"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							size: "sm",
							className: "w-full justify-start bg-neutral-800 hover:bg-neutral-700 text-neutral-200 border border-neutral-700/50 text-xs font-medium cursor-pointer",
							onClick: triggerChiefSms,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PhoneIncoming, { className: "size-3.5 mr-2 text-blue-400 shrink-0" }), "Simulate Chief's Alert SMS"]
						})]
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-xl bg-neutral-950 p-3 border border-neutral-800 flex gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldAlert, { className: "size-4 text-neutral-400 shrink-0 mt-0.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[10px] text-neutral-400 leading-normal",
							children: "Click autofill to redirect to the report page, populate coordinates, type the description, and click send. SMS simulator alerts show instant responses!"
						})]
					})
				]
			})]
		})]
	});
}
function NotificationToast() {
	const [sms, setSms] = (0, import_react.useState)(null);
	const [stk, setStk] = (0, import_react.useState)(null);
	const [pin, setPin] = (0, import_react.useState)("");
	const [isProcessing, setIsProcessing] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const handleSms = (e) => {
			const customEvent = e;
			setSms({
				title: customEvent.detail.title || "Emergency Alert",
				body: customEvent.detail.body || ""
			});
		};
		const handleStk = (e) => {
			const customEvent = e;
			setStk({
				amount: customEvent.detail.amount || 500,
				account: customEvent.detail.account || "HOPE-RELIEF"
			});
		};
		window.addEventListener("demo:sms", handleSms);
		window.addEventListener("demo:stk", handleStk);
		return () => {
			window.removeEventListener("demo:sms", handleSms);
			window.removeEventListener("demo:stk", handleStk);
		};
	}, []);
	(0, import_react.useEffect)(() => {
		if (sms) {
			const timer = setTimeout(() => setSms(null), 6e3);
			return () => clearTimeout(timer);
		}
	}, [sms]);
	const handlePinSubmit = (e) => {
		e.preventDefault();
		if (pin.length < 4) return;
		setIsProcessing(true);
		setTimeout(() => {
			setIsProcessing(false);
			stk.amount;
			stk.account;
			setStk(null);
			setPin("");
			window.dispatchEvent(new CustomEvent("demo:stk-success", { detail: { message: "STK push processed successfully!" } }));
		}, 1500);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "fixed inset-x-0 top-4 z-[1000000] flex flex-col items-center gap-3 pointer-events-none px-4",
		children: [sms && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "w-full max-w-sm rounded-3xl bg-neutral-900 text-white p-4 shadow-2xl border border-neutral-800 flex items-start gap-3 pointer-events-auto animate-in slide-in-from-top-4 duration-300",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "size-10 rounded-full bg-blue-600 flex items-center justify-center text-white shrink-0",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageSquare, { className: "size-5" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex-1 min-w-0",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between mb-0.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "font-bold text-sm tracking-wide flex items-center gap-1.5 text-blue-400",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "size-3" }), " Messages"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[10px] text-neutral-400",
								children: "now"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
							className: "font-bold text-sm text-neutral-100",
							children: sms.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-neutral-300 leading-normal mt-1",
							children: sms.body
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => setSms(null),
					className: "text-neutral-500 hover:text-neutral-300 cursor-pointer shrink-0",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4" })
				})
			]
		}), stk && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "fixed inset-0 bg-black/60 backdrop-blur-xs flex items-center justify-center z-[999999] pointer-events-auto p-4",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "w-full max-w-xs rounded-2xl bg-neutral-100 text-neutral-900 border-4 border-neutral-300 p-5 shadow-2xl animate-in zoom-in-95 duration-200 font-mono",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2 mb-4 justify-center border-b border-neutral-300 pb-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldAlert, { className: "size-5 text-emerald-600 animate-pulse" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-bold text-lg tracking-wider text-emerald-700",
						children: "M-PESA"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit: handlePinSubmit,
					className: "space-y-4 text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-xs leading-relaxed font-semibold",
							children: [
								"Pay KES ",
								stk.amount.toLocaleString(),
								" to ",
								stk.account,
								" Account?",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"Enter your M-Pesa PIN:"
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "password",
							maxLength: 4,
							required: true,
							autoFocus: true,
							placeholder: "••••",
							className: "w-full text-center bg-white border border-neutral-300 rounded px-3 py-2 text-xl font-bold tracking-widest focus:outline-none focus:ring-2 focus:ring-emerald-500",
							value: pin,
							onChange: (e) => setPin(e.target.value.replace(/\D/g, "")),
							disabled: isProcessing
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex gap-2 pt-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								type: "button",
								variant: "outline",
								className: "flex-1 bg-white hover:bg-neutral-200 border-neutral-300 text-xs h-9 cursor-pointer",
								onClick: () => {
									setStk(null);
									setPin("");
								},
								disabled: isProcessing,
								children: "Cancel"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								type: "submit",
								className: "flex-1 bg-emerald-600 hover:bg-emerald-700 text-white text-xs h-9 cursor-pointer",
								disabled: isProcessing || pin.length < 4,
								children: isProcessing ? "Processing..." : "Send"
							})]
						})
					]
				})]
			})
		})]
	});
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$13 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "HopeBridge — Recover After Disaster, Together" },
			{
				name: "description",
				content: "Find verified aid, financial grants, recovery resources, and community support after floods, earthquakes, storms, and other disasters — all in one place."
			},
			{
				name: "author",
				content: "HopeBridge"
			},
			{
				property: "og:title",
				content: "HopeBridge"
			},
			{
				property: "og:description",
				content: "Connecting disaster-affected families with verified aid, community support, and the resources needed to rebuild."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary"
			}
		],
		links: [
			{
				rel: "icon",
				type: "image/png",
				href: "/favicon.png"
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600&family=Inter:wght@400;500;600;700&display=swap"
			},
			{
				rel: "stylesheet",
				href: "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
			},
			{
				rel: "stylesheet",
				href: styles_default
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		suppressHydrationWarning: true,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", {
			suppressHydrationWarning: true,
			children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})]
		})]
	});
}
function RootComponent() {
	const { queryClient } = Route$13.useRouteContext();
	const isNavigating = useRouterState().status === "pending";
	const [isUssdOpen, setIsUssdOpen] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const handleOpenUssd = () => setIsUssdOpen(true);
		window.addEventListener("demo:open-ussd", handleOpenUssd);
		return () => window.removeEventListener("demo:open-ussd", handleOpenUssd);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThemeProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AuthProvider, { children: [
			isNavigating && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "fixed top-0 left-0 right-0 h-[3px] bg-accent z-[9999] animate-pulse",
				style: { boxShadow: "0 1px 8px var(--accent)" },
				role: "progressbar",
				"aria-label": "Loading page"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster$1, { position: "top-center" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NotificationToast, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DemoPanel, {}),
			isUssdOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				onClick: () => setIsUssdOpen(false),
				className: "fixed inset-0 z-[99999] bg-black/60 backdrop-blur-md flex items-center justify-center p-4 cursor-pointer",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					onClick: (e) => e.stopPropagation(),
					className: "relative animate-in zoom-in-95 duration-200 cursor-default",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UssdSimulator, { onClose: () => setIsUssdOpen(false) })
				})
			})
		] }) })
	});
}
var BASE_URL = "https://hopebridge.co.ke";
var Route$12 = createFileRoute("/sitemap.xml")({ server: { handlers: { GET: async () => {
	const xml = [
		`<?xml version="1.0" encoding="UTF-8"?>`,
		`<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
		...[
			{
				path: "/",
				changefreq: "weekly",
				priority: "1.0"
			},
			{
				path: "/organizations",
				changefreq: "daily",
				priority: "0.9"
			},
			{
				path: "/funding",
				changefreq: "daily",
				priority: "0.9"
			},
			{
				path: "/community",
				changefreq: "weekly",
				priority: "0.8"
			},
			{
				path: "/resources",
				changefreq: "daily",
				priority: "0.8"
			},
			{
				path: "/map",
				changefreq: "daily",
				priority: "0.8"
			},
			{
				path: "/assistant",
				changefreq: "monthly",
				priority: "0.7"
			}
		].map((e) => [
			`  <url>`,
			`    <loc>${BASE_URL}${e.path}</loc>`,
			e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
			e.priority ? `    <priority>${e.priority}</priority>` : null,
			`  </url>`
		].filter(Boolean).join("\n")),
		`</urlset>`
	].join("\n");
	return new Response(xml, { headers: {
		"Content-Type": "application/xml",
		"Cache-Control": "public, max-age=3600"
	} });
} } } });
var $$splitNotFoundComponentImporter$10 = () => import("./resources-BGqAA6ll.mjs");
var $$splitErrorComponentImporter$10 = () => import("./resources-BILpX-Ls.mjs");
var $$splitComponentImporter$11 = () => import("./resources-VjgjrPwY.mjs");
var Route$11 = createFileRoute("/resources")({
	head: () => ({ meta: [
		{ title: "Disaster Recovery Resource Hub — HopeBridge" },
		{
			name: "description",
			content: "Step-by-step disaster recovery guides plus real-time updates on relief programs, shelters, and assistance in your area."
		},
		{
			property: "og:title",
			content: "Recovery Resource Hub — HopeBridge"
		}
	] }),
	loader: ({ context }) => {
		context.queryClient.ensureQueryData(reliefUpdatesQuery());
	},
	pendingComponent: ResourcesSkeleton,
	component: lazyRouteComponent($$splitComponentImporter$11, "component"),
	errorComponent: lazyRouteComponent($$splitErrorComponentImporter$10, "errorComponent"),
	notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter$10, "notFoundComponent")
});
var $$splitNotFoundComponentImporter$9 = () => import("./organizations-DVdQAq72.mjs");
var $$splitErrorComponentImporter$9 = () => import("./organizations-Y67gn9Wo.mjs");
var $$splitComponentImporter$10 = () => import("./organizations-Zan1tPnU.mjs");
var Route$10 = createFileRoute("/organizations")({
	head: () => ({ meta: [
		{ title: "Verified Aid Organizations & Funding — HopeBridge" },
		{
			name: "description",
			content: "Browse a directory of verified NGOs, government programs, donors, and community funds offering disaster recovery assistance."
		},
		{
			property: "og:title",
			content: "Verified Aid Organizations — HopeBridge"
		}
	] }),
	loader: ({ context }) => {
		context.queryClient.ensureQueryData(organizationsQuery());
	},
	pendingComponent: OrganizationsSkeleton,
	component: lazyRouteComponent($$splitComponentImporter$10, "component"),
	errorComponent: lazyRouteComponent($$splitErrorComponentImporter$9, "errorComponent"),
	notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter$9, "notFoundComponent")
});
var $$splitNotFoundComponentImporter$8 = () => import("./operations-Crwr8AIR.mjs");
var $$splitErrorComponentImporter$8 = () => import("./operations-CqLWT1D-.mjs");
var $$splitComponentImporter$9 = () => import("./operations-D1BvU0oX.mjs");
var Route$9 = createFileRoute("/operations")({
	head: () => ({ meta: [{ title: "Disaster Operations Portal — HopeBridge" }, {
		name: "description",
		content: "NGO and government operations dashboard for managing beneficiaries, coordinating climate-finance disbursements, tracking impact metrics, and accessing HopeBridge SaaS tools."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$9, "component"),
	errorComponent: lazyRouteComponent($$splitErrorComponentImporter$8, "errorComponent"),
	notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter$8, "notFoundComponent")
});
var $$splitNotFoundComponentImporter$7 = () => import("./map-Bmq00Xct.mjs");
var $$splitErrorComponentImporter$7 = () => import("./map-CzMzY7Po.mjs");
var $$splitComponentImporter$8 = () => import("./map-Dxqaf6gC.mjs");
var Route$8 = createFileRoute("/map")({
	head: () => ({ meta: [
		{ title: "Assistance Centers Near You — HopeBridge" },
		{
			name: "description",
			content: "Find nearby disaster assistance centers, emergency shelters, and distribution points with services, hours, and contact details."
		},
		{
			property: "og:title",
			content: "Assistance Centers Map — HopeBridge"
		}
	] }),
	loader: ({ context }) => {
		context.queryClient.ensureQueryData(assistanceCentersQuery());
	},
	pendingComponent: MapSkeleton,
	component: lazyRouteComponent($$splitComponentImporter$8, "component"),
	errorComponent: lazyRouteComponent($$splitErrorComponentImporter$7, "errorComponent"),
	notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter$7, "notFoundComponent")
});
var $$splitNotFoundComponentImporter$6 = () => import("./funding-C5fVTqsF.mjs");
var $$splitErrorComponentImporter$6 = () => import("./funding-BRRZrtz9.mjs");
var $$splitComponentImporter$7 = () => import("./funding-BdHswOfu.mjs");
var Route$7 = createFileRoute("/funding")({
	head: () => ({ meta: [
		{ title: "Climate Finance Marketplace — HopeBridge" },
		{
			name: "description",
			content: "Browse emergency cash transfers, climate adaptation grants, NGO rebuilding programs, and government assistance you qualify for. Accessible online and offline via USSD."
		},
		{
			property: "og:title",
			content: "Climate Finance Marketplace — HopeBridge"
		}
	] }),
	loader: ({ context }) => {
		context.queryClient.ensureQueryData(organizationsQuery());
	},
	pendingComponent: FundingSkeleton,
	component: lazyRouteComponent($$splitComponentImporter$7, "component"),
	errorComponent: lazyRouteComponent($$splitErrorComponentImporter$6, "errorComponent"),
	notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter$6, "notFoundComponent")
});
var $$splitNotFoundComponentImporter$5 = () => import("./community-BE8sLquT.mjs");
var $$splitErrorComponentImporter$5 = () => import("./community-gJP_fQoe.mjs");
var $$splitComponentImporter$6 = () => import("./community-CXId4jLN.mjs");
var Route$6 = createFileRoute("/community")({
	head: () => ({ meta: [
		{ title: "Community Support Groups — HopeBridge" },
		{
			name: "description",
			content: "Join community support groups to connect with others recovering from disasters, share resources, and find or offer volunteer help."
		},
		{
			property: "og:title",
			content: "Community Support Groups — HopeBridge"
		}
	] }),
	loader: ({ context }) => {
		context.queryClient.ensureQueryData(supportGroupsQuery());
	},
	pendingComponent: CommunitySkeleton,
	component: lazyRouteComponent($$splitComponentImporter$6, "component"),
	errorComponent: lazyRouteComponent($$splitErrorComponentImporter$5, "errorComponent"),
	notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter$5, "notFoundComponent")
});
var $$splitNotFoundComponentImporter$4 = () => import("./auth-DDk2dTuY.mjs");
var $$splitErrorComponentImporter$4 = () => import("./auth-DGD3GsJM.mjs");
var $$splitComponentImporter$5 = () => import("./auth-qX6iQ1eI.mjs");
var Route$5 = createFileRoute("/auth")({
	head: () => ({ meta: [{ title: "Sign In — HopeBridge" }, {
		name: "description",
		content: "Sign in or create an account to report disaster damage, track recovery, and connect with aid and community support."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$5, "component"),
	errorComponent: lazyRouteComponent($$splitErrorComponentImporter$4, "errorComponent"),
	notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter$4, "notFoundComponent")
});
var $$splitNotFoundComponentImporter$3 = () => import("./assistant-D0jYtDHR.mjs");
var $$splitErrorComponentImporter$3 = () => import("./assistant-CKJujuSy.mjs");
var $$splitComponentImporter$4 = () => import("./assistant-BXREr2N0.mjs");
var Route$4 = createFileRoute("/assistant")({
	head: () => ({ meta: [
		{ title: "AI Recovery Assistant — HopeBridge" },
		{
			name: "description",
			content: "Describe your situation and our AI assistant recommends the most relevant disaster aid programs, grants, and community support for you."
		},
		{
			property: "og:title",
			content: "AI Recovery Assistant — HopeBridge"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$4, "component"),
	errorComponent: lazyRouteComponent($$splitErrorComponentImporter$3, "errorComponent"),
	notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter$3, "notFoundComponent")
});
var $$splitComponentImporter$3 = () => import("./route-Di7iQBCH.mjs");
var Route$3 = createFileRoute("/_authenticated")({
	ssr: false,
	beforeLoad: async () => {
		const { data, error } = await supabase.auth.getUser();
		if (error || !data.user) throw redirect({ to: "/auth" });
		return { user: data.user };
	},
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitNotFoundComponentImporter$2 = () => import("./routes-y-dAduV5.mjs");
var $$splitErrorComponentImporter$2 = () => import("./routes-BALb0Ot_.mjs");
var $$splitComponentImporter$2 = () => import("./routes-YRpsli8N.mjs");
var Route$2 = createFileRoute("/")({
	head: () => ({ meta: [{ title: "HopeBridge — Climate Finance & Community Resilience Platform" }, {
		name: "description",
		content: "HopeBridge bridges the gap between climate-affected communities and the funding, aid, and recovery services designed to support them. Access climate grants, disaster relief, and resilience support online and offline via USSD."
	}] }),
	loader: ({ context }) => {
		context.queryClient.ensureQueryData(organizationsQuery());
		context.queryClient.ensureQueryData(assistanceCentersQuery());
	},
	component: lazyRouteComponent($$splitComponentImporter$2, "component"),
	errorComponent: lazyRouteComponent($$splitErrorComponentImporter$2, "errorComponent"),
	notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter$2, "notFoundComponent")
});
var $$splitNotFoundComponentImporter$1 = () => import("./report-Cyn5j7H2.mjs");
var $$splitErrorComponentImporter$1 = () => import("./report-Cm95AUrZ.mjs");
var $$splitComponentImporter$1 = () => import("./report-xlsHfUIY.mjs");
var Route$1 = createFileRoute("/_authenticated/report")({
	head: () => ({ meta: [{ title: "Report Disaster Damage — HopeBridge" }] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component"),
	errorComponent: lazyRouteComponent($$splitErrorComponentImporter$1, "errorComponent"),
	notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter$1, "notFoundComponent")
});
var $$splitNotFoundComponentImporter = () => import("./dashboard-CvroOAR5.mjs");
var $$splitErrorComponentImporter = () => import("./dashboard-D9rtD-wb.mjs");
var $$splitComponentImporter = () => import("./dashboard-BiGUXi5i.mjs");
var Route = createFileRoute("/_authenticated/dashboard")({
	head: () => ({ meta: [{ title: "Recovery Dashboard — HopeBridge" }] }),
	component: lazyRouteComponent($$splitComponentImporter, "component"),
	errorComponent: lazyRouteComponent($$splitErrorComponentImporter, "errorComponent"),
	notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter, "notFoundComponent")
});
var SitemapDotxmlRoute = Route$12.update({
	id: "/sitemap.xml",
	path: "/sitemap.xml",
	getParentRoute: () => Route$13
});
var ResourcesRoute = Route$11.update({
	id: "/resources",
	path: "/resources",
	getParentRoute: () => Route$13
});
var OrganizationsRoute = Route$10.update({
	id: "/organizations",
	path: "/organizations",
	getParentRoute: () => Route$13
});
var OperationsRoute = Route$9.update({
	id: "/operations",
	path: "/operations",
	getParentRoute: () => Route$13
});
var MapRoute = Route$8.update({
	id: "/map",
	path: "/map",
	getParentRoute: () => Route$13
});
var FundingRoute = Route$7.update({
	id: "/funding",
	path: "/funding",
	getParentRoute: () => Route$13
});
var CommunityRoute = Route$6.update({
	id: "/community",
	path: "/community",
	getParentRoute: () => Route$13
});
var AuthRoute = Route$5.update({
	id: "/auth",
	path: "/auth",
	getParentRoute: () => Route$13
});
var AssistantRoute = Route$4.update({
	id: "/assistant",
	path: "/assistant",
	getParentRoute: () => Route$13
});
var AuthenticatedRouteRoute = Route$3.update({
	id: "/_authenticated",
	getParentRoute: () => Route$13
});
var IndexRoute = Route$2.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$13
});
var AuthenticatedReportRoute = Route$1.update({
	id: "/report",
	path: "/report",
	getParentRoute: () => AuthenticatedRouteRoute
});
var AuthenticatedDashboardRoute = Route.update({
	id: "/dashboard",
	path: "/dashboard",
	getParentRoute: () => AuthenticatedRouteRoute
});
var ResourcesGuidesGuideIdRoute = Route$14.update({
	id: "/resources_/guides/$guideId",
	path: "/resources/guides/$guideId",
	getParentRoute: () => Route$13
});
var AuthenticatedRouteRouteChildren = {
	AuthenticatedDashboardRoute,
	AuthenticatedReportRoute
};
var rootRouteChildren = {
	IndexRoute,
	AuthenticatedRouteRoute: AuthenticatedRouteRoute._addFileChildren(AuthenticatedRouteRouteChildren),
	AssistantRoute,
	AuthRoute,
	CommunityRoute,
	FundingRoute,
	MapRoute,
	OperationsRoute,
	OrganizationsRoute,
	ResourcesRoute,
	SitemapDotxmlRoute,
	ResourcesGuidesGuideIdRoute
};
var routeTree = Route$13._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	return createRouter({
		routeTree,
		context: { queryClient: new QueryClient() },
		scrollRestoration: true,
		defaultPreload: "intent",
		defaultPreloadDelay: 50,
		defaultPreloadStaleTime: 0,
		defaultPendingMs: 50,
		defaultPendingMinMs: 300,
		defaultErrorComponent: RouteError
	});
};
//#endregion
export { getRouter };
