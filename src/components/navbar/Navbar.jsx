//styles
import "./navbar.css"

//router
import { Link } from "react-router-dom"

//icons
import mail from "../../assets/mail.png"
import call from "../../assets/phone.png"
import logo from "../../assets/logo.png"

export default function Navbar() {
	return (
		<nav className="navbar">
			<p className="logo">
				<img src={logo} alt="company logo" className="company__logo" />
			</p>
			<div className="navbar__links">
				<Link className="navbar__link" to="/">
					Główna
				</Link>
				<Link className="navbar__link" to="/about">
					O mnie
				</Link>
				<Link className="navbar__link" to="/blog">
					Blog
				</Link>
				<div>
					<a href="tel:0048000000000">
						<img src={call} alt="mobile phone icon" className="navbar__icon" />
					</a>
					<a href="mailto:someone@example.com">
						<img src={mail} alt="envelope icon" className="navbar__icon" />
					</a>
				</div>
			</div>
		</nav>
	)
}
