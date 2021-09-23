import React from 'react';

import { useListEntriesQuery } from './generated-api';
import { ViewContextProvider } from './ViewContext';
import { FileBrowserHistory } from './common_types';
import FileBrowserView from './FileBrowserView';
import { generateRequestVariablesOnFilters } from './generated-api/generateRequestVariablesOnFilters';

function FileBrowserScreenViewModel() {
    const [sizeGt, setSizeGt] = React.useState<number>(0);
    const [sizeLt, setSizeLt] = React.useState<number>(0);
    const [entryNameFilter, setEntryNameFilter] = React.useState<string | null>(null);
    const [entryTypeFilter, setEntryTypeFilter] = React.useState<'Directory' | 'File' | ''>('');
    const [page, setPage] = React.useState(1);
    const [currentPath, setCurrentPath] = React.useState('/');
    const [fileBrowserHistory, updateHistory] = React.useState<FileBrowserHistory[]>([
        {
            id: '/',
            path: '/',
        },
    ]);

    const { data, loading, error } = useListEntriesQuery({
        variables: {
            path: currentPath,
            page,
            where: {
                ...generateRequestVariablesOnFilters(sizeGt, sizeLt, entryNameFilter, entryTypeFilter),
                /**
                 * Entry Name Contains
                 * @name name_contains an entry "name" text value to search on
                 */
                // name_contains: String,
                /**
                 * Type Equals
                 * @name type_eq Exact match for Entry type
                 */
                // type_eq: "Directory" | "File",
            },
        },
    });

    React.useEffect(() => {
        setCurrentPath(fileBrowserHistory[fileBrowserHistory.length - 1].path);
    }, [fileBrowserHistory]);

    const rows = React.useMemo(() => {
        const dataRows = data?.listEntries?.entries ?? ([] as any);

        return [
            ...(fileBrowserHistory.length > 1
                ? [
                      {
                          id: fileBrowserHistory[fileBrowserHistory.length - 2].id,
                          path: fileBrowserHistory[fileBrowserHistory.length - 2].path,
                          name: 'UP_DIR',
                          __typename: 'UP_DIR',
                      },
                  ]
                : []),
            ...dataRows,
        ];
    }, [fileBrowserHistory, data]);

    const rowCount = React.useMemo(() => {
        const totalUpDirRows = currentPath === '/' ? 0 : data?.listEntries?.pagination.pageCount ?? 0;
        const totalRowsFromServer = data?.listEntries?.pagination.totalRows ?? 0;
        return totalRowsFromServer + totalUpDirRows;
    }, [currentPath, data]);

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage + 1);
    };

    const handleFileSizeGreaterThanFilterInputChange = (newFilterValue: number): void => {
        setSizeGt(newFilterValue);
    };

    const handleFileSizeLessThanFilterInputChange = (newFilterValue: number): void => {
        setSizeLt(newFilterValue);
    };

    const handleEntryTypeDropdownSelection = (selectionValue: 'Directory' | 'File' | ''): void => {
        setEntryTypeFilter(selectionValue);
    };

    const handleEntryNameFilterChange = (newEntryNameFilterValue: string): void => {
        setEntryNameFilter(newEntryNameFilterValue);
    };

    const handleFilePathClick = (
        isUpDir: boolean,
        fileBrowserHistoryParameter: FileBrowserHistory[],
        path: string,
    ): void => {
        if (isUpDir && fileBrowserHistoryParameter.length > 1) {
            setPage(1);
            updateHistory([...fileBrowserHistoryParameter.splice(0, fileBrowserHistoryParameter.length - 1)]);
        } else {
            updateHistory([...fileBrowserHistoryParameter, { id: path, path }]);
        }
    };

    return (
        <ViewContextProvider
            currentFileSizeGtFilterValue={sizeGt}
            handleFileSizeFilterInputChange={handleFileSizeGreaterThanFilterInputChange}
            currentFileSizeLtFilterValue={sizeLt}
            handleFileSizeLessThanFilterInputChange={handleFileSizeLessThanFilterInputChange}
            tableRows={rows}
            fileBrowserHistory={fileBrowserHistory}
            handleFilePathClick={handleFilePathClick}
            fileBrowserRowCount={rowCount}
            handleChangePage={handleChangePage}
            currentPage={page}
            entryTypeFilterValue={entryTypeFilter}
            handleEntryTypeDropdownSelection={handleEntryTypeDropdownSelection}
            handleEntryNameFilterChange={handleEntryNameFilterChange}
        >
            <FileBrowserView />
        </ViewContextProvider>
    );
}

export default FileBrowserScreenViewModel;
