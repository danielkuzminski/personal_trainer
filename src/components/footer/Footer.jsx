import "./footer.css"

import insta from "../../assets/instagram.png"
import tiktok from "../../assets/tiktok.png"
import linked from "../../assets/linkedin.png"
import yt from "../../assets/youtube.png"
import facebook from "../../assets/facebook.png"

export default function Footer() {
	return (
		<footer className="foot">
			<div className="foot__contact"></div>
			<div className="foot__social">
				<img className="foot__img" src={tiktok} alt="" />
				<img className="foot__img" src={yt} alt="" />
				<img className="foot__img" src={linked} alt="" />
				<img className="foot__img" src={facebook} alt="" />
				<img className="foot__img" src={insta} alt="" />
			</div>
		</footer>
	)
}
