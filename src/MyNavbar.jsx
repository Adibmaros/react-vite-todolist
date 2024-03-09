function MyNavbar(){
    return(
      <nav className='navbar navbar-expand-lg bg-dark navbar-dark'>
      <div className="container-fluid ">
        <a className='navbar-brand' href="#">React Vite To Do List</a>
        <button data-bs-target='#navbar' data-bs-toggle='collapse' className='navbar-toggler'>
          <span className='navbar-toggler-icon'></span>
          </button>
          <div id='navbar' className="collapse navbar-collapse justify-content-between">
            <ul className='navbar-nav '>
              <li className='nav-item'>
                <a className='nav-link' href="https://www.instagram.com/adibmuhammadmaros/">Creator</a>
              </li>
            </ul>
          </div>
      </div>
    </nav>
    )
  }

  export default MyNavbar