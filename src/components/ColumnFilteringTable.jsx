import './table.css';

import React, { useMemo } from 'react'
import { useFilters, useGlobalFilter, useTable } from 'react-table';

import { COLUMNS } from './columns'
import { ColumnFilter } from './ColumnFilter';
import { GlobalFilter } from './GlobalFilter';
import MOCK_DATA from './MOCK_DATA.json'

export default function ColumnFilteringTable() {

    // const columns = useMemo(() => GROUPED_COLUMNs, []); // demo for header groups
    const columns = useMemo(() => COLUMNS, []);
    const data = useMemo(() => MOCK_DATA, [])
    const defaultColumn = useMemo(() => {
        return {
            Filter: ColumnFilter
        }
    }, [])
 
    const tableInstance = useTable({ columns, data, defaultColumn }, useFilters, useGlobalFilter);

    const { getTableBodyProps, getTableProps, headerGroups, rows, prepareRow, state, setGlobalFilter } = tableInstance;
    const { globalFilter } = state

    return (
        <>
            <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
            <table {...getTableProps()}>
                <thead>
                    {
                        headerGroups.map((headerGroup) => (
                            <tr {...headerGroup.getHeaderGroupProps()}>
                                {
                                    headerGroup.headers.map((column) => (
                                        <th {...column.getHeaderProps()}>
                                            {column.render('Header')}
                                            <div>
                                                {column.canFilter ? column.render('Filter') : null}
                                            </div>
                                        </th>

                                    ))
                                }
                            </tr>
                        ))
                    }
                </thead>

                <tbody {...getTableBodyProps()}>
                    {rows.map((row => {
                        prepareRow(row)
                        return (
                            <tr {...row.getRowProps()}>
                                {row.cells.map(cell => {
                                    return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                })}
                            </tr>
                        )
                    }))}

                </tbody>
            </table>
        </>
    )
}