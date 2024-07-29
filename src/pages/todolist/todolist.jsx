import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../../App.css';

import Header from '../../components/header/header';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { AccountBalance, Air, DirectionsRailway, FlightTakeoffOutlined } from '@mui/icons-material';
import Footer from '../../components/footer/footer';
import { Link } from 'react-router-dom';

// import required modules

// Подключаем плагин ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const Todolist = () => {
  // useEffect (() => {
  //   const tl = gsap.timeline({
  //     scrollTrigger: {
  //       scrub: 1,
  //       pin: true,
  //       trigger: "#pin-windmill",
  //       start: "50% 50%",
  //       endTrigger: "#pin-windmill-wrap",
  //       end: "bottom 50%",
  //     },
  //   });

  //   tl.to("#pin-windmill-svg", {
  //     rotateZ: 900,
  //     className:`grey`
  //   });

  //   // Очистка эффекта при размонтировании компонента
  //   return () => {
  //     ScrollTrigger.getAll().forEach(trigger => trigger.kill());
  //   };
  // }, []);
  return (
    <div className="font-sans">
    {/* <div>
      <div id="pin-windmill">
        <svg id="pin-windmill-svg" width="100" height="100">
          Your SVG content here
        </svg>
      </div>
      <div id="pin-windmill-wrap">
        Content to trigger the end of the animation
      </div>
    </div> */}
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide style={{ height: "990px" }}>
          <img src="https://asiaplustj.info/sites/default/files/articles/270919/%D0%9F%D0%B8%D0%BA%20%D0%BD%D0%B5%D0%B7%D0%B0%D0%B2%D0%B8%D1%81%D0%B8%D0%BC%D0%BE%D1%81%D1%82%D0%B8%20%D0%BD%D0%B0%20%D0%B3%D0%BB%D0%B0%D0%B2%D0%BD%D1%83%D1%8E.jpg" alt="" />
          <p className='absolute text-7xl mt-[70px] w-[1000px] text-black z-50'>ВЕЧНЫХ   ЛЕДНИКОВ</p>
        </SwiperSlide>
        <SwiperSlide style={{ height: "990px" }}>
          <img src="https://imgtest.mir24.tv/uploaded/images/crops/2022/October/870x489_0x220_detail_crop_20221027163415_98c503e6_a0443d461b06c8718a7f0c14e1bfe3a2d9688e993ab0dece3ffeda0a52787db0.jpg" alt="" />
          <p className='absolute text-7xl mt-[70px] w-[1000px] text-black z-50'>ПРЕСНОЙ   ВОДЫ</p>
        </SwiperSlide>
        <SwiperSlide style={{ height: "990px" }}>
          <img src="https://ecifas-tj.org/wp-content/uploads/2023/06/image.png" alt="" />
          <p className='absolute text-7xl mt-[70px] w-[1000px] text-black z-50'>ДРЕВНЕЙ   КУЛЬТУРЫ</p>
        </SwiperSlide>
        <SwiperSlide style={{ height: "990px" }}>
          <img src="https://imgtest.mir24.tv/uploaded/images/2020/June/0233170c93d4faf9d895d271fdad1890ea313499cddec2b89dc056fc0dbe51a3.jpg" alt="" />
          <p className='absolute text-7xl mt-[70px] w-[1000px] text-black z-50'>УНИКАЛЬНЫХ   ГОР</p>
        </SwiperSlide>
        <SwiperSlide style={{ height: "990px" }}>
          <img src="https://asiaplustj.info/sites/default/files/articles/272679/%D0%93%D0%B0%D1%80%D0%BC%20%D0%A7%D0%B0%D1%88%D0%BC%D0%B0.jpg" alt="" />
          <p className='absolute text-7xl mt-[70px] w-[1000px] text-black z-50'>ЦЕЛЕБНЫХ   ИСТОЧНИКОВ</p>
        </SwiperSlide>
      </Swiper>

      <Header />

      <p className='absolute text-9xl font-bold top-[200px] text-white text-center left-[200px] z-50 xl:text-8xl'>ТАДЖИКИСТАН<br /> СТРАНА</p>
      
      <img src="../../../src/images/femae-tourist.png" alt="" className='absolute text-9xl font-bold top-[585px] text-white text-center left-[600px] z-10 w-[220px]' />

      <div className="relative w-full h-[600px] mt-[50px]">
        <img
          src="../../../src/images/04-07-2022.jpg"
          alt="Tajikistan Tower"
          className="object-cover w-full h-full"
        />
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
          <Link to={"/taj"}>
            <h1 className="text-[#ffffffc4] text-5xl mb-[450px]">
              О ТАДЖИКИСТАНЕ
            </h1>
          </Link>
        </div>
      </div>
      <div>
      </div>

      <div className="relative w-full h-[800px] mt-[50px]">
        <img
          src="../../../src/images/images.jpeg"
          alt="Tajikistan Tower"
          className="object-cover w-full h-full"
        />
        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50">
          <h1 className="text-white text-5xl absolute top-[40px]">
            РЕГИОНЫ
          </h1>
          <Swiper
        slidesPerView={3}
        spaceBetween={30}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="absolute mt-[230px]"
      >
        <SwiperSlide style={{ height: "400px", width: "100%" }} className='top-[140px]'>
            <img src="https://static.euronews.com/articles/stories/07/04/88/70/1440x810_cmsv2_0a756090-ca5d-5799-943e-48226670388e-7048870.jpg" alt="Dushanbe" className="w-full h-auto" />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-center py-2 text-lg">
              ДУШАНБЕ
            </div>
            </SwiperSlide>
            <SwiperSlide style={{ height: "400px", width: "200px" }}>
              <img src="https://avatars.mds.yandex.net/get-altay/11471993/2a00000190e60e8e7067227dc5dbd637c27b/L_height" alt="Sogdian Region" className="w-full h-auto" />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-center py-2 text-lg">
                СОГДИЙСКАЯ ОБЛАСТЬ
              </div>
            </SwiperSlide>
            <SwiperSlide style={{ height: "400px", width: "200px" }} className='top-[140px]'>
            <img src="https://ecifas-tj.org/wp-content/uploads/2023/06/image.png" alt="Khatlon Region" className="w-full h-auto" />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-center py-2 text-lg">
            ҲИСОР
            </div>
            </SwiperSlide>
            <SwiperSlide style={{ height: "400px", width: "200px" }}>
              <img src="https://i.imgur.com/4h65eBe.jpg" alt="" />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-center py-2 text-lg">
              ҲАТЛОНСТАЙСКИЙ ОБЛАСТЬ
            </div>
            </SwiperSlide>
            <SwiperSlide style={{ height: "400px", width: "200px" }} className='top-[140px]'>
              <img src="https://khovar.tj/rus/wp-content/uploads/2017/09/pogoda-4-1.jpg" alt="" />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-center py-2 text-lg">
              ГОРНО БАДАХШАНСКОЙ ОБЛАСТИ
              </div>
              
            </SwiperSlide>
            <SwiperSlide style={{ height: "400px", width: "200px" }}>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaTFoNryeVMUKWNAf0QjAK9nWdmSDj9gcIXw&s" alt="" />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-center py-2 text-lg">
              РАЙОНЫ РЕСПУБЛИКАНСКОГО ПОДЧИНЕНИЯ
              </div>
            </SwiperSlide>
      </Swiper>
        </div>
      </div>

      <div className="relative w-full h-[600px] mt-[50px]">
        <img
          src="../../../src/images/depositphotos_2287927-stock-photo-close-up-of-colorful-stones.jpg"
          alt="Tajikistan Tower"
          className="object-cover w-full h-full"
        />
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 xl:flex xl:flex-wrap">
          <div className='flex w-[60%] m-auto justify-between items-center'>
            <img src="https://traveltajikistan.tj/wp-content/uploads/2023/04/%D0%A1%D0%BB%D0%BE%D0%B9-23-%D0%BA%D0%BE%D0%BF%D0%B8%D1%8F.png" alt="" className='w-[300px]' />
            <Link to={"/type"}>
              <h1 className="text-white text-5xl">
                ВИДЫ ТУРИЗМА
              </h1>
            </Link>
          </div>
        </div>
      </div>

      <div className="relative w-full h-[600px] mt-[50px]">
        <img
          src="https://storage.yandexcloud.net/media.turclub-pik.ru/media/uploads/2024/04/17/2_ozyora_fanskih_gor.jpg"
          alt="Tajikistan Tower"
          className="object-cover w-full h-full"
        />
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
          <div className='w-[80%] m-auto flex justify-between items-center mt-[120px]'>
            <h1 className="text-white text-5xl">
              МАРШРУТЫ
            </h1>
            <img src="https://traveltajikistan.tj/wp-content/uploads/2023/03/%D0%A7%D0%B5%D0%BB%D0%BE%D0%B2%D0%B5%D0%BA.png" alt="" className='w-[700px]' />
          </div>
        </div>
      </div>
      <div className="relative w-full h-[600px] mt-[50px]">
        <img
          src="https://imgtest.mir24.tv/uploaded/images/crops/2023/December/870x489_0x0_detail_crop_20231225175445_61d549cf_f9a638230afadc0b1dffb036ed6350cec5c27cac65b6f02998d495f5aad10e08.jpg"
          alt="Tajikistan Tower"
          className="object-cover w-full h-full xl:h-[800px]"
        />
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 ">
          <div className='w-[80%] m-auto flex justify-between items-center mt-[160px] xl:flex xl:flex-wrap'>
            <img src="https://traveltajikistan.tj/wp-content/uploads/2023/03/223.png" alt="" className='w-[700px]' />
            <Link to={"/meropriyatiya"}>
              <h1 className="text-white text-5xl xl:text-6xl">
                МЕРОПРИЯТИЯ
              </h1>
            </Link>
          </div>
        </div>
      </div>

      <div className="bg-[rgba(0,0,250,0.12)] p-8 w-[80%] m-auto mb-[100px]">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmEn6uy3mw9R7YuYrB8wqcez_6_CJe1SkyFw&s" className='absolute left-0 mt-[-70px] w-[100%] h-[2200px] -z-10 ' alt="" />
      <div className="text-white text-center py-4">
        <h1 className="text-4xl font-bold">ПАМЯТКА ТУРИСТАМ</h1>
      </div>
      <div className="grid grid-cols-4 gap-4 mt-4">
        <Link to={"/enets"}>
        <div className="bg-[#0000003b] text-white p-4 rounded">
          <div className="flex items-center justify-center">
            <div className="text-6xl">
              <img src="https://traveltajikistan.tj/wp-content/uploads/2023/03/%D0%92%D0%B0%D0%BB%D1%8E%D1%82%D0%B0.png" alt=""  />
            </div>
          </div>
          <h2 className="text-2xl mt-4">Валюта</h2>
          <p>Сомони — национальная валюта Таджикистана, названная в честь средневекового политического деятеля Исмаила Самани, код в стандарте ISO 4217 — TJS. 1 сомони состоит из 100 дирамов.</p>
        </div>
        </Link>
        <Link to={"/enets"}>
        <div className="bg-[#0000003b] text-white p-4 rounded">
          <div className="flex items-center justify-center">
            <div className="text-6xl">
              <img src="https://traveltajikistan.tj/wp-content/uploads/2023/03/%D0%A2%D1%80%D0%B0%D0%BD%D1%81%D0%BF%D0%BE%D1%80%D1%82.png" alt="" />
            </div>
          </div>
          <h2 className="text-2xl mt-4">Транспорт</h2>
          <p>До Таджикистана можно добраться посредством авиалиний, железнодорожных путей или на автомобиле.</p>
        </div>
        </Link>
        <Link to={"/enets"}>
        <div className="bg-[#0000003b] text-white p-4 rounded">
          <div className="flex items-center justify-center">
            <div className="text-6xl">
              <img src="https://traveltajikistan.tj/wp-content/uploads/2023/03/%D0%9E%D1%82%D0%B5%D0%BB%D0%B8.png" alt="" />
            </div>
          </div>
          <h2 className="text-2xl mt-4">Отели</h2>
          <p>Таджикистан предлагает широкий выбор отелей для туристов. В стране есть множество отелей различных категорий — от роскошных 5-звездочных до бюджетных вариантов.</p>
        </div>
        </Link>
        <Link to={"/enets"}>
        <div className="bg-[#0000003b] text-white p-4 rounded">
          <div className="flex items-center justify-center">
            <div className="text-6xl">
              <img src="https://traveltajikistan.tj/wp-content/uploads/2023/03/%D0%92%D0%B8%D0%B7%D0%BE%D0%B2%D0%B0%D1%8F-%D0%BF%D0%BE%D0%B4%D0%B4%D0%B5%D1%80%D0%B6%D0%BA%D0%B0.png" alt="" />
            </div>
          </div>
          <h2 className="text-2xl mt-4">Визовая поддержка</h2>
          <p>Главное консульское управление Министерства иностранных дел Таджикистана запустило портал электронной визы, позволяющий краткосрочным посетителям без особых усилий получить визу.</p>
        </div>
        </Link>
      </div>
      <div>
        <p className='text-center text-6xl text-white font-[400] mt-[50px]'>ПОЛЕЗНЫЕ ССЫЛКИ</p>
        <div>
          <Link to={"https://airport.tj/index.php/ru/site/index"}>
            <div className='flex items-center mt-[20px]'>
              <FlightTakeoffOutlined/>
              <p className='text-lg text-white'>Международный аэропорт Душанбе</p>
            </div>
          </Link>
          <Link to={"https://www.railway.tj/ru/passengers/schedule"}>
            <div className='flex items-center mt-[20px]'>
              <DirectionsRailway/>
              <p className='text-lg text-white'>
  Железнодорожный вокзал
  </p>
            </div>
          </Link>
          <Link to={"https://www.nbt.tj/ru/"}>
          <div className='flex items-center mt-[20px]'>
            <AccountBalance/>
            <p className='text-lg text-white'>
Национальный банк Таджикистана
</p>
          </div>
          </Link>
          <Link to={"https://caa.tj/"}>
            <div className='flex items-center mt-[20px]'>
              <FlightTakeoffOutlined/>
              <p className='text-lg text-white'>
  Агенство гражданской авиации
  </p>
            </div>
          </Link>
          <Link to={"https://khadamotialoqa.tj/ru/glavnaya/"}>
            <div className='flex items-center mt-[20px]'>
              <FlightTakeoffOutlined/>
              <p className='text-lg text-white'>
  Служба связи
  </p>
            </div>
          </Link>
          <Link to={"https://www.meteo.tj/ru"}>
            <div className='flex items-center mt-[20px]'>
              <FlightTakeoffOutlined/>
              <p className='text-lg text-white'>
  Агентство по гидрометеорологии
  </p>
            </div>
          </Link>
          <Link to={"https://tajnature.tj/ru/"}>
            <div className='flex items-center mt-[20px]'>
              <FlightTakeoffOutlined/>
              <p className='text-lg text-white'>
  Комитет по охране окружающей среды
  </p>
            </div>
          </Link>
          <Link to={"https://www.booking.com/country/tj.ru.html"}>
            <div className='flex items-center mt-[20px]'>
              <FlightTakeoffOutlined/>
              <p className='text-lg text-white'>
  Booking.com
  </p>
            </div>
          </Link>
          <Link to={"https://ru.airbnb.com/s/%D0%A2%D0%B0%D0%B4%D0%B6%D0%B8%D0%BA%D0%B8%D1%81%D1%82%D0%B0%D0%BD/homes?tab_id=home_tab&refinement_paths%5B%5D=%2Fhomes&flexible_trip_lengths%5B%5D=one_week&monthly_start_date=2023-10-01&monthly_length=3&price_filter_input_type=0&price_filter_num_nights=5&channel=EXPLORE&query=%D0%A2%D0%B0%D0%B4%D0%B6%D0%B8%D0%BA%D0%B8%D1%81%D1%82%D0%B0%D0%BD&place_id=ChIJzbO8enN2sTgRtYgZT4QxwyU&date_picker_type=calendar&source=structured_search_input_header&search_type=autocomplete_click"}>
            <div className='flex items-center mt-[20px]'>
              <FlightTakeoffOutlined/>
              <p className='text-lg text-white'>Airbnb</p>
            </div>
          </Link>
          <Link to={"https://www.flightradar24.com/38.53,68.78/6"}>
            <div className='flex items-center mt-[20px]'>
              <FlightTakeoffOutlined/>
              <p className='text-lg text-white'>FlightRadar24</p>
            </div>
          </Link>
        </div>
      </div>
      <div className='flex flex-wrap gap-[5px] w-[100%] mt-[50px]'>
        <div className="App">
        <div className="image-container">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/National_Museum_of_Tajikistan_%D0%9D%D0%B0%D1%86%D0%B8%D0%BE%D0%BD%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B9_%D0%BC%D1%83%D0%B7%D0%B5%D0%B9_%D0%A2%D0%B0%D0%B4%D0%B6%D0%B8%D0%BA%D0%B8%D1%81%D1%82%D0%B0%D0%BD%D0%B0%280%29_%D0%9E%D1%81%D0%BE%D1%80%D1%85%D0%BE%D0%BD%D0%B0%D0%B8_%D0%BC%D0%B8%D0%BB%D0%BB%D0%B8.jpg/800px-National_Museum_of_Tajikistan_%D0%9D%D0%B0%D1%86%D0%B8%D0%BE%D0%BD%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B9_%D0%BC%D1%83%D0%B7%D0%B5%D0%B9_%D0%A2%D0%B0%D0%B4%D0%B6%D0%B8%D0%BA%D0%B8%D1%81%D1%82%D0%B0%D0%BD%D0%B0%280%29_%D0%9E%D1%81%D0%BE%D1%80%D1%85%D0%BE%D0%BD%D0%B0%D0%B8_%D0%BC%D0%B8%D0%BB%D0%BB%D0%B8.jpg" alt="Mountains" />
          <div className="overlay">
            <div className="text">
            Множество музеев и галерей. Таджикистан богат на культурное наследие, которое можно увидеть в музеях и галереях страны.
            </div>
          </div>
        </div>
      </div>
        <div className="App">
        <div className="image-container">
          <img src="https://gtt.tj/wp-content/uploads/2019/12/%D0%A1%D0%B0%D1%84%D0%B5%D0%B4-%D0%94%D0%B0%D1%80%D0%B02-1000x658.jpg" alt="Mountains" />
          <div className="overlay">
            <div className="text">
            Множество приключенческих спортивных мероприятий. В Таджикистане можно заняться различными видами экстремальных спортов, таких как альпинизм, горный туризм, рафтинг и другие.
            </div>
          </div>
        </div>
      </div>
        <div className="App">
        <div className="image-container">
          <img src="https://asiaplustj.info/sites/default/files/articles/270919/%D0%9F%D0%B8%D0%BA%20%D0%BD%D0%B5%D0%B7%D0%B0%D0%B2%D0%B8%D1%81%D0%B8%D0%BC%D0%BE%D1%81%D1%82%D0%B8%20%D0%BD%D0%B0%20%D0%B3%D0%BB%D0%B0%D0%B2%D0%BD%D1%83%D1%8E.jpg" alt="Mountains" />
          <div className="overlay">
            <div className="text">
              Красивые горы и природа: Таджикистан находится в горах, и это означает, что туристы могут наслаждаться великолепными горными пейзажами, живописными озерами, реками и водопадами.
            </div>
          </div>
        </div>
      </div>
        <div className="App">
        <div className="image-container">
          <img src="https://upload.wikimedia.org/wikipedia/commons/3/3e/National_Library_of_Tajikistan.JPG" alt="Mountains" />
          <div className="overlay">
            <div className="text">
            Уникальный архитектурный стиль. Таджикистан славится своей архитектурой, которая отражает многовековую историю страны. Здесь можно увидеть древние крепости, мечети, мавзолеи и многое другое.
            </div>
          </div>
        </div>
      </div>
        <div className="App">
        <div className="image-container">
          <img src="../../../src/images/Uzbek-Samsa.jpg" alt="Mountains" />
          <div className="overlay">
            <div className="text">
            Разнообразная кухня: Таджикистан славится своей уникальной кухней, которая включает в себя множество местных блюд, таких как плов, лагман, сомони и многое другое.
            </div>
          </div>
        </div>
      </div>
        <div className="App">
        <div className="image-container">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBzzMMadQ_E-wvHROLgAz-cCOajTOVhbQJCA&s" alt="Mountains" />
          <div className="overlay">
            <div className="text">
            Уникальный ремесленный стиль. В Таджикистане развито ремесло, которое передается из поколения в поколение. Здесь можно увидеть уникальные изделия национального ремесла.
            </div>
          </div>
        </div>
      </div>
        <div className="App">
        <div className="image-container">
          <img src="https://mfa.tj/uploads/moscow/2022/01/somoni1.jpg" alt="Mountains" />
          <div className="overlay">
            <div className="text">
            Памятники Таджикистана представляют собой разнообразные архитектурные сооружения, созданные в разные исторические периоды.
            </div>
          </div>
        </div>
      </div>
        <div className="App">
        <div className="image-container">
          <img src="https://asiaplustj.info/sites/default/files/articles/270919/%D0%9F%D0%B8%D0%BA%20%D0%BD%D0%B5%D0%B7%D0%B0%D0%B2%D0%B8%D1%81%D0%B8%D0%BC%D0%BE%D1%81%D1%82%D0%B8%20%D0%BD%D0%B0%20%D0%B3%D0%BB%D0%B0%D0%B2%D0%BD%D1%83%D1%8E.jpg" alt="Mountains" />
          <div className="overlay">
            <div className="text">
              Красивые горы и природа: Таджикистан находится в горах, и это означает, что туристы могут наслаждаться великолепными горными пейзажами, живописными озерами, реками и водопадами.
            </div>
          </div>
        </div>
      </div>
        <div className="App">
        <div className="image-container">
          <img src="https://asiaplustj.info/sites/default/files/articles/272679/%D0%93%D0%B0%D1%80%D0%BC%20%D0%A7%D0%B0%D1%88%D0%BC%D0%B0.jpg" alt="Mountains" />
          <div className="overlay">
            <div className="text">
            Множество термальных источников. Таджикистан известен своими термальными источниками, которые имеют лечебные свойства. Здесь можно попробовать различные процедуры на основе термальных вод.
            </div>
          </div>
        </div>
      </div>
      </div>

    </div>
     <Footer/>
    </div>
  );
}

export default Todolist;
