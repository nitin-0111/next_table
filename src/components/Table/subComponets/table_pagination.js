"use client"
import { Button } from "@/components/ui/button"
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  DoubleArrowLeftIcon,
  DoubleArrowRightIcon,
} from "@radix-ui/react-icons"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@radix-ui/react-select"


export const TablePagination = ({ table }) => {

  return (
    <div className="flex items-center justify-end px-2">

      <div className="flex items-center space-x-2">
        <Button
          variant="outline"
          className="hidden h-8 w-8 p-0 lg:flex"
          onClick={() => table.setPageIndex(0)}
          disabled={!table.getCanPreviousPage()}
        >
          <span className="sr-only">Go to first page</span>
          <DoubleArrowLeftIcon className="h-4 w-4" />
        </Button>
        {/* // prev  */}
        {table.getCanPreviousPage() && <Button
          variant="outline"
          className="h-8 w-8 p-0"
          onClick={() => table.setPageIndex(table.getState().pagination.pageIndex - 1)}
          disabled={!table.getCanPreviousPage()}
        >
          {table.getState().pagination.pageIndex}
        </Button>}

        {/* cur button  */}
        <Button
          variant="default"
          className="h-8 w-8 p-0"
          onClick={() => table.setPageIndex(table.getState().pagination.pageIndex)}
        // disabled={!table.getCanPreviousPage()}
        >
          {table.getState().pagination.pageIndex + 1}
        </Button>



        {table.getCanNextPage() && <>
          {table.getState().pagination.pageIndex !== (table.getPageCount() - 2) && <>
            <Button
              variant="outline"
              className="h-8 w-8 p-0"
              onClick={() => table.setPageIndex(table.getState().pagination.pageIndex + 1)}
              disabled={!table.getCanNextPage()}
            >
              {table.getState().pagination.pageIndex + 2}
            </Button>
            <Button
              variant="outline"
              className="h-8 w-12 p-0"

            >
              <span> . . . </span>
            </Button>
          </>}
          <Button
            variant="outline"
            className="h-8 w-8 p-0"
            onClick={() => table.setPageIndex(table.getPageCount() - 1)}
            disabled={!table.getCanNextPage()}
          >
            {table.getPageCount()}
          </Button>
        </>}


        
        <Button
          variant="outline"
          className="hidden h-8 w-8 p-0 lg:flex"
          onClick={() => table.setPageIndex(table.getPageCount() - 1)}
          disabled={!table.getCanNextPage()}
        >
          <span className="sr-only">Go to last page</span>
          <DoubleArrowRightIcon className="h-4 w-4" />
        </Button>
      </div>

    </div>
  )
}
