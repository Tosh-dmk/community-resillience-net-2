import { t as createClient } from "../_libs/supabase__supabase-js.mjs";
import { l as createServerFn } from "./esm-Dova13aH.mjs";
import { i as stringType, r as objectType } from "../_libs/zod.mjs";
import { t as createServerRpc } from "./createServerRpc-WJgk8O8C.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/assistant.functions-B1Fdi7Ta.js
var Input = objectType({
  situation: stringType().trim().min(1, "Please describe your situation").max(2e3),
});
var askAssistant_createServerFn_handler = createServerRpc(
  {
    id: "a25da347868e1aa3590e1280af68cec37d48865abed05dc6d83b2e090c30c963",
    name: "askAssistant",
    filename: "src/lib/assistant.functions.ts",
  },
  (opts) => askAssistant.__executeServer(opts),
);
var askAssistant = createServerFn({ method: "POST" })
  .validator((d) => Input.parse(d))
  .handler(askAssistant_createServerFn_handler, async ({ data }) => {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) throw new Error("The assistant is not configured yet.");
    const { data: orgs } = await createClient(
      process.env.SUPABASE_URL,
      process.env.SUPABASE_PUBLISHABLE_KEY,
      {
        auth: {
          storage: void 0,
          persistSession: false,
          autoRefreshToken: false,
        },
      },
    )
      .from("aid_organizations")
      .select("id,name,category,description,amount_label,region,tags,website");
    const activeOrgs =
      orgs && orgs.length > 0 && !orgs.some((o) => o.name.includes("FEMA"))
        ? orgs
        : [
            {
              id: "607aec41-f3d9-451b-b7d9-551112268eb4",
              name: "Kenya Red Cross Society (KRCS)",
              category: "non_profit",
              description:
                "Emergency rescue, first aid, temporary tents, water purification, and survival kit distribution across flood and landslide hit counties.",
              amount_label: "Emergency Aid",
              region: "National",
              tags: ["emergency", "shelter"],
              website: "https://www.redcross.or.ke",
            },
            {
              id: "d469be28-bbf0-4eff-bf9a-088984949e16",
              name: "NDMA Drought Cash Transfers",
              category: "government",
              description:
                "Cash disbursements via the Hunger Safety Net Programme (HSNP) to registered vulnerable families in Arid and Semi-Arid Land (ASAL) counties.",
              amount_label: "Up to KES 20,000",
              region: "National",
              tags: ["drought", "grants"],
              website: "https://www.ndma.go.ke",
            },
            {
              id: "4db6356c-bad5-4abc-87b2-4f1b8d7a9188",
              name: "Safaricom Foundation Disaster Grant",
              category: "donor",
              description:
                "Support for local community groups, reconstruction of schools and hospitals, and mobile money aid transfers.",
              amount_label: "Varies",
              region: "National",
              tags: ["grants", "rebuilding"],
              website: "https://www.safaricomfoundation.org",
            },
            {
              id: "ministry-devolution",
              name: "Ministry of Devolution and ASALs Relief",
              category: "government",
              description:
                "Government food distribution networks, iron sheets for roofing rebuilds, and direct relief supplies.",
              amount_label: "In-kind support",
              region: "National",
              tags: ["food", "materials"],
              website: "https://www.asals.go.ke",
            },
            {
              id: "equity-foundation",
              name: "Equity Group Foundation Recovery Loans",
              category: "non_profit",
              description:
                "Rehabilitation loans and agricultural inputs grants for smallholder farmers and businesses affected by climate shocks.",
              amount_label: "Up to KES 500,000",
              region: "Rift Valley",
              tags: ["loans", "grants"],
              website: "https://equitygroupfoundation.org",
            },
            {
              id: "budalangi-rebuild",
              name: "Budalangi Flood Rebuild Fund",
              category: "community",
              description:
                "Crowdfunded local building materials pool (timber, cement, roofing sheets) managed by community elders.",
              amount_label: "Available now",
              region: "Western Region",
              tags: ["materials", "rebuilding"],
              website: "https://www.redcross.or.ke",
            },
            {
              id: "actionaid-livelihood",
              name: "ActionAid Kenya Livelihood Grants",
              category: "non_profit",
              description:
                "Direct recovery cash transfers and rebuilding materials focusing on vulnerable women and child-headed households.",
              amount_label: "Up to KES 50,000",
              region: "Coastal Region",
              tags: ["grants", "housing"],
              website: "https://kenya.actionaid.org",
            },
            {
              id: "farmers-mutual",
              name: "Kenya Farmers Mutual Aid Chama",
              category: "community",
              description:
                "Grassroots mutual support coordinating seed distribution, tractor sharing, and soil recovery volunteers.",
              amount_label: "Volunteer-led",
              region: "Rift Valley",
              tags: ["community", "volunteers"],
              website: "https://kenaff.org",
            },
          ];
    const catalog = activeOrgs
      .map(
        (o) =>
          `- [${o.id}] ${o.name} (${o.category}, ${o.region}) — ${o.description} Tags: ${o.tags?.join(", ")}`,
      )
      .join("\n");
    const system = `You are the HopeBridge recovery assistant — warm, calm, and reassuring. You help people in Kenya affected by natural disasters (floods, droughts, landslides, storms, wildfires) find relevant aid.

Rules:
- Be compassionate and concise. Acknowledge their situation in one short sentence, then guide them.
- Recommend ONLY programs from the provided list that genuinely fit their needs. Pick 2 to 4.
- Never invent programs or program IDs. Use exact IDs from the list.
- Keep the message to 2 short paragraphs. Plain, supportive language. No legal or medical guarantees.
- Focus on Kenyan counties, resources, and terminology (e.g., M-Pesa, chamas, Harambee).
- Always respond with valid JSON only, matching: {"message": string, "recommendedIds": string[]}`;
    const modelsToTry = [
      "gemini-3.1-flash-lite",
      "gemini-3.1-flash-lite-preview",
      "gemini-2.5-flash",
    ];
    let res = null;
    let fallbackErrorText = "";
    for (const model of modelsToTry) {
      const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;
      const attemptRes = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [
            {
              role: "user",
              parts: [
                { text: `My situation: ${data.situation}\n\nAvailable programs:\n${catalog}` },
              ],
            },
          ],
          systemInstruction: { parts: [{ text: system }] },
          generationConfig: { responseMimeType: "application/json" },
        }),
      });
      if (
        attemptRes.ok ||
        attemptRes.status === 402 ||
        attemptRes.status === 403 ||
        attemptRes.status === 400
      ) {
        res = attemptRes;
        break;
      }
      fallbackErrorText = await attemptRes.text();
    }
    if (!res) {
      console.error("Gemini API exhausted all fallback models. Last error:", fallbackErrorText);
      throw new Error("The assistant is busy right now. Please try again in a moment.");
    }
    if (res.status === 429 || res.status === 503)
      throw new Error("The assistant is busy right now. Please try again in a moment.");
    if (res.status === 402)
      throw new Error("AI usage limit reached. Please add credits to keep using the assistant.");
    if (res.status === 403)
      throw new Error(
        "Your GEMINI_API_KEY has been disabled/blocked by Google as leaked. Please generate a new key at Google AI Studio and update the GEMINI_API_KEY in your local .env file.",
      );
    if (!res.ok) {
      const errText = await res.text();
      console.error("Gemini API Error:", errText);
      throw new Error("The assistant could not respond. Please try again.");
    }
    const content = (await res.json()).candidates?.[0]?.content?.parts?.[0]?.text ?? "{}";
    let parsed = {};
    try {
      parsed = JSON.parse(content);
    } catch {
      parsed = { message: content };
    }
    const ids = Array.isArray(parsed.recommendedIds) ? parsed.recommendedIds : [];
    const recommended = activeOrgs
      .filter((o) => ids.includes(o.id))
      .map((o) => ({
        id: o.id,
        name: o.name,
        category: o.category,
        description: o.description,
        amount_label: o.amount_label ?? null,
        region: o.region,
        website: o.website ?? null,
      }));
    return {
      message:
        parsed.message?.trim() ||
        "Here are some programs that may be able to help with your situation.",
      recommended,
    };
  });
//#endregion
export { askAssistant_createServerFn_handler };
