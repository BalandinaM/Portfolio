import styled from "styled-components"
import { SectionTitle } from "../../../components/sectionTitle/SectionTitle.styled"

export const About = () => {
  return (
    <AboutStyling>
        <SectionTitle>About me</SectionTitle>
        <p>The long barrow was built on land previously inhabited in the Mesolithic period. It consisted of a sub-rectangular earthen tumulus, estimated to have been 15 metres (50 feet) in length, with a chamber built from sarsen megaliths on its eastern end. Both inhumed and cremated human remains were placed within this chamber during the Neolithic period, representing at least nine or ten individuals.</p>
    </AboutStyling>
  )
}

const AboutStyling = styled.section`
    width: 1200px;
    margin: 0 auto;
    background-color: #eed5cf;

    p {
        
    }
`