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
      <span className={`inline-block ${animate ? 'animate-jump' : ''} `}>think</span>{' '}
      <span className={`inline-block ${animate ? 'animate-jump' : ''} delay-300`}>design</span>{' '}
      <span className={`inline-block ${animate ? 'animate-jump' : ''} delay-500`}>develop</span>{' '}
      <span className={`inline-block ${animate ? 'animate-jump' : ''} delay-700`}>deploy</span>
    </h2>
  );
}
