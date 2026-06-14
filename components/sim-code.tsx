"use client";

import { useMemo, useState } from "react";
import { Link, buttonVariants } from "@heroui/react";
import Image from "next/image";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

type StructureItem = {
  id: string;
  label: string;
  description: string;
  code: string[];
  image: string;
};

const simulationStructure: StructureItem[] = [
  {
    id: "setup",
    label: "Setup",
    description:
      "Configure the MuJoCo rendering backend, import libraries for physics simulation, media recording, numerical computation, and data visualization.",
    image: "/assets/home/preview_no_scene.jpg",
    code: [
      "%env MUJOCO_GL=egl",
      "from dm_control import mjcf",
      "import mediapy  # for video recording",
      "import numpy as np  # computations",
      "import seaborn as sns",
      "import matplotlib.pyplot as plt",
      "import matplotlib.ticker as ticker",
    ],
  },
  {
    id: "params",
    label: "Define parameters",
    description:
      "Set simulation flags, initial kinematic state, platform geometry, integrator type and timestep, render resolution, and experiment duration.",
    image: "/assets/home/preview_no_scene.jpg",
    code: [
      "IS_IDEAL = True",
      "V = 0  # initial velocity [m/s]",
      "A = 0.25  # acceleration [m/s^2]",
      "PLATFORM_LENGTH = 500",
      'INTEGRATOR = "RK4"',
      "INTEGRATOR_TIMESTEP = 0.001",
      "WIDTH = 1280",
      "HEIGHT = 720",
      "DPI = 600",
      "DURATION = 10  # (seconds)",
      "FRAMERATE = 60  # (Hz)",
    ],
  },
  {
    id: "scene",
    label: "Build scene model",
    description:
      "Construct the static environment as an MJCF model — a flat platform with configurable length, width, contact dimensionality, and friction. Attach the scene to the world body via a site.",
    image: "/assets/home/preview_scene.jpg",
    code: [
      "class Model(object):",

      "    def __init__(self, size, platform_length)",
      "        ...",
      '        self.model = mjcf.RootElement(model="model")',
      "        self.scene = Scene(",
      "            length=platform_length, width=2, ...",
      "        ),",
      "        self.scene_site = self.model.worldbody.add(",
      '            "site", pos=[0, 0, 0]',
      "        )",
      "        self.scene_site.attach(self.scene.model)",
      "        ...",
    ],
  },
  {
    id: "model",
    label: "Build object model",
    description:
      "Define the Box entity with its geometry, camera, and two degrees of freedom: a horizontal sliding joint and a vertical falling joint. Attach the box to the world model above the platform surface.",
    image: "/assets/home/preview_world.jpg",
    code: [
      "class Box(object):",
      "    def __init__(self, size, condim, friction)",
      '        self.model = mjcf.RootElement(model="box")',
      '        self.box = self.model.worldbody.add("body", ...)',
      '        self.box_geom = self.box.add("geom", ...)',
      '        self.camera = self.box.add("camera", ...)',
      '        self.move = self.box.add("joint", ...)',
      '        self.fall = self.box.add("joint", ...)',
      "...",
      "class Model(object):",
      "    def __init__(self, size, platform_length)",
      "        ...",
      "        self.box = Box(size, self.condim, self.friction)",
      '        box_site = self.model.worldbody.add("site", ...)',
      "        box_site.attach(self.box.model)",
    ],
  },
  {
    id: "world_model",
    label: "Build world model & initialize physics",
    description:
      "Compile the world model into an executable physics instance, render a preview frame, and save it.",
    image: "/assets/home/preview_world.jpg",
    code: [
      "model = Model(SIZE, PLATFORM_LENGTH).model",
      "physics = mjcf.Physics.from_mjcf_model(model)",
      "img = physics.render(height=320, width=640, camera_id=0)",
      "mediapy.show_image(img)",
      "mediapy.write_image(path, img)",
    ],
  },
  {
    id: "loop",
    label: "Run simulation loop",
    description:
      "Reset state, apply the initial velocity, then step forward in time incrementing velocity, capturing kinematic trajectories and frames.",
    image: "/assets/home/simulation.mp4",
    code: [
      "physics.reset()",
      "# set initial velocity",
      'physics.named.data.qvel["box/move"] = V',
      "while physics.time() < DURATION:",
      '    physics.named.data.qvel["box/move"] += A * timestep',
      "    # record data",
      "    timevals.append(physics.time())",
      "    velocity.append(physics.named.data.qvel...)",
      "    position.append(physics.named.data.geom_xpos...)",
      "    # render a picture",
      "    if len(frames) < physics.time() * FRAMERATE:",
      "        pixels = physics.render(WIDTH, HEIGHT)",
      "        frames.append(pixels)",
      "    physics.step()",
    ],
  },
  {
    id: "analysis",
    label: "Analyze outputs",
    description:
      "Plot velocity and position over time as two stacked subplots using Seaborn, with labeled axes and high-resolution export.",
    image: "/assets/home/data_analysis.jpg",
    code: [
      "fig, ax = plt.subplots(2, figsize=figsize, dpi=DPI)",
      "fig.subplots_adjust(wspace=1 * cm)",
      "",
      'y_labels = ["Velocity, [m/s]", "Position, [m]"]',
      'x_labels = ["Time, [s]", "Time, [s]"]',
      "data = [velocity, position]",
      "",
      "for i in range(2):",
      "    sns.lineplot(x=timevals, y=data[i], ax=ax[i], ...)",
      "    ax[i].set_ylabel(y_labels[i], ...)",
      "    ax[i].set_xlabel(x_labels[i], ...)",
      "    ...",
      "",
      'fig.savefig("chart.png", bbox_inches="tight")',
    ],
  },
];

