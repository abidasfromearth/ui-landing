"use client";
import { BurgerButton } from '@components/ui/layout/header/BurgerButton';
import { MenuMobile } from '@components/ui/layout/header/MenuMobile';
import { Button } from '@components/ui/button/Button';
import ArrowRight from '@assets/Icons.svg';
import Logo from '@assets/Logo.svg';
import Image from "next/image";
import { useState } from 'react';

const navItems = [
    {
        label: 'Card access',
        href: '#'
    },
    {
        label: 'Banking',
        href: '#'
    },
    {
        label: 'Processing',
        href: '#'
    },
    {
        label: 'About',
        href: '#'
    },
    {
        label: 'Carrier',
        href: '#'
    },
    {
        label: 'Contact',
        href: '#'
    }
]

export const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className='flex justify-between items-center'>
            <div className='flex items-center'>
                <Image src={Logo} alt='Logo'/>
            </div>
            <nav className='hidden lg:flex gap-10 items-center'>
                {navItems.map((item) => (
                    <a key={item.label} className='text-xl' href={item.href}>{item.label}</a>
                ))}
            </nav>
            <Button className='px-4 py-2 bg-[var(--grey)]'>
                <div className='flex items-center gap-2'>
                    <span>Login</span>
                    <Image src={ArrowRight} alt='Arrow right'/>
                </div>
            </Button>
            <div className='lg:hidden h-full flex items-center justify-center'>
                <BurgerButton isOpen={isOpen} setIsOpen={setIsOpen} />
            </div>
            <MenuMobile navItems={navItems} isOpen={isOpen} />
        </header>
    )
}