import React from 'react';
import './CourseCard.css';
import CourseCardItem from './CourseCardItem';

const CourseCard = (props) => {

    const { courses } = props;
    // const imagePath = `http://image.tmdb.org/t/p/w185/${details.poster_path}`;
    //const imagePath = `https://tvline.com/wp-content/uploads/2020/04/flash-gustin-contract-talks.jpg?w=620`;
    //const title = details.name;
    //const overview = details.description;

    //console.log(title, overview);

    //const courseLink = `/courses/${details.id}`;
    //const styles = {
    //    backgroundImage: `url(${imagePath})`,
    //};
    return (

        <div className='cards'>
      <h1>Courses</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>

{
    courses &&

        Object.keys(courses).map(course => <CourseCardItem key={course} detail={courses[course]} /> )
}
          {/* <CourseCardItem
              src={imagePath}
              text={title}
              label='Mystery'
              path='/services'
            /> */}
        </div>
      </div>
    </div>

        // <div className="col-lg-2 col-md-3 col-sm-4 col-6">
        //     hellow
        //         <Card className={classes.root}>
        //             <CardActionArea>
        //                 <CardMedia
        //                     className={classes.media}
        //                     image={imagePath}
        //                     title="Contemplative Reptile"
        //                 />
        //                 <CardContent>
        //                     <Typography gutterBottom variant="h5" component="h2">
        //                     {/* <Link to={courseLink}> */}
        //                         {title}
        //                         {/* </Link> */}
        //                     </Typography>
        //                     <Typography variant="body2" color="textSecondary" component="p">
        //                         {overview}
        //                     </Typography>
        //                 </CardContent>
        //             </CardActionArea>
        //             <CardActions>
        //                 <Button size="small" color="primary">
        //                     Share
        // </Button>
        //                 <Button size="small" color="primary">
        //                     Learn More
        // </Button>
        //             </CardActions>
        //         </Card>
            
        // </div>
    );
};


export default CourseCard;
