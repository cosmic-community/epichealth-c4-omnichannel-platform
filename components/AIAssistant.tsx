import type { AIAssistantConfig } from '@/types'

interface AIAssistantProps {
  config: AIAssistantConfig | null
}

export default function AIAssistant({ config }: AIAssistantProps) {
  if (!config) {
    return null
  }

  const title = config.metadata?.assistant_title || 'AI Assistant'
  const description = config.metadata?.description || ''
  const capabilities = config.metadata?.capabilities || []
  const placeholder = config.metadata?.placeholder_text || 'Ask a question...'
  const suggestedActions = config.metadata?.suggested_actions || []

  return (
    <section className="mb-8">
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <div className="flex items-center mb-4">
          <span className="text-2xl mr-3">🤖</span>
          <div>
            <h2 className="text-lg font-semibold text-gray-900">{title}</h2>
            <p className="text-sm text-gray-500">{description}</p>
          </div>
        </div>

        {/* Capabilities */}
        {capabilities.length > 0 && (
          <ul className="mb-6 space-y-2">
            {capabilities.map((capability, index) => (
              <li key={index} className="flex items-start text-sm text-gray-600">
                <span className="text-green-500 mr-2">✓</span>
                {capability}
              </li>
            ))}
          </ul>
        )}

        {/* Query Input */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Intelligent Query Console
          </label>
          <div className="flex">
            <input
              type="text"
              placeholder={placeholder}
              className="flex-1 px-4 py-3 border border-gray-200 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm"
            />
            <button className="px-6 py-3 bg-primary-600 text-white font-medium rounded-r-lg hover:bg-primary-700 transition-colors">
              Send
            </button>
          </div>
        </div>

        {/* Suggested Actions */}
        {suggestedActions.length > 0 && (
          <div>
            <p className="text-xs text-gray-500 mb-2">Suggested Actions</p>
            <div className="flex flex-wrap gap-2">
              {suggestedActions.map((action, index) => (
                <button
                  key={index}
                  className="inline-flex items-center px-3 py-1.5 bg-gray-100 rounded-full text-sm text-gray-700 hover:bg-gray-200 transition-colors"
                >
                  <span className="mr-1">{action.icon}</span>
                  {action.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}