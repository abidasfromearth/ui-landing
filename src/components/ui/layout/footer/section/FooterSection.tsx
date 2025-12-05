import classNames from "classnames";
import { FC } from "react";

export type FooterSectionProps = {
    title: string;
    items: {
        label: string;
        href: string;
    }[];
}

type FooterSectionComponentProps = {
    sections: FooterSectionProps[];
    className?: string;
}

export const FooterSection: FC<FooterSectionComponentProps> = ({ sections, className }) => {
    return (
        <div className={classNames(className)}>
            {sections.map((section) => {
                return (
                    <div key={section.title}>
                        <h4 className="mb-6 font-bold text-black text-base">{section.title}</h4>
                        <ul className="flex flex-col gap-4 mb-8">
                            {section.items.map((item) => {
                              return <li className="text-black text-base" key={item.href}>{item.label}</li>  
                            })}
                        </ul>
                    </div>
                )
            })}
        </div>
    )
}