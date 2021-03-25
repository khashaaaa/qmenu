import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Autoplay, Mousewheel } from 'swiper'

SwiperCore.use([Autoplay, Mousewheel])

const Sect1 = () => (

    <section id="sect1">
      <div className="article">
        <div className="text">
          <h1>Дижитал Меню</h1>
          <p>Ковид -н эсрэг Q Menu. Таны ресторанаар үйлчлүүлэгчид хүн бүрийн барьсан хэвлэмэл меню -г барьж хэрэглэхгүйгээр өөрийн гар утас дээрээ танай меню -г гаргах боломжтой юм. Quinno ХХК нь бар, рестораны бизнес эрхлэгчдэд зориулан QMenu болон QRSM (ресторан удирдлагын систем) системүүд хөгжүүлээд байна. Эдгээр системүүд нь таны бизнесийн үйл ажиллагааг хөнгөвчилж, ашиг орлогыг тань нэмэгдүүлнэ.</p>
        </div>

        <div className="qrcode">
          <Image src="/qrcode.png" width={180} height={180} alt="qmenu-qrcode" />
        </div>
      </div>

      <div className="showcase">
        <div className="wrap">
          <div className="phone">
          </div>

          <div className="slider">
            <Swiper
              mousewheel
              autoplay={{ delay: 3000 }}
              spaceBetween={0}
              slidesPerView={1}
              onSlideChange={() => {}}
              onSwiper={() => {}}
            >
              <SwiperSlide>
                <Image
                  src="/1.jpg"
                  alt="Picture of the author"
                  width={227}
                  height={400}
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src="/2.jpg"
                  alt="Picture of the author"
                  width={227}
                  height={400}
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src="/3.jpg"
                  alt="Picture of the author"
                  width={227}
                  height={400}
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src="/4.jpg"
                  alt="Picture of the author"
                  width={227}
                  height={400}
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src="/5.jpg"
                  alt="Picture of the author"
                  width={227}
                  height={400}
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
)

export default Sect1