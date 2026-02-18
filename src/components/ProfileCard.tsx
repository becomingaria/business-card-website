import { motion } from "framer-motion"

interface ProfileCardProps {
    name: string
    bio: string
    avatarUrl?: string
}

const ProfileCard = ({ name, bio, avatarUrl }: ProfileCardProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className='flex flex-col items-center text-center pt-8 mb-8'
        >
            {/* Avatar */}
            <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                    delay: 0.1,
                }}
                className='relative mb-6'
            >
                {/* Glow effect behind avatar */}
                <div className='absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full blur-xl opacity-50 scale-110' />

                {/* Avatar container */}
                <div className='relative w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-surface-light bg-surface'>
                    {avatarUrl ? (
                        <img
                            src={avatarUrl}
                            alt={name}
                            className='w-full h-full object-cover'
                        />
                    ) : (
                        /* Placeholder avatar */
                        <div className='w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/30 to-secondary/30'>
                            <span className='text-4xl md:text-5xl text-text-muted'>
                                👤
                            </span>
                        </div>
                    )}
                </div>

                {/* Status indicator */}
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.5 }}
                    className='absolute bottom-1 right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-surface'
                />
            </motion.div>

            {/* Name */}
            <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className='text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary-light via-secondary to-accent bg-clip-text text-transparent mb-3'
            >
                {name}
            </motion.h1>

            {/* Bio */}
            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className='text-text-muted text-sm md:text-base w-full leading-relaxed'
            >
                {bio}
            </motion.p>
        </motion.div>
    )
}

export default ProfileCard
