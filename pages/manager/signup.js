import { useState } from 'react'
import Axios from 'axios'
import Image from 'next/image'
import { useRouter } from 'next/router'

const SignUp = () => {

    const [errorstate, setErrorState] = useState('')
    const [toastclass, setToastclass] = useState('')
    const [toastmsg, setToastmsg] = useState('')

    const router = useRouter()

    const RegisterForm = (self) => {
        self.preventDefault()

        let formdata = {
            name: self.target.name.value,
            email: self.target.email.value,
            phone: self.target.phone.value
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
                        <input id="name" name="name" type="text" />
                    </div>
                    <div className="inputbox">
                        <label htmlFor="email">Имэйл хаяг</label>
                        <input id="email" name="email" type="email" />
                    </div>
                    <div className="inputbox">
                        <label htmlFor="phone">Утасны дугаар</label>
                        <input id="phone" name="phone" type="text" />
                    </div>
                    <button type="submit">Бүртгэх</button>
                </form>
            </div>
        </div>
    )
}
export default SignUp