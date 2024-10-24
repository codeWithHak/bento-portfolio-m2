'use client'

import { useEffect, useState } from 'react';

export default function AnimatedText() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // Trigger the animation when the component mounts
    setAnimate(true);
  }, []);

  return (
    <h2 className="text-center max-w-40 md:max-w-max ">
      <span className={`inline-block ${animate ? 'animate-jump' : ''} delay-200`}>think</span>{' '}
      <span className={`inline-block ${animate ? 'animate-jump' : ''} delay-500`}>design</span>{' '}
      <span className={`inline-block ${animate ? 'animate-jump' : ''} delay-700`}>develop</span>{' '}
      <span className={`inline-block ${animate ? 'animate-jump' : ''} delay-1000`}>deploy</span>
    </h2>
  );
}
