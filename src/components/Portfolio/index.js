import styles from './styles.module.css'

const Portfolio = () => {
  return (
    <>
      <h1 className={styles.PortfolioTitle}>Projetos Open Source</h1>
      <div className={styles.Portfolio}>
          <div className={styles.PortfolioCard}>
            <h2 className={styles.CardTitle}>Título</h2>
            <div className={styles.CardBody}>
              <div className={styles.CardDescription}><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, voluptatum.</p></div>
              <ul className={styles.CardFooter}>
                <li><a className={styles.CardLink} href="#" target="_blank">Código</a></li>
                <li><a className={styles.CardLink} href="#" target="_blank">Demo</a></li>
                <li><a className={styles.CardLink} href="#" target="-blank">Estrelas</a></li>
              </ul>
            </div>
          </div>
      </div>
    </>
  )
}

export default Portfolio;