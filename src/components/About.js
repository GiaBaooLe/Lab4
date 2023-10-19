import React from "react";
import { Collapsible, CollapsibleItem, Icon, } from "react-materialize";

const About = () => {
  return (
    <div className="about">
      <Collapsible accordion>
        <CollapsibleItem
          expanded
          header="About Us"
          
          node="div"
        >
        MeoMeo films is a premier online destination for movie enthusiasts. We are a dedicated team of cinephiles who have come together to create an exceptional platform for movie lovers like you. Our passion for film and the desire to provide a top-notch movie-watching experience inspired the creation of this website.
        </CollapsibleItem>
        <CollapsibleItem
          expanded
          header="Nation Language"
          
          node="div"
        >
        Support language Eng, VN, India,...
        </CollapsibleItem>
        
        <CollapsibleItem
          expanded
          header="Daily news"
          
          node="div"
        >News allways update when new films are comming</CollapsibleItem>
      </Collapsible>
    </div>
  );
};

export default About;
