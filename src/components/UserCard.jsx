import "./styles/UserCard.css";

const UserCard = ({ user, deleteUsersById }) => {
  const handleDelete = () => {
    deleteUsersById("", user.id);
  };


  return (
    <div className="card__article">
      <h2>{`${user.first_name} ${user.last_name}`}</h2>
      <hr />
      <ul>
        <li>
          <span className="span1">
            First Name <i className='bx bx-user'></i>{" "}
          </span>
          <span className="span2">{user.first_name}</span>
        </li>
        <li>
          <span className="span1">
            Last Name <i className='bx bxs-user'></i>{" "}
          </span>
          <span className="span2">{user.last_name}</span>
        </li>
        <li>
          <span className="span1">
            Email <i className="bx bx-envelope"></i>{" "}
          </span>
          <span className="span2">{user.email}</span>
        </li>
        <li>
          <span className="span1">
            Birthday <i className="bx bx-gift"></i>{" "}
          </span>
          <span className="span2">{user.birthday}</span>
        </li>
      </ul>
      <hr />
      <footer className="footer_usercard">
        <button onClick={handleDelete}>
          <i className="bx bx-trash"></i>
        </button>
      </footer>
    </div>
  );
}

export default UserCard;
