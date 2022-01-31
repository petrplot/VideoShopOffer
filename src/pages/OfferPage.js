import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import OutNumber from '../components/OutNumber';
import video from '../video/video.mp4'

const OfferPage = () => {
  const[data, setData] = useState('')
  const arrNum =[ 1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
  const buttons = []

  arrNum.forEach(item => {
    buttons.push(
      <button className='btn'
        onClick={ e => {
          setData(data + e.target.value)
        }}
        value={item} key={item}
      >
        {item}
      </button>
    )
  })

 if(data.length > 10){setData('')}
    
  const isActive = () => {
    if(data.length < 10){
      let isActive = 'disActive'
      return isActive
    }
  }

  const handlerLink = (e ) => {
    if(data.length < 10 ){
      e.preventDefault()
    }  
  }

  return (
    <div>
      <div className='video'>
        <video loop muted>
          <source src={video} type='video/mp4'/>
        </video>
      </div>
      <div className='keyboard'>
        <div className='number'>
          <p>Введите ваш номер мобильного телефона</p>
            <OutNumber data={data}/>
          <p>и с Вами свяжется наш менеждер для дальнейшей консультации</p>
        </div>
        <div className='keyboard__block'>
          <div className='keyboard__num'>
            <div>
              {buttons}
            </div>
            <div>
              <button
                onClick={()=>{
                  setData(data.substring(0, data.length - 1))
                }}
              >
                clear
              </button>
            </div>
          </div>
      </div>
      <div className='agree'>
        <input type='checkbox'/>
        <p>Согласие на обработку персональных данных</p>
      </div>
      <div>
        <Link
          className={isActive()}
          onClick={ e => handlerLink(e)}
          to={'/info'}
        >
            Подтвердить номер
        </Link>
        <Link to={'/video'}>Отменить</Link>
      </div>
    </div>
  </div>
  )
};

export default OfferPage;
