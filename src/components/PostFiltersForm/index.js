import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

// PostFiltersForm.propTypes = {
//   onSubmit: PropTypes.func,
// };

// PostFiltersForm.defaultProps = {
//   onSubmit: null,
// };
// useEffect search có debounce
function PostFiltersForm({ onSubmit }) {
  const [value, setValue] = useState('');
  const timeoutRef = useRef(null);

  const onChange = () => {
    console.log(value);
    onSubmit(value);
  }

  useEffect(() => {
    if (timeoutRef.current !== null) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      timeoutRef.current = null;
      if (value !== '') onChange();
    }, 500);
  }, [value]);

  return (
    <form>
      <label htmlFor="inputSearch">Search Task</label>
      <input
        id="inputSearch"
        type="text"
        value={value}
        placeholder="Search by task name"
        onChange={(e) => setValue(e.target.value)}
      />
    </form>
  );
}

export default PostFiltersForm;