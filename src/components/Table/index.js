import customers from '../../data/customers'
import Customer from '../Customer'
import './styles.scss'

const Table = () => {
  const tableHeads = [
    'Customer Name',
    'Company',
    'Phone Number',
    'Email',
    'Country',
    'Status',
  ]
  return (
    <div className="table-list table-responsive">
      <table className="table">
        <thead>
          <tr>
            {tableHeads.map((th) => {
              return (
                <th key={[th]} scope="col">
                  {[th]}
                </th>
              )
            })}
          </tr>
          <tr className="line">
            <td>
              <span></span>
            </td>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer) => {
            return <Customer key={customer.id} {...customer} />
          })}
        </tbody>
      </table>
    </div>
  )
}

export default Table
