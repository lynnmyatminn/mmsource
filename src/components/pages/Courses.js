import React, { Component } from 'react';
import '../../App.css';
// import styled from 'styled-components';
// import Cards from '../Cards';
import CourseCard from '../course/CourseCard';
import Footer from '../Footer';
import CourseDataService from '../../services/course.service';

class Courses extends Component {

  constructor() {
    super();
    this.state = {
      data: [],
      loading: true
    };
  }

  componentDidMount() {
    console.log('component did mount');
    this.retrieveCourses();
  }

  retrieveCourses() {
    CourseDataService.getAll()
      .then(response => {
        this.setState({
            data: response.data.results,
            loading: false
        });
        console.log(response.data.results);
      })
      .catch(e => {
        console.log(e);
        this.setState({ data: null, loading: false });
      });
  }

  render() {

    const { data } = this.state;
    const { loading } = this.state;
    let views = <div />;

    if (!loading && data.length >= 1) {
      // views = Object.keys(data).map(course => <CourseCard key={course} details={data[course]} /> );
      views = <CourseCard courses={data} />
    } else if (loading && !data.length) {
      views = (
        <div className="col-lg-12 text-center">
          <i className="fa fa-2x fa-circle-o-notch fa-spin" />
        </div>
      );
    } else if (!loading && !data.length) {
      views = (
        <div className="col-lg-12">
          <div className="text-center">
            <button className="btn jumboButton">
              Could not get Courses
            </button>
          </div>
        </div>
      );
    }

    return (
      <>
        {views}
        <Footer />
        </>
    );
  }
}

export default Courses;

// const Container = styled.main`
//     min-height: calc(100vh - 70px);
//     padding: 0 calc(3.5vw + 5px);
//     position: relative;
//     overflow-x: hidden;
//     &:before {
//         background: url("/images/home-background.png") center center / cover
//         no-repeat fixed;        
//         content: "";
//         position: absolute;
//         top: 0;
//         left: 0;
//         right: 0;
//         bottom: 0;
//         z-index: -1;
//     }
// `