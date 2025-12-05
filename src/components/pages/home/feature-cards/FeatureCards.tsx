import Image, { StaticImageData } from "next/image";

export type FeatureCard = {
    title: string;
    description: string;
    image: string | StaticImageData;
}

export const FeatureCards = ({featureCards}: {featureCards: FeatureCard[]}) => {
    return (
        featureCards.map((featureCard) => {
            return (
                <div key={featureCard.title} className="flex flex-col items-center justify-center gap-4">
                    <Image src={featureCard.image} alt={featureCard.title} />
                    <h2 className="text-black text-base text-center">{featureCard.title}</h2>
                    <p className="text-(--text-grey) text-sm text-center">{featureCard.description}</p>
                </div>
            )
        })
    )
}