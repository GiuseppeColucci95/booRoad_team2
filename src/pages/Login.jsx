export default function Login() {
    return (
        <>
            <div className="container">
                <form>
                    <div className="mb-3">
                        <label htmlFor="" className="form-label">Username</label>
                        <input
                            type="text"
                            className="form-control"
                            name=""
                            id=""
                            aria-describedby="helpId"
                            placeholder=""
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="" className="form-label">Password</label>
                        <input
                            type="password"
                            className="form-control"
                            name=""
                            id=""
                            aria-describedby="helpId"
                            placeholder=""
                        />
                    </div>
                    <button className="btn btn-primary" type="submit">Submit</button>

                </form>
            </div>
        </>
    )
}