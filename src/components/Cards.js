import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

const Cards = (props) => {

  const { courses } = props;

  return (
    <div className="cards">
      <h1>Courses</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          {
            courses && Object.keys(courses).map(course => <CardItem key={course} detail={courses[course]} />)
          }
        </div>
      </div>
    </div>
  );

  // return (
  //   <div className='cards'>
  //     <h1>Learn for future!</h1>
  //     <div className='cards__container'>
  //       <div className='cards__wrapper'>
  //         {/* <ul className='cards__items'> */}
         
  //         <CardItem
  //             src='images/img-3.jpg'
  //             text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
  //             label='Mystery'
  //             path='/services'
  //           />
          
  //             <CardItem
  //             src='images/img-3.jpg'
  //             text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
  //             label='Mystery'
  //             path='/services'
  //           />
  //           <CardItem
  //             src='images/img-3.jpg'
  //             text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
  //             label='Mystery'
  //             path='/services'
  //           />
  //            <CardItem
  //             src='images/img-3.jpg'
  //             text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
  //             label='Mystery'
  //             path='/services'
  //           />
  //            <CardItem
  //             src='images/img-3.jpg'
  //             text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
  //             label='Mystery'
  //             path='/services'
  //           />
  //            <CardItem
  //             src='images/img-3.jpg'
  //             text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
  //             label='Mystery'
  //             path='/services'
  //           />
  //            <CardItem
  //             src='images/img-3.jpg'
  //             text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
  //             label='Mystery'
  //             path='/services'
  //           />
  //           <CardItem
  //             src='images/img-3.jpg'
  //             text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
  //             label='Mystery'
  //             path='/services'
  //           />
  //           <CardItem
  //             src='images/img-3.jpg'
  //             text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
  //             label='Mystery'
  //             path='/services'
  //           />
         
  //         {/* </ul> */}
  //       </div>
  //     </div>
  //   </div>
  // );
}

export default Cards;