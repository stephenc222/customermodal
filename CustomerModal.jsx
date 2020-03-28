import React from 'react'
import PropTypes from 'prop-types'
import { CustomerModalForm } from './CustomerModalForm'

function CustomerModal ({
  session
}) {

  return (
    <React.Fragment>
      <Modal>
        <CustomerModalForm />
      </Modal>
    </React.Fragment>
  )
}

CustomerModal.propTypes = {
  session: PropTypes.shape({
    api: PropTypes.object,
    logout: PropTypes.func
  })
}

export default CustomerModal



