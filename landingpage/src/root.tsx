import { component$ } from "@builder.io/qwik";
import {
  QwikCityProvider,
  RouterOutlet,
  ServiceWorkerRegister,
} from "@builder.io/qwik-city";
import { RouterHead } from "./components/router-head/router-head";

import "./global.scss";
import "./../public/fonts/ibm-plex/css/ibm-plex.css";
import { MatomoProvider } from "./providers/matomo";

export default component$(() => {
  /**
   * The root of a QwikCity site always start with the <QwikCityProvider> component,
   * immediately followed by the document's <head> and <body>.
   *
   * Don't remove the `<head>` and `<body>` elements.
   */

  return (
    <QwikCityProvider viewTransition={true}>
      <head>
        <meta charSet="utf-8" />
        <link rel="manifest" href="/manifest.json" />
        <RouterHead />
      </head>
      <body>
        <MatomoProvider>
          <RouterOutlet />
          <ServiceWorkerRegister />
        </MatomoProvider>
      </body>
    </QwikCityProvider>
  );
});
