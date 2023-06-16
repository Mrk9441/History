import './index.css'

const HistoryItems = props => {
  const {deleteHistory, historyDetails} = props
  const {id, title, timeAccessed, logoUrl, domainUrl} = historyDetails

  const deleteItem = () => {
    deleteHistory(id)
  }

  return (
    <li>
      <div>
        <div>
          <p>{timeAccessed}</p>
          <img src={logoUrl} alt="domain logo" />
          <p>{title}</p>
          <p>{domainUrl}</p>
        </div>
        <button data-testid="delete" onClick={deleteItem} type="button">
          <img
            alt="delete"
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png "
          />
        </button>
      </div>
    </li>
  )
}

export default HistoryItems
