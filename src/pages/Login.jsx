import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Login() {
  const [form, setForm] = useState({ phone: '', password: '', remember: false })
  const [showPwd, setShowPwd] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!form.phone || !form.password) {
      setError('请填写手机号和密码')
      return
    }
    setLoading(true)
    setError('')
    // 模拟登录
    await new Promise(r => setTimeout(r, 1200))
    setLoading(false)
    alert('登录功能演示中，实际需对接后台~')
  }

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-12 bg-gradient-to-b from-brand-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="tag-pill mb-4">用户中心</div>
          <h1 className="section-title">欢迎回来</h1>
          <p className="section-subtitle">登录您的绰为腾宠物服务账号</p>
        </div>
      </section>

      {/* Login Form */}
      <section className="pb-20 md:pb-28">
        <div className="max-w-md mx-auto px-4 sm:px-6">
          <div className="card p-8 md:p-10">
            <div className="text-center mb-8">
              <div className="w-16 h-16 rounded-2xl bg-brand-100 flex items-center justify-center mx-auto mb-3">
                <svg className="w-8 h-8 text-brand-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                </svg>
              </div>
              <h2 className="text-xl font-bold text-earth-900">登录账号</h2>
            </div>

            {error && (
              <div className="mb-4 p-3 rounded-lg bg-red-50 border border-red-200 text-red-600 text-sm">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-earth-700 mb-1.5">
                  手机号 <span className="text-red-400">*</span>
                </label>
                <input
                  type="tel"
                  value={form.phone}
                  onChange={e => setForm({ ...form, phone: e.target.value })}
                  placeholder="请输入注册手机号"
                  className="w-full px-4 py-3 border border-earth-200 rounded-lg text-sm
                             focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent
                             placeholder-earth-300 transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-earth-700 mb-1.5">
                  密码 <span className="text-red-400">*</span>
                </label>
                <div className="relative">
                  <input
                    type={showPwd ? 'text' : 'password'}
                    value={form.password}
                    onChange={e => setForm({ ...form, password: e.target.value })}
                    placeholder="请输入密码"
                    className="w-full px-4 py-3 border border-earth-200 rounded-lg text-sm pr-12
                               focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent
                               placeholder-earth-300 transition-all"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPwd(!showPwd)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-earth-400 hover:text-earth-600 transition-colors"
                  >
                    {showPwd ? (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"
                          d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"/>
                      </svg>
                    ) : (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"
                          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
                      </svg>
                    )}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={form.remember}
                    onChange={e => setForm({ ...form, remember: e.target.checked })}
                    className="w-4 h-4 rounded border-earth-300 text-brand-500 focus:ring-brand-400"
                  />
                  <span className="text-sm text-earth-600">记住我</span>
                </label>
                <a href="#" className="text-sm text-brand-500 hover:text-brand-600 transition-colors">
                  忘记密码？
                </a>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="btn-primary w-full !py-4 text-base disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
                    </svg>
                    登录中...
                  </span>
                ) : '登录'}
              </button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-earth-500 text-sm">
                还没有账号？
                <Link to="/register" className="text-brand-500 hover:text-brand-600 font-medium ml-1 transition-colors">
                  立即注册 →
                </Link>
              </p>
            </div>
          </div>

          {/* Service promise */}
          <div className="mt-6 p-4 rounded-xl bg-earth-50 border border-earth-100">
            <div className="flex items-start gap-3">
              <svg className="w-5 h-5 text-leaf-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
              </svg>
              <div>
                <p className="text-earth-600 text-sm font-medium mb-0.5">账户安全承诺</p>
                <p className="text-earth-400 text-xs">您的信息受 SSL 加密保护，我们绝不会向第三方泄露您的隐私数据。</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
