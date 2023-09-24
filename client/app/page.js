
import CustomButton from '@/components/Buttons/CustomButton'
import CustomCard from '@/components/Cards/CustomCard'
import Footer from '@/components/Footer/Footer'
import TestForm from '@/components/testForm/TestForm'
import teamOne from '@/public/images/EQUIPO-PAZ-3.png'

export default function Home() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-between pt-8 px-0 pb-0">
      <h1 className='text-5xl font-semibold'> - WELCOME TO ASSOCIATION SCOUTS OF CHILE -</h1>
      <TestForm />
      <CustomCard imageUrl={teamOne} title={'Team One'} />
      <CustomButton title={'Inicio'} />

      <Footer />
    </main>
  )
}
