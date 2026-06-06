import WaitlistForm from '@/components/WaitlistForm'

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
          }}>✦</div>
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
          {['Discover', 'Writers', 'Genres'].map(link => (
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
          }}>Join the Waitlist</button>
        </div>
      </nav>

      {/* COMING SOON BANNER */}
      <div style={{
        background: 'linear-gradient(90deg, #0d2260, #1a3a8f)',
        color: 'white', textAlign: 'center', padding: '10px',
        fontSize: '13px', fontWeight: 500, marginTop: '64px'
      }}>
        🚀 The Writer's Room is launching soon — <span style={{ color: '#e8c547', fontWeight: 700 }}>be one of the first authors to publish.</span>
      </div>

      {/* HERO */}
      <section style={{
        minHeight: 'calc(100vh - 64px)', display: 'flex', alignItems: 'center',
        padding: '4rem 2rem',
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
            }}>✦ Coming Soon</div>
            <h1 style={{
              fontFamily: 'var(--font-display)', fontSize: 'clamp(2.4rem, 5vw, 3.6rem)',
              fontWeight: 700, lineHeight: 1.1, letterSpacing: '-0.02em',
              color: '#141414', marginBottom: '1.2rem'
            }}>
              Your <em style={{ fontStyle: 'italic', color: '#1a3a8f' }}>Next Chapter</em><br />Starts Here.
            </h1>
            <p style={{ fontSize: '1.05rem', lineHeight: 1.7, color: '#6b6b6b', maxWidth: '440px', marginBottom: '2rem' }}>
              The Writer's Room is a new platform for aspiring authors to publish stories, receive meaningful feedback, build an audience, and grow toward becoming a professional writer.
            </p>
            <WaitlistForm />
            <div style={{ display: 'flex', gap: '2rem', marginTop: '2.5rem', paddingTop: '2rem', borderTop: '1px solid #e8e8e4' }}>
              {[
                { num: '0', label: 'Writers Registered' },
                { num: '0', label: 'Stories Published' },
                { num: '0', label: 'Reviews Written' },
              ].map(stat => (
                <div key={stat.label}>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 700, color: '#0d2260' }}>{stat.num}</div>
                  <div style={{ fontSize: '12px', color: '#6b6b6b', fontWeight: 500, marginTop: '2px' }}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* FEATURE CARDS */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {[
              { icon: '📖', title: 'Publish Your Stories', desc: 'Upload DOCX, PDF, or TXT files. We handle the formatting so you can focus on writing.' },
              { icon: '💬', title: 'Get Real Feedback', desc: 'Structured critiques on characters, plot, dialogue, worldbuilding, pacing, and more.' },
              { icon: '📊', title: 'Track Your Growth', desc: 'See exactly where readers stop reading with chapter-by-chapter retention analytics.' },
              { icon: '🌟', title: 'Build an Audience', desc: 'Gain followers, earn achievements, and grow your reputation as an author.' },
            ].map(feature => (
              <div key={feature.title} style={{
                display: 'flex', alignItems: 'flex-start', gap: '14px',
                background: 'white', borderRadius: '14px', padding: '1rem 1.25rem',
                border: '1px solid rgba(0,0,0,0.07)',
              }}>
                <span style={{ fontSize: '1.5rem', flexShrink: 0 }}>{feature.icon}</span>
                <div>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '14px', fontWeight: 700, marginBottom: '3px' }}>{feature.title}</div>
                  <div style={{ fontSize: '13px', color: '#6b6b6b', lineHeight: 1.5 }}>{feature.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EMPTY STATE — STORIES */}
      <div style={{ padding: '4rem 2rem', maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: '2rem' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', fontWeight: 700 }}>
            Trending <span style={{ color: '#1a3a8f', fontStyle: 'italic' }}>Stories</span>
          </h2>
        </div>
        <div style={{
          background: 'white', borderRadius: '20px', border: '2px dashed #e8e8e4',
          padding: '4rem 2rem', textAlign: 'center'
        }}>
          <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>✍️</div>
          <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', fontWeight: 700, marginBottom: '0.5rem', color: '#0d2260' }}>No stories yet — be the first!</h3>
          <p style={{ fontSize: '14px', color: '#6b6b6b', maxWidth: '400px', margin: '0 auto 1.5rem', lineHeight: 1.6 }}>
            The Writer's Room is just getting started. Join the waitlist and be among the first authors to publish on the platform.
          </p>
          <button style={{
            padding: '10px 24px', borderRadius: '100px', border: 'none',
            background: '#1a3a8f', color: 'white', fontFamily: 'var(--font-body)',
            fontSize: '13px', fontWeight: 600, cursor: 'pointer'
          }}>Join the Waitlist</button>
        </div>
      </div>

      {/* EMPTY STATE — WRITERS */}
      <div style={{ padding: '0 2rem 4rem', maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: '2rem' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', fontWeight: 700 }}>
            Featured <span style={{ color: '#1a3a8f', fontStyle: 'italic' }}>Writers</span>
          </h2>
        </div>
        <div style={{
          background: 'white', borderRadius: '20px', border: '2px dashed #e8e8e4',
          padding: '4rem 2rem', textAlign: 'center'
        }}>
          <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🌟</div>
          <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', fontWeight: 700, marginBottom: '0.5rem', color: '#0d2260' }}>Your name could be here.</h3>
          <p style={{ fontSize: '14px', color: '#6b6b6b', maxWidth: '400px', margin: '0 auto 1.5rem', lineHeight: 1.6 }}>
            Featured writers are chosen from our community. Sign up, publish your work, and earn your spot.
          </p>
          <button style={{
            padding: '10px 24px', borderRadius: '100px', border: 'none',
            background: '#1a3a8f', color: 'white', fontFamily: 'var(--font-body)',
            fontSize: '13px', fontWeight: 600, cursor: 'pointer'
          }}>Become a Writer</button>
        </div>
      </div>

      {/* FEEDBACK BANNER */}
      <div style={{ padding: '0 2rem 5rem', maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{
          background: '#0d2260', color: 'white', borderRadius: '24px',
          padding: '3.5rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', alignItems: 'center'
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
          <div>
            <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.7)', marginBottom: '1rem', lineHeight: 1.6 }}>
              Join the waitlist and be notified the moment we launch.
            </p>
            <WaitlistForm />
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <footer style={{ background: '#141414', color: 'rgba(255,255,255,0.7)', padding: '3rem 2rem 2rem' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr 1fr', gap: '2rem', marginBottom: '2rem' }}>
            <div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', color: 'white', fontWeight: 700, marginBottom: '8px' }}>The Writer's Room</div>
              <p style={{ fontSize: '12px', lineHeight: 1.6, opacity: 0.7, maxWidth: '220px' }}>Your next chapter starts here. A platform built for aspiring authors to publish, grow, and improve their craft.</p>
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
  )
}