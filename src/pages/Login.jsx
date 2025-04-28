import { useNavigate } from "react-router-dom"

export default function Login() {
    const navigate = useNavigate()
    function handleSubmit(e) {
        e.preventDefault()
        navigate("/trips")
    }
    return (
        <>
            <div id="login-form" className="container login">
                <div className="card w-100" id="card-login">
                    <h2 className="h2-login">LOGIN</h2>
                    <form className="w-100" onSubmit={handleSubmit}>
                        <div className="mb-3" id="username">
                            <label htmlFor="" className="form-label">Username</label>
                            <input
                                type="text"
                                name=""
                                id=""
                                aria-describedby="helpId"
                                placeholder=""
                                required
                            />
                        </div>
                        <div className="mb-3" id="password-container">
                            <label htmlFor="" className="form-label">Password</label>
                            <input
                                type="password"
                                name=""
                                id=""
                                aria-describedby="helpId"
                                placeholder=""
                                required
                            />
                        </div>
                        <button id="btn-login" className="btn mt-4" type="submit">Login</button>
                    </form>
                </div>
            </div>
        </>
    )
}