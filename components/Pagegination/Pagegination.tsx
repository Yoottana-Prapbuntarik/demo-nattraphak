import { useEffect, useState } from "react";
import ItemPagegination from "../ItemPagegination/ItemPagegination";
import PageinationButton from "./PageinationButton";
const Pagegination = ({ data, title, itemsPerPage }: any) => {

    const [items, setItems] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [perPage] = useState(itemsPerPage)

    const indexOfLastItems = currentPage * perPage
    const indexOfFirstItems = indexOfLastItems - perPage
    const currentItems = items.slice(indexOfFirstItems, indexOfLastItems)

    useEffect(() => {
        setItems(data)
    }, [])

    const pageginate = (pageNumber: any) => setCurrentPage(pageNumber)
    return (
        <div>
            <h3 className="padding-session-pagination title-page">
                {title}
            </h3>
            <div className="container-pagination padding-session-pagination">
                <ItemPagegination data={currentItems} />
            </div>
            <div className="row">
                <div className="col-12">
                    <PageinationButton
                        currentIndex={currentPage}
                        itemsPerPage={itemsPerPage}
                        totalItems={items.length}
                        pageinate={pageginate}
                    />
                </div>
            </div>
        </div>
    )
}

export default Pagegination