import React, {useEffect} from "react";
import {useState} from "react";
import {Link, useParams} from "react-router-dom";


export function PlayerDetail() {

    const URI_COLLECTION = "http://145.24.222.61:8000/players/"

    const params = useParams()

    const [player, setPlayer] = useState([])

    const loadJson = () => {
        fetch(URI_COLLECTION + params.id, {
            method: "GET",
            headers: {"Accept": "application/json"}
        })
            .then((response) => response.json())
            .then((data) => setPlayer(data))
            .catch(error => console.log("Error: " + error))
    }

    useEffect(() => {
        loadJson()
    }, []);


    console.log(player)

    return <section>

        <header>
            <h1>Speler Details:</h1>
            <p>{player.name}</p>
            <p>{player.club}</p>
            <p>{player.foot}</p>
        </header>

        <button className="btn btn-info margin-5"><Link className="normal-text" to="/"><i
            className="bi bi-arrow-left"></i></Link></button>

    </section>
}