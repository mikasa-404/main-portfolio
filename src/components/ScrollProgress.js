import React, { useEffect, useState } from "react";
import {
  ProgressDot,
  ProgressFill,
  ProgressRail,
  ProgressWrap,
} from "../styles/ScrollProgress.styled";

const getScrollProgress = () => {
  const scrollTop = window.scrollY || document.documentElement.scrollTop;
  const scrollableHeight =
    document.documentElement.scrollHeight - window.innerHeight;

  if (scrollableHeight <= 0) {
    return 0;
  }

  return Math.min(100, Math.max(0, (scrollTop / scrollableHeight) * 100));
};

const ScrollProgress = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let frameId = null;

    const updateProgress = () => {
      if (frameId) {
        return;
      }

      frameId = window.requestAnimationFrame(() => {
        setProgress(Math.round(getScrollProgress()));
        frameId = null;
      });
    };

    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);

    return () => {
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);

      if (frameId) {
        window.cancelAnimationFrame(frameId);
      }
    };
  }, []);

  return (
    <ProgressWrap aria-label="Page scroll progress">
      <ProgressRail>
        <ProgressFill $progress={progress} />
        <ProgressDot $progress={progress} />
      </ProgressRail>
    </ProgressWrap>
  );
};

export default ScrollProgress;
