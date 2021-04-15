import Image from 'next/image'
import Link from 'next/link'
import { Link as Linka, animateScroll as scroll } from 'react-scroll'

const Nav = ({ mode, setMode }) => {

    return (
        <nav className={`navbar ${mode ? "dark" : "light"}`}>

            <div className="logo">
                <Image
                    src="/logo.png"
                    alt="Quinno logo"
                    width={90}
                    height={25}
                />
            </div>

            <ul className="menu">
                <li>
                    <Linka style={mode ? { color: 'white' } : { color: '' }} activeClass="active" to="sect1" spy={true} smooth={true} duration={500} delay={100}>
                        Дижитал Меню
                    </Linka>
                </li>
                <li>
                    <Linka style={mode ? { color: 'white' } : { color: '' }} activeClass="active" to="sect2" spy={true} smooth={true} duration={500} delay={100}>
                        Давуу тал
                    </Linka>
                </li>
                <li>
                    <Linka style={mode ? { color: 'white' } : { color: '' }} activeClass="active" to="sect3" spy={true} smooth={true} duration={500} delay={100}>
                        Үйлчилгээ
                    </Linka>
                </li>
                <li>
                    <Linka style={mode ? { color: 'white' } : { color: '' }} activeClass="active" to="sect4" spy={true} smooth={true} duration={500} delay={100}>
                        Таблет меню
                    </Linka>
                </li>
                <li>
                    <Linka style={mode ? { color: 'white' } : { color: '' }} activeClass="active" to="sect5" spy={true} smooth={true} duration={500} delay={100}>
                        QRMS
                    </Linka>
                </li>
                <li>
                    <Linka style={mode ? { color: 'white' } : { color: '' }} activeClass="active" to="sect6" spy={true} smooth={true} duration={500} delay={100}>
                        Харилцагчид
                    </Linka>
                </li>
            </ul>

            <div className="user">
                <div className="mode">
                    {
                        mode ?
                            <Image onClick={() => setMode(!mode)} src="/sun.svg" width={30} height={30} alt="light mode" />
                            :
                            <Image onClick={() => setMode(!mode)} src="/moon.svg" width={30} height={30} alt="dark mode" />
                    }
                </div>
                <Link href="/manager/login">
                    <a>Нэвтрэх</a>
                </Link>
                <Link href="/manager/signup">
                    <a>Бүртгүүлэх</a>
                </Link>
            </div>
        </nav>
    )
}

export default Nav