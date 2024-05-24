import { useIsMobileContext } from '../../contexts/useIsMobileContext'
import EndText from './contents/EndText'
import FooterContainer from './contents/FooterContainer'
import FooterUlDesktop from './contents/FooterUlDesktop'
import FooterUlMobile from './contents/FooterUlMobile'
import Social from './contents/Social'

const Footer = () => {
  const isMobile = useIsMobileContext()
  return (
    <FooterContainer>
      {isMobile ? <FooterUlMobile /> : <FooterUlDesktop />}
      <Social />
      <EndText />
    </FooterContainer>
  )
}

export default Footer