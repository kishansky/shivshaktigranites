import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const { pathname, search, hash } = useLocation(); // 'search' will give query params

  useEffect(() => {
    const smoothScrollTo = (target, duration) => {
      const start = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop;
      const distance = target - start;
      let startTime = null;

      const scroll = (currentTime) => {
        if (!startTime) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / duration, 1);  // Normalize progress (0 to 1)
        const scrollPosition = start + distance * progress;

        // Scroll the window to the calculated position
        window.scrollTo(0, scrollPosition);

        // Safari specific scroll (or other browsers that don't respect scrollY on document)
        document.documentElement.scrollTop = scrollPosition;
        document.body.scrollTop = scrollPosition; // In case of Safari

        // If time has passed, stop scrolling
        if (timeElapsed < duration) {
          requestAnimationFrame(scroll);
        }
      };

      requestAnimationFrame(scroll);  // Start the scroll animation
    };

    // If there's no hash in the URL, scroll to top
    if (!hash) {
      smoothScrollTo(0, 500);  // Scroll to the top in 1 second (500ms)
    } else {
      // If there's a hash (target element), scroll to the target element
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        element.scrollIntoView({
            behavior: 'smooth',
        }); // Scroll to element in 1 second (1000ms)
      } else {
        // If element is not found (like when the hash does not exist), scroll to top
        smoothScrollTo(0, 500);  // Scroll to the top in 1 second (500ms)
      }
    }
  }, [pathname, search, hash]);  // Re-run effect when pathname, search (query params), or hash changes

  return null;
}

export default ScrollToTop;
