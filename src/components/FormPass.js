import { useState } from 'react';
import requestPassword from '../requests/server';
import { useForm } from "react-hook-form";

const [ending, setEnding] = useState(false);
const FormPass = () => {
  const [loading, setLoading] = useState(false);
  
  const [endMessage, setEndMessage] = useState('');



  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    const email = event.target.elements.email.value;
    const status = await requestPassword(email);
    setLoading(false);
    setEnding(status.data.Success);
    setEndMessage(status.data.Message);
    console.log(status.data.Success);
  };


  // function onSubmit(data) {
  //   //const email = data.target.elements.email.value;
  //   // return promise that resolves after 2 seconds
  //   return new Promise(resolve => {
  //     setTimeout(() => {
  //       resolve();
  //     }, 2000);
  //   });
  // }

  return (
    
      {ending 
        ? <form id="register-form" className="form" method="post" onSubmit={handleSubmit} >
          <div className="form-group ">
            <div className="input-group">
              <span className="input-group-addon"><i className="glyphicon glyphicon-envelope color-blue"></i></span>
              <input id="email" name="email" placeholder="email address" className="form-control" type="email" />
            </div>
          </div>

          <div className="form-group">
            {/* <input name="recover-submit" className="btn btn-lg btn-primary btn-block" value="Reset Password" type="submit" /> */}
            <button disabled={loading} className="btn btn-lg btn-primary btn-block">
              Reset Password
              <div className="spinner-border text-primary" role="status">
                <span className="sr-only">Loading...</span>
              </div>
              {loading && <span className="spinner-border text-primary"></span>}
            </button>
          </div>




          <input type="hidden" className="hide" name="token" id="token" value="" />
        </form>

      :

        <h3>{endMessage}</h3>
  )
};

export { FormPass };