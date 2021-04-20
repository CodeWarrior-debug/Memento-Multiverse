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
    