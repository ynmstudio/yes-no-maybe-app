import { $, useContext } from '@builder.io/qwik'
import MatomoContext from './MatomoContext'
import type {
  TrackEventParams,
  TrackLinkParams,
  TrackPageViewParams,
  TrackSiteSearchParams,
} from './types'
import useOutboundClickListener from './utils/useOutboundClickListener'

function useMatomo() {
  const { instance } = useContext(MatomoContext)

  const trackPageView = $(
    (params?: TrackPageViewParams) => instance?.trackPageView(params)
  )

  const trackEvent = $(
    (params: TrackEventParams) => instance?.trackEvent(params)
  )

  const trackEvents = $(() => instance?.trackEvents(),)

  const trackSiteSearch = $(
    (params: TrackSiteSearchParams) => instance?.trackSiteSearch(params)
  )

  const trackLink = $(
    (params: TrackLinkParams) => instance?.trackLink(params)
  )

  const enableLinkTracking = useOutboundClickListener()

  const pushInstruction = $(
    (name: string, ...args: any[]) => {
      /* @ts-ignore */
      instance?.pushInstruction(name, ...args)
    }
  )

  return {
    trackEvent,
    trackEvents,
    trackPageView,
    trackSiteSearch,
    trackLink,
    enableLinkTracking,
    pushInstruction,
  }
}

export default useMatomo
