import { createContextId } from "@builder.io/qwik";
import type { MatomoInstanceState } from "./types";

const MatomoContext = createContextId<MatomoInstanceState>("matomo_qwik");

export default MatomoContext;
