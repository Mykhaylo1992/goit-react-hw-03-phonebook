import React from 'react';

const PhonebookFilte = ({ filter, filterInput }) => (
  <label>
    Find contacts by name
    <input type="text" value={filter} name="filter" onChange={filterInput} />
  </label>
);

export default PhonebookFilte;
