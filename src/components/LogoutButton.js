'use client';
import { useRouter } from 'next/navigation';

export default function LogoutButton() {
  const router = useRouter();

  const handleLogout = async () => {
    await fetch('/api/auth/logout', { method: 'POST' });
    router.refresh();
  };

  return (
    <button onClick={handleLogout} className="btn" style={{ background: 'transparent', border: '1px solid var(--border)', color: 'var(--foreground)' }}>
      Logout
    </button>
  );
}
