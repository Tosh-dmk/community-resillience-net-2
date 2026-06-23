import { r as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/InteractiveMap-BmhZ9Pjv.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var MOCK_HAZARDS = [
	{
		id: "h1",
		name: "Active Flooding - Nyando River Basin",
		lat: -.174,
		lng: 34.92,
		description: "River Nyando burst its banks. Flooding in low-lying villages."
	},
	{
		id: "h2",
		name: "Flash Flooding - Nairobi Mathare",
		lat: -1.2655,
		lng: 36.8574,
		description: "Severe urban floods. Heavy drainage overflow reported."
	},
	{
		id: "h3",
		name: "Landslide Risk - West Pokot",
		lat: 1.239,
		lng: 35.122,
		description: "Mudslides reported along Kapenguria-Lodwar Highway."
	}
];
function InteractiveMap({ centers, selectedId, onSelectId, className = "", showHazards = false }) {
	const mapRef = (0, import_react.useRef)(null);
	const leafletMapRef = (0, import_react.useRef)(null);
	const markersRef = (0, import_react.useRef)({});
	const hazardMarkersRef = (0, import_react.useRef)([]);
	(0, import_react.useEffect)(() => {
		if (typeof window === "undefined" || !mapRef.current) return;
		let mapInstance;
		let L;
		const initMap = async () => {
			try {
				L = await import("../_libs/leaflet.mjs").then((n) => /* @__PURE__ */ __toESM(n.t()));
				if (leafletMapRef.current) return;
				mapInstance = L.map(mapRef.current, {
					zoomControl: true,
					scrollWheelZoom: false
				}).setView([-1.2921, 36.8219], 6);
				L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", { attribution: "&copy; <a href=\"https://www.openstreetmap.org/copyright\">OpenStreetMap</a> contributors" }).addTo(mapInstance);
				leafletMapRef.current = mapInstance;
				updateMarkers(L, mapInstance);
			} catch (err) {
				console.error("Error loading Leaflet map:", err);
			}
		};
		const updateMarkers = (leafletLib, mapInst) => {
			Object.values(markersRef.current).forEach((m) => m.remove());
			markersRef.current = {};
			hazardMarkersRef.current.forEach((m) => m.remove());
			hazardMarkersRef.current = [];
			if (showHazards) MOCK_HAZARDS.forEach((h) => {
				const icon = leafletLib.divIcon({
					className: "custom-hazard-icon",
					html: `
              <style>
                @keyframes hazard-pulse-${h.id} {
                  0% { transform: scale(0.25); opacity: 0.85; }
                  100% { transform: scale(2.2); opacity: 0; }
                }
              </style>
              <div style="position: relative; display: flex; align-items: center; justify-content: center; width: 40px; height: 40px;">
                <div style="position: absolute; width: 40px; height: 40px; background: rgba(239, 68, 68, 0.4); border-radius: 50%; animation: hazard-pulse-${h.id} 1.8s infinite ease-out;"></div>
                <div style="position: absolute; width: 14px; height: 14px; background: rgb(239, 68, 68); border-radius: 50%; border: 2px solid white; box-shadow: 0 0 8px rgba(0,0,0,0.4);"></div>
              </div>
            `,
					iconSize: [40, 40],
					iconAnchor: [20, 20]
				});
				const marker = leafletLib.marker([h.lat, h.lng], { icon }).addTo(mapInst).bindPopup(`<strong>${h.name}</strong><br/>${h.description}`);
				hazardMarkersRef.current.push(marker);
			});
			const bounds = [];
			centers.forEach((c) => {
				if (c.lat === null || c.lng === null || c.lat === void 0 || c.lng === void 0) return;
				const isSelected = c.id === selectedId;
				const color = isSelected ? "#ef4444" : "#45785f";
				const size = isSelected ? 34 : 26;
				const icon = leafletLib.divIcon({
					className: "custom-div-icon",
					html: `<div style="
            display: flex;
            align-items: center;
            justify-content: center;
            width: ${size}px;
            height: ${size}px;
            background: ${color}22;
            border-radius: 50%;
            border: 2px solid ${color};
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
            transition: all 0.2s ease;
          ">
            <div style="
              width: ${isSelected ? 14 : 10}px;
              height: ${isSelected ? 14 : 10}px;
              background: ${color};
              border-radius: 50%;
            "></div>
          </div>`,
					iconSize: [size, size],
					iconAnchor: [size / 2, size / 2]
				});
				const marker = leafletLib.marker([c.lat, c.lng], { icon }).addTo(mapInst).on("click", () => {
					if (onSelectId) onSelectId(c.id);
				});
				markersRef.current[c.id] = marker;
				bounds.push([c.lat, c.lng]);
			});
			if (bounds.length > 0 && !selectedId) mapInst.fitBounds(bounds, {
				padding: [50, 50],
				maxZoom: 14
			});
			else if (selectedId) {
				const selCenter = centers.find((c) => c.id === selectedId);
				if (selCenter && selCenter.lat !== null && selCenter.lng !== null) mapInst.setView([selCenter.lat, selCenter.lng], 13, { animate: true });
			}
		};
		initMap();
		return () => {
			if (leafletMapRef.current) {
				leafletMapRef.current.remove();
				leafletMapRef.current = null;
			}
		};
	}, [centers, showHazards]);
	(0, import_react.useEffect)(() => {
		if (!leafletMapRef.current || centers.length === 0) return;
		if (selectedId) {
			const selCenter = centers.find((c) => c.id === selectedId);
			if (selCenter && selCenter.lat !== null && selCenter.lng !== null) leafletMapRef.current.setView([selCenter.lat, selCenter.lng], 13, { animate: true });
		}
		centers.forEach((c) => {
			const marker = markersRef.current[c.id];
			if (!marker) return;
			const isSelected = c.id === selectedId;
			const color = isSelected ? "#ef4444" : "#45785f";
			const size = isSelected ? 34 : 26;
			if (marker._icon) {
				const el = marker._icon.querySelector("div");
				if (el) {
					el.style.width = `${size}px`;
					el.style.height = `${size}px`;
					el.style.borderColor = color;
					el.style.background = `${color}22`;
					const dot = el.querySelector("div");
					if (dot) {
						dot.style.width = `${isSelected ? 14 : 10}px`;
						dot.style.height = `${isSelected ? 14 : 10}px`;
						dot.style.background = color;
					}
				}
			}
		});
	}, [selectedId, centers]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref: mapRef,
		className,
		style: { minHeight: "350px" }
	});
}
//#endregion
export { InteractiveMap as t };
