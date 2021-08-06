import React from "react";
import {
  Switch,
  Route,
  BrowserRouter as Router,
  HashRouter,
  Link,
} from "react-router-dom";
import "./App.css";
import ppower from "./ppower.png";
import YouTube from "react-youtube";
import wnrs from "./wnrs.png";
import glific from "./glific.png";
import { ReactSVG } from "react-svg";
import linkedin from "./linkedin.svg";
import github from "./github.svg";
import email from "./email.svg";
import blob from "./blob.png";

class App extends React.Component {
  render() {
    return (
      <HashRouter basename="/">
        <div className="body">
          <div className="margin">
            <div className="headers">
              <div className="left-headers">
                <Link to="/" className="name">
                  cindy zhang
                </Link>
              </div>
              <div className="filler"></div>
              <div className="right-headers">
                <Link to="/projects" className="header">
                  tech projects
                </Link>
                <Link to="/film" className="header">
                  life on film
                </Link>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://medium.com/@cindyzhang0718"
                  className="header"
                >
                  blog
                </a>
              </div>
            </div>
            <Route path="/film" component={Film} />
            <Route path="/projects" component={Projects} />
            <Route exact path="/" component={About} />
          </div>
        </div>
      </HashRouter>
    );
  }
}

const About = () => (
  <div className="about-body">
    <div className="about-header">
      <p>
        Hi! I'm <div className="about-mark"> Cindy.</div>
      </p>
    </div>
    <div className="about-subheader">
      <p>
        I'm a junior at UC Berkeley studying Business & Computer Science.
      </p>
    </div>
    <div className="about-paragraph">
      <p>
        I'm passionate about utilizing tech for social good and developing &
        launching meaningful products. Yay!
        <br />
        <br />
        Currently, I'm pursuing this through these roles:
        <br />
        <span>
          <div>
            🍔 Product Management Intern @{" "}
            <a
              className="about-link"
              target="_blank"
              rel="noopener noreferrer"
              href="https://8it.nyc"
            >
              8it
            </a>
          </div>
          👩‍💻 Full-Stack Developer @{" "}
          <a
            className="about-link"
            target="_blank"
            rel="noopener noreferrer"
            href="http://new.nbjc.org/"
          >
            National Black Justice Coalition
          </a>
          {/* <div className="about-indent"> */} through{" "}
          <a
            className="about-link"
            target="_blank"
            rel="noopener noreferrer"
            href="http://calblueprint.org"
          >
            Cal Blueprint
          </a>
          {/* </div> */}
          <br />✨ Honing my product skills @{" "}
          <a
            className="about-link"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.productspace.org/cal"
          >
            Cal Product Space
          </a>
        </span>
        <br />
        <br /> In my free time, I like to hack on side projects, surf, play
        around with my film camera, read memoirs, and bother my sister.
        <br /> <br /> In the past, I've worked on Marketing @ Reddit, Business
        Analytics @ Wish, and SWE @ Tech4Dev.
        <br />
        Find my full resume{" "}
        <a
          href="https://drive.google.com/file/d/17O0GvY1SnJ2uZZzviLx_5lcFHHAdsSiy/view?usp=sharing"
          className="about-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          here
        </a>{" "}
        and past projects{" "}
        <Link to="/projects" className="about-link">
          here
        </Link>
        .
        <br /> <br />
        <div className="about-icons">
          <a
            href="https://www.linkedin.com/in/cindyzhang7/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ReactSVG src={linkedin} />
          </a>
          <a
            href="https://github.com/cindyxzhang"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ReactSVG src={github} className="about-linkedin" />
          </a>
          <a
            href="mailto:cindyzhang7@berkeley.edu"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ReactSVG src={email} className="about-linkedin" />
          </a>
        </div>
      </p>
    </div>
  </div>
);

const Film = () => (
  <div className="film-center">
    <div className="film-header">my life, on film</div>
    <div className="film-subheader">
      coming soon, <br />
      <br /> currently playing around with my first roll of film - having lots
      of fun!
    </div>
  </div>
);

