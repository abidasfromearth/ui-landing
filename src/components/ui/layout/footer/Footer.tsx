import { FooterSection, FooterSectionProps } from "@components/ui/layout/footer/section/FooterSection";
import { FooterSocials } from "./socials/FooterSocials";

const sections: FooterSectionProps[] = [
    {
        title: "Company",
        items: [
            { label: "About us", href: "#" },
            { label: "Pricing", href: "#" },
            { label: "Contact us", href: "#" },
            { label: "Features", href: "#" },
        ],
    },
    {
        title: "Product",
        items: [
            { label: "Figma design system", href: "#" },
            { label: "Ios kit", href: "#" },
            { label: "Android kit", href: "#" },
            { label: "Wireframe", href: "#" },
        ]
    },
    {
        title: "Resources",
        items: [
            { label: "Templates", href: "#" },
            { label: "Landing pages", href: "#" },
            { label: "Documentation", href: "#" },
            { label: "Comp library", href: "#" },
        ]
    },
    {
        title: "Legal",
        items: [
            { label: "Privacy policy", href: "#" },
            { label: "Terms & Conditions", href: "#" },
            { label: "Disclaimer", href: "#" },
            { label: "Affiliate programme", href: "#" },
        ]
    },
    {
        title: "Support",
        items: [
            { label: "Help centre", href: "#" },
            { label: "Raise ticket", href: "#" },
            { label: "Report", href: "#" },
            { label: "Refund", href: "#" },
        ]
    }
]

export const Footer = () => {
    return (
        <footer className="flex justify-start flex-col md:block">
            <FooterSection className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5" sections={sections} />
            <div className="flex justify-center mt-16">
                <FooterSocials/>
            </div>
            <p className="text-sm text-center text-text-grey mt-6">© 2023 Mode UI - All Rights Reserved.</p>
        </footer>
    )
}