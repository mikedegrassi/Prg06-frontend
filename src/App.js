import React, {useEffect, useState} from "react";
import "./index.css";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {Layout} from "./Layout";
import NewPlayer from "./NewPlayer";
import Players from "./Players";
import {PlayerDetail} from "./PlayerDetail";
import UpdatePlayer from "./UpdatePlayer";
import {Error} from "./Error";

export default function App() {

    const [players, setPlayers] = useState([])

    let [page, setPage] = useState(1);

    const [lastPage, setLastPage] = useState(1)

    const URI_COLLECTION = `http://145.24.222.61:8000/players/?start=1&page=${page}&limit=3`

    const loadJson = () => {
        fetch(URI_COLLECTION, {
            method: "GET",
            headers: {"Accept": "application/json"}
        })
            .then((response) => response.json())
            .then((result) => (setLastPage(result.pagination._links.last.page)) (setPlayers(result.items)))
            .catch(error => console.log("Error: " + error))
    }

    // kan niet verder dan de laatste pagina en niet naar 0 of -1
    const checkLastPage = () => {
        if (page > lastPage) {
            setPage(lastPage)
        } else if (page === 0) {
            setPage(1)
        }
    }

    useEffect(() => {
        checkLastPage()
        loadJson()
    }, [page]);

    return (
        <div className="flex">

            <BrowserRouter>

                <Routes>
                    <Route path="/" element={<Layout/>}>
                        <Route index element={<Players players={players} playerRefreshHandler={() => loadJson()}
                                                       setPage={setPage} page={page} lastPage={lastPage}/>}/>
                        <Route path="create" element={<NewPlayer playerRefreshHandler={() => loadJson()}/>}/>
                        <Route path="players/:id" element={<PlayerDetail playerRefreshHandler={() => loadJson()}/>}/>
                        <Route path="players/update/:id"
                               element={<UpdatePlayer name={players.name} playerRefreshHandler={() => loadJson()}/>}/>
                        <Route path="*" element={<Error/>}/>
                    </Route>
                </Routes>

            </BrowserRouter>

        </div>

    );
}