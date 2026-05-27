import Link from 'next/link';
import { cookies } from 'next/headers';
import LogoutButton from '@/components/LogoutButton';

export const dynamic = 'force-dynamic';

export default async function Home() {
  const cookieStore = await cookies();
  const token = cookieStore.get('token');
  const isLoggedIn = !!token;

  return (
    <main style={{ minHeight: '100vh', background: 'var(--background)' }}>
      {/* Navbar */}
      <header className="glass-panel" style={{ padding: '1rem 2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'fixed', width: '100%', top: 0, zIndex: 100 }}>
        <Link href="/">
          <h2 style={{ color: 'var(--primary)', margin: 0, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
             <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
             NestFinder
          </h2>
        </Link>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <Link href="/list-property" className="btn" style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}>List Property</Link>
          {isLoggedIn ? (
            <LogoutButton />
          ) : (
            <Link href="/login" className="btn btn-primary">Login / Sign up</Link>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section style={{ position: 'relative', paddingTop: '100px', paddingBottom: '4rem', display: 'flex', alignItems: 'center', minHeight: '80vh', overflow: 'hidden' }}>
        {/* Background Image Grid */}
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', display: 'flex', opacity: 0.9, zIndex: 0 }}>
            <div style={{ flex: 1, background: 'url(https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop&q=80) center/cover' }}></div>
            <div style={{ flex: 1, background: 'url(https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&auto=format&fit=crop&q=80) center/cover', display: 'flex', flexDirection: 'column' }}>
                <div style={{ flex: 1, background: 'url(https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&auto=format&fit=crop&q=80) center/cover' }}></div>
                <div style={{ flex: 1, background: 'url(https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&auto=format&fit=crop&q=80) center/cover' }}></div>
            </div>
        </div>
        
        {/* Gradient Overlay for Readability */}
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(to right, rgba(15, 23, 42, 0.9) 0%, rgba(15, 23, 42, 0.4) 100%)', zIndex: 1 }}></div>

        {/* Hero Content */}
        <div className="container" style={{ position: 'relative', zIndex: 2, color: 'white' }}>
          <div style={{ maxWidth: '700px' }}>
            <h1 style={{ fontSize: '4rem', lineHeight: '1.1', marginBottom: '1.5rem', fontWeight: 700 }}>
              Find your perfect home without the hassle.
            </h1>
            <p style={{ fontSize: '1.25rem', marginBottom: '2.5rem', opacity: 0.9, lineHeight: '1.6' }}>
              NestFinder is a smart real estate platform powered by AI. Discover properties, book site visits, and handle agreements—all in one seamless experience.
            </p>
            
            <div className="glass-panel" style={{ padding: '1rem', borderRadius: 'var(--radius-lg)', display: 'flex', gap: '1rem', background: 'rgba(255, 255, 255, 0.1)', border: '1px solid rgba(255,255,255,0.2)' }}>
                <div style={{ flex: 1, display: 'flex', gap: '0.5rem' }}>
                    <select style={{ flex: 1, padding: '1rem', borderRadius: 'var(--radius-md)', border: 'none', outline: 'none', background: 'white', color: 'black' }}>
                        <option>Lucknow</option>
                        <option>Delhi</option>
                        <option>Mumbai</option>
                    </select>
                    <input type="text" placeholder="Search locality or landmark..." style={{ flex: 2, padding: '1rem', borderRadius: 'var(--radius-md)', border: 'none', outline: 'none', color: 'black' }} />
                </div>
                <Link href="/explore" className="btn btn-primary" style={{ padding: '0 2rem' }}>Search</Link>
            </div>

            <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', alignItems: 'center' }}>
                <span style={{ opacity: 0.8 }}>Not sure where to start?</span>
                <Link href="/ai-quiz" className="btn" style={{ background: 'white', color: 'var(--primary)' }}>
                    ✨ Try AI Matchmaker
                </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="container" style={{ padding: '5rem 1rem' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '3rem', textAlign: 'center' }}>Why choose NestFinder?</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
              <div className="card" style={{ padding: '2rem', textAlign: 'center' }}>
                  <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🤖</div>
                  <h3>AI-Powered Matches</h3>
                  <p style={{ color: 'var(--foreground-muted)', marginTop: '0.5rem' }}>Take our quiz and let AI find properties that perfectly fit your lifestyle and budget.</p>
              </div>
              <div className="card" style={{ padding: '2rem', textAlign: 'center' }}>
                  <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>✅</div>
                  <h3>Verified Listings</h3>
                  <p style={{ color: 'var(--foreground-muted)', marginTop: '0.5rem' }}>Every property is verified by our admins to ensure a safe and trustworthy community.</p>
              </div>
              <div className="card" style={{ padding: '2rem', textAlign: 'center' }}>
                  <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📄</div>
                  <h3>Instant Agreements</h3>
                  <p style={{ color: 'var(--foreground-muted)', marginTop: '0.5rem' }}>Pay the token amount online and generate your rental agreement instantly via PDF.</p>
              </div>
          </div>
      </section>
    </main>
  );
}
