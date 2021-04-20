<span>
    Page{' '}
    <strong>
        {pageIndex + 1} of {pageOptions.length}
       
     </strong>{' '}
    | Got to page {' '}
    <input>
    type='number'
    defaultValue={pageIndex + 1}
    onChange={e +> { 
        const page = e.target.value ? Number(e.target.value) -1 : 0
        gotoPage(page)
     }}
    style={{width: '100px'}}
    </input>
</span>{' '}
<select value = {pageSize}
onChange={e => { setPageSize(Number(e.target.value))
}}>

{[10,20,20,40,50].map(pageSize => (
    <option okey = {pageSize} value = {pageSize}> Show {pageSize}</option>

))}
</select>
</div> 
<pre><code>
    {JSON.stringify( 
        {
            pageIndex,
            pageSize,
            pageCount,
            canNextPage,
            canPreviousPage,
            sortBy, groupBy, expanded: expanded,
            filters,
            selectedRowIds: selectedRowIds,
         },
         null,
         2,

     )}
     </code>
     </pre>
     </>
     )
    }

    function filterGreaterThan (rows, id, filterValue) {
        return rows.filter( row => { 
            const rowValue = row.values[id]
            return rowValue >= filterValue
        })
    }

    filterGreaterThan.autoRemove = val => typeof val !== 'number'

    function roundedMedian(leafValues){
        let min = leafValues[0] || 0
        let max = leafValues[0] || 0

        leaf Values.forEach(value => {
            min = Math.min(min, value) 
            max = Math.max(max, value) 

            return Math.round((min + max) / 2)
        })
    }

    const IndeterminateCheckbox = React.forwardRef(({
        indeterminate, ...rest }, ref) => {
            const defaultRef = React.useRef()
            const resolvedRef = ref || defaultRef

        React.useEffect(()=> {
            resolvedRef.current.indeterminate = indeterminate
        }, [resolvedRef, indeterminate])

        return (
            <>
            <input type='checkbox' ref={resolvedRef} {...rest} />
        </>
        )

        }
    )

    function App(){
        const columns = React.useMemo(
            ()=> [{
                Header:'Name',
                columns: [8{
                    Header:'First Name',
                    accessor:'firstName',
                    aggregate: 'count',
                    Aggregated:({ value }) => `${value} Names`,
                },
            {
                Header: 'Last Name',
                accessor: 'lastName',
                filter: 'fuzzyText',
                aggregate: 'uniqueCount',
                Aggregated:({ value }) => `${value} Unique Names`,
            },
        ],
            },
            Header: 'Info',
            columns: [ 
                {
                    Header: 'Age',
                    accessor: 'age',
                    Filter: SliderColumnFilter,
                    filter: 'equals',
                    aggregate: 'average',
                    Aggregated: ({ value }) => `${value} (avg)`,
                },
                {
                    Header: 'Visits'
                }
              ]
        ]
        )
    }