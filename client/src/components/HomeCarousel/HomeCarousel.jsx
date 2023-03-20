import Carousel from 'react-bootstrap/Carousel'
import Billie from '../../assets/BillieEilish.svg'
import Travis from '../../assets/travisscott.svg'
import Roc from '../../assets/roc-a-fella.svg'
import Lunar from '../../assets/lunar.svg'


export function HomeCarousel() {
	return (
		<Carousel>
			<Carousel.Item interval={500}>
				<a href='http://localhost:5173/detail/MZulqmUuiI3bezocwqry'>
					<img
						className='d-block w-100'
						src={Lunar}
						alt='ACRONYM'
					/>
				</a>
			</Carousel.Item>
			<Carousel.Item interval={700}>
				<a href='http://localhost:5173/detail/GJlGj1WrEDmwJdagmWO4'>
					<img
						className='d-block w-100'
						src={Roc}
						alt='ROC-A-FELLA'
					/>
				</a>
			</Carousel.Item>
			<Carousel.Item>
				<a href='http://localhost:5173/detail/Rpxal8wZRLwJAsbz3pSy'>
					<img
						className='d-block w-100'
						src={Billie}
						alt=' Billie Eilish'
					/>
				</a>
			</Carousel.Item>
			<Carousel.Item>
				<a href='http://localhost:5173/detail/oMF3232s1vGXPR9wEkhC'>
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
