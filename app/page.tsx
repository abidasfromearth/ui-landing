import { About } from "@/components/pages/home/about/About";
import { FeatureCard, FeatureCards } from "@/components/pages/home/feature-cards/FeatureCards";
import { Logos } from "@/components/pages/home/logos/Logos";
import { WiseReview } from "@/components/pages/home/review/WiseReview";
import { CardSolution } from "@/components/pages/home/solution/CardSolution";
import { SpendingWidget } from "@/components/pages/home/spending-widget/SpendingWidget";
import { StatisticCard, StatisticCards } from "@/components/pages/home/statistic-cards/StatisticCards";
import ArrowRightPurple from "@assets/arrow-right-purple.svg";
import FeatureCard1 from "@assets/feature-card-1.svg";
import FeatureCard2 from "@assets/feature-card-2.svg";
import FeatureCard3 from "@assets/feature-card-3.svg";
import Image from "next/image";


const featureCards: FeatureCard[] = [
  {
    title: "Globally Accepted",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
    image: FeatureCard1,
  },
  {
    title: "Biometric Integrated",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
    image: FeatureCard2,
  },
  {
    title: "Fully Secured",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
    image: FeatureCard3,
  },
];

const statisticCards: StatisticCard[] = [
  {
    statistic: "2 Million",
    title: "Customers",
    description: "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut",
  },
  {
    statistic: "1K",
    title: "Downloads",
    description: "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut",
  },
  {
    statistic: "$73 Million",
    title: "Transaction",
    description: "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut",
  },
  {
    statistic: "2.0",
    title: "Latest Version",
    description: "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut",
  },
];

export default function Home() {
  return (
    <>
      <About containerClassName="mt-[44px]" />
      <div className="mt-[100px]">
        <Logos />
      </div>
      <div>
        <h2 style={{ fontSize: 'clamp(2rem, 1.824rem + 0.751vw, 2.5rem)' }} className="font-semibold mt-[136px] text-center">Elevating Card Programs with Cutting-Edge Technology</h2>
        <p className="text-[18px] text-(--text-grey) text-center mt-[16px]">consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</p>
      </div>
      <div className="flex items-center justify-center gap-3 mt-[32px] text-(--button-purple)">
        <p>Compare all Pro features</p>
        <Image src={ArrowRightPurple} alt="Arrow right purple" />
      </div>
      <div className="mt-[48px] flex flex-col lg:flex-row gap-12">
        <FeatureCards featureCards={featureCards} />
      </div>
      <h3 style={{ fontSize: 'clamp(2rem, 1.824rem + 0.751vw, 2.5rem)' }} className="font-semibold text-center mt-[144px]">Elevating Card Programs with Cutting-Edge Technology</h3>
      <p className="text-[18px] text-(--text-grey) text-center mt-[16px]">consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      <div className="flex items-center justify-center gap-3 mt-[32px] text-(--button-purple)">
        <p>Compare all Pro features</p>
        <Image src={ArrowRightPurple} alt="Arrow right purple" />
      </div>
      <div className="mt-[100px]">
        <SpendingWidget />
      </div>
      <div className="mt-[192px] flex flex-col gap-16">
        <StatisticCards cards={statisticCards} />
      </div>
      <div className="mt-[144px]">
        <WiseReview />
      </div>
      <div className="mt-[134px]">
        <CardSolution/>
      </div>
      <h3 style={{ fontSize: 'clamp(2rem, 1.824rem + 0.751vw, 2.5rem)' }} className="font-semibold text-center mt-[116px]">Mode UI</h3>
      <p className="text-base text-(--text-grey) text-center mt-[20px]">Mode UI is a comprehensive design system that empowers designers and developers to create cohesive and visually stunning user interfaces across various platforms and devices</p>
    </>
  );
}
