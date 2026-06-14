'use client'

import { useState } from 'react'
import { supabase } from '@/lib/supabase'
import { useRouter } from 'next/navigation'

const GENRES = [
  'Fantasy', 'Science Fiction', 'Romance', 'Thriller', 'Mystery',
  'Horror', 'Historical Fiction', 'Young Adult', 'Literary Fiction',
  'Adventure', 'Christian Fiction', 'Short Stories'
]

export default function ProfileSetup() {
  const [bio, setBio] = useState('')
  const [website, setWebsite] = useState('')
  const [twitter, setTwitter] = useState('')
  const [instagram, setInstagram] = useState('')
  const [selectedGenres, setSelectedGenres] = useState<string[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const router = useRouter()

  const toggleGenre = (genre: string) => {
    setSelectedGenres(prev =>
      prev.includes(genre) ? prev.filter(g => g !== genre) : [...prev, genre]
    )
  }

  const handleSave = async () => {
    setLoading(true)
    setError('')
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) { router.push('/login'); return }
    const { error: updateError } = await supabase
      .from('profiles')
      .update({
        bio,
        website,
        favorite_genres: selectedGenres,
        social_twitter: twitter,
        social_instagram: instagram,
      })
      .eq('id', user.id)
    if (updateError) { setError(updateError.message); setLoading(false); return }
    router.push('/')
  }

  const handleSkip = () => {
    router.push('/')
  }

  return (
    <div className="auth-page">
      <div className="auth-card" style={{maxWidth: '520px'}}>
        <div className="auth-success-icon">✍️</div>
        <h2 className="auth-title">Complete Your Profile</h2>
        <p className="auth-sub">Help readers and writers get to know you. You can always update this later.</p>

        {error && <div className="auth-error">{error}</div>}

        <div className="auth-field">
          <label>Bio</label>
          <textarea
            placeholder="Tell us about yourself and your writing..."
            value={bio}
            onChange={e => setBio(e.target.value)}
            rows={3}
            style={{width: '100%', padding: '10px 14px', border: '1.5px solid #e8e8e4', borderRadius: '10px', fontSize: '14px', color: '#141414', outline: 'none', fontFamily: 'var(--font-body)', resize: 'vertical'}}
          />
        </div>

        <div className="auth-field">
          <label>Favorite Genres</label>
          <div style={{display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '4px'}}>
            {GENRES.map(genre => (
              <button
                key={genre}
                onClick={() => toggleGenre(genre)}
                style={{
                  padding: '6px 14px', borderRadius: '100px', fontSize: '12px', fontWeight: 600,
                  cursor: 'pointer', transition: 'all 0.15s',
                  background: selectedGenres.includes(genre) ? '#1a3a8f' : 'white',
                  color: selectedGenres.includes(genre) ? 'white' : '#6b6b6b',
                  border: selectedGenres.includes(genre) ? '2px solid #1a3a8f' : '2px solid #e8e8e4',
                }}
              >{genre}</button>
            ))}
          </div>
        </div>

        <div className="auth-field">
          <label>Website</label>
          <input type="text" placeholder="https://yourwebsite.com" value={website} onChange={e => setWebsite(e.target.value)} />
        </div>

        <div className="auth-field">
          <label>Twitter / X</label>
          <div className="auth-input-prefix">
            <span>@</span>
            <input type="text" placeholder="yourhandle" value={twitter} onChange={e => setTwitter(e.target.value)} />
          </div>
        </div>

        <div className="auth-field">
          <label>Instagram</label>
          <div className="auth-input-prefix">
            <span>@</span>
            <input type="text" placeholder="yourhandle" value={instagram} onChange={e => setInstagram(e.target.value)} />
          </div>
        </div>

        <button className="auth-btn-primary" onClick={handleSave} disabled={loading}>
          {loading ? 'Saving...' : 'Save Profile'}
        </button>
        <button className="auth-btn-back" onClick={handleSkip}>
          Skip for now
        </button>
      </div>
    </div>
  )
}
