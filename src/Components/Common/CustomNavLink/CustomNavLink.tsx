import { NavLink } from 'react-router-dom';
import { ReactSVG } from 'react-svg'

import {
    BoxImage,
    BoxText,
    StylesBox
} from './StylesBox.styles';

import {CustomNavLinkType} from "./CustomNavLink.types";

export const CustomNavLink = ({path , image, text, onClick}: CustomNavLinkType) => {
  return (
    <NavLink to={path} onClick={onClick}>
      <StylesBox>
        <BoxImage>
          <ReactSVG src={image}/>
        </BoxImage>
        <BoxText>
          {text}
        </BoxText>
      </StylesBox>
    </NavLink>
  )
}