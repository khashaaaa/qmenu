import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Autoplay } from 'swiper'

SwiperCore.use([Autoplay])

const Sect1 = () => {

  return (
    <section id="sect1">
      <Swiper
        autoplay={{ delay: 3000 }}
        spaceBetween={0}
        slidesPerView={1}
        onSlideChange={() => { }}
        onSwiper={() => { }}
      >
        <SwiperSlide className="slidehead1">
          <div className="article">
            <div className="text">
              <h1>ДИЖИТАЛ МЕНЮ</h1>
              <p>Дэлхий даяар Ресторанууд болон ижил төстэй үйлчилгээний газрууд Корона Вирусын аюултай нүүр тулж хэн нь хурдтай өөрчлөгдөж харилцагчаа эрсдэлээс хамгаалж чадаж байгаа нь бизнесээ авч үлдэж байна.<br /><br />"QMenu" дижитал меню таны бизнесийг дэмжих олон боломжуудыг танд  санал болгож байна.</p>
            </div>

            <div className="option">
              <button>Дэлгэрэнгүй</button>
            </div>
          </div>

          <div className="showcase">
            <Image src="/sect1/wine.png" width={800} height={650} alt="slide 1" />
          </div>
        </SwiperSlide>

        <SwiperSlide className="slidehead2">
          <div className="article">
            <div className="text">
              <h1>Та яагаад  <b>"ДИЖИТАЛ МЕНЮ"</b> хэрэглэх шаардлагатай вэ?</h1>
              <p>Өдөр бүр олон зуун хүний гараас гарт дамждаг "ЦААСАН МЕНЮ" нь нян бактери тараах гол хэрэгсэл болдог бөгөөд цар тахалын энэ хүнд үед <b>“ДИЖИТАЛ МЕНЮ”</b> ашиглан зайнаас хоолоо захиалж, зайнаас төлбөрөө төлж өөрсдийгөө болон бусдыг эрсдэлээс хамгаалъя!</p>
            </div>
          </div>

          <div className="showcase">
            <Image src="/sect1/corona.png" width={800} height={650} alt="slide 2" />
          </div>
        </SwiperSlide>

        <SwiperSlide className="slidehead3">
          <div className="showcase">
            <Image src="/sect1/phone.png" width={800} height={650} alt="slide 3" />
          </div>

          <div className="article">
            <div className="text">
              <h1><b>QMenu</b> боломжууд</h1>
              <ul className="advantages">
                <li>
                  <p>РЕСТОРАН ДОТОРХ ЗАХИАЛГА (DINE-IN)</p>
                  <span>Харилцагч ресторан дотор хоолоо захиалах Дижитал Меню</span>
                </li>
                <li>
                  <p>ОЧИЖ АВАХ ЗАХИАЛГА (PICK-UP)</p>
                  <span>Харилцагч ресторан дотор хоолоо захиалах Дижитал Меню</span>
                </li>
                <li>
                  <p>ХҮРГЭЛТИЙН ЗАХИАЛГА (DELIVERY)</p>
                  <span>Харилцагч ресторан дотор хоолоо захиалах Дижитал Меню</span>
                </li>
                <li>
                  <p>УРЬДЧИЛСАН ЗАХИАЛГА (PRE-ORDER)</p>
                  <span>Харилцагч ресторан дотор хоолоо захиалах Дижитал Меню</span>
                </li>
              </ul>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  )
}

export default Sect1