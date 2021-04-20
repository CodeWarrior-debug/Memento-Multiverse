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
         }
     )}
