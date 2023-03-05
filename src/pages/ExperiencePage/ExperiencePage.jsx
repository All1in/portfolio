import React from "react";
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";

const ExperiencePage = () => {
    return (
        <div className="experience">
            <VerticalTimeline lineColor="#3e497a">
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="2018 - 2021"
                    iconStyle={{ background: "#3e497a", color: "#fff" }}
                    icon={<SchoolIcon />}
                >
                    <h3 className="vertical-timeline-element-title">
                        Igor Sikorsky Kyiv Polytechnic Institute
                    </h3>
                    <p> High School Diploma</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="2021-2022"
                    iconStyle={{ background: "#e9d35b", color: "#fff" }}
                    icon={<WorkIcon />}
                >
                    <h3 className="vertical-timeline-element-title">
                        Trainee FrontEnd developer
                    </h3>
                    <h4 className="vertical-timeline-element-subtitle">
                        Kiev, Ukraine
                    </h4>
                    <p>Cut the company's site web loading time by 40% by
                        optimizing the SPA bundle size, leading to better user
                        experience.
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="2021 - 2025"
                    iconStyle={{ background: "#3e497a", color: "#fff" }}
                    icon={<SchoolIcon />}
                >
                    <h3 className="vertical-timeline-element-title">
                        State University of Telecommunications
                    </h3>
                    <h4 className="vertical-timeline-element-subtitle">
                        Bachelor's Degree
                    </h4>

                    <p> Computer engineering</p>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </div>
    );
};

export default ExperiencePage;
