import './App.css'
import Student from './student.jsx'
import Welcome from './welcome.jsx'

function App() {
  return (
    <main className="page-shell">
      <section className="form-card">
        <Welcome />
        <Student name="Honey" age="22" course="MERN" />
        <Student name="Jay" age="23" course="MERN" />

      </section>
    </main>
  )
}

export default App
