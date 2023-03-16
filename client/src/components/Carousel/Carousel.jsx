import Carousel from 'react-bootstrap/Carousel'

function Carouselhome() {
	return (
		<Carousel>
			<Carousel.Item interval={500}>
				<a href='https://www.nike.com/es/launch/t/behind-the-design-lunar-force-1-acronym'>
					<img
						className='d-block w-100'
						style={{ height: 700 }}
						src='https://static.nike.com/a/images/w_1920,c_limit,f_auto/oun1srhppsrqhalijsfk/behind-the-design-lunar-force-1-acronym.jpg'
						alt='ACRONYM'
					/>
					<Carousel.Caption>
						<h2>LUNAR FORCE 1 ACRONYM</h2>
						<p>
							Force 1 made the iconic AF-1 more functional and practical than
							ever.
						</p>
					</Carousel.Caption>
				</a>
			</Carousel.Item>
			<Carousel.Item interval={700}>
				<a href='https://www.nike.com/es/launch/t/behind-the-design-air-force-1-roc-a-fella'>
					<img
						className='d-block w-100'
						style={{ height: 700 }}
						src='https://static.nike.com/a/images/w_1920,c_limit,f_auto/swd80ez5va9qkfwsxspf/behind-the-design-air-force-1-roc-a-fella.jpg'
						alt='ROC-A-FELLA'
					/>
					<Carousel.Caption>
						<h2>AIR FORCE 1 ROC-A-FELLA</h2>
						<p>
							They were more than just shoes, even from before Roc's birth, they
							were an element of union between the roots of the empire.
						</p>
					</Carousel.Caption>
				</a>
			</Carousel.Item>
			<Carousel.Item>
				<a href='https://about.nike.com/en/newsroom/releases/nike-x-billie-eilish-af1-low'>
					<img
						className='d-block w-100'
						style={{ height: 700 }}
						src='https://www.footshop.cz/cs/img/cms/Product%20Content/20_10_2022/DM7926-300.jpg'
						alt=' Billie Eilish'
					/>
					<Carousel.Caption>
						<h2>Nike x Billie Eilish AF1 Low</h2>
						<p>
							Releasing December 13 on BillieEilish.com, and December 14
							globally through select Nike retail, the Nike x Billie Eilish AF1
							Low comes in both a Mushroom and a Sequoia colorway.
						</p>
					</Carousel.Caption>
				</a>
			</Carousel.Item>
			<Carousel.Item>
				<a href='https://www.nike.com/es/launch/t/behind-the-design-air-force-1-travis-scott'>
					<img
						className='d-block w-100'
						style={{ height: 700 }}
						src='https://static.nike.com/a/images/w_1920,c_limit,f_auto/nmgoeqp2xodg1gmbharb/behind-the-design-air-force-1-travis-scott.jpg'
						alt='TRAVIS SCOTT'
					/>
				</a>
				<Carousel.Caption>
					<h2>AIR FORCE 1 TRAVIS SCOTT</h2>
					<p>
						"Wanted to create his own design of the AF-100, one of the first
						ideas he had was to incorporate his "acid rap" touch""
					</p>
				</Carousel.Caption>
			</Carousel.Item>
		</Carousel>
	)
}

export default Carouselhome
