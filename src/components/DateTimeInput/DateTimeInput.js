import React from 'react'
import { format } from 'date-fns'
import { Position } from '@blueprintjs/core'
import { DateInput, TimePrecision } from '@blueprintjs/datetime'
import PropTypes from 'prop-types'

const DateTimeInput = ({ date, onSelect }) => {
  const minDateTime = new Date()
  const formatDate = value =>
    format(value, `MM/DD/YYYY hh:mm a'}`)
  const timePrecision = TimePrecision.MINUTE

  return (
    <div>
      <DateInput
        canClearSelection={false}
        // placeholder="When? *"
        minDate={minDateTime}
        inputProps={{ readOnly: true }}
        formatDate={formatDate}
        parseDate={str => new Date(str)}
        timePrecision={timePrecision}
        timePickerProps={{ useAmPm: true }}
        // popoverProps={{ position: Position.TOP }}
        onChange={onSelect}
        value={date}
      />
    </div>
  )
}

DateTimeInput.propTypes = {
  date: PropTypes.instanceOf(Date),
  // onSelect: PropTypes.func.isRequired,
}

DateTimeInput.defaultProps = {
  date: null,
}

export default DateTimeInput