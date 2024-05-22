import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faYoutube, faTiktok, faXTwitter, faFacebookF } from '@fortawesome/free-brands-svg-icons';

const SocialIcons = () => {
  return (
    <ul className='flex w-full  justify-between gap-2'>
      <li>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} size="2xl" className="text-sky-700 hover:text-red-600 h-7" />
        </a>
      </li>
      <li>
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFacebookF} size="2xl" className="text-sky-700 hover:text-red-600 h-7" />
        </a>
      </li>
      <li>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faXTwitter} size="2xl" className="text-sky-700 hover:text-red-600 h-7" />
        </a>
      </li>
      <li>
        <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faTiktok} size="2xl" className="text-sky-700 hover:text-red-600 h-7" />
        </a>
      </li>
      <li>
        <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faYoutube} size="2xl" className="text-sky-700 hover:text-red-600 h-7" />
        </a>
      </li>
    </ul>
  )
}

export default SocialIcons