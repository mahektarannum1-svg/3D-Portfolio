import React, { useRef, useState } from "react";
import "./styles/FloatingDock.css";

export interface DockItem {
  title: string;
  icon: string | React.ReactNode;
  href?: string;
}

interface FloatingDockProps {
  items: DockItem[];
}

export function FloatingDock({ items }: FloatingDockProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [mouseX, setMouseX] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    // Track cursor X coordinate relative to the container
    setMouseX(e.clientX - rect.left);
  };

  const handleMouseLeave = () => {
    setMouseX(null);
    setHoveredIndex(null);
  };

  return (
    <div className="floating-dock-wrapper">
      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="floating-dock-container"
      >
        {items.map((item, idx) => {
          // Calculate macOS-like dock magnification scale
          let scale = 1;
          if (mouseX !== null && containerRef.current) {
            const itemWidth = 60; // 48px size + 12px gap
            const itemX = idx * itemWidth + itemWidth / 2;
            const distance = Math.abs(mouseX - itemX);
            const maxDistance = 120; // range of magnification influence
            if (distance < maxDistance) {
              const factor = 1 - distance / maxDistance; // 0 to 1
              scale = 1 + factor * 0.45; // max magnification of 1.45x
            }
          }

          return (
            <div
              key={idx}
              className="floating-dock-item-wrapper"
              style={{
                transform: `scale(${scale})`,
                transformOrigin: "bottom center",
              }}
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {hoveredIndex === idx && (
                <div className="floating-dock-tooltip">{item.title}</div>
              )}
              <div className="floating-dock-icon">{item.icon}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
