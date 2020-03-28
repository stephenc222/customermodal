import React from 'react'
import { CustomerContactFormFields } from './CustomerContactFormFields'
export function CustomerBillingInformation ({ ...ex }) {
  return (<React.Fragment>
    <SectionHeader label='Billing Information' />
    <SectionHeader level={3} label='Billing Details' />
    <CustomerContactFormFields />
  </React.Fragment>)
}
