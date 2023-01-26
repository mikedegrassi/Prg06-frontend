import React, {useEffect, useState} from "react";
import "./index.css";
import {useParams, Link} from "react-router-dom";

export default function UpdatePlayer(props) {

    const URI_COLLECTION = "http://145.24.222.61:8000/players/"

    const params = useParams()

    const [player, setPlayer] = useState({
        name: "",
        club: "",
        foot: ""
    })

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

    const updatePlayer = (event) => {

        event.preventDefault()

        fetch(URI_COLLECTION + params.id, {
            method: "PUT",
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
            <h1>Update speler</h1>

            <form action="">
                <label className="flex margin-5" htmlFor="name">Name:</label>
                <input className="margin-5" type="text" defaultValue={player.name} name="name" onChange={onChangeHandler}/><br/>
                <label className="flex margin-5" htmlFor="club">Club:</label>
                <input className="margin-5"  type="text" value={player.club} name="club" onChange={onChangeHandler}/><br/>
                <label className="flex margin-5" htmlFor="foot">Foot:</label>
                <input className="margin-5"  type="text" value={player.foot} name="foot" onChange={onChangeHandler}/><br/>
                <button className="btn btn-info margin-5"><Link className="normal-text" to="/"><i
                    className="bi bi-arrow-left"></i></Link></button>
                <button className="btn btn-success margin-5" type="submit" onClick={updatePlayer}>Update</button>
            </form>
        </section>

    )

}