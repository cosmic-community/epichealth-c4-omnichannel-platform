import type { RecentActivity } from '@/types'

interface RecentActivityTableProps {
  activities: RecentActivity[]
}

function getStatusColor(statusKey: string | undefined): string {
  switch (statusKey) {
    case 'active':
      return 'bg-green-100 text-green-700'
    case 'completed':
      return 'bg-blue-100 text-blue-700'
    case 'ready':
      return 'bg-purple-100 text-purple-700'
    case 'sent':
      return 'bg-cyan-100 text-cyan-700'
    case 'pending':
      return 'bg-yellow-100 text-yellow-700'
    default:
      return 'bg-gray-100 text-gray-700'
  }
}

export default function RecentActivityTable({ activities }: RecentActivityTableProps) {
  if (!activities || activities.length === 0) {
    return null
  }

  return (
    <section className="mb-8">
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-100">
          <h2 className="text-lg font-semibold text-gray-900">Recent Activity</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Timestamp
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Activity
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  User
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {activities.map((activity) => (
                <tr key={activity.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {activity.metadata?.timestamp}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900">
                    {activity.metadata?.activity_description}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    {activity.metadata?.user || '-'}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(
                        activity.metadata?.status?.key
                      )}`}
                    >
                      {activity.metadata?.status?.value || 'Unknown'}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}