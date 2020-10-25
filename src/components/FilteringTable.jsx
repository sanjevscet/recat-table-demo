import './table.css';

import React, { useMemo } from 'react'
import { useGlobalFilter, useTable } from 'react-table';

import { COLUMNS } from './columns'
import { GlobalFilter } from './GlobalFilter';
import MOCK_DATA from './MOCK_DATA.json'

export default function FilteringTable() {

    // const columns = useMemo(() => GROUPED_COLUMNs, []); // demo for header groups
    const columns = useMemo(() => COLUMNS, []);
    const data = useMemo(() => MOCK_DATA, [])

    const tableInstance = useTable({ columns, data }, useGlobalFilter);

    const { getTableBodyProps, getTableProps, headerGroups, rows, prepareRow, footerGroups, state, setGlobalFilter } = tableInstance;
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

                {/* <tfoot>
                    {
                        footerGroups.map(footerGroup => (
                            <tr {...footerGroup.getFooterGroupProps()}>
                                {
                                    footerGroup.headers.map(column => (
                                        <td {...column.getFooterProps}>
                                            {column.render('Footer')}
                                        </td>
                                    ))
                                }
                            </tr>
                        ))
                    }
                </tfoot> */}

            </table>
        </>
    )
}