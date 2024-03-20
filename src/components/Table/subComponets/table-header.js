"use client"
import { Input } from '@/components/ui/input'


export const DataTableHeader = ({ table }) => {
    return (
        <div className="flex items-center justify-end">
            <div className="flex flex-1 items-end space-x-2">
                <Input
                    placeholder="Filter tasks..."
                    value={(table.getColumn("name")?.getFilterValue() ) ?? ""}
                    onChange={(event) =>
                        table.getColumn("name")?.setFilterValue(event.target.value)
                    }
                    className="h-8 w-[150px] lg:w-[250px]"
                />
            </div>
        </div>
    )
}
