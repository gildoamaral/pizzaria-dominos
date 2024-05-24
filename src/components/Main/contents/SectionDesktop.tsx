import publi1 from '../../../assets/publi1.png'
import publi2 from '../../../assets/publi2.png'
import publi3 from '../../../assets/publi3.png'
import publi4 from '../../../assets/publi4.png'

const SectionDesktop = () => {

  return (
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

export default SectionDesktop