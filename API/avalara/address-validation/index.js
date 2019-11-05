import { apiStatus } from '../../../../lib/util'
import { Router } from 'express'

export default ({ config, db, client }) => {
  let addressValidationApi = Router()

  /**
   * POST Address Validation
   */
  addressValidationApi.post('/resolve', (req, res) => {
    let address = req.body.address
    if (!address) {
      apiStatus(res, 'Address required.', 500)
      return
    }

    client.resolveAddress(address).then(result => {
      apiStatus(res, result, 200)
    })
  })

  return addressValidationApi
}