function StepVisual({ src, alt }: { src: string; alt: string }) {
  const isVideo = src.endsWith(".mp4") || src.endsWith(".webm");

  if (isVideo) {
    return (
      <div className="relative h-full w-full overflow-hidden rounded-xl bg-default-50">
        <video
          className="h-full w-full object-contain"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          aria-label={alt}
        >
          <source
            src={src}
            type={src.endsWith(".webm") ? "video/webm" : "video/mp4"}
          />
        </video>
      </div>
    );
  }

  return (
    <div className="relative h-full w-full overflow-hidden rounded-xl bg-default-50">
      <Image
        alt={alt}
        src={src}
        fill
        className="object-contain"
        sizes="(min-width: 1024px) 50vw, 100vw"
        priority
        unoptimized={src.endsWith(".gif")}
      />
    </div>
  );
}

export function SimulationStructureBlock() {
  const [activeStep, setActiveStep] = useState(0);

  const step = useMemo(() => simulationStructure[activeStep], [activeStep]);
  const isFirstStep = activeStep === 0;
  const isLastStep = activeStep === simulationStructure.length - 1;

  const goPrev = () => {
    setActiveStep((prev) =>
      prev === 0 ? simulationStructure.length - 1 : prev - 1,
    );
  };

  const goNext = () => {
    setActiveStep((prev) =>
      prev === simulationStructure.length - 1 ? 0 : prev + 1,
    );
  };

  const resetSteps = () => {
    setActiveStep(0);
  };

  return (
    <section className="w-full px-4">
      <div className="mx-auto max-w-7xl">
        <div className="flex justify-between items-end max-[832px]:gap-8 gap-24 mb-8 ">
          <Link
            onClick={goPrev}
            className={`${buttonVariants({
              variant: "outline",
            })} hidden sm:flex`}
            isDisabled={isFirstStep}
          >
            Previous
          </Link>

          <div className="flex flex-col items-center justify-center gap-2">
            <h2 className="text-2xl font-bold text-center">
              1D Motion Simulation Example
            </h2>
            <p className="text-default-500 text-center">
              This section showcases the general code template of simulations
              with 1D motion simulation as an example
            </p>
          </div>

          {isLastStep ? (
            <Link
              onClick={resetSteps}
              className={`${buttonVariants({
                variant: "danger-soft",
              })} hidden sm:flex`}
            >
              Reset
            </Link>
          ) : (
            <Link
              onClick={goNext}
              className={`${buttonVariants({
                variant: "secondary",
              })} hidden sm:flex`}
            >
              Next
            </Link>
          )}
        </div>

        <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(320px,0.95fr)] xl:gap-8">
          <div className="flex flex-col">
            <div className="rounded-2xl border border-default-200 bg-content1 shadow-sm">
              <div className="relative aspect-[16/9] w-full">
                <StepVisual
                  src={step.image}
                  alt={`${step.label} illustration`}
                />
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center gap-4 sm:hidden">
            <Link
              onClick={goPrev}
              className={`${buttonVariants({
                variant: "outline",
              })} sm:hidden w-full`}
              isDisabled={isFirstStep}
            >
              Previous
            </Link>

            {isLastStep ? (
            <Link
              onClick={resetSteps}
              className={`${buttonVariants({
                variant: "danger-soft",
              })} sm:hidden w-full`}
            >
              Reset
            </Link>
          ) : (
            <Link
              onClick={goNext}
              className={`${buttonVariants({
                variant: "secondary",
              })} sm:hidden w-full`}
            >
              Next
            </Link>
          )}
          </div>

          <div className="overflow-hidden rounded-2xl border border-default-200 bg-surface shadow-sm">
            <div className="flex items-start justify-between gap-4 border-b border-default-100 px-4 py-4 sm:px-6">
              <div>
                <h3 className="mt-1 text-lg font-semibold text-foreground sm:text-xl">
                  {step.label}
                </h3>
                <p className="mt-2 max-w-2xl text-sm text-default-500 sm:text-base">
                  {step.description}
                </p>
              </div>

              <div className="shrink-0 rounded-full border border-default-200 bg-default-50 px-3 py-1 text-xs text-default-500 sm:text-sm">
                Step {activeStep + 1} / {simulationStructure.length}
              </div>
            </div>

            <div className="overflow-x-auto">
              {/* <pre className="min-w-0 p-4 text-xs leading-6 sm:p-6 sm:text-sm"> */}
              {/* <code className="block font-mono">
                  {step.code.map((line, index) => (
                    <div
                      key={`${step.id}-${index}`}
                      className="grid grid-cols-[auto_1fr] gap-4 rounded-xl px-3 py-1.5 hover:bg-default-50/80"
                    >
                      <span className="select-none text-right text-xs tabular-nums text-default-400">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="whitespace-pre text-foreground">
                        {line}
                      </span>
                    </div>
                    ))}
                    </code> */}
              {/* </pre> */}
              <SyntaxHighlighter
                language="python"
                style={oneDark}
                showLineNumbers
                wrapLongLines
                customStyle={{
                  margin: 0,
                  borderRadius: "1rem",
                  padding: "1.25rem",
                  fontSize: "0.875rem",
                  lineHeight: 1.7,
                  background: "transparent",
                }}
                lineNumberStyle={{
                  minWidth: "2.5em",
                  paddingRight: "1rem",
                  color: "#6b7280",
                  textAlign: "right",
                  userSelect: "none",
                }}
                codeTagProps={{
                  style: {
                    fontFamily:
                      "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace",
                  },
                }}
              >
                {step.code.join("\n")}
              </SyntaxHighlighter>
            </div>
          </div>
        </div>
        <div className="text-center mt-8 ">
          <i>
            *the demo simulation presented here is a modified version of{" "}
            <b>
              <a
                className="text-accent"
                href="https://colab.research.google.com/github/commanderxa/alphalabs/blob/main/mechanics/kinematics/1d_motion.ipynb"
              >
                1D motion simulation
              </a>
            </b>
            .
          </i>
        </div>
      </div>
    </section>
  );
}
