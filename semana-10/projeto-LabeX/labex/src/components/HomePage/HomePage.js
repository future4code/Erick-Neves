import React from "react";
import { useHistory } from "react-router-dom";
import { goToApplicationFormPage } from "../Router/Coordinator";

const HomePage = () => {
  const history = useHistory();

  return (
    <div>
      <h1>Home Page</h1>
      <button onClick={() => goToApplicationFormPage(history)}>
        Candidate-se
      </button>
    </div>
  );
};

export default HomePage;