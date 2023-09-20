
import TestForm from '@/components/TestForm/TestForm'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <section>
        <h1 className='text-5xl font-semibold'> - WELCOME TO ASSOCIATION SCOUTS OF CHILE -</h1>
        <TestForm/>
      </section>
    </main>
  )
}
