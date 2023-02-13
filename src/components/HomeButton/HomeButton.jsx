import { useNavigate } from 'react-router-dom'
import home from '../../assets/home.png'
import './homeButton.css'

export const HomeButton = () => {

  const navigate = useNavigate()

  return (
    <div className='home-button'>
      <img src={home} alt="home-button"  onClick={() => navigate("/")}/>
    </div>
  )
}
