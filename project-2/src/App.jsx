import { useState } from 'react'
import './App.css'
import Navbar from './componants/Navigation/Navbar'
import ContextHeader from './componants/ContactHeader/ContextHeader'
import ContactForm from './componants/ContactForm/ContactForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Navbar />
        <main className='main_container'>
          <ContextHeader />
          <ContactForm />
        </main>
      </div>
    </>
  );
}

export default App
