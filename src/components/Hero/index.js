import { FaGithub, FaLinkedin } from 'react-icons/fa'

import styles from './styles.module.css'

const Hero = ({user: {avatar, bio, location, name, userUrl}}) => {
  return (
    <main className={styles.Container}>
      <div className={styles.Hero}>
        <img className={styles.ProfilePicture} src={avatar} alt="Foto de Renato Lins" />
        <h1 className={styles.Title}>{name}</h1>
        <p className={styles.Description}>{location}</p>
        <p className={styles.Description}>{bio}</p>
        <ul className={styles.Links}>
          <li><a href={userUrl} target="_blank"><FaGithub size={40}/></a></li>
          <li><a href="https://www.linkedin.com/in/renatolinsjr/" target="_blank"><FaLinkedin size={40} /></a></li>
        </ul>
      </div>
    </main>
  ) 
}

export default Hero;