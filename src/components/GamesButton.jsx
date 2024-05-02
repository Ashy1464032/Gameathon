export default function GamesBtn() {
    function toGamesPage() {
        window.open("/games", "_self")
    }
    return (
        <button onClick={toGamesPage} className="rounded-lg text-center bg-slate-700 cursor-pointer m-3 p-2">
            Want to find out what games we play!
        </button>
    )
}
