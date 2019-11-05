import { VueStorefrontModule, VueStorefrontModuleConfig } from '@vue-storefront/core/lib/module'
import { addressValidationModule } from './store/address-validation'

export const KEY = 'avalara'

const moduleConfig: VueStorefrontModuleConfig = {
  key: KEY,
  store: { modules: [
    { key: KEY + '-address-validation', module: addressValidationModule }
  ] }
}

export const Avalara = new VueStorefrontModule(moduleConfig)
