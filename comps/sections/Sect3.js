import Image from 'next/image'

const Sect3 = () => (

    <section id="sect3">
        <h1>Боломжит үйлчилгээнүүд</h1>

        <div className="uses">
            <div className="left">
                <div className="item">
                    <h3>Өрөөндөө хоол захиалах</h3>
                    <Image src="/order.png" width={80} height={80} />
                </div>
                <div className="item">
                    <h3>Массаж захиалах</h3>
                    <Image src="/massage.png" width={80} height={80} />
                </div>
                <div className="item">
                    <h3>Өрөө цэвэрлүүлэх хүсэлт илгээх</h3>
                    <Image src="/request.png" width={80} height={80} />
                </div>
            </div>
            <div className="phone">
                <div className="image">
                    <Image src="/hotel.jpg" width={228} height={400} />
                </div>
            </div>
            <div className="right">
                <div className="item">
                    <h3>Хувцас угаалга захиалах</h3>
                    <Image src="/laundry.png" width={80} height={80} />
                </div>
                <div className="item">
                    <h3>Өрөө хүлээлгэн өгөх хүсэлт илгээх</h3>
                    <Image src="/handover.png" width={80} height={80} />
                </div>
                <div className="item">
                    <h3>Үйлчлүүлэгчийн санал хүсэлт авах</h3>
                    <Image src="/feedback.png" width={80} height={80} />
                </div>
            </div>
        </div>
    </section>
)

export default Sect3