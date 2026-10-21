// preact/compat already provides useSyncExternalStore; the npm shim is CJS and
// would pull in a second copy of preact.
export { useSyncExternalStore } from "react";
