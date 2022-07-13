import { useState }  from "react";
import { pageSizes } from "./constants";

export const usePagination = () => {
    const [ limit, setLimit ] = useState(pageSizes[ 0 ]);
    const [ page, setPage ] = useState(1);

    return {
        limit,
        setLimit,
        page,
        setPage,
    };
};

export type UsePagination = ReturnType<typeof usePagination>;
