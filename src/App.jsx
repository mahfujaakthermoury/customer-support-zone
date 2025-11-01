
import './App.css'
import NavBar from './Component/NavBar/NavBar'
import Footer from './Component/Footer/Footer'
import Banner from './Component/Banner/Banner'
import CustomerTickets from './Component/CustomerTickets/CustomerTickets'
import { ToastContainer, toast } from 'react-toastify';
import { useState } from 'react'


const fetchCustomers = async () => {
  const res = await fetch("/customer-tickets.json")
  return res.json()
}

const customersPromise = fetchCustomers()

function App() {
  const [inProgress, setInProgress] = useState([]);
  const [resolved, setResolved] = useState([]);
  //const [remove, setRemove] = useState([]);

  const hendelInProgress = (customer) => {
    const inProgressTask = [...inProgress, customer];
    setInProgress(inProgressTask)

    toast("Customer ticket added!", { toastId: 'unique', position: "top-center", autoClose: 1000 })
  }

  const hendleResolved = (task) => {
    const resolvedTask = [...resolved, task];
    setResolved(resolvedTask)
    
  }

  const hendleRemove = (removed) => {
    const filterData = inProgress.filter(task => task.id !== removed.id)
    //console.log(filterData)
    setInProgress(filterData)
  }

  return (
    <>
      <NavBar></NavBar>
      <Banner inProgress={inProgress} resolved={resolved} hendleRemove={hendleRemove}></Banner>
      <CustomerTickets
        key='id' customersPromise={customersPromise}
        inProgress={inProgress} hendelInProgress={hendelInProgress}
        resolved={resolved} hendleResolved={hendleResolved}
        hendleRemove={hendleRemove}
      ></CustomerTickets>
      <Footer></Footer>
      <ToastContainer />
    </>
  )
}

export default App