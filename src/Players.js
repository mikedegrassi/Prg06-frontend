import "./index.css";
import "./App.css";
import {Player} from "./Player"
import React from "react";

export default function Players(props) {

    const showNotes = props.players.map((value, index) => <Player className="players"  key={index} player={value} playerRefreshHandler={props.playerRefreshHandler}/>)

    return (
        <div>
            <h1>Spelers Lijst:</h1>
            <div className="players">
                {showNotes}
            </div>
            <p className="name-text">Pagina: {props.page}</p>

            <button className="btn btn-primary margin-10" onClick={() => props.setPage(1)}>&lt; &lt;</button>
            <button className="btn btn-primary margin-10" onClick={() => props.setPage(props.page - 1)}>Vorige</button>
            <button className="btn btn-primary margin-10" onClick={() => props.setPage(props.page + 1)}>Volgende</button>
            <button className="btn btn-primary margin-10" onClick={() => props.setPage(props.lastPage)}>&gt; &gt;</button>

        </div>

    )

}