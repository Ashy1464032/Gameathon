import React from 'react';

export default function CheckOutBtn() {
    async function Donate() {

        var RequestHeaders = new Headers();

        RequestHeaders.append('Content-Type', 'application/json')
        RequestHeaders.append('Access-Control-Allow-Origin', '*')
        RequestHeaders.append('Access-Control-Allow-Methods', 'POST')

        var rawJson = JSON.stringify({"price": "price_1OuFGdIgQm2hLdipch9OY8CX"})

        var RequestOptions = {
            method: 'POST',
            headers: RequestHeaders,
            body: rawJson,
        }
        try {
            fetch('http://10.168.1.38:5000/create-checkout-session', RequestOptions)
            .then(response => response.json())
            .then(data => window.open(data.url, "_self"))
            .catch(error => console.log(error))
        }catch(e) {
            console.log(e)
        }
        
    }

    return (
        <div className="flex justify-center mt-[200px] text-2xl">
            <button onClick={Donate} className="rounded-lg text-center bg-slate-700 cursor-pointer m-3 p-2">Donate</button>
        </div>
    )
}