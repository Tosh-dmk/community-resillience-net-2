import { n as e } from "./chunk-Bh1tDfsg.js";
import { G as t, o as n } from "./useStore-75krDqnZ.js";
import { n as r, r as i } from "./button-DASjVavO.js";
import { n as a } from "./Logo-B79n9_zK.js";
var o = e(t(), 1),
  s = n(),
  c = `Label`,
  l = o.forwardRef((e, t) =>
    (0, s.jsx)(a.label, {
      ...e,
      ref: t,
      onMouseDown: (t) => {
        t.target.closest(`button, input, select, textarea`) ||
          (e.onMouseDown?.(t), !t.defaultPrevented && t.detail > 1 && t.preventDefault());
      },
    }),
  );
l.displayName = c;
var u = l,
  d = i(
    `text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70`,
  ),
  f = o.forwardRef(({ className: e, ...t }, n) =>
    (0, s.jsx)(u, { ref: n, className: r(d(), e), ...t }),
  );
f.displayName = u.displayName;
export { f as t };
