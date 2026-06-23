import { r as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { n as cn, t as Button } from "./button-DRsC1qZi.mjs";
import { t as supabase } from "./client-DG-YIv9O.mjs";
import { _ as useNavigate, g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as Logo, r as useAuth } from "./Logo-D-O7Z-vc.mjs";
import { i as useQuery, n as queryOptions } from "../_libs/tanstack__react-query.mjs";
import {
  O as Menu,
  Q as ChevronLeft,
  T as Moon,
  Z as ChevronRight,
  c as TriangleAlert,
  j as Info,
  n as X,
  u as Sun,
  y as Radio,
} from "../_libs/lucide-react.mjs";
import {
  a as DialogOverlay,
  c as DialogTrigger,
  i as DialogDescription,
  n as DialogClose,
  o as DialogPortal,
  r as DialogContent,
  s as DialogTitle,
  t as Dialog,
} from "../_libs/@radix-ui/react-dialog+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/PageShell-DcwVYdMv.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var ThemeContext = (0, import_react.createContext)({
  theme: "light",
  toggleTheme: () => {},
});
function ThemeProvider({ children }) {
  const [theme, setTheme] = (0, import_react.useState)("light");
  (0, import_react.useEffect)(() => {
    const stored = localStorage.getItem("rebuild-theme");
    const prefersDark =
      typeof window !== "undefined" && window.matchMedia("(prefers-color-scheme: dark)").matches;
    setTheme(stored ?? (prefersDark ? "dark" : "light"));
  }, []);
  (0, import_react.useEffect)(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("rebuild-theme", theme);
  }, [theme]);
  const toggleTheme = () => setTheme((t) => (t === "light" ? "dark" : "light"));
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThemeContext.Provider, {
    value: {
      theme,
      toggleTheme,
    },
    children,
  });
}
var useTheme = () => (0, import_react.useContext)(ThemeContext);
var KENYAN_ORGS = [
  {
    id: "607aec41-f3d9-451b-b7d9-551112268eb4",
    name: "Kenya Red Cross Society (KRCS)",
    category: "non_profit",
    description:
      "Emergency rescue, first aid, temporary tents, water purification, and survival kit distribution across flood and landslide hit counties.",
    region: "National",
    amount_label: "Emergency Aid",
    deadline: "Ongoing",
    verified: true,
    website: "https://www.redcross.or.ke",
    tags: ["emergency", "shelter", "first_aid", "flood"],
    created_at: /* @__PURE__ */ new Date().toISOString(),
  },
  {
    id: "d469be28-bbf0-4eff-bf9a-088984949e16",
    name: "NDMA Drought Cash Transfers",
    category: "government",
    description:
      "Cash disbursements via the Hunger Safety Net Programme (HSNP) to registered vulnerable families in Arid and Semi-Arid Land (ASAL) counties.",
    region: "National",
    amount_label: "Up to KES 20,000",
    deadline: "Rolling",
    verified: true,
    website: "https://www.ndma.go.ke",
    tags: ["drought", "grants", "agriculture"],
    created_at: /* @__PURE__ */ new Date().toISOString(),
  },
  {
    id: "4db6356c-bad5-4abc-87b2-4f1b8d7a9188",
    name: "Safaricom Foundation Disaster Grant",
    category: "donor",
    description:
      "Support for local community groups, reconstruction of schools and hospitals, and mobile money aid transfers.",
    region: "National",
    amount_label: "Varies",
    deadline: "Ongoing",
    verified: true,
    website: "https://www.safaricomfoundation.org",
    tags: ["grants", "rebuilding", "medical"],
    created_at: /* @__PURE__ */ new Date().toISOString(),
  },
  {
    id: "ministry-devolution",
    name: "Ministry of Devolution and ASALs Relief",
    category: "government",
    description:
      "Government food distribution networks, iron sheets for roofing rebuilds, and direct relief supplies.",
    region: "National",
    amount_label: "In-kind support",
    deadline: "Ongoing",
    verified: true,
    website: "https://www.asals.go.ke",
    tags: ["food", "materials", "emergency"],
    created_at: /* @__PURE__ */ new Date().toISOString(),
  },
  {
    id: "equity-foundation",
    name: "Equity Group Foundation Recovery Loans",
    category: "non_profit",
    description:
      "Rehabilitation loans and agricultural inputs grants for smallholder farmers and businesses affected by climate shocks.",
    region: "Rift Valley",
    amount_label: "Up to KES 500,000",
    deadline: "Dec 31",
    verified: true,
    website: "https://equitygroupfoundation.org",
    tags: ["loans", "grants", "agriculture"],
    created_at: /* @__PURE__ */ new Date().toISOString(),
  },
  {
    id: "budalangi-rebuild",
    name: "Budalangi Flood Rebuild Fund",
    category: "community",
    description:
      "Crowdfunded local building materials pool (timber, cement, roofing sheets) managed by community elders.",
    region: "Western Region",
    amount_label: "Available now",
    deadline: "Ongoing",
    verified: true,
    website: "https://www.redcross.or.ke",
    tags: ["materials", "rebuilding", "flood"],
    created_at: /* @__PURE__ */ new Date().toISOString(),
  },
  {
    id: "actionaid-livelihood",
    name: "ActionAid Kenya Livelihood Grants",
    category: "non_profit",
    description:
      "Direct recovery cash transfers and rebuilding materials focusing on vulnerable women and child-headed households.",
    region: "Coastal Region",
    amount_label: "Up to KES 50,000",
    deadline: "Ongoing",
    verified: true,
    website: "https://kenya.actionaid.org",
    tags: ["grants", "housing", "community"],
    created_at: /* @__PURE__ */ new Date().toISOString(),
  },
  {
    id: "farmers-mutual",
    name: "Kenya Farmers Mutual Aid Chama",
    category: "community",
    description:
      "Grassroots mutual support coordinating seed distribution, tractor sharing, and soil recovery volunteers.",
    region: "Rift Valley",
    amount_label: "Volunteer-led",
    deadline: "Ongoing",
    verified: true,
    website: "https://kenaff.org",
    tags: ["community", "volunteers", "food", "drought"],
    created_at: /* @__PURE__ */ new Date().toISOString(),
  },
];
var KENYAN_GROUPS = [
  {
    id: "g1",
    name: "Flood Survivors - Budalangi & Nyando",
    description:
      "A chama-style support circle for those rebuilding after floods in Busia, Kisumu, and Tana River.",
    topic: "Flood Recovery",
    region: "Western Region",
    member_count: 1420,
    created_at: /* @__PURE__ */ new Date().toISOString(),
  },
  {
    id: "g2",
    name: "Drought Resilience ASAL Network",
    description:
      "Connect with pastoralists and dryland farmers sharing water management tips and NDMA relief updates.",
    topic: "Drought",
    region: "Northern Kenya",
    member_count: 945,
    created_at: /* @__PURE__ */ new Date().toISOString(),
  },
  {
    id: "g3",
    name: "Landslide Support - West Pokot & Muranga",
    description:
      "Community help, contractor references, and mutual aid for land restoration in landslide-prone hilly areas.",
    topic: "Landslide",
    region: "Rift Valley",
    member_count: 388,
    created_at: /* @__PURE__ */ new Date().toISOString(),
  },
  {
    id: "g4",
    name: "Nairobi Urban Flood Help",
    description:
      "Coordination of rescue, volunteer cleanups, and emergency shelter sharing in Nairobi estates.",
    topic: "Storm",
    region: "Nairobi",
    member_count: 2105,
    created_at: /* @__PURE__ */ new Date().toISOString(),
  },
  {
    id: "g5",
    name: "Volunteers & Helpers Kenya Hub",
    description:
      "For volunteers offering M-Pesa donations, transport, construction skills, and sorting relief items.",
    topic: "Volunteering",
    region: "National",
    member_count: 3560,
    created_at: /* @__PURE__ */ new Date().toISOString(),
  },
  {
    id: "g6",
    name: "Community Mental Health & Support Kenya",
    description:
      "A safe, compassionate counseling and trauma recovery space led by local mental health volunteers.",
    topic: "Wellbeing",
    region: "National",
    member_count: 1224,
    created_at: /* @__PURE__ */ new Date().toISOString(),
  },
];
var KENYAN_UPDATES = [
  {
    id: "u1",
    title: "Severe Flood Warning — Tana River Basin",
    body: "Water levels in the Tana River have reached critical thresholds. Residents in Garissa and Tana River lowlands are urged to move to higher ground immediately and register at the nearest KRC shelter.",
    region: "Coastal Region",
    severity: "high",
    created_at: /* @__PURE__ */ new Date(Date.now() - 1e3 * 60 * 43).toISOString(),
  },
  {
    id: "u2",
    title: "Landslide Alert — West Pokot & Elgeyo Marakwet",
    body: "Continuous heavy rainfall has destabilised hillside terrain in West Pokot and Elgeyo Marakwet. County governments have activated emergency response. Avoid travel in affected areas.",
    region: "Rift Valley",
    severity: "high",
    created_at: /* @__PURE__ */ new Date(Date.now() - 1e3 * 60 * 112).toISOString(),
  },
  {
    id: "u3",
    title: "Safaricom Foundation MSME Grants — Deadline Extended",
    body: "Rebuilding grant applications for shops and traders affected by floods or landslides have been extended. Apply via HopeBridge or call 0800-724-000.",
    region: "National",
    severity: "medium",
    created_at: /* @__PURE__ */ new Date(Date.now() - 1e3 * 60 * 60 * 6).toISOString(),
  },
  {
    id: "u4",
    title: "NDMA HSNP Cash Transfers Disbursed — Q3 2025",
    body: "Hunger Safety Net Programme funds for this quarter have been released. Eligible families in Turkana, Marsabit, Mandera, and Wajir can collect via M-Pesa or Huduma Centre agents.",
    region: "Northern Kenya",
    severity: "info",
    created_at: /* @__PURE__ */ new Date(Date.now() - 1e3 * 60 * 60 * 14).toISOString(),
  },
  {
    id: "u5",
    title: "KRCS Iron Sheet Distribution — Budalangi & Nyando",
    body: "Kenya Red Cross is distributing roofing iron sheets, timber poles, and treated mosquito nets in Budalangi and Nyando this week. Bring National ID and damage report copy.",
    region: "Western Region",
    severity: "info",
    created_at: /* @__PURE__ */ new Date(Date.now() - 1e3 * 60 * 60 * 22).toISOString(),
  },
];
var KENYAN_CENTERS = [
  {
    id: "19740132-f151-4793-a4e9-f7658ac645b7",
    name: "Nairobi Central Relief Station",
    address: "Huduma Centre GPO, Nairobi",
    region: "Nairobi",
    services: ["Water", "Hot Meals", "Power Charging", "Wifi", "Information"],
    is_open: true,
    phone: "0800-555-111",
    lat: -1.2847,
    lng: 36.8244,
    created_at: /* @__PURE__ */ new Date().toISOString(),
  },
  {
    id: "e9623f2e-4fd5-4bf7-bc90-70346e9699ff",
    name: "Garissa Drought Relief Hub",
    address: "NDMA Office, Garissa-Mombasa Road",
    region: "Northern Kenya",
    services: ["Water", "Food", "Livestock Feed", "First Aid"],
    is_open: true,
    phone: "0800-555-222",
    lat: -0.456,
    lng: 39.6405,
    created_at: /* @__PURE__ */ new Date().toISOString(),
  },
  {
    id: "c7afdf59-464d-4f65-8299-d345a9e0a76c",
    name: "Budalangi Flood Rescue Hall",
    address: "Budalangi Primary School Hall, Busia",
    region: "Western Region",
    services: ["Shelter", "First Aid", "Supplies", "Pet Care"],
    is_open: true,
    phone: "0800-555-333",
    lat: 0.1205,
    lng: 34.051,
    created_at: /* @__PURE__ */ new Date().toISOString(),
  },
  {
    id: "kisumu-center",
    name: "Nyando Relief Distribution Point",
    address: "Ahero Multipurpose Center, Kisumu",
    region: "Nyanza",
    services: ["Water", "Food", "Supplies", "Tools"],
    is_open: true,
    phone: "0800-555-444",
    lat: -0.174,
    lng: 34.92,
    created_at: /* @__PURE__ */ new Date().toISOString(),
  },
  {
    id: "west-pokot-center",
    name: "Kapenguria Landslide Support Center",
    address: "Kapenguria District Hospital Annexe, West Pokot",
    region: "Rift Valley",
    services: ["First Aid", "Shelter", "Food", "Mental Health"],
    is_open: false,
    phone: "0800-555-555",
    lat: 1.239,
    lng: 35.122,
    created_at: /* @__PURE__ */ new Date().toISOString(),
  },
];
var organizationsQuery = () =>
  queryOptions({
    queryKey: ["aid_organizations"],
    queryFn: async () => {
      try {
        const { data, error } = await supabase
          .from("aid_organizations")
          .select("*")
          .order("created_at", { ascending: true });
        if (error) throw error;
        if (!data || data.length === 0 || data.some((o) => o.name.includes("FEMA")))
          return KENYAN_ORGS;
        return data;
      } catch (err) {
        console.warn("Database select failed, falling back to Kenyan Orgs.", err);
        return KENYAN_ORGS;
      }
    },
  });
