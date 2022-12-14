import styled from "styled-components";

export const SkillsContainer = styled.div`
  overflow: hidden;
  margin: 10vh 0;
  display: flex;
  justify-content: center;
  text-align: center;
  .pre > p {
    max-width: 70vw;
    margin: 0 auto;
  }
  hr {
    margin: 5vw 0;
    border: 1px solid var(--shine);
  }
  .all-skills {
    margin: 5vw 0;
  }
  .more {
    backdrop-filter: blur(10px);
    background-color: var(--transparent);
    border-radius: 10px;
    padding: 10px;
    color: var(--primary);
    p {
      color: var(--primary);
    }
  }
  button {
    background: none;
    border: 1px solid var(--shine);
    margin: 10px;
    border-radius: 10px;
    width: 80%;
    padding: 3vw;
    color: var(--shine);
  }
  button:hover {
    background: var(--shine);
    color: var(--primary);
  }
`;
export const SubSkills = styled.div`
  max-height: 350px;
  overflow: scroll;
  position: relative;
  margin: 0 15px;
  .skill {
    display: grid;
    grid-template-areas:
      "top-left top-right"
      "bottom-left bottom-right";
    align-items: center;
    justify-items: center;
    gap: 2vw;
  }
  .icon {
    grid-area: bottom-left;
  }
  .skill-name {
    grid-area: top-right;
    margin: 2vw;
  }
  .skill-description {
    grid-area: bottom-right;
    padding: 0 5vw;
  }
`;
