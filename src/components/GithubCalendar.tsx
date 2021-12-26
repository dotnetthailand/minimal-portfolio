import React, { useEffect, useState } from "react";
import initialGitHubCalendar from 'github-calendar';
import styled from 'styled-components';
import config from "../../data/SiteConfig";
import "../themes/github-calendar-responsive.css";
import { onTablet, breakpoints } from "../themes/responsive";

const GitHubCalendar = (props: any) => {
  const { children } = props;
  const [windowWidth, setWindowWidth] = useState<number>(500);

  useEffect(() => {
    initialGitHubCalendar(".calendar", config.GitHub.username, { responsive: true });

    // Handler to call on window resize
    function handleResize() {
      const isDesktop = breakpoints.large <  window.innerWidth? true: false;
      const width = isDesktop ? 500: window.innerWidth - 50 ;
      setWindowWidth(width);
      console.log(`current width: ${width},  ${isDesktop}`)
    }
    // Add event listener
    window.addEventListener("resize", handleResize);
    // Call handler right away so state gets updated with initial window size
    handleResize();
    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);

  }, []);

  return (
    <GitHubCalendarContainer>
      <div className="calendar" style={{width: windowWidth}}/>
    </GitHubCalendarContainer>
  );
};

export const GitHubCalendarContainer = styled.div`

  .calendar{

    .graph-before-activity-overview{
      padding: 13px;
    }
    .contrib-number{
      font-size: 18px;
      color: inherit;
    }
    .float-right.color-fg-muted{
      font-size: 10px; 
      padding-bottom: 10px;
    }
  }

`;


export default GitHubCalendar;