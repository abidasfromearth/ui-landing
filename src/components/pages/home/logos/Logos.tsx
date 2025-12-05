"use client";

import Logo0 from "@assets/logos/Logo-0.svg";
import Logo1 from "@assets/logos/Logo-1.svg";
import Logo2 from "@assets/logos/Logo-2.svg";
import Logo3 from "@assets/logos/Logo-3.svg";
import Logo4 from "@assets/logos/Logo-4.svg";
import Logo5 from "@assets/logos/Logo-5.svg";
import Logo6 from "@assets/logos/Logo-6.svg";
import Logo7 from "@assets/logos/Logo-7.svg";
import Image from "next/image";
import { useEffect, useState } from "react";
const logos = [Logo0, Logo1, Logo2, Logo3, Logo4, Logo5, Logo6, Logo7];

export const Logos = () => {
    
    const [isTablet, setIsTablet] = useState(false);

    useEffect(() => {
        const checkTablet = () => {
            setIsTablet(window.innerWidth >= 768 && window.innerWidth < 1168);
        };
        
        checkTablet();
        window.addEventListener('resize', checkTablet);
        
        return () => window.removeEventListener('resize', checkTablet);
    }, []);
    
    return (
        <div className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-[repeat(8,1fr)] gap-y-10 gap-x-2.5 justify-items-center">
            {logos.slice(0, isTablet ? logos.length - 3 : logos.length).map((logo, index: number) => {
                return (
                    <Image src={logo} alt="Logo" key={index} />
                )
            })}

           {isTablet && (
             <div className="col-span-4 md:col-span-5 flex justify-center gap-4">
             {logos.slice(-3).map((logo, index: number) => {
                 return (
                     <Image src={logo} alt="Logo" key={index} />
                 )
             })}
            </div>
           )}
        </div>
    )
}