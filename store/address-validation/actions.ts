import { ActionTree } from 'vuex'
import config from 'config'
import fetch from 'isomorphic-fetch'
import RootState from '@vue-storefront/core/types/RootState'
import { processURLAddress } from '@vue-storefront/core/helpers'
import { adjustMultistoreApiUrl } from '@vue-storefront/core/lib/multistore'
import AddressValidationState from '../../types/AddressValidationState'
// import * as types from './mutation-types'
import * as mappers from '../../helpers/mappers'

// it's a good practice for all actions to return Promises with effect of their execution
export const actions: ActionTree<AddressValidationState, RootState> = {
  resolve ({}, address): Promise<Response> {
    let url = processURLAddress(config.avalara.endpoint.addressValidation) + '/resolve'
    url = config.storeViews.multistore ? adjustMultistoreApiUrl(url) : url

    return new Promise((resolve, reject) => {
      fetch(url, {
        method: 'POST',
        headers: { 
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        mode: 'cors',
        body: JSON.stringify({ address: mappers.mapAddress(address) })
      }).then(res => {
        resolve(res)
      }).catch(err => {
        reject(err)
      })
    })
  },
}
