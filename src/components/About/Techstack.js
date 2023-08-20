import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import ReactTooltip from 'react-tooltip'; // Import the tooltip package
import {
  DiPython,
  DiDjango,
  DiJava,
  DiHtml5,
  DiCss3,
  DiGit,
  DiReact,
  DiLinux,
  DiGnu,
  DiMysql,
  // Import other icons here
} from 'react-icons/di'; // Import icons from the appropriate package
import {
  SiAndroid,
  SiBootstrap,
  SiGraphql,
  SiJavascript,
  SiMariadb, SiNumpy, SiOpencv, SiPandas, SiPhp, SiScikitlearn, SiSpringboot, SiSymfony, SiTencentqq, SiTensorflow,
  // Import other icons here
} from 'react-icons/si'; // Import icons from the appropriate package

function Techstack() {
  // const [hoveredIcon, setHoveredIcon] = useState(null);

  // const handleIconHover = (iconName) => {
  //   setHoveredIcon(iconName);
  // };

  // const handleIconMouseLeave = () => {
  //   setHoveredIcon(null);
  // };

  const tooltipOptions = {
    effect: 'solid', // Tooltip effect
    place: 'bottom', // Tooltip position
    style: {
      maxWidth: '50px', // Adjust this value as needed
      // You can also add other styling properties here if necessary
    },
  };

  const maxTooltipLength = 12; // Set your desired maximum tooltip length


// Define your icon data
const iconData = [
  { name: 'Python', component: <DiPython /> },
  { name: 'Django', component: <DiDjango /> },
  { name: 'Java', component: <DiJava /> },
  { name: 'SpringBoot', component: <SiSpringboot /> },
  { name: 'Php', component: <SiPhp /> },
  { name: 'Symfony', component: <SiSymfony /> },
  { name: 'JavaScript', component: <SiJavascript /> },
  { name: 'HTML5', component: <DiHtml5 /> },
  { name: 'CSS', component: <DiDjango /> },
  { name: 'Django', component: <DiCss3 /> },
  { name: 'BootStrap', component: <SiBootstrap /> },
  { name: 'React', component: <DiReact /> },
  { name: 'Git', component: <DiGit /> },
  { name: 'Linux', component: <DiLinux /> },
  { name: 'Bash Scrip', component: <DiGnu /> },
  { name: 'MariaDB', component: <SiMariadb /> },
  { name: 'MYSQL', component: <DiMysql /> },
  { name: 'GraphQL', component: <SiGraphql /> },
  { name: 'OpenCV', component: <SiOpencv /> },
  { name: 'Pandas', component: <SiPandas /> },
  { name: 'NumPy', component: <SiNumpy /> },
  { name: 'Scikit-Learn', component: <SiScikitlearn /> },
  { name: 'TensorFlow', component: <SiTensorflow /> },
  { name: 'Andorid', component: <SiAndroid /> },
];

  return (
    <Row style={{ justifyContent: 'center', paddingBottom: '50px' }}>
      {iconData.map((icon, index) => (
        <Col
          xs={4}
          md={2}
          className="tech-icons"
          key={index}
          data-tip={icon.name.length > maxTooltipLength ? `${icon.name.slice(0, maxTooltipLength)}...` : icon.name}
          // onMouseEnter={() => handleIconHover(icon.name)}
          // onMouseLeave={handleIconMouseLeave}
        >
          {icon.component}
        </Col>
      ))}
      {/* <ReactTooltip  {...tooltipOptions} /> */}
      {/* {hoveredIcon && (
        <Col xs={12} style={{ textAlign: 'center' }}>
          {hoveredIcon}
        </Col>
      )} */}
    </Row>
  );
}

export default Techstack;
