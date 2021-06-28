import React, { Component } from 'react';
import ReactPlayer from 'react-player';
import '../../App.css';
import CourseDataService from '../../services/course.service';

class CourseDetail extends Component {

    constructor(props) {
        super(props);
        console.log(this.props.match.params.id);
        this.state = {
            data: [],
            loading: true
        }
    }

    componentDidMount() {
        console.log('course detail is mounted.');
        this.retrieveCourseById();
    }

    retrieveCourseById() {
        CourseDataService.getCourseById(this.props.match.params.id)
            .then(response => {
                this.setState({
                    data: response.data,
                    loading: false
                });
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
                this.setState({ data: null, loading: false });
            });
    }

    render() {

        const { data } = this.state;
        const { loading } = this.state;

        let view = <div />;

        return (
            <div className="coursedetail">
                <h3>{data.name}</h3><br />
                <h4>Description : {data.description}</h4><br />
                <h4>Created by : {data.createdBy}</h4><br />

                
                {/* <h1>course detail</h1> */}
                <div className="coursedetail__container">
                    <div className="coursedetail__items">
                        <div className="coursedetail__item">
                            <div className="player__wrapper">
                                <ReactPlayer className='react__player' controls={true} url='https://www.youtube.com/watch?v=ysz5S6PUM-U' width='100%' height='480px' />
                            </div>
                        </div>
                        <div className="coursedetail__item">
                            <div className="player__wrapper">
                                <ReactPlayer className='react__player' controls={true} url='https://www.youtube.com/watch?v=7EhRdPulR48' width='100%' height='100%' />
                            </div>
                        </div>
                        {/* <div className="coursedetail__item">
                            <div className="player__wrapper">
                                <ReactPlayer className='react__player' controls={true} url='https://www.youtube.com/watch?v=LQC3dBWS_FE' width='100%' height='100%' />
                            </div>
                        </div>
                        <div className="coursedetail__item">
                            <div className="player__wrapper">
                                <ReactPlayer className='react__player' controls={true} url='https://www.youtube.com/watch?v=LQC3dBWS_FE' width='100%' height='100%' />
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        )
    }
}

export default CourseDetail;
