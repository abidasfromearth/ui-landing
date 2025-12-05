import CardSpending from "@assets/card-spending-2x.png";
import Phone from "@assets/phone2.png";
import Image from "next/image";

export const SpendingWidget = () => {
    return (
        <div className="flex flex-col gap-8 lg:flex-row lg:justify-center">
            <div
                className="pt-[50px] px-[60px] flex justify-center items-center bg-[#FAF9FF] rounded-xl"
            >
                <Image src={Phone} alt="Phone" />
            </div>
            <div
            className="pt-[50px] px-[60px] flex justify-center items-center bg-[#FAF9FF] rounded-xl pb-[54px]"
            >
                <Image className="max-w-[380px]" src={CardSpending} alt="Card Spending" />
            </div>
        </div>
    )
}