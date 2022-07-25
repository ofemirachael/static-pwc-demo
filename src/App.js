import logo from './logo.svg'
import './App.css'
// import Title from './components/Function'
// import Description from './components/Function'
import Card from './components/Card'
import Gallery from './pages/Gallery'
import Home from './pages/home'
import About from './pages/about'
import Application from './pages/application'
import Contact from './pages/contact'
import StudentData from './pages/studentdata'
import Header from './components/Header'
import Footer from './components/Footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  let studentsData = [
    {
      id: 1,
      name: 'John Obi',
      state: 'Lagos',
      stack: 'React',
      description: 'John is a React developer',
      jobTitle: 'React Engineer',
    },
    {
      id: 2,
      name: 'Oladipo Olu',
      state: 'CA',
      stack: 'Node',
      description: 'Olu is a Node developer',
      jobTitle: 'Node Engineer',
    },
    {
      id: 3,
      name: 'Aneal Emeka',
      state: 'Oosun',
      stack: 'Fullstack',
      description: 'Emeka is a Full stack developer',
      jobTitle: 'Fullstack Engineer',
    },
    {
      id: 4,
      name: 'Austin Jane',
      state: 'Texas',
      stack: 'Backend',
      description: 'Jane is a backend developer',
      jobTitle: 'Backend Engineer',
    },
    {
      id: 5,
      name: 'Jonathan Olu',
      state: 'Anambra',
      stack: 'Frontend',
      description: 'Jonathan is a frontend developer',
      jobTitle: 'Frontend Engineer',
    },
    {
      id: 6,
      name: 'Oludare Israel',
      state: 'Ekiti',
      stack: 'Data',
      description: 'Israel is a Data developer',
      jobTitle: 'Data Engineer',
    },
  ]

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/application" element={<Application />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/studentdata" element={<StudentData />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>

    //   {/* {studentsData.map((student) => (
    //     <Card
    //       name={student.name}
    //       state={student.state}
    //       stack={student.stack}
    //       description={student.description}
    //       jobTitle={student.jobTitle}
    //     />
    //   ))} */}

    //   {/* <Title />
    //   <Description /> */}
    //   {/* <Card
    //     name="Olayode"
    //     state="Lagos"
    //     description="I am a business woman"
    //     stack="Frontend dev"
    //   />
    //   <Card
    //     name="Oluwafemi"
    //     state="Osun"
    //     description="I am not abusiness woman"
    //     stack="fullstack dev"
    //   /> */}
    // {/* </div> */}
  )
}

export default App
