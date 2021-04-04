import { FiGithub } from 'react-icons/fi'
import { BiLinkExternal } from 'react-icons/bi'
import { BsFillStarFill } from 'react-icons/bs'

import styles from './styles.module.css'

const Portfolio = ({repos}) => {
  return (
    <>
      <h1 className={styles.PortfolioTitle}>Projetos Open Source</h1>
      <div className={styles.Portfolio}>
        {repos.map(({ id, name, description, html_url, homepage, stargazers_count: stars }) => (
          <div key={id} className={styles.PortfolioCard}>
            <h2 className={styles.CardTitle}>{name}</h2>
            <div className={styles.CardBody}>
              <div className={styles.CardDescription}><p>{description ? description : 'Um projeto feito com muito amor e carinho para testar meus conhecimentos'}</p></div>
              <ul className={styles.CardFooter}>
                <li><a className={styles.CardLink} href={html_url} target="_blank"><FiGithub style={{ marginRight: '4px'}}/>Código</a></li>
                {homepage && <li><a className={styles.CardLink} href={homepage} target="_blank"><BiLinkExternal style={{ marginRight: '4px'}}/>Demo</a></li>}
                <li><a className={styles.CardLink} href={`https://github.com/renatolinsjr/${name}/stargazers`} target="-blank"><BsFillStarFill style={{ marginRight: '4px'}}/>{stars}</a></li>
              </ul>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default Portfolio;