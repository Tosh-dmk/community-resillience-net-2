const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f || (m.f = ["assets/leaflet-src-DaYBKH_z.js", "assets/chunk-Bh1tDfsg.js"]),
) => i.map((i) => d[i]);
import { n as e } from "./chunk-Bh1tDfsg.js";
import { G as t, o as n } from "./useStore-75krDqnZ.js";
import { c as r, o as i } from "./Logo-B79n9_zK.js";
var a = i(`navigation`, [[`polygon`, { points: `3 11 22 2 13 21 11 13 3 11`, key: `1ltx0t` }]]),
  o = e(t(), 1),
  s = n(),
  c = [
    {
      id: `h1`,
      name: `Active Flooding - Nyando River Basin`,
      lat: -0.174,
      lng: 34.92,
      description: `River Nyando burst its banks. Flooding in low-lying villages.`,
    },
    {
      id: `h2`,
      name: `Flash Flooding - Nairobi Mathare`,
      lat: -1.2655,
      lng: 36.8574,
      description: `Severe urban floods. Heavy drainage overflow reported.`,
    },
    {
      id: `h3`,
      name: `Landslide Risk - West Pokot`,
      lat: 1.239,
      lng: 35.122,
      description: `Mudslides reported along Kapenguria-Lodwar Highway.`,
    },
  ];
function l({ centers: t, selectedId: n, onSelectId: i, className: a = ``, showHazards: l = !1 }) {
  let u = (0, o.useRef)(null),
    d = (0, o.useRef)(null),
    f = (0, o.useRef)({}),
    p = (0, o.useRef)([]);
  return (
    (0, o.useEffect)(() => {
      if (typeof window > `u` || !u.current) return;
      let a,
        o,
        s = async () => {
          try {
            if (
              ((o = await r(
                () => import(`./leaflet-src-DaYBKH_z.js`).then((t) => e(t.default, 1)),
                __vite__mapDeps([0, 1]),
              )),
              d.current)
            )
              return;
            ((a = o
              .map(u.current, { zoomControl: !0, scrollWheelZoom: !1 })
              .setView([-1.2921, 36.8219], 6)),
              o
                .tileLayer(`https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png`, {
                  attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors`,
                })
                .addTo(a),
              (d.current = a),
              m(o, a));
          } catch (e) {
            console.error(`Error loading Leaflet map:`, e);
          }
        },
        m = (e, r) => {
          (Object.values(f.current).forEach((e) => e.remove()),
            (f.current = {}),
            p.current.forEach((e) => e.remove()),
            (p.current = []),
            l &&
              c.forEach((t) => {
                let n = e.divIcon({
                    className: `custom-hazard-icon`,
                    html: `
              <style>
                @keyframes hazard-pulse-${t.id} {
                  0% { transform: scale(0.25); opacity: 0.85; }
                  100% { transform: scale(2.2); opacity: 0; }
                }
              </style>
              <div style="position: relative; display: flex; align-items: center; justify-content: center; width: 40px; height: 40px;">
                <div style="position: absolute; width: 40px; height: 40px; background: rgba(239, 68, 68, 0.4); border-radius: 50%; animation: hazard-pulse-${t.id} 1.8s infinite ease-out;"></div>
                <div style="position: absolute; width: 14px; height: 14px; background: rgb(239, 68, 68); border-radius: 50%; border: 2px solid white; box-shadow: 0 0 8px rgba(0,0,0,0.4);"></div>
              </div>
            `,
                    iconSize: [40, 40],
                    iconAnchor: [20, 20],
                  }),
                  i = e
                    .marker([t.lat, t.lng], { icon: n })
                    .addTo(r)
                    .bindPopup(`<strong>${t.name}</strong><br/>${t.description}`);
                p.current.push(i);
              }));
          let a = [];
          if (
            (t.forEach((t) => {
              if (t.lat === null || t.lng === null || t.lat === void 0 || t.lng === void 0) return;
              let o = t.id === n,
                s = o ? `#ef4444` : `#45785f`,
                c = o ? 34 : 26,
                l = e.divIcon({
                  className: `custom-div-icon`,
                  html: `<div style="
            display: flex;
            align-items: center;
            justify-content: center;
            width: ${c}px;
            height: ${c}px;
            background: ${s}22;
            border-radius: 50%;
            border: 2px solid ${s};
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
            transition: all 0.2s ease;
          ">
            <div style="
              width: ${o ? 14 : 10}px;
              height: ${o ? 14 : 10}px;
              background: ${s};
              border-radius: 50%;
            "></div>
          </div>`,
                  iconSize: [c, c],
                  iconAnchor: [c / 2, c / 2],
                }),
                u = e
                  .marker([t.lat, t.lng], { icon: l })
                  .addTo(r)
                  .on(`click`, () => {
                    i && i(t.id);
                  });
              ((f.current[t.id] = u), a.push([t.lat, t.lng]));
            }),
            a.length > 0 && !n)
          )
            r.fitBounds(a, { padding: [50, 50], maxZoom: 14 });
          else if (n) {
            let e = t.find((e) => e.id === n);
            e && e.lat !== null && e.lng !== null && r.setView([e.lat, e.lng], 13, { animate: !0 });
          }
        };
      return (
        s(),
        () => {
          d.current &&= (d.current.remove(), null);
        }
      );
    }, [t, l]),
    (0, o.useEffect)(() => {
      if (!(!d.current || t.length === 0)) {
        if (n) {
          let e = t.find((e) => e.id === n);
          e &&
            e.lat !== null &&
            e.lng !== null &&
            d.current.setView([e.lat, e.lng], 13, { animate: !0 });
        }
        t.forEach((e) => {
          let t = f.current[e.id];
          if (!t) return;
          let r = e.id === n,
            i = r ? `#ef4444` : `#45785f`,
            a = r ? 34 : 26;
          if (t._icon) {
            let e = t._icon.querySelector(`div`);
            if (e) {
              ((e.style.width = `${a}px`),
                (e.style.height = `${a}px`),
                (e.style.borderColor = i),
                (e.style.background = `${i}22`));
              let t = e.querySelector(`div`);
              t &&
                ((t.style.width = `${r ? 14 : 10}px`),
                (t.style.height = `${r ? 14 : 10}px`),
                (t.style.background = i));
            }
          }
        });
      }
    }, [n, t]),
    (0, s.jsx)(`div`, { ref: u, className: a, style: { minHeight: `350px` } })
  );
}
export { a as n, l as t };
