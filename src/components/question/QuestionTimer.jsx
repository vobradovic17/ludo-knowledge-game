import { useState, useEffect} from 'react'

export default function QuestionTimer({ isSubmitted, showHint, setShowHint, handleCheck }) {
    const [remainingTime, setRemainingTime] = useState(29900);

    useEffect(() => {
        if (remainingTime < 15000 && !showHint) {
            setShowHint(true)
        }
    }, [remainingTime, showHint, setShowHint])

    useEffect(() => {
        if (remainingTime < 0) {
            handleCheck()
        }
    }, [remainingTime, handleCheck]);

    useEffect(() => {
        const interval = setInterval(() => {
            if (!isSubmitted) {
                setRemainingTime((prevRemainingTime) => {
                    let newRemainingTime = prevRemainingTime - 100;
                    return newRemainingTime
                });
            }
        }, 100);

        return () => {
            clearInterval(interval);
            setShowHint(false)
        };
    }, [isSubmitted, setShowHint])

    return (
        <progress
            className="lkg-question-timer"
            max="30000"
            value={remainingTime}
        />
    )
}