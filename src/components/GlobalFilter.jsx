import React from 'react'

export const GlobalFilter = ({filter, setFilter}) => {
    return (
        <div style={{textAlign: 'center', margin: '10px 0'}}>
            Search: {' '}
            <input value={filter || ''} onChange={e => setFilter(e.target.value)} />
        </div>
    )
}
