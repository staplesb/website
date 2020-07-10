import React from "react";
import ProjectComponent from "./components/projectComponent";
import Roguelike from "./assets/roguelike.png";
import AStar from "./assets/AStar Implementation.png";
import ChatApp from "./assets/chatApp.png";
import BinarySearch from "./assets/BinarySearchTree.png";
import MatrixSort from "./assets/MatrixSort.png";
import SocialNetwork from "./assets/SocialNetwork.png";
import PingPong from "./assets/pingpong.png";
import Clock from "./assets/clock.png";

function Projects() {
  return (
    <div className="container">
      <div className="row p-5 justify-content-center border-bottom">
        <div className="card-columns">
          <div className="card-secondary my-3 mx-auto d-inline-block">
            <div className="card-header">
              <h2>Hex Based Rogue-like</h2>
            </div>
            <div className="card-body">
              <img
                className="card-img-top my-2"
                src={Roguelike}
                alt="hex based roguelike"
              />
              <div className="border-top" />
              <p>
                For this project, I worked in a team of 3 to design and
                implement a 2D game. I led the group when we were designing the
                game and was in charge of implementing the core mechanics and
                game play. This project was done using unity and scripts were
                written in C#.
              </p>
            </div>
            <div className="card-footer text-center">
              <a
                className="text-white"
                href="https://hexroguelike.netlify.app/"
                target="_blank"
              >
                <button className="btn-lg btn-dark m-3">Play</button>
              </a>
              <a
                className="text-white"
                href="https://github.com/staplesb/portfolio/tree/master/Hex%20based%20Rogue-like"
                target="_blank"
              >
                <button className="btn-lg btn-dark m-3">Source Code</button>
              </a>
            </div>
          </div>
          <ProjectComponent
            header="Implementing A* Pathfinding"
            src={AStar}
            txt="For this project, I implemented A* using a text file with a list
                      of the nodes seen in the image to the left. At the end of the
                      file, there were several request to go from one destination to
                      another. Using the A* algorithm, the program would find a short
                      and feasible path to the destination. Written in Java."
            href="https://github.com/staplesb/portfolio/tree/master/Implementing%20A*"
          />
          <ProjectComponent
            header="Chat Application"
            src={ChatApp}
            txt="For this project, I implemented A* using a text file with a list
                      of the nodes seen in the image to the left. At the end of the
                      file, there were several request to go from one destination to
                      another. Using the A* algorithm, the program would find a short
                      and feasible path to the destination. Written in Java."
            href="https://github.com/staplesb/portfolio/tree/master/chat%20app"
          />
          <ProjectComponent
            header="Binary Search Tree"
            src={BinarySearch}
            txt="This purpose of this project was to gain a better understanding
            of dynamic programming and implement a BST. This program
            produced a dynamic programming table and the corresponding BST.
            Written in Java."
            href="https://github.com/staplesb/portfolio/tree/master/binarysearchtree"
          />
          <ProjectComponent
            header="Sorting a Matrix"
            src={MatrixSort}
            txt="The purpose of this project was to gain a better understanding
            of sorting. This program would take a matrix and sort it in two
            different ways using quicksort. Written in Java."
            href="https://github.com/staplesb/portfolio/tree/master/sortmatrix"
          />
          <ProjectComponent
            header="Social Network"
            src={SocialNetwork}
            txt="This project is the culmination of several smaller projects over
            the course of a semester. The program is an example of
            the potential data structure of a social network. Written in
            C++."
            href="https://github.com/staplesb/portfolio/tree/master/socialnetworking"
          />
          <ProjectComponent
            header="Pong"
            src={PingPong}
            txt="This project is the commonly known game pong. As one of my
            earlier project, this program lacks the use of classes and
            object, but in terms of finish, this program was more focused
            on user experience than some of the more recent project. Written
            in Java."
            href="https://github.com/staplesb/portfolio/tree/master/pingpong"
          />
          <ProjectComponent
            header="Clock Graph"
            src={Clock}
            txt="This project displays the current time as bar graph. As time
            progressed the graph also changes color as a gradient. Similarly
            with the above project, this project is more of a finished user
            end project. Written in Java."
            href="https://github.com/staplesb/portfolio/tree/master/clock%20widget"
          />
        </div>
      </div>
    </div>
  );
}

export default Projects;
