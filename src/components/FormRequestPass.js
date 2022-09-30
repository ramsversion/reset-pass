import React, { useState } from 'react';
import { updatedPassword } from '../requests/server';
import { Link } from 'react-router-dom';

const FormRequestPass = () => {
  const href = window.location.pathname;
  let token = href.split('/request-password/');
  token = token.toString().replace(',', '');

  const [ending, setEnding] = useState(false);
  const [loading, setLoading] = useState(false);

  const [endMessage, setEndMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    const password = event.target.elements.password.value;
    const password_confirm = event.target.elements.password_confirm.value;
    const token = event.target.elements.token.value;

    const status = await updatedPassword(password, password_confirm, token);
    setLoading(false);
    setEnding(status.data.Success);
    setEndMessage(status.data.Message);
  };



  return (
    <>
      {!ending ? (
        <form id="register-form" className="form" method="post" onSubmit={handleSubmit} >
          <div className="text-justify">
            <small className="text-muted">New Password</small>&nbsp;
            <div className="form-group ">
              <div className="input-group">
                <span className="input-group-addon"></span>
                <input id="password" name="password" className="form-control" type="password" />
              </div>
            </div>
          </div>

          <div className="text-justify">
            <small className="text-muted">Confirm Password</small>&nbsp;
            <div className="form-group ">
              <div className="input-group">
                <span className="input-group-addon"></span>
                <input id="password_confirm" name="password_confirm" className="form-control" type="password" />
              </div>
            </div>
          </div>

          <div className="form-group">
            <button disabled={loading} className="btn btn-lg btn-primary btn-block">
              Reset Password &nbsp;
              {loading && <i className="fa fa-circle-o-notch fa-spin"></i>}
            </button>
          </div>
          <input type="hidden" name='token' id='token' value={token} />
        </form>
      ) : (
        <>
          <h3>{endMessage}</h3>
          <Link className="btn btn-lg btn-primary btn-block" to="/reset-password">Go Back</Link>
        </>
      )}
    </>
  )
};

export { FormRequestPass };