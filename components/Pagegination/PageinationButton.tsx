import './pageination.scss'
const PageinationButton = ({ itemsPerPage, totalItems, pageinate, currentIndex }): any => {
    const pageNumber = []
    for (let idx = 1; idx <= Math.ceil(totalItems / itemsPerPage); idx++) {
        pageNumber.push(idx)
    }
    const prevPage = () => {
        if (currentIndex <= 1) {
            pageinate(1)
        } else {
            pageinate(currentIndex - 1)
        }
    }

    const nextPage = () => {
        if (currentIndex > Math.ceil(totalItems / itemsPerPage) - 1)
            pageinate(Math.ceil(totalItems / itemsPerPage))
        else {
            pageinate(currentIndex + 1)
        }
    }

    return (
        <nav>
            <div className="d-flex w-100 mb-5 flex-wrap justify-content-center">
                <button className="pageination-button-next-prev" onClick={() => prevPage()}>
                    {'<'}
                </button>
                {
                    pageNumber.map(number => {
                        return (
                            <div className="mx-1" key={number}>
                                <button className={`pageination-button ${number === currentIndex && 'active-pagination'}` } onClick={() => pageinate(number)}>
                                    {number}
                                </button>
                            </div>
                        )
                    })
                }
                <button className="pageination-button-next-prev" onClick={() => nextPage()}>
                    {'>'}
                </button>
            </div>
        </nav>
    )
}

export default PageinationButton