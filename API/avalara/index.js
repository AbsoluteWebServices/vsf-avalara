import { Router } from 'express'
import Avatax from 'avatax'
import addressValidation from './address-validation'

module.exports = ({ config, db }) => {
  let avalaraApi = Router()

  const options = {
    appName: config.extensions.avalara.appName,
    appVersion: config.extensions.avalara.appVersion,
    environment: config.extensions.avalara.environment,
    machineName: config.extensions.avalara.machineName
  }

  const creds = config.extensions.avalara.credentials

  let client = new Avatax(options).withSecurity(creds)

  avalaraApi.use('/addresses', addressValidation({ config, db, client }))

  return avalaraApi
}
