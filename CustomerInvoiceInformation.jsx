import React from 'react'
import { CustomerTaxIDs } from './CustomerTaxIDs'
export function CustomerInvoiceInformation ({ ...ex }) {
  return (<React.Fragment>
    <CustomerInvoicePrefixFormField />
    <CustomerTaxIDs />
  </React.Fragment>)
}
