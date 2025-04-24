import { useNavigate } from "react-router-dom"

export default function Login() {
    const navigate = useNavigate()
    function handleSubmit(e) {
        e.preventDefault()
        navigate("/trips")
    }
    return (
        <>
            <div className="container p-4">
                <div className="card p-4 shadow">
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3" id="username-container">
                            <label htmlFor="" className="form-label">Username</label>
                            <input
                                type="text"
                                className="form-control"
                                name="username"
                                id="username"
                                placeholder="Username"
                                required
                            />
                        </div>
                        <div className="mb-3" id="password-container">
                            <label htmlFor="" className="form-label">Password</label>
                            <input
                                type="password"
                                className="form-control"
                                name="password"
                                id="password"
                                placeholder="Password"
                                required
                            />
                        </div>

                        <button id="login" className="btn btn-primary">Login</button>
                    </form>
                </div>
            </div>
        </>
    )
}