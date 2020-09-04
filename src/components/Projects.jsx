import React from "react";

const Projects = () => {
  return (
    <div className="projects">
      <div class="row">
        <div class="column">
          <div class="card">
            <h3>Internship Project</h3>
            <p>
              Building a system for Sky AKademie Berlin for managing courses and
              clients using LAMP stack.
            </p>
          </div>
        </div>
        <div class="column">
          <div class="card">
            <h3>Posts Manager App</h3>
            <p>
              React App for managing posts by users and it includes with
              authentication
            </p>
            <a href="https://mohammadkharma.github.io/Posts_Manager_App/index.html">
              Go
            </a>
          </div>
        </div>

        <div class="column">
          <div class="card">
            <h3>Todo App</h3>
            <p>Todo App using MERN stack</p>
            <a href="https://mohammadkharma.github.io/MERN-Todo-App/">Go</a>
          </div>
        </div>

        <div class="column">
          <div class="card">
            <h3>Blogging App</h3>
            <p>A simple React Blogging App</p>
            <a href="https://mohammadkharma.github.io/Blogging_App/">Go</a>
          </div>
        </div>

        <div class="column">
          <div class="card">
            <h3>React Router</h3>
            <p>Practicing React Router & Redux</p>
            <a href="https://mohammadkharma.github.io/">Go</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
