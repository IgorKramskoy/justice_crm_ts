import { NavLink } from 'react-router-dom';
import { ReactSVG } from 'react-svg'

import { StylesBox } from './StylesBox.styles';

export const CustomNavLink = ({path, image, text, onClick}) => {
  return (
    <NavLink to={path} onClick={onClick} >
      <StylesBox>
        <StylesBox mode="image">
          <ReactSVG src={image}/>
        </StylesBox>
        <StylesBox mode="text">
          {text}
        </StylesBox>
      </StylesBox>
    </NavLink>
  )
}