import React from 'react'


import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import { Link } from 'react-router-dom';

const Header = () => {
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
      setAge(event.target.value);
    };
  return (
    <div>
      
      <div>
        <div className='absolute top-[50px] left-[100px] z-50 flex items-center '>
          <Link to={"/"}>
          <img src="https://traveltajikistan.tj/wp-content/uploads/2023/12/cropped-TJ_Tourism_Logo_white.png" className='w-[100px]' alt="" />
          </Link>
          <div className='flex gap-[40px] ml-[50px] items-center xl:flex xl:flex-wrap xl:justify-center'>
            <Link to={"/"}>
                <p className='text-[white] text-base font-[550]'>ГЛАВНАЯ СТРАНИЦА</p>
            </Link>
            <Link to={"/type"}>
                <p className='text-[white] text-base font-[550]'>ВИДЫ ТУРИЗМА</p>
            </Link>
            <Link to={"/marshrut"}>
                <p className='text-[white] text-base font-[550]'>МАРШРУТЫ</p>
            </Link>
            <Link to={"/meropriyatiya"}>
                <p className='text-[white] text-base font-[550]'>МЕРОПРИЯТИЯ</p>
            </Link>
            <Link to={"/enets"}>
                <p className='text-[white] text-base font-[550]'>ИНФОРМАЦИЯ</p>
            </Link>
            <Link to={"/contacts"}>
                <p className='text-[white] text-base font-[550]'>КОНТАКТЫ</p>
            </Link>
          <div>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <Select
          value={age}
          onChange={handleChange}
          displayEmpty
        >
          <MenuItem value="">
            <em>
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAAAD1BMVEX///8AOabVKx4AMqTTKxXmvQ9FAAAA9UlEQVR4nO3QsQGAMAzAsBT4/2b2eOwqnaAZAAAAAAAAAAAAAAAAAAAAAK69bHPYnJSTclJOykk5KSflpJyUk3JSTspJOSkn5aSclJNyUk7KSTkpJ+WknJSTclJOykk5KSflpJyUk3JSTspJOSkn5aSclJNyUk7KSTkpJ+WknJSTclJOykk5KSflpJyUk3JS87HNw+aknJSTclJOykk5KSflpJyUk3JSTspJOSkn5aSclJNyUk7KSTkpJ+WknJSTclJOykk5KSflpJyUk3JSTspJOSkn5aSclJNyUk7KSTkpJ+WknJSTclJOykk5KSflpJyUk/oBg6TI4mvpq6EAAAAASUVORK5CYII=" className='w-[50px]' alt="" />
            </em>
          </MenuItem>
          <MenuItem value={10}>
            
          </MenuItem>
          <MenuItem value={20}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Flag_of_Tajikistan.svg/800px-Flag_of_Tajikistan.svg.png" className='w-[50px]' alt="" />
          </MenuItem>
          <MenuItem value={30}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhRDlTt0IeFQReH-xeVsEytDGNdQ6_87yk4A&s" className='w-[50px]' alt="" />
          </MenuItem>
        </Select>
      </FormControl>
    </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header