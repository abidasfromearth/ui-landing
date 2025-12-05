import classNames from "classnames"

export const MenuMobile = ({navItems, isOpen}: {navItems: {label: string, href: string}[], isOpen: boolean}) => {
    return (
        <div className={classNames("absolute top-0 left-0 w-full h-full bg-[var(--burger-menu-opened-bg)] z-10 transition-all duration-300 delay-0", isOpen ? 'opacity-100' : 'opacity-0')}>
            <nav className="flex flex-col gap-4 relative top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]">
                {navItems.map((item) => (
                    <a key={item.label} className='text-xl text-center text-black' href={item.href}>{item.label}</a>
                ))}
            </nav>
        </div>
    )
}