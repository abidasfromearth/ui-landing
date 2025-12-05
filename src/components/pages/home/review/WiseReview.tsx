import Image from "next/image";
import WiseLogo from "@assets/wise.svg";
import SmilingGuy from "@assets/smiling-guy.png"
import Stars from "@assets/stars.svg";


export const WiseReview = () => {
    return (
        <div className="flex flex-col justify-center items-center gap-8">
            <Image src={WiseLogo} alt="wise logo"/>
            <h3 style={{fontSize: 'clamp(1.25rem, 0.986rem + 1.127vw, 2rem)'}} className="text-base text-(--blackv2) text-center">
            I had the pleasure of experiencing the next generation of card solutions with this incredible product. It's refreshing to see such innovation in the financial industry.
            </h3>
            <div className="mt-4 flex flex-col justify-center items-center gap-2">
                <Image src={SmilingGuy} alt="smiling guy"/>
                <p className="text-base text-black">Nick Babich</p>
                <p className="text-base text-(--text-grey)">Lead Designer</p>
                <Image src={Stars} alt="stars"/>
            </div>
        </div>
    )
}