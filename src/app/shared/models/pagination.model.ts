export class DataWithRanking <T>{
    result: T[];
    paginator : IPaginator
}
export interface IPaginator{
    offset: number;
    limit: number;
    filter: string;
}