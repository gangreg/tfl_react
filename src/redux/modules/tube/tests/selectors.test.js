import { selectLineStatus } from "../selectors"
import { initialState } from "../reducer"
import mockResponse from "./mockLineStatus"

describe("Line Status selectors", () => {
  const state = {
    tube: {
      ...initialState,
      lineStatus: [...initialState.lineStatus, ...mockResponse],
    },
  }

  describe("selectLineStatus", () => {
    it("should return the list of line status.", () => {
      expect(selectLineStatus(state).length).toEqual(1)
      expect(selectLineStatus(state)).toEqual(mockResponse)
    })
  })
})
