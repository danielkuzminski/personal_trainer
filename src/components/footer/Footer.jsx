import "./footer.css"

export default function Footer() {
	return (
		<footer className='foot'>
			<div className='foot__contact'>
			<i class="fa-solid fa-phone"></i>
			<i class="fa-regular fa-envelope"></i>
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
