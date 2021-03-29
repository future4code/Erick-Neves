import styled from 'styled-components';
import space from '../../imgs/SpacePerspective-earth-750x375.jpg'

export const ContainerHome = styled.div`
    background-image: url(${space});
    background-size: 100%;
    background-repeat: no-repeat;
    height: 90vh;
    color: white;
`

export const TextAboutUs = styled.p`
  font-weight: bold;
  text-align: justify;
  margin-top: 5%;
`;

export const AboutUsContainer = styled.div`
  display: flex;
  padding: 120px 25px;
  height: 25%;
  width: 50%;
  color: black;

  
  @media (min-device-width: 320px) and (max-device-width: 420px) {
    flex-direction: column;
  }
`;

export const ContainerButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  
`;
