//styles
import "./home.css"

export default function Home() {
	return (
		<div className="landing">
			{/* navbar */}
			<section className="section1">
				<div className="section1__left"></div>
				<div className="section1__right">
					<h1 className="section1__title">Postaw sobie wyzwanie</h1>
					<p className="section1__text">
						Czy marzysz o lepszej kondycji fizycznej, zdrowszym trybie życia i
						zwiększonej pewności siebie? Nasz wykwalifikowany trener osobisty
						jest tutaj, aby Ci pomóc!
					</p>
					<button className="cta">Umów się</button>
				</div>
			</section>
			<section className="section2">
				<div className="section2__top">
					<div className="section2__container">
						<div className="top__img img1"></div>
						<h4 className="section2__top__title">Siłownia</h4>
						<p className="section2__top__text">
							Regularne treningi na siłowni pomagają w budowaniu masy
							mięśniowej, spalaniu tkanki tłuszczowej, poprawie kondycji i zdrowia.
						</p>
					</div>
					<div className="section2__container">
						<div className="top__img img2"></div>
						<h4 className="section2__top__title">Kettle</h4>
						<p className="section2__top__text">
							Treningi z kettlebell angażują wiele grup mięśniowych
							jednocześnie, poprawiając siłę, wytrzymałość, koordynację oraz
							mobilność.
						</p>
					</div>
					<div className="section2__container">
						<div className="top__img img3"></div>
						<h4 className="section2__top__title">Fitness</h4>
						<p className="section2__top__text">
							Fitness to szeroki zakres aktywności fizycznych mających na celu
							poprawę kondycji fizycznej, wytrzymałości, siły oraz ogólnego
							samopoczucia.
						</p>
					</div>
				</div>
			</section>

			<section className="section3">
				<div className="section3__container">
					<div className="section3__left">
						<h2 className="section3__title">Twój trening</h2>
						<h4 className="section3__subtitle">
							Dostosujemy plan dla Ciebie, obierzemy ścieżkę i wkroczymy na
							autostradę do sukcesu!
						</h4>
						<p className="section3__text">
							Bez względu na to, czy chcesz schudnąć, zbudować mięśnie czy
							poprawić swoje samopoczucie ogólne - jestem tutaj, by Ci pomóc na
							każdym kroku.
						</p>
						<button className="cta2">Skontaktuj się ze mną już dziś</button>
					</div>
					<div className="section3__right"></div>
				</div>
			</section>
		</div>
	)
}
