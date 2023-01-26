import React from "react";
import "./index.css";
import "./App.css";
import {Link} from "react-router-dom";

export function Player(props) {

    const deleteNote = () => {
        fetch(props.player._links.self.href, {
            method: "DELETE",
            headers: {"Accept": "application/json"}
        })
            .then((response) => props.playerRefreshHandler())
            .catch(error => console.log("Error: " + error))
    }

    return (

        <div>

            <p className="name-text">{props.player.name}</p>

            <React.StrictMode>
                <button className="btn btn-secondary margin-10"><Link className="normal-text" to={"players/" + props.player.id}>Details</Link></button>
                <button className="btn btn-secondary margin-10"><Link className="normal-text" to={"players/update/" + props.player.id}>Updaten</Link></button>
            </React.StrictMode>

            <button className="btn btn-danger margin-10 normal-text right" onClick={deleteNote}><i
                className="bi bi-trash3"></i></button>
        </div>

    )

}