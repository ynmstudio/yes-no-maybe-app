import { useOnDocument, $, useContext } from "@builder.io/qwik";
import MatomoContext from "../MatomoContext";

function useOutboundClickListener() {
    const { instance } = useContext(MatomoContext);

    const handleOutboundClick = $((event: Event) => {
        // The target is not guaranteed to be a link, it could be a child element.
        // Look up the element's parent until the anchor element is found.
        const findLinkElement = (
            el: EventTarget | null
        ): HTMLElement | null => {
            if (el instanceof HTMLAnchorElement && el.href) {
                return el;
            }
            if (el instanceof HTMLElement && el.parentElement) {
                return findLinkElement(el.parentElement);
            }
            return null;
        };

        const target = findLinkElement(event.target);

        if (!(target instanceof HTMLAnchorElement)) {
            return;
        }

        const { href } = target;

        // Check if the click target differs from the current hostname, meaning it's external
        if (
            /* @ts-ignore */
            !href.match(
                new RegExp(
                    `^(http://www.|https://www.|http://|https://)+(${window.location.hostname})`
                )
            )
        ) {
            instance?.trackLink({ href });
        }
    });

    useOnDocument(
        "click",
        $((event) => handleOutboundClick(event))
    );
}

export default useOutboundClickListener;
