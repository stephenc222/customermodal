import React from 'react'
import { CustomerCountryFormField } from './CustomerCountryFormField'
import { CustomerAddressFormField } from './CustomerAddressFormField'
import { CustomerCityFormField } from './CustomerCityFormField'
import { CustomerStateFormField } from './CustomerStateFormField'
import { CustomerZipCodeFormField } from './CustomerZipCodeFormField'
import { CustomerPhoneNumberFormField } from './CustomerPhoneNumberFormField'
export function CustomerContactFormFields ({ ...ex }) {
  return (<React.Fragment>
    <CustomerCountryFormField />
    <CustomerAddressFormField />
    <CustomerCityFormField />
    <CustomerStateFormField />
    <CustomerZipCodeFormField />
    <CustomerPhoneNumberFormField />
  </React.Fragment>)
}
