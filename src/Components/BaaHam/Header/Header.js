import React from 'react';
import './Header.css';
import pic from '../../../Logonav.jpg';
import { BsPerson } from 'react-icons/bs';
import {Link, useRouteMatch} from 'react-router-dom'
import { useMediaQuery } from 'react-responsive';
function Header(props) {
  let item1 = useRouteMatch({
    path: '/home',
    exact: true
  });
  let item2 = useRouteMatch({
    path: '/moshavere',
    exact: true
  });
  let item3 = useRouteMatch({
    path: '/sazandegan',
    exact: true
  });
  let item4 = useRouteMatch({
    path :'/Blog',
    exact: true
  })
  let item5 = useRouteMatch({
    path :'/About',
    exact: true
  })
  return (
    <div className='header'>
        <div className='headerLogo'><div><img alt='' src={pic}/></div></div>
        <nav className='navbar'>
            <div className='navbarList'>
                <Link className={['linkClassHeaderStyle' ,item1? 'activeHeaderLink':''].join(" ")} to={"/home"}><div>صفحه اصلی</div></Link>
                <Link className={['linkClassHeaderStyle' ,item2? 'activeHeaderLink':''].join(" ")} to={"/moshavere"}><div>کارشناسی ملک با ضمانت باهم</div></Link>
                <Link className={['linkClassHeaderStyle' ,item3? 'activeHeaderLink':''].join(" ")} to={"/sazandegan"}><div>فروش سفارشی ملک</div></Link>
                <Link className={['linkClassHeaderStyle' ,item4? 'activeHeaderLink':''].join(" ")} to={"/Blog"}><div>مطالب آموزشی</div></Link>
                <Link className={['linkClassHeaderStyle' ,item5? 'activeHeaderLink':''].join(" ")} to={"/About"}><div>درباره ما</div></Link>
            </div>
        </nav>
        <div className='headerUser'>
          <div className='loginSignBtn'><span><BsPerson style={{marginBottom:'0px',fontSize:'2px'}}/>ورود / ثبت نام</span></div>
          <div className='signUpBtn'><span>ثبت آگهی رایگان</span></div>
        </div>
    </div>
  )
}

export default Header