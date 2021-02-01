import React from "react";
import axios from "axios";
import { baseUrl, axiosConfig } from "../parameters";

export default function ResetButton() {
    const onClickReset = () => {
        axios.put(`${baseUrl}/${axiosConfig}/clear`)
          .then(response => {
              console.log(response)
            })
            .catch((error) => {
                console.log(error)
              })
    }

  return (
    <div>
        <button onClick={onClickReset}>Resetar matchers</button>
    </div>
  );
}
