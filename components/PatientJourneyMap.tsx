import type { JourneyStage } from '@/types'

interface PatientJourneyMapProps {
  stages: JourneyStage[]
}

export default function PatientJourneyMap({ stages }: PatientJourneyMapProps) {
  if (!stages || stages.length === 0) {
    return null
  }

  return (
    <section className="mb-8">
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-2">
          Interactive Patient Journey Map
        </h2>
        <p className="text-sm text-gray-500 mb-6">End-to-End Patient Journey</p>

        {/* Journey Stages Timeline */}
        <div className="relative mb-8">
          <div className="flex items-center justify-between overflow-x-auto pb-4">
            {stages.map((stage, index) => (
              <div key={stage.id} className="flex items-center">
                <div className="flex flex-col items-center min-w-[120px]">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mb-2">
                    <span className="text-xl">{stage.metadata?.stage_icon || '📍'}</span>
                  </div>
                  <span className="text-sm font-medium text-gray-900 text-center">
                    {stage.metadata?.stage_name}
                  </span>
                </div>
                {index < stages.length - 1 && (
                  <div className="w-16 h-0.5 bg-primary-200 mx-2" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Stage Details */}
        <div className="space-y-6">
          {stages.map((stage) => {
            const metrics = stage.metadata?.stage_metrics
            const steps = stage.metadata?.stage_steps || []

            return (
              <div
                key={stage.id}
                className="bg-gray-50 rounded-lg p-4 border-l-4 border-primary-500"
              >
                <div className="flex items-center mb-3">
                  <span className="text-xl mr-2">{stage.metadata?.stage_icon || '📍'}</span>
                  <h3 className="text-md font-semibold text-gray-900">
                    {stage.metadata?.stage_name}
                  </h3>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                  {/* Metrics */}
                  {metrics && (
                    <div>
                      <div className="flex items-baseline mb-2">
                        <span className="text-2xl font-bold text-gray-900 mr-2">
                          {metrics.total}
                        </span>
                        <span className="text-sm text-gray-500">{metrics.label}</span>
                        {metrics.rate && (
                          <span className="ml-2 px-2 py-0.5 bg-green-100 text-green-700 text-xs rounded-full">
                            {metrics.rate}
                          </span>
                        )}
                      </div>
                      {metrics.submetrics && metrics.submetrics.length > 0 && (
                        <div className="space-y-1">
                          {metrics.submetrics.map((sub, idx) => (
                            <div key={idx} className="flex justify-between text-sm">
                              <span className="text-gray-600">{sub.label}</span>
                              <span className="font-medium text-gray-900">{sub.value}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  )}

                  {/* Steps */}
                  {steps.length > 0 && (
                    <div>
                      <p className="text-xs text-gray-500 uppercase mb-2">Process Steps</p>
                      <div className="space-y-2">
                        {steps.map((step) => (
                          <div key={step.number} className="flex items-start">
                            <span className="w-5 h-5 bg-primary-600 text-white text-xs rounded-full flex items-center justify-center mr-2 mt-0.5">
                              {step.number}
                            </span>
                            <div>
                              <p className="text-sm font-medium text-gray-900">{step.title}</p>
                              <p className="text-xs text-gray-500">{step.description}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}