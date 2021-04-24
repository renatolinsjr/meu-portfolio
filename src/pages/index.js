import Hero from '../components/Hero'
import Portfolio from '../components/Portfolio'
import Footer from '../components/Footer'
import JobStatus from '../components/JobStatus'

export default function Home() {
  return (
    <div className="container">
      <Hero />
      <JobStatus />
      <Portfolio />
      <Footer />
    </div>
  )
}
