import { useNavigate } from 'react-router-dom'
import home from '../../assets/home.svg'
import './homeButton.css'

export const HomeButton = () => {

  const navigate = useNavigate()

  return (
    <div className='home-button-component'>
      <img src={home} alt="home-button-component"  onClick={() => navigate("/")}/>
    </div>
  )
}
