import { format } from 'date-fns';

export const COLUMNS = 

[
{
    Header: 'ID',
    accessor: 'id'
},
{
    Header: 'Product_ID',
    accessor: 'product_id'
},
{
    Header: 'Franchise_ID',
    accessor: 'franchise_id'
},
{
    Header: 'Quantity',
    accessor: 'quantity'
},
{
    Header: 'Created At',
    accessor: 'created_at',
    Cell: ({ value }) => {
        return format(new Date(value), 'dd/MM/yyyy')
}
}
,{
    Header: 'User Id',
    accessor: 'user_id'
}
]
