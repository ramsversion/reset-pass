import React, { useState } from 'react';
import { requestPassword } from '../requests/server';

const FormPass = () => {
  const [ending, setEnding] = useState(false);
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

  return (
    <>
      {!ending ? (
        <form id="register-form" className="form" method="post" onSubmit={handleSubmit} >
          <div className="form-group ">
            <div className="input-group">
              <span className="input-group-addon"><i className="glyphicon glyphicon-envelope color-blue"></i></span>
              <input id="email" name="email" placeholder="email address" className="form-control" type="email" />
            </div>
          </div>

          <div className="form-group">
            {/* <input name="recover-submit" className="btn btn-lg btn-primary btn-block" value="Reset Password" type="submit" /> */}
            <button disabled={loading} className="btn btn-lg btn-primary btn-block">
              Reset Password &nbsp;
              {loading && <i className="fa fa-circle-o-notch fa-spin"></i>}
            </button>
          </div>
        </form>
      ) : (
        <>
          <h3>{endMessage}</h3>
          <button onClick={() => setEnding(false)} className="btn btn-lg btn-primary btn-block">
            Go Back &nbsp;
          </button>
        </>
      )}
    </>
  )
};

export { FormPass };