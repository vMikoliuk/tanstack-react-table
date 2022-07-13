// Core
import { flexRender, Table }     from "@tanstack/react-table";
import { FC, PropsWithChildren } from "react";

interface Props {
    table: Table<any>;
}

export const BaseTable: FC<PropsWithChildren<Props>> = ({ table }) => {
    return (
        <table>
            <thead>
                {table.getHeaderGroups().map((headerGroup) => (
                    <tr key = { headerGroup.id }>
                        {headerGroup.headers.map((header) => (
                            <th key = { header.id }>
                                {flexRender(
                                    header.column.columnDef.header,
                                    header.getContext(),
                                )}
                            </th>
                        ))}
                    </tr>
                ))}
            </thead>

            <tbody>
                {table.getRowModel().rows.map((row) => (
                    <tr key = { row.id }>
                        {row.getVisibleCells().map((cell) => (
                            <td key = { cell.id }>
                                {flexRender(
                                    cell.column.columnDef.cell,
                                    cell.getContext(),
                                )}
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>

        </table>
    );
};
