import React from 'react';
import { Parallax } from 'react-materialize';

const News = () => {
    return (
        <div>
            <Parallax
    image={<img alt="" src='/assets/images/drpn.jpg'/>}
    options={{
      responsiveThreshold: 0
    }}
  />
    <nav>
    <div class="nav-wrapper teal black">
      <a href="#" class="brand-logo center teal black">U P C O M I N G  2 0 2 3</a>
      
    </div>
  </nav>
  <Parallax
    image={<img alt="" src="/assets/images/thor.jpeg"/>}
    options={{
      responsiveThreshold: 0
    }}
  />
        </div>
    );
};

export default News;