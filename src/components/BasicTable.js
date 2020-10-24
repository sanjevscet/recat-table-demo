import './table.css';

import React, { useMemo } from 'react'

import { COLUMNS } from './columns'
import MOCK_DATA from './MOCK_DATA.json'
import { useTable } from 'react-table';

export default function BasicTable() {

    // const columns = useMemo(() => GROUPED_COLUMNs, []); // demo for header groups
    const columns = useMemo(() => COLUMNS, []);
    const data = useMemo(() => MOCK_DATA, [])

    const tableInstance = useTable({ columns, data });

    const { getTableBodyProps, getTableProps, headerGroups, rows, prepareRow, footerGroups } = tableInstance;

    return (
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

            <tfoot>
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
            </tfoot>

        </table>
    )
}