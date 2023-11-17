import React, { useEffect } from 'react';
import styled from 'styled-components';
import {useNavigate} from 'react-router-dom';
import '../App.css';

const About = () => {
  // const navigate = useNavigate();
  // const callAboutPage = async() => {
  //   try {
  //     const res = fetch('http://localhost:5000/about', {
  //       method : "GET",
  //       headers : {
  //         Accept : 'application/json',
  //         "Content-Type" : 'application/json'
  //       },
  //       credentials : 'include'
  //     });
  //     const data = await res.json();
  //     if(!res.status === 200){
  //       const error = new error(res.error);
  //       throw error;

  //     }
  //   } catch (error) {
  //     console.log(error);
  //     navigate('/login')
  //   }
  // }

  // useEffect(() => {
  //   callAboutPage();
  // }, [])
  return (
    <Wrapper>
      <div className='container emp-profile'>
        <form method='GET'>
          <div className='row'>
            <div className='col-md-4'>
              {/* <div className='profile-img'>
                <img src={profile} alt='profile image'/>
              </div> */}
              <div className='box'>
                <h2>Base Score</h2>
                <h3>10</h3>
              </div>
            </div>
            <div className='col-md-4'>
              <div className='profile-head'>
                <p>Hello [Comapny Name] Team</p>
                 <p> Let's Analyse your Social Profile </p>
                 <p> Here's the Result </p>
                  <p>Base Score: Represents the analysis based on All time Customer Reactions.</p>
                  <p>  Current Score: Represents the recent analysis of past one month Customer Reactions.</p>
                {/* <h6>Web Developer</h6>
                <p className='profile-rating mt-3 mb-5'>
                  RANKING: <span>1/10</span>
                </p> */}

                {/* tabs */}
                <ul className='nav nav-tabs' role='tablist'>
                  <li className='nav-item'>
                    <a className='nav-link active' id='home-tab' data-toggle='tab' href='#home' role='tab'>
                      About 
                    </a>
                  </li>

                  {/* <li className='nav-item'>
                    <a className='nav-link' id='profile-tab' data-toggle='tab' href='#profile' role='tab'>
                      Timeline
                    </a>
                  </li> */}
                </ul>
              </div>
            </div>

            <div className='col-md-4'>
              {/* <input type='submit' value='Edit Profile' name='btnAddMore' className='profile-edit-btn' /> */}
              <div className='box1'>
                <h2>Current Score</h2>
                <h3>10</h3>
              </div>
            </div>
          </div>

          <div className='row'>
            {/* left side */}
            <div className='col-md-4'>
              <div className='profile-work'>
                <p>YOUR SOCIALS</p>
                <a href='https://www.linkedin.com/in/md-sajjad-ali-a4148b241/' target='_blank' rel="noopener noreferrer"><i class="zmdi zmdi-linkedin material-icons-name"></i></a> <br/>
                <a href='https://github.com/sajjad83255' target='_blank' rel="noopener noreferrer"><i class="zmdi zmdi-twitter material-icons-name"></i></a> <br/>
                <a href='https://github.com/sajjad83255' target='_blank' rel="noopener noreferrer"><i class="zmdi zmdi-instagram material-icons-name"></i></a> <br/>
                <a href='https://github.com/sajjad83255' target='_blank' rel="noopener noreferrer"><i class="zmdi zmdi-facebook material-icons-name"></i></a> <br/>
              </div>
            </div>

            {/* right side */}
            <div className='col-md-8 pl-5 about-info'>
              <div className='tab-context profile-tab' id='myTabContent'>
                <div className='tab-pane fade show active' id='home' role='tabpanel' aria-labelledby='home-tab'>
                  <div className='row mt-3'>
                    <div className='col-md-6'>
                      <p>USER ID</p>
                    </div>
                    <div className='col-md-6'>
                      <p>542809816471275401</p>
                    </div>
                  </div>

                  <div className='row mt-3'>
                    <div className='col-md-6'>
                      <p>COMPANY NAME</p>
                    </div>
                    <div className='col-md-6'>
                      <p>Md Sajjad Ali</p>
                    </div>
                  </div>

                  <div className='row mt-3'>
                    <div className='col-md-6'>
                      <p>EMAIL</p>
                    </div>
                    <div className='col-md-6'>
                      <p>mdsajjadali83255@gmail.com</p>
                    </div>
                  </div>

                  <div className='row mt-3'>
                    <div className='col-md-6'>
                      <p>CONTACT</p>
                    </div>
                    <div className='col-md-6'>
                      <p>9764147427</p>
                    </div>
                  </div>

                  {/* <div className='row mt-3'>
                    <div className='col-md-6'>
                      <p>PROFESSION</p>
                    </div>
                    <div className='col-md-6'>
                      <p>SOFTWARE ENGINEER</p>
                    </div>
                  </div> */}
                </div>
              
              </div>
            </div>
          </div>
        </form>
      </div>
    </Wrapper>
  )
};

const Wrapper = styled.section`
.box {
  width: 200px;
  height: 180px;
  border-radius: 50%;
  border: 2px solid #000;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden; 
}

h2, h3 {
  margin: 0;
}

.box1 {
  width: 200px;
  height: 180px;
  border-radius: 50%;
  border: 2px solid #000;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  padding-right: -28px; /* Adjust the value as needed */
}

h2{
  font-size: 20px
}

h2, h3 {
  margin: 0;
}
`;

export default About;

