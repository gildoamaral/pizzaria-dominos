import { useIsMobileContext } from '../../contexts/useIsMobileContext'
import DeliveryOrPlace from './contents/DeliveryOrPlace'
import SectionDesktop from './contents/SectionDesktop'
import SectionMobile from './contents/SectionMobile'

const Main = () => {
  const isMobile = useIsMobileContext()
  return isMobile ? (
    <>
      <DeliveryOrPlace />
      <SectionMobile />
    </>
  ) : (
    <>
      <DeliveryOrPlace />
      <SectionDesktop />
    </>
  )
}

export default Main