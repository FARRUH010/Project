import React from 'react'
import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'

const Contacts = () => {
  return (
    <div>
       <Header/>
        <img src="https://your.tj/wp-content/uploads/2023/06/nacionalnyj-muzej-tadzhikistana-768x376.jpg" className="object-cover h-[800px] w-[100%] relative -z-50" alt="" />
     <div className="bg-white p-8 rounded-lg shadow-lg max-w-4xl mx-auto mt-[70px]">
      <div className="flex flex-col md:flex-row justify-between">
        <div className="md:w-1/2 mb-6 md:mb-0">
          <h2 className="text-3xl font-bold mb-4">Обратная связь:</h2>
          <p className="text-lg mb-2">
            <span className="font-semibold text-blue-600">Телефон для справки</span>: <br />
            <span className="flex items-center">
              <svg className="w-5 h-5 mr-2 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M3 5.5C3 4.1 4.1 3 5.5 3h13c1.4 0 2.5 1.1 2.5 2.5v13c0 1.4-1.1 2.5-2.5 2.5h-13C4.1 21 3 19.9 3 18.5v-13zm12.5 0C15.5 5.5 15 5 14.5 5s-1 .5-1 1 .5 1 1 1 1-.5 1-1zm-8 0C7.5 5.5 7 5 6.5 5s-1 .5-1 1 .5 1 1 1 1-.5 1-1zm1.1 8.9c-.2 0-.5-.1-.6-.3-.2-.2-.2-.5 0-.7L9.6 11 8 9.4 6.3 11c-.2.2-.5.2-.7 0-.2-.2-.2-.5 0-.7l1.7-1.7L7 6.6c-.2-.2-.2-.5 0-.7.2-.2.5-.2.7 0L9.4 8 11 6.4l-1.7-1.7c-.2-.2-.2-.5 0-.7.2-.2.5-.2.7 0l1.7 1.7 1.7-1.7c.2-.2.5-.2.7 0 .2.2.2.5 0 .7L12.4 6l1.6 1.6 1.7-1.7c.2-.2.5-.2.7 0 .2.2.2.5 0 .7l-1.7 1.7L16 9.4l1.7-1.7c.2-.2.5-.2.7 0 .2.2.2.5 0 .7L16.4 11l1.6 1.6c.2.2.2.5 0 .7-.2.2-.5.2-.7 0L15 11l-1.7 1.7 1.6 1.6c.2.2.2.5 0 .7-.1.2-.4.3-.6.3s-.5-.1-.6-.3L12 12.4l-1.7 1.7c-.1.2-.4.3-.6.3zm5.4-1.9c-.6 0-1-.5-1-1s.4-1 1-1 1 .5 1 1-.4 1-1 1z" />
              </svg>
              (+992 37) 221 17 60
            </span>
          </p>
          <p className="text-lg mb-2">
            <span className="font-semibold text-blue-600">Email</span>: <br />
            <span className="flex items-center">
              <svg className="w-5 h-5 mr-2 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 13.5l7-5.2v8.7c0 .7-.6 1.3-1.3 1.3H6.3c-.7 0-1.3-.6-1.3-1.3V8.3l7 5.2zm7-7.5H5c-.7 0-1.3.6-1.3 1.3v.3l8 6 8-6v-.3c0-.7-.6-1.3-1.3-1.3z" />
              </svg>
              info@ctd.tj
            </span>
          </p>
          <p className="text-lg">
            <span className="font-semibold text-blue-600">Рабочие часы</span>: <br />
            Понедельник - Пятница <br />
            8:00 – 17:00
          </p>
        </div>
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold mb-4">Оставить сообщение:</h2>
          <form className="flex flex-col space-y-4">
            <input type="text" placeholder="ФИО" className="p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600" />
            <input type="text" placeholder="Номер телефона" className="p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600" />
            <input type="email" placeholder="Email" className="p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600" />
            <textarea placeholder="Сообщение" className="p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 h-32"></textarea>
            <button type="submit" className="p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Отправить</button>
          </form>
        </div>
      </div>
    </div>
    <div className="bg-gray-100 p-6 rounded-lg shadow-md max-w-4xl mx-auto mt-[50px] mb-[100px]">
      <h2 className="text-2xl font-bold mb-4">Наше местоположение</h2>
      <div className="w-full h-96">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345090723!2d144.9537353155044!3d-37.81627974268878!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf0727cd6333f0804!2sCommittee%20of%20Tourism%20Development!5e0!3m2!1sen!2stj!4v1690224115613!5m2!1sen!2stj"
          width="100%"
          height="100%"
          allowFullScreen=""
          loading="lazy"
          className="rounded-lg"
          title="Committee of Tourism Development"
        ></iframe>
      </div>
    </div>
    <Footer/>
    </div>
  )
}

export default Contacts