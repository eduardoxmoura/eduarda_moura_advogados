'use client';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

// Hydrates <i data-lucide="..."> icons after navigation. Lucide is loaded
// from the CDN in the root layout; we wait for it, then build the icons.
export default function LucideInit() {
  const pathname = usePathname();
  useEffect(() => {
    let tries = 0;
    const run = () => {
      if (typeof window !== 'undefined' && window.lucide) {
        window.lucide.createIcons();
      } else if (tries++ < 50) {
        setTimeout(run, 120);
      }
    };
    run();
  }, [pathname]);
  return null;
}
