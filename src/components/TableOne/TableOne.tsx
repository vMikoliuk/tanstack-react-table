// Core
import {
    ColumnDef,
    useReactTable,
    getCoreRowModel,
} from "@tanstack/react-table";
import { FC, useEffect, useState }   from "react";
import { useTableOneQuery, Post }    from "../../generated/graphql";
import { BaseTable }                 from "../BaseTable";
import { Pagination, usePagination } from "../Pagination";
import "./styles.css";

const defaultColumn: Partial<ColumnDef<Post>> = {
    cell: ({ getValue, row: { index }, column: { id }, table }) => {
        const initialValue = getValue();
        // We need to keep and update the state of the cell normally
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const [ value, setValue ] = useState(initialValue);

        // When the input is blurred, we'll call our table meta's updateData function
        const onBlur = () => {
            //@ts-ignore
            table.options.meta?.updateData(index, id, value);
        };

        // If the initialValue is changed external, sync it up with our state
        // eslint-disable-next-line react-hooks/rules-of-hooks
        useEffect(() => {
            setValue(initialValue);
        }, [ initialValue ]);

        return (
            <input
                value = { value as string }
                onBlur = { onBlur }
                onChange = { (event) => setValue(event.target.value) }
            />
        );
    },
};

const columns: ColumnDef<Post>[] = [
    {
        header:      "ID",
        accessorKey: "id",
    },
    {
        header:      "Title",
        accessorKey: "title",
    },
    {
        header:      "Message",
        accessorKey: "body",
    },
];

export const TableOne: FC = () => {
    const pagination = usePagination();

    const { data } = useTableOneQuery({
        variables: {
            limit: pagination.limit,
            page:  pagination.page,
        },
    });
    const table = useReactTable({
        //@ts-ignore
        data:             data?.posts?.data ?? [],
        columns,
        defaultColumn,
        getCoreRowModel:  getCoreRowModel(),
        manualPagination: true,
    });

    return (
        <div>
            <BaseTable table = { table }/>
            <Pagination
                { ...pagination }
                data = { data }
            />
        </div>
    );
};
