import { createSelector } from "reselect"

const getLineStatus = state => state.tube.lineStatus

export const selectLineStatus = createSelector(
  [getLineStatus],
  lineStatus => lineStatus,
)
