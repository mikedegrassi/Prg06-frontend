import React, {useEffect, useState} from "react";
import "./index.css";
import "./App.css"
import {Link} from "react-router-dom";

export default function NewPlayer(props) {

    const URI_COLLECTION = "http://145.24.222.61:8000/players"

    const [player, setPlayer] = useState({
        name: "",
        club: "",
        foot: ""
    })

    const makePlayer = (event) => {

        event.preventDefault()

        fetch(URI_COLLECTION, {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(player)
        })
            .then((response) => props.playerRefreshHandler())
    }

    const onChangeHandler = (event) => {
        setPlayer({
            ...player,
            [event.target.name]: event.target.value
        })
    }

    return (

        <section>
            <h1>Maak nieuwe speler:</h1>
            <form action="">
                <label className="flex margin-5" htmlFor="name">Naam:</label>
                <input className="margin-5" type="text" value={player.name} name="name" onChange={onChangeHandler}/><br/>
                <label className="flex margin-5" htmlFor="club">Club:</label>
                <input className="margin-5" type="text" value={player.club} name="club" onChange={onChangeHandler}/><br/>
                <label className="flex margin-5" htmlFor="foot">Voet:</label>
                <input className="margin-5" type="text" value={player.foot} name="foot" onChange={onChangeHandler}/><br/>
                <button className="btn btn-info margin-5"><Link className="normal-text" to="/"><i
                    className="bi bi-arrow-left"></i></Link></button>
                <button className="btn btn-success margin-5" type="submit" onClick={makePlayer}>Maak 'm</button>
            </form>
        </section>

    )

}