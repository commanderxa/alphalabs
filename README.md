# ALPHA Labs

<div>
   <a href="https://www.python.org/">
      <img src="https://img.shields.io/badge/Python-002C76?style=for-the-badge&logo=python&logoColor=white">
   </a>
   <a href="https://numpy.org/">
      <img src="https://img.shields.io/badge/Numpy-777BB4?style=for-the-badge&logo=numpy&logoColor=white">
   </a>
   <a href="https://jupyter.org/">
    <img src="https://img.shields.io/badge/Jupyter-F37626?style=for-the-badge&logo=jupyter&logoColor=white">
    </a>
    <a href="https://colab.research.google.com/">
        <img src="https://img.shields.io/badge/Colab-F9AB00?style=for-the-badge&logo=googlecolab&logoColor=white">
    </a>
   <a href="https://docs.astral.sh/uv/">
      <img src="https://img.shields.io/badge/uv-7A47A7?style=for-the-badge&logo=uv&logoColor=white">
   </a>
</div>

<br>

This repository represents a research project in physics simulations for education as an additonal approach to study physics. These simulations are intended to be covered as an extra assignments, e.g. before laboratory experiments.

The simulations present Jupyter Notebooks with code for specific simulations. Since the simulation code in this repository does not contain any tasks to do, the intended way to interact with the code is to run each code cell sequentially in their respective order (top-to-bottom).

# Run

There are two options to run the code. Remotely online (on the server) and locally on a device, which requires installation of the project.

## Google Colab

[Google Colab](https://colab.research.google.com/) is a free online platform for Python programming as in Jupyter Notebook, hence all simulations can be run there.

Please visit the [website](https://commanderxa.github.io/alphalabs/collection) of the project with collection of simulations to open them in Google Colab.

## Locally

Altough modern computers feature more RAM, in a case it won't be enough try setting `HEIGHT` and `WIDTH` as well as `FRAMERATE` to lower values.

### Setup

Using `uv`:

```sh
uv sync
```

Or create the virtual environment to install Python packages:

```sh
python3 -m venv .venv
```

Activate the created environment:

```sh
source .venv/bin/activate
```

Install required packages:

```sh
pip install -r requirements.txt
```

# License

This repository is distributed under the terms of the Apache-2.0 License; see the [LICENSE](./LICENSE) file for details.
