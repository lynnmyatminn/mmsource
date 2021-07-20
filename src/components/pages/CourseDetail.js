import React, { Component } from "react";
import ReactPlayer from "react-player";
import "../../App.css";
import Footer from "../Footer";
import CourseDataService from "../../services/course.service";

import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';

    // const useStyles = makeStyles((theme) => ({
    //   root: {
    //     width: '100%',
    //     maxWidth: 360,
    //     backgroundColor: theme.palette.background.paper,
    //     position: 'relative',
    //     overflow: 'auto',
    //     maxHeight: 400,
    //     color: 'black'
    //   },
    //   listSection: {
    //     backgroundColor: 'inherit',
    //     // backgroundColor: 'blue',
    //   },
    //   ul: {
    //     backgroundColor: 'inherit',
    //     padding: 0,
    //   },
    // }));

class CourseDetail extends Component {



  constructor(props) {
    super(props);
    this.state = {
      data: {},
      loading: true,
      videoURL: ''
    };
  }



  componentDidMount() {
    console.log("course detail is mounted.");
    this.retrieveCourseById();
  }

  retrieveCourseById() {
    CourseDataService.getCourseById(this.props.match.params.id)
      .then((snaptShot) => {
        this.setState({
          data: { id: snaptShot.id, ...snaptShot.data() },
          loading: false,
          videoURL: ''
        });
      })
      .catch((e) => {
        this.setState({ data: null, loading: false, videoURL: '' });
      });
  }

  itemClickHandler = (url) => {
    this.setState({ videoURL: url });
    console.log(url);
  }

  render() {
    const { data } = this.state;
    const { loading } = this.state;
    const {videoURL} = this.state;
    // const classes = useStyles();

    let view = <div />;

    if (!loading && data != null) {
      view = (
        <div className="coursedetail">
          <div className="center-screen">
            <h3>{data.name}</h3>
            <br />
            <p className="text-center">{data.description}</p>
            <br />
            <h4>Created by : {data.createdBy}</h4>
            <br />
          </div>

          <div className="coursedetail__container">
            <div className="coursedetail__items">
              <div className="coursedetail__item">
                <div className="player__wrapper">
                  {/* <ReactPlayer className='react__player' controls={true} url='https://www.youtube.com/watch?v=ysz5S6PUM-U' width='100%' height='480px' /> */}
                  <iframe
                    // src="https://streamtape.com/e/3D6Ae0mkJyIdw7r/1._Introduction.mp4"
                    src={videoURL}
                    width="100%"
                    height="480"
                    allowfullscreen
                    allowtransparency
                    allow="autoplay"
                    scrolling="no"
                    frameborder="0"
                  ></iframe>
                </div>
              </div>

              <div className="coursedetail__item">
                <div className="session__wrapper">
                  <div>Course Content</div>
                  <List className="session__root">
                    {data.sections.map((section, i) => (
                      <li key={i} className="session__list">
                        <ListSubheader>{section.name}</ListSubheader>
                        <ul>
                          {section.video.map((item, i) => (
                            <ListItem key={i} button>
                              <ListItemText onClick={() => this.itemClickHandler(item.embedcode)} primary={item.name} />
                            </ListItem>
                          ))}
                        </ul>
                      </li>
                    ))}
                  </List>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    } else if (loading && data == null) {
      view = (
        <div className="col-lg-12 text-center">
          <i className="fa fa-2x fa-circle-o-notch fa-spin" />
        </div>
      );
    } else if (!loading && data == null) {
      view = (
        <div className="col-lg-12">
          <div className="text-center">
            <button className="btn jumboButton">
              Could not get course detail!
            </button>
          </div>
        </div>
      );
    }

    return (
      <>
        {view}
        <Footer />
      </>
    );
  }
}

export default CourseDetail;
