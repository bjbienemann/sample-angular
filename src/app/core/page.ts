export class Page<T> {
    content: T[];
    pageable: Pageable;
    totalPages: number;
    totalElements: number;
    last: boolean;
    sort: Sort;
    first: boolean;
    numberOfElements: boolean;
    size: number;
    number: number;
    empty: boolean;
}

export class Pageable {
    sort: Sort;
    pageSize: number;
    pageNumber: number;
    offset: number;
    paged: true;
    unpaged: false;
}

export class Sort {
    sorted: boolean;
    unsorted: boolean;
    empty: boolean;
}