import './styles/UserCard.css'


const UserCard = ({user, deleteUsersById, setUpdateInfo, handleOpenForm}) => {

    const handleDelete = () => {
        deleteUsersById('', user.id)
    }

    const handleUpdate = () => {
        setUpdateInfo(user)
        handleOpenForm()
    }


    return(
        <div className="card__article">
            <h2>{`${user.first_name} ${user.last_name}`}</h2>
            <hr />
            <ul>
                <li>
                    <span className='span1'>Email <i className='bx bx-envelope'></i> </span>
                    <span className='span2'>{user.email}</span>
                </li>
                <li>
                    <span className='span1'>Birthday <i className='bx bx-gift'></i> </span>
                    <span className='span2'>{user.birthday}</span>
                </li>
            </ul>
            <hr />
            <footer>
                <button onClick={handleDelete}><i className='bx bx-trash'></i></button>
                <button onClick={handleUpdate}><i className='bx bx-edit' ></i></button>
            </footer>
        </div>
    )
}

export default UserCard