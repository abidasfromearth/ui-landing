import { Button } from "@/components/ui/button/Button";
import Card from "@assets/card.svg";
import CustomerSupport from "@assets/support.svg";
import Image from "next/image";

export const CardSolution = () => {
    return (
        <div className="flex flex-col justify-center items-center gap-2">
            <h3 style={{ fontSize: 'clamp(2rem, 1.824rem + 0.751vw, 2.5rem)' }} className="font-semibold text-center">Unlock Limitless Possibilities with Our New Card Solutions</h3>
            <div className="flex flex-col sm:flex-row sm:justify-center sm:items-center gap-2 w-full">
                <Button className="flex flex-row justify-center items-center gap-2 bg-(--button-purple) pt-3 px-3.5 pb-3 mt-6.5 sm:mt-0">
                    <span className="text-base text-white">Unlock your card</span>
                    <Image src={Card} alt="card" />
                </Button>
                <Button className="flex flex-row justify-center items-center gap-2 bg-(--grey) pt-3 px-3.5 pb-3">
                    <span className="text-base text-(--text-grey)">Customer support</span>
                    <Image src={CustomerSupport} alt="card" />
                </Button>
            </div>
        </div>
    )
}