import type { MarketingPerformance } from '@/types'

interface MarketingPerformanceDashboardProps {
  performance: MarketingPerformance[]
}

export default function MarketingPerformanceDashboard({ performance }: MarketingPerformanceDashboardProps) {
  if (!performance || performance.length === 0) {
    return null
  }

  const roiMetrics = performance.filter((p) => p.metadata?.metric_category?.key === 'roi')
  const channelMetrics = performance.filter((p) => p.metadata?.metric_category?.key === 'channel')
  const funnelMetrics = performance.filter((p) => p.metadata?.metric_category?.key === 'funnel')
  const commMetrics = performance.filter((p) => p.metadata?.metric_category?.key === 'communication')

  return (
    <section className="mb-8">
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-6">
          Marketing Performance Dashboard
        </h2>

        {/* ROI Metrics */}
        {roiMetrics.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {roiMetrics.map((metric) => (
              <div
                key={metric.id}
                className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-4"
              >
                <h3 className="text-sm font-medium text-gray-500 mb-1">
                  {metric.metadata?.metric_name}
                </h3>
                <p className="text-2xl font-bold text-gray-900">
                  {metric.metadata?.metric_value}
                </p>
                {metric.metadata?.subtext && (
                  <p className="text-xs text-gray-500 mt-1">{metric.metadata.subtext}</p>
                )}
              </div>
            ))}
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Channel Attribution */}
          {channelMetrics.length > 0 && (
            <div className="bg-gray-50 rounded-lg p-4">
              <h3 className="text-md font-semibold text-gray-900 mb-4">Channel Attribution</h3>
              <div className="space-y-3">
                {channelMetrics.map((metric) => (
                  <div key={metric.id} className="flex items-center justify-between">
                    <span className="text-sm text-gray-700">{metric.metadata?.metric_name}</span>
                    <div className="text-right">
                      <span className="text-sm font-semibold text-gray-900">
                        {metric.metadata?.metric_value}
                      </span>
                      {metric.metadata?.subtext && (
                        <span className="text-xs text-gray-500 ml-2">
                          ({metric.metadata.subtext})
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Funnel Performance */}
          {funnelMetrics.length > 0 && (
            <div className="bg-gray-50 rounded-lg p-4">
              <h3 className="text-md font-semibold text-gray-900 mb-4">Funnel Performance</h3>
              <div className="flex flex-wrap gap-4">
                {funnelMetrics.map((metric) => (
                  <div key={metric.id} className="flex-1 min-w-[100px]">
                    <p className="text-xs text-gray-500 uppercase">{metric.metadata?.metric_name}</p>
                    <p className="text-lg font-bold text-gray-900">{metric.metadata?.metric_value}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Communication Stats */}
        {commMetrics.length > 0 && (
          <div className="mt-6 bg-gray-50 rounded-lg p-4">
            <h3 className="text-md font-semibold text-gray-900 mb-4">Communication Stats</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {commMetrics.map((metric) => (
                <div key={metric.id}>
                  <p className="text-xs text-gray-500">{metric.metadata?.metric_name}</p>
                  <p className="text-lg font-bold text-gray-900">{metric.metadata?.metric_value}</p>
                  {metric.metadata?.subtext && (
                    <p className="text-xs text-green-600">{metric.metadata.subtext}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}