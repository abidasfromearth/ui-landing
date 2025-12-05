import LinkedInIcon from "@assets/Social-1.svg"
import DiscordIcon from "@assets/Social-2.svg"
import GithubIcon from "@assets/Social.svg"
import Image from "next/image"
import Link from "next/link"

export const FooterSocials = () => {
    const socials = [
        {
            icon: LinkedInIcon,
            href: "#"
        },
        {
            icon: DiscordIcon,
            href: "#"
        },
        {
            icon: GithubIcon,
            href: "#"
        }
    ]
    return (
        <div className="flex items-center gap-6">
            {socials.map((social) => (
                <Link href={social.href} key={social.href}>
                    <Image src={social.icon} alt={social.href}/>
                </Link>
            ))}
        </div>
    )
}