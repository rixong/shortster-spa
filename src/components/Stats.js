import React from 'react';
const { DateTime } = require('luxon');


const Stats = ({URLObj}) => {

  const formatDate = (dateObj) => {
    return DateTime.fromISO(dateObj).toLocaleString(DateTime.DATETIME_FULL_WITH_SECONDS)
  }

  const dt = DateTime.fromISO(URLObj.createdAt).toLocaleString(DateTime.DATETIME_FULL_WITH_SECONDS)
  console.log(dt)
  return (
    <div>
      <h3>Stats for short URL: {URLObj.shortURL}</h3>
      <p>Registered on: <em>{formatDate(URLObj.createdAt)}</em></p>
      <p>Last accessed: <em>{formatDate(URLObj.lastAccessed)}</em></p>
      <p>Total accesses: <em>{URLObj.numberOfAccesses}</em></p>
    </div>
  )
}
export default Stats;