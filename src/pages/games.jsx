import TitleBar from "../components/TitleBar";
import GamesLibrary from "../components/GamesLibrary";
import PortalImage from "../images/Games/Portal-Image.jpg";
import R6SImage from "../images/Games/R6S.jpg"
import RocketLeague from "../images/Games/League.jpg"
import  GoatSim3 from "../images/Games/GS3.png"
import Tetris from "../images/Games/Tetris.jpg"
import MWIII from "../images/Games/MWIII.png"

export default function Games() {
    return(
        <>
            <TitleBar page='Games'/>
            <div className="flex flex-row justify-center">
                <GamesLibrary
                    src={PortalImage}
                    alt="Portal Image"
                    name="Portal"
                    desc="A puzzle game that uses a portal gun to teleport yourself and objects between locations to solve locations."
                />
                <GamesLibrary
                    src={R6SImage}
                    alt="Rainbow Six Siege Image"
                    name="Rainbow Six Siege"
                    desc="Rainbow Six Siege is an elite, tactical team-based shooter where superior planning and execution triumph."
                />
                <GamesLibrary
                    src={RocketLeague}
                    alt="Rocket League Image"
                    name="Rocket League"
                    desc="Rocket League is a high-powered hybrid of arcade-style soccer and vehicular mayhem with easy-to-understand controls and fluid, physics-driven competition"
                />
                <GamesLibrary
                    src={GoatSim3}
                    alt="Goat Sim 3"
                    name="Goat Simulator 3"
                    desc="Gather your herd and venture forth into Goat Simulator 3; an all-new, totally realistic, sandbox farmyard experience."
                />
                <GamesLibrary
                    src={Tetris}
                    alt="Tetris"
                    name="Tetris"
                    desc="Tetris is a block based puzzled game where you have to fill all the spaces with falling blocks to destroy rows that fill up before the screen fills completely"
                />
                <GamesLibrary
                    src={MWIII}
                    alt="Modern Warfare III"
                    name="Modern Warfare III"
                    desc="In the direct sequel to the record-breaking Call of Duty®: Modern Warfare® II, Captain Price and Task Force 141 face off against the ultimate threat."
                />
            </div>
        </>
    )
}