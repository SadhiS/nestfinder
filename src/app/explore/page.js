'use client';

import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';

const Map = dynamic(() => import('@/components/Map'), { ssr: false });

const allProperties = [
    { id: '1', title: 'Spacious 2BHK in Gomti Nagar', price: 15000, bhk: 2, type: 'RENT', lat: 26.8467, lng: 80.9462, locality: 'Gomti Nagar', city: 'Lucknow' },
    { id: '2', title: 'Modern 3BHK Flat', price: 25000, bhk: 3, type: 'RENT', lat: 26.86, lng: 80.95, locality: 'Indira Nagar', city: 'Lucknow' },
    { id: '3', title: 'Luxury Villa with Pool', price: 50000, bhk: 4, type: 'RENT', lat: 26.83, lng: 80.93, locality: 'Hazratganj', city: 'Lucknow' },
    { id: '4', title: 'Sea View Apartment', price: 65000, bhk: 3, type: 'RENT', lat: 19.05, lng: 72.82, locality: 'Bandra West', city: 'Mumbai' },
    { id: '5', title: 'Cozy Studio', price: 30000, bhk: 1, type: 'RENT', lat: 19.11, lng: 72.88, locality: 'Andheri', city: 'Mumbai' },
    { id: '6', title: 'Premium Builder Floor', price: 40000, bhk: 3, type: 'RENT', lat: 28.53, lng: 77.2, locality: 'Saket', city: 'Delhi' },
    { id: '7', title: 'Affordable PG', price: 10000, bhk: 1, type: 'RENT', lat: 28.7, lng: 77.1, locality: 'Rohini', city: 'Delhi' }
];

const cityCoordinates = {
    'Lucknow': [26.8467, 80.9462],
    'Mumbai': [19.0760, 72.8777],
    'Delhi': [28.7041, 77.1025]
};

export default function Explore() {
  const [city, setCity] = useState('Lucknow');
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    // Filter properties based on selected city
    const filtered = allProperties.filter(p => p.city === city);
    setProperties(filtered);
  }, [city]);

  return (
    <div style={{ display: 'flex', height: '100vh', flexDirection: 'column' }}>
      {/* Header */}
      <header className="glass-panel" style={{ padding: '1rem 2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', zIndex: 10 }}>
        <Link href="/">
          <h2 style={{ color: 'var(--primary)', margin: 0 }}>NestFinder</h2>
        </Link>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <select 
            value={city} 
            onChange={(e) => setCity(e.target.value)}
            className="btn" 
            style={{ background: 'rgba(15, 23, 42, 0.9)', border: '1px solid var(--border)', color: 'white' }}
          >
            <option value="Lucknow">Lucknow</option>
            <option value="Delhi">Delhi</option>
            <option value="Mumbai">Mumbai</option>
          </select>
        </div>
      </header>

      {/* Main Content */}
      <div style={{ display: 'flex', flex: 1, overflow: 'hidden' }}>
        
        {/* Sidebar - Property List */}
        <div style={{ width: '400px', overflowY: 'auto', padding: '1rem', background: 'var(--background)', borderRight: '1px solid var(--border)', zIndex: 5 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
             <h3 style={{ margin: 0 }}>Properties in {city}</h3>
             <span style={{ color: 'var(--foreground-muted)', fontSize: '0.875rem' }}>{properties.length} results</span>
          </div>
          
          {properties.length === 0 ? <p>No properties found in {city}.</p> : properties.map(prop => (
            <div key={prop.id} className="card" style={{ marginBottom: '1.5rem' }}>
              <div style={{ background: 'url(https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=500&auto=format&fit=crop&q=60) center/cover', height: '200px' }}></div>
              <div style={{ padding: '1rem' }}>
                  <h4 style={{ margin: '0 0 0.5rem 0', fontSize: '1.125rem' }}>{prop.title}</h4>
                  <p style={{ color: 'var(--foreground-muted)', margin: '0 0 1rem 0', fontSize: '0.875rem' }}>{prop.locality}</p>
                  
                  <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem' }}>
                    <span style={{ background: 'rgba(79, 70, 229, 0.1)', color: 'var(--primary)', padding: '0.25rem 0.5rem', borderRadius: '4px', fontSize: '0.75rem', fontWeight: 600 }}>
                      {prop.bhk} BHK
                    </span>
                    <span style={{ background: 'rgba(16, 185, 129, 0.1)', color: 'var(--secondary)', padding: '0.25rem 0.5rem', borderRadius: '4px', fontSize: '0.75rem', fontWeight: 600 }}>
                      {prop.type}
                    </span>
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <strong style={{ fontSize: '1.25rem', color: 'var(--foreground)' }}>₹{prop.price.toLocaleString()} <span style={{ fontSize: '0.875rem', color: 'var(--foreground-muted)', fontWeight: 400 }}>/month</span></strong>
                    <Link href={`/property/${prop.id}`} className="btn btn-primary" style={{ padding: '0.5rem 1rem', fontSize: '0.875rem' }}>
                        View Details
                    </Link>
                  </div>
              </div>
            </div>
          ))}
        </div>

        {/* Map Area */}
        <div style={{ flex: 1, position: 'relative', zIndex: 0 }}>
          {/* Key is used to force remount Map when city changes to update center */}
          <Map key={city} properties={properties} center={cityCoordinates[city]} zoom={city === 'Mumbai' ? 11 : 12} />
        </div>
      </div>
    </div>
  );
}
