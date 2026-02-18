import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { CaretDown, type Icon } from "@phosphor-icons/react"

interface LinkButtonProps {
    href: string
    label: string
    icon: Icon
    color?: string
    index: number
    description?: string
}

const LinkButton = ({
    href,
    label,
    icon: Icon,
    color,
    index,
    description,
}: LinkButtonProps) => {
    const [isExpanded, setIsExpanded] = useState(false)

    const handleToggle = (e: React.MouseEvent) => {
        e.preventDefault()
        e.stopPropagation()
        setIsExpanded(!isExpanded)
    }

    return (
        <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
                duration: 0.4,
                delay: 0.5 + index * 0.1,
                ease: "easeOut",
            }}
            className='relative w-full'
        >
            {/* Glow effect on hover */}
            <motion.div
                className='absolute inset-0 rounded-xl opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none'
                style={{
                    background: `linear-gradient(135deg, ${color || "var(--color-primary)"}20 0%, ${color || "var(--color-secondary)"}20 100%)`,
                    filter: "blur(10px)",
                }}
            />

            {/* Main button container */}
            <div
                className={`relative rounded-xl bg-surface/80 backdrop-blur-sm border border-surface-light/50 hover:border-primary/50 transition-all duration-300 overflow-hidden ${isExpanded ? "border-primary/30" : ""}`}
            >
                {/* Header row - clickable to toggle */}
                <div
                    className='flex items-center gap-4 lg:gap-5 xl:gap-6 px-5 py-4 md:py-5 lg:py-6 xl:py-7 cursor-pointer'
                    onClick={description ? handleToggle : undefined}
                >
                    {/* Icon container */}
                    <motion.div
                        className='flex items-center justify-center w-10 h-10 lg:w-14 lg:h-14 xl:w-16 xl:h-16 rounded-lg lg:rounded-xl flex-shrink-0'
                        style={{
                            backgroundColor: `${color || "var(--color-primary)"}20`,
                        }}
                    >
                        <Icon
                            weight='duotone'
                            className='w-5 h-5 md:w-6 md:h-6 lg:w-8 lg:h-8 xl:w-10 xl:h-10 transition-colors duration-300'
                            style={{
                                color: color || "var(--color-primary-light)",
                            }}
                        />
                    </motion.div>

                    {/* Label */}
                    <span className='flex-1 text-left font-medium text-text lg:text-lg xl:text-xl'>
                        {label}
                    </span>

                    {/* Expand/collapse indicator */}
                    {description && (
                        <motion.div
                            animate={{ rotate: isExpanded ? 180 : 0 }}
                            transition={{ duration: 0.2 }}
                            className='p-2'
                        >
                            <CaretDown
                                weight='bold'
                                className='w-4 h-4 lg:w-5 lg:h-5 text-text-muted'
                            />
                        </motion.div>
                    )}
                </div>

                {/* Expandable description */}
                <AnimatePresence>
                    {isExpanded && description && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2, ease: "easeInOut" }}
                            className='overflow-hidden'
                        >
                            <div className='px-6 pb-6 pt-2'>
                                <div className='border-t border-surface-light/30 pt-4 mb-4'>
                                    <p className='text-text-muted text-sm leading-relaxed'>
                                        {description}
                                    </p>
                                </div>

                                {/* Visit link button */}
                                <motion.a
                                    href={href}
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className='inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:scale-105'
                                    style={{
                                        backgroundColor: `${color || "var(--color-primary)"}20`,
                                        color:
                                            color ||
                                            "var(--color-primary-light)",
                                    }}
                                    whileHover={{ x: 3 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    Visit {label}
                                    <span>→</span>
                                </motion.a>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.div>
    )
}

export default LinkButton
