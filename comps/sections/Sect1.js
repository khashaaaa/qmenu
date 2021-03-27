import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Autoplay, Mousewheel } from 'swiper'

SwiperCore.use([Autoplay, Mousewheel])

const Sect1 = () => {

  return (
    <section id="sect1">
      <div className="article">
        <div className="text">
          <h1>Дижитал Меню</h1>
          <p>Ковид -н эсрэг Q Menu. Таны ресторанаар үйлчлүүлэгчид хүн бүрийн барьсан хэвлэмэл меню -г барьж хэрэглэхгүйгээр өөрийн гар утас дээрээ танай меню -г гаргах боломжтой юм. Quinno ХХК нь бар, рестораны бизнес эрхлэгчдэд зориулан QMenu болон QRSM (ресторан удирдлагын систем) системүүд хөгжүүлээд байна. Эдгээр системүүд нь таны бизнесийн үйл ажиллагааг хөнгөвчилж, ашиг орлогыг тань нэмэгдүүлнэ.</p>
        </div>

        <div className="qrcode">
          <Image src="/sect1/qrcode.png" width={120} height={120} alt="qmenu qrcode" />
        </div>
      </div>

      <div className="showcase">
        <div className="wrap">
          <div className="phone">
            <Image src="/sect1/frame.png" width={260} height={530} alt="phone frame 1" />
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
                  src="/sect1/1.jpg"
                  alt="slide1"
                  width={227}
                  height={400}
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src="/sect1/2.jpg"
                  alt="slide2"
                  width={227}
                  height={400}
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src="/sect1/3.jpg"
                  alt="slide3"
                  width={227}
                  height={400}
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src="/sect1/4.jpg"
                  alt="slide4"
                  width={227}
                  height={400}
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src="/sect1/5.jpg"
                  alt="slide5"
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
}

export default Sect1