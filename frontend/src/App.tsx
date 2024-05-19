import './App.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Main from './components/Main';



function App() {  
  return (
    <div className="app">
      
      <header>
        <NavBar />
      </header>
      
      <main>
        <Main />
      </main>
      
      <footer>
        <Footer />
      </footer>
        
      
      
      
    </div>
  );
}

export default App

