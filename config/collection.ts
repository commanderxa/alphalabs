export type CollectionConfig = typeof collectionConfig;

export const collectionConfig = {
  groups: [
    {
      name: "Kinematics",
      description: "Kinematics is the branch of mechanics that focuses on describing the motion of objects without considering the forces that cause this motion. It deals with parameters such as displacement (change in position), velocity (rate of change of position), and acceleration (rate of change of velocity). By analyzing these parameters, kinematics provides a framework to predict future motion based on initial conditions.",
      simulations: [
        {
            name: "1D Motion",
            description: "Explores linear motion along a single axis, illustrating concepts like uniform motion and constant acceleration.",
            img: "kinematics_1.png",
            href: "https://colab.research.google.com/github/commanderxa/alphalabs/blob/main/mechanics/kinematics/1d_motion.ipynb"
        },
        {
            name: "2D Motion",
            description: "Examines motion in a plane, including projectile motion and the independence of horizontal and vertical components.",
            img: "kinematics_2.png",
            href: "https://colab.research.google.com/github/commanderxa/alphalabs/blob/main/mechanics/kinematics/2d_motion.ipynb"
        },
        {
            name: "Free Fall",
            description: "Demonstrates the motion of objects under the influence of gravity alone, highlighting acceleration due to gravity.",
            img: "kinematics_3.png",
            href: "https://colab.research.google.com/github/commanderxa/alphalabs/blob/main/mechanics/kinematics/free_fall.ipynb"
        },
      ]
    },
    {
      name: "Dynamics",
      description: "Dynamics extends beyond the description of motion to explore the causes behind it, primarily focusing on forces and torques. It is grounded in Newton's Laws of Motion, which relate the motion of an object to the forces acting upon it. Dynamics enables us to understand how interactions between objects influence their motion, providing insights into phenomena ranging from the motion of celestial bodies to the behavior of engineered systems.",
      simulations: [
        {
            name: "Newton's First Law",
            description: "Illustrates the principle of inertia, showing how objects remain at rest or in uniform motion unless acted upon by an external force.",
            img: "dynamics_1.png",
            href: "https://colab.research.google.com/github/commanderxa/alphalabs/blob/main/mechanics/dynamics/newton_law_1.ipynb"
        },
        {
            name: "Newton's Second Law",
            description: "Demonstrates the relationship between force, mass, and acceleration, emphasizing how force influences motion.",
            img: "dynamics_2.png",
            href: "https://colab.research.google.com/github/commanderxa/alphalabs/blob/main/mechanics/dynamics/newton_law_2.ipynb"
        },
        {
            name: "Newton's Third Law",
            description: "Explores action-reaction force pairs, showing how forces between two objects are equal in magnitude and opposite in direction.",
            img: "dynamics_3.png",
            href: "https://colab.research.google.com/github/commanderxa/alphalabs/blob/main/mechanics/dynamics/newton_law_3.ipynb"
        },
        {
            name: "Center of Mass",
            description: "Examines the Center of Mass on randomly distributed objects in space with random masses.",
            img: "dynamics_4.png",
            href: "https://colab.research.google.com/github/commanderxa/alphalabs/blob/main/mechanics/dynamics/center_of_mass.ipynb"
        },
      ]
    },
    {
      name: "Momentum",
      description: "Momentum is a fundamental concept that quantifies the motion of an object, defined as the product of its mass and velocity. It is a vector quantity, possessing both magnitude and direction. The principle of conservation of momentum states that in a closed system with no external forces, the total momentum remains constant. This principle is crucial in analyzing interactions such as collisions, where understanding momentum transfer helps predict post-collision velocities and directions.",
      simulations: [
        {
            name: "Collisions",
            description: "Investigates elastic and inelastic collisions, emphasizing the conservation of momentum and energy transfer during interactions.",
            img: "momentum_1.png",
            href: "https://colab.research.google.com/github/commanderxa/alphalabs/blob/main/mechanics/momentum/collisions.ipynb"
        },
      ]
    },
    {
      name: "Statics",
      description: "Statics is the study of systems in equilibrium, where all forces and torques are balanced, resulting in no net motion. It involves analyzing how forces are distributed within structures to ensure they can withstand applied loads without moving. Statics is fundamental in engineering and architecture, as it ensures the stability and integrity of structures ranging from bridges to buildings.",
      simulations: [
        {
            name: "Lever",
            description: "Explores the mechanics of levers, demonstrating how forces and distances influence rotational equilibrium.",
            img: "statics_1.png",
            href: "https://colab.research.google.com/github/commanderxa/alphalabs/blob/main/mechanics/statics/lever.ipynb"
        },
        {
            name: "Inclined Plane",
            description: "Examines the forces acting on objects on a slope, including gravitational components and normal force, to understand equilibrium conditions.",
            img: "statics_2.png",
            href: "https://colab.research.google.com/github/commanderxa/alphalabs/blob/main/mechanics/statics/inclined_plane.ipynb"
        },
      ]
    },
  ],
};
