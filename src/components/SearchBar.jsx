import { useState } from "react"
export default function SearchBar({ travelers }) {
    const [traveler, setTraveler] = useState('')
    function submitHandler(e) {
        e.preventDefault()
        const foundTraveler = travelers.includes(traveler.toLowerCase)
    }
    return (
        <>
            <form onSubmit={submitHandler}>
                <div class="mb-3">
                    <input
                        type="text"
                        class="form-control"
                        name="search-bar"
                        id="search-bar"
                        aria-describedby="helpId"
                        placeholder="Cerca..."
                        onChange={(e) => { setTraveler(e.target.value) }}
                    />
                </div>
                <button type="submit"><i class="bi bi-search"></i></button>
            </form>

        </>
    )
}