import './App.css'
import Student from './student.jsx'
import Student1 from './student1.jsx'
import Welcome from './welcome.jsx'

function App() {
  return (
    <main className="page-shell">
      <section className="form-card">
        <Welcome />

        <Student name="Honey" age="22" course="MERN" />
        <hr />

        <Student name="Jay" age="23" course="MERN" />
        <hr />

        <Student1 name="Jayu" age="22" course="Python" />
        <hr />

        <Student1 name="Bunny" age="21" course="JAVA" />
      </section>
    </main>
  )
}

export default App