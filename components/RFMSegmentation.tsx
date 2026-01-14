import type { PatientSegment } from '@/types'

interface RFMSegmentationProps {
  segments: PatientSegment[]
}

function getPriorityColor(priorityKey: string | undefined): string {
  switch (priorityKey) {
    case 'high':
      return 'bg-red-100 text-red-700 border-red-200'
    case 'medium':
      return 'bg-yellow-100 text-yellow-700 border-yellow-200'
    case 'low':
      return 'bg-green-100 text-green-700 border-green-200'
    default:
      return 'bg-gray-100 text-gray-700 border-gray-200'
  }
}

export default function RFMSegmentation({ segments }: RFMSegmentationProps) {
  if (!segments || segments.length === 0) {
    return null
  }

  const rfmSegments = segments.filter((s) => s.metadata?.segment_type?.key === 'rfm')
  const eventSegments = segments.filter((s) => s.metadata?.segment_type?.key === 'event')

  return (
    <section className="mb-8">
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-2">
          RFM Segmentation Overview
        </h2>
        <p className="text-sm text-gray-500 mb-6">
          Select Cohort for Outreach
        </p>

        {/* RFM Segments Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {rfmSegments.map((segment) => (
            <div
              key={segment.id}
              className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors cursor-pointer"
            >
              <h3 className="text-sm font-medium text-gray-700 mb-1">
                {segment.metadata?.segment_name}
              </h3>
              <p className="text-2xl font-bold text-gray-900">
                {segment.metadata?.patient_count?.toLocaleString()}
              </p>
              <p className="text-xs text-gray-500 mt-1">
                {segment.metadata?.description}
              </p>
            </div>
          ))}
        </div>

        {/* Patient Events Table */}
        {eventSegments.length > 0 && (
          <>
            <h3 className="text-md font-semibold text-gray-900 mb-4">
              Patient Events Detection
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                      Event Type
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                      Patients
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                      Priority
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {eventSegments.map((segment) => (
                    <tr key={segment.id} className="hover:bg-gray-50">
                      <td className="px-4 py-3 text-sm text-gray-900">
                        {segment.metadata?.segment_name}
                      </td>
                      <td className="px-4 py-3 text-sm font-medium text-gray-900">
                        {segment.metadata?.patient_count?.toLocaleString()}
                      </td>
                      <td className="px-4 py-3">
                        <span
                          className={`inline-flex px-2 py-1 text-xs font-medium rounded-full border ${getPriorityColor(
                            segment.metadata?.priority?.key
                          )}`}
                        >
                          {segment.metadata?.priority?.value || 'Unknown'}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}
      </div>
    </section>
  )
}