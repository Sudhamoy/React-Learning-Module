import './App.css';
import Component1 from './components/Component1';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import Avatar from './components/Avatar/Avatar'

function App() {
  const shownav=true;
  return (
    <>
      <div className="App">
      Creating my first React Application..
      {/*
      <Component1/>
      <Component1/>
      */}
      <Navbar/>
      <Header/>
      <Main/>
      <Avatar/>
      <Footer/>
      

        {/* Conditional Rendering */}
      {shownav && <Navbar/>}
      {true && <h1>Hello</h1>}<hr/>
      {5==5 && <h1>Hi</h1>}<hr/>

      </div>

    </>
    
  );
}

export default App;
