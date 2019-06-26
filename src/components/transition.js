import React from "react"
import posed, { PoseGroup } from "react-pose"

import { Link } from "gatsby"

import styled from "styled-components"



const timeout = 0

class Transition extends React.PureComponent {
  
    render() {
      const { children, location } = this.props
  
      const RoutesContainer = posed.div({
        enter: { delay: timeout, delayChildren: timeout},
      })
  
  
      // To enable page transitions on mount / initial load,
      // use the prop `animateOnMount={true}` on `PoseGroup`.
      return (
          <>
        <PoseGroup preEnterPose="preEnter" location={location}>
          <RoutesContainer key={location.pathname}>    
              {children}
          </RoutesContainer>
        </PoseGroup>
        </>
      )
    }
  }
  
  export default Transition;