import React from "react";
import ProfileCardPhoto from "./ProfileCardPhoto";
import ProfileChooseButtons from "./ProfileChooseButtons";


export default function ProfilePage() {
  return (
    <div>
        <ProfileCardPhoto />
        {/* <hr /> */}
        <ProfileChooseButtons />
    </div>
  );
}
