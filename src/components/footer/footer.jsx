import React from 'react'
import Marquee from 'react-fast-marquee'
import { Link } from 'react-router-dom'
import "../../../src/App.css"

const Footer = () => {
  return (
    <div>
      <Marquee>
          <Link to={"http://www.visittajikistan.tj/"}>
            <img
              className="w-[250px] h-[130px] ml-[30px]"
              src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQ14KvKqWtj8VZWKc51qNJYoyTzGfg_ZquHqKzyzUOul5NDq6bx"
              alt=""
            />
          </Link>

          <Link to={"https://khovar.tj/rus/"}>
            <img
              className="w-[250px] h-[130px] ml-[30px]"
              src="https://upload.wikimedia.org/wikipedia/ru/f/f8/NIAT_Khovar.jpg"
              alt=""
            />
          </Link>

          <Link to={"https://prezident.tj/"}>
            <img
              className="w-[250px] h-[130px] ml-[30px]"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbwf8OfB5Dz5n66ZFr_8vv_1mDlNy9gSO1FOdFXsUAkkqeyg5u"
              alt=""
            />
          </Link>
          <Link to={"https://www.mintrans.tj/ru"}>
            <img
              className="w-[250px] h-[130px] ml-[30px]"
              src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSWUyVGmtzFzXwWkLWnzTMQzDZGqG_rmbEe8s8CIXqeUsSavKIj"
              alt=""
            />
          </Link>

          <Link to={"https://www.medt.tj/ru/"}>
            <img
              className="w-[250px] h-[130px] ml-[30px]"
              src="https://encrypted-tbn0.gstatic.com/bimages?q=tbn:ANd9GcTa6mYXV_nW_OJglo65L0GgBpRgDnMvh8olVixOvSyHBSA5TGQx"
              alt=""
            />
          </Link>

          <Link to={"https://mfa.tj/ru"}>
            <img
              className="w-[250px] h-[130px] ml-[30px]"
              src="https://www.railway.tj/index.php?option=com_unitehcarousel&task=showimage&img=aW1hZ2VzL3BhcnRuZXJzL21pZC5wbmc=&w=200&h=104&t=exact"
              alt=""
            />
          </Link>
        </Marquee>
      <div>
        <img src="https://avesta.tj/wp-content/uploads/2023/05/scale_1200-750x375.webp" alt="" className='w-[100%] h-[400px] absolute -z-50' />
        <div className='absolute flex justify-between w-[90%] m-auto items-center'>
            <div className='ml-[170px] mt-[100px]'>
                <img src="https://traveltajikistan.tj/wp-content/uploads/2023/12/cropped-TJ_Tourism_Logo_white.png" className='w-[200px]' alt="" />
                <p className='text-3xl text-[white] mt-[40px]'>Academic Radjabov str. <br /> 3 Dushanbe, Tajikistan</p>
            </div>
            <div>
                <img src="../../../src/images/Снимок экрана 2024-07-26 130202.png" alt="" />
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer