import { useState } from 'react'
import Image from 'next/image'
import Axios from 'axios'
import { useRouter } from 'next/router'

const Login = () => {

    const [errorstate, setErrorState] = useState('')
    const [toastclass, setToastclass] = useState('')
    const [toastmsg, setToastmsg] = useState('')

    const router = useRouter()

    const LoginForm = (self) => {
        self.preventDefault()

        let formdata = {
            email: self.target.email.value,
            phone: self.target.phone.value
        }

        if(formdata.email == "" || formdata.phone == "" || errorstate.includes(400)) {
            setToastmsg('Бүх талбарыг бөглөнө үү.')
            setToastclass('show')
            setTimeout(() => { setToastclass('out') }, 2000)
        }
        Axios.post('http://localhost:3001/manager/login', formdata)
        .then((loggedin) => {
            let str = JSON.stringify(loggedin.data)
            window.sessionStorage.setItem('manager', str)
            router.push(`/manager/${loggedin.data.manager[0].name}/profile`)
        })
        .catch(error => {
            setErrorState(error.message)
            if (errorstate.includes(404)) {
                setToastmsg('Мэдээлэл байхгүй байна.')
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

                <form onSubmit={LoginForm}>
                    <div className="inputbox">
                        <label htmlFor="email">Имэйл хаяг</label>
                        <input id="email" name="email" type="email" />
                    </div>
                    <div className="inputbox">
                        <label htmlFor="phone">Утасны дугаар</label>
                        <input id="phone" name="phone" type="text" />
                    </div>
                    <button type="submit">Нэвтрэх</button>
                </form>
            </div>
        </div>
    )
}

export default Login