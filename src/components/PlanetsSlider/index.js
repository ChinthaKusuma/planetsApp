// Write your code here

import Slider from 'react-slick'

import PlanetItem from '../PlanetItem'

import './index.css'

const PlanetsSlider = props => {
  const {planetsList} = props

  const settings = {
    // dots: true,
    //   slidesToScroll: 2,
    //   slidesToShow: 2,
    // infinite: false,
  }
  return (
    <div className="bgContainer" data-testid="planets">
      <h1 className="heading1">Planets</h1>
      <Slider {...settings}>
        {planetsList.map(each => (
          <PlanetItem item={each} key={each.id} />
        ))}
      </Slider>
    </div>
  )
}
export default PlanetsSlider
