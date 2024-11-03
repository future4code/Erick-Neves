export const baseUrl = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/erick-neves-epps";

export const auth = {
    headers: {
      auth: localStorage.getItem("token"),
    },
  };