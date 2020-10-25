import React from 'react'

export const ColumnFilter = ({column}) => {
    const {filterValue, setFilter} = column;
    
    return (
        <div style={{textAlign: 'center', margin: '10px 0'}}>
            Search: {' '}
            <input value={filterValue || ''} onChange={e => setFilter(e.target.value)} />
        </div>
    )
}
