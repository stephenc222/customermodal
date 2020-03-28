import React from 'react'
import { CustomerTaxIDFormField } from './CustomerTaxIDFormField'
import { AddTaxIDButton } from './AddTaxIDButton'
export function CustomerTaxIDs ({ ...ex }) {
  return (<React.Fragment>
    {CustomerTaxIDs.map(taxId => (<CustomerTaxIDFormField key={taxId.id} {...taxId} />))}
    <AddTaxIDButton />
  </React.Fragment>)
}
