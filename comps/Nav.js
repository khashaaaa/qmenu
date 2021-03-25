import Image from 'next/image'

const Nav = () => (

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
                <a href="#sect1">Дижитал Меню</a>
            </li>
            <li>
                <a href="#sect2">Давуу тал</a>
            </li>
            <li>
                <a href="#sect3">Үйлчилгээ</a>
            </li>
            <li>
                <a href="#sect4">QRMS</a>
            </li>
            <li>
                <a href="#sect5">Таблет Меню</a>
            </li>
            <li>
                <a href="#sect6">Хаяг</a>
            </li>
        </ul>

        <div className="user">
            <button>Нэвтрэх</button>
            <button>Бүртгүүлэх</button>
        </div>
    </nav>
)

export default Nav