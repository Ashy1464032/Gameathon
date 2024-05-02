import React from "react";


export default function GamesLibrary(props) {
    return (
        <div className="text-center p-2 flex flex-col self-center">
            <img className="w-[175px] h-[250px] pt-5 self-center" src={props.src} alt={props.alt} />
            <p className="max-w-[30ch] break bg-white bg-opacity-60"><b>{props.name}: </b>{props.desc}</p>
        </div>
    )
}