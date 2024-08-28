import './App.css'
import Landing from './Components/LandingPage/Landing'

function App() {

  return (
    <div className="Wrapper">
      <nav>
        <Landing/>
      </nav>
      <section>
        <h1>My Main Body Component</h1>
      </section>
      <footer>
        <h1>My Footer Component</h1>
      </footer>
    </div>
  )
}

export default App
