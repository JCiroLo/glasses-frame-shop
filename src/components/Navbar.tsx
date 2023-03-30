import { FC, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import classnames from 'classnames'

import ButtonToggler from './ButtonToggler'
import Icon from './Icon'

import navBrand from '../assets/img/nav_brand.png'
import '../assets/css/Navbar.scss'
import Input from './Input'

const Navbar: FC = () => {
  const [toggleNav, settoggleNav] = useState(false)
  const [search, setSearch] = useState('')

  const toggleCollpase = () => {
    settoggleNav(!toggleNav)
  }

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
  }

  return (
    <header className={classnames({ collapsed: toggleNav })}>
      <Link className='navbar-brand' to='/'>
        <img src={navBrand} alt='nav_brand' />
      </Link>

      <ButtonToggler
        className='navbar-toggler'
        state={toggleNav}
        onClick={toggleCollpase}
      />

      <nav>
        <Input
          type='text'
          label='Buscar'
          iconName='search'
          value={search}
          onChange={handleSearch}
        />
        <NavLink
          exact
          to='/'
          activeClassName='active'
          onClick={() => toggleNav && toggleCollpase()}
        >
          <Icon name='home'></Icon> <span>Inicio</span>
        </NavLink>
        <NavLink
          to='/catalogo'
          activeClassName='active'
          onClick={() => toggleNav && toggleCollpase()}
        >
          <Icon name='glasses'></Icon> <span>Catálogo</span>
        </NavLink>
        <NavLink
          to='/'
          activeClassName='active'
          onClick={() => toggleNav && toggleCollpase()}
        >
          <Icon name='shopping-bag'></Icon> <span>Compras</span>
        </NavLink>
        <NavLink
          to='/test'
          activeClassName='active'
          onClick={() => toggleNav && toggleCollpase()}
        >
          <Icon name='head-vr'></Icon> <span>Prueba online</span>
        </NavLink>
      </nav>
    </header>
  )
}

export default Navbar
