'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function AIQuiz() {
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState({ budget: '', purpose: '', lifestyle: '', location: '' });
  const [matching, setMatching] = useState(false);

  const handleNext = () => setStep(s => s + 1);
  
  const handleMatch = () => {
    setMatching(true);
    setTimeout(() => {
        window.location.href = '/explore?ai_matched=true';
    }, 2000);
  };

  return (
    <div style={{ background: 'var(--background)', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      
      {matching ? (
        <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '4rem', marginBottom: '1rem', animation: 'spin 2s linear infinite' }}>✨</div>
            <h2>AI is finding your perfect match...</h2>
            <p style={{ color: 'var(--foreground-muted)' }}>Analyzing properties based on your lifestyle and budget.</p>
        </div>
      ) : (
        <div className="card" style={{ width: '100%', maxWidth: '600px', padding: '3rem' }}>
          
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '2rem' }}>
            <span style={{ color: 'var(--primary)', fontWeight: 'bold' }}>AI Matchmaker</span>
            <span style={{ color: 'var(--foreground-muted)' }}>Step {step} of 4</span>
          </div>

          {step === 1 && (
            <div>
              <h2 style={{ marginBottom: '2rem' }}>What is your purpose?</h2>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <button onClick={() => { setAnswers({...answers, purpose: 'RENT'}); handleNext(); }} className="btn" style={{ flex: 1, background: 'var(--surface)', border: '2px solid var(--border)', padding: '2rem', color: 'white', fontSize: '1.25rem' }}>Looking to Rent</button>
                <button onClick={() => { setAnswers({...answers, purpose: 'BUY'}); handleNext(); }} className="btn" style={{ flex: 1, background: 'var(--surface)', border: '2px solid var(--border)', padding: '2rem', color: 'white', fontSize: '1.25rem' }}>Looking to Buy</button>
              </div>
            </div>
          )}

          {step === 2 && (
            <div>
              <h2 style={{ marginBottom: '2rem' }}>What's your preferred location?</h2>
              <input type="text" onChange={e => setAnswers({...answers, location: e.target.value})} style={{ width: '100%', padding: '1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', marginBottom: '1rem', fontSize: '1.125rem' }} placeholder="e.g. Gomti Nagar, Lucknow" />
              <button onClick={handleNext} className="btn btn-primary" style={{ width: '100%' }}>Next</button>
            </div>
          )}

          {step === 3 && (
            <div>
              <h2 style={{ marginBottom: '2rem' }}>What is your budget?</h2>
              <select onChange={e => setAnswers({...answers, budget: e.target.value})} style={{ width: '100%', padding: '1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', marginBottom: '1rem', fontSize: '1.125rem' }}>
                <option value="">Select a range...</option>
                <option value="under_15k">Under ₹15,000 / month</option>
                <option value="15k_to_25k">₹15,000 - ₹25,000 / month</option>
                <option value="above_25k">Above ₹25,000 / month</option>
              </select>
              <button onClick={handleNext} className="btn btn-primary" style={{ width: '100%' }}>Next</button>
            </div>
          )}

          {step === 4 && (
            <div>
              <h2 style={{ marginBottom: '2rem' }}>Describe your lifestyle</h2>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
                {['Pet-friendly', 'Family oriented', 'Bachelor friendly', 'Close to Metro', 'Quiet neighborhood'].map(l => (
                    <label key={l} style={{ padding: '0.5rem 1rem', background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '2rem', cursor: 'pointer' }}>
                        <input type="checkbox" style={{ marginRight: '0.5rem' }} onChange={() => setAnswers({...answers, lifestyle: l})} />
                        {l}
                    </label>
                ))}
              </div>
              <button onClick={handleMatch} className="btn btn-primary" style={{ width: '100%', fontSize: '1.125rem', padding: '1rem' }}>
                ✨ Find My Matches
              </button>
            </div>
          )}

        </div>
      )}
    </div>
  );
}
