import WaitlistForm from '@/components/WaitlistForm'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      {/* NAV */}
      <nav className="nav">
        <div className="nav-logo">
          <img src="/logo.png" alt="The Writer's Room" />
        </div>
        <div className="nav-search">
          <div className="nav-search-box">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#6b6b6b" strokeWidth="2">
              <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
            </svg>
            <input type="text" placeholder="Search stories, authors, genres..." />
          </div>
        </div>
        <div className="nav-links">
          {['Discover', 'Writers', 'Genres'].map(link => (
            <button key={link} className="nav-link-btn">{link}</button>
          ))}
          <Link href="/login" className="nav-link-btn" style={{textDecoration: 'none'}}>Log In</Link>
          <Link href="/signup" className="nav-cta" style={{textDecoration: 'none', padding: '7px 18px', borderRadius: '100px', background: '#1a3a8f', color: 'white', fontSize: '13px', fontWeight: 600}}>Sign Up</Link>
        </div>
      </nav>

      {/* COMING SOON BANNER */}
      <div className="banner">
        🚀 The Writer's Room is launching soon — <span>be one of the first authors to publish.</span>
      </div>

      {/* HERO */}
      <section className="hero">
        <div className="hero-grid">
          <div>
            <div className="hero-eyebrow">✦ Coming Soon</div>
            <h1>
              Your <em>Next Chapter</em><br />Starts Here.
            </h1>
            <p className="hero-sub">
              The Writer's Room is a new platform for aspiring authors to publish stories, receive meaningful feedback, build an audience, and grow toward becoming a professional writer.
            </p>
            <WaitlistForm />
            <div className="hero-stats">
              {[
                { num: '0', label: 'Writers Registered' },
                { num: '0', label: 'Stories Published' },
                { num: '0', label: 'Reviews Written' },
              ].map(stat => (
                <div key={stat.label}>
                  <div className="stat-num">{stat.num}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* FEATURE CARDS */}
          <div className="feature-cards">
            {[
              { icon: '📖', title: 'Publish Your Stories', desc: 'Upload DOCX, PDF, or TXT files. We handle the formatting so you can focus on writing.' },
              { icon: '💬', title: 'Get Real Feedback', desc: 'Structured critiques on characters, plot, dialogue, worldbuilding, pacing, and more.' },
              { icon: '📊', title: 'Track Your Growth', desc: 'See exactly where readers stop reading with chapter-by-chapter retention analytics.' },
              { icon: '🌟', title: 'Build an Audience', desc: 'Gain followers, earn achievements, and grow your reputation as an author.' },
            ].map(feature => (
              <div key={feature.title} className="feature-card">
                <span className="feature-card-icon">{feature.icon}</span>
                <div>
                  <div className="feature-card-title">{feature.title}</div>
                  <div className="feature-card-desc">{feature.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EMPTY STATE — STORIES */}
      <div className="section">
        <div className="section-header">
          <h2 className="section-title">Trending <span>Stories</span></h2>
        </div>
        <div className="empty-state">
          <div className="empty-state-icon">✍️</div>
          <h3>No stories yet — be the first!</h3>
          <p>The Writer's Room is just getting started. Join the waitlist and be among the first authors to publish on the platform.</p>
          <button className="empty-state-btn">Join the Waitlist</button>
        </div>
      </div>

      {/* EMPTY STATE — WRITERS */}
      <div className="section" style={{paddingTop: 0}}>
        <div className="section-header">
          <h2 className="section-title">Featured <span>Writers</span></h2>
        </div>
        <div className="empty-state">
          <div className="empty-state-icon">🌟</div>
          <h3>Your name could be here.</h3>
          <p>Featured writers are chosen from our community. Sign up, publish your work, and earn your spot.</p>
          <Link href="/signup" className="empty-state-btn" style={{textDecoration: 'none', display: 'inline-block'}}>Become a Writer</Link>
        </div>
      </div>

      {/* FEEDBACK BANNER */}
      <div className="feedback-section">
        <div className="feedback-banner">
          <div>
            <h2>Feedback That Actually<br />Makes You Better</h2>
            <p>Unlike other platforms, The Writer's Room was built around meaningful critique. Every story gets structured, thoughtful feedback — not just comments.</p>
            <div className="feedback-tags">
              {['Character Depth', 'Plot Structure', 'Dialogue', 'Worldbuilding', 'Pacing', 'Grammar'].map(f => (
                <span key={f} className="feedback-tag">{f}</span>
              ))}
            </div>
          </div>
          <div className="feedback-right">
            <p>Join the waitlist and be notified the moment we launch.</p>
            <WaitlistForm />
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <footer>
        <div className="footer-inner">
          <div className="footer-grid">
            <div className="footer-brand">
              <div className="footer-brand-name">The Writer's Room</div>
              <p>Your next chapter starts here. A platform built for aspiring authors to publish, grow, and improve their craft.</p>
            </div>
            {[
              { title: 'Platform', links: ['Discover Stories', 'Featured Writers', 'Genres', 'Community'] },
              { title: 'Writers', links: ['Start Writing', 'Creator Dashboard', 'Upload a Story', 'Feedback Guide'] },
              { title: 'Company', links: ['About', 'Blog', 'Privacy', 'Terms'] },
            ].map(col => (
              <div key={col.title} className="footer-col">
                <h4>{col.title}</h4>
                {col.links.map(link => (
                  <a key={link} href="#">{link}</a>
                ))}
              </div>
            ))}
          </div>
          <div className="footer-bottom">
            <p>© 2025 The Writer's Room. All rights reserved.</p>
            <p className="footer-motto">"Your Next Chapter Starts Here"</p>
          </div>
        </div>
      </footer>
    </>
  )
}