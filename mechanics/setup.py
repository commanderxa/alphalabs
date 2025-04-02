import re
import sys


def install_packages_colab():
    import distutils.util
    import os
    import subprocess
    if subprocess.run('nvidia-smi').returncode:
        raise RuntimeError(
            'Cannot communicate with GPU. '
            'Make sure you are using a GPU Colab runtime. '
            'Go to the Runtime menu and select Choose runtime type.')

    # Add an ICD config so that glvnd can pick up the Nvidia EGL driver.
    # This is usually installed as part of an Nvidia driver package, but the Colab
    # kernel doesn't install its driver via APT, and as a result the ICD is missing.
    # (https://github.com/NVIDIA/libglvnd/blob/master/src/EGL/icd_enumeration.md)
    NVIDIA_ICD_CONFIG_PATH = '/usr/share/glvnd/egl_vendor.d/10_nvidia.json'
    if not os.path.exists(NVIDIA_ICD_CONFIG_PATH):
        with open(NVIDIA_ICD_CONFIG_PATH, 'w') as f:
            f.write("""{
            "file_format_version" : "1.0.0",
            "ICD" : {
                "library_path" : "libEGL_nvidia.so.0"
            }
        }
        """)

    print('Installing dm_control...')
    subprocess.check_call([sys.executable, "-m", "pip", "install", "dm_control>=1.0.22"])

    # Configure dm_control to use the EGL rendering backend (requires GPU)
    os.environ["MUJOCO_GL"] = "egl"

    print('Checking that the dm_control installation succeeded...')
    try:
        from dm_control import suite
        env = suite.load('cartpole', 'swingup')
        pixels = env.physics.render()
    except Exception as e:
        raise e from RuntimeError(
            'Something went wrong during installation. Check the shell output above '
            'for more information.\n'
            'If using a hosted Colab runtime, make sure you enable GPU acceleration '
            'by going to the Runtime menu and selecting "Choose runtime type".')
    else:
        del pixels, suite

    version_output = subprocess.check_output(["pip", "show", "dm_control"]).decode("utf-8")
    match = re.search(r"^Version:\s*([\S]+)", version_output, re.MULTILINE)
    if match:
        print(f"Installed dm_control {match.group(1)}")
    else:
        print("dm_control version not found.")

    # Graphics and plotting.
    print('Installing mediapy:')
    try:
        subprocess.check_call("command -v ffmpeg", shell=True)
    except subprocess.CalledProcessError:
        subprocess.check_call(["apt", "update"])
        subprocess.check_call(["apt", "install", "-y", "ffmpeg"])
    
    subprocess.check_call([sys.executable, "-m", "pip", "install", "mediapy"])
