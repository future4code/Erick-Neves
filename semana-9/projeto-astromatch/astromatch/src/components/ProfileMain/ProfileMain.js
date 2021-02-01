import React, { useEffect, useState } from "react";
import ProfileCardPhoto from "./ProfileCardPhoto";
import ProfileChooseButtons from "./ProfileChooseButtons";
import axios from "axios";
import { baseUrl, axiosConfig } from "../parameters";

import styled from 'styled-components';
import loadingIcon from "../../img/heart.gif";

const ImgLoading = styled.img`
  margin: auto;
  height: 70vh;
  width: 70vh;
`;



export default function ProfilePage() {
//o que era antes uma variavel const fixa, vai passar a ser uma varivavel de estado a partir do useState
  const [profileToChoose, setProfileToChoose] = useState(undefined)
// se quiser iniciar com uma variavel inicial fixa deixa o objeto abaixo dentro do useState  
//     {       
//     "id": "71gMbZs2txS9LDvGK5Ew",
//     "age": 26,
//     "name": "Anitta",
//     "photo": "https://images.outgo.com.br/clients/1/events/2923/Anitta-Perfil-4-1.png",
//     "bio": "Amo cachorros e sair para dançar. Procuro alguém animado e sem neuras."
//   }  
// )

//função com o axios get do profile para chamar em outros lugares
const getProfileToChoose = () => {
    axios.get(`${baseUrl}/${axiosConfig}/person`)
      .then(response => {
          console.log('PERFIL', response.data.profile)
          setProfileToChoose(response.data.profile)
        })
        .catch((error) => {
            console.log(error)
          })
}

//função que realmente faz a função de escolher/choice false or true, como parametro para funções do onClick...
const choiceProfile = (choice) => {
    const body = {
        choice: choice,
        id: profileToChoose.id
    }
    setProfileToChoose(undefined)

    axios.post(`${baseUrl}/${axiosConfig}/choose-person`, body)
    .then((response) => {
        console.log(response)
        //A axios de renderizar o profile, que foi transformada em função vai ter que ser chamada novamente para poder ir para o proximo perfil depois de clicar em não
        getProfileToChoose()
    })
    .catch((error) => {
        console.log(error);
      })

}

//efeitos colaterais, função de requisição axios da API
  useEffect(() => {
      getProfileToChoose()
      
  }, []);

  const onClickNot = () => {
    choiceProfile(false)

    }

  const onClickYes = () => {
    choiceProfile(true)
  }
  

  return (
    <div>
    { profileToChoose ?
        (<>
                 {/* passando como props profile, com a variavel const para onde vai redenrizar de alguma forma */}
            <ProfileCardPhoto profile={profileToChoose}/>  
                 {/* <hr /> */}
                 {/* passando como props as funções e com mesmo nome para facilitar*/}
            <ProfileChooseButtons onClickNot={onClickNot} onClickYes={onClickYes} />
        </>) : <ImgLoading src={loadingIcon} alt="loading Icon" />
    }
    </div>
  );
}
