'use client';

import { useEffect } from 'react';

export default function AdminPage() {
  useEffect(() => {
    // Redirect to the static admin page
    window.location.href = '/admin/index.html';
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-4">Loading CMS...</h1>
        <p>Redirecting to admin interface...</p>
      </div>
    </div>
  );
} 