import Head from 'next/head'
import WelcomeCard from '../components/WelcomeCard'
import AttendeeRegistrationForm from '../components/AttendeeRegistrationForm'
import TicketCounter from '../components/TicketCounter'

export default function Home() {
  return (
    <>
      <Head>
        <title>CIT-U Computer Engineering Conference</title>
        <meta name="description" content="Tech Conference Registration" />
      </Head>
      
      <div className="container">
        {/* 1. Welcome Card */}
        <WelcomeCard />
        
        {/* 2. Registration Form */}
        <AttendeeRegistrationForm />
        
        {/* 3. Ticket Counter */}
        <TicketCounter />
      </div>
    </>
  )
}