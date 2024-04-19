import { useState } from "react";
import * as S from "./HelpWindowButton-style";
import { FaCircleQuestion } from "react-icons/fa6";
import { IoIosCloseCircle } from "react-icons/io";

import { HelpWindow } from "../HelpWindow/HelpWindow";

export const HelpWindowButton: React.FC = () => {

    const [showInfo, setShowInfo] = useState(false);

  return (
    <>
      <S.HelpButtonContainer>
        <S.HelpButton onClick={() => {setShowInfo(!showInfo)}}>
          {
          showInfo ? <IoIosCloseCircle /> : <FaCircleQuestion />
          } 
        </S.HelpButton>
      </S.HelpButtonContainer>
      <HelpWindow showInfo={showInfo} />
    </>
  );
};
