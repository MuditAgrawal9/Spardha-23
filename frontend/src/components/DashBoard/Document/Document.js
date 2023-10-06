// import React, { useState, useEffect } from 'react';
// import './Profile.css';f
// import axios from 'axios';
import './Document.css';
import 'react-toastify/dist/ReactToastify.css';
// import { useNavigate } from 'react-router';

const Document = () => {
  //   const token = localStorage.getItem('token');
  //   const baseUrl = process.env.REACT_APP_BASE_URL;

  //   const [user, setUser] = useState('');


  return (
    <div className="user-dashboard3 profile_Pad">
      <div className="row_dbProfile">
        <div>
          <div className="doc_upper_content">
            <div className="mb-3">
            <br /><br/>
              <label htmlFor="formFile" className="form-label">Upload Your Document For Verification</label>
              <input className="form-control" type="file" id="formFile" />
            </div>
            <button type="button" className="btn btn-outline-success">Upload</button>
          </div>
          <div className="doc_lower_content">
            <div className="status">
              <div className="col">Verification Status :</div>
              <div className="col"><h5>Verified</h5></div>
            </div>
          </div>
          <div class="form-floating">
            <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2"></textarea>
            <label for="floatingTextarea2">Comments</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Document;