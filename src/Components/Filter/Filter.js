import '../../App.css'
import Header from "../Header/Header";
import { useState } from "react";
import List from "./List";


function Filter() {

    const [searchedWord, setSearchedWord] = useState({ area: '', category: '' })
    const [showBox, setShowBox] = useState(false)
    return (<div className="main">
        <Header />
        <form>

            <div className="head">Filter by</div>
            <label >Area</label>
            <input className="inputText" type='text' onChange={(e) => {
                setSearchedWord((prev) => {
                    return {
                        ...prev,
                        area: e.target.value
                    }
                })
            }} />
            <label ></label>
            <div className="head">OR</div>
            <label >Category</label>
            <input className="inputText" type='text' onChange={(e) => {
                setSearchedWord((prev) => {
                    return {
                        ...prev,
                        category: e.target.value
                    }
                })
            }} />

            <button className="size btn" onClick={(e) => {
                e.preventDefault()
                setShowBox(true)

            }}

            > Search </button>


        </form>

        {
            (showBox) && <List searchedWord={searchedWord} />
        }


    </div >
    );
}

export default Filter;