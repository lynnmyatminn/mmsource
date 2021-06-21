import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        maxWidth: 350,
        marginBottom: 10,
    },
    media: {
        height: 140,
    },
});

const CourseCard = (props) => {

    const classes = useStyles();

    const { details } = props;
    // const imagePath = `http://image.tmdb.org/t/p/w185/${details.poster_path}`;
    const imagePath = `https://tvline.com/wp-content/uploads/2020/04/flash-gustin-contract-talks.jpg?w=620`;
    const title = details.name;
    const overview = details.description;

    console.log(title, overview);

    const courseLink = `/courses/${details.id}`;
    const styles = {
        backgroundImage: `url(${imagePath})`,
    };
    return (
        <div className="col-lg-2 col-md-3 col-sm-4 col-6">
            hellow
                <Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia
                            className={classes.media}
                            image={imagePath}
                            title="Contemplative Reptile"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                            {/* <Link to={courseLink}> */}
                                {title}
                                {/* </Link> */}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                {overview}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary">
                            Share
        </Button>
                        <Button size="small" color="primary">
                            Learn More
        </Button>
                    </CardActions>
                </Card>
            
        </div>
    );
};


export default CourseCard;