var supportGroupsQuery = () =>
  queryOptions({
    queryKey: ["support_groups"],
    queryFn: async () => {
      try {
        const { data, error } = await supabase
          .from("support_groups")
          .select("*")
          .order("member_count", { ascending: false });
        if (error) throw error;
        if (
          !data ||
          data.length === 0 ||
          data.some((g) => g.name.includes("Flood Survivors Together"))
        )
          return KENYAN_GROUPS;
        return data;
      } catch (err) {
        console.warn("Database select failed, falling back to Kenyan Groups.", err);
        return KENYAN_GROUPS;
      }
    },
  });
var reliefUpdatesQuery = () =>
  queryOptions({
    queryKey: ["relief_updates"],
    queryFn: async () => {
      try {
        const { data, error } = await supabase
          .from("relief_updates")
          .select("*")
          .order("created_at", { ascending: false });
        if (error) throw error;
        if (!data || data.length === 0 || data.some((u) => u.title.includes("FEMA")))
          return KENYAN_UPDATES;
        return data;
      } catch (err) {
        console.warn("Database select failed, falling back to Kenyan Updates.", err);
        return KENYAN_UPDATES;
      }
    },
  });
var assistanceCentersQuery = () =>
  queryOptions({
    queryKey: ["assistance_centers"],
    queryFn: async () => {
      try {
        const { data, error } = await supabase
          .from("assistance_centers")
          .select("*")
          .order("created_at", { ascending: true });
        if (error) throw error;
        if (
          !data ||
          data.length === 0 ||
          data.some((c) => c.name.includes("Asheville") || c.region === "Western Region")
        )
          return KENYAN_CENTERS;
        return data;
      } catch (err) {
        console.warn("Database select failed, falling back to Kenyan Centers.", err);
        return KENYAN_CENTERS;
      }
    },
  });
var myReportsQuery = (userId) =>
  queryOptions({
    queryKey: ["disaster_reports", userId],
    enabled: !!userId,
    queryFn: async () => {
      const { data, error } = await supabase
        .from("disaster_reports")
        .select("*")
        .eq("user_id", userId)
        .order("created_at", { ascending: false });
      if (error) throw error;
      return data ?? [];
    },
  });
var DISMISS_KEY = "hopebridge_banner_dismissed_v2";
var ROTATION_INTERVAL = 7e3;
function getRelativeTime(isoString) {
  const diff = Date.now() - new Date(isoString).getTime();
  const minutes = Math.floor(diff / 6e4);
  if (minutes < 2) return "Just now";
  if (minutes < 60) return `${minutes}m ago`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours}h ago`;
  return `${Math.floor(hours / 24)}d ago`;
}
function getAlertAction(update) {
  const t = update.title.toLowerCase();
  if (t.includes("grant") || t.includes("cash") || t.includes("transfer") || t.includes("msme"))
    return {
      label: "View funding",
      to: "/funding",
    };
  if (update.severity === "high")
    return {
      label: "View map",
      to: "/map",
    };
  if (t.includes("guide") || t.includes("iron") || t.includes("distribution"))
    return {
      label: "View resources",
      to: "/resources",
    };
  return {
    label: "See updates",
    to: "/resources",
  };
}
function EmergencyBanner() {
  const { data: updates } = useQuery(reliefUpdatesQuery());
  const [dismissed, setDismissed] = (0, import_react.useState)(false);
  const [activeIndex, setActiveIndex] = (0, import_react.useState)(0);
  const [paused, setPaused] = (0, import_react.useState)(false);
  const [visible, setVisible] = (0, import_react.useState)(true);
  const alerts = updates?.filter((u) => u.severity === "high" || u.severity === "medium") ?? [];
  (0, import_react.useEffect)(() => {
    try {
      if (sessionStorage.getItem(DISMISS_KEY) === "true") setDismissed(true);
    } catch {}
  }, []);
  (0, import_react.useEffect)(() => {
    if (alerts.length <= 1 || paused) return;
    const id = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setActiveIndex((i) => (i + 1) % alerts.length);
        setVisible(true);
      }, 250);
    }, ROTATION_INTERVAL);
    return () => clearInterval(id);
  }, [alerts.length, paused]);
  if (dismissed || alerts.length === 0) return null;
  const current = alerts[activeIndex];
  const isHigh = current.severity === "high";
  const action = getAlertAction(current);
  const relTime = getRelativeTime(current.created_at);
  function handleDismiss() {
    setDismissed(true);
    try {
      sessionStorage.setItem(DISMISS_KEY, "true");
    } catch {}
  }
  function navigate(dir) {
    setVisible(false);
    setTimeout(() => {
      setActiveIndex((i) => (i + dir + alerts.length) % alerts.length);
      setVisible(true);
    }, 150);
    setPaused(true);
  }
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
    className: `relative flex items-center justify-between gap-2 px-4 py-2.5 text-xs font-medium transition-all ${isHigh ? "bg-red-600 text-white" : "bg-amber-500 text-white"}`,
    onMouseEnter: () => setPaused(true),
    onMouseLeave: () => setPaused(false),
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
        className: "flex shrink-0 items-center gap-2",
        children: [
          isHigh
            ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
                className: "relative flex size-2",
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                    className:
                      "absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75",
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                    className: "relative inline-flex size-2 rounded-full bg-white",
                  }),
                ],
              })
            : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Radio, {
                className: "size-3.5 shrink-0",
                "aria-hidden": "true",
              }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
            className:
              "hidden font-bold uppercase tracking-widest text-[10px] opacity-80 sm:inline",
            children: isHigh ? "Emergency" : "Update",
          }),
        ],
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
        className: `flex flex-1 flex-wrap items-center justify-center gap-x-2 gap-y-0.5 text-center transition-opacity duration-200 ${visible ? "opacity-100" : "opacity-0"}`,
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
            className: "flex items-center gap-1.5",
            children: [
              isHigh
                ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, {
                    className: "size-3.5 shrink-0",
                    "aria-hidden": "true",
                  })
                : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Info, {
                    className: "size-3.5 shrink-0",
                    "aria-hidden": "true",
                  }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                className: "font-semibold",
                children: current.title,
              }),
            ],
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
            className: "hidden text-white/70 sm:inline",
            children: "•",
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
            className: "hidden text-white/80 sm:inline",
            children: current.region,
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
            className: "hidden text-white/70 sm:inline",
            children: "•",
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
            className: "hidden text-white/70 sm:inline",
            children: relTime,
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
            to: action.to,
            className: "ml-1 underline underline-offset-2 hover:no-underline font-semibold",
            children: [action.label, " →"],
          }),
        ],
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
        className: "flex shrink-0 items-center gap-1",
        children: [
          alerts.length > 1 &&
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, {
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
                  className: "hidden text-white/70 text-[10px] sm:inline",
                  children: [activeIndex + 1, "/", alerts.length],
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
                  onClick: () => navigate(-1),
                  className:
                    "rounded p-0.5 opacity-70 hover:opacity-100 transition-opacity cursor-pointer",
                  "aria-label": "Previous alert",
                  children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, {
                    className: "size-3.5",
                  }),
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
                  onClick: () => navigate(1),
                  className:
                    "rounded p-0.5 opacity-70 hover:opacity-100 transition-opacity cursor-pointer",
                  "aria-label": "Next alert",
                  children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, {
                    className: "size-3.5",
                  }),
                }),
              ],
            }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
            onClick: handleDismiss,
            className:
              "ml-1 rounded p-0.5 opacity-70 hover:opacity-100 transition-opacity cursor-pointer",
            "aria-label": "Dismiss alerts",
            children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-3.5" }),
          }),
        ],
      }),
    ],
  });
}
var Sheet = Dialog;
var SheetTrigger = DialogTrigger;
var SheetPortal = DialogPortal;
var SheetOverlay = import_react.forwardRef(({ className, ...props }, ref) =>
  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay, {
    className: cn(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className,
    ),
    ...props,
    ref,
  }),
);
SheetOverlay.displayName = DialogOverlay.displayName;
var sheetVariants = cva(
  "fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500 data-[state=open]:animate-in data-[state=closed]:animate-out",
  {
    variants: {
      side: {
        top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
        bottom:
          "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
        left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
        right:
          "inset-y-0 right-0 h-full w-3/4 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm",
      },
    },
    defaultVariants: { side: "right" },
  },
);
var SheetContent = import_react.forwardRef(
  ({ side = "right", className, children, ...props }, ref) =>
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SheetPortal, {
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetOverlay, {}),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
          ref,
          className: cn(sheetVariants({ side }), className),
          ...props,
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogClose, {
              className:
                "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background cursor-pointer transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                  className: "sr-only",
                  children: "Close",
                }),
              ],
            }),
            children,
          ],
        }),
      ],
    }),
);
SheetContent.displayName = DialogContent.displayName;
var SheetHeader = ({ className, ...props }) =>
  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
    className: cn("flex flex-col space-y-2 text-center sm:text-left", className),
    ...props,
  });
SheetHeader.displayName = "SheetHeader";
var SheetFooter = ({ className, ...props }) =>
  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
    className: cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className),
    ...props,
  });
SheetFooter.displayName = "SheetFooter";
var SheetTitle = import_react.forwardRef(({ className, ...props }, ref) =>
  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
    ref,
    className: cn("text-lg font-semibold text-foreground", className),
    ...props,
  }),
);
SheetTitle.displayName = DialogTitle.displayName;
var SheetDescription = import_react.forwardRef(({ className, ...props }, ref) =>
  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, {
    ref,
    className: cn("text-sm text-muted-foreground", className),
    ...props,
  }),
);
SheetDescription.displayName = DialogDescription.displayName;
function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
    variant: "ghost",
    size: "icon",
    onClick: toggleTheme,
    "aria-label": theme === "dark" ? "Switch to light mode" : "Switch to dark mode",
    className: "min-h-11 min-w-11",
    children:
      theme === "dark"
        ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sun, {})
        : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Moon, {}),
  });
}
var navLinks = [
  {
    to: "/funding",
    label: "Climate Finance",
  },
  {
    to: "/organizations",
    label: "Aid Directory",
  },
  {
    to: "/community",
    label: "Community",
  },
  {
    to: "/resources",
    label: "Resources",
  },
  {
    to: "/map",
    label: "Map",
  },
  {
    to: "/operations",
    label: "Ops Portal",
  },
];
function SiteHeader() {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
  const [open, setOpen] = (0, import_react.useState)(false);
  const handleSignOut = async () => {
    await signOut();
    setOpen(false);
    navigate({ to: "/" });
  };
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
    className: "sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur-md",
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
      className: "mx-auto flex h-16 max-w-7xl items-center justify-between px-4",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {}),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
          className: "hidden items-center gap-7 text-sm font-medium text-muted-foreground md:flex",
          children: navLinks.map((link) =>
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
              Link,
              {
                to: link.to,
                className: "transition-colors hover:text-foreground [&.active]:text-foreground",
                children: link.label,
              },
              link.to,
            ),
          ),
        }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
          className: "flex items-center gap-2",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThemeToggle, {}),
            user
              ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, {
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
                      asChild: true,
                      variant: "ghost",
                      size: "sm",
                      className: "hidden sm:inline-flex",
                      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
                        to: "/dashboard",
                        children: "Dashboard",
                      }),
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
                      asChild: true,
                      size: "sm",
                      className: "hidden rounded-full sm:inline-flex",
                      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
                        to: "/report",
                        children: "Report Damage",
                      }),
                    }),
                  ],
                })
              : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, {
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
                      asChild: true,
                      variant: "ghost",
                      size: "sm",
                      className: "hidden sm:inline-flex",
                      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
                        to: "/auth",
                        children: "Sign In",
                      }),
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
                      asChild: true,
                      size: "sm",
                      className: "hidden rounded-full sm:inline-flex",
                      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
                        to: "/report",
                        children: "Report Damage",
                      }),
                    }),
                  ],
                }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Sheet, {
              open,
              onOpenChange: setOpen,
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetTrigger, {
                  asChild: true,
                  children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
                    variant: "ghost",
                    size: "icon",
                    className: "min-h-11 min-w-11 md:hidden",
                    "aria-label": "Open menu",
                    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, {}),
                  }),
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SheetContent, {
                  side: "right",
                  className: "w-72",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetHeader, {
                      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetTitle, {
                        className: "text-left",
                        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {
                          compact: true,
                        }),
                      }),
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
                      className: "mt-8 flex flex-col gap-1",
                      children: [
                        navLinks.map((link) =>
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                            Link,
                            {
                              to: link.to,
                              onClick: () => setOpen(false),
                              className:
                                "rounded-lg px-3 py-3 text-base font-medium text-foreground transition-colors hover:bg-muted",
                              children: link.label,
                            },
                            link.to,
                          ),
                        ),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                          className: "mt-4 flex flex-col gap-2 border-t border-border pt-4",
                          children: [
                            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
                              asChild: true,
                              className: "rounded-full",
                              onClick: () => setOpen(false),
                              children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
                                to: "/report",
                                children: "Report Damage",
                              }),
                            }),
                            user
                              ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                                  import_jsx_runtime.Fragment,
                                  {
                                    children: [
                                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
                                        asChild: true,
                                        variant: "outline",
                                        onClick: () => setOpen(false),
                                        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                          Link,
                                          {
                                            to: "/dashboard",
                                            children: "Dashboard",
                                          },
                                        ),
                                      }),
                                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
                                        variant: "ghost",
                                        onClick: handleSignOut,
                                        children: "Sign Out",
                                      }),
                                    ],
                                  },
                                )
                              : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
                                  asChild: true,
                                  variant: "outline",
                                  onClick: () => setOpen(false),
                                  children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
                                    to: "/auth",
                                    children: "Sign In",
                                  }),
                                }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  });
}
function SiteFooter() {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
    className: "border-t border-border py-12",
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
      className:
        "mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-4 md:flex-row",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, { compact: true }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
          className: "text-center text-xs text-muted-foreground",
          children: [
            "© ",
            /* @__PURE__ */ new Date().getFullYear(),
            " HopeBridge Recovery Network. A platform for community resilience.",
          ],
        }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
          className: "flex gap-6 text-xs font-medium text-muted-foreground",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
              to: "/resources",
              className: "transition-colors hover:text-foreground",
              children: "Resources",
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
              to: "/organizations",
              className: "transition-colors hover:text-foreground",
              children: "Organizations",
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
              to: "/community",
              className: "transition-colors hover:text-foreground",
              children: "Community",
            }),
          ],
        }),
      ],
    }),
  });
}
function PageShell({ children }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
    className: "flex min-h-dvh flex-col bg-background",
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmergencyBanner, {}),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
        className: "flex-1",
        children,
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {}),
    ],
  });
}
//#endregion
export {
  organizationsQuery as a,
  myReportsQuery as i,
  ThemeProvider as n,
  reliefUpdatesQuery as o,
  assistanceCentersQuery as r,
  supportGroupsQuery as s,
  PageShell as t,
};
