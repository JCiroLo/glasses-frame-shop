import { FC } from 'react'
import Icon from './Icon'
import Button from './Button'

import '../assets/css/Footer.scss'

const Footer: FC = () => (
  <footer>
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'>
      <path
        fill='#18161c11'
        fillOpacity='1'
        d='M0,288L80,266.7C160,245,320,203,480,202.7C640,203,800,245,960,266.7C1120,288,1280,288,1360,288L1440,288L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z'
      />
      <path
        fill='#18161c'
        fillOpacity='1'
        d='M0,288L80,277.3C160,267,320,245,480,250.7C640,256,800,288,960,293.3C1120,299,1280,277,1360,266.7L1440,256L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z'
      />
      <path
        fill='#18161cbb'
        fillOpacity='1'
        d='M0,288L80,293.3C160,299,320,309,480,309.3C640,309,800,299,960,282.7C1120,267,1280,245,1360,234.7L1440,224L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z'
      />
    </svg>

    <section className='contact-me'>
      <h2>¿Quieres tener acceso a la plantilla?</h2>
      <p>Ponte en contacto conmigo</p>
      <Button variant='light'>Aquí</Button>
    </section>

    <hr />

    <section className='about-us'>
      <div className='contact-us'>
        <Button>
          <Icon name='address-book'></Icon>
          <p> Contáctanos </p>
        </Button>
        <Button>
          <Icon name='phone-alt'></Icon>
          <p>
            Llámanos
            <span>+57 310 555 44 33</span>
          </p>
        </Button>
        <Button>
          <Icon name='envelope'></Icon>
          <p>
            Envíanos un correo
            <span>optica@optica.com</span>
          </p>
        </Button>
      </div>
      <div className='categories'>
        <ul>
          <h5>Tienda</h5>
          <li>
            <a href='#!'>Gafas de hombre</a>
          </li>
          <li>
            <a href='#!'>Gafas de mujer</a>
          </li>
          <li>
            <a href='#!'>Gafas de niños</a>
          </li>
        </ul>
        <ul>
          <h5>Marcas de tienda</h5>
          <li>
            <a href='#!'>Ray Ban</a>
          </li>
          <li>
            <a href='#!'>Oakley</a>
          </li>
          <li>
            <a href='#!'>Prada</a>
          </li>
          <li>
            <a href='#!'>Muse</a>
          </li>
          <li>
            <a href='#!'>Gucci</a>
          </li>
          <li>
            <a href='#!'>Carollina Herrera</a>
          </li>
        </ul>
        <ul>
          <h5>Acerca de nosotros</h5>
          <li>
            <a href='#!'>Equipo</a>
          </li>
          <li>
            <a href='#!'>Blog</a>
          </li>
        </ul>
      </div>
    </section>

    <hr />

    <section className='social-networks'>
      <Button className='facebook'>
        <Icon type='fab' name='facebook'></Icon>
      </Button>
      <Button className='instagram'>
        <Icon type='fab' name='instagram'></Icon>
      </Button>
      <Button className='twitter'>
        <Icon type='fab' name='twitter'></Icon>
      </Button>
      <Button className='youtube'>
        <Icon type='fab' name='youtube'></Icon>
      </Button>
    </section>

    <hr />

    <section className='politics-and-copyright'>
      <div className='copyright'>
        <a href='#!'>© JCiroLo</a>
      </div>
      <div className='politics'>
        <a href='/'>Políticas de privacidad</a>
        <a href='/'>Términos de uso</a>
        <a href='/'>Políticas de cookies</a>
        <a href='/'>Políticas de compras</a>
      </div>
    </section>
  </footer>
)

export default Footer
