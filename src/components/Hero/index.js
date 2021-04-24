import styles from './styles.module.css'

const Hero = () => {
  return (
    <main className={styles.Container}>
      <div className={styles.Hero}>
        <img className={styles.ProfilePicture} src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png" alt="Foto de Renato Lins" />
        <h1 className={styles.Title}>John Doe</h1>
        <p className={styles.Description}>Rio de Janeiro, RJ</p>
        <p className={styles.Description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur explicabo aliquid temporibus sint mollitia est corporis reprehenderit rerum voluptas. Nihil ipsa cupiditate facere nam quod voluptas, illum quas accusamus fuga.</p>
        <ul className={styles.Links}>
          <li><a href="#" target="_blank">Github</a></li>
          <li><a href="https://www.linkedin.com/in/renatolinsjr/" target="_blank">LinkedIn</a></li>
        </ul>
      </div>
    </main>
  ) 
}

export default Hero;