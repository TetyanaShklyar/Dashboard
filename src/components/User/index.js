import user from '../../data/users'
import './styles.scss'

const User = () => {
  const { name, position, image } = user
  return (
    <div className="user">
      <div className="user-photo">
        <img src={image} />
      </div>
      <div className="user-name">
        <p>{name}</p>
        <p>{position}</p>
      </div>
    </div>
  )
}

export default User
