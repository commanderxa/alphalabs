import numpy as np


def root_mean_squared_error(
    y: float | np.ndarray, y_hat: float | np.ndarray
) -> np.float32 | np.ndarray:
    return np.sqrt(np.square(y - y_hat))


def absolute_percentage_error(
    y: float | np.ndarray, y_hat: float | np.ndarray
) -> np.float32 | np.ndarray:
    return np.abs((y_hat - y) / y) * 100
