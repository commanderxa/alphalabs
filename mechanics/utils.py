from pathlib import Path

import numpy as np


def root_mean_squared_error(
    y: float | np.ndarray, y_hat: float | np.ndarray
) -> np.float32 | np.ndarray:
    """Computes Root Mean Squared Error (RMSE)."""

    return np.sqrt(np.square(y - y_hat))


def absolute_percentage_error(
    y: float | np.ndarray, y_hat: float | np.ndarray
) -> np.float32 | np.ndarray:
    """Computes Absolute Percentage Error."""

    return np.abs((y_hat - y) / y) * 100


def prefix_path(path: str, postfix: str | None = None) -> str:
    """Prefix path if code is run locally."""

    if is_colab():
        return path

    out_dir = Path(f"../../output")
    if postfix:
        out_dir = out_dir / postfix
    if not out_dir.exists():
        out_dir.mkdir(parents=True)

    return f"{out_dir.relative_to(".")}/{path}"


def is_colab() -> bool:
    """Checks whether the execution environment is Google Colab."""

    return "google.colab" in str(get_ipython())  # type: ignore
