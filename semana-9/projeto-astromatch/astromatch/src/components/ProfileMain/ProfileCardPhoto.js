import React from 'react'
import styled from "styled-components"

const ProfileCardContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: auto;
    margin: 2.5vh;
    border: 1px solid black;
`
const ProfilePhoto = styled.img`
    width: 100%;
    display: block;
    height: 300px;
`

// recebe como a props profile de ProfileMain
export default function ProfileCardPhoto(props) {
    const profile = props.profile
    return (
        <ProfileCardContainer>
            <ProfilePhoto src={profile.photo} />
            <p>{profile.name}, {profile.age}</p>
            <p>{profile.bio}</p>
        </ProfileCardContainer>
    )
}
