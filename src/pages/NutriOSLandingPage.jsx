import Header from '../components/landing/Header'
import Hero from '../components/landing/Hero'
import ProblemSection from '../components/landing/ProblemSection'
import HowItWorksSection from '../components/landing/HowItWorksSection'
import UseCasesSection from '../components/landing/UseCasesSection'
import PersonalizationSection from '../components/landing/PersonalizationSection'
import DayInNutriOSSection from '../components/landing/DayInNutriOSSection'
import EducationSection from '../components/landing/EducationSection'
import SafetySection from '../components/landing/SafetySection'
import FinalCtaSection from '../components/landing/FinalCtaSection'
import Footer from '../components/landing/Footer'

export default function NutriOSLandingPage({ onPrimaryCta }) {
  const handlePrimaryCta = () => {
    if (onPrimaryCta) {
      onPrimaryCta()
      return
    }

    window.location.assign('/onboarding')
  }

  return (
    <>
      <a className="skip-link" href="#main-content">Перейти к содержимому</a>
      <Header onPrimaryCta={handlePrimaryCta} />
      <main id="main-content">
        <Hero onPrimaryCta={handlePrimaryCta} />
        <ProblemSection />
        <HowItWorksSection />
        <UseCasesSection />
        <PersonalizationSection />
        <DayInNutriOSSection />
        <EducationSection />
        <SafetySection />
        <FinalCtaSection onPrimaryCta={handlePrimaryCta} />
      </main>
      <Footer />
    </>
  )
}
