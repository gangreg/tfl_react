//@flow

import React from "react"
import styled from "styled-components"
import colours from '../../config/colours'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
  border-bottom: 1.5px solid;
`

const BoxContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 60px;
`

const HalfBox = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 50%;
  text-align: center;
  font-weight: 600;
  font-size: 20px;
`

const LineBox = styled(HalfBox)`
  background-color: ${props => props.colour};
  color: white;
`

const StatusBox = styled(HalfBox)`
  color: black;
`

const TextContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
`

const ReasonBox = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  background-color: ${colours.yellowReason}
  padding: 5px;
  height: 150px;
  font-size: 20px;
`

const PlusMinus = styled.label`
  display: flex;
  margin-left: 10px;
  font-weight: bold;
  font-size: 20px
`

type Props = {
  line: string,
  statusDesc: string,
  reason?: string,
  colour: string
}

export default class LineStatusDisplay extends React.PureComponent<Props> {
  state = {
    isShowingReason: false
  }

  render() {
    return (
      <Container>
        <BoxContainer
          onClick={() => this.setState(prevState => {
            return { isShowingReason: this.props.statusDesc !== 'Good Service' && !prevState.isShowingReason }
          })}
        >
          <LineBox colour={this.props.colour}>
            {this.props.line}
          </LineBox>
          <StatusBox>
            <TextContainer>
              {this.props.statusDesc}
              <PlusMinus>{this.props.reason && (this.state.isShowingReason ? '-' : '+')}</PlusMinus>
            </TextContainer>
          </StatusBox>
        </BoxContainer>
        {this.state.isShowingReason &&
          <ReasonBox>
            {this.props.reason}
          </ReasonBox>
        }
      </Container>
    )
  }
}
