export default function TravelerInfo({ selectedTraveler, setOpenOverlay }) {
    const fullName = selectedTraveler.firstName + ' ' + selectedTraveler.lastName


    return (
        <div id="traveler-info">
            <div className="card m-5 position-relative">
                <div className="pin" onClick={() => { setOpenOverlay(false) }}><i class="bi bi-x-circle"></i></div>

                <div className="card-body">
                    <h4 className="card-title">{fullName}</h4>
                    <p className="card-text"><b>Email: </b>{selectedTraveler.email}</p>
                    <p className="card-text"><i class="bi bi-telephone-fill"></i> <span className="border-bottom border-dark">{selectedTraveler.phone}</span></p>
                    <p className="card-text"><b>CF: </b>{selectedTraveler.fiscalCode}</p>
                </div>
            </div>
        </div>

    )
}