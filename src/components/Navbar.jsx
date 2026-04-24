import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const LogoIcon = () => (
  <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="18" cy="18" r="18" fill="#E67E22"/>
    <ellipse cx="12" cy="11" rx="3" ry="4" fill="white" opacity="0.9"/>
    <ellipse cx="24" cy="11" rx="3" ry="4" fill="white" opacity="0.9"/>
    <ellipse cx="10" cy="21" rx="4" ry="5" fill="white" opacity="0.9"/>
    <ellipse cx="26" cy="21" rx="4" ry="5" fill="white" opacity="0.9"/>
    <ellipse cx="18" cy="22" rx="5" ry="6" fill="white" opacity="0.9"/>
  </svg>
)

const navLinks = [
  { to: '/', label: '首页' },
  { to: '/services', label: '服务项目' },
  { to: '/about', label: '关于我们' },
  { to: '/login', label: '登录' },
  { to: '/register', label: '注册' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-earth-100'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <LogoIcon />
            <div className="flex flex-col leading-tight">
              <span className={`font-bold text-base transition-colors ${
                scrolled ? 'text-earth-900' : 'text-earth-900'
              }`}>
                绰为腾宠物
              </span>
              <span className={`text-xs transition-colors ${
                scrolled ? 'text-earth-500' : 'text-earth-600'
              }`}>
                每一份爱，都值得专业守护
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map(link => (
              <Link
                key={link.to}
                to={link.to}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  location.pathname === link.to
                    ? 'bg-brand-100 text-brand-700'
                    : scrolled
                      ? 'text-earth-600 hover:text-brand-600 hover:bg-brand-50'
                      : 'text-earth-700 hover:text-brand-600 hover:bg-white/60'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link to="/register" className="ml-3 btn-primary text-sm !px-5 !py-2">
              立即注册
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-lg text-earth-700 hover:bg-brand-50 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="菜单"
          >
            {menuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"/>
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden transition-all duration-300 overflow-hidden ${
        menuOpen ? 'max-h-96 border-b border-earth-100' : 'max-h-0'
      }`}>
        <div className="bg-white px-4 py-4 space-y-1">
          {navLinks.map(link => (
            <Link
              key={link.to}
              to={link.to}
              className={`block px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                location.pathname === link.to
                  ? 'bg-brand-100 text-brand-700'
                  : 'text-earth-600 hover:bg-brand-50 hover:text-brand-600'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link to="/register" className="block mt-3 btn-primary text-center !py-3">
            立即注册
          </Link>
        </div>
      </div>
    </header>
  )
}
