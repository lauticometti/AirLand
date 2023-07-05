import Carousel from 'react-bootstrap/Carousel'
import { billie, travis, roc, lunar } from '../../assets/images'
import { Link } from 'react-router-dom'

export function HomeCarousel() {
	return (
		<Carousel>
			<Carousel.Item>
				<Link to='/detail/MZulqmUuiI3bezocwqry'>
					<img className='d-block w-100' src={lunar.default} alt='Acronym' />
				</Link>
			</Carousel.Item>
			<Carousel.Item>
				<Link to='/detail/GJlGj1WrEDmwJdagmWO4'>
					<img className='d-block w-100' src={roc.default} alt='Roc-A-Fella' />
				</Link>
			</Carousel.Item>
			<Carousel.Item>
				<Link to='/detail/Rpxal8wZRLwJAsbz3pSy'>
					<img
						className='d-block w-100'
						src={billie.default}
						alt='Billie Eilish'
					/>
				</Link>
			</Carousel.Item>
			<Carousel.Item>
				<Link to='/detail/oMF3232s1vGXPR9wEkhC'>
					<img
						className='d-block w-100'
						src={travis.default}
						alt='Travis Scott'
					/>
				</Link>
			</Carousel.Item>
		</Carousel>
	)
}
