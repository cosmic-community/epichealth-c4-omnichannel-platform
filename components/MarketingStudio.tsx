import type { MarketingCampaign, CampaignTemplate } from '@/types'

interface MarketingStudioProps {
  campaigns: MarketingCampaign[]
  templates: CampaignTemplate[]
}

function getStatusColor(statusKey: string | undefined): string {
  switch (statusKey) {
    case 'active':
      return 'bg-green-100 text-green-700'
    case 'scheduled':
      return 'bg-blue-100 text-blue-700'
    case 'completed':
      return 'bg-gray-100 text-gray-700'
    case 'paused':
      return 'bg-yellow-100 text-yellow-700'
    default:
      return 'bg-gray-100 text-gray-700'
  }
}

export default function MarketingStudio({ campaigns, templates }: MarketingStudioProps) {
  return (
    <section className="mb-8">
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-lg font-semibold text-gray-900">Marketing AI Studio</h2>
            <p className="text-sm text-gray-500">
              Create campaigns with AI-powered content generation and multi-channel distribution
            </p>
          </div>
          <button className="inline-flex items-center px-4 py-2 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors">
            <span className="mr-2">✨</span>
            Launch Campaign Wizard
          </button>
        </div>

        {/* Active Campaigns */}
        {campaigns.length > 0 && (
          <div className="mb-8">
            <h3 className="text-md font-semibold text-gray-900 mb-4">Active Campaigns</h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                      Campaign
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                      Brand
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                      Channels
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                      Reach
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {campaigns.map((campaign) => {
                    const channels = campaign.metadata?.channels || []
                    return (
                      <tr key={campaign.id} className="hover:bg-gray-50">
                        <td className="px-4 py-3 text-sm font-medium text-gray-900">
                          {campaign.metadata?.campaign_name}
                        </td>
                        <td className="px-4 py-3 text-sm text-gray-600">
                          {campaign.metadata?.brand || '-'}
                        </td>
                        <td className="px-4 py-3">
                          <div className="flex flex-wrap gap-1">
                            {channels.map((channel: string, idx: number) => (
                              <span
                                key={idx}
                                className="px-2 py-0.5 bg-gray-100 text-xs text-gray-600 rounded"
                              >
                                {channel}
                              </span>
                            ))}
                          </div>
                        </td>
                        <td className="px-4 py-3 text-sm text-gray-900">
                          {campaign.metadata?.reach || '-'}
                        </td>
                        <td className="px-4 py-3">
                          <span
                            className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(
                              campaign.metadata?.campaign_status?.key
                            )}`}
                          >
                            {campaign.metadata?.campaign_status?.value || 'Unknown'}
                          </span>
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Campaign Templates */}
        {templates.length > 0 && (
          <div>
            <h3 className="text-md font-semibold text-gray-900 mb-4">Campaign Templates</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {templates.map((template) => (
                <div
                  key={template.id}
                  className="border border-gray-200 rounded-lg p-4 hover:border-primary-300 hover:shadow-sm transition-all cursor-pointer"
                >
                  <div className="flex items-center mb-2">
                    <span className="text-xl mr-2">{template.metadata?.template_icon || '📝'}</span>
                    <h4 className="font-medium text-gray-900">
                      {template.metadata?.template_name}
                    </h4>
                  </div>
                  <p className="text-sm text-gray-500 mb-3">
                    {template.metadata?.template_description}
                  </p>
                  <button className="text-sm text-primary-600 font-medium hover:text-primary-700">
                    Use Template →
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}