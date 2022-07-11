import {
    SiPython,
    SiPostgresql,
    SiMicrosoftsqlserver,
    SiDocker,
    SiMicrosoftazure,
    SiRedis,
    SiReact,
    SiJavascript,
    SiCss3,
    SiHtml5,
    SiWindowsterminal,
    SiSnowflake,
    SiApacheairflow,
    SiApachekafka,
    SiPowerbi,

    SiSqlite,
    SiTableau,
    SiHeroku,
    SiStreamlit,
    SiLinux,
    SiGithub,
    SiGitlab,
    SiJupyter,
    SiPlotly,
    SiDatabricks,
    SiGit,
    SiStatamic,
    SiTensorflow
} from "react-icons/si";
import {GiBeaver, GiRadialBalance, GiSwordsPower} from "react-icons/gi";
import {GrMysql, GrTask} from "react-icons/gr";
import {FaGitAlt, FaPeopleCarry, FaBalanceScale, FaRegComments} from "react-icons/fa";
import {MdOutlineAnalytics} from "react-icons/md";
import {GoTasklist} from "react-icons/go";

import React from "react";

const skillsConfig = {
    mainSkills: [
        {
            id: "skills-0",
            className: "skill-icon",
            icon: <SiPython size={30}/>,
            text: "Python"
        },
        {
            id: "skills-1",
            className: "skill-icon",
            icon: <SiJupyter size={30}/>,
            text: "Jupyter"
        },
        // {
        //     id: "skills-2",
        //     className: "skill-icon",
        //     icon: <SiPlotly size={30}/>,
        //     text: "Plotly"
        // },
        {
            id: "skills-3",
            className: "skill-icon",
            icon: <SiGit size={30}/>,
            text: "Git"
        },
        {
            id: "skills-4",
            className: "skill-icon",
            icon: <SiGithub size={30}/>,
            text: "Github"
        },
        {
            id: "skills-5",
            className: "skill-icon",
            icon: <SiGitlab size={30}/>,
            text: "Gitlab"
        },
        {
            id: "skills-5",
            className: "skill-icon",
            icon: <SiStreamlit size={30}/>,
            text: "Streamlit"
        },
        {
            id: "skills-5",
            className: "skill-icon",
            icon: <SiSqlite size={30}/>,
            text: "Sqlite"
        }
    ],
    complementarySkills: [
        {
            id: "skills-5",
            className: "skill-icon",
            icon: <SiTableau size={30}/>,
            text: "Tableau"
        },
        {
            id: "skills-6",
            className: "skill-icon",
            icon: <SiPowerbi size={30}/>,
            text: "PowerBI"
        },
        {
            id: "skills-7",
            className: "skill-icon",
            icon: <SiLinux size={30}/>,
            text: "Linux"
        },
        {
            id: "skills-8",
            className: "skill-icon",
            icon: <SiDocker size={30}/>,
            text: "Docker"
        },
        {
            id: "skills-9",
            className: "skill-icon",
            icon: <SiDatabricks size={30}/>,
            text: "Databricks"
        },
        {
            id: "skills-10",
            className: "skill-icon",
            icon: <SiTensorflow size={30}/>,
            text: "TensorFlow"
        }
        // ,
        // {
        //     id: "skills-11",
        //     className: "skill-icon",
        //     icon: <SiCss3 size={30}/>,
        //     text: "CSS 3"
        // },
        // {
        //     id: "skills-12",
        //     className: "skill-icon",
        //     icon: <SiHtml5 size={30}/>,
        //     text: "HTML 5"
        // },
        // {
        //     id: "skills-13",
        //     className: "skill-icon",
        //     icon: <SiReact size={30}/>,
        //     text: "React"
        // }
        // ,
        // {
        //     id: "skills-14",
        //     className: "skill-icon",
        //     icon: <SiApachekafka size={30}/>,
        //     text: "Kafka"
        // }
    ],
    softSkills: [
        {
            id: "skills-16",
            className: "skill-icon",
            icon: <MdOutlineAnalytics size={30}/>,
            text: "Analytical Profile"
        },
        {
            id: "skills-17",
            className: "skill-icon",
            icon: <GoTasklist size={30}/>,
            text: "Problem Solving"
        },
        {
            id: "skills-7",
            className: "skill-icon",
            icon: <FaPeopleCarry size={30}/>,
            text: "Team Player"
        },
        {
            id: "skills-8",
            className: "skill-icon",
            icon: <GiRadialBalance size={30}/>,
            text: "Adaptability"
        },
        {
            id: "skills-9",
            className: "skill-icon",
            icon: <FaRegComments size={30}/>,
            text: "Ease Communication"
        },
        // {
        //     id: "skills-10",
        //     className: "skill-icon",
        //     icon: <SiJavascript size={30}/>,
        //     text: "Responsibility"
        // },
        {
            id: "skills-11",
            className: "skill-icon",
            icon: <FaBalanceScale size={30}/>,
            text: "Integrity"
        },
        {
            id: "skills-12",
            className: "skill-icon",
            icon: <GiSwordsPower size={30}/>,
            text: "Work Under Pressure"
        }
    ]
}

export default skillsConfig
