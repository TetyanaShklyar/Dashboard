import './styles.scss'

const Customer = (props) => {
  const { name, company, phone, email, country, status } = props
  return (
    <tr>
      <td>{name}</td>
      <td>{company}</td>
      <td>
        <a href={'tel:' + phone}>{phone}</a>
      </td>
      <td>
        <a href={'mailto:' + email}>{email}</a>
      </td>
      <td>{country}</td>
      <td>
        {status ? (
          <span className="status active">Active</span>
        ) : (
          <span className="status inactive">Inactive</span>
        )}
      </td>
    </tr>
  )
}

export default Customer
