import styled from "styled-components";
import Arrow from "../../assets/arrow.png";
import { animateScroll as scroll } from "react-scroll";
import { useEffect, useState } from "react";

export const GoTopBtn = () => {
  const [showBtn, setShowBtn] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 700) {
        setShowBtn(true);
      } else {
        setShowBtn(false);
      }
    });
  }, []);

  return (
    <>
      {showBtn && (
        <StyledGoTopBtn
          onClick={() => {
            scroll.scrollToTop();
          }}
        />
      )}
    </>
  );
};

const StyledGoTopBtn = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 2px;
  background-size: 32px;
  background-image: url("${Arrow}");
  background-repeat: no-repeat;
  background-position: center;
  cursor: pointer;
  transform: rotate(180deg);

  position: fixed;
  right: 40px;
  bottom: 40px;

  /* &:hover {
    transform: rotate(180deg);
    transform: scale(1.05);
  } */
`;
