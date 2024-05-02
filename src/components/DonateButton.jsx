export default function DonateBtn() {
    function toDonatePage() {
        window.open("/Donate", "_self")
    }
    return (
        <button onClick={toDonatePage} className="rounded-lg text-center bg-slate-700 cursor-pointer m-3 p-2">
            Donate to our cause here!
        </button>
    )
}
