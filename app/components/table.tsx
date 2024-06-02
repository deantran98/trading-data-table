'use client'

import { ArrowBackIcon } from '@/public/svg-icons/arrow-back-icon'
import { ArrowForwardIcon } from '@/public/svg-icons/arrow-forward-icon'
import { SortingIcon } from '@/public/svg-icons/sorting-icon'
import {
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
  SortingState,
  PaginationState,
} from '@tanstack/react-table'
import { useState } from 'react'

type TableProps = {
  data: any
  columns: any[]
}

const Table: React.FC<TableProps> = ({ data, columns }) => {
  const [sorting, setSorting] = useState<SortingState>([])
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 5,
  })

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

  function onChangePageSize(event: any) {
    const pageSize = Number(event.target.value)

    setPagination({ pageIndex: 0, pageSize })
  }

  return (
    <div>
      <table className="w-full table-fixed">
        <thead className="bg-gray-100 text-black">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id} className="h-12">
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  className="pl-4 text-left"
                  onClick={header.column.getToggleSortingHandler()}
                >
                  {header.isPlaceholder ? null : (
                    <div className="flex">
                      <div>
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                        {header.column.getIsSorted()
                          ? header.column.getIsSorted() === 'asc'
                            ? ''
                            : ''
                          : null}
                      </div>
                      <SortingIcon />
                    </div>
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>

        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td
                  key={cell.id}
                  className="h-14 border-b-2 border-dashed pl-4 text-gray-500"
                >
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="md: mt-4 flex justify-between space-x-8 md:justify-end lg:space-x-12">
        <div className="flex md:space-x-1">
          <label className="text-gray-500">Rows per page:</label>
          <select
            id="rowsPerPage"
            className="text-gray-500"
            onChange={onChangePageSize}
          >
            <option value="5">5</option>
            <option value="10">10</option>
          </select>
        </div>

        <div className="text-gray-500">
          {pagination.pageIndex + 1} of {table.getPageCount()}
        </div>

        <div className="flex md:space-x-4">
          <button
            disabled={!table.getCanPreviousPage()}
            onClick={() => table.previousPage()}
          >
            <ArrowBackIcon />
          </button>
          <button
            disabled={!table.getCanNextPage()}
            onClick={() => table.nextPage()}
          >
            <ArrowForwardIcon />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Table
