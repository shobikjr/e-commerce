import React from 'react'

const Register = () => {
  return (
    <div>
      <main className="form-signin w-100 m-auto">
  <form>
    <img className="mb-4" src="/docs/5.3/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57"/>
    <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

        <div className="form-floating">
      <input type="Name" className="form-control" id="floatingInput" placeholder="name"/>
      <label for="floatingInput">Name</label>
    </div> 

    <div className="form-floating">
      <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
      <label for="floatingInput">Email address</label>
    </div>
    <div className="form-floating">
      <input type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
      <label for="floatingPassword">Password</label>
    </div>
    <div className="form-floating">
      <input type="dateofbirth" className="form-control" id="floatinginput" placeholder="Date"/>
      <label for="floatingInput">DOB</label>
    </div>

    <div className="form-check text-start my-3">

      <label className="form-check-label" for="flexCheckDefault">
        if already have an account please login<button className="btn btn-primary w-100 py-2" type="submit"  >log in</button>
      </label>
    </div>
    <button className="btn btn-primary w-100 py-2" type="submit">Sign in</button>
    <p className="mt-5 mb-3 text-body-secondary">&copy; 2017–2024</p>
  </form>
</main>
    </div>
  )
}

export default Register
