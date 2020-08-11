import React from "react"

const Stories = [
  {
    flag: "Scrum Master",
    teamSize: "30 software engineers",
    budget: "$4M per annum",
    tools: "Jira, Confluence, Fun Retro",
    description: (
      <React.Fragment>
        <span>
          <b>One of Challenges:</b> Lack of ownership within development team
        </span>
        <br />
        <span>
          <b>Approach:</b> retrospectives for each team individually and look
          for patterns
        </span>
        <br />
        <span>
          <b>Wrinkle:</b> reluctance to share negative feedback openly
        </span>
        <br />
        <span>
          <b>Final solution:</b> introduction of funretro.io for sharing
          anonymous opinions. Dedicated JIRA Kanban board to show progress on
          retro-driven actions. Retros would start with summary of progress on
          previous meeting’s findings.
        </span>
      </React.Fragment>
    ),
  },
  {
    flag: "Project Manager",
    teamSize: "2 DevOps engineers",
    budget: "100k",
    tools: "Jira, Confluence",
    description: (
      <React.Fragment>
        <span>
          <b>One of Challenges:</b> tight budget despite using a T&M contract
        </span>
        <br />
        <span>
          <b>Approach:</b> carefully plan and update assumptions & estimates
        </span>
        <br />
        <span>
          <b>Solution:</b> contract detailed assumptions about client's
          infrastructure and environment. We kicked-off with a three day
          discovery after which estimates were updated as they subsequently were
          during each week's planning. Burn rate and projected budget variance
          were shared in daily reports with Client. Remaining scope estimates
          were presented on weekly Client calls.
        </span>
      </React.Fragment>
    ),
  },
  {
    flag: "Program Manager",
    teamSize: "3 Project Managers",
    budget: "internal projects",
    tools: "Ms Office",
    description: (
      <React.Fragment>
        <span>
          <b>One of Challenges:</b> Ensure visibility of progress on key
          projects
        </span>
        <br />
        <span>
          <b>Approach:</b> explore key stakeholders’ expectations and involve
          them in building reporting
        </span>
        <br />
        <span>
          <b>Solution:</b> Reporting framework consisting of bi-weekly calls,
          bi-weekly distributed dashboard with RAG lights for each project and
          agreed info: latest progress, roadblocks, next milestone, budget
          variance, escalation needs.
        </span>
      </React.Fragment>
    ),
  },
  {
    flag: "Film Producer",
    teamSize: "10 actors, 3 film crew",
    budget: "shoestring",
    tools: "Paper, megaphone",
    description: (
      <React.Fragment>
        <span>
          <b>Background:</b> we were shooting a video for a sock brand
        </span>
        <br />
        <span>
          <b>One of Challenges:</b> how to (cheaply) turn a camping site into a
          military base and portray students (actors) as military personnel
        </span>
        <br />
        <span>
          <b>Solution:</b> we hired a military enthusiast organising airsoft
          battles to camouflage camp houses as barracks, provide guns and create
          backdrops for scenes. We dressed everyone the part. We shot in
          multiple locations including a shooting range. Follow the{" "}
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
