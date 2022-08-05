import {MouseEventHandler} from "react";

export interface CustomNavLinkType {
    path: string
    image: string
    text: string
    onClick?: MouseEventHandler
}