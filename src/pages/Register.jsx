import { useState } from 'react'
import { Link } from 'react-router-dom'

const serviceOptions = [
  '宠物场所设计与搭建', '上门宠物服务', '宠物寄养服务',
  '宠物美容护理', '综合服务（以上均可）'
]

export default function Register() {
  const [step, setStep] = useState(1)
  const [form, setForm] = useState({
    phone: '', password: '', confirmPwd: '', name: '',
    verifyCode: '', services: [], agree: false
  })
  const [sendText, setSendText] = useState('获取验证码')
  const [sendLoading, setSendLoading] = useState(false)
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState({})

  const sendCode = async () => {
    if (!form.phone || form.phone.length < 11) {
      setErrors({ ...errors, phone: '请输入正确的手机号' })
      return
    }
    setSendLoading(true)
    await new Promise(r => setTimeout(r, 800))
    setSendLoading(false)
    setSendText('59s')
    let count = 59
    const timer = setInterval(() => {
      count--
      setSendText(`${count}s`)
      if (count <= 0) {
        clearInterval(timer)
        setSendText('获取验证码')
      }
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

  const validate = () => {
    const e = {}
    if (!form.phone || form.phone.length < 11) e.phone = '请输入11位手机号'
    if (!form.verifyCode || form.verifyCode.length !== 6) e.verifyCode = '请输入6位验证码'
    if (!form.name.trim()) e.name = '请输入您的姓名'
    if (!form.password || form.password.length < 6) e.password = '密码至少6位'
    if (form.password !== form.confirmPwd) e.confirmPwd = '两次密码不一致'
    if (!form.agree) e.agree = '请同意服务条款'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (step === 1) {
      const e = {}
      if (!form.phone || form.phone.length < 11) e.phone = '请输入正确的手机号'
      if (!form.verifyCode || form.verifyCode.length !== 6) e.verifyCode = '请输入6位验证码'
      setErrors(e)
      if (Object.keys(e).length === 0) setStep(2)
      return
    }
    if (!validate()) return
    setLoading(true)
    await new Promise(r => setTimeout(r, 1200))
    setLoading(false)
    alert('注册功能演示中，实际需对接后台~')
  }

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-12 bg-gradient-to-b from-brand-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="tag-pill mb-4">用户中心</div>
          <h1 className="section-title">创建账号</h1>
          <p className="section-subtitle">加入绰为腾宠物，享受专属服务</p>
        </div>
      </section>

      {/* Register Form */}
      <section className="pb-20 md:pb-28">
        <div className="max-w-lg mx-auto px-4 sm:px-6">
          <div className="card p-8 md:p-10">
            {/* Step indicator */}
            <div className="flex items-center justify-center gap-0 mb-8">
              {[1, 2].map(s => (
                <div key={s} className="flex items-center">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all
                    ${step >= s ? 'bg-brand-500 text-white' : 'bg-earth-100 text-earth-400'}`}>
                    {s}
                  </div>
                  {s < 2 && (
                    <div className={`w-20 h-0.5 mx-1 transition-all ${step > s ? 'bg-brand-500' : 'bg-earth-100'}`} />
                  )}
                </div>
              ))}
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              {step === 1 ? (
                <>
                  <div>
                    <label className="block text-sm font-medium text-earth-700 mb-1.5">
                      手机号 <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={e => setForm({ ...form, phone: e.target.value })}
                      placeholder="请输入手机号"
                      maxLength={11}
                      className="w-full px-4 py-3 border rounded-lg text-sm
                                 focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent
                                 placeholder-earth-300 transition-all"
                    />
                    {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-earth-700 mb-1.5">
                      验证码 <span className="text-red-400">*</span>
                    </label>
                    <div className="flex gap-3">
                      <input
                        type="text"
                        value={form.verifyCode}
                        onChange={e => setForm({ ...form, verifyCode: e.target.value.replace(/\D/g, '').slice(0, 6) })}
                        placeholder="请输入验证码"
                        maxLength={6}
                        className="flex-1 px-4 py-3 border rounded-lg text-sm
                                   focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent
                                   placeholder-earth-300 transition-all"
                      />
                      <button
                        type="button"
                        onClick={sendCode}
                        disabled={sendLoading || (sendText !== '获取验证码' && sendText !== '获取验证码'.includes('s'))}
                        className="px-4 py-3 border-2 border-brand-500 text-brand-500 rounded-lg text-sm font-medium
                                   hover:bg-brand-50 transition-all disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
                      >
                        {sendLoading ? '发送中...' : sendText}
                      </button>
                    </div>
                    {errors.verifyCode && <p className="text-red-500 text-xs mt-1">{errors.verifyCode}</p>}
                  </div>

                  <div className="pt-2">
                    <button type="submit" className="btn-primary w-full !py-4 text-base">
                      下一步 →
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <div>
                    <label className="block text-sm font-medium text-earth-700 mb-1.5">
                      姓名 <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      value={form.name}
                      onChange={e => setForm({ ...form, name: e.target.value })}
                      placeholder="请输入您的真实姓名"
                      className="w-full px-4 py-3 border rounded-lg text-sm
                                 focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent
                                 placeholder-earth-300 transition-all"
                    />
                    {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-earth-700 mb-1.5">
                      设置密码 <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="password"
                      value={form.password}
                      onChange={e => setForm({ ...form, password: e.target.value })}
                      placeholder="至少6位字符"
                      className="w-full px-4 py-3 border rounded-lg text-sm
                                 focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent
                                 placeholder-earth-300 transition-all"
                    />
                    {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-earth-700 mb-1.5">
                      确认密码 <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="password"
                      value={form.confirmPwd}
                      onChange={e => setForm({ ...form, confirmPwd: e.target.value })}
                      placeholder="请再次输入密码"
                      className="w-full px-4 py-3 border rounded-lg text-sm
                                 focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent
                                 placeholder-earth-300 transition-all"
                    />
                    {errors.confirmPwd && <p className="text-red-500 text-xs mt-1">{errors.confirmPwd}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-earth-700 mb-1.5">
                      感兴趣的服务（选填）
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {serviceOptions.map(s => (
                        <button
                          key={s}
                          type="button"
                          onClick={() => toggleService(s)}
                          className={`px-3 py-1.5 rounded-full text-sm border transition-all ${
                            form.services.includes(s)
                              ? 'bg-brand-500 text-white border-brand-500'
                              : 'bg-white text-earth-600 border-earth-200 hover:border-brand-300'
                          }`}
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
                        className="w-4 h-4 mt-0.5 rounded border-earth-300 text-brand-500 focus:ring-brand-400"
                      />
                      <span className="text-sm text-earth-600">
                        我已阅读并同意
                        <a href="#" className="text-brand-500 hover:underline">《服务条款》</a>
                        和
                        <a href="#" className="text-brand-500 hover:underline">《隐私政策》</a>
                      </span>
                    </label>
                    {errors.agree && <p className="text-red-500 text-xs mt-1">{errors.agree}</p>}
                  </div>

                  <div className="flex gap-3 pt-2">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="btn-secondary flex-1 !py-4"
                    >
                      ← 返回
                    </button>
                    <button
                      type="submit"
                      disabled={loading}
                      className="btn-primary flex-1 !py-4 disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {loading ? (
                        <span className="flex items-center justify-center gap-2">
                          <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
                          </svg>
                          注册中...
                        </span>
                      ) : '完成注册'}
                    </button>
                  </div>
                </>
              )}
            </form>

            <div className="mt-6 text-center">
              <p className="text-earth-500 text-sm">
                已有账号？
                <Link to="/login" className="text-brand-500 hover:text-brand-600 font-medium ml-1 transition-colors">
                  立即登录 →
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
