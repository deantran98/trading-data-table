'use client';

import { ArrowBackIcon } from '@/public/svg-icons/arrow-back-icon';
import { ArrowForwardIcon } from '@/public/svg-icons/arrow-forward-icon';
import {
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
  SortingState,
  PaginationState
} from '@tanstack/react-table'
import { useState } from 'react'

type Tablerops = {
  data: any;
  columns: any[];
}

const Table: React.FC<Tablerops> = ({ data, columns }) => {

  const [sorting, setSorting] = useState<SortingState>([])
  const [pagination, setPagination] = useState<PaginationState>({pageIndex: 0, pageSize: 5});

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    state: {
      sorting: sorting,
      pagination: pagination,
    },
    onSortingChange: setSorting,
    onPaginationChange: setPagination,
  })

  return (
    <div>
      <table className='w-full table-fixed'>
        <thead className="bg-gray-200 text-black">
          {table.getHeaderGroups().map(headerGroup => (
            <tr key={headerGroup.id} className="h-12">
              {headerGroup.headers.map(header => (
                <th
                  key={header.id}
                  className="text-left pl-4"
                  onClick={header.column.getToggleSortingHandler()}
                >
                  {header.isPlaceholder ? null : (
                    <div>
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                      {
                        header.column.getIsSorted() ? (header.column.getIsSorted() === 'asc' ? '' : '') : null
                      }
                    </div>
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>

        <tbody>
          {table.getRowModel().rows.map(row => (
            <tr key={row.id}>
              {row.getVisibleCells().map(cell => (
                <td 
                  key={cell.id}
                  className="text-gray-500 h-14 pl-4 border-b-2 border-dashed"
                >
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div className='mt-4 flex justify-end'>
        <button
          disabled={!table.getCanPreviousPage()}
          onClick={() => table.previousPage()}
        >
          <ArrowBackIcon/>
        </button>
        <button
          disabled={!table.getCanNextPage()}
          onClick={() => table.nextPage()}
        >
          <ArrowForwardIcon/>
        </button>
      </div>
    </div>
  )
}

export default Table;