import Header         from './components/Header';
import AlternadorTema from './components/AlternadorTema';
import Footer         from './components/Footer';
import './App.css';

export default function App(){
  return(
    <div className='app-wrapper'>
      <Header/>
      <AlternadorTema/>
      <Footer/>
    </div>
  )
}
