import {BiGitRepoForked} from "react-icons/bi";
import {AiFillGithub, AiFillEye} from "react-icons/ai";
import {ImBook} from "react-icons/im";
import {MdRealEstateAgent} from "react-icons/md"
import {FaTelegramPlane, FaKaggle} from "react-icons/fa";
import {SiTableau} from "react-icons/si"

import sklearnGenetic from "../images/sklearn_genetic_opt.png"
import kafkaMl from "../images/kafkaml.png"
import scikitPipes from "../images/scikit_pipes.png"
import portfolio from "../images/portfolio.png"

import road_safety from "../images/road_safety.png"
import rossmann from "../images/rossmann.jpg"
import hackday from "../images/hackday.png"
import housesale from "../images/housesale.jpg"
import mcars from "../images/mcars.jpg"
import tableaulk from "../images/tableaulk.png"



import React from 'react'

const projectConfig = [
    // {
    //     id: "project-4",
    //     title: "Sklearn Genetic Opt",
    //     links: [
    //         {
    //             name: "repo",
    //             url: "https://github.com/rodrigo-arenas/Sklearn-genetic-opt",
    //             icon: <AiFillGithub/>,
    //         },
    //         {
    //             name: "fork",
    //             url: "https://github.com/rodrigo-arenas/Sklearn-genetic-opt/fork",
    //             icon: <BiGitRepoForked/>,
    //         },
    //         {
    //             name: "subscription",
    //             url: "https://github.com/rodrigo-arenas/Sklearn-genetic-opt/subscription",
    //             icon: <AiFillEye/>,
    //         },
    //         {
    //             name: "docs",
    //             url: "https://sklearn-genetic-opt.readthedocs.io/en/stable/",
    //             icon: <ImBook/>,
    //         }
    //     ],
    //     image: sklearnGenetic,
    //     description: "scikit-learn models hyperparameters tuning and feature selection, using evolutionary algorithms.",
    //     target: "_blank"
    // },
    {
        id: "project-5",
        title: "Hackday 2nd Edition",
        links: [
            {
                name: "repo",
                url: "https://github.com/leassis91/mobilitycars/",
                icon: <AiFillGithub/>
            },
            {
                name: "fork",
                url: "https://github.com/leassis91/mobilitycars/fork",
                icon: <BiGitRepoForked/>
            },
            {
                name: "subscription",
                url: "https://github.com/leassis91/mobilitycars/subscription",
                icon: <AiFillEye/>
            },
            {
                name: "kaggle-comp",
                url: "https://www.kaggle.com/competitions/mobilitycars/overview",
                icon: <FaKaggle/>
            }
        ],
        image: mcars,
        description: "It's Hackathon again! #Hackday is a 2-day live competition held by Comunidade DS. The goal set for this one was to develop a regression model, based on the history of vehicle sales values practiced throughout Brazil. We now managed to finish in 2nd place!",
        target: "_blank"
    },
    {
        id: "project-4",
        title: "LinkedIn Data Analysis",
        links: [
            {
                name: "repo",
                url: "https://public.tableau.com/app/profile/leandrodestefani/viz/LinkedInDataAnalysis_16608723114230/Dashboard1",
                icon: <SiTableau/>
            }
            // {
            //     name: "fork",
            //     url: "https://github.com/leassis91/rossmann_store/fork",
            //     icon: <BiGitRepoForked/>
            // },
            // {
            //     name: "subscription",
            //     url: "https://github.com/leassis91/rossmann_store/subscription",
            //     icon: <AiFillEye/>
            // },
            // {
            //     name: "",
            //     url: "https://t.me/rossmannleassis_bot",
            //     icon: <FaTelegramPlane/>
            // }
        ],
        image: tableaulk,
        description: "Visualization Project with Tableau. Brief analysis of my LinkedIn Profile Data, using some tools like Python (Pandas), MS Excel, Figma and, of course, Tableau.",
        target: "_blank"
    },
    {
        id: "project-3",
        title: "Rossmann Store Sales",
        links: [
            {
                name: "repo",
                url: "https://github.com/leassis91/rossmann_store/",
                icon: <AiFillGithub/>
            },
            {
                name: "fork",
                url: "https://github.com/leassis91/rossmann_store/fork",
                icon: <BiGitRepoForked/>
            },
            {
                name: "subscription",
                url: "https://github.com/leassis91/rossmann_store/subscription",
                icon: <AiFillEye/>
            },
            {
                name: "telegram-bot",
                url: "https://t.me/rossmannleassis_bot",
                icon: <FaTelegramPlane/>
            }
        ],
        image: rossmann,
        description: "Project designed to make an assertive prediction of the sales of each store (over 3,000), up to 6 weeks in advance. Future sales can be accessed from a Telegram Bot.",
        target: "_blank"
    },
    {
        id: "project-2",
        title: "Hackday Competition",
        links: [
            {
                name: "repo",
                url: "https://github.com/leassis91/hackday_ds/",
                icon: <AiFillGithub/>
            },
            {
                name: "fork",
                url: "https://github.com/leassis91/hackday_ds/fork",
                icon: <BiGitRepoForked/>
            },
            {
                name: "subscription",
                url: "https://github.com/leassis91/hackday_ds/subscription",
                icon: <AiFillEye/>
            },
            {
                name: "kaggle-comp",
                url: "https://www.kaggle.com/competitions/inclusao-financeira-na-africa",
                icon: <FaKaggle/>
            }
        ],
        image: hackday,
        description: "Live competition held by Comunidade DS. The goal was to develop a ML model in order to predict whether users would have a bank account. My team managed to end up in 3rd place.",
        target: "_blank"
    },
    {
        id: "project-1",
        title: "Road Safety",
        links: [
            {
                name: "repo",
                url: "https://github.com/leassis91/Portfolio_Projects/blob/main/Insights_Projects/Accidents/",
                icon: <AiFillGithub/>
            },
            {
                name: "fork",
                url: "https://github.com/leassis91/Portfolio_Projects/blob/main/Insights_Projects/Accidents/",
                icon: <BiGitRepoForked/>
            },
            {
                name: "subscription",
                url: "https://github.com/leassis91/Portfolio_Projects/blob/main/Insights_Projects/Accidents/",
                icon: <AiFillEye/>
            }
            // {
            //     name: "docs",
            //     url: "https://pyworkforce.readthedocs.io/en/stable/",
            //     icon: <ImBook/>,
            // }
        ],
        image: road_safety,
        description: "UK Road Safety Team is looking into how they can reduce the number of fatal incidents. " +
            "Through mainly data exploration, a report was created to help our stakeholder to increase road safety, take actions to prevent them and save lives.",
        target: "_blank"
    },
    {
        id: "project-0",
        title: "House Rocket",
        links: [
            {
                name: "repo",
                url: "https://github.com/leassis91/Portfolio_Projects/tree/main/Insights_Projects/HouseRocketEDA",
                icon: <AiFillGithub/>
            },
            {
                name: "fork",
                url: "https://github.com/leassis91/HouseRocketApp/fork",
                icon: <BiGitRepoForked/>
            },
            {
                name: "subscription",
                url: "https://github.com/leassis91/HouseRocketApp/subscription",
                icon: <AiFillEye/>
            },
            {
                name: "dashboard",
                url: "https://leassis91-houserocketapp-dashboard-bxzs7g.streamlitapp.com/",
                icon: <MdRealEstateAgent/>
            }
        ],
        image: housesale,
        description: "Identification of properties below the average sale price and definition of the ideal resale price in order to maximize profit, " +
            " based on an exploratory data analysis. Check out the interactive dashboard.",
        target: "_blank"
    }
]

export default projectConfig