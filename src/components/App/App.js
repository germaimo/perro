import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Content from '../Content/Content';
import styles from './App.module.css';
import Menu from "../Menu/Menu";

//TODO HIGHLIGHT, FORM, cambiar illustraciones, popup
//TODO CAMBIAR nombre de clases

const App = () =>{
  return  <div className={styles['app_wrapper']}> 
    <div className={styles['header_menu_container']}>
      <Header/>
      <Menu/>
    </div>

    <Content/>

    <Footer/> 

  </div>  
}



export default App;
