export default function Login() {
    return (
        <>
            <div className="container">
                <form>
                    <div className="mb-3" id="username">
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
                    <div className="mb-3" id="password">
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
                    <button id="login" className="btn btn-primary" type="submit">Login</button>

                </form>
            </div>
        </>
    )
}