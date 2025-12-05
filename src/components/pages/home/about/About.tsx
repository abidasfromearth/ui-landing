import meshImage from "@/assets/mesh.png"
import { Button } from "@/components/ui/button/Button"
import ArrowRight from "@assets/icon-right-white.svg"
import classNames from "classnames"
import Image from "next/image"


export const About = ({containerClassName}: {containerClassName?: string}) => {
    return (
        <div
        style={{ backgroundImage: `url(${meshImage.src})` }}
         className={classNames(`min-h-[532px] max-w-[540px] mx-auto ${containerClassName}`)}>
            <h2 className="text-center text-base pt-[48px]">Seamless experience</h2>
            {/* from 40px to 62px, 375px to 1440px */}
            <h1 style={{ fontSize: 'clamp(2.5rem, 2.016rem + 2.066vw, 3.875rem)' }} className="text-center font-semibold pt-[16px] tracking-tight">Unleashing the Next Generation of Card Solutions</h1>
            <p className="text-center text-[18px] pt-[16px] text-(--text-grey)">consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</p>
            <div className='flex justify-center relative'>
                <Button className="px-4 py-2 bg-[var(--button-purple)] mt-8 w-full xs:w-auto">
                  <div className="flex items-center gap-2 justify-center">
                    <span className="text-white">Unlock your Card</span>
                    <Image src={ArrowRight} alt="Arrow right" />
                 </div>
                </Button>
                <p className="absolute bottom-0 left-1/2 translate-x-[-50%] translate-y-[120%] text-center text-sm text-(--text-grey) mt-4">*No credit card required</p>
            </div>
            
        </div>
    )
}