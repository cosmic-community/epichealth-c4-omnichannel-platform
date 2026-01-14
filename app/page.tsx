import Header from '@/components/Header'
import MetricCards from '@/components/MetricCards'
import PatientVolumeChart from '@/components/PatientVolumeChart'
import QuickActionsBar from '@/components/QuickActionsBar'
import RecentActivityTable from '@/components/RecentActivityTable'
import RFMSegmentation from '@/components/RFMSegmentation'
import AIAssistant from '@/components/AIAssistant'
import MarketingStudio from '@/components/MarketingStudio'
import MarketingPerformanceDashboard from '@/components/MarketingPerformanceDashboard'
import PatientJourneyMap from '@/components/PatientJourneyMap'
import {
  getDashboardSettings,
  getDashboardMetrics,
  getMonthlyPatientData,
  getQuickActions,
  getRecentActivities,
  getPatientSegments,
  getAIAssistantConfig,
  getMarketingCampaigns,
  getCampaignTemplates,
  getJourneyStages,
  getMarketingPerformance,
} from '@/lib/cosmic'

export const revalidate = 60

export default async function HomePage() {
  const [
    settings,
    metrics,
    monthlyData,
    quickActions,
    activities,
    segments,
    aiConfig,
    campaigns,
    templates,
    journeyStages,
    performance,
  ] = await Promise.all([
    getDashboardSettings(),
    getDashboardMetrics(),
    getMonthlyPatientData(),
    getQuickActions(),
    getRecentActivities(),
    getPatientSegments(),
    getAIAssistantConfig(),
    getMarketingCampaigns(),
    getCampaignTemplates(),
    getJourneyStages(),
    getMarketingPerformance(),
  ])

  return (
    <div className="min-h-screen bg-gray-50">
      <Header settings={settings} />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Dashboard Summary Cards */}
        <MetricCards metrics={metrics} />
        
        {/* Patient Volume Chart */}
        <PatientVolumeChart data={monthlyData} />
        
        {/* Quick Actions */}
        <QuickActionsBar actions={quickActions} />
        
        {/* Recent Activity */}
        <RecentActivityTable activities={activities} />
        
        {/* RFM Segmentation & Patient Events */}
        <RFMSegmentation segments={segments} />
        
        {/* AI Assistant */}
        <AIAssistant config={aiConfig} />
        
        {/* Marketing AI Studio */}
        <MarketingStudio campaigns={campaigns} templates={templates} />
        
        {/* Marketing Performance Dashboard */}
        <MarketingPerformanceDashboard performance={performance} />
        
        {/* Patient Journey Map */}
        <PatientJourneyMap stages={journeyStages} />
      </main>
    </div>
  )
}