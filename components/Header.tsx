import type { DashboardSettings } from '@/types'

interface HeaderProps {
  settings: DashboardSettings | null
}

export default function Header({ settings }: HeaderProps) {
  const platformName = settings?.metadata?.platform_name || 'EpicHealth'
  const platformSubtitle = settings?.metadata?.platform_subtitle || 'C4 Omnichannel Platform'
  const platformEmoji = settings?.metadata?.platform_emoji || '🏥'
  const navItems = settings?.metadata?.navigation_items || ['Dashboard']
  const adminName = settings?.metadata?.admin_name || 'John Doe'
  const adminRole = settings?.metadata?.admin_role || 'Admin'
  const adminInitials = settings?.metadata?.admin_initials || 'JD'

  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Title */}
          <div className="flex items-center">
            <span className="text-2xl mr-2">{platformEmoji}</span>
            <div>
              <h1 className="text-xl font-bold text-gray-900">{platformName}</h1>
              <p className="text-xs text-gray-500">{platformSubtitle}</p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <button
                key={index}
                className={`px-3 py-1.5 text-sm rounded-full transition-colors ${
                  index === 0
                    ? 'bg-primary-100 text-primary-700 font-medium'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                {item}
              </button>
            ))}
          </nav>

          {/* User Profile */}
          <div className="flex items-center space-x-3">
            <div className="text-right hidden sm:block">
              <p className="text-sm font-medium text-gray-900">{adminName}</p>
              <p className="text-xs text-gray-500">{adminRole}</p>
            </div>
            <div className="w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center">
              <span className="text-white font-medium text-sm">{adminInitials}</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}