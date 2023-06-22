import Pagination from '../Pagination'
import Search from '../Search'
import Table from '../Table'
import './styles.scss'

const Content = () => {
  return (
    <div className="content">
      <div className="top-information">
        <div>
          <h3>All Customers</h3>
          <span className="active">Active Members</span>
        </div>
        <Search />
      </div>
      <Table />
      <Pagination />
    </div>
  )
}

export default Content
