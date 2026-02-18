import {
    FaDiscord,
    FaTwitch,
    FaInstagram,
    FaReddit,
    FaBriefcase,
} from "react-icons/fa"
import type { IconType } from "react-icons"

// ============================================
// 🔗 EDIT YOUR LINKS & DESCRIPTIONS HERE
// ============================================
const DISCORD_URL = "https://discordapp.com/users/532422298272006145"
const DISCORD_DESC =
    "Connect with me directly on Discord! DM me for collabs, questions, or just to say hi."

const TWITCH_URL = "https://www.twitch.tv/becoming_aria"
const TWITCH_DESC =
    "Watch me code live, play games, and hang out with the community. Streams weekly!"

const INSTAGRAM_URL = "https://www.instagram.com/becoming_aria"
const INSTAGRAM_DESC =
    "Behind-the-scenes content, life updates, and visual stories from my journey."

const REDDIT_URL = "https://www.reddit.com/user/Aria_Jacinto/submitted/"
const REDDIT_DESC =
    "Join discussions, see my posts, and connect with me on various subreddits."

const PORTFOLIO_URL = "https://ariahallow.dev"
const PORTFOLIO_DESC =
    "My professional work, projects, resume, and technical blog posts."

// ============================================
// 👤 EDIT YOUR PROFILE INFO HERE
// ============================================
export const profileConfig = {
    name: "Aria J Hallow",
    bio: "Hello! I'm Aria, a passionate software developer and content creator. I love building cool projects and sharing my journey with the world. Here are the places you can find me on the internet:",
    avatarUrl:
        "https://ariahallow.dev/static/media/me.c94d27a1c7c9420120b5.png", // Add your avatar image URL here
}

// ============================================
// ⚙️ Link configuration (no need to edit below)
// ============================================
interface SocialLink {
    id: string
    label: string
    href: string
    icon: IconType
    color: string
    description: string
}

export const socialLinks: SocialLink[] = [
    {
        id: "discord",
        label: "Discord",
        href: DISCORD_URL,
        icon: FaDiscord,
        color: "#5865F2",
        description: DISCORD_DESC,
    },
    {
        id: "twitch",
        label: "Twitch",
        href: TWITCH_URL,
        icon: FaTwitch,
        color: "#9146FF",
        description: TWITCH_DESC,
    },
    {
        id: "instagram",
        label: "Instagram",
        href: INSTAGRAM_URL,
        icon: FaInstagram,
        color: "#E4405F",
        description: INSTAGRAM_DESC,
    },
    {
        id: "reddit",
        label: "Reddit",
        href: REDDIT_URL,
        icon: FaReddit,
        color: "#FF4500",
        description: REDDIT_DESC,
    },
    {
        id: "portfolio",
        label: "Professional Portfolio",
        href: PORTFOLIO_URL,
        icon: FaBriefcase,
        color: "#7c3aed",
        description: PORTFOLIO_DESC,
    },
]
