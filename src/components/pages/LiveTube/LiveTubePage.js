// @flow

import React from "react"
import styled from "styled-components"
import LineStatusDisplay from "../../atoms/LineStatusDisplay";
import colours from '../../../config/colours'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 100px;
`

const Title = styled.h1`
  font-size: 40px
`

type Props = {
  lineStatus: Array<Object>
}

export default class LiveTubePage extends React.PureComponent<Props> {
  render() {
    return (
      <Container>
        <Title>
          Live Line Status
        </Title>
        {this.props.lineStatus.map(line => (
          <LineStatusDisplay
            line={line.name}
            statusDesc={line.lineStatuses[0].statusSeverityDescription}
            colour={colours[line.id]}
            reason={line.lineStatuses[0].reason}
          />
        ))}
      </Container>
    )
  }
}
