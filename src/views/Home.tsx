import { FC, useEffect, useState } from 'react'
import { Carousel } from 'react-responsive-carousel'
import Slider from 'react-slick'
import GlassFrame from '../services/GlassFrame'
import { GlassFrameType } from '../typings/custom'

import SlickCustomArrow from '../components/SlickCustomArrow'
import Frame from '../components/Frame'

import Pic1 from '../assets/img/carousel-1.jpg'
import Pic2 from '../assets/img/carousel-2.jpg'
import Pic3 from '../assets/img/carousel-3.jpg'
import wGlass from '../assets/img/women-glass.jpg'
import mGlass from '../assets/img/men-glass.jpg'
import cGlass from '../assets/img/children-glass.jpg'

import '../assets/css/Home.scss'

const Home: FC = () => {
  const [mounts, setMounts] = useState<GlassFrameType[]>([])

  const fetchData = async () => {
    const { status, data } = await GlassFrame.getAll()
    if (status) {
      setMounts(data)
    }
  }

  useEffect(() => {
    document.title = 'Optica'
    console.log('render')
    fetchData()
    return () => {}
  }, [])

  const brandsSliderSettings = {
    infinite: true,
    autoplay: true,
    slidesToShow: 7,
    slidesToScroll: 1,
    speed: 5000,
    autoplaySpeed: 5000,
    cssEase: 'linear',
    arrows: false,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: false
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: false
        }
      }
    ]
  }

  const bestSellsSettings = {
    infinite: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    prevArrow: (
      <SlickCustomArrow styles={{ left: '0', transform: 'rotate(180deg)' }} />
    ),
    nextArrow: <SlickCustomArrow styles={{ right: '0' }} />,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: false
        }
      }
    ]
  }

  return (
    <div className='home-page'>
      <Carousel
        autoPlay
        stopOnHover
        showStatus={false}
        showThumbs={false}
        infiniteLoop={true}
      >
        <div
          className='carousel-image'
          style={{ backgroundImage: `url(${Pic1})` }}
        />
        <div
          className='carousel-image'
          style={{ backgroundImage: `url(${Pic2})` }}
        />
        <div
          className='carousel-image'
          style={{ backgroundImage: `url(${Pic3})` }}
        />
      </Carousel>

      <section className='half'>
        <h2>ELIGE TU ESTILO</h2>
        <div className='glass-categories'>
          <div className='glasses'>
            <div
              className='image'
              style={{ backgroundImage: `url(${mGlass})` }}
            />
            <span>Para hombre</span>
          </div>
          <div className='glasses'>
            <div
              className='image'
              style={{ backgroundImage: `url(${wGlass})` }}
            />
            <span>Para mujer</span>
          </div>

          <div className='glasses'>
            <div
              className='image'
              style={{ backgroundImage: `url(${cGlass})` }}
            />
            <span>Para niños</span>
          </div>
        </div>
      </section>

      <section>
        <h2>CATÁLOGO</h2>
        <Slider {...bestSellsSettings} className='best-sells'>
          {mounts.map((frame, index) => (
            <Frame key={index} data={frame} />
          ))}
        </Slider>
      </section>

      <section>
        <h2>DESCUENTOS</h2>
        <Slider {...bestSellsSettings} className='best-offers'>
          {mounts.map(
            (frame, index) =>
              frame.discount > 0 && <Frame key={index} data={frame} />
          )}
        </Slider>
      </section>

      <section>
        <h2>MARCAS</h2>
        <Slider {...brandsSliderSettings} className='brands'>
          <img
            src='https://1000marcas.net/wp-content/uploads/2020/03/Ray-Ban-logo.png'
            alt='ray_ban'
          />
          <img
            src='https://1000marcas.net/wp-content/uploads/2020/03/Oakley-logo.png'
            alt='oeakley'
          />
          <img
            src='https://1000marcas.net/wp-content/uploads/2020/01/Prada-Logo.png'
            alt='prada'
          />
          <img
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Hugo-Boss-Logo.svg/2560px-Hugo-Boss-Logo.svg.png'
            alt='hugo_boss'
          />
          <img
            src='https://www.pngmart.com/files/12/Black-Gucci-Logo-PNG-Image.png'
            alt='gucci'
          />
          <img
            src='https://1000marcas.net/wp-content/uploads/2019/12/Carolina-Herrera-logo.png'
            alt='carolina_herrera'
          />
        </Slider>
      </section>
    </div>
  )
}

export default Home
