import MatomoTracker from '@jonkoops/matomo-tracker'
import type { InstanceParams } from './types'

export function createInstance(params: InstanceParams): MatomoTracker {
  return new MatomoTracker(params)
}

export default createInstance
