// Write your code here
import './index.css'

const PlanetItem = props => {
  const {item} = props
  const {imageUrl, name, description} = item
  return (
    <div className="one">
      <div className="two">
        <img src={imageUrl} alt={`planet ${name}`} className="img1" />
        <h1>{name}</h1>
        <p>{description}</p>
      </div>
    </div>
  )
}
export default PlanetItem
