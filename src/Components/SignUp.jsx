import React from "react";
import SignUpText from "./SignUpText";
import SignUpForm from "./SignUpForm";

const SignUp = () => {
    return(
        <div>
        <div className="col-3">
            <div className="left">
                <SignUpText />
            </div>
        </div>
            <div>
                <SignUpForm />
            </div>
        
        </div>
    );
}

export default SignUp;