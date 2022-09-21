import React from 'react'

export const LoginPage = () => {

    return (
            
        <div className="container mt-5">
            <form>
                <div className="form-outline mb-4">
                    <input type="email" className="form-control" />
                    <label className="form-label">Email address</label>
                </div>

                <div className="form-outline mb-4">
                    <input type="password" className="form-control" />
                    <label className="form-label">Password</label>
                </div>

                <div className="row mb-4">
                    <div className="col d-flex justify-content-center">
                    
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" />
                            <label className="form-check-label"> Remember me </label>
                        </div>
                    </div>

                    <div className="col">
                        <a href="#!">Forgot password?</a>
                    </div>
                </div>

                <button type="button" className="btn btn-primary btn-block mb-4">Sign in</button>

                <div className="text-center">
                    <p>Not a member? <a href="#!">Register</a></p>
                    <p>or sign up with:</p>
                    <button type="button" className="btn btn-link btn-floating mx-1">
                        <i className="fab fa-facebook-f"></i>
                    </button>

                    <button type="button" className="btn btn-link btn-floating mx-1">
                        <i className="fab fa-google"></i>
                    </button>

                    <button type="button" className="btn btn-link btn-floating mx-1">
                        <i className="fab fa-twitter"></i>
                    </button>

                    <button type="button" className="btn btn-link btn-floating mx-1">
                        <i className="fab fa-github"></i>
                    </button>
                </div>
            </form>
        </div>
    )

}
