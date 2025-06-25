import { useEffect, useState } from "react"
const CursorGlow = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
      const moveMouse = (e) => {
        setPosition({ x: e.clientX, y: e.clientY });
      };
      window.addEventListener("mousemove", moveMouse);
      return () => window.removeEventListener("mousemove", moveMouse);
    }, []);
  return (
    <div
      className="pointer-events-none fixed top-0 left-0 w-100 h-70 rounded-full bg-green-400 opacity-20 blur-2xl z-50 transition-transform duration-100"
      style={{
        transform: `translate(${position.x - 40}px, ${position.y - 40}px)`,
      }}
    ></div>
  );
}

export default CursorGlow