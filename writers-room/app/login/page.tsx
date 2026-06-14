'use client'

import { useState } from 'react'
import { supabase } from '@/lib/supabase'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const router = useRouter()

  const handleLogin = async () => {
    if (!email || !password) { setError('Please fill in all fields.'); return }
    setLoading(true)
    setError('')
    const { error: loginError } = await supabase.auth.signInWithPassword({ email, password })
    if (loginError) { setError(loginError.message); setLoading(false); return }
    router.push('/')
  }

  return (
    <div className="auth-page">
      <div className="auth-card">
        <Link href="/">
          <img src="/logo.png" alt="The Writers Room" style={{height: '160px', width: 'auto', display: 'block', margin: '0 auto 1.5rem'}} />
        </Link>
        <h2 className="auth-title">Welcome back</h2>
        <p className="auth-sub">Sign in to continue your story.</p>
        {error && <div className="auth-error">{error}</div>}
        <div className="auth-field">
          <label>Email Address</label>
          <input type="email" placeholder="you@example.com" value={email} onChange={e => setEmail(e.target.value)} onKeyDown={e => e.key === 'Enter' && handleLogin()} />
        </div>
        <div className="auth-field">
          <label>Password</label>
          <input type="password" placeholder="Your password" value={password} onChange={e => setPassword(e.target.value)} onKeyDown={e => e.key === 'Enter' && handleLogin()} />
        </div>
        <button className="auth-btn-primary" onClick={handleLogin} disabled={loading}>
          {loading ? 'Signing in...' : 'Sign In'}
        </button>
        <p className="auth-switch">
          Don't have an account? <Link href="/signup">Sign up</Link>
        </p>
      </div>
    </div>
  )
}
