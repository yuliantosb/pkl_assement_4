import React from 'react'
import { Helmet } from 'react-helmet'
import { Redirect } from 'react-router-dom'

function Login(props)
{
    const handleLogin = (e) => {
        e.preventDefault()
        localStorage.setItem('token', 'asdfgsgsnkhkfsbhkgbssgf')
        return props.history.push('/dashboard')
    }

    if (localStorage.getItem('token')) {
        return <Redirect to="dashboard" />
    }

    return (
        <div className="text-center body-login">
            <Helmet>
                <title>Login</title>
            </Helmet>
            <form className="form-signin" onSubmit={handleLogin}>
                <img className="mb-4" src="https://getbootstrap.com/docs/4.5/assets/brand/bootstrap-solid.svg" alt="" width="72" height="72" />
                <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
                <label htmlFor="inputEmail" className="sr-only">Email address</label>
                <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required="" autoFocus="" />
                <label htmlFor="inputPassword" className="sr-only">Password</label>
                <input type="password" id="inputPassword" className="form-control" placeholder="Password" required="" />
                <div className="checkbox mb-3">
                    <label>
                    <input type="checkbox" value="remember-me" /> Remember me
                    </label>
                </div>
                <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
                <p className="mt-5 mb-3 text-muted">© 2017-2020</p>
            </form>
        </div>
    )
}

export default Login
