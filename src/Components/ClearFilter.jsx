import React from 'react'
import { useFilterContext } from '../Context/FilterContext';
import { Button } from '../Styles/Button';

const ClearFilter = () => {
    const { clearFilter } = useFilterContext();
  return (
    <div>
        <Button className="clearAllFilter" name="clearFilter" onClick={clearFilter}>
            Clear All Filter
        </Button>
    </div>
  )
}

export default ClearFilter
