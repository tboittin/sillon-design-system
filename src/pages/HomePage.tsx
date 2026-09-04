import { Header } from '../components/Header'
import { Hero } from '../components/Hero'
import { DoubleExpertise } from '../components/DoubleExpertise'
import { ProjectsGrid } from '../components/ProjectsGrid'
import { Skills } from '../components/Skills'
import { Contact } from '../components/Contact'
import { Footer } from '../components/Footer'

/* ============================================================================
   HomePage — le récit Sillon :
   accueil -> double expertise -> projets sélectionnés -> compétences -> contact
   ========================================================================== */

export function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <DoubleExpertise />
        <ProjectsGrid />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  )
}