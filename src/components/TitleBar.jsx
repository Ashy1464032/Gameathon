export default function TitleBar(props) {

    return (
        <div className="bg-gradient-to-r from-orange-300 via-orange-500 to to-orange-900 p-5 text-center font-serif text-3xl">
            <h1 className="">{props.page}</h1>
        </div>
    )
}