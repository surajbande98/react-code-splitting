import { lazy } from "react";
import { wait } from "./App";

export function lazyLoad(path, namedExport) {
    return lazy(() => wait(500).then(() => import(`${path}`)));
}