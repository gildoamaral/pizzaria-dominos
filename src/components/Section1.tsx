import { useIsMobileContext } from '../contexts/useIsMobileContext'
import publi1 from '../assets/publi1.png'
import publi2 from '../assets/publi2.png'
import publi3 from '../assets/publi3.png'
import publi4 from '../assets/publi4.png'
import publi1m from '../assets/publi1-2.png'
import publi2m from '../assets/publi2-2.png'
import publi3m from '../assets/publi3-2.png'
import publi4m from '../assets/publi4-2.png'
import ButtonLink from './ButtonLink';


const Section1 = () => {
  const isMobile = useIsMobileContext()

  return isMobile ? (
    <>
        <div className="flex flex-col gap-4">
            <img src={publi1m} alt="Image 1" />
            <img src={publi2m} alt="Image 2" />
            <img src={publi3m} alt="Image 3" />
            <img src={publi4m} alt="Image 4" />
        </div>

        <div className='w-full my-8'>
            <ButtonLink textXl> Cardápio </ButtonLink>
            <ButtonLink textXl> Promoções </ButtonLink>
            <ButtonLink textXl> Meu Perfil </ButtonLink>
            <ButtonLink textXl> Acompanhar Pedido </ButtonLink>
        </div>
    </>
) : (
    <div className="flex flex-col  gap-4 mt-7 items-center">
        <div className='flex justify-center  gap-4'>
            <div>
                <img src={publi1} alt="Image 1" />
            </div>
            <div className=" flex flex-col gap-4">
                <img src={publi2} alt="Image 2" />
                <img src={publi3} alt="Image 3" />
            </div>
        </div>
        <img src={publi4} alt="Image 4" />
    </div>
)
}

export default Section1