import React, { useEffect, useState } from "react";
import ProfileCardPhoto from "./ProfileCardPhoto";
import ProfileChooseButtons from "./ProfileChooseButtons";
import axios from "axios";
import { baseUrl, axiosConfig } from "../parameters";


export default function ProfilePage() {
//o que era antes uma variavel const fixa, vai passar a ser uma varivavel de estado a partir do useState
  const [profileToChoose, setProfileToChoose] = useState({})
// se quiser iniciar com uma variavel inicial fixa deixa o objeto abaixo dentro do useState  
//     {       
//     "id": "71gMbZs2txS9LDvGK5Ew",
//     "age": 26,
//     "name": "Anitta",
//     "photo": "https://images.outgo.com.br/clients/1/events/2923/Anitta-Perfil-4-1.png",
//     "bio": "Amo cachorros e sair para dançar. Procuro alguém animado e sem neuras."
//   }  
// )
  

//efeitos colaterais, e requisição axios da API com meu nome
  useEffect(() => {
      axios.get(`${baseUrl}/${axiosConfig}/person`)
      .then(response => {
          console.log('PERFIL',response.data.profile)
          setProfileToChoose(response.data.profile)
        })
        .catch((error) => {
            console.log(error)
          })
      
  }, []);
  

  return (
    <div>
        {/* passando como props profile, com a variavel const para onde vai redenrizar de alguma forma */}
        <ProfileCardPhoto profile={profileToChoose}/>  
        {/* <hr /> */}
        <ProfileChooseButtons />
    </div>
  );
}
