import React from "react"

const Stories = [
  {
    img: "gauge.jpeg",
    flag: "Scrum Master",
    teamSize: "30 software engineers",
    budget: "$4M per annum",
    tools: "Jira, Confluence, Fun Retro",
    description: (
      <React.Fragment>
        <p> · One of Challenges:</p>
        <span>Team of great people showing not so great results</span>
        <br />
        <p> · Approach:</p>
        <span>
          Retrospectives for each team individually and look for patterns
        </span>
        <br />
        <p> · Wrinkle:</p>
        <span> Reluctance to share negative feedback openly</span>
        <br />
        <p> · Final solution:</p>
        <span>
          Introduction of funretro.io for sharing anonymous opinions. Dedicated
          JIRA Kanban board to show progress on retro-driven actions. Retros
          would start with summary of progress on previous meeting’s findings.
        </span>
      </React.Fragment>
    ),
  },
  {
    img: "tape-measure.jpeg",
    flag: "Project Manager",
    teamSize: "2 DevOps engineers",
    budget: "100k",
    tools: "Jira, Confluence",
    description: (
      <React.Fragment>
        <p> · One of Challenges:</p>
        <span>Tight budget despite using a T&M contract</span>
        <br />
        <p> · Approach:</p>
        <span>Carefully plan and update assumptions & estimates</span>
        <br />
        <p> · Solution:</p>
        <span>
          Contract detailed assumptions about client's infrastructure and
          environment. We kicked-off with a three day discovery after which
          estimates were updated as they subsequently were during each week's
          planning. Burn rate and projected budget variance were shared in daily
          reports with Client. Remaining scope estimates were presented on
          weekly Client calls.
        </span>
      </React.Fragment>
    ),
  },
  {
    img: "traffic-light.jpeg",
    flag: "Program Manager",
    teamSize: "3 Project Managers",
    budget: "internal projects",
    tools: "Ms Office",
    description: (
      <React.Fragment>
        <p> · One of Challenges:</p>
        <span>Ensure visibility of progress on key projects</span>
        <br />
        <p> · Approach:</p>
        <span>
          explore key stakeholders’ expectations and involve them in building
          reporting
        </span>
        <br />
        <p> · Solution:</p>
        <span>
          Reporting framework consisting of bi-weekly calls, bi-weekly
          distributed dashboard with RAG lights for each project and agreed
          info: latest progress, roadblocks, next milestone, budget variance,
          escalation needs.
        </span>
      </React.Fragment>
    ),
  },
  {
    img: "kapitan.jpg",
    flag: "Film Producer",
    teamSize: "10 actors, 3 film crew",
    budget: "shoestring",
    tools: "Paper, megaphone",
    description: (
      <React.Fragment>
        <p> · Background:</p>
        <span>We were shooting a video for a sock brand</span>
        <br />
        <p> · One of Challenges:</p>
        <span>
          How to (cheaply) turn a camping site into a military base and portray
          students (actors) as military personnel
        </span>
        <br />
        <p> · Solution:</p>
        <span>
          We hired a military enthusiast organising airsoft battles to
          camouflage camp houses as barracks, provide guns and create backdrops
          for scenes. We dressed everyone the part. We shot in multiple
          locations including a shooting range. Follow the{" "}
          <a
            href="https://www.youtube.com/watch?v=mrkucqLZxc0"
            target="_blank"
            rel="noopener noreferrer"
          >
            link
          </a>{" "}
          for end result.
        </span>
      </React.Fragment>
    ),
  },
]

export default Stories
