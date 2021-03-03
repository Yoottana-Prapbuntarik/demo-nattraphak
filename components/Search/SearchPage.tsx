import "./search.scss";
import { Overlay, Popover } from "react-bootstrap";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from 'react'
import { Field } from "redux-form";
import TextField from "../FieldComponents/TextField";
const Search = ({
    searchPresenter,
    handleSubmit,
    handleChangeKeywordSearch,
    hanleSubmitSearch,
    closeTooltip
}: any) => {
    const [screenWidth, setWidth] = useState(0)

    useEffect(() => {
        closeTooltip()

        const handleResize = (): any => {
            setWidth(window.innerWidth)
        }
        window.addEventListener("resize", handleResize);
        handleResize()
        return () => window.removeEventListener("resize", handleResize);

    }, []);

    let isShow = screenWidth <= 1024 ? true : false
    return (
        <>
            <Overlay
                show={isShow ? false : searchPresenter.isOpenTooltip}
                placement="bottom"
                target={searchPresenter.target}
                containerPadding={20}
                rootClose={true}
                onHide={() => closeTooltip()}
            >
                <Popover
                    bsPrefix="search-container"
                    id="popover-contained">
                    <div className="arrow-up"></div>
                    <Popover.Title as="h3">{searchPresenter.titleSearch}</Popover.Title>
                    <Popover.Content>
                        <form onSubmit={handleSubmit(hanleSubmitSearch)}>
                            <div className="container-fluid p-0">
                                <div className="row">
                                    <div className="col-12">
                                        <Field
                                            name={searchPresenter.keywordSearch.name}
                                            type="text"
                                            styleTextError="text-danger"
                                            component={TextField}
                                            className="input-search w-100"
                                            currentValue={searchPresenter.keywordSearch.keywordSearchValue}
                                            label={searchPresenter.keywordSearch.placeholder}
                                            onChange={(event: any) => handleChangeKeywordSearch(event.target.value)}
                                        />
                                        <button type="submit" className="icon">
                                            <FontAwesomeIcon icon={faSearch} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </Popover.Content>
                </Popover>
            </Overlay>
            <div className="container">
                <form onSubmit={handleSubmit(hanleSubmitSearch)}>
                    <div className="container-fluid  p-0">
                        <div className="row  search-page-container align-items-center">
                            <div className="col-12">
                                <h1 className="text-center title-search mb-3">ค้นหาเสื้อผ้า</h1>
                                <Field
                                    name={searchPresenter.keywordSearch.name}
                                    type="text"
                                    styleTextError="text-danger"
                                    component={TextField}
                                    className="input-search w-100"
                                    currentValue={searchPresenter.keywordSearch.keywordSearchValue}
                                    label={searchPresenter.keywordSearch.placeholder}
                                    onChange={(event: any) => handleChangeKeywordSearch(event.target.value)}
                                />
                                <button type="submit" className="icon-search-page">
                                    <FontAwesomeIcon icon={faSearch} />
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )

}

export default Search;
