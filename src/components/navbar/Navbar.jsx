//styles
import "./navbar.css"

//router
import { Link } from "react-router-dom"

export default function Navbar() {
	return (
		<nav className="navbar">
			<p className="logo">logo</p>
			<div className="navbar__links">
				<Link className="navbar__link" to="/">Główna</Link>
				<Link className="navbar__link">O mnie</Link>
				<Link className="navbar__link">Blog</Link>
				<Link className="navbar__link">Galeria</Link>
				<Link className="navbar__link">Kontakt</Link>
			</div>
		</nav>
	)
}
