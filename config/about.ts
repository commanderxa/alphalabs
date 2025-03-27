export type AboutConfig = typeof aboutConfig;

export const aboutConfig = {
  groups: [
    {
      name: "Project",
      text: "AlphaLabs is an interactive platform built to enhance the physics learning experience for university students. It offers pre-laboratory simulations that visually demonstrate physics concepts and prepare students for hands-on labs. While these simulations are primerily designed for students majoring in Computer Science or for those who studied programming, any invidual who wants to utilize these simulations is welcomed too.",
    },
    {
      name: "Team",
      text: "The team was composed of a student and a physics professor from Astana IT University.",
    },
    {
      name: "License",
      text: "AlphaLabs is licensed under the Apache License 2.0. You are free to use, modify, and distribute the software even for commercial use.",
    },
  ],
  publications: {
    name: "Publications",
    content: [
      {
        name: "Physical Simulations in Educational Process for IT majors from Students Perspective",
        link: "https://doi.org/10.1109/IEEECONF61558.2024.10585505",
      },
      {
        name: "Coming soon!",
        link: "",
      },
    ],
  },
  faq: {
    name: "Frequently Asked Questions",
    content: [
      {
        question: "Who is AlphaLabs for?",
        answer:
          "AlphaLabs is designed primarily for university students studying physics courses, however, it is openly available to anyone who is interested in simulating physical phenomena.",
      },
      {
        question: "What topics are covered in the simulations?",
        answer:
          "AlphaLabs currently includes topics from classical mechanics such as kinematics, dynamics, momentum, and statics. Each topic includes multiple hands-on simulations to help students prepare for lab sessions.",
      },
      {
        question: "Is AlphaLabs a replacement for physical labs?",
        answer:
          "No. AlphaLabs is meant to supplement lab sessions, not replace them. It provides a conceptual and visual foundation so students can arrive at labs better prepared and more confident in applying theory.",
      },
      {
        question: "What is Google Colab?",
        answer:
          "Google Colab is a free cloud-based environment that allows you to write and execute Python code in your browser. AlphaLabs simulations are hosted there so students can run and interact with experiments without setup or installation.",
      },
      {
        question: "Do I need to install anything to use the simulations?",
        answer:
          "No installation is required. Simulations run in your web browser through Google Colab. All you need is internet access and a modern browser. There is an option to run simulations locally too.",
      },
      {
        question: "Do I need a Google account to use Colab?",
        answer:
          "Yes, you need to be signed into a Google account to run and save your own copies of the simulations on Colab. Without an account, you can still view the notebooks, but you won’t be able to interact with them fully.",
      },
      {
        question: "Can I download the notebooks and run them offline?",
        answer:
          "Yes, however you need to download the whole repository since Jupyter Notebooks call code that is located in repository folder, but not in the notebook itself. After cloning the repo you can run simulations locally using Jupyter Notebook or other compatible environments, but you need to install dependencies manually beforehand.",
      },
      {
        question: "Is there a way to track student progress or completion?",
        answer:
          "Currently, AlphaLabs does not include a built-in progress tracking system. However, instructors can ask students to submit reports to demonstrate their work.",
      },
      {
        question: "Do the simulations work on mobile devices or tablets?",
        answer:
          "While Google Colab does support mobile devices, the experience may be limited. For full interactivity and ease of use, we recommend using a desktop or laptop computer.",
      },
    ],
  },
};
