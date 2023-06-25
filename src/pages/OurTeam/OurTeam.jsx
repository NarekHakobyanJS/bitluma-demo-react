import React from "react";
import Container from "../../components/Container/Container";
import {useTranslation} from "react-i18next";
import "./OurTeam.css";
import Team from "./Team/Team";

const OurTeam = () => {
  const {t} = useTranslation()

  const TeamData = [
    {id : 1, name : t('OurTeam.name'), position : "Owner & Co-Founder", biograpy : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", imgUrl : "./img/mayis.jpg"},
    {id : 2, name : "Narek Hakobyan", position : "Co-Founder & Developer", biograpy : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", imgUrl : "./img/narek.jpg"},
    {id : 3, name : "Robert Babayan", position : "Co-Founder & Media Producing", biograpy : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.ipsum", imgUrl : "./img/robert.jpg"},
]

  return (
    <Container>
      <div className="our-team">
        {
            TeamData.map(team => <Team team={team}/> )
        }
      </div>
    </Container>
  );
};

export default OurTeam;
