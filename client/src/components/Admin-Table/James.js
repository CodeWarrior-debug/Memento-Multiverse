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

</select>

