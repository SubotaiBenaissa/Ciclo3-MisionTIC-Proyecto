import React from 'react'

export const RegisterPage = () => {

    return (

        <div className="container mt-5">
            <form>
                <div className="text-center mb-3">
                    <p>Sign up with:</p>
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
            
                <p className="text-center">or:</p>    
                
                <div className="form-outline mb-4">
                    <input type="text" className="form-control" />
                    <label className="form-label" >Name</label>
                </div>
            
                
                <div className="form-outline mb-4">
                    <input type="text" className="form-control" />
                    <label className="form-label">Username</label>
                </div>
            
                
                <div className="form-outline mb-4">
                    <input type="email" className="form-control" />
                    <label className="form-label" >Email</label>
                </div>
            
                
                <div className="form-outline mb-4">
                    <input type="password" className="form-control" />
                    <label className="form-label" >Password</label>
                </div>
            
                
                <div className="form-outline mb-4">
                    <input type="password" className="form-control" />
                    <label className="form-label" >Repeat password</label>
                </div>
            
                
                <div className="form-check d-flex justify-content-center mb-4">
                    <input className="form-check-input me-2" type="checkbox" value="" id="registerCheck" />
                    <label className="form-check-label">
                    I have read and agree to the terms
                    </label>
                </div>
            
                
                <button type="submit" className="btn btn-primary btn-block mb-3">Sign in</button>
            </form>
        </div>
    )

}
