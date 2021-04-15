import { useEffect, useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import Axios from 'axios'

const Profile = () => {

    const [manager, setManager] = useState('')
    const [company, setCompany] = useState([])
    const [errorstate, setErrorState] = useState('')
    const [toastclass, setToastclass] = useState('')
    const [toastmsg, setToastmsg] = useState('')

    const router = useRouter()

    useEffect(() => {
        let creds
        if (typeof window !== "undefined") {
            let str = window.sessionStorage.getItem('manager')
            creds = JSON.parse(str)
        }
        
        if(!creds) {
            return router.push('/manager/login')
        }

        const config = {
            headers: { Authorization: `Bearer ${creds.token}` }
        }

        Axios.all([
            Axios.get(`http://localhost:3001/manager/${creds.manager[0].manager_id}`, config),
            Axios.get(`http://localhost:3001/company/${creds.manager[0].manager_id}/list`, config)
        ])
        .then((res) => {
            setManager(res[0].data[0])
            setCompany(res[1].data)
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


    const Logout = () => {
        window.sessionStorage.removeItem('manager')
        return router.push('/manager/login')
    }

    return (
        <div id="profile">

            <div className={`toast ${toastclass}`}>{toastmsg}</div>
            
            <div className="wrap">
                <aside>
                    <div className="pro">
                        <p>{manager.name}</p>
                        <div>
                            <Image onClick={Logout} className="logout" src="/power.png" width={20} height={20} alt="Log out" title="Гарах" />
                        </div>
                    </div>

                    <div className="edit">
                        <div className="info">
                            <p>Имэйл: {manager.email}</p>
                            <p>Утас: {manager.phone}</p>
                        </div>

                        <div className="action">
                            <button>
                                <Image src="/edit.svg" width={20} height={20} alt="Edit manager" title="Засах" />
                            </button>
                            <button>
                                <Image src="/delete.svg" width={20} height={20} alt="Delete manager" title="Устгах" />
                            </button>
                        </div>
                    </div>
                </aside>

                <main>
                    <h1>Компани / Салбарууд</h1>
                    <table>
                        <thead>
                            <tr>
                                <th>Нэр</th>
                                <th>Домэйн</th>
                                <th>Утас</th>
                                <th>...</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                company.map((comp, num) => {
                                    return (
                                        <tr key={num} className="company">
                                            <td>{comp.name}</td>
                                            <td>{comp.domain}</td>
                                            <td>{comp.phone}</td>
                                            <td className="action">
                                                <button>
                                                    <Image src="/edit.svg" width={20} height={20} alt="Edit company" title="Засах" />
                                                </button>
                                                <button>
                                                    <Image src="/delete.svg" width={20} height={20} alt="Delete company" title="Устгах" />
                                                </button>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>

                    <button onClick={() => { router.push(`/manager/${manager.name}/search`) }} className="plus">Нэмэх</button>
                </main>
            </div>
        </div>
    )
}

export default Profile
