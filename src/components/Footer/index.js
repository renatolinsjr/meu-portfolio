import styles from './styles.module.css'

const Footer = () => {
  return (
    <footer className={styles.Footer}>
      <div className={styles.FooterText}>Codado com amor por <a href="https://renatolins.dev.br" target="_blank">Renato Lins</a> utilizando <a href="https://reactjs.org/" target="_blank">ReactJs</a> </div>
    </footer>
  )
}

export default Footer;