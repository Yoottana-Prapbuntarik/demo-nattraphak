import Router from "next/router";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { reduxForm } from "redux-form";
import { FormManager } from "../../manager/formManager";
import Search from "./Search";
import {
    SearchPresenter,
    SearchAction,
    KeywordSearch
} from "./SearchInterface";

let tooltipTarget: any

const keywordSearch: KeywordSearch = {
    name: 'keywordSearch',
    placeholder: 'ค้นหา',
    keywordSearchValue: ''
}
const searchPresenter: SearchPresenter = {
    titleSearch: 'ค้นหาเสื้อผ้า',
    textSearch: '',
    keywordSearch: keywordSearch,
    isOpenTooltip: false,
    target: null
}

export const searchReducer = (state: SearchPresenter = searchPresenter, action: any) => {
    switch (action.type) {
        case SearchAction.handleChangeKeywordSearch:
            return {
                ...state,
                keywordSearch: {
                    name: 'keywordSearch',
                    placeholder: 'ค้นหา',
                    keywordSearchValue: action.payload
                }
            }

        case SearchAction.tooltipSearch:
            return {
                ...state,
                isOpenTooltip: !state.isOpenTooltip,
                target: action.target
            }
            
            case SearchAction.closeTooltip:
            return {
                ...state,
                isOpenTooltip: false,
            }
            

        default:
            return state;
    }
}

const mapStateToProps = (state: any) => {
    return {
        searchPresenter: state.searchReducer
    }
}

export const toggleTooltipTarget = (e) => {
    tooltipTarget = e.target
}

export const tooltipSearchToggle = (dispatch: Dispatch) => {
    dispatch({
        type: SearchAction.tooltipSearch,
        target: tooltipTarget
    })
}


export const mapDispatchToProps = (dispatch: Dispatch) => ({
    handleChangeKeywordSearch: (event: string) => {
        dispatch({
            type: SearchAction.handleChangeKeywordSearch,
            payload: event
        })
    },
    hanleSubmitSearch: (event: any) => {
        if (event.keywordSearch !== undefined) {
            dispatch({
                type: SearchAction.handleChangeKeywordSearch,
                payload: ''
            })
            dispatch({
                type: SearchAction.tooltipSearch,
                target: tooltipTarget
            })

            Router.push(`/searchResult/${event.keywordSearch}`)

        } else {
            dispatch({
                type: SearchAction.tooltipSearch,
                target: tooltipTarget
            })
            dispatch({
                type: SearchAction.handleChangeKeywordSearch,
                payload: ''
            })
        }
    },

    tooltipSearchToggle: tooltipSearchToggle,

    closeTooltip: () => {
        dispatch({
            type: SearchAction.closeTooltip,
        })
    }
})

const form = reduxForm({
    form: FormManager.Search,
})(Search)

export default connect(mapStateToProps, mapDispatchToProps)(form)