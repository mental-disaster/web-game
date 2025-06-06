import { useState, useEffect, useCallback } from "react";

interface UseTypewriterProps {
  text: string;
  speed?: number;
  onComplete?: () => void;
}

export function useTypewriter({ text, onComplete }: UseTypewriterProps) {
  const [displayText, setDisplayText] = useState("");
  const [isComplete, setIsComplete] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const reset = useCallback(() => {
    setDisplayText("");
    setIsComplete(false);
    setCurrentIndex(0);
  }, []);

  const completeText = useCallback(() => {
    setDisplayText(text);
    setIsComplete(true);
    onComplete?.();
  }, [text, onComplete]);

  useEffect(() => {
    if (isComplete) return;

    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, 30);

      return () => clearTimeout(timeout);
    } else {
      setIsComplete(true);
      onComplete?.();
    }
  }, [currentIndex, text, isComplete, onComplete]);

  return {
    displayText,
    isComplete,
    completeText,
    reset,
  };
}
