import { useState } from "react";
import { useEventListener, useMount } from "ahooks";

const useFadeInMounted = (): { animationClass: Record<string, boolean> } => {
    const [mounted, setMounted] = useState<boolean>(false);
    const [hasScrolledToTop, setHasScrolledToTop] = useState<boolean>(false);
  
    // Set to true when the component is mounted
    useMount(() => {
      setMounted(true);
    });

    useEventListener('scroll', () => {
      if (!hasScrolledToTop) {
        // Check window's scroll position at the top
        setHasScrolledToTop(window.scrollY <= 25);
      }
    });
  
    // Determine the animation class based on mounted state or scroll position
    const animationClass = {
      "animate-start": mounted || hasScrolledToTop,
    };
  
    return { animationClass };
};
export default useFadeInMounted;
