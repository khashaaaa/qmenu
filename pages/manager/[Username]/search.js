import { useEffect, useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import Axios from 'axios'

const SearchPage = () => {

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

    const SearchDomain = (self) => {
        self.preventDefault()
        setLoader(true)

        const config = {
            headers: { Authorization: `Bearer ${token}` }
        }

        if (self.target.domain.value == "") {
            setLoader(false)
            setToastmsg('Утга хоосон байна.')
            setToastclass('show')
            setTimeout(() => {setToastclass('out')}, 2000)
            return
        }

        let domain = self.target.domain.value

        Axios.get(`http://localhost:3001/company/${domain}/find`, config)
        .then((result) => {
            setLoader(false)
            if(result.status == 200) {
                setToastmsg('Илэрц амжилттай: ' + self.target.domain.value)
                setToastclass('show')
                setTimeout(() => {setToastclass('out'), router.push(`/manager/${manager.name}/${domain}`)}, 2000)
            }
        })
        .catch(error => {
            setLoader(false)
            setErrorState(error.message)
            if (errorstate.includes(409)) {
                setToastmsg('Мэдээлэл давхцаж байна.')
                setToastclass('show')
                setTimeout(() => {setToastclass('out')}, 2000)
            }
            else {
                setToastmsg('Алдаа гарлаа')
                setToastclass('show')
                setTimeout(() => {setToastclass('out')}, 2000)
            }
        })
    }

    return (
        <div id="search">

            <div className={`toast ${toastclass}`}>{toastmsg}</div>
            
            <div className="article">
                <h1>Сайн байна уу? {manager.name}</h1>
                <p>QRMS - Таны бизнесийн хурдасгуур.</p>
            </div>

            <form onSubmit={SearchDomain}>
                <input name="domain" type="text" placeholder="Домэйн нэр хайх" />
                <button type="submit">
                    {
                        loader ?
                        <Image src="/loader.gif" width={30} height={30} alt="Search" />
                        :
                        <Image className="search" src="/search.png" width={30} height={30} alt="Search" />
                    }
                </button>
            </form>
        </div>
    )
}

export default SearchPage
