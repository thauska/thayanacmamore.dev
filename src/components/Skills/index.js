import styled from "styled-components";

const SkillWrapper = styled.div`
  max-width: 40rem;
  a {
    text-decoration: none;
    padding: 0rem 0.4rem;
    img {
      width: 45px;
      height: 45px;
    }
  }
`;

export default function Skills() {
  return (
    <SkillWrapper>
      <p align="left">
          <h3>Linguagens e tecnologias</h3>
        <p>
          <a href="https://www.w3.org/html/" target="_blank">
            {" "}
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"
              alt="html5"
            />{" "}
          </a>{" "}
          <a href="https://www.w3schools.com/css/" target="_blank">
            {" "}
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"
              alt="css3"
            />{" "}
          </a>{" "}
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
            target="_blank"
          >
            {" "}
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
              alt="javascript"
            />{" "}
          </a>{" "}
          <a href="https://www.typescriptlang.org/" target="_blank">
            {" "}
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg"
              alt="typescript"
            />{" "}
          </a>{" "}
        </p>
        <p>
          <a href="https://vuejs.org/" target="_blank">
            {" "}
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/vuejs/vuejs-original-wordmark.svg"
              alt="vuejs"
            />{" "}
          </a>{" "}
          <a href="https://quasar.dev/" target="_blank">
            {" "}
            <img
              src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg"
              alt="quasar"
            />{" "}
          </a>{" "}
          <a href="https://reactjs.org/" target="_blank">
            {" "}
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
              alt="react"
            />{" "}
          </a>{" "}
          <a href="https://reactnative.dev/" target="_blank">
            {" "}
            <img
              src="https://reactnative.dev/img/header_logo.svg"
              alt="reactnative"
            />{" "}
          </a>{" "}
          <a href="https://nextjs.org/" target="_blank">
            {" "}
            <img
              src="https://cdn.worldvectorlogo.com/logos/nextjs-3.svg"
              alt="nextjs"
            />{" "}
          </a>{" "}
          <a href="https://nodejs.org" target="_blank">
            {" "}
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg"
              alt="nodejs"
            />{" "}
          </a>{" "}
          <a href="https://expressjs.com" target="_blank">
            {" "}
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg"
              alt="express"
            />{" "}
          </a>{" "}
          <a href="https://www.mysql.com/" target="_blank">
            {" "}
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg"
              alt="mysql"
            />{" "}
          </a>{" "}
        </p>
        <p>
          <a href="https://www.docker.com/" target="_blank">
            {" "}
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg"
              alt="docker"
            />{" "}
          </a>{" "}
          <a href="https://git-scm.com/" target="_blank">
            {" "}
            <img
              src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg"
              alt="git"
            />{" "}
          </a>{" "}
          <a href="https://moodle.org/" target="_blank">
            {" "}
            <img
              src="https://moodle.org/theme/image.php/moodleorg/theme_moodleorg/1611833978/moodle_logo_small"
              alt="moodle"
            />{" "}
          </a>{" "}
          <a
            href="https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_dev_guide.htm"
            target="_blank"
          >
            {" "}
            <img
              src="https://trailhead.salesforce.com/assets/salesforce-logo-c85aa8775564935450df60718d09c7a809f3c1dec87dac350c85ad0cb16b064e.svg"
              alt="apex"
            />{" "}
          </a>{" "}
        </p>
      </p>
    </SkillWrapper>
  );
}
