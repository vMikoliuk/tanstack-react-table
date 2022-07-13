import { FC }            from "react";
import { pageSizes }     from "./constants";
import { UsePagination } from "./usePagination";

type Props = {
    data: any;
} & UsePagination;

export const Pagination: FC<Props> = ({ setPage, setLimit, limit, page, data }) => {
    return (
        <div className = "flex items-center gap-2">
            <button
                className = "border rounded p-1"
                onClick = { () => setPage(data?.posts?.links?.first?.page!) }>
                {"<<"}
            </button>

            <button
                className = "border rounded p-1"
                onClick = { () => setPage(data?.posts?.links?.prev?.page!) }>
                {"<"}
            </button>

            <button
                className = "border rounded p-1"
                onClick = { () => setPage(data?.posts?.links?.next?.page!) }>
                {">"}
            </button>

            <button
                className = "border rounded p-1"
                onClick = { () => setPage(data?.posts?.links?.last?.page!) }>
                {">>"}
            </button>

            <span className = "flex items-center gap-1">
                <div>Page</div>
                <strong>
                    {page} of{" "}
                    {data?.posts?.meta?.totalCount! / limit}
                </strong>
            </span>


            <span className = "flex items-center gap-1">
                | Go to page:
                <input
                    className = "border p-1 rounded w-16"
                    defaultValue = { page }
                    type = "number"
                    onChange = { (event) => {
                        const page = event.target.value ? Number(event.target.value) : 0;
                        setPage(page);
                    } }
                />
            </span>


            <select
                value = { limit }
                onChange = { (event) => setLimit(Number(event.target.value)) }>
                {pageSizes.map((pageSize) => (
                    <option
                        key = { pageSize }
                        value = { pageSize }>
                        Show {pageSize}
                    </option>
                ))}
            </select>
        </div>
    );
};