const Projects = () => (
  <div className="projects-center">
    <div className="projects-header">tech projects</div>
    <div className="projects-subheader">
      <p>
        find my resume{" "}
        <a
          className="about-link"
          target="_blank"
          rel="noopener noreferrer"
          href="https://drive.google.com/file/d/17O0GvY1SnJ2uZZzviLx_5lcFHHAdsSiy/view?usp=sharing"
        >
          here
        </a>
        <br /> <br />a comprehensive list of projects that have shaped my
        passions and interests
      </p>
    </div>
    <div className="project-list">
      <div className="project-background">
        <div className="project-padding">
          <div className="project-header">
            <span>💬 Glific (Tech4Dev) Web App</span>
          </div>
          <div className="project-pic">
            <img src={glific} className="project-picsize" />
          </div>
          <div className="project-desc">
            <a
              className="project-link project-rightmargin"
              href="https://chintugudiya.org/tech4dev/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Glific
            </a>
            is an open-source, two-way communication platform that allows
            non-profits to communicate with their beneficiaries at scale (100+)
            in an intuitive manner.
            <br />
            <br />
            For this web app, I built the login, registration, and forgot
            password flows/pages. I also worked on the Staff Management page
            displayed above. To accomplish this, I worked with the backend team
            to design data schemas, and designers to consistently give feedback
            for frontend pages.
            <br />
            <br />
            You can find a report I wrote about my internship{" "}
            <a
              className="project-link"
              href="https://chintugudiya.org/blog/summer-intern-report-from-cindy-z/"
              target="_blank"
              rel="noopener noreferrer"
            >
              here
            </a>
            !
            <br />
            <br />
            <div className="project-techstack">
              Tech stack: Typescript, HTML/CSS, GraphQL, PostgreSQL, Axios,
              Jest/Enzyme, Formik, Material UI
            </div>
          </div>
        </div>
      </div>
      <div className="project-background">
        <div className="project-padding">
          <div className="project-header">
            <span>☀️ People Power Solar Cooperative Web App</span>
          </div>
          <div className="project-pic">
            <img src={ppower} className="project-picsize" />
          </div>
          <div className="project-desc">
            <a
              className="project-link project-rightmargin"
              href="https://www.peoplepowersolar.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              People Power Solar Cooperative
            </a>
            is building a movement toward expanding access to affordable
            residential solar power in California. To do so, they crowdsource
            investments from low-income communities to install solar panels on
            homes and then distribute any revenue generated by the solar panels
            back to the community as dividend.
            <br />
            <br />
            For this web app, I built the 'My Investment' page seen above to
            help users keep track of where their money is going, and allowing
            them to buy dividends through PayPal integration. I also worked on
            building/styling various smaller features on other pages.
            <br />
            <br />
            <div className="project-techstack">
              Tech stack: React JS, HTML/CSS, Airtable
            </div>
          </div>
        </div>
      </div>
      <div className="project-background">
        <div className="project-padding">
          <div className="project-header">
            <span>❤️ We're Not Really Strangers Web App</span>
          </div>
          <div className="project-pic">
            <img src={wnrs} className="project-picsize" />
          </div>
          <div className="project-desc">
            <a
              className="project-link project-rightmargin"
              href="https://www.werenotreallystrangers.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              We're Not Really Strangers
            </a>
            is a card game that aims to create meaningful connections between
            the players. The idea to build this came from us frequently playing
            over video during quarantine to stay in touch, but was too difficult
            to do so virtually.
            <br />
            <br />
            For this web app, I am mostly organizing our web features and
            helping the developers pick up React, as well as building pages
            throughout the app.
            <br />
            <br />
            <div className="project-techstack">
              Tech stack: React JS, HTML/CSS, Airtable
            </div>
          </div>
        </div>
      </div>
      <div className="project-background">
        <div className="project-padding">
          <div className="project-header">
            <span>🛒 Cue Phone App</span>
          </div>
          <div className="project-pic">
            <YouTube
              className="project-video"
              videoId="BXPLctsDd0U"
              width="40%"
            />
          </div>
          <div className="project-desc">
            <a
              className="project-link project-rightmargin"
              href="https://devpost.com/software/cue-eio0ar"
              target="_blank"
              rel="noopener noreferrer"
            >
              Cue
            </a>
            is a phone app made at hack:now by CalHacks to allow grocery stores
            to make online queues to keep track of capacity, allocate resources,
            etc. to reduce COVID transmission. Users are able to check amount of
            people in line, rate stores based on efforts to reduce transmission,
            and add themselves to lines.
            <br />
            <br />
            <div className="project-techstack">
              Tech stack: React Native, HTML/CSS
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default App;
