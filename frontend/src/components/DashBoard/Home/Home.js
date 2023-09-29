import React, { useState, useEffect } from 'react';
import './Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
//import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
//toast.configure();

const Home = () => {
  const token = localStorage.getItem('token');
  // console.log('token', token);
  const baseUrl = process.env.REACT_APP_BASE_URL;

  const [user, setUser] = useState('');
  const [numevents, setNumEvents] = useState('10');

  useEffect(() => {
    axios
      .get(`${baseUrl}auth/update/`, {
        headers: {
          Authorization: `Token ${token}`,
        },
      })
      .then((res) => {
        // console.log('user data=', res.data);
        setUser(res.data);
        // console.log('user', user);
      })
      .catch((err) => {
        console.log('error=', err);
      });

    axios
      .get(`${baseUrl}teams/`, {
        headers: {
          Authorization: `Token ${token}`,
        },
      })
      .then((res) => {
        // console.log("numevents data=",res.data);
        setNumEvents(res.data.length);
        // console.log('numevents',numevents);
      })
      .catch((err) => {
        console.log('error=', err);
        if (err.response.status === 404) {
          setNumEvents(0);
        }
      });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const a = user['email'];
  // console.log('a=', a);
  localStorage.setItem('College_Rep', a);

  const handleDownload = () => {
    axios.get(`${baseUrl}teams/contingent/form`, {
      responseType: 'blob',
      headers: {
        Authorization: `Token ${token}`,
      }
    })
      .then((response) => {
        const blob = new Blob([response.data], { type: 'application/msword' });
        const url = window.URL.createObjectURL(blob);

        // Create a temporary anchor element to trigger the download
        const a = document.createElement('a');
        a.href = url;
        a.download = 'Spardha23_detailed_entry_form.docx';
        a.click();

        // Release the object URL to free up memory
        window.URL.revokeObjectURL(url);
      })
      .catch((error) => {
        console.error('Error downloading document:', error);
      });
  };

  return (
    <div className="user-dashboard">
      <h1>Hello, <username className='username'>{user.name}</username></h1>
      <div className='home_scroller'>
      <div className="row_dbHome">
        <div className="col-xs-10 gutter widthAdjust">
          <div className="welcome-text">
            <div className="text-justify">
              <h2>Note:</h2>
              <h3>
                Since we allow only college registration, so you're
                supposed to register for {user.institution}. In case you want
                someone else to register for your college, you need to first
                delete your account in User Profile section, before another user can create an account with same
                college name.
                < u className='linkButton' style={{ textDecoration: 'none' }}>
                <Link 
                    to="/dashboard/profile"
                    style={ {textDecoration: 'none' }}
                  ><button className="register">
                User Profile</button>
                  </Link></u>
              </h3>
            </div>
          </div>
        </div>
        
        <div className="col-xs-10 gutter widthAdjust">
          <div className="welcome-text">
            <div className="text-justify">
              <h3>
                Please read the Rule Book before registering for events.
              </h3>
              <u className='linkButton' style={{ textDecoration: 'none' }}>
                  <a
                    href="/pdf/RuleBook.pdf"
                                        style={{ textDecoration: 'none' }}
                  ><butoon className="register">
                    View RuleBook</butoon>
                  </a>
                </u>
            </div>
          </div>
        </div>
        <div className="col-xs-10 gutter widthAdjust">
          <div className="welcome-text">
            <div className="text-justify">
              <h3>
                You've registered for <u className='num'>{numevents} </u>events.
              </h3>
              <u className='linkButton' style={{ textDecoration: 'none' }}>
                  <Link
                    to="/dashboard/registration"
                    style={{ textDecoration: 'none' }}
                  ><button className="register">
                    Add/Edit Events</button>
                  </Link>
                </u>
            </div>
          </div>
        </div>
      </div>
      <div>
      <button className="btnform" onClick={handleDownload}>Download Entry Form</button>
      </div>
      </div>
    </div>
  );
};

export default Home;
