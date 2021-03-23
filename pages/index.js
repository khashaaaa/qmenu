import Image from 'next/image'
import Template from '../comps/Template'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Autoplay, Mousewheel } from 'swiper'

SwiperCore.use([Autoplay, Mousewheel])

const Index = () => (
  <Template>
    <div className="scrollbtn">
      <div></div>
    </div>

    <div id="sect1">
      <div className="article">
        <h3>Дижитал Меню</h3>
        <p>Ковид -н эсрэг Q Menu. Таны ресторанаар үйлчлүүлэгчид хүн бүрийн барьсан хэвлэмэл меню -г барьж хэрэглэхгүйгээр өөрийн гар утас дээрээ танай меню -г гаргах боломжтой юм. Quinno ХХК нь бар, рестораны бизнес эрхлэгчдэд зориулан QMenu болон QRSM (ресторан удирдлагын систем) системүүд хөгжүүлээд байна. Эдгээр системүүд нь таны бизнесийн үйл ажиллагааг хөнгөвчилж, ашиг орлогыг тань нэмэгдүүлнэ.</p>
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
              onSlideChange={() => console.log('slide change')}
              onSwiper={(swiper) => console.log(swiper)}
            >
              <SwiperSlide>
                <Image
                  src="/1.jpg"
                  alt="Picture of the author"
                  width={226}
                  height={400}
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src="/2.jpg"
                  alt="Picture of the author"
                  width={226}
                  height={400}
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src="/3.jpg"
                  alt="Picture of the author"
                  width={226}
                  height={400}
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src="/4.jpg"
                  alt="Picture of the author"
                  width={226}
                  height={400}
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src="/5.jpg"
                  alt="Picture of the author"
                  width={226}
                  height={400}
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  </Template>
)

export default Index
