import {Link} from "react-router-dom";
import React from "react";

export function Error() {
    return (
    <div>
        <p>
            Deze pagina bestaat niet.
        </p>
        <button><Link to="/">Keer Om</Link></button>
    </div>
    )
}