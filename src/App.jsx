import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Content from './Content';
import MyNavbar from './MyNavbar';


function App() {

  return (
    <div className='App'>
      <MyNavbar/>

      <div className="container">
<Content/>
</div>

    </div>
  )
}



export default App
