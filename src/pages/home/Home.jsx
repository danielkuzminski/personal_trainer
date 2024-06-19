import "./home.css"

export default function Home() {
	return (
		<div className="landing">
			{/* navbar */}
			<section className="section1">
                <div className="section1__left">

                </div>
                <div className="section1__right">
                    <h1 className="section1__title">Postaw sobie wyzwanie</h1>
                    <p className="section1__text">
                        Czy marzysz o lepszej kondycji fizycznej, zdrowszym trybie życia i
                        zwiększonej pewności siebie? Nasz wykwalifikowany trener osobisty jest
                        tutaj, aby Ci pomóc!
                    </p>
                    <button className="cta">Umów się</button>

                </div>
			</section>
			<section className="section2">
				<div className="section2__top">
					<div className="section2__top1"></div>
					<div className="section2__top2"></div>
					<div className="section2__top3"></div>
				</div>
				<div className="section2__bottom">
					<h2 className="section2__title">Twój trening</h2>
					<h4 className="section2__subtitle">
						Czy marzysz o lepszej kondycji fizycznej, zdrowszym trybie życia i
						zwiększonej pewności siebie?
					</h4>
					<p className="section2__bottom__text">
						Dzięki indywidualnie dostosowanym planom treningowym i motywującemu
						wsparciu, osiągniesz swoje cele fitnessowe szybciej, niż myślisz.
						Bez względu na to, czy chcesz schudnąć, zbudować mięśnie czy
						poprawić swoje samopoczucie ogólne - jesteśmy tutaj, by Ci pomóc na
						każdym kroku.
					</p>
                    <button className="cta">Skontaktuj się ze mną już dziś</button>
				</div>
			</section>
			<section className="section3"></section>
		</div>
	)
}
