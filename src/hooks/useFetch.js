import axios from "axios"
import { useState } from "react"

const useFetch = (baseUrl) => {

    const [infoApi, setInfoApi] = useState()

    //get
    const getApi = (path) => {
        const url = `${baseUrl}${path}/`
        axios.get(url)
        .then(resp => setInfoApi(resp.data))
        .catch(error => console.log(error))
    }

    //Post

    const postApi = (path, data) => {
        const url = `${baseUrl}${path}/`
        axios.post(url, data)
            .then(resp =>{ 
                console.log(resp.data)
                setInfoApi([...infoApi, resp.data])
            })
            .catch(error => console.log(error))
    }

    //Delete

    const deleteApi = (path, id) => {
        const url = `${baseUrl}${path}/${id}/`
        axios.delete(url)
            .then(resp => {
                console.log(resp.data)
                const infoApiFiltered = infoApi.filter(e => e.id !== id)
                setInfoApi(infoApiFiltered)
            })
            .catch(error => console.log(error))
    }



    return[ infoApi, getApi, postApi, deleteApi ]
    
}
export default useFetch