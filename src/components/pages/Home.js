import React, { Component } from 'react';
import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection';
import Footer from '../Footer';
import CourseDataService from '../../services/course.service';

class Home extends Component {

  constructor() {
    super();
    this.state = {
      data: [],
      loading: true
    };
  }

  componentDidMount() {
    console.log('Home Class Component is mounted.');
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

    let view = <div />;

    if (!loading && data.length >= 1) {
      view = <Cards courses={data} />
      // return (
      //   <>
      //     <Cards />
      //     <Footer />
      //   </>
      // )
    } else if (loading && !data.length) {
      view = (
        <div className="col-lg-12 text-center">
          <i className="fa fa-2x fa-circle-o-notch fa-spin" />
        </div>
      );
      // return (
      //   <>
      //     <div className="col-lg-12 text-center">
      //       <i className="fa fa-2x fa-circle-o-notch fa-spin" />
      //     </div>
      //     <Footer />
      //   </>
      // );
    } else if (!loading && !data.length) {
      view = (
        <div className="col-lg-12">
          <div className="text-center">
            <button className="btn jumboButton">
              Could not get Courses
            </button>
          </div>
        </div>
      );
      // return (
      //   <>
      //      <div className="col-lg-12">
      //        <div className="text-center">
      //          <button className="btn jumboButton">
      //            Could not get Courses
      //          </button>
      //        </div>
      //      </div>
      //     <Footer />
      //   </>
      // )
    }

    return (
      <>
        {view}
        <Footer />
      </>
    )
  }


}

// function Home() {
//   return (
//     <>
//       {/* <HeroSection /> */}
//       <Cards />
//       <Footer />
//     </>
//   );
// }

export default Home;