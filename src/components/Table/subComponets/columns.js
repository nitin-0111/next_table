"use client"
import { DateTime } from 'luxon'
import { ColumnDef } from "@tanstack/react-table"
import { DataTableColumnHeader } from './DataTableColumnHeader'


export const Columns = [
    {
        accessorKey: "id",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="ID" />
        ),
        cell: ({ row }) => <div className="w-[50px]">{row.getValue("id")}</div>,

    },
    {
        accessorKey: "name",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Name" />
        ),
        cell: ({ row }) => {
            return (
                <div className="w-[200px]"> {row.getValue("name")}</div>
            )
        },
    },
    {
        accessorKey: "category",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Category" />
        ),
        cell: ({ row }) => {
            return (
                <div className="w-[100px]"> {row.getValue("category")}</div>
            )
        },
    },

    {
        accessorKey: "subcategory",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Sub Category" />
        ),
        cell: ({ row }) => {
            return (
                <div className="w-[100px]"> {row.getValue("subcategory")}</div>
            )
        },
    },
    {
        accessorKey: "createdAt",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Created At" />
        ),
        cell: ({ row }) => {
            return (
                <div className="w-[120px]" suppressHydrationWarning> {
                    DateTime.fromISO(row.getValue("createdAt")).toLocaleString(DateTime.DATE_MED)}</div>
            )
        },
    },
    {
        accessorKey: "updatedAt",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Updated At" />
        ),
        cell: ({ row }) => {
            return (
                <div className="w-[120px]" suppressHydrationWarning > {
                    DateTime.fromISO(row.getValue("updatedAt")).toLocaleString(DateTime.DATE_MED)}</div>
            )
        },
    },
    {
        accessorKey: "price",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="price" />
        ),
        cell: ({ row }) => {
            return (
                <div className="w-[80px]"> {row.getValue("price")}</div>
            )
        },
    },
    {
        accessorKey: "sale_price",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="sale price" />
        ),
        cell: ({ row }) => {
            return (
                <div className="w-[80px]"> {row.getValue("sale_price")}</div>
            )
        },
    },

]