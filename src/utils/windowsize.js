import { useState, useEffect } from "react"

const useWindowWidth = () => {
    const isBrowser = typeof window !== 'undefined'
    const [width, setWidth] = useState(isBrowser ? window.innerWidth : 0)
    const [height, setHeight] = useState(isBrowser ? window.innerHeight : 0);

    useEffect(() => {
        if (typeof window === 'undefined') return;

        const handleResize = () => {
            setWidth(window.innerWidth);
            setHeight(window.innerHeight);
        }
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize)
        };
    });

    if (width > height) {
        return true;
    } else {
        return false
    }
}

export default useWindowWidth