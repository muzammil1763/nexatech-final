import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CustomCursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Dot follows instantly
  const dotX = useSpring(cursorX, { stiffness: 1000, damping: 50 });
  const dotY = useSpring(cursorY, { stiffness: 1000, damping: 50 });

  // Ring lags behind for the trail effect
  const ringX = useSpring(cursorX, { stiffness: 120, damping: 20 });
  const ringY = useSpring(cursorY, { stiffness: 120, damping: 20 });

  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseDown = () => setClicked(true);
    const handleMouseUp   = () => setClicked(false);
    const handleLeave     = () => setHidden(true);
    const handleEnter     = () => setHidden(false);

    // Detect hoverable elements
    const addHover = () => setHovered(true);
    const removeHover = () => setHovered(false);

    const interactives = document.querySelectorAll(
      "a, button, [role='button'], input, textarea, select, label"
    );
    interactives.forEach((el) => {
      el.addEventListener("mouseenter", addHover);
      el.addEventListener("mouseleave", removeHover);
    });

    window.addEventListener("mousemove", move);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    document.documentElement.addEventListener("mouseleave", handleLeave);
    document.documentElement.addEventListener("mouseenter", handleEnter);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      document.documentElement.removeEventListener("mouseleave", handleLeave);
      document.documentElement.removeEventListener("mouseenter", handleEnter);
      interactives.forEach((el) => {
        el.removeEventListener("mouseenter", addHover);
        el.removeEventListener("mouseleave", removeHover);
      });
    };
  }, [cursorX, cursorY]);

  return (
    <>
      {/* Outer ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
          opacity: hidden ? 0 : 1,
        }}
      >
        <motion.div
          animate={{
            width:  hovered ? 48 : clicked ? 20 : 36,
            height: hovered ? 48 : clicked ? 20 : 36,
            opacity: hovered ? 0.6 : 1,
            borderColor: hovered ? "#5EE4E4" : "rgba(215,226,234,0.6)",
            backgroundColor: hovered ? "rgba(94,228,228,0.08)" : "transparent",
          }}
          transition={{ type: "spring", stiffness: 300, damping: 24 }}
          className="rounded-full border-2"
          style={{ borderColor: "rgba(215,226,234,0.6)" }}
        />
      </motion.div>

      {/* Inner dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
        style={{
          x: dotX,
          y: dotY,
          translateX: "-50%",
          translateY: "-50%",
          opacity: hidden ? 0 : 1,
        }}
      >
        <motion.div
          animate={{
            width:  clicked ? 6 : hovered ? 6 : 8,
            height: clicked ? 6 : hovered ? 6 : 8,
            backgroundColor: hovered ? "#5EE4E4" : "#ffffff",
            scale: clicked ? 0.5 : 1,
          }}
          transition={{ type: "spring", stiffness: 600, damping: 30 }}
          className="rounded-full"
        />
      </motion.div>
    </>
  );
}
