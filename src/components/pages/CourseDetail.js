import React, { Component } from 'react';
import ReactPlayer from 'react-player';
import '../../App.css';
import Footer from '../Footer';
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
        console.log(data);
        console.log(loading);

        let view = <div />;

        if (!loading && data != null) {
            view = (
                <div className="coursedetail">
                    <div className="center-screen">
                        <h3>{data.name}</h3><br />
                        <p className="text-center">{data.description}</p><br />
                        <h4>Created by : {data.createdBy}</h4><br />
                    </div>

                    <div className="coursedetail__container">
                        <div className="coursedetail__items">
                            <div className="coursedetail__item">
                                <div className="player__wrapper">
                                    {/* <ReactPlayer className='react__player' controls={true} url='https://www.youtube.com/watch?v=ysz5S6PUM-U' width='100%' height='480px' /> */}
                                    <iframe src="https://streamtape.com/e/3D6Ae0mkJyIdw7r/1._Introduction.mp4" width="100%" height="480" allowfullscreen allowtransparency allow="autoplay" scrolling="no" frameborder="0"></iframe>
                                </div>
                            </div>

                            {/* session twe d mhar htae mal */}
                            <div className="coursedetail__item">
                                <div className="session__wrapper">
                                    <div>
                                        Course Content
                                    </div>
                                    <ul className="session__list">
                                        {
                                            data.sections.map((section, i) =>
                                                <li key={i}>
                                                    {section.name}
                                                    <ul>

                                                        {section.video.map((vid, i) =>
                                                            <li key={i}>
                                                                <div>
                                                                    {vid.name}
                                                                </div>

                                                                <div>
                                                                    {vid.embedcode}
                                                                </div>
                                                            </li>
                                                        )}
                                                    </ul>
                                                </li>
                                            )
                                        }
                                    </ul>

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
