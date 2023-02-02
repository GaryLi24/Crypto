import { Navbar, Welcome, Footer, Services, Transactions } from './components'

const App = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between items-center">
      <div className="gradient-bg-welcome w-full">
        <Navbar />
        <Welcome />
      </div>
      {/* <Services />
      <Transactions /> */}
      <Footer />
    </div>
  )
}

export default App
