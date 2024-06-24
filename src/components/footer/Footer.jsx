import "./footer.css"

export default function Footer() {
	return (
		<footer className='foot'>
			<div className='foot__contact'>
				<p className='foot__contact__details'>Kontakt:</p>
				<p className='foot__contact__details'>telefon: +48 000 000 000</p>
				<p className='foot__contact__details'>email: kontakt@mail.pl</p>
			</div>
			<div className='foot__social'>
				<i class='fa-brands fa-instagram'></i>
				<i class='fa-brands fa-tiktok'></i>
				<i class='fa-brands fa-facebook'></i>
				<i class='fa-brands fa-linkedin'></i>
			</div>
		</footer>
	)
}
