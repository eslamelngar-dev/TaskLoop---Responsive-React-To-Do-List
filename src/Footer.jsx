import { Facebook , Instagram } from "react-bootstrap-icons"

export default function Footer(){
  return(
    <footer className="bg-dark text-white py-4">
      <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center">
          <p className="mb-2 mb-md-0">© 2025 Fayrouz. All rights reserved.</p>
        <div>
          <a href="#" className="text-white me-3"><Instagram className="fs-5"/></a>
          <a href="#" className="text-white"><Facebook className="fs-5"/></a>
        </div>
      </div>
    </footer>
  )
}