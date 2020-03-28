import React from 'react'
import { CustomerNameFormField } from './CustomerNameFormField'
import { CustomerEmailFormField } from './CustomerEmailFormField'
import { CustomerDescriptionFormField } from './CustomerDescriptionFormField'
export function CustomerAccountInformation ({ ...ex }) {
  return (<React.Fragment>
    <SectionHeader label='Account Information' />
    <CustomerNameFormField />
    <CustomerEmailFormField />
    <CustomerDescriptionFormField />
  </React.Fragment>)
}
