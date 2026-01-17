import { Theme } from "./Theme"

type FontPropsType = {
    family?: string
    weight?: number
    color?: string
    lineHeight?: number
    letterSpacing?: number
    Fmin?: number
    Fmax?: number 
}

export const font = ({family, weight, color, lineHeight, letterSpacing, Fmin, Fmax}: FontPropsType) => `
    font-family: ${family || "Montserrat"};
    font-weight: ${weight || 400};
    color: ${color || Theme.colors.text}}
    lineHeight: ${lineHeight || 1.4}
    letterSpacing: ${letterSpacing || 0.04}
    font-size: calc((100vw - 414px)/(1440-414) * (${Fmax} - ${Fmin}) + ${Fmin}px);
`