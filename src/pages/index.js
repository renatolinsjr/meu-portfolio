import Hero from '../components/Hero'
import Portfolio from '../components/Portfolio'
import Footer from '../components/Footer'
import JobStatus from '../components/JobStatus'

import { getRepos, getUser } from '../api'

export default function Home({ user, repos }) {
  return (
    <div className="container">
      <Hero user={user} />
      <JobStatus />
      <Portfolio repos={repos} />
      <Footer />
    </div>
  )
}

export async function getStaticProps() {
  const user = await getUser();
  const repos = await getRepos();
  
  return {
    props: {
      user,
      repos
    },
    revalidate: 60,
  }
}
