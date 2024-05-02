import TitleBar from "../components/TitleBar";
import DonateBtn from "../components/DonateButton";
import GamesBtn from "../components/GamesButton";

export default function Home() {
    return (
        <div>
            <TitleBar page="Home"/>
            <div className="flex justify-center">
                <p className="max-w-[70ch] pt-10">
                    Welcome to GameAthon Co, where gaming meets philanthropy! We are dedicated to hosting dynamic Gameathon charity
                    events in support of AbleGamers Charity. Our mission is simple: unite the gaming community for a common cause.
                    At GameAthon Co, inclusivity takes center stage, with events designed to be accessible to all gamers, regardless of ability.
                    Participants register, set fundraising goals, and dive into a diverse gaming lineup, knowing that every moment spent gaming
                    contributes to making a positive impact. Join us in transforming the gaming world into a force for good, supporting AbleGamers Charity's
                    mission to make gaming accessible to everyone. Game on for a cause!
                </p>
            </div>
            <div className="text-center flex items-center justify-center">
                <DonateBtn />
                <GamesBtn />
            </div>
        </div>
    );
}