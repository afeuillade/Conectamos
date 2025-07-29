import imgCeo from '../assets/IMG_1203.JPG'
export default function About() {
  return (
  <div>
    <h1>Sobre Nosotros</h1>
    <p>ConectaMos es una iniciativa cordobesa sobre gente que quiere conectar con gente.</p>
    <p>Nuestra misión es crear un espacio donde la gente pueda conocerse, compartir intereses y formar amistades duraderas.</p>
    <img src={imgCeo} alt="CEO de ConectaMos" className='ceo-image' />
    <h5 style={{textAlign: 'center'}}> Martina Simes - CEO de ConectaMos</h5>
  </div>
  
)
  
}