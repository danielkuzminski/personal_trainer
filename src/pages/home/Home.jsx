//styles
import "./home.css"

export default function Home() {
	return (
		<div className='landing'>
			{/* navbar */}
			<section className='section1'>
				<div className='section1__left'></div>
				<div className='section1__right'>
					<h1 className='section1__title'>Postaw sobie wyzwanie</h1>
					<p className='section1__text'>
						Czy marzysz o lepszej kondycji fizycznej, zdrowszym trybie życia i
						zwiększonej pewności siebie? Nasz wykwalifikowany trener osobisty
						jest tutaj, aby Ci pomóc!
					</p>
					<button className='cta'>Umów się</button>
				</div>
			</section>
			<section className='section2'>
				<div className='section2__top'>
					<div className='section2__container'>
						<div className='top__img img1'></div>
						<h4 className='section2__top__title'>Siłownia</h4>
						<p className='section2__top__text'>
							Lorem ipsum dolor sit amet consectetur, adipisicing elit.
							Doloribus vitae optio deleniti. Quae iure voluptatum doloribus,
							repellat voluptas explicabo minus.
						</p>
					</div>
					<div className='section2__container'>
						<div className='top__img img2'></div>
						<h4 className='section2__top__title'>Kettle</h4>
						<p className='section2__top__text'>
							Lorem ipsum dolor sit amet consectetur, adipisicing elit.
							Doloribus vitae optio deleniti. Quae iure voluptatum doloribus,
							repellat voluptas explicabo minus.
						</p>
					</div>
					<div className='section2__container'>
						<div className='top__img img3'></div>
						<h4 className='section2__top__title'>Fitness</h4>
						<p className='section2__top__text'>
							Lorem ipsum dolor sit amet consectetur, adipisicing elit.
							Doloribus vitae optio deleniti. Quae iure voluptatum doloribus,
							repellat voluptas explicabo minus.
						</p>
					</div>
				</div>
			</section>

			<section className='section3'>
				<div className='section3__container'>
					<div className="section3__left">

						<h2 className='section3__title'>Twój trening</h2>
						<h4 className='section3__subtitle'>
							Czy marzysz o lepszej kondycji fizyczneji zdrowszym trybie życia?
						</h4>
						<p className='section3__text'>
							Dzięki indywidualnie dostosowanym planom treningowym i motywującemu
							wsparciu, osiągniesz swoje cele fitnessowe szybciej, niż myślisz.
							Bez względu na to, czy chcesz schudnąć, zbudować mięśnie czy
							poprawić swoje samopoczucie ogólne - jesteśmy tutaj, by Ci pomóc na
							każdym kroku.
						</p>
						<button className='cta2'>Skontaktuj się ze mną już dziś</button>
					</div>
					<div className="section3__right">

					</div>
				</div>
			</section>
		</div>
	)
}
