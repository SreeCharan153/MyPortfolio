import React, { useEffect, useState } from "react";

interface TypewriterEffectProps {
  text: string[];
}

export const TypewriterEffect: React.FC<TypewriterEffectProps> = ({ text }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      if (charIndex < text[index].length) {
        const timeout = setTimeout(() => {
          setDisplayedText((prev) => prev + text[index][charIndex]);
          setCharIndex((prev) => prev + 1);
        }, 100);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setDisplayedText("");
          setCharIndex(0);
          setIndex((prev) => (prev + 1) % text.length);
        }, 2000);
        return () => clearTimeout(timeout);
      }
    }
  }, [charIndex, index, text]);

  return <span>{displayedText}</span>;
};