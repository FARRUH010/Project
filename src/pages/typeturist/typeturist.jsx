import React, { useEffect } from 'react'
import Header from '../../components/header/header'
import { useDispatch, useSelector } from 'react-redux'
import { getData } from '../../reducers/todolist/todolistSlice'
import Footer from '../../components/footer/footer'
import { Link } from 'react-router-dom'

const Typeturist = () => {
    const dispatch = useDispatch()

    const data = useSelector(store => store.todos.data)

    console.log(data);

    useEffect(()=>{
        dispatch(getData())
    },[])
  return (
    <div>
        <Header/>
        <img src="../../../src/images/Виды-туризма.jpg" width={"100%"} className='h-[800px] absolute -z-50' alt=""  />
        <div>
            <p className='text-blue-500 text-6xl pt-[870px] ml-[500px] pb-[60px] bg-auto'>ВИДЫ ТУРИЗМА</p>
            {
                data?.map((el)=>{
                    return (
                    <Link to={"/"+el.id}>
                        <div className="max-w-6xl mx-auto bg-white shadow-md rounded-lg overflow-hidden mt-10 h-[270px] mb-[40px]">
                            <div className="md:flex">
                                <div className="w-[50%]">
                                <img className="w-[100%] h-[270px] object-cover" src={el.img} alt="Mountain landscape" />
                                </div>
                                <div className="p-8 w-[40%]">
                                <div className="uppercase tracking-wide text-indigo-500 font-semibold text-2xl">{el.name}</div>
                                <p className="mt-2 text-gray-500 text-xl">{el.desc}</p>
                                </div>
                            </div>
                            </div>
                    </Link>
                    )
                })
            }
        </div>
        <Footer/>
    </div>
  )
}

export default Typeturist