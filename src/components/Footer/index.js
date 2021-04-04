import { FaHeart } from 'react-icons/fa'
import { HiCode } from 'react-icons/hi'
import { FaReact } from 'react-icons/fa'

import styles from './styles.module.css'

const Footer = () => {
  return (
    <footer className={styles.Footer}>
      <div className={styles.FooterText}><HiCode size={20} /> com <FaHeart /> por <a href="#">Renato Lins</a> utilizando <a href="#"><FaReact size={20}/></a> </div>
    </footer>
  )
}

export default Footer;