"use client";

import { usePathname } from 'next/navigation';
import Preloader from './Preloader';

// This component uses the `key` prop trick.
// When the pathname changes, the key changes, forcing React to
// unmount the old Preloader and mount a new one.
// This is what re-triggers your animation on every page navigation.
export const PreloaderWrapper = () => {
  const pathname = usePathname();
  
  return <Preloader key={pathname} />;
};