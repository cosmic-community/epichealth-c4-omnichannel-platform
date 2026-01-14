import { createBucketClient } from '@cosmicjs/sdk'
import type {
  DashboardSettings,
  DashboardMetric,
  MonthlyPatientData,
  QuickAction,
  RecentActivity,
  PatientSegment,
  AIAssistantConfig,
  MarketingCampaign,
  CampaignTemplate,
  JourneyStage,
  MarketingPerformance,
} from '@/types'

export const cosmic = createBucketClient({
  bucketSlug: process.env.COSMIC_BUCKET_SLUG as string,
  readKey: process.env.COSMIC_READ_KEY as string,
  writeKey: process.env.COSMIC_WRITE_KEY as string,
})

function hasStatus(error: unknown): error is { status: number } {
  return typeof error === 'object' && error !== null && 'status' in error
}

export async function getDashboardSettings(): Promise<DashboardSettings | null> {
  try {
    const response = await cosmic.objects
      .findOne({ type: 'dashboard-settings' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
    return response.object as DashboardSettings
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return null
    }
    throw new Error('Failed to fetch dashboard settings')
  }
}

export async function getDashboardMetrics(): Promise<DashboardMetric[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'dashboard-metrics' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
    const metrics = response.objects as DashboardMetric[]
    return metrics.sort((a, b) => (a.metadata?.display_order || 0) - (b.metadata?.display_order || 0))
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return []
    }
    throw new Error('Failed to fetch dashboard metrics')
  }
}

export async function getMonthlyPatientData(): Promise<MonthlyPatientData[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'monthly-patient-data' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
    const data = response.objects as MonthlyPatientData[]
    return data.sort((a, b) => (a.metadata?.display_order || 0) - (b.metadata?.display_order || 0))
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return []
    }
    throw new Error('Failed to fetch monthly patient data')
  }
}

export async function getQuickActions(): Promise<QuickAction[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'quick-actions' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
    const actions = response.objects as QuickAction[]
    return actions.sort((a, b) => (a.metadata?.display_order || 0) - (b.metadata?.display_order || 0))
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return []
    }
    throw new Error('Failed to fetch quick actions')
  }
}

export async function getRecentActivities(): Promise<RecentActivity[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'recent-activities' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
    return response.objects as RecentActivity[]
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return []
    }
    throw new Error('Failed to fetch recent activities')
  }
}

export async function getPatientSegments(): Promise<PatientSegment[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'patient-segments' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
    const segments = response.objects as PatientSegment[]
    return segments.sort((a, b) => (a.metadata?.display_order || 0) - (b.metadata?.display_order || 0))
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return []
    }
    throw new Error('Failed to fetch patient segments')
  }
}

export async function getAIAssistantConfig(): Promise<AIAssistantConfig | null> {
  try {
    const response = await cosmic.objects
      .findOne({ type: 'ai-assistant-config' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
    return response.object as AIAssistantConfig
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return null
    }
    throw new Error('Failed to fetch AI assistant config')
  }
}

export async function getMarketingCampaigns(): Promise<MarketingCampaign[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'marketing-campaigns' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
    return response.objects as MarketingCampaign[]
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return []
    }
    throw new Error('Failed to fetch marketing campaigns')
  }
}

export async function getCampaignTemplates(): Promise<CampaignTemplate[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'campaign-templates' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
    const templates = response.objects as CampaignTemplate[]
    return templates.sort((a, b) => (a.metadata?.display_order || 0) - (b.metadata?.display_order || 0))
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return []
    }
    throw new Error('Failed to fetch campaign templates')
  }
}

export async function getJourneyStages(): Promise<JourneyStage[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'journey-stages' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
    const stages = response.objects as JourneyStage[]
    return stages.sort((a, b) => (a.metadata?.stage_order || 0) - (b.metadata?.stage_order || 0))
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return []
    }
    throw new Error('Failed to fetch journey stages')
  }
}

export async function getMarketingPerformance(): Promise<MarketingPerformance[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'marketing-performance' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
    const metrics = response.objects as MarketingPerformance[]
    return metrics.sort((a, b) => (a.metadata?.display_order || 0) - (b.metadata?.display_order || 0))
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return []
    }
    throw new Error('Failed to fetch marketing performance')
  }
}