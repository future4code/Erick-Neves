import React from "react";
import { useHistory } from "react-router-dom";
import PageTitle from "../PageTitle";
import { goToApplicationFormPage } from "../Router/Coordinator";

const HomePage = () => {
  const history = useHistory();

  return (
    <div>
      <PageTitle title={'Home Page'} />
      <button onClick={() => goToApplicationFormPage(history)}>
        Inscreva-se
      </button>
    </div>
  );
};

export default HomePage;