import React from 'react';
import styled from 'styled-components';
import {
    useTable,
    usePagination,
    useSortBy,
    useFilters,
    useGroupBy,
    useExpanded,
    useRowSelect
} from 'react-table';
import matchSorter from 'match-sorter';
import { prefix } from '@fortawesome/free-brands-svg-icons';

// TODO: import Data from Data.js <-- find out how to get the data to put inside the tables

const Styles = styled.div`
    padding: 1rem;

    table {
        border-spacing: 0;
        border: 1px solid black;

        tr {
            :last-child {
                td {
                    border-bottom: 0;
                }
            }
        }

        th,
        td {
            margin: 0;
            padding: 0.5rem;
            border-bottom: 1px solid black;
            border-right: 1px solid black;

            :last-child {
                border-right: 0;
            }
        }

        td {
            input {
                font-size: 1rem;
                padding: 0;
                margin: 0;
                border: 0;
            }
        }
    }

    .pagination {
        padding: 0.5rem;
    }
`

const EditableCell = ({
    value: initialValue,
    row: { index },
    column: { id },
    updateMyData,
    editable
}) => {
    const [value, setValue] = React.useState(initialValue)

    const onChange = e => {
        setValue(e.target.value)
    }

    const onBlur = () => {
        updateMyData(index, id, value)
    }

    React.useEffect(() => {
        setValue(initialValue)
    }, [initialValue])

    if (!editable) {
        return `${initialValue}`
    }

    return <input value={value} onChange={onChange} onBlur={onBlur} />
}

function DefaultColumnFilter({
    column: { filteredValue, preFilteredRows, setFilter }
}) {
    const count - preFilteredRows.length

    return (
        <input
            value={filteredValue || ''}
            onChange={e => {
                setFilter(e.target.value || undefined)
            }}
            placeholder={`Search ${count} records...`}
        />
    )
}