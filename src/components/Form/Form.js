import React from 'react'
import styles from './Form.module.css'
//📨

const Form = () => {
  return (
    <div> 
        <form>
                <div className={styles['columna-1']}>
                    <div>
                        
                        <div className={styles['name']}>
                            <input id="fromName" name="fromName" placeholder='Nombre' type="text"></input>
                            
                        </div>

                        <div className={styles['email']}>
                            <input id="fromEmail" name="fromEmail" placeholder='E-mail' type="email"></input>
                            
                        </div>

                        <div className={styles['asunto']}>
                            <input id="fromAsunto" name="fromAsunto" placeholder='Asunto' type="text"></input>
                           
                        </div>

                    </div>

                    <div className={styles['message']}> 
                        <textarea id="message" name="message" placeholder='mensaje' ></textarea>
                        
                    </div>
                </div>

                <div className={styles['columna-2']} >
                    <p>↪️</p>  
                    <input id="send" name="send" type="submit"></input>
                    
                </div>
        </form>  
    </div>
  )
}

export default Form