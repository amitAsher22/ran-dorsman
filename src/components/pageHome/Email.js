import React , {useRef , useState}  from 'react'
import '../../css/email.css'
import { AiOutlineInstagram } from 'react-icons/ai';
import { FaFacebookF } from 'react-icons/fa';
import emailjs from '@emailjs/browser';


function Email() {
  const [name , setName] = useState('')
  const [talkUser , settalkUser] = useState('')
  const [emailUser , setemailUser] = useState('')
  const [phoneUser , setphoneUser] = useState('')
  const [MSuser , setMSuser] = useState('')
  const [show , setShow] = useState(true)

  


  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_x5t1q7g', 'template_dph05n3', form.current, 'user_zQXamzRRd3VgShqvnB0KG')
      .then((result) => {
          console.log(result.text);
          console.log("message send");
          setShow(false)
      }, (error) => {
          console.log(error.text);
      });
  };
 

  return (
        <div >
            <div className='bgEmail'>
            {show ?  
            <form className='rightEmailDiv' ref={form} onSubmit={sendEmail} id="contact">
             
                  <h1  className='titleEmail'>נעים איתך</h1>
                  <input placeholder='שם' className='inputEmail' type="text" name="fullName" onChange={(event)=> setName(event.target.value)} value={name}/>
                  <input className='inputEmail' placeholder='על מה נדבר?' name="talk" onChange={(event)=> settalkUser(event.target.value)} value={talkUser}/>
                  <input className='inputEmail' placeholder='דוא"ל' name="email" onChange={(event)=> setemailUser(event.target.value)} value={emailUser}/>
                  <input className='inputEmail' placeholder='טלפון' name="phone"  onChange={(event)=> setphoneUser(event.target.value)} value={phoneUser}/>
                  <textarea className='inputEmail' placeholder='אני רוצה להוסיף עוד כמה מילים:' name="messageUser"  onChange={(event)=> setMSuser(event.target.value)} value={MSuser}/>

                  <input type="submit" value="שליחה"  className='btnEmail'  />
          </form> : <h1>ההודעה נשלחה !</h1>}
             
              <div className='leftEmailDiv'>
                    <div className='instaFacePosition'>
                        <AiOutlineInstagram/>
                        <FaFacebookF/>
                    </div>
                  <p>כתובתנו: אבן עזרא 17, הרצליה.</p>
                  <p>ניתן ליצור קשר גם בדרכים הבאות:</p>
                  <p><a className='emailRan' href='mailto:nua4you@gmail.com' target="_blank">nua4you@gmail.com</a></p>
                  <p><a className='phoneRan' href='tel:054-6517517'>054-6517517</a></p>
                  <div className='responsePhone'>
                      <p>שעות מענה טלפוני: </p>
                      <p>א'-ה' 8:00-13:00, 16:00-21:00 </p>
                      <p>יום ו' 7:00-13:00 </p>
                  </div>
              </div>
                

            </div>
                <span  className='developer'>©2022 by Amit Asher. Herzliya</span>
        </div>
  )
}

export default Email