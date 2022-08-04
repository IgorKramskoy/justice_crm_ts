import { NavLink } from 'react-router-dom';
import { ReactSVG } from 'react-svg'

import {
    BoxImage,
    BoxText,
    StylesBox
} from './StylesBox.styles';

export const CustomNavLink = ({path , image, text, onClick}: any) => {
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