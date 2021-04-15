import { useEffect, useState, useRef } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import Axios from 'axios'

const Index = () => {

    const [errorstate, setErrorState] = useState('')
    const [toastclass, setToastclass] = useState('')
    const [toastmsg, setToastmsg] = useState('')

    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')

    const domainRef = useRef()
    const nameRef = useRef()
    const phoneRef = useRef()

    const router = useRouter()

    let creds
    if (typeof window !== "undefined") {
        let str = window.sessionStorage.getItem('manager')
        creds = JSON.parse(str)
    }

    useEffect(() => {
        nameRef.current = name
        phoneRef.current = phone
    }, [])

    const CompanyReg = (self) => {
        self.preventDefault()

        let formdata = {
            name: name,
            domain: self.target.domain.value,
            phone: phone,
            owner: creds.manager[0].manager_id
        }

        const config = {
            headers: { Authorization: `Bearer ${creds.token}` }
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
                router.push(`/manager/${creds.manager[0].name}/profile`)
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
                        <input ref={domainRef} name="domain" type="text" defaultValue={router.query.Company} disabled />
                    </div>
                    <div className="inputbox">
                        <label htmlFor="name">Компани(ресторан)-ийн нэр</label>
                        <input ref={nameRef} onChange={val => setName(val.target.value)} value={name} name="name" type="text" />
                    </div>
                    <div className="inputbox">
                        <label htmlFor="phone">Утасны дугаар</label>
                        <input ref={phoneRef} onChange={val => setPhone(val.target.value)} value={phone} name="phone" type="text" />
                    </div>
                    <button type="submit">Бүртгэх</button>
                </form>

                <Image className="showcase" src="/rest2.jpg" width={300} height={400} alt="Restaurant" />
            </div>
        </div>
    )
}

export default Index
