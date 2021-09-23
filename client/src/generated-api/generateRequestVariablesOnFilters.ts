import { Maybe, WhereInput } from './index';

export function generateRequestVariablesOnFilters(
    size_gt: number,
    size_lt: number,
    entryNameFilter: string | null,
    entryTypeFilter: 'Directory' | 'File' | '',
): Maybe<WhereInput> {
    let result: Maybe<WhereInput> = {};
    if (size_gt !== 0) {
        result['size_gt'] = size_gt;
    }
    if (size_lt !== 0) {
        result['size_lt'] = size_lt;
    }
    if (entryNameFilter) {
        result['name_contains'] = entryNameFilter;
    }
    if (entryTypeFilter !== '') {
        result['type_eq'] = entryTypeFilter;
    }
    console.log(result);
    return result;
}
