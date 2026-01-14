import type { QuickAction } from '@/types'

interface QuickActionsBarProps {
  actions: QuickAction[]
}

export default function QuickActionsBar({ actions }: QuickActionsBarProps) {
  if (!actions || actions.length === 0) {
    return null
  }

  return (
    <section className="mb-8">
      <div className="flex flex-wrap gap-3">
        {actions.map((action) => (
          <button
            key={action.id}
            className="inline-flex items-center px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-700 hover:bg-gray-50 hover:border-primary-300 transition-colors shadow-sm"
          >
            <span className="mr-2">{action.metadata?.action_icon || '🎯'}</span>
            {action.metadata?.action_label}
          </button>
        ))}
      </div>
    </section>
  )
}