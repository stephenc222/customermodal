import React from 'react'
import { CustomerAccountInformation } from './CustomerAccountInformation'
import { CustomerBillingInformation } from './CustomerBillingInformation'
import { CustomerShippingInformation } from './CustomerShippingInformation'
import { CustomerInvoiceInformation } from './CustomerInvoiceInformation'
export function CustomerModalForm ({ ...ex }) {
  return (<Form>
    <CustomerAccountInformation />
    <Collapse>
      <Panel>
        <CustomerBillingInformation />
        <CustomerShippingInformation />
        <CustomerInvoiceInformation />
      </Panel>
    </Collapse>
  </Form>)
}
