import Image from 'next/image'

const Foot = () => (

    <footer id="foot">
        <div className="info">
            <div className="item">
                <Image src="/location.png" width={15} height={20} alt="location" />
                <p>Үндэсний цэцэрлэгт хүрээлэнгийн замын хойно<br />Рояал плаза барилга Баянзүрх дүүрэг<br />26-р хороо Улаанбаатар хот<br />Монгол улс</p>
            </div>
            <div className="item">
                <Image src="/phone.png" width={15} height={15} alt="phone" />
                <p>+976 99107699, +976 99106223</p>
            </div>
            <div className="item">
                <Image src="/email.png" width={15} height={10} alt="mail" />
                <p>info@qmenu.mn</p>
            </div>
        </div>

        <div className="copyright">
            <p>© Кьюинно ХХК 2021</p>
        </div>
    </footer>
)

export default Foot