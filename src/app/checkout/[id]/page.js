'use client';

import { useState, use } from 'react';
import Link from 'next/link';
import { jsPDF } from 'jspdf';

export default function Checkout({ params }) {
  const unwrappedParams = use(params);
  const [status, setStatus] = useState('idle'); // idle, processing, success
  const propertyId = unwrappedParams.id;

  // Mock property data based on ID
  const prop = {
    id: propertyId,
    title: 'Spacious 2BHK in Gomti Nagar',
    price: 15000,
    ownerName: 'Rahul Verma',
    tenantName: 'John Doe', // Simulated logged in user
    address: 'Gomti Nagar, Lucknow',
  };

  const handlePayment = (e) => {
    e.preventDefault();
    setStatus('processing');
    
    // Simulate Stripe payment delay
    setTimeout(() => {
        setStatus('success');
    }, 2000);
  };

  const downloadAgreement = () => {
    const doc = new jsPDF();
    
    // Add Company Header
    doc.setFontSize(22);
    doc.setTextColor(79, 70, 229); // Primary color
    doc.text('NestFinder', 105, 20, null, null, 'center');
    
    doc.setFontSize(16);
    doc.setTextColor(0, 0, 0);
    doc.text('RENTAL AGREEMENT', 105, 30, null, null, 'center');
    
    doc.setFontSize(12);
    doc.text(`Date: ${new Date().toLocaleDateString()}`, 20, 50);
    doc.text(`Agreement for Property: ${prop.title}`, 20, 60);
    doc.text(`Address: ${prop.address}`, 20, 70);
    
    doc.text('1. PARTIES', 20, 90);
    doc.setFontSize(11);
    doc.text(`This agreement is made between ${prop.ownerName} (Landlord) and ${prop.tenantName} (Tenant).`, 20, 100);
    
    doc.setFontSize(12);
    doc.text('2. TERMS', 20, 120);
    doc.setFontSize(11);
    doc.text(`The tenant agrees to pay a monthly rent of Rs. ${prop.price}.`, 20, 130);
    doc.text('A token amount of Rs. 5,000 has been successfully paid online via NestFinder.', 20, 140);
    
    // Signatures
    doc.text('_______________________', 30, 200);
    doc.text('Landlord Signature', 35, 210);
    
    doc.text('_______________________', 130, 200);
    doc.text('Tenant Signature', 135, 210);
    
    doc.save(`Rental_Agreement_${prop.id}.pdf`);
  };

  return (
    <div style={{ background: 'var(--background)', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        
        <div className="card" style={{ width: '100%', maxWidth: '500px', padding: '3rem' }}>
            {status === 'success' ? (
                <div style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: '4rem', marginBottom: '1rem', color: 'var(--secondary)' }}>✅</div>
                    <h2 style={{ marginBottom: '1rem' }}>Payment Successful!</h2>
                    <p style={{ color: 'var(--foreground-muted)', marginBottom: '2rem' }}>Your token amount of ₹5,000 has been paid to secure the property.</p>
                    
                    <button onClick={downloadAgreement} className="btn btn-primary" style={{ width: '100%', marginBottom: '1rem', padding: '1rem', fontSize: '1.125rem' }}>
                        📄 Download Rental Agreement
                    </button>
                    <Link href="/explore" className="btn" style={{ width: '100%', background: 'var(--surface)', border: '1px solid var(--border)', padding: '1rem', fontSize: '1.125rem', display: 'block', textAlign: 'center' }}>
                        Back to Explore
                    </Link>
                </div>
            ) : (
                <>
                    <h2 style={{ marginBottom: '0.5rem', textAlign: 'center' }}>Pay Token Amount</h2>
                    <p style={{ textAlign: 'center', color: 'var(--foreground-muted)', marginBottom: '2rem' }}>Secure '{prop.title}' instantly.</p>
                    
                    <div style={{ background: 'var(--surface)', padding: '1.5rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', marginBottom: '2rem' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                            <span>Token Amount</span>
                            <strong>₹5,000</strong>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--foreground-muted)', fontSize: '0.875rem' }}>
                            <span>Platform Fee</span>
                            <span>₹199</span>
                        </div>
                        <hr style={{ margin: '1rem 0', borderTop: '1px solid var(--border)' }} />
                        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '1.25rem' }}>
                            <strong>Total to Pay</strong>
                            <strong>₹5,199</strong>
                        </div>
                    </div>

                    <form onSubmit={handlePayment}>
                        <div style={{ marginBottom: '1.5rem' }}>
                            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Card Number</label>
                            <input type="text" placeholder="4242 4242 4242 4242" required style={{ width: '100%', padding: '1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }} />
                        </div>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '2rem' }}>
                            <div>
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Expiry</label>
                                <input type="text" placeholder="MM/YY" required style={{ width: '100%', padding: '1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }} />
                            </div>
                            <div>
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>CVC</label>
                                <input type="text" placeholder="123" required style={{ width: '100%', padding: '1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }} />
                            </div>
                        </div>

                        <button type="submit" disabled={status === 'processing'} className="btn btn-primary" style={{ width: '100%', padding: '1rem', fontSize: '1.125rem', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem' }}>
                            {status === 'processing' ? 'Processing...' : 'Pay ₹5,199'}
                        </button>
                    </form>
                </>
            )}
        </div>
    </div>
  );
}
