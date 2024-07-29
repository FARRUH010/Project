import React from 'react'
import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'

const Information = () => {
  return (
    <div>
       <Header/>
        <img
          src="https://imgtest.mir24.tv/uploaded/images/crops/2023/December/870x489_0x0_detail_crop_20231225175445_61d549cf_f9a638230afadc0b1dffb036ed6350cec5c27cac65b6f02998d495f5aad10e08.jpg"
          alt="Tajikistan Tower"
          className="object-cover h-[700px] w-[100%] absolute -z-50"
        />
        <img src="https://traveltajikistan.tj/wp-content/uploads/2023/03/223.png" alt="" className='w-[650px] ml-[400px] pt-[300px]' />
        <div>
        <p className='text-blue-500 text-6xl pt-[120px] ml-[500px] pb-[60px]'>МЕРОПРИЯТИЯ</p>
        <div className='w-[90%] m-auto flex items-center gap-[2%] pb-[200px]'>
            <div className='w-[23%] h-[500px]'>
                <img src="https://traveltajikistan.tj/wp-content/uploads/2023/05/%D1%81%D0%B0%D0%B4%D0%B0-3.jpg" alt="" className='h-[85%]'  />
                <div className='w-[270px] p-[20px] absolute top-[1280px] left-[100px] z-50 bg-[#d7d7d7ba]'>
                    <p className='text-center text-2xl'>Сада</p>
                    <p className='w-[240px] text-center text-xl'>По инициативе уважаемого Лидера нации, Основателя мира и национального единства, Президента Республики Таджикистан, Эмомали Рахмон, праздник Сада в нашей стране официально празднуется </p>
                </div>
            </div>
            <div className='w-[23%] h-[500px]'>
                <img src="https://traveltajikistan.tj/wp-content/uploads/2023/03/1055510170_510-0-2557-2047_1920x0_80_0_0_74f19f122b481798be5b6408463f6e58.jpg" alt="" className='h-[85%]'  />
                <div className='w-[270px] p-[20px] absolute top-[1280px] left-[430px] z-50 bg-[#d7d7d7ba]'>
                    <p className='text-center text-2xl'>Навруз</p>
                    <p className='w-[240px] text-center text-xl'>Навруз — древний праздник, который берет свои истоки с первого века до нашей эры на территории Древней Персии, куда входит территория современного </p>
                </div>
            </div>
            <div className='w-[23%] h-[500px]'>
                <img src="https://traveltajikistan.tj/wp-content/uploads/2023/05/6310_orig.jpg" alt="" className='h-[85%]'  />
                <div className='w-[270px] p-[20px] absolute top-[1280px] left-[770px] z-50 bg-[#d7d7d7ba]'>
                    <p className='text-center text-2xl'>Тиргон</p>
                    <p className='w-[240px] text-center text-xl'>Тиргон или Праздник созревания пшеницы отмечался во времена арийской цивилизации. По григорианскому исчислению он совпадает с началом календарного месяца и приходится на</p>
                </div>
            </div>
            <div className='w-[23%] h-[500px]'>
                <img src="https://traveltajikistan.tj/wp-content/uploads/2023/03/photo_2023-03-28_21-49-43.jpg" alt="" className='h-[85%]'  />
                <div className='w-[270px] p-[20px] absolute top-[1280px] left-[1100px] z-50 bg-[#d7d7d7ba]'>
                    <p className='text-center text-2xl'>Мехргон</p>
                    <p className='w-[240px] text-center text-xl'>Праздник Мехргон, наряду с Наврузом, является одним из значимых празднований арийской культуры, и очен тесно с ним связан. Если Навруз это день </p>
                </div>
            </div>
            
        </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Information