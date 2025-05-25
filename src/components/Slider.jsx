import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const slides = [
  {
    img: '/images/astro-1.jpg',
    title: 'Телескоп в Ассы-Тургень',
    caption: 'Астрономия в Казахстане — это наука на высоте 2750 м'
  },
  {
    img: '/images/sat-1.jpg',
    title: 'Космические технологии',
    caption: 'Создание и контроль спутников Казахстана'
  },
  {
    img: '/images/team.jpg',
    title: 'Сообщество Harysh',
    caption: 'Молодёжь, объединённая идеей освоения космоса'
  }
]

function CustomSlider() {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false
  }

  return (
    <div className="max-w-4xl mx-auto my-12 px-4" data-aos="fade-up">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="px-2">
            <img src={slide.img} alt={slide.title} className="rounded-lg shadow-xl w-full h-[400px] object-cover" />
            <div className="text-center mt-4">
              <h3 className="text-xl font-bold text-yellow-400">{slide.title}</h3>
              <p className="text-gray-300">{slide.caption}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default CustomSlider
