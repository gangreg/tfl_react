import { compose, lifecycle } from 'recompose'
import { connect } from 'react-redux'
import { fetchLineStatusRequest } from '../modules/tube/actions'
import { selectLineStatus } from '../modules/tube/selectors'

const mapStateToProps = state => ({
  lineStatus: selectLineStatus(state)
})

const mapDispatchToProps = dispatch => ({
  fetchLineStatus: () => dispatch(fetchLineStatusRequest()),
})

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
  lifecycle({
    componentDidMount() {
      this.props.fetchLineStatus()
    },
  }),
)
