import Carousel from 'react-bootstrap/Carousel'
import Billie from '../../assets/BillieEilish.svg'
import Travis from '../../assets/travisscott.svg'
import Roc from '../../assets/roc-a-fella.svg'
import Lunar from '../../assets/lunar.svg'


export function HomeCarousel() {
	return (
		<Carousel>
			<Carousel.Item interval={500}>
				<a href='https://www.nike.com/es/launch/t/behind-the-design-lunar-force-1-acronym'>
					<img
						className='d-block w-100'
						src={Lunar}
						alt='ACRONYM'
					/>
				</a>
			</Carousel.Item>
			<Carousel.Item interval={700}>
				<a href='https://www.nike.com/es/launch/t/behind-the-design-air-force-1-roc-a-fella'>
					<img
						className='d-block w-100'
						src={Roc}
						alt='ROC-A-FELLA'
					/>
				</a>
			</Carousel.Item>
			<Carousel.Item>
				<a href='https://about.nike.com/en/newsroom/releases/nike-x-billie-eilish-af1-low'>
					<img
						className='d-block w-100'
						src={Billie}
						alt=' Billie Eilish'
					/>
				</a>
			</Carousel.Item>
			<Carousel.Item>
				<a href='https://www.nike.com/es/launch/t/behind-the-design-air-force-1-travis-scott'>
					<img
						className='d-block w-100'
						src={Travis}
						alt='TRAVIS SCOTT'
					/>
				</a>
			</Carousel.Item>
		</Carousel>
	)
}
