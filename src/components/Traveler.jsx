export default function Traveler({ traveler }) {
    return (
        <>
            <div className="card">
                <div className="card-body">
                    <h4 className="card-title">{traveler.firstName}</h4>
                    <p className="card-text">{traveler.lastName}</p>
                    <p className="card-text">{traveler.email}</p>
                    <p className="card-text">{traveler.phone}</p>
                    <p className="card-text">{traveler.fiscalCode}</p>
                </div>
            </div>

        </>
    )
}