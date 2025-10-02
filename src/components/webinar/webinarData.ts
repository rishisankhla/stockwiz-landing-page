import { WebinarItem } from "./WebinarCard";
import frameIcon from "/frame-1686553370.svg";
import frameIcon1 from "/frame-1686553370-1.svg";
import frameIcon2 from "/frame-1686553370-2.svg";
import frameIcon3 from "/frame-1686553370-3.svg";

export const WEBINAR_DATA: WebinarItem[] = [
  {
    id: 1,
    icon: frameIcon1,
    backgroundColor: "bg-[#000e2e]",
    titleNormal: "Everything You Need To Learn",
    titleBold: "About AI & Algo Trading",
    description:
      "The world of trading is moving fast – extremely fast, and in this era of algo trading and artificial intelligence, we will give you a sneak peek into how this new form of trading can significantly increase the odds of being profitable in the market. You'll learn how big professional trading desks are hunting retail stop losses, exploiting big market movements – all on autopilot.",
  },
  {
    id: 2,
    icon: frameIcon2,
    backgroundColor: "bg-[#002222]",
    titleNormal: "Learn To Create, Back Test and Deploy Trading Bots Using",
    titleBold: "Our Secret Strategies",
    description:
      "Unleash the power of algorithmic trading tools which lets you create, test, deploy your strategies spanning across price action, smart money concepts, institutional price action, indicators, volume, open interest and much more in a few clicks without the need of any coding or programming skills. Additionally, you will get access to few of our secret algo strategies – which are ready to deploy in the live markets.",
  },
  {
    id: 3,
    icon: frameIcon,
    backgroundColor: "bg-[#002418]",
    titleBold: "Detailed Verified Profit / Loss Statement",
    titleNormal: "& Algo Trade History",
    description:
      "- Get access to detailed case studies of verified real trades executed on autopilot from our proprietary custom algo trading robots which seamlessly scan, analyse, deploy and manage trades in equity, futures and options segment for intraday as well as swing trading styles. Discover a wide variety of directional and non-directional trading strategies, which will make you top dollar even when you sleep.",
    hasVerifiedBadge: true,
  },
  {
    id: 4,
    icon: frameIcon3,
    backgroundColor: "bg-[#001b26]",
    titleNormal: "How Tools Like Chat GPT, Trading View & StrykeX Can Get You To The",
    titleBold: "Top 1% Elite Traders",
    description:
      "Gone are the days where traders were glued to their screen from 9:15 am till 3:30pm – scanning, executing, managing their trades manually. This is ineffective and a perfect recipe for increasing losses. BUT, with A.I trading tools and platforms such as Trading View & StrykeX combined with Chat GPT, you can do all this on complete automation with 5X better results, without even clicking a button or writing a single line of code. That's the power of artificial intelligence – that's the future of retail trading.",
  },
];

export const webinarData = WEBINAR_DATA;
