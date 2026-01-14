import type { MonthlyPatientData } from '@/types'

interface PatientVolumeChartProps {
  data: MonthlyPatientData[]
}

export default function PatientVolumeChart({ data }: PatientVolumeChartProps) {
  if (!data || data.length === 0) {
    return null
  }

  const maxCount = Math.max(...data.map((d) => d.metadata?.patient_count || 0))

  return (
    <section className="mb-8">
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">
          Patient Volume by Month
        </h2>
        <div className="space-y-3">
          {data.map((month) => {
            const count = month.metadata?.patient_count || 0
            const percentage = maxCount > 0 ? (count / maxCount) * 100 : 0

            return (
              <div key={month.id} className="flex items-center">
                <span className="w-12 text-sm font-medium text-gray-600">
                  {month.metadata?.month_name}
                </span>
                <div className="flex-1 mx-4">
                  <div className="h-8 bg-gray-100 rounded-lg overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-primary-400 to-primary-600 rounded-lg transition-all duration-500"
                      style={{ width: `${percentage}%` }}
                    />
                  </div>
                </div>
                <span className="w-20 text-sm font-semibold text-gray-900 text-right">
                  {count.toLocaleString()}
                </span>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}