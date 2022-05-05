import React from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

import { Container, Gallery, Video } from "./styles";

import prod02 from "../../assets/prod02.png";
import playIcon from "../../assets/ic_play_circle.svg";

function Photo() {
  const photosGallery = ["p1", "p2", "p3", "p4"];

  return (
    <Container>
      <Gallery>
        <h2>Video</h2>
        <Video>
          <img src={playIcon} alt="" />
        </Video>

        <MdKeyboardArrowUp size={24} color="#000" />
        {photosGallery.map((photo, index) =>
          index === 0 ? (
            <img src={prod02} alt="" key={index} id="primary" />
          ) : (
            <img src={prod02} alt="" key={index} />
          )
        )}
        <MdKeyboardArrowDown size={24} color="#000" />
      </Gallery>

      <img src={prod02} alt="" />
    </Container>
  );
}

export default Photo;
