import { compose, lifecycle } from 'recompose'
import { connect } from 'react-redux'
import { fetchLineStatusRequest } from '../modules/tube/actions'

const mapDispatchToProps = dispatch => ({
  fetchLineStatus: () => dispatch(fetchLineStatusRequest()),
})

export default compose(
  connect(
    null,
    mapDispatchToProps,
  ),
  lifecycle({
    componentDidMount() {
      this.props.fetchLineStatus()
    },
  }),
)
