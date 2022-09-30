import React from 'react';
import { FormRequestPass } from '../../components/FormRequestPass';

function RequestPass() {
    return (
        <div>
            <div className="form-gap"></div>
            <div className="container">
                <div className="row">
                    <div className="col-md-4 col-md-offset-4">
                        <div className="panel panel-default">
                            <div className="panel-body">
                                <div className="text-center">
                                    <h3><i className="fa fa-lock fa-4x"></i></h3>
                                    <h2 className="text-center">Reset Password</h2>
                                    <p>You can reset your password here.</p>
                                    <div className="panel-body">
                                        <FormRequestPass></FormRequestPass>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RequestPass;
