import * as React from 'react';
import  requestPassword  from '../requests/server'


const FormPass = () => {
  requestPassword('1');
  const handleSubmit = (event) => {
    event.preventDefault();

    const email = event.target.elements.email.value;
    const password = event.target.elements.password.value;

    alert(email + ' ' + password);
  };

  return (
    <form id="register-form" className="form" method="post" onSubmit={handleSubmit} >

      <div className="form-group ">
        <div className="input-group">
          <span className="input-group-addon"><i className="glyphicon glyphicon-envelope color-blue"></i></span>
          <input id="email" name="email" placeholder="email address" className="form-control" type="email" />
        </div>
      </div>

      <div className="form-group">
        <input name="recover-submit" className="btn btn-lg btn-primary btn-block" value="Reset Password" type="submit" />
      </div>

      <input type="hidden" className="hide" name="token" id="token" value="" />
    </form>
  );
};

export { FormPass };