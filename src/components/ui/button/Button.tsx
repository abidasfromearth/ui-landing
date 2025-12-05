import classNames from "classnames";

export const Button = ({className, children}: {className?: string, children?: React.ReactNode}) => {
    return (
        <button className={classNames(` text-black rounded-xl`, className)}>
            {children}
        </button>
    )
}