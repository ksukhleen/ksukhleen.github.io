import { useState, useEffect } from 'react';

export default function MouseGradient() {
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  // Update coordinates on mouse move
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCoords({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const backgroundStyle = {
    backgroundColor: ' #0f172bbf',
    backgroundImage: `radial-gradient(600px circle at ${coords.x}px ${coords.y}px, rgba(29, 78, 216, 0.15), transparent 80%)`,
    transition: 'background 0.2s ease',
  };

  return (
    <div
      className="fixed inset-0 -z-10"
      style={backgroundStyle}
    />
  );
}
