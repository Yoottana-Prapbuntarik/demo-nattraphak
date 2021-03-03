export interface KeywordSearch {
    name: string;
    placeholder: string;
    keywordSearchValue: string;
}

export interface SearchPresenter {
    titleSearch: string;
    textSearch: string;
    keywordSearch: KeywordSearch;
    isOpenTooltip: boolean;
    target: any;
}

export enum SearchAction {
    handleChangeKeywordSearch = "handleChangeKeywordSearch",
    tooltipSearch = "tooltipSearch",
    closeTooltip = "closeTooltip"
}