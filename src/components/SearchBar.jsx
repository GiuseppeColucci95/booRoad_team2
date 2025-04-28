import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useTrips } from "../contexts/globalContext";

export default function SearchBar({ setSearchQuery }) {

    return (
        <>
            <div className="mb-3 d-flex w-50 mx-auto">
                <input
                    type="text"
                    className="form-control"
                    name="search-bar"
                    id="search-bar"
                    aria-describedby="helpId"
                    placeholder="Search here..."
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
            </div>
        </>
    )
}