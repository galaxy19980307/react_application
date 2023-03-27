import React, {useState} from "react";
import s from './Paginator.module.css'


const Paginator = ({totalCount, pageSize, currentPage, onPageChanged, portionSize = 10}) => {

    const [currentPortion, setCurrentPortion] = useState(Math.ceil(currentPage / portionSize))
    let pagesCount = Math.ceil(totalCount / pageSize);
    let portionCount = Math.ceil(pagesCount / portionSize);
    let currentPortionEnd = portionSize * currentPortion
    let currentPortionStart = currentPortionEnd - portionSize + 1

    let pagesPortion = []
    for (let i = currentPortionStart; i <= currentPortionEnd; i++) {
        pagesPortion.push(<span className={currentPage === i && s.selectedPage} onClick={() => {
            onPageChanged(i)
        }}>{i}</span>);
    }

    const handlePrev = () => setCurrentPortion(currentPortion - 1)

    const handleNext = () => setCurrentPortion(currentPortion + 1)

    return (
        <div>
            {currentPortion > 1 &&
                <div>
                    <button onClick={handlePrev}>Prev</button>
                </div>
            }
            { pagesPortion }
            {portionCount > currentPortion &&
                <div>
                    <button onClick={handleNext}>Next</button>
                </div>
            }
        </div>
    )
}
export default Paginator;