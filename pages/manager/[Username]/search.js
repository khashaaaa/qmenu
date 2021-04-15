import { useEffect, useState, useRef } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import Axios from 'axios'

const SearchPage = () => {

    const [manager, setManager] = useState('')
    const [errorstate, setErrorState] = useState('')
    const [toastclass, setToastclass] = useState('')
    const [toastmsg, setToastmsg] = useState('')
    const [loader, setLoader] = useState(false)
    const [domain, setDomain] = useState('')
    const searchRef = useRef(null)

    const router = useRouter()

    let creds
    if (typeof window !== "undefined") {
        let str = window.sessionStorage.getItem('manager')
        creds = JSON.parse(str)
    }

    useEffect(() => {
        if(!creds) {
            return router.push('/manager/login')
        }

        searchRef.current = domain

        const config = {
            headers: { Authorization: `Bearer ${creds.token}` }
        }

        Axios.get(`http://localhost:3001/manager/${creds.manager[0].manager_id}`, config)
        .then((res) => {
            setManager(res.data[0])
        })
        .catch(error => {
            setErrorState(error.message)
            if (errorstate.includes(409)) {
                setToastmsg('Мэдээлэл давхцаж байна.')
                setToastclass('show')
                setTimeout(() => { setToastclass('out') }, 2000)
            }
        })
    }, [])

    const SearchDomain = (self) => {
        self.preventDefault()
        setLoader(true)

        const config = {
            headers: { Authorization: `Bearer ${creds.token}` }
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
                <input ref={searchRef} onChange={val => setDomain(val.target.value)} value={domain} name="domain" type="text" placeholder="Домэйн нэр хайх" />
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
