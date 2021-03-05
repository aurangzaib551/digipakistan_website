import React, { Component } from 'react';
import './Home_1.css'
import Helmet from 'react-helmet'

export default class Ads_1 extends Component {
  render() {
    return (
      <React.Fragment> 
        <Helmet>
          <script async custom-element="amp-ad" src="https://cdn.ampproject.org/v0/amp-ad-0.1.js"></script>
        </Helmet>
          <div className="Home_1">
              <amp-ad className="homeinner_1"
                type="adsense"
                data-ad-client="ca-pub-8769113778501578"
                data-ad-slot="2848047048"
                data-auto-format="rspv"
                data-full-width="">
              <div overflow=""></div>
            </amp-ad>
          </div>
      </React.Fragment>
    );
  }
}
