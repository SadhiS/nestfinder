'use client';

import { useState, use } from 'react';
import Link from 'next/link';

export default function PropertyDetails({ params }) {
  const unwrappedParams = use(params);
  const [booked, setBooked] = useState(false);

  // Mock data for property details
  const allProperties = [
    { id: '1', title: 'Spacious 2BHK in Gomti Nagar', price: 15000, bhk: 2, type: 'RENT', lat: 26.8467, lng: 80.9462, locality: 'Gomti Nagar, Lucknow', city: 'Lucknow' },
    { id: '2', title: 'Modern 3BHK Flat', price: 25000, bhk: 3, type: 'RENT', lat: 26.86, lng: 80.95, locality: 'Indira Nagar, Lucknow', city: 'Lucknow' },
    { id: '3', title: 'Luxury Villa with Pool', price: 50000, bhk: 4, type: 'RENT', lat: 26.83, lng: 80.93, locality: 'Hazratganj, Lucknow', city: 'Lucknow' },
    { id: '4', title: 'Sea View Apartment', price: 65000, bhk: 3, type: 'RENT', lat: 19.05, lng: 72.82, locality: 'Bandra West, Mumbai', city: 'Mumbai' },
    { id: '5', title: 'Cozy Studio', price: 30000, bhk: 1, type: 'RENT', lat: 19.11, lng: 72.88, locality: 'Andheri, Mumbai', city: 'Mumbai' },
    { id: '6', title: 'Premium Builder Floor', price: 40000, bhk: 3, type: 'RENT', lat: 28.53, lng: 77.2, locality: 'Saket, Delhi', city: 'Delhi' },
    { id: '7', title: 'Affordable PG', price: 10000, bhk: 1, type: 'RENT', lat: 28.7, lng: 77.1, locality: 'Rohini, Delhi', city: 'Delhi' }
  ];

  let prop = allProperties.find(p => p.id === unwrappedParams.id);
  if (!prop) {
    prop = {
      id: unwrappedParams.id,
      title: 'Unknown Property',
      price: 0,
      bhk: 1,
      type: 'RENT',
      locality: 'Unknown Location',
    };
  }

  // default details for mock
  prop.furnishing = prop.furnishing || 'SEMI';
  prop.amenities = prop.amenities || ['WiFi', 'Parking', 'Gym', 'Security'];
  prop.description = prop.description || 'A beautiful and spacious property available for rent. Well ventilated, newly painted, and located in a prime area with 24/7 security.';
  prop.ownerName = prop.ownerName || 'Rahul Verma';
  prop.rating = prop.rating || 4.5;

  return (
    <div style={{ background: 'var(--background)', minHeight: '100vh', paddingBottom: '4rem' }}>
      <header className="glass-panel" style={{ padding: '1rem 2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <Link href="/">
          <h2 style={{ color: 'var(--primary)', margin: 0 }}>NestFinder</h2>
        </Link>
        <Link href="/explore" className="btn" style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}>
          Back to Explore
        </Link>
      </header>

      <div className="container">
        {/* Images Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '1rem', marginBottom: '2rem', height: '400px' }}>
            <div style={{ background: 'url(https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&auto=format&fit=crop&q=60) center/cover', borderRadius: 'var(--radius-lg)' }}></div>
            <div style={{ display: 'grid', gridTemplateRows: '1fr 1fr', gap: '1rem' }}>
                <div style={{ background: 'url(https://images.unsplash.com/photo-1554995207-c18c203602cb?w=400&auto=format&fit=crop&q=60) center/cover', borderRadius: 'var(--radius-lg)' }}></div>
                <div style={{ background: 'url(https://images.unsplash.com/photo-1502672260266-1c1e52b154ce?w=400&auto=format&fit=crop&q=60) center/cover', borderRadius: 'var(--radius-lg)' }}></div>
            </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '2rem' }}>
            {/* Left Column */}
            <div>
                <h1 style={{ marginBottom: '0.5rem' }}>{prop.title}</h1>
                <p style={{ color: 'var(--foreground-muted)', fontSize: '1.125rem', marginBottom: '1.5rem' }}>{prop.locality}</p>
                
                <div className="card" style={{ padding: '1.5rem', marginBottom: '2rem', display: 'flex', gap: '2rem' }}>
                    <div>
                        <p style={{ color: 'var(--foreground-muted)', margin: '0 0 0.5rem 0' }}>Monthly Rent</p>
                        <h2 style={{ margin: 0 }}>₹{prop.price}</h2>
                    </div>
                    <div style={{ borderLeft: '1px solid var(--border)', paddingLeft: '2rem' }}>
                        <p style={{ color: 'var(--foreground-muted)', margin: '0 0 0.5rem 0' }}>Configuration</p>
                        <h2 style={{ margin: 0 }}>{prop.bhk} BHK</h2>
                    </div>
                    <div style={{ borderLeft: '1px solid var(--border)', paddingLeft: '2rem' }}>
                        <p style={{ color: 'var(--foreground-muted)', margin: '0 0 0.5rem 0' }}>Furnishing</p>
                        <h2 style={{ margin: 0 }}>{prop.furnishing}</h2>
                    </div>
                </div>

                <h3 style={{ marginBottom: '1rem' }}>Description</h3>
                <p style={{ color: 'var(--foreground-muted)', lineHeight: '1.6', marginBottom: '2rem' }}>
                    {prop.description}
                </p>

                <h3 style={{ marginBottom: '1rem' }}>Amenities</h3>
                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
                    {prop.amenities.map(am => (
                        <div key={am} style={{ padding: '0.5rem 1rem', background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 'var(--radius-md)' }}>
                            {am}
                        </div>
                    ))}
                </div>
            </div>

            {/* Right Column - Action Card */}
            <div>
                <div className="card" style={{ padding: '2rem', position: 'sticky', top: '2rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                        <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: 'var(--primary)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', fontWeight: 'bold' }}>
                            {prop.ownerName.charAt(0)}
                        </div>
                        <div>
                            <h4 style={{ margin: '0 0 0.25rem 0' }}>{prop.ownerName}</h4>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', fontSize: '0.875rem', color: '#F59E0B' }}>
                                ⭐ {prop.rating} (12 Reviews)
                            </div>
                        </div>
                    </div>

                    <button onClick={() => alert('Contacting Owner: +91-9876543210')} className="btn btn-primary" style={{ width: '100%', marginBottom: '1rem' }}>Contact Owner</button>
                    <button onClick={() => { setBooked(true); alert('Site Visit Booked successfully!'); }} className="btn" style={{ width: '100%', background: booked ? 'var(--secondary)' : '#3b82f6', color: 'white', border: 'none', marginBottom: '1rem' }}>
                        {booked ? '✓ Site Visit Booked' : 'Book Site Visit'}
                    </button>
                    <Link href={`/checkout/${prop.id}`} className="btn" style={{ width: '100%', background: 'rgba(16, 185, 129, 0.1)', color: 'var(--secondary)', border: 'none', display: 'block', textAlign: 'center' }}>
                        Pay Token Amount
                    </Link>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}
