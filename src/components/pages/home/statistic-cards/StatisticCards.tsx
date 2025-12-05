export type StatisticCard = {
    statistic: string;
    title: string;
    description: string;
}

export const StatisticCards = ({ cards }: { cards: StatisticCard[] }) => {
    return (
       cards.map((card: StatisticCard) => (
        <div className="flex flex-col gap-2 justify-center items-center" key={card.title}>
            <h3 style={{fontSize: 'clamp(2.5rem, 2.324rem + 0.751vw, 3rem)'}} className="font-semibold text-(--button-purple)">{card.title}</h3>
            <h4 className="mt-[8px] text-base text-black">{card.statistic}</h4>
            <p className="text-base text-(--text-grey) text-center">{card.description}</p>
        </div>
       ))
    )
}