import './services.css'
import { AiOutlineWhatsApp } from 'react-icons/ai'
import { FaMotorcycle } from 'react-icons/fa'
import {TbCurrencyDollar} from 'react-icons/tb'

export function Services() {
	return (
        <div className='container'>            
			<div className='fila'>
				<div className='servicio'>
					<span className='icono'>
						<AiOutlineWhatsApp />
					</span>
					<h4>Contact</h4>
					<ul className='servicios-tag'>
						<p>Get your doubts through whatsapp +54 11 23456789</p>
					</ul>
				</div>
				<div className='servicio'>
					<span className='icono'>
						<FaMotorcycle />
					</span>
					<h4>Orders</h4>
					<ul className='servicios-tag'>
						<li>Pick up on site</li>
					</ul>
				</div>
				<div class='servicio'>
					<span class='icono'>
						<TbCurrencyDollar/>
					</span>
					<h4>Means of payment</h4>
					<ul class='servicios-tag'>
						<li>Mercado pago or 10% discount with cash</li>
					</ul>
				</div>
			</div>
            
            </div>
	)
}
