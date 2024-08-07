//styles
import "./navbar.css"

//router
import { Link } from "react-router-dom"

//icons
import mail from "../../assets/mail.png"
import call from "../../assets/phone.png"
import logo from "../../assets/logo.png"
import home from "../../assets/home.png"
import about from "../../assets/about.png"
import blog from "../../assets/blog.png"

export default function Navbar() {
	return (
		<nav className="navbar">
			<p className="logo">
				<img src={logo} alt="company logo" className="company__logo" />
			</p>
			<div className="navbar__links">
				<Link className="navbar__link" to="/">
					<span className="link__text">Główna</span>
					<img className="link__icon" src={home} alt="" />
				</Link>
				<Link className="navbar__link" to="/about">
					<span className="link__text">O mnie</span>
					<img className="link__icon" src={about} alt="" />
				</Link>
				<Link className="navbar__link" to="/blog">
					<span className="link__text">Blog</span>
					<img className="link__icon" src={blog} alt="" />
				</Link>
				<div className="navbar__contact">
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
