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
                <a href="">Бүтээгдэхүүн</a>
            </li>
            <li>
                <a href="">Давуу тал</a>
            </li>
            <li>
                <a href="">Нийтлэг асуултууд</a>
            </li>
            <li>
                <a href="">Үнийн санал</a>
            </li>
            <li>
                <a href="">Харилцагчид</a>
            </li>
            <li>
                <a href="">Хаяг</a>
            </li>
        </ul>

        <div className="user">
            <button>Нэвтрэх</button>
            <button>Бүртгүүлэх</button>
        </div>
    </nav>
)

export default Nav