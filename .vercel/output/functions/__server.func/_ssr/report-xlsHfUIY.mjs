import { r as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { n as cn, t as Button } from "./button-DRsC1qZi.mjs";
import { t as supabase } from "./client-DG-YIv9O.mjs";
import { _ as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as useAuth } from "./Logo-D-O7Z-vc.mjs";
import { o as useQueryClient, t as useMutation } from "../_libs/tanstack__react-query.mjs";
import {
  $ as ChevronDown,
  A as LoaderCircle,
  X as ChevronUp,
  et as Check,
  h as ShieldCheck,
} from "../_libs/lucide-react.mjs";
import { t as PageShell } from "./PageShell-DcwVYdMv.mjs";
import { t as Textarea } from "./textarea-DBn9CRiI.mjs";
import { i as stringType, r as objectType, t as enumType } from "../_libs/zod.mjs";
import { t as Input } from "./input-DicJzR9-.mjs";
import { t as Label } from "./label-B4PTMSG2.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import {
  a as SelectItemIndicator,
  c as SelectPortal,
  d as SelectSeparator$1,
  f as SelectTrigger$1,
  i as SelectItem$1,
  l as SelectScrollDownButton$1,
  m as SelectViewport,
  n as SelectContent$1,
  o as SelectItemText,
  p as SelectValue$1,
  r as SelectIcon,
  s as SelectLabel$1,
  t as Select$1,
  u as SelectScrollUpButton$1,
} from "../_libs/@radix-ui/react-select+[...].mjs";
import {
  i as SliderTrack,
  n as SliderRange,
  r as SliderThumb,
  t as Slider$1,
} from "../_libs/radix-ui__react-slider.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/report-xlsHfUIY.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var Select = Select$1;
var SelectValue = SelectValue$1;
var SelectTrigger = import_react.forwardRef(({ className, children, ...props }, ref) =>
  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectTrigger$1, {
    ref,
    className: cn(
      "flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background cursor-pointer data-[placeholder]:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
      className,
    ),
    ...props,
    children: [
      children,
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectIcon, {
        asChild: true,
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, {
          className: "h-4 w-4 opacity-50",
        }),
      }),
    ],
  }),
);
SelectTrigger.displayName = SelectTrigger$1.displayName;
var SelectScrollUpButton = import_react.forwardRef(({ className, ...props }, ref) =>
  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectScrollUpButton$1, {
    ref,
    className: cn("flex cursor-default items-center justify-center py-1", className),
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronUp, { className: "h-4 w-4" }),
  }),
);
SelectScrollUpButton.displayName = SelectScrollUpButton$1.displayName;
var SelectScrollDownButton = import_react.forwardRef(({ className, ...props }, ref) =>
  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectScrollDownButton$1, {
    ref,
    className: cn("flex cursor-default items-center justify-center py-1", className),
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "h-4 w-4" }),
  }),
);
SelectScrollDownButton.displayName = SelectScrollDownButton$1.displayName;
var SelectContent = import_react.forwardRef(
  ({ className, children, position = "popper", ...props }, ref) =>
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectPortal, {
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent$1, {
        ref,
        className: cn(
          "relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] overflow-y-auto overflow-x-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-select-content-transform-origin)",
          position === "popper" &&
            "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
          className,
        ),
        position,
        ...props,
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectScrollUpButton, {}),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectViewport, {
            className: cn(
              "p-1",
              position === "popper" &&
                "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]",
            ),
            children,
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectScrollDownButton, {}),
        ],
      }),
    }),
);
SelectContent.displayName = SelectContent$1.displayName;
var SelectLabel = import_react.forwardRef(({ className, ...props }, ref) =>
  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectLabel$1, {
    ref,
    className: cn("px-2 py-1.5 text-sm font-semibold", className),
    ...props,
  }),
);
SelectLabel.displayName = SelectLabel$1.displayName;
var SelectItem = import_react.forwardRef(({ className, children, ...props }, ref) =>
  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectItem$1, {
    ref,
    className: cn(
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className,
    ),
    ...props,
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
        className: "absolute right-2 flex h-3.5 w-3.5 items-center justify-center",
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItemIndicator, {
          children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-4 w-4" }),
        }),
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItemText, { children }),
    ],
  }),
);
SelectItem.displayName = SelectItem$1.displayName;
var SelectSeparator = import_react.forwardRef(({ className, ...props }, ref) =>
  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectSeparator$1, {
    ref,
    className: cn("-mx-1 my-1 h-px bg-muted", className),
    ...props,
  }),
);
SelectSeparator.displayName = SelectSeparator$1.displayName;
var Slider = import_react.forwardRef(({ className, ...props }, ref) =>
  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Slider$1, {
    ref,
    className: cn("relative flex w-full touch-none select-none items-center", className),
    ...props,
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SliderTrack, {
        className: "relative h-1.5 w-full grow overflow-hidden rounded-full bg-primary/20",
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SliderRange, {
          className: "absolute h-full bg-primary",
        }),
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SliderThumb, {
        className:
          "block h-4 w-4 rounded-full border border-primary/50 bg-background shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
      }),
    ],
  }),
);
Slider.displayName = Slider$1.displayName;
var disasterTypes = [
  {
    value: "flood",
    label: "Flood",
  },
  {
    value: "earthquake",
    label: "Earthquake",
  },
  {
    value: "drought",
    label: "Drought",
  },
  {
    value: "landslide",
    label: "Landslide",
  },
  {
    value: "storm",
    label: "Storm",
  },
  {
    value: "wildfire",
    label: "Wildfire",
  },
  {
    value: "other",
    label: "Other",
  },
];
var needOptions = [
  "Temporary housing",
  "M-Pesa cash assistance",
  "Food & clean water",
  "Medical aid",
  "Rebuilding materials",
  "Volunteers & labor",
  "Counseling & mental health",
  "Transport & relocation",
];
var kenyanCounties = [
  "Nairobi",
  "Garissa",
  "Turkana",
  "Tana River",
  "Busia",
  "Kisumu",
  "West Pokot",
  "Murang'a",
  "Mombasa",
  "Nakuru",
  "Wajir",
  "Mandera",
  "Marsabit",
  "Baringo",
  "Elgeyo Marakwet",
  "Kiambu",
  "Kakamega",
  "Uasin Gishu",
  "Other",
];
var reportSchema = objectType({
  disaster_type: enumType([
    "flood",
    "earthquake",
    "drought",
    "landslide",
    "storm",
    "wildfire",
    "other",
  ]),
  location: stringType().trim().min(2, "Please enter a location").max(160),
  description: stringType()
    .trim()
    .min(10, "Please describe what happened (at least 10 characters)")
    .max(2e3),
});
function ReportPage() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const [disasterType, setDisasterType] = (0, import_react.useState)("");
  const [county, setCounty] = (0, import_react.useState)("");
  const [specificLocation, setSpecificLocation] = (0, import_react.useState)("");
  const [description, setDescription] = (0, import_react.useState)("");
  const [severity, setSeverity] = (0, import_react.useState)([3]);
  const [needs, setNeeds] = (0, import_react.useState)([]);
  (0, import_react.useEffect)(() => {
    const handleDemoAutofill = (e) => {
      const scenario = e.detail.scenario;
      if (scenario === "nyando") {
        setDisasterType("flood");
        setCounty("Kisumu");
        setSpecificLocation("Nyando Basin");
        setSeverity([4]);
        setNeeds(["Temporary housing", "Food & clean water", "Medical aid"]);
        const descText =
          "Heavy seasonal rains have caused the Nyando River to burst its banks. Over 200 homesteads are completely submerged, crops destroyed, and families have evacuated to Ahero Multipurpose Center. We need immediate tents, blankets, water treatment kits, and hot meals.";
        let currentText = "";
        let index = 0;
        const interval = setInterval(() => {
          if (index < 262) {
            currentText += descText.substring(0, index + 2);
            setDescription(currentText);
            index += 2;
          } else {
            setDescription(descText);
            clearInterval(interval);
          }
        }, 10);
      } else if (scenario === "turkana") {
        setDisasterType("drought");
        setCounty("Turkana");
        setSpecificLocation("Lodwar Outskirts");
        setSeverity([5]);
        setNeeds(["M-Pesa cash assistance", "Food & clean water", "Counseling & mental health"]);
        const descText =
          "Severe water scarcity and dry spells have completely depleted animal pastures. Over 80% of our cattle have died. Families are struggling to survive on one meal per day. We require immediate food supplies, water trucking, and direct M-Pesa cash grants.";
        let currentText = "";
        let index = 0;
        const interval = setInterval(() => {
          if (index < 251) {
            currentText += descText.substring(0, index + 2);
            setDescription(currentText);
            index += 2;
          } else {
            setDescription(descText);
            clearInterval(interval);
          }
        }, 10);
      }
    };
    window.addEventListener("demo:autofill", handleDemoAutofill);
    return () => window.removeEventListener("demo:autofill", handleDemoAutofill);
  }, []);
  const mutation = useMutation({
    mutationFn: async () => {
      const fullLoc = county
        ? `${county} County${specificLocation ? `, ${specificLocation}` : ""}`
        : specificLocation;
      const parsed = reportSchema.parse({
        disaster_type: disasterType,
        location: fullLoc,
        description,
      });
      const { error } = await supabase.from("disaster_reports").insert({
        user_id: user.id,
        disaster_type: parsed.disaster_type,
        location: parsed.location,
        description: parsed.description,
        severity: severity[0],
        needs,
      });
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["disaster_reports"] });
      toast.success("Report submitted. We're matching you with support.");
      setTimeout(() => {
        window.dispatchEvent(
          new CustomEvent("demo:sms", {
            detail: {
              title: "HopeBridge Support Team",
              body: `We have received your report for ${county} County. Emergency resources are coordinating. View matched aid programs on your dashboard.`,
            },
          }),
        );
      }, 1500);
      navigate({ to: "/dashboard" });
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });
  const toggleNeed = (need) =>
    setNeeds((prev) => (prev.includes(need) ? prev.filter((n) => n !== need) : [...prev, need]));
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!disasterType) {
      toast.error("Please select a disaster type.");
      return;
    }
    if (!county) {
      toast.error("Please select a county.");
      return;
    }
    mutation.mutate();
  };
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageShell, {
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
      className: "mx-auto max-w-2xl px-4 py-12",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
              className: "font-serif text-3xl font-semibold text-foreground",
              children: "Report disaster damage",
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
              className: "mt-2 text-muted-foreground",
              children:
                "Share what happened and what you need. The more detail you provide, the better we can match you with the right aid.",
            }),
          ],
        }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
          onSubmit: handleSubmit,
          className: "mt-8 space-y-6 rounded-3xl border border-border bg-card p-6 sm:p-8",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
                  htmlFor: "disaster_type",
                  children: "Type of disaster",
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
                  value: disasterType,
                  onValueChange: (v) => setDisasterType(v),
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
                      id: "disaster_type",
                      className: "mt-1.5",
                      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {
                        placeholder: "Select a disaster type",
                      }),
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, {
                      children: disasterTypes.map((d) =>
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                          SelectItem,
                          {
                            value: d.value,
                            children: d.label,
                          },
                          d.value,
                        ),
                      ),
                    }),
                  ],
                }),
              ],
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
              className: "grid grid-cols-1 gap-4 sm:grid-cols-2",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
                      htmlFor: "county",
                      children: "County",
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
                      value: county,
                      onValueChange: setCounty,
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
                          id: "county",
                          className: "mt-1.5",
                          children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {
                            placeholder: "Select County",
                          }),
                        }),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, {
                          children: kenyanCounties.map((c) =>
                            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                              SelectItem,
                              {
                                value: c,
                                children: [c, " County"],
                              },
                              c,
                            ),
                          ),
                        }),
                      ],
                    }),
                  ],
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
                      htmlFor: "specific_location",
                      children: "Sub-County / Village / Address",
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
                      id: "specific_location",
                      value: specificLocation,
                      onChange: (e) => setSpecificLocation(e.target.value),
                      placeholder: "e.g. Nyando, Budalangi, or street address",
                      className: "mt-1.5",
                      required: true,
                    }),
                  ],
                }),
              ],
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
                  htmlFor: "description",
                  children: "What happened?",
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
                  id: "description",
                  value: description,
                  onChange: (e) => setDescription(e.target.value),
                  placeholder: "Describe the damage and your most urgent needs...",
                  rows: 5,
                  maxLength: 2e3,
                  className: "mt-1.5 resize-none",
                  required: true,
                }),
              ],
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Label, {
                  htmlFor: "severity",
                  children: [
                    "Severity: ",
                    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
                      className: "text-accent",
                      children: [severity[0], " of 5"],
                    }),
                  ],
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Slider, {
                  id: "severity",
                  min: 1,
                  max: 5,
                  step: 1,
                  value: severity,
                  onValueChange: setSeverity,
                  className: "mt-3",
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                  className: "mt-1 flex justify-between text-xs text-muted-foreground",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Minor" }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Severe" }),
                  ],
                }),
              ],
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
                  children: "What support do you need?",
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                  className: "mt-2 flex flex-wrap gap-2",
                  children: needOptions.map((need) => {
                    const active = needs.includes(need);
                    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                      "button",
                      {
                        type: "button",
                        onClick: () => toggleNeed(need),
                        "aria-pressed": active,
                        className: `rounded-full border px-3 py-1.5 text-sm font-medium transition-colors ${active ? "border-primary bg-primary text-primary-foreground" : "border-border bg-background text-foreground hover:border-accent/40"}`,
                        children: need,
                      },
                      need,
                    );
                  }),
                }),
              ],
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
              type: "submit",
              className: "w-full rounded-full",
              size: "lg",
              disabled: mutation.isPending,
              children: [
                mutation.isPending &&
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, {
                    className: "animate-spin",
                  }),
                "Submit report",
              ],
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
              className:
                "flex items-center justify-center gap-1.5 text-center text-xs text-muted-foreground",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, {
                  className: "size-3.5",
                  "aria-hidden": "true",
                }),
                "Your information is private and only used to match you with support.",
              ],
            }),
          ],
        }),
      ],
    }),
  });
}
//#endregion
export { ReportPage as component };
