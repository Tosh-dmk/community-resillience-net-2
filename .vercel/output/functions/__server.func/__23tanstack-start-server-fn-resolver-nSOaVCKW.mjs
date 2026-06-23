//#region node_modules/.nitro/vite/services/ssr/assets/__23tanstack-start-server-fn-resolver-nSOaVCKW.js
var manifest = {
  "08c0f4a1c7011e203225a5b0245a2799f753c0109e9955231e482d967e4ae04e": {
    functionName: "donateMpesa_createServerFn_handler",
    importer: () => import("./_ssr/funding.functions-z6OceVwM.mjs"),
  },
  a25da347868e1aa3590e1280af68cec37d48865abed05dc6d83b2e090c30c963: {
    functionName: "askAssistant_createServerFn_handler",
    importer: () => import("./_ssr/assistant.functions-B1Fdi7Ta.mjs"),
  },
};
async function getServerFnById(id, access) {
  const serverFnInfo = manifest[id];
  if (!serverFnInfo) throw new Error("Server function info not found for " + id);
  const fnModule = serverFnInfo.module ?? (await serverFnInfo.importer());
  if (!fnModule) throw new Error("Server function module not resolved for " + id);
  const action = fnModule[serverFnInfo.functionName];
  if (!action) throw new Error("Server function module export not resolved for serverFn ID: " + id);
  return action;
}
//#endregion
export { getServerFnById as t };
