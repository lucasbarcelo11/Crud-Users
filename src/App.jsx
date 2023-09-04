import { useEffect, useState } from 'react'
import './App.css'
import useFetch from './hooks/useFetch'
import UserCard from './components/UserCard'
import FormUser from './components/FormUser'


function App() {

  const [updateInfo, setUpdateInfo] = useState()
  const [closeForm, setCloseForm] = useState(true)

  const baseUrl = 'https://user-crud-0uz1.onrender.com/users'
  const [ users, getAllUsers, createNewUsers, deleteUsersById, updateUsersById  ] = useFetch(baseUrl)

  useEffect(() => {
    getAllUsers('')
  },[])

  const handleOpenForm = () => {
    setCloseForm(false)
  }

  return (
    <div>
      <div className='div__button'>
      <button onClick={handleOpenForm} className='formuser__btn2'>Open Form</button>
      </div>
      <FormUser
       createNewUsers={createNewUsers}
       updateInfo={updateInfo}
       updateUsersById={updateUsersById}
       setUpdateInfo={setUpdateInfo}
       closeForm={closeForm}
       setCloseForm={setCloseForm}
      />
      <div>
      {
          users?.map(user => (
            <UserCard
              key={user.id}
              user={user}
              deleteUsersById={deleteUsersById}
              setUpdateInfo={setUpdateInfo}
              handleOpenForm={handleOpenForm}
            />
          ))
        }
      </div>
    </div>
  )
}

export default App
