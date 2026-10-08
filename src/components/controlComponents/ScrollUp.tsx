import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop(): null {
    const { pathname } = useLocation();

    useEffect(() => {
        // Instantly snap to the top left of the page
        window.scrollTo(0, 0);
    }, [pathname]);

    return null; // This component doesn't render any visual UI
}
