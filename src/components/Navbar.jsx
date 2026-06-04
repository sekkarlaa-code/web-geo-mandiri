import logo from '../assets/logo.png' // Pastikan path logo sudah benar

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg fixed-top custom-navbar">
      <div className="container">
        <a className="navbar-brand d-flex align-items-center fw-bold" href="#">
          <img 
            src={logo} 
            alt="Logo" 
            style={{ height: '40px', width: 'auto', marginRight: '10px', objectFit: 'contain' }} 
          />
          <span>Geo Mandiri Kreasi</span>
        </a>
        <button
          className="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#navMenu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navMenu">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a href="#home" className="nav-link">Home</a>
            </li>

            <li className="nav-item">
              <a href="#about" className="nav-link">About</a>
            </li>

             <li className="nav-item">
              <a href="#program" className="nav-link">Program</a>
            </li>

            <li className="nav-item">
              <a href="#contact" className="nav-link">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar