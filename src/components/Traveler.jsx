export default function TravelerInfo({ selectedTraveler, setOpenOverlay }) {
    const fullName = selectedTraveler.firstName + ' ' + selectedTraveler.lastName


    return (
        <div id="traveler-info">
            <div className="card-info p-4 m-5 position-relative">
                <div className="pin" onClick={() => { setOpenOverlay(false) }}><i class="bi bi-x"></i></div>
                <div className="card-body">
                    <h4 className="card-title mb-2">{fullName}</h4>
                    <p className="card-text mb-2"><b className="text-lilac">Email: </b>{selectedTraveler.email}</p>
                    <p className="card-text mb-2"><i className="bi bi-telephone-fill text-lilac"></i> <span className="border-bottom border-light">{selectedTraveler.phone}</span></p>
                    <p className="card-text mb-2"><b className="text-lilac">CF: </b>{selectedTraveler.fiscalCode}</p>
                </div>
            </div>
        </div>

    )
}