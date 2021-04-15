import { useEffect, useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import Axios from 'axios'

const Index = () => {

    const [manager, setManager] = useState('')
    const [token, setToken] = useState('')
    const [errorstate, setErrorState] = useState('')
    const [toastclass, setToastclass] = useState('')
    const [toastmsg, setToastmsg] = useState('')

    const router = useRouter()

    useEffect(() => {
        const session = window.sessionStorage.getItem('manager')
        const creds = JSON.parse(session)
        setManager(creds.manager)
        setToken(creds.token)
        if(!window.sessionStorage.getItem('manager') || window.sessionStorage.getItem('manager') == null) {
            return router.push('/manager/login')
        }
    }, [])

    const CompanyReg = (self) => {
        self.preventDefault()

        let formdata = {
            name: self.target.name.value,
            domain: self.target.domain.value,
            phone: self.target.phone.value,
            owner: manager[0].manager_id
        }

        const config = {
            headers: { Authorization: `Bearer ${token}` }
        }

        if(formdata.name == "" || formdata.domain == "" || formdata.phone == "") {
            setToastmsg('Бүх талбарыг бөглөнө үү.')
            setToastclass('show')
            setTimeout(() => { setToastclass('out') }, 2000)
        }
        Axios.post('http://localhost:3001/company/create', formdata, config)
        .then((created) => {
            setToastmsg('Амжилттай бүртгэгдлээ.')
            setToastclass('show')
            setTimeout(() => {
                setToastclass('out'),
                router.push(`/manager/${manager.name}/${router.query.Company}/dash`)
            }, 2000)
        })
        .catch(error => {
            setErrorState(error.message)
            if (errorstate.includes(409)) {
                setToastmsg('Мэдээлэл давхцаж байна.')
                setToastclass('show')
                setTimeout(() => { setToastclass('out') }, 2000)
            }
            else {
                setToastmsg('Алдаа гарлаа.')
                setToastclass('show')
                setTimeout(() => { setToastclass('out') }, 2000)
            }
        })
    }

    return (
        <div id="company">
            
            <div className={`toast ${toastclass}`}>{toastmsg}</div>

            <div className="wrap">

                <form onSubmit={CompanyReg}>
                    <div className="inputbox">
                        <label htmlFor="domain">Компани(ресторан)-ийн домэйн</label>
                        <input id="domain" name="domain" type="text" defaultValue={router.query.Company} disabled />
                    </div>
                    <div className="inputbox">
                        <label htmlFor="name">Компани(ресторан)-ийн нэр</label>
                        <input id="name" name="name" type="text" />
                    </div>
                    <div className="inputbox">
                        <label htmlFor="phone">Утасны дугаар</label>
                        <input id="phone" name="phone" type="text" />
                    </div>
                    <button type="submit">Бүртгэх</button>
                </form>

                <Image className="showcase" src="/rest2.jpg" width={300} height={400} alt="Restaurant" />
            </div>
        </div>
    )
}

export default Index
