import { useState } from 'react'
import { Link } from 'react-router-dom'

const LogoIcon = () => (
  <svg width="48" height="48" viewBox="0 0 36 36" fill="none">
    <circle cx="18" cy="18" r="18" fill="#E67E22"/>
    <ellipse cx="12" cy="11" rx="3" ry="4" fill="white" opacity="0.9"/>
    <ellipse cx="24" cy="11" rx="3" ry="4" fill="white" opacity="0.9"/>
    <ellipse cx="10" cy="21" rx="4" ry="5" fill="white" opacity="0.9"/>
    <ellipse cx="26" cy="21" rx="4" ry="5" fill="white" opacity="0.9"/>
    <ellipse cx="18" cy="22" rx="5" ry="6" fill="white" opacity="0.9"/>
  </svg>
)

export default function Login() {
  const [form, setForm] = useState({ phone: '', password: '', remember: false })
  const [showPwd, setShowPwd] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!form.phone || !form.password) { setError('请填写手机号和密码'); return }
    setLoading(true)
    setError('')
    await new Promise(r => setTimeout(r, 1200))
    setLoading(false)
    alert('演示模式，实际需对接后台~')
  }

  return (
    <div className="min-h-screen flex" style={{ background: 'linear-gradient(135deg, #FFF9F5 0%, #F5E6D3 100%)' }}>
      {/* Left - Brand panel */}
      <div className="hidden lg:flex lg:w-1/2 flex-col justify-between p-12 xl:p-20" style={{ background: '#1C1917' }}>
        <div>
          <LogoIcon />
        </div>
        <div>
          <h1 className="text-3xl xl:text-4xl font-bold text-white mb-4 leading-tight">
            每一份爱<br />都有专业守护
          </h1>
          <p className="text-earth-400 text-base leading-relaxed">
            上海绰为腾宠物服务有限公司<br />
            专注宠物场所设计 · 上门服务 · 个性寄养 · AI赋能美容
          </p>
        </div>
        <div className="flex items-center gap-8">
          {[
            { num: '500+', label: '服务案例' },
            { num: '98%', label: '客户满意度' },
            { num: '7×24', label: '全天候' },
          ].map(s => (
            <div key={s.label} className="text-center">
              <div className="text-2xl font-bold text-brand-400">{s.num}</div>
              <div className="text-earth-500 text-xs mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Right - Form panel */}
      <div className="flex-1 flex items-center justify-center p-6">
        <div className="w-full max-w-sm">
          {/* Mobile logo */}
          <div className="lg:hidden flex justify-center mb-8">
            <LogoIcon />
          </div>

          <h2 className="text-2xl font-bold text-earth-900 mb-1 text-center lg:text-left">欢迎回来</h2>
          <p className="text-earth-400 text-sm mb-8 text-center lg:text-left">
            登录您的绰为腾宠物账号
          </p>

          {error && (
            <div className="mb-4 p-3 rounded-lg bg-red-50 border border-red-200 text-red-600 text-sm">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="tel"
                value={form.phone}
                onChange={e => setForm({ ...form, phone: e.target.value })}
                placeholder="手机号"
                maxLength={11}
                className="w-full px-4 py-3 bg-white border border-earth-200 rounded-lg text-sm
                           focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent
                           placeholder-earth-300 transition-all"
              />
            </div>

            <div className="relative">
              <input
                type={showPwd ? 'text' : 'password'}
                value={form.password}
                onChange={e => setForm({ ...form, password: e.target.value })}
                placeholder="密码"
                className="w-full px-4 py-3 pr-12 bg-white border border-earth-200 rounded-lg text-sm
                           focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent
                           placeholder-earth-300 transition-all"
              />
              <button
                type="button"
                onClick={() => setShowPwd(!showPwd)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-earth-400 hover:text-earth-600 transition-colors"
              >
                {showPwd ? '🙈' : '👁'}
              </button>
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={form.remember}
                  onChange={e => setForm({ ...form, remember: e.target.checked })}
                  className="w-4 h-4 rounded border-earth-300 text-brand-500 focus:ring-brand-400"
                />
                <span className="text-sm text-earth-500">记住我</span>
              </label>
              <a href="#" className="text-sm text-brand-500 hover:text-brand-600 transition-colors">忘记密码？</a>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 rounded-lg text-white text-sm font-medium transition-all disabled:opacity-60"
              style={{ background: '#E67E22' }}
              onMouseEnter={e => { if (!loading) e.target.style.background = '#C96A1A' }}
              onMouseLeave={e => { e.target.style.background = '#E67E22' }}
            >
              {loading ? '登录中...' : '登录'}
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-earth-400 text-sm">
              还没有账号？
              <Link to="/register" className="text-brand-500 hover:text-brand-600 font-medium ml-1 transition-colors">
                立即注册 →
              </Link>
            </p>
          </div>

          <div className="mt-6 text-center">
            <Link to="/" className="text-earth-400 text-sm hover:text-earth-600 transition-colors">
              ← 返回首页
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
