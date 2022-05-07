import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Content from '../Content/Content';
import styles from './App.module.css';


const App = () =>{
  return  <div className={styles['app_wrapper']}> 
  <Header/>
  <Content/>
  <Footer/> 
  </div>  
}



export default App;
