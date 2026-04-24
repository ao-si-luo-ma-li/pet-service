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

const serviceOptions = [
  '宠物场所设计', '上门服务', '宠物寄养', 'AI美容', '综合服务'
]

export default function Register() {
  const [step, setStep] = useState(1)
  const [form, setForm] = useState({
    phone: '', password: '', confirmPwd: '', name: '',
    verifyCode: '', services: [], agree: false
  })
  const [sendText, setSendText] = useState('获取验证码')
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState({})

  const sendCode = async () => {
    if (!form.phone || form.phone.length < 11) {
      setErrors({ ...errors, phone: '请输入正确手机号' })
      return
    }
    setSendText('发送中...')
    await new Promise(r => setTimeout(r, 800))
    setSendText('59s')
    let count = 59
    const timer = setInterval(() => {
      count--
      setSendText(count > 0 ? `${count}s` : '获取验证码')
      if (count <= 0) clearInterval(timer)
    }, 1000)
  }

  const toggleService = (s) => {
    setForm(f => ({
      ...f,
      services: f.services.includes(s)
        ? f.services.filter(x => x !== s)
        : [...f.services, s]
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (step === 1) {
      const e = {}
      if (!form.phone || form.phone.length < 11) e.phone = '请输入正确手机号'
      if (!form.verifyCode || form.verifyCode.length < 6) e.verifyCode = '请输入6位验证码'
      setErrors(e)
      if (Object.keys(e).length === 0) setStep(2)
      return
    }
    const errs = {}
    if (!form.name.trim()) errs.name = '请输入姓名'
    if (!form.password || form.password.length < 6) errs.password = '密码至少6位'
    if (form.password !== form.confirmPwd) errs.confirmPwd = '两次密码不一致'
    if (!form.agree) errs.agree = '请同意服务条款'
    setErrors(errs)
    if (Object.keys(errs).length > 0) return
    setLoading(true)
    await new Promise(r => setTimeout(r, 1200))
    setLoading(false)
    alert('演示模式，实际需对接后台~')
  }

  return (
    <div className="min-h-screen flex" style={{ background: 'linear-gradient(135deg, #FFF9F5 0%, #F5E6D3 100%)' }}>
      {/* Left - Brand panel */}
      <div className="hidden lg:flex lg:w-1/2 flex-col justify-between p-12 xl:p-20" style={{ background: '#1C1917' }}>
        <div><LogoIcon /></div>
        <div>
          <h1 className="text-3xl xl:text-4xl font-bold text-white mb-4 leading-tight">
            加入我们<br />开启宠物服务之旅
          </h1>
          <div className="space-y-2">
            {[
              '宠物场所专业设计与搭建',
              '贴心上门服务定制方案',
              '个性化宠物寄养体验',
              'AI赋能宠物美容护理',
            ].map(item => (
              <div key={item} className="flex items-center gap-3">
                <span className="text-brand-400">✓</span>
                <span className="text-earth-300 text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
        <p className="text-earth-500 text-xs">© {new Date().getFullYear()} 上海绰为腾宠物服务有限公司</p>
      </div>

      {/* Right - Form panel */}
      <div className="flex-1 flex items-center justify-center p-6">
        <div className="w-full max-w-sm">
          {/* Mobile logo */}
          <div className="lg:hidden flex justify-center mb-8">
            <LogoIcon />
          </div>

          <h2 className="text-2xl font-bold text-earth-900 mb-1 text-center lg:text-left">创建账号</h2>
          <p className="text-earth-400 text-sm mb-6 text-center lg:text-left">加入绰为腾宠物，享受专属服务</p>

          {/* Step indicator */}
          <div className="flex items-center justify-center lg:justify-start gap-3 mb-6">
            {[1, 2].map(s => (
              <div key={s} className="flex items-center">
                <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-all
                  ${step >= s ? 'text-white' : 'bg-earth-200 text-earth-400'}`}
                  style={step >= s ? { background: '#E67E22' } : {}}>
                  {s}
                </div>
                {s < 2 && (
                  <div className={`w-12 h-0.5 mx-2 transition-all ${step > s ? 'bg-brand-500' : 'bg-earth-200'}`} />
                )}
              </div>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {step === 1 ? (
              <>
                <div>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={e => setForm({ ...form, phone: e.target.value })}
                    placeholder="手机号"
                    maxLength={11}
                    className="w-full px-4 py-3 bg-white border border-earth-200 rounded-lg text-sm
                               focus:outline-none focus:ring-2 focus:ring-brand-400 placeholder-earth-300"
                  />
                  {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                </div>
                <div>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={form.verifyCode}
                      onChange={e => setForm({ ...form, verifyCode: e.target.value.replace(/\D/g,'').slice(0,6) })}
                      placeholder="验证码"
                      maxLength={6}
                      className="flex-1 px-4 py-3 bg-white border border-earth-200 rounded-lg text-sm
                                 focus:outline-none focus:ring-2 focus:ring-brand-400 placeholder-earth-300"
                    />
                    <button
                      type="button"
                      onClick={sendCode}
                      disabled={sendText !== '获取验证码' && !sendText.endsWith('s')}
                      className="px-4 py-3 border-2 rounded-lg text-sm font-medium transition-all whitespace-nowrap"
                      style={{ borderColor: '#E67E22', color: '#E67E22' }}
                      onMouseEnter={e => { if (!e.target.disabled) e.target.style.background = '#FFF3E6' }}
                      onMouseLeave={e => { e.target.style.background = 'transparent' }}
                    >
                      {sendText}
                    </button>
                  </div>
                  {errors.verifyCode && <p className="text-red-500 text-xs mt-1">{errors.verifyCode}</p>}
                </div>
                <button
                  type="submit"
                  className="w-full py-3 rounded-lg text-white text-sm font-medium"
                  style={{ background: '#E67E22' }}
                  onMouseEnter={e => e.target.style.background = '#C96A1A'}
                  onMouseLeave={e => e.target.style.background = '#E67E22'}
                >
                  下一步 →
                </button>
              </>
            ) : (
              <>
                <div>
                  <input
                    type="text"
                    value={form.name}
                    onChange={e => setForm({ ...form, name: e.target.value })}
                    placeholder="您的姓名"
                    className="w-full px-4 py-3 bg-white border border-earth-200 rounded-lg text-sm
                               focus:outline-none focus:ring-2 focus:ring-brand-400 placeholder-earth-300"
                  />
                  {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                </div>
                <div>
                  <input
                    type="password"
                    value={form.password}
                    onChange={e => setForm({ ...form, password: e.target.value })}
                    placeholder="设置密码（至少6位）"
                    className="w-full px-4 py-3 bg-white border border-earth-200 rounded-lg text-sm
                               focus:outline-none focus:ring-2 focus:ring-brand-400 placeholder-earth-300"
                  />
                  {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
                </div>
                <div>
                  <input
                    type="password"
                    value={form.confirmPwd}
                    onChange={e => setForm({ ...form, confirmPwd: e.target.value })}
                    placeholder="确认密码"
                    className="w-full px-4 py-3 bg-white border border-earth-200 rounded-lg text-sm
                               focus:outline-none focus:ring-2 focus:ring-brand-400 placeholder-earth-300"
                  />
                  {errors.confirmPwd && <p className="text-red-500 text-xs mt-1">{errors.confirmPwd}</p>}
                </div>
                <div>
                  <p className="text-xs text-earth-500 mb-2">感兴趣的服务（选填）</p>
                  <div className="flex flex-wrap gap-2">
                    {serviceOptions.map(s => (
                      <button
                        key={s}
                        type="button"
                        onClick={() => toggleService(s)}
                        className="px-3 py-1.5 rounded-full text-xs border transition-all"
                        style={form.services.includes(s)
                          ? { background: '#E67E22', color: 'white', borderColor: '#E67E22' }
                          : { background: 'white', color: '#6B5338', borderColor: '#E8C9A0' }}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="flex items-start gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={form.agree}
                      onChange={e => setForm({ ...form, agree: e.target.checked })}
                      className="w-4 h-4 mt-0.5 rounded border-earth-300 text-brand-500"
                    />
                    <span className="text-xs text-earth-500 leading-relaxed">
                      我已阅读并同意
                      <a href="#" className="text-brand-500 hover:underline">《服务条款》</a>
                      和
                      <a href="#" className="text-brand-500 hover:underline">《隐私政策》</a>
                    </span>
                  </label>
                  {errors.agree && <p className="text-red-500 text-xs mt-1">{errors.agree}</p>}
                </div>
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="flex-1 py-3 border border-earth-200 rounded-lg text-sm font-medium text-earth-600 bg-white hover:bg-earth-50 transition-all"
                  >
                    ← 返回
                  </button>
                  <button
                    type="submit"
                    disabled={loading}
                    className="flex-1 py-3 rounded-lg text-white text-sm font-medium disabled:opacity-60"
                    style={{ background: '#E67E22' }}
                    onMouseEnter={e => { if (!loading) e.target.style.background = '#C96A1A' }}
                    onMouseLeave={e => { e.target.style.background = '#E67E22' }}
                  >
                    {loading ? '注册中...' : '完成注册'}
                  </button>
                </div>
              </>
            )}
          </form>

          <div className="mt-6 text-center">
            <p className="text-earth-400 text-sm">
              已有账号？
              <Link to="/login" className="text-brand-500 hover:text-brand-600 font-medium ml-1">立即登录 →</Link>
            </p>
          </div>

          <div className="mt-4 text-center">
            <Link to="/" className="text-earth-400 text-sm hover:text-earth-600 transition-colors">← 返回首页</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
