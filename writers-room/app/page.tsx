export default function Home() {
  return (
    <>
      {/* NAV */}
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '0 2rem', height: '64px',
        background: 'rgba(250,250,247,0.92)', backdropFilter: 'blur(12px)',
        borderBottom: '1px solid rgba(26,58,143,0.08)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{
            width: '36px', height: '36px', borderRadius: '50%',
            background: 'linear-gradient(135deg, #1a3a8f, #c9a227)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: 'white', fontWeight: 600, fontSize: '13px', cursor: 'pointer'
          }}>JD</div>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.15rem', fontWeight: 700, color: '#0d2260' }}>
            The <span style={{ color: '#c9a227' }}>Writer's</span> Room
          </div>
        </div>
        <div style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
          <div style={{
            display: 'flex', alignItems: 'center', gap: '8px',
            background: 'white', border: '1.5px solid #e8e8e4',
            borderRadius: '100px', padding: '6px 16px', width: '280px'
          }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#6b6b6b" strokeWidth="2">
              <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
            </svg>
            <input type="text" placeholder="Search stories, authors, genres..." style={{
              border: 'none', outline: 'none', background: 'transparent',
              fontFamily: 'var(--font-body)', fontSize: '13px', width: '100%', color: '#141414'
            }} />
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          {['Discover', 'Writers', 'My Stories'].map(link => (
            <button key={link} style={{
              background: 'none', border: 'none', cursor: 'pointer', padding: '6px 14px',
              fontFamily: 'var(--font-body)', fontSize: '13px', fontWeight: 500, color: '#6b6b6b',
              borderRadius: '8px'
            }}>{link}</button>
          ))}
          <button style={{
            background: '#1a3a8f', border: 'none', cursor: 'pointer', padding: '7px 18px',
            fontFamily: 'var(--font-body)', fontSize: '13px', fontWeight: 600, color: 'white',
            borderRadius: '100px'
          }}>Start Writing</button>
        </div>
      </nav>

      {/* HERO */}
      <section style={{
        minHeight: '100vh', display: 'flex', alignItems: 'center',
        padding: '80px 2rem 4rem',
        background: 'radial-gradient(ellipse 80% 60% at 60% 40%, rgba(26,58,143,0.06) 0%, transparent 70%)'
      }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center', maxWidth: '1100px', margin: '0 auto', width: '100%' }}>
          <div>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '6px',
              background: 'rgba(26,58,143,0.07)', border: '1px solid rgba(26,58,143,0.15)',
              borderRadius: '100px', padding: '4px 14px',
              fontSize: '12px', fontWeight: 600, color: '#1a3a8f',
              letterSpacing: '0.04em', textTransform: 'uppercase', marginBottom: '20px'
            }}>✦ For Aspiring Authors</div>
            <h1 style={{
              fontFamily: 'var(--font-display)', fontSize: 'clamp(2.4rem, 5vw, 3.6rem)',
              fontWeight: 700, lineHeight: 1.1, letterSpacing: '-0.02em',
              color: '#141414', marginBottom: '1.2rem'
            }}>
              Your <em style={{ fontStyle: 'italic', color: '#1a3a8f' }}>Next Chapter</em><br />Starts Here.
            </h1>
            <p style={{ fontSize: '1.05rem', lineHeight: 1.7, color: '#6b6b6b', maxWidth: '440px', marginBottom: '2rem' }}>
              Publish your stories. Receive meaningful feedback from real readers. Build an audience and grow toward becoming a professional author.
            </p>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <button style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                padding: '12px 26px', borderRadius: '100px',
                fontFamily: 'var(--font-body)', fontSize: '14px', fontWeight: 600,
                cursor: 'pointer', background: '#1a3a8f', color: 'white', border: '2px solid #1a3a8f'
              }}>Start Writing</button>
              <button style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                padding: '12px 26px', borderRadius: '100px',
                fontFamily: 'var(--font-body)', fontSize: '14px', fontWeight: 600,
                cursor: 'pointer', background: 'transparent', color: '#1a3a8f', border: '2px solid #1a3a8f'
              }}>Explore Stories</button>
            </div>
            <div style={{ display: 'flex', gap: '2rem', marginTop: '2.5rem', paddingTop: '2rem', borderTop: '1px solid #e8e8e4' }}>
              {[
                { num: '12,400+', label: 'Writers Registered' },
                { num: '38,900+', label: 'Stories Published' },
                { num: '94,200+', label: 'Reviews Written' },
              ].map(stat => (
                <div key={stat.label}>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 700, color: '#0d2260' }}>{stat.num}</div>
                  <div style={{ fontSize: '12px', color: '#6b6b6b', fontWeight: 500, marginTop: '2px' }}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div style={{ position: 'relative', height: '420px' }}>
            {[
              { emoji: '📖', title: 'The Forgotten Kingdom', author: '@elara_writes', genre: 'Fantasy', bg: 'linear-gradient(135deg, #e8f0fe, #c7d7fd)', style: { width: '260px', top: '20px', left: '10px', transform: 'rotate(-3deg)', zIndex: 1 } },
              { emoji: '🌙', title: 'Midnight Letters', author: '@thomas_c', genre: 'Romance', bg: 'linear-gradient(135deg, #fdf6e3, #fbecc6)', style: { width: '240px', top: '60px', right: '0', transform: 'rotate(2deg)', zIndex: 2 } },
              { emoji: '🌿', title: 'The Last Garden', author: '@grace_pen', genre: 'Sci-Fi', bg: 'linear-gradient(135deg, #f0fff4, #c6f6d5)', style: { width: '220px', bottom: '20px', left: '60px', transform: 'rotate(-1deg)', zIndex: 3 } },
            ].map(card => (
              <div key={card.title} style={{
                position: 'absolute', background: 'white', borderRadius: '16px',
                border: '1px solid rgba(0,0,0,0.07)', overflow: 'hidden',
                boxShadow: '0 4px 20px rgba(0,0,0,0.08)', ...card.style
              }}>
                <div style={{ height: '120px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2.5rem', background: card.bg }}>{card.emoji}</div>
                <div style={{ padding: '12px 14px' }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '14px', fontWeight: 700, marginBottom: '4px' }}>{card.title}</div>
                  <div style={{ fontSize: '11px', color: '#6b6b6b', marginBottom: '8px' }}>by {card.author}</div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: '10px', fontWeight: 600, padding: '3px 8px', borderRadius: '100px', background: '#e8f0fe', color: '#1a3a8f' }}>{card.genre}</span>
                    <span style={{ color: '#c9a227', fontSize: '11px' }}>★★★★★</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRENDING */}
      <div style={{ padding: '5rem 2rem', maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: '2rem' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', fontWeight: 700 }}>
            Trending <span style={{ color: '#1a3a8f', fontStyle: 'italic' }}>This Week</span>
          </h2>
          <a href="#" style={{ fontSize: '13px', color: '#1a3a8f', fontWeight: 600, textDecoration: 'none' }}>View all →</a>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '1.25rem' }}>
          {[
            { emoji: '🏰', title: 'Echoes of the Throne', author: '@marlowe_ink', genre: 'Fantasy', reads: '24.1k', badge: '🔥 Hot', bg: '#e8f0fe', color: '#1a3a8f' },
            { emoji: '⚡', title: 'Static Summer', author: '@nova_scribe', genre: 'YA', reads: '18.7k', badge: 'NEW', bg: '#fdf6e3', color: '#8a6500' },
            { emoji: '🌊', title: 'Deep Below Zero', author: '@celius_writes', genre: 'Thriller', reads: '15.3k', badge: '📌 Top', bg: '#e0f7f4', color: '#0e6e63' },
            { emoji: '💌', title: 'Letters to Nobody', author: '@penelope_r', genre: 'Romance', reads: '12.8k', badge: '❤️ Loved', bg: '#fde8f0', color: '#8a1245' },
            { emoji: '🚀', title: 'Orbital Drift', author: '@axion_words', genre: 'Sci-Fi', reads: '9.4k', badge: '⭐ Rising', bg: '#f0f0ff', color: '#3730a3' },
          ].map(story => (
            <div key={story.title} style={{
              background: 'white', borderRadius: '14px', overflow: 'hidden',
              border: '1px solid rgba(0,0,0,0.07)', cursor: 'pointer'
            }}>
              <div style={{ height: '110px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2.2rem', background: `${story.bg}66`, position: 'relative' }}>
                {story.emoji}
                <span style={{ position: 'absolute', top: '8px', right: '8px', fontSize: '10px', fontWeight: 700, padding: '3px 8px', borderRadius: '100px', background: 'rgba(0,0,0,0.5)', color: 'white' }}>{story.badge}</span>
              </div>
              <div style={{ padding: '10px 12px 12px' }}>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '13px', fontWeight: 700, marginBottom: '2px', lineHeight: 1.3 }}>{story.title}</div>
                <div style={{ fontSize: '11px', color: '#6b6b6b', marginBottom: '6px' }}>{story.author}</div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span style={{ fontSize: '10px', fontWeight: 600, padding: '2px 8px', borderRadius: '100px', background: story.bg, color: story.color }}>{story.genre}</span>
                  <span style={{ fontSize: '10px', color: '#6b6b6b' }}>👁 {story.reads}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FEEDBACK BANNER */}
      <div style={{ padding: '0 2rem 5rem', maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{
          background: '#0d2260', color: 'white', borderRadius: '24px',
          padding: '3.5rem', display: 'grid', gridTemplateColumns: '1fr auto', gap: '2rem', alignItems: 'center'
        }}>
          <div>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', fontWeight: 700, marginBottom: '0.6rem', lineHeight: 1.2 }}>
              Feedback That Actually<br />Makes You Better
            </h2>
            <p style={{ fontSize: '0.95rem', opacity: 0.8, lineHeight: 1.6, maxWidth: '480px' }}>
              Unlike other platforms, The Writer's Room was built around meaningful critique. Every story gets structured, thoughtful feedback — not just comments.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '1.2rem' }}>
              {['Character Depth', 'Plot Structure', 'Dialogue', 'Worldbuilding', 'Pacing', 'Grammar'].map(f => (
                <span key={f} style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: '100px', padding: '5px 14px', fontSize: '12px', fontWeight: 500 }}>{f}</span>
              ))}
            </div>
          </div>
          <button style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            padding: '12px 26px', borderRadius: '100px', flexShrink: 0,
            fontFamily: 'var(--font-body)', fontSize: '14px', fontWeight: 600,
            cursor: 'pointer', background: '#c9a227', color: '#141414', border: '2px solid #c9a227'
          }}>Start Getting Feedback</button>
        </div>
      </div>

      {/* FOOTER */}
      <footer style={{ background: '#141414', color: 'rgba(255,255,255,0.7)', padding: '3rem 2rem 2rem' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr 1fr', gap: '2rem', marginBottom: '2rem' }}>
            <div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', color: 'white', fontWeight: 700, marginBottom: '8px' }}>The Writer's Room</div>
              <p style={{ fontSize: '12px', lineHeight: 1.6, opacity: 0.7, maxWidth: '220px' }}>Your next chapter starts here. A platform built for aspiring authors.</p>
            </div>
            {[
              { title: 'Platform', links: ['Discover Stories', 'Featured Writers', 'Genres', 'Community'] },
              { title: 'Writers', links: ['Start Writing', 'Creator Dashboard', 'Upload a Story', 'Feedback Guide'] },
              { title: 'Company', links: ['About', 'Blog', 'Privacy', 'Terms'] },
            ].map(col => (
              <div key={col.title}>
                <h4 style={{ color: 'white', fontSize: '12px', fontWeight: 700, letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '12px' }}>{col.title}</h4>
                {col.links.map(link => (
                  <a key={link} href="#" style={{ display: 'block', fontSize: '13px', color: 'rgba(255,255,255,0.6)', textDecoration: 'none', marginBottom: '8px' }}>{link}</a>
                ))}
              </div>
            ))}
          </div>
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <p style={{ fontSize: '12px', opacity: 0.5 }}>© 2025 The Writer's Room. All rights reserved.</p>
            <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.3)' }}>"Your Next Chapter Starts Here"</p>
          </div>
        </div>
      </footer>
    </>
  );
}