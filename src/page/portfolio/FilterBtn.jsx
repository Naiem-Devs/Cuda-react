import React from 'react'

function FilterBtn(props) {


    return (
        <>
            <div className="category_btn ">
                <button type="button" value='All' onClick={props.filterBtn} class="btn btn-info">All</button>
                <button type="button" value='html' onClick={props.filterBtn} class="btn btn-secondary">HTML</button>
                <button type="button" value='css' onClick={props.filterBtn} class="btn btn-success">CSS</button>
                <button type="button" value='js' onClick={props.filterBtn} class="btn btn-danger">JS</button>
                <button type="button" value='php' onClick={props.filterBtn} class="btn btn-primary">PHP</button>
            </div>
        </>
    )
}

export default FilterBtn
