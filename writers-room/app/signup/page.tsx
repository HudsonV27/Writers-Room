'use client'

import { useState } from 'react'
import { supabase } from '@/lib/supabase'
import Link from 'next/link'

export default function SignUp() {
  const [step, setStep] = useState(1)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [displayName, setDisplayName] = useState('')
  const [username, setUsername] = useState('')
  const [userType, setUserType] = useState('writer')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)

  const handleStep1 = () => {
    if (!email || !password || !confirmPassword) { setError('Please fill in all fields.'); return }
    if (password !== confirmPassword) { setError('Passwords do not match.'); return }
    if (password.length < 6) { setError('Password must be at least 6 characters.'); return }
    setError('')
    setStep(2)
  }

  const handleSignUp = async () => {
    if (!displayName || !username) { setError('Please fill in all fields.'); return }
    setLoading(true)
    setError('')
    const { data, error: signUpError } = await supabase.auth.signUp({ email, password })
    if (signUpError) { setError(signUpError.message); setLoading(false); return }
    if (data.user) {
      await supabase.from('profiles').insert([{
        id: data.user.id,
        username: username.toLowerCase(),
        display_name: displayName,
        user_type: userType,
      }])
    }
    setSuccess(true)
    setLoading(false)
  }

  if (success) {
    return (
      <div className="auth-page">
        <div className="auth-card">
          <div className="auth-success-icon">📬</div>
          <h2 className="auth-title">Check your email!</h2>
          <p className="auth-sub">We sent a confirmation link to <strong>{email}</strong>. Click it to activate your account.</p>
          <Link href="/login" className="auth-btn-primary" style={{ display: 'block', textAlign: 'center', textDecoration: 'none', marginTop: '1.5rem' }}>Go to Login</Link>
        </div>
      </div>
    )
  }

  return (
    <div className="auth-page">
      <div className="auth-card">
        <Link href="/">
          <img src="/logo.png" alt="The Writers Room" style={{ height: '80px', width: 'auto', display: 'block', margin: '0 auto 1.5rem' }} />
        </Link>

        <div className="auth-steps">
          <div className={step >= 1 ? 'auth-step active' : 'auth-step'}>1</div>
          <div className="auth-step-line" />
          <div className={step >= 2 ? 'auth-step active' : 'auth-step'}>2</div>
        </div>

        {step === 1 && (
          <div>
            <h2 className="auth-title">Create your account</h2>
            <p className="auth-sub">Join The Writers Room and start your journey.</p>
            {error && <div className="auth-error">{error}</div>}
            <div className="auth-field">
              <label>Email Address</label>
              <input type="email" placeholder="you@example.com" value={email} onChange={e => setEmail(e.target.value)} />
            </div>
            <div className="auth-field">
              <label>Password</label>
              <input type="password" placeholder="At least 6 characters" value={password} onChange={e => setPassword(e.target.value)} />
            </div>
            <div className="auth-field">
              <label>Confirm Password</label>
              <input type="password" placeholder="Repeat your password" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} />
            </div>
            <button className="auth-btn-primary" onClick={handleStep1}>Continue</button>
            <p className="auth-switch">Already have an account? <Link href="/login">Log in</Link></p>
          </div>
        )}

        {step === 2 && (
          <div>
            <h2 className="auth-title">Set up your profile</h2>
            <p className="auth-sub">Tell us a little about yourself.</p>
            {error && <div className="auth-error">{error}</div>}
            <div className="auth-field">
              <label>Display Name</label>
              <input type="text" placeholder="Your full name or pen name" value={displayName} onChange={e => setDisplayName(e.target.value)} />
            </div>
            <div className="auth-field">
              <label>Username</label>
              <div className="auth-input-prefix">
                <span>@</span>
                <input type="text" placeholder="yourhandle" value={username} onChange={e => setUsername(e.target.value.toLowerCase().replace(/\s/g, ''))} />
              </div>
            </div>
            <div className="auth-field">
              <label>I am joining as a...</label>
              <div className="auth-type-toggle">
                <button className={userType === 'writer' ? 'auth-type-btn selected' : 'auth-type-btn'} onClick={() => setUserType('writer')}>Writer</button>
                <button className={userType === 'reader' ? 'auth-type-btn selected' : 'auth-type-btn'} onClick={() => setUserType('reader')}>Reader</button>
              </div>
            </div>
            <button className="auth-btn-primary" onClick={handleSignUp} disabled={loading}>{loading ? 'Creating account...' : 'Create Account'}</button>
            <button className="auth-btn-back" onClick={() => setStep(1)}>Back</button>
          </div>
        )}
      </div>
    </div>
  )
}
