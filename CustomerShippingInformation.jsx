import React from 'react'
import { CustomerContactFormFields } from './CustomerContactFormFields'
export function CustomerShippingInformation ({ ...ex }) {
  return (<React.Fragment>
    <SectionHeader level={3} label='Shipping Details' />
    <Checkbox>
      Same as billing details
    </Checkbox>
    {isShippingSameAsBilling
      ? null
      : <CustomerContactFormFields />}
  </React.Fragment>)
}
