import SocialIcons from './SocialIcons'
import coke from '../../../assets/coke.png'


const Social = () => {
  return (
    <div className='flex flex-wrap items-center gap-8 mb-16'>
      <div>
        <SocialIcons />
      </div>
      <img src={coke} alt="coke" />
    </div>
  )
}

export default Social