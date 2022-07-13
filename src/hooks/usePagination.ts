interface fetchMore {
    limit: number;
    page: number;
}

export const usePagination = (fetchMore: Function) => {
    const handleFetchMore = ({ page, limit }: fetchMore) => {
        console.log(">>=<|X|>== => file: usePagination.ts => line 8 => handleFetchMore => limit", limit);
        console.log(">>=<|X|>== => file: usePagination.ts => line 8 => handleFetchMore => page", page);
        fetchMore({
            variables: {
                page,
                limit,
            },
        });
    };

    return { handleFetchMore };
};
