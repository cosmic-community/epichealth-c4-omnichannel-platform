import type { DashboardMetric } from '@/types'

interface MetricCardsProps {
  metrics: DashboardMetric[]
}

export default function MetricCards({ metrics }: MetricCardsProps) {
  if (!metrics || metrics.length === 0) {
    return null
  }

  return (
    <section className="mb-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {metrics.map((metric) => {
          const trendDirection = metric.metadata?.trend_direction?.key
          const isPositive = trendDirection === 'up'
          const isNegative = trendDirection === 'down'

          return (
            <div
              key={metric.id}
              className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-2xl">{metric.metadata?.icon || '📊'}</span>
                {trendDirection && trendDirection !== 'neutral' && (
                  <span
                    className={`text-xs font-medium px-2 py-1 rounded-full ${
                      isPositive
                        ? 'bg-green-100 text-green-700'
                        : isNegative
                        ? 'bg-red-100 text-red-700'
                        : 'bg-gray-100 text-gray-700'
                    }`}
                  >
                    {isPositive ? '↑' : '↓'}
                  </span>
                )}
              </div>
              <h3 className="text-sm font-medium text-gray-500 mb-1">
                {metric.metadata?.metric_label}
              </h3>
              <p className="text-2xl font-bold text-gray-900">
                {metric.metadata?.metric_value}
              </p>
              {metric.metadata?.subtext && (
                <p className="text-xs text-gray-500 mt-1">{metric.metadata.subtext}</p>
              )}
            </div>
          )
        })}
      </div>
    </section>
  )
}