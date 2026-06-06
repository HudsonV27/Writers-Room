'use client'

import { useState } from 'react'

export default function WaitlistForm() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error' | 'duplicate'>('idle')

  const handleSubmit = async () => {
    if (!email || !email.includes('@')) return
    setStatus('loading')

    const res = await fetch('/api/waitlist', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email })
    })

    if (res.ok) {
      setStatus('success')
      setEmail('')
    } else if (res.status === 409) {
      setStatus('duplicate')
    } else {
      setStatus('error')
    }
  }

  return (
    <div>
      {status === 'success' ? (
        <div style={{
          background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)',
          borderRadius: '12px', padding: '14px 20px', color: 'white',
          fontSize: '14px', fontWeight: 500, textAlign: 'center'
        }}>
          🎉 You're on the list! We'll notify you when we launch.
        </div>
      ) : (
        <div>
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            <input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={e => setEmail(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && handleSubmit()}
              style={{
                flex: 1, minWidth: '220px', padding: '12px 18px',
                borderRadius: '100px', border: '2px solid rgba(255,255,255,0.2)',
                background: 'rgba(255,255,255,0.08)', color: 'white',
                fontFamily: 'var(--font-body)', fontSize: '14px', outline: 'none',
              }}
            />
            <button
              onClick={handleSubmit}
              disabled={status === 'loading'}
              style={{
                padding: '12px 26px', borderRadius: '100px', border: 'none',
                background: '#c9a227', color: '#141414',
                fontFamily: 'var(--font-body)', fontSize: '14px', fontWeight: 700,
                cursor: status === 'loading' ? 'not-allowed' : 'pointer',
                opacity: status === 'loading' ? 0.7 : 1
              }}
            >
              {status === 'loading' ? 'Joining...' : 'Join Waitlist'}
            </button>
          </div>
          {status === 'duplicate' && (
            <p style={{ color: '#e8c547', fontSize: '13px', marginTop: '8px', paddingLeft: '8px' }}>
              You're already on the waitlist! 👀
            </p>
          )}
          {status === 'error' && (
            <p style={{ color: '#ff6b6b', fontSize: '13px', marginTop: '8px', paddingLeft: '8px' }}>
              Something went wrong. Please try again.
            </p>
          )}
        </div>
      )}
    </div>
  )
}