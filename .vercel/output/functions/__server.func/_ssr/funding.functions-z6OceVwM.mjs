import { l as createServerFn } from "./esm-Dova13aH.mjs";
import { a as unionType, i as stringType, n as numberType, r as objectType } from "../_libs/zod.mjs";
import { t as createServerRpc } from "./createServerRpc-WJgk8O8C.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/funding.functions-z6OceVwM.js
var DonateInput = objectType({
	phone: stringType().trim().min(9, "Phone number is too short"),
	amount: unionType([stringType(), numberType()]).transform((val) => Number(val)),
	paybill: stringType().optional(),
	account: stringType().optional()
});
var donateMpesa_createServerFn_handler = createServerRpc({
	id: "08c0f4a1c7011e203225a5b0245a2799f753c0109e9955231e482d967e4ae04e",
	name: "donateMpesa",
	filename: "src/lib/funding.functions.ts"
}, (opts) => donateMpesa.__executeServer(opts));
var donateMpesa = createServerFn({ method: "POST" }).validator((d) => DonateInput.parse(d)).handler(donateMpesa_createServerFn_handler, async ({ data }) => {
	await new Promise((resolve) => setTimeout(resolve, 1500));
	return {
		success: true,
		message: `Successfully initiated M-Pesa STK push for KES ${data.amount.toLocaleString()} to ${data.phone}. Thank you for donating to ${data.account || "HopeBridge"}!`,
		receipt: `RCPT${Math.floor(Math.random() * 1e6)}`
	};
});
//#endregion
export { donateMpesa_createServerFn_handler };
