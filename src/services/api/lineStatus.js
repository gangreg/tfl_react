import request from "axios"

const app_id = 'c35982fd';
const app_key = 'fe6d46d397a7add79ba9fd44f3ecfcbc'

export const fetchLineStatus = () => {
  return request
    .get(`https://api.tfl.gov.uk/Line/Mode/tube,dlr,overground,tflrail,tram/Status?app_id=${app_id}&app_key=${app_key}`)
}
