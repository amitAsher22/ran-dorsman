import React , {useRef}  from 'react'
import '../../css/email.css'
import { AiOutlineInstagram } from 'react-icons/ai';
import { FaFacebookF } from 'react-icons/fa';
import emailjs from '@emailjs/browser';


function Email() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_x5t1q7g', 'template_dph05n3', form.current, 'user_zQXamzRRd3VgShqvnB0KG')
      .then((result) => {
          console.log(result.text);
          console.log("message send");
      }, (error) => {
          console.log(error.text);
      });
  };
 

  return (
        <div >
            <div className='bgEmail'>
              <form className='rightEmailDiv' ref={form} onSubmit={sendEmail}>
             
                         <h1 className='titleEmail'>נעים איתך</h1>
                        <input placeholder='שם' className='inputEmail' type="text" name="fullName" />
                        <input className='inputEmail' placeholder='על מה נדבר?' name="talk"/>
                        <input className='inputEmail' placeholder='דוא"ל' name="email"/>
                        <input className='inputEmail' placeholder='טלפון' name="phone"/>
                        <input className='inputEmail' placeholder='אני רוצה להוסיף עוד כמה מילים:' name="massage"/>

                        <input type="submit" value="שליחה" />
              </form>
              <div className='leftEmailDiv'>
                  <AiOutlineInstagram/>
                  <FaFacebookF/>
                  <p>כתובתנו: אבן עזרא 17, הרצליה.</p>
                  <p>ניתן ליצור קשר גם בדרכים הבאות:</p>
                  <p>nua4you@gmail.com</p>
                  <p>054-6517517</p>
                  <p>שעות מענה טלפוני: </p>
                  <p>א'-ה' 8:00-13:00, 16:00-21:00 </p>
                  <p>יום ו' 7:00-13:00 </p>
              </div>
                

            </div>
        </div>
  )
}

export default Email