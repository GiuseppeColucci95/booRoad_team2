export default function TravelerInfo({ selectedTraveler, setOpenOverlay }) {
    const fullName = selectedTraveler.firstName + ' ' + selectedTraveler.lastName


    return (
        <div id="traveler-info" onClickOut={() => { setOpenOverlay(false) }}>
            <div className="card-info p-4 m-5 position-relative">
                <div className="pin" onClick={() => { setOpenOverlay(false) }}><i class="bi bi-x"></i></div>
                <div className="card-body">
                    <h4 className="card-title fs-2 mb-4">{fullName}</h4>
                    <p className="card-text fs-3 mb-4"><b className="text-lilac"><i class="bi bi-envelope text-lilac"></i> </b>{selectedTraveler.email}</p>
                    <p className="card-text fs-3  mb-4"><i className="bi bi-telephone text-lilac"></i> <span className="border-bottom border-light">{selectedTraveler.phone}</span></p>
                    <p className="card-text  fs-3 mb-4"><b className="text-lilac"><i class="bi bi-person-vcard text-lilac"></i> </b>{selectedTraveler.fiscalCode}</p>
                </div>
            </div>
        </div>

    )
}