export interface CosmicObject {
  id: string;
  slug: string;
  title: string;
  content?: string;
  metadata: Record<string, unknown>;
  type: string;
  created_at: string;
  modified_at: string;
}

export interface DashboardSettings extends CosmicObject {
  type: 'dashboard-settings';
  metadata: {
    platform_name: string;
    platform_subtitle?: string;
    platform_emoji?: string;
    navigation_items?: string[];
    admin_name?: string;
    admin_role?: string;
    admin_initials?: string;
  };
}

export interface DashboardMetric extends CosmicObject {
  type: 'dashboard-metrics';
  metadata: {
    metric_label: string;
    metric_value: string;
    subtext?: string;
    trend_direction?: {
      key: string;
      value: string;
    };
    icon?: string;
    display_order?: number;
  };
}

export interface MonthlyPatientData extends CosmicObject {
  type: 'monthly-patient-data';
  metadata: {
    month_name: string;
    patient_count: number;
    year?: number;
    display_order?: number;
  };
}

export interface QuickAction extends CosmicObject {
  type: 'quick-actions';
  metadata: {
    action_label: string;
    action_icon?: string;
    action_url?: string;
    display_order?: number;
  };
}

export interface RecentActivity extends CosmicObject {
  type: 'recent-activities';
  metadata: {
    timestamp: string;
    activity_description: string;
    user?: string;
    status?: {
      key: string;
      value: string;
    };
  };
}

export interface PatientSegment extends CosmicObject {
  type: 'patient-segments';
  metadata: {
    segment_name: string;
    patient_count: number;
    description?: string;
    priority?: {
      key: string;
      value: string;
    };
    segment_type?: {
      key: string;
      value: string;
    };
    display_order?: number;
  };
}

export interface AIAssistantConfig extends CosmicObject {
  type: 'ai-assistant-config';
  metadata: {
    assistant_title: string;
    description?: string;
    capabilities?: string[];
    placeholder_text?: string;
    suggested_actions?: Array<{
      icon: string;
      label: string;
    }>;
  };
}

export interface MarketingCampaign extends CosmicObject {
  type: 'marketing-campaigns';
  metadata: {
    campaign_name: string;
    brand?: string;
    channels?: string[];
    reach?: string;
    campaign_status?: {
      key: string;
      value: string;
    };
    sent_count?: number;
    open_rate?: string;
    click_rate?: string;
    conversions?: number;
  };
}

export interface CampaignTemplate extends CosmicObject {
  type: 'campaign-templates';
  metadata: {
    template_name: string;
    template_description?: string;
    template_icon?: string;
    display_order?: number;
  };
}

export interface JourneyStage extends CosmicObject {
  type: 'journey-stages';
  metadata: {
    stage_name: string;
    stage_icon?: string;
    stage_metrics?: {
      total: string;
      label: string;
      rate?: string;
      submetrics?: Array<{
        label: string;
        value: string;
      }>;
    };
    stage_steps?: Array<{
      number: number;
      title: string;
      description: string;
    }>;
    stage_order: number;
  };
}

export interface MarketingPerformance extends CosmicObject {
  type: 'marketing-performance';
  metadata: {
    metric_name: string;
    metric_value: string;
    subtext?: string;
    metric_category?: {
      key: string;
      value: string;
    };
    display_order?: number;
  };
}