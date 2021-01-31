import React from "react";
import ProfileCardPhoto from "./ProfileCardPhoto";
import ProfileChooseButtons from "./ProfileChooseButtons";


export default function ProfilePage() {
  const profileToChoose = {       
    "id": "71gMbZs2txS9LDvGK5Ew",
    "age": 26,
    "name": "Anitta",
    "photo": "https://images.outgo.com.br/clients/1/events/2923/Anitta-Perfil-4-1.png",
    "bio": "Amo cachorros e sair para dançar. Procuro alguém animado e sem neuras."
  }  

  return (
    <div>
        {/* passando como props profile, com a variavel const para onde vai redenrizar de alguma forma */}
        <ProfileCardPhoto profile={profileToChoose}/>  
        {/* <hr /> */}
        <ProfileChooseButtons />
    </div>
  );
}
