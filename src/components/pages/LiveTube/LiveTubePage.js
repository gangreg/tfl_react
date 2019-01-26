// @flow

import React from "react"
import styled from "styled-components"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 100px;
`

const Title = styled.h1`
  font-size: 40px
`

export default class LiveTubePage extends React.PureComponent {
  render() {
    return (
      <Container>
        <Title>
          Live Line Status
        </Title>
      </Container>
    )
  }
}
