// Core
import {
    ColumnDef,
    useReactTable,
    getCoreRowModel,
} from "@tanstack/react-table";
import { FC, useRef }                from "react";
import { useVirtual }                from "@tanstack/react-virtual";
import { useTableTwoQuery, Comment } from "../../generated/graphql";
import "./styles.css";

const columns: ColumnDef<Comment>[] = [
    {
        header:      "ID",
        accessorKey: "id",
    },
    {
        header:      "Name",
        accessorKey: "name",
    },
    {
        header:      "Message",
        accessorKey: "body",
    },
];

export const TableTwo: FC = () => {
    const parentRef = useRef();
    // const { data } = useTableTwoQuery();
    // const table = useReactTable({
    //     //@ts-ignore
    //     data:             data?.comments?.data ?? [],
    //     //@ts-ignore
    //     columns,
    //     getCoreRowModel:  getCoreRowModel(),
    //     manualPagination: true,
    // });

    const rowVirtualizer = useVirtual({
        size:         500,
        //@ts-ignore
        parentRef:    parentRef,
        estimateSize: () => 35,
    });

    return (
        <div>
            <div
                //@ts-ignore
                ref = { parentRef }
                style = {{
                    height:   "400px",
                    overflow: "auto", // Make it scroll!
                }}>
                {/* The large inner element to hold all of the items */}
                <div
                    style = {{
                        height:   `${rowVirtualizer.totalSize}px`,
                        width:    "100%",
                        position: "relative",
                    }}>
                    {/* Only the visible items in the virtualizer, manually positioned to be in view */}
                    {rowVirtualizer.virtualItems.map((virtualItem) => (
                        <div
                            key = { virtualItem.key }
                            style = {{
                                position:  "absolute",
                                top:       0,
                                left:      0,
                                width:     "100%",
                                height:    `${virtualItem.size}px`,
                                transform: `translateY(${virtualItem.start}px)`,
                            }}>
                            Row {virtualItem.index}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
