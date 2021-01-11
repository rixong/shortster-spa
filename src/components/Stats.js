import React from 'react';

const Stats = ({URLObj}) => {
  return (
    <div>
      <h3>Stats for short URL: {URLObj.shortURL}</h3>
      <p>Registered on: <em>{URLObj.createdAt}</em></p>
      <p>Last accessed: <em>{URLObj.lastAccessed}</em></p>
      <p>Total accesses: <em>{URLObj.numberOfAccesses}</em></p>
    </div>
  )
}
export default Stats;