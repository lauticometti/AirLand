import Carousel from 'react-bootstrap/Carousel'
import Billie from '../../assets/BillieEilish.svg'
import Travis from '../../assets/travisscott.svg'
import Roc from '../../assets/roc-a-fella.svg'
import Lunar from '../../assets/lunar.svg'
import { Link } from 'react-router-dom'

export function HomeCarousel() {
	return (
		<Carousel>
			<Carousel.Item>
				<Link to='/detail/MZulqmUuiI3bezocwqry'>
					<img className='d-block w-100' src={Lunar} alt='ACRONYM' />
				</Link>
			</Carousel.Item>
			<Carousel.Item>
				<Link to='/detail/GJlGj1WrEDmwJdagmWO4'>
					<img className='d-block w-100' src={Roc} alt='ROC-A-FELLA' />
				</Link>
			</Carousel.Item>
			<Carousel.Item>
				<Link to='/detail/Rpxal8wZRLwJAsbz3pSy'>
					<img className='d-block w-100' src={Billie} alt=' Billie Eilish' />
				</Link>
			</Carousel.Item>
			<Carousel.Item>
				<Link to='/detail/oMF3232s1vGXPR9wEkhC'>
					<img className='d-block w-100' src={Travis} alt='TRAVIS SCOTT' />
				</Link>
			</Carousel.Item>
		</Carousel>
	)
}
