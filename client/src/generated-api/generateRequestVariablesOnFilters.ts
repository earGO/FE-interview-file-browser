import { Maybe, WhereInput } from './index';

export function generateRequestVariablesOnFilters(
    size_gt: number | null,
    size_lt: number | null,
    entryNameFilter: string | null,
    fileExtensionFilter: 'Directory' | 'File' | null,
): Maybe<WhereInput> {
    let result: Maybe<WhereInput> = {};
    if (size_gt) {
        result['size_gt'] = size_gt;
    }
    if (size_lt) {
        result['size_lt'] = size_lt;
    }
    if (entryNameFilter) {
        result['name_contains'] = entryNameFilter;
    }
    if (fileExtensionFilter) {
        result['type_eq'] = fileExtensionFilter;
    }
    console.log(result);
    return result;
}
