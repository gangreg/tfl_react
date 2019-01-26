import React from "react"
import { Provider } from "react-redux"
import ReactDOM from 'react-dom';
import withLineStatus from "../withLineStatus"

describe("withLineStatus", () => {
  const store = {
    tube: {
      lineStatus: [],
      error: null,
    },
  }
  const mockStore = {
    getState: () => store,
    subscribe: jest.fn(),
    dispatch: jest.fn(),
  }

  it("fetches the account list when the component mounts", () => {
    const Wrapped = props => <span {...props} />
    const div = document.createElement('div');

    ReactDOM.render(<Provider store={mockStore}>{React.createElement(withLineStatus(Wrapped))}</Provider>, div)
    const expectedDispatch = { type: "tube/FETCH_STATUS.REQUEST" }
    expect(mockStore.dispatch).toHaveBeenCalledWith(expectedDispatch)
  })
})
