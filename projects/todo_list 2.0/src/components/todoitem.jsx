const ToDoItem = ({name1, date1}) => {

    return <>
        <div className="container">
        <div className="row kg-row"></div>
            <div className="col-6">{name1}</div>
            <div className="col-4">{date1}</div>
            <div className="col-2">
              <button type="button" class="btn btn-danger kg-button">
                delete
              </button>
            </div>
            </div>
    </>
}

export default ToDoItem;