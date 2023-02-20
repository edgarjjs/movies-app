
import './cardSlider.css'

export const CardSlider_UI = ({ children, bg_color}) => {

  const bgColor = bg_color ? bg_color : '';

  return (
    <>
      <section className="cards-slider-container" style={{backgroundColor:`${bgColor}`}}>
        <div className="cards-slider">
          {children}
        </div>
      </section>
    </>
  );
}
