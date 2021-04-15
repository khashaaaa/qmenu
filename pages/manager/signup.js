import { useState, useEffect, useRef } from 'react'
import Axios from 'axios'
import Image from 'next/image'
import { useRouter } from 'next/router'

const SignUp = () => {

    const [errorstate, setErrorState] = useState('')
    const [toastclass, setToastclass] = useState('')
    const [toastmsg, setToastmsg] = useState('')

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')

    const nameRef = useRef()
    const emailRef = useRef()
    const phoneRef = useRef()

    const router = useRouter()

    useEffect(() => {
        let creds
        if (typeof window !== "undefined") {
            let str = window.sessionStorage.getItem('manager')
            creds = JSON.parse(str)
        }

        nameRef.current = name
        emailRef.current = email
        phoneRef.current = phone

        if(creds) {
            return router.push(`/manager/${creds.manager[0].name}/profile`)
        }
    }, [])

    const RegisterForm = (self) => {
        self.preventDefault()

        let formdata = {
            name: name,
            email: email,
            phone: phone
        }

        if(formdata.name == "" || formdata.email == "" || formdata.phone == "") {
            setToastmsg('Бүх талбарыг бөглөнө үү.')
            setToastclass('show')
            setTimeout(() => { setToastclass('out') }, 2000)
        }
        Axios.post('http://localhost:3001/manager/create', formdata)
        .then((created) => {
            setToastmsg('Амжилттай бүртгэгдлээ.')
            setToastclass('show')
            setTimeout(() => {
                setToastclass('out')
                router.push(`/manager/login`)
            }, 2000)
        })
        .catch(error => {
            setErrorState(error.message)
            if (errorstate.includes(409)) {
                setToastmsg('Мэдээлэл давхцаж байна.')
                setToastclass('show')
                setTimeout(() => { setToastclass('out') }, 2000)
            }
        })
    }

    return (
        <div id="signup">

            <div className={`toast ${toastclass}`}>{toastmsg}</div>

            <div className="wrap">
                <Image className="showcase" src="/rest.jpg" width={300} height={400} alt="Restaurant" />

                <form onSubmit={RegisterForm}>
                    <div className="inputbox">
                        <label htmlFor="name">Өөрийн нэр</label>
                        <input ref={nameRef} onChange={val => setName(val.target.value)} value={name} name="name" type="text" />
                    </div>
                    <div className="inputbox">
                        <label htmlFor="email">Имэйл хаяг</label>
                        <input ref={emailRef} onChange={val => setEmail(val.target.value)} value={email} name="email" type="email" />
                    </div>
                    <div className="inputbox">
                        <label htmlFor="phone">Утасны дугаар</label>
                        <input ref={phoneRef} onChange={val => setPhone(val.target.value)} value={phone} name="phone" type="text" />
                    </div>
                    <button type="submit">Бүртгэх</button>
                </form>
            </div>
        </div>
    )
}
export default SignUp