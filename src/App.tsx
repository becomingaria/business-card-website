import { motion } from "framer-motion"
import {
    ProfileCard,
    LinkButton,
    BackgroundEffects,
    Footer,
} from "./components"
import { socialLinks, profileConfig } from "./config/links"

function App() {
    return (
        <div className='relative min-h-screen flex flex-col'>
            {/* Background effects */}
            <BackgroundEffects />

            {/* Main content */}
            <main
                className='relative z-10 flex-1 flex flex-col items-center justify-start px-4 pb-8 md:pb-12'
                style={{ paddingTop: "6rem" }}
            >
                {/* Container with max width for larger screens */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className='w-full max-w-md mx-auto'
                >
                    {/* Profile section */}
                    <ProfileCard
                        name={profileConfig.name}
                        bio={profileConfig.bio}
                        avatarUrl={profileConfig.avatarUrl || undefined}
                    />

                    {/* Links section */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className='space-y-3 md:space-y-4'
                    >
                        {socialLinks.map((link, index) => (
                            <LinkButton
                                key={link.id}
                                href={link.href}
                                label={link.label}
                                icon={link.icon}
                                color={link.color}
                                index={index}
                                description={link.description}
                            />
                        ))}
                    </motion.div>
                </motion.div>

                {/* Footer */}
                <Footer />
            </main>
        </div>
    )
}

export default App
