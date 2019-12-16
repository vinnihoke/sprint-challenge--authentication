import React, { useState } from "react";
import Signin from "../components/Signin";
import Signup from "../components/Signup";

// UI
import { Button } from "reactstrap";

const AuthFlow = () => {
  const [signup, setSignup] = useState(false);

  return (
    <div>
      <h3>Auth Flow</h3>

      {signup ? (
        <div>
          <h5>Sign-up</h5>
          <Signup />
        </div>
      ) : (
        <div>
          <h5>Sign-in</h5>
          <Signin />
        </div>
      )}
      <Button color="warning" onClick={() => setSignup(!signup)}>
        {signup ? (
          <span>Already have an account?</span>
        ) : (
          <span> Switch to Sign-up?</span>
        )}
      </Button>
    </div>
  );
};

export default AuthFlow;
