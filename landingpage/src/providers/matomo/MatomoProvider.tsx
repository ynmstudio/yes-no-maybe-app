import {
  component$,
  noSerialize,
  Slot,
  useContextProvider,
  useStore,
  useVisibleTask$,
} from "@builder.io/qwik";
import MatomoContext from "./MatomoContext";
import type { MatomoInstanceState } from "./types";
import MatomoTracker from "@jonkoops/matomo-tracker";

export const MatomoProvider = component$(() => {
  const matomoState = useStore<MatomoInstanceState>({
    instance: noSerialize(undefined),
  });

  // eslint-disable-next-line qwik/no-use-visible-task
  useVisibleTask$(() => {
    const _instance = noSerialize(
      new MatomoTracker({
        urlBase: "https://www.yesnomaybe.app",
        siteId: 11,
        trackerUrl: "https://analytics.ynm.studio/matomo.php", // optional, default value: `${urlBase}matomo.php`
        srcUrl: "https://analytics.ynm.studio/matomo.js", // optional, default value: `${urlBase}matomo.js`
        disabled: false, // optional, false by default. Makes all tracking calls no-ops if set to true.
        heartBeat: {
          // optional, enabled by default
          active: true, // optional, default value: true
          seconds: 10, // optional, default value: `15
        },
        linkTracking: true, // optional, default value: true
        configurations: {
          // optional, default value: {}
          // any valid matomo configuration, all below are optional
          disableCookies: true,
          setSecureCookie: true,
          setRequestMethod: "POST",
          setDoNotTrack: true,
        },
      }),
    );
    matomoState.instance = _instance;
  });
  useContextProvider(MatomoContext, matomoState);
  return <Slot />;
});

export default MatomoProvider;
