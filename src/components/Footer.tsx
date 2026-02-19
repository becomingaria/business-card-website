import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { madeByJokes } from "../config/jokes"

// Fisher-Yates shuffle
const shuffleArray = <T,>(array: T[]): T[] => {
    const shuffled = [...array]
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
        ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
    }
    return shuffled
}

const Footer = () => {
    const [displayText, setDisplayText] = useState("")
    const [isTyping, setIsTyping] = useState(true)
    const [isDeleting, setIsDeleting] = useState(false)

    // Use refs for the queue to avoid re-renders
    const jokeQueueRef = useRef<string[]>(shuffleArray(madeByJokes))
    const currentJokeRef = useRef<string>(madeByJokes[0])

    const getNextJoke = () => {
        // If queue is empty, reshuffle
        if (jokeQueueRef.current.length === 0) {
            jokeQueueRef.current = shuffleArray(madeByJokes)
        }
        return jokeQueueRef.current.pop() || madeByJokes[0]
    }

    useEffect(() => {
        // Initialize currentJoke on first render
        currentJokeRef.current = getNextJoke()
    }, [])

    useEffect(() => {
        const currentJoke = currentJokeRef.current
        let timeout: ReturnType<typeof setTimeout>

        if (isTyping && !isDeleting) {
            // Typing phase
            if (displayText.length < currentJoke.length) {
                timeout = setTimeout(
                    () => {
                        setDisplayText(
                            currentJoke.slice(0, displayText.length + 1),
                        )
                    },
                    50 + Math.random() * 50,
                ) // Variable typing speed for natural feel
            } else {
                // Finished typing, wait 1-5 seconds
                const holdTime = 1000 + Math.random() * 4000
                timeout = setTimeout(() => {
                    setIsTyping(false)
                    setIsDeleting(true)
                }, holdTime)
            }
        } else if (isDeleting) {
            // Deleting phase
            if (displayText.length > 0) {
                timeout = setTimeout(() => {
                    setDisplayText(displayText.slice(0, -1))
                }, 30) // Faster backspace
            } else {
                // Finished deleting, get next joke from queue and start typing
                currentJokeRef.current = getNextJoke()
                setTimeout(() => {
                    setIsDeleting(false)
                    setIsTyping(true)
                }, 0)
            }
        }

        return () => clearTimeout(timeout)
    }, [displayText, isTyping, isDeleting])

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className='pt-4 text-left w-full min-h-12 md:min-h-[3.75rem]'
        >
            <p className='text-text-muted/50 text-xs md:text-sm font-mono break-words'>
                <span className='text-secondary/70'>
                    Made by {displayText}
                    <motion.span
                        animate={{ opacity: [1, 0] }}
                        transition={{
                            duration: 0.5,
                            repeat: Infinity,
                            repeatType: "reverse",
                        }}
                        className='inline-block ml-0.5'
                    >
                        |
                    </motion.span>
                </span>
            </p>
        </motion.div>
    )
}

export default Footer
