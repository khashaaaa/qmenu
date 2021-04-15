import { useEffect, useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import Axios from 'axios'

const Profile = () => {

    const [manager, setManager] = useState('')
    const [token, setToken] = useState('')
    const [errorstate, setErrorState] = useState('')
    const [toastclass, setToastclass] = useState('')
    const [toastmsg, setToastmsg] = useState('')
    const [loader, setLoader] = useState(false)

    const router = useRouter()

    useEffect(() => {
        const session = window.sessionStorage.getItem('manager')
        const creds = JSON.parse(session)
        setToken(creds.token)
        if(!window.sessionStorage.getItem('manager') || window.sessionStorage.getItem('manager') == null) {
            return router.push('/manager/login')
        }

        Axios.get(`http://localhost:3001/manager/${creds.manager[0].manager_id}`)
        .then((res) => {
            setManager(res.data[0])
        })
        .catch(error => {
            setErrorState(error.message)
            if (errorstate.includes(409)) {
                setToastmsg('Алдаа гарлаа.')
                setToastclass('show')
                setTimeout(() => { setToastclass('out') }, 2000)
            }
        })
    }, [])

    return (
        <div id="profile">

            <div className={`toast ${toastclass}`}>{toastmsg}</div>
            
            <div>
                <p>{manager.name}</p>
                <p>{manager.email}</p>
                <p>{manager.phone}</p>
            </div>

            <div>
                <button>Ресторан нэмэх</button>
            </div>
        </div>
    )
}

export default Profile
