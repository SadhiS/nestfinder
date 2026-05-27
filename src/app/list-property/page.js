'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function ListProperty() {
  const [formData, setFormData] = useState({
    title: '', description: '', type: 'RENT', category: 'FLAT',
    price: '', city: 'Lucknow', locality: '', address: '', bhk: '2', furnishing: 'SEMI'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Property listed successfully! (Mock)');
  };

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

      <div className="container" style={{ maxWidth: '800px' }}>
        <div className="card" style={{ padding: '2rem' }}>
          <h2 style={{ marginBottom: '2rem', textAlign: 'center' }}>List Your Property</h2>
          
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Property Title</label>
                <input type="text" required style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }} placeholder="e.g. Spacious 2BHK in Gomti Nagar" />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Price (₹)</label>
                <input type="number" required style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }} placeholder="e.g. 15000" />
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1.5rem' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Type</label>
                <select style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
                  <option value="RENT">For Rent</option>
                  <option value="BUY">For Sale</option>
                </select>
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Category</label>
                <select style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
                  <option value="FLAT">Apartment/Flat</option>
                  <option value="HOUSE">Independent House</option>
                  <option value="PG">PG/Hostel</option>
                </select>
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>BHK</label>
                <select style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
                  <option value="1">1 BHK</option>
                  <option value="2">2 BHK</option>
                  <option value="3">3 BHK</option>
                  <option value="4">4+ BHK</option>
                </select>
              </div>
            </div>

            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Locality & Address</label>
              <input type="text" required style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', marginBottom: '0.5rem' }} placeholder="Locality (e.g. Indira Nagar)" />
              <textarea rows="3" required style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', fontFamily: 'inherit' }} placeholder="Full Address..."></textarea>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
              <div>
                 <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Upload Photos</label>
                 <label style={{ display: 'block', border: '2px dashed var(--border)', borderRadius: 'var(--radius-md)', padding: '2rem', textAlign: 'center', background: 'var(--background)', cursor: 'pointer' }}>
                    <input type="file" multiple accept="image/*" onChange={(e) => {
                      const files = e.target.files;
                      if (files && files.length > 0) {
                        e.target.nextElementSibling.textContent = `${files.length} photos selected`;
                        e.target.nextElementSibling.style.color = 'var(--primary)';
                      }
                    }} style={{ display: 'none' }} />
                    <p style={{ color: 'var(--foreground-muted)', margin: 0 }}>Click or drag photos here</p>
                 </label>
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Amenities</label>
                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                  {['WiFi', 'Parking', 'Gym', 'Pool', 'Security'].map(am => (
                    <label key={am} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <input type="checkbox" /> {am}
                    </label>
                  ))}
                </div>
              </div>
            </div>

            <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '1rem', fontSize: '1.125rem', marginTop: '1rem' }}>
              List Property Successfully
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
