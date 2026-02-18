import { motion } from "framer-motion"

const BackgroundEffects = () => {
    return (
        <div className='fixed inset-0 overflow-hidden pointer-events-none'>
            {/* Animated gradient orbs */}
            <motion.div
                animate={{
                    x: [0, 100, 0],
                    y: [0, -50, 0],
                    scale: [1, 1.2, 1],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className='absolute -top-40 -left-40 w-80 h-80 bg-primary/20 rounded-full blur-3xl'
            />

            <motion.div
                animate={{
                    x: [0, -80, 0],
                    y: [0, 80, 0],
                    scale: [1, 1.3, 1],
                }}
                transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2,
                }}
                className='absolute -bottom-40 -right-40 w-96 h-96 bg-secondary/15 rounded-full blur-3xl'
            />

            <motion.div
                animate={{
                    x: [0, 50, 0],
                    y: [0, -30, 0],
                    opacity: [0.1, 0.2, 0.1],
                }}
                transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 5,
                }}
                className='absolute top-1/3 right-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl'
            />

            {/* Grid pattern overlay */}
            <div
                className='absolute inset-0 opacity-5'
                style={{
                    backgroundImage: `
            linear-gradient(rgba(124, 58, 237, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(124, 58, 237, 0.1) 1px, transparent 1px)
          `,
                    backgroundSize: "50px 50px",
                }}
            />

            {/* Radial gradient overlay */}
            <div
                className='absolute inset-0'
                style={{
                    background:
                        "radial-gradient(ellipse at 50% 0%, rgba(124, 58, 237, 0.1) 0%, transparent 50%)",
                }}
            />

            {/* Floating particles */}
            {[...Array(6)].map((_, i) => (
                <motion.div
                    key={i}
                    className='absolute w-1 h-1 bg-primary-light/30 rounded-full'
                    style={{
                        left: `${15 + i * 15}%`,
                        top: `${20 + (i % 3) * 25}%`,
                    }}
                    animate={{
                        y: [-20, 20, -20],
                        opacity: [0.2, 0.6, 0.2],
                    }}
                    transition={{
                        duration: 4 + i,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: i * 0.5,
                    }}
                />
            ))}
        </div>
    )
}

export default BackgroundEffects
