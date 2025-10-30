
import './App.css'
import NavBar from './Component/Navbar/navbar'
import Footer from './Component/Footer/Footer'
import Banner from './Component/Banner/Banner'
import CustomerTickets from './Component/CustomerTickets/CustomerTickets'

const fetchCustomers= async () => {
  const res= await fetch("/customer-tickets.json")
  return res.json ()
}

const customersPromise = fetchCustomers()

function App() {

  return (
    <>
    <NavBar></NavBar>
    <Banner></Banner>
    <CustomerTickets key='id' customersPromise={customersPromise}></CustomerTickets>
    <Footer></Footer>
    </>
  )
}

export default App
