import { Theme } from "./Theme"

type FontPropsType = {
    family?: string
    weight?: number
    color?: string
    lineHeight?: number
    letterSpacing?: string
    Fmin?: number
    Fmax?: number 
}

export const font = ({family, weight, color, lineHeight, letterSpacing, Fmin, Fmax}: FontPropsType) => `
    font-family: ${family || "Montserrat"};
    font-weight: ${weight || 400};
    color: ${color || Theme.colors.text};
    line-height: ${lineHeight || 1.4};
    letter-spacing: ${letterSpacing || "0.04em"};
    // font-size: calc( (100vw - 414px)/(1440-414) * (${Fmax} - ${Fmin}) + ${Fmin}px);
    font-size: calc( (100vw - 414px)/(1440 - 414) * (${Fmax} - ${Fmin}) + ${Fmin}px);
`