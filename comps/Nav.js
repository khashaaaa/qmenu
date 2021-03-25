import Image from 'next/image'

const Nav = () => {

    return (
        <nav className="navbar">

            <div className="logo">
                <Image
                    src="/logo.png"
                    alt="Picture of the author"
                    width={100}
                    height={30}
                />
            </div>

            <ul className="menu">
                <li>
                    <a href="">Дижитал Меню</a>
                </li>
                <li>
                    <a href="">Давуу тал</a>
                </li>
                <li>
                    <a href="">Үйлчилгээ</a>
                </li>
                <li>
                    <a href="">QRMS</a>
                </li>
                <li>
                    <a href="">Таблет Меню</a>
                </li>
                <li>
                    <a href="">Харилцагчид</a>
                </li>
            </ul>

            <div className="user">
                <button>Нэвтрэх</button>
                <button>Бүртгүүлэх</button>
            </div>
        </nav>
    )
}

export default Nav