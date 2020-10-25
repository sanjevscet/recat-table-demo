import { format } from 'date-fns';

export const COLUMNS = [{
        Header: 'Id',
        Footer: 'Id',
        accessor: 'id'
    },
    {
        Header: 'First Name',
        Footer: 'First Name',
        accessor: 'first_name'
    },
    {
        Header: 'Last Name',
        Footer: 'Last Name',
        accessor: 'last_name'
    },
    {
        Header: 'Date Of Birth',
        Footer: 'Date Of Birth',
        accessor: 'date_of_birth',
        Cell: ({ value }) => { return format(new Date(value), 'dd/MM/yyyy') }

    },
    {
        Header: 'Country',
        Footer: 'Country',
        accessor: 'country'

    },
    {
        Header: 'Phone',
        Footer: 'Phone',
        accessor: 'phone'
    }
];


export const GROUPED_COLUMNs = [{
        Header: 'Id',
        Footer: 'Id',
        columns: [{
            Header: 'Id',
            Footer: 'Id',
            accessor: 'Id',

        }]
    },
    {
        Header: 'Name',
        Footer: 'Name',
        columns: [{
                Header: 'First Name',
                Footer: 'First Name',
                accessor: 'first_name'
            },
            {
                Header: 'Last Name',
                Footer: 'Last Name',
                accessor: 'last_name'
            }
        ]
    },
    {
        Header: 'Info',
        Footer: 'Info',
        columns: [{
                Header: 'Date Of Birth',
                Footer: 'Date Of Birth',
                accessor: 'date_of_birth'

            },
            {
                Header: 'Country',
                Footer: 'Country',
                accessor: 'country'

            },
            {
                Header: 'Phone',
                Footer: 'Phone',
                accessor: 'phone'

            }
        ]
    }
];