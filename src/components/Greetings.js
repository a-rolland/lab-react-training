import React from 'react'

function Greetings(props) {

    let helloWord = "Hello"

    if (props.lang === "pt") {
        helloWord ="Olá"
    } else if (props.lang === "es") {
        helloWord = "Hola"
    }

    return (
    <p className="greetings">{helloWord} {props.children}</p>
    )
}

export default Greetings