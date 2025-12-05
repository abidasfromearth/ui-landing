export const BurgerButton = ({isOpen, setIsOpen}: {isOpen: boolean, setIsOpen: (isOpen: boolean) => void}) => {
    

    return (
        <>
            <button className="h-full relative z-20" onClick={() => setIsOpen(!isOpen)}>
                <div className="flex flex-col h-full gap-2.5">
                    <div className='w-10 h-[2px] bg-(--burger-menu-bg)'/>
                    <div className='w-10 h-[2px] bg-(--burger-menu-bg)'/>
                    <div className='w-10 h-[2px] bg-(--burger-menu-bg)'/>
                </div>   
             </button>
        </>
    )
}