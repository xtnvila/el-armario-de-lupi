import React from 'react';
import { AiFillInstagram, AiOutlineTwitter} from 'react-icons/ai';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTiktok, faWhatsapp, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <div className="footer-container">
      <p>2023 El Armario de Lupi</p>
      <p className="icons">
        <a href="https://www.facebook.com/profile.php?id=100090495235092" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a href="https://www.instagram.com/elarmariodelupi/" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href="https://www.tiktok.com/@elarmariodelupi" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faTiktok} />
        </a>
        <a href="https://wa.me/0034604063547" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faWhatsapp} />
        </a>
      </p>
    </div>
  )
}

export default Footer