import React from 'react';
import { Link } from 'react-router-dom';

function CardItem(props) {

  const { detail } = props;

  const title = detail.name;
  const courseLink = `/course/${detail.id}`;

  return (
    <>
      <div className="cards__item">
        <Link className="cards__item__link" to={courseLink}>
          <figure className='cards__item__pic-wrap' data-category={Object.keys(detail.categories).map((category) => detail.categories[category].name)}>
            <img
              className='cards__item__img'
              alt={title}
              src={'https://thumbor.forbes.com/thumbor/fit-in/1200x0/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5da5c84c6763cb000608c51e%2F0x0.jpg'}
            />
          </figure>
          <div className='cards__item__info'>
            <h5 className='cards__item__text'>{title}</h5>
          </div>
        </Link>
      </div>
    </>
  )

  // return (
  //   <>
  //     {/* <li className='cards__item'> */}
  //     <div className="cards__item">
  //       <Link className='cards__item__link' to={props.path}>
  //         <figure className='cards__item__pic-wrap' data-category={props.label}>
  //           <img
  //             className='cards__item__img'
  //             alt='Travel Image'
  //             src={props.src}
  //           />
  //         </figure>
  //         <div className='cards__item__info'>
  //           <h5 className='cards__item__text'>{props.text}</h5>
  //         </div>
  //       </Link>
  //     </div>
  //     {/* </li> */}
  //   </>
  // );
}

export default CardItem;