import React from "react";
import "./App.css"
import {Link} from "react-router-dom"
import {Outlet} from "react-router-dom"


export function Layout() {
    return <section>

        <React.Fragment>
            <button className="btn btn-outline-dark margin-10"><Link className="normal-text-dark" to="/">Alle Spelers</Link></button>
            <button className="btn btn-outline-dark margin-10"><Link className="normal-text-dark" to="create">Maak nieuwe speler</Link></button>
        </React.Fragment>

        <Outlet />

    </section>
}