import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import type { IconType } from "react-icons"
import { FaChevronDown } from "react-icons/fa"

interface LinkButtonProps {
    href: string
    label: string
    icon: IconType
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
                    className='flex items-center gap-4 px-5 py-4 md:py-5 cursor-pointer'
                    onClick={description ? handleToggle : undefined}
                >
                    {/* Icon container */}
                    <motion.div
                        className='flex items-center justify-center w-10 h-10 rounded-lg flex-shrink-0'
                        style={{
                            backgroundColor: `${color || "var(--color-primary)"}20`,
                        }}
                    >
                        <Icon
                            className='text-xl md:text-2xl transition-colors duration-300'
                            style={{
                                color: color || "var(--color-primary-light)",
                            }}
                        />
                    </motion.div>

                    {/* Label */}
                    <span className='flex-1 text-left font-medium text-text'>
                        {label}
                    </span>

                    {/* Expand/collapse indicator */}
                    {description && (
                        <motion.div
                            animate={{ rotate: isExpanded ? 180 : 0 }}
                            transition={{ duration: 0.2 }}
                            className='p-2'
                        >
                            <FaChevronDown
                                className='text-text-muted'
                                style={{ fontSize: "0.875rem" }}
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
