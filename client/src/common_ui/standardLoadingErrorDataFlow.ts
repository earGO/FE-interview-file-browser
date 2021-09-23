export function standardLoadingErrorDataFlow(
    loading: boolean,
    error: any,
    tableData: any[] | null,
    loadingComponent: JSX.Element,
    errorComponent: JSX.Element,
    noDataComponent: JSX.Element,
    tableComponent: JSX.Element,
): JSX.Element {
    if (loading) {
        return loadingComponent;
    } else if (error) {
        return errorComponent;
    } else if (!tableData || tableData.length < 1) {
        return noDataComponent;
    } else {
        return tableComponent;
    }
}
