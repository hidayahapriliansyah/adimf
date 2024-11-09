"use client";

import { ReactLenis } from "@studio-freight/react-lenis";

const SmoothScrolling = ({ children }: { children: React.ReactNode }) => {
  const lenisOptions = {
    lerp: 0.1,
    duration: 0.8,
    smoothTouch: false,
    smooth: true,
  };

  return (
    <ReactLenis root options={lenisOptions}>
      {children}
    </ReactLenis>
  );
}
export default SmoothScrolling;
