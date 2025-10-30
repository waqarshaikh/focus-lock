import { useState, useEffect, useRef } from 'react';

/**
 * Custom hook to manage a focus timer session
 */
export function useFocusTimer(initialMinutes: number = 25) {
    const [isFocusing, setIsFocusing] = useState(false);
    const [timeLeft, setTimeLeft] = useState(initialMinutes * 60);
    const timerRef = useRef<number | null>(null);

    // Start or stop the timer
    const toggleFocus = () => {
        if (isFocusing) {
            clearInterval(timerRef.current!);
            timerRef.current = null;
        } else {
            timerRef.current = setInterval(() => {
                setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
            }, 1000);
        }
        setIsFocusing((prev) => !prev);
    };

    // Reset timer
    const resetTimer = () => {
        if (timerRef.current) {
            clearInterval(timerRef.current);
            timerRef.current = null;
        }
        setTimeLeft(initialMinutes * 60);
        setIsFocusing(false);
    };

    // Stop timer when reaching 0
    useEffect(() => {
        if (timeLeft === 0 && timerRef.current) {
            clearInterval(timerRef.current);
            timerRef.current = null;
            setIsFocusing(false);
        }
    }, [timeLeft]);

    // Cleanup on unmount
    useEffect(() => {
        return () => {
            if (timerRef.current) clearInterval(timerRef.current);
        };
    }, []);

    return { timeLeft, isFocusing, toggleFocus, resetTimer };
}
