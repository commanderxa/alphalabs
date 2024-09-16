from dm_control import mjcf


class Scene(object):
    """Scene of the world: ground plane and gradient skybox"""

    def __init__(
        self,
        length: float,
        width: float = None,
        reflectance: float = 0.3,
        condim: int = 1,
    ) -> None:
        self.model = mjcf.RootElement(model="scene")

        # set scene visuals
        self.model.visual.headlight.ambient = [1, 1, 1]
        self.model.visual.map.haze = 1
        self.model.visual.map.fogstart = 1
        self.model.visual.map.fogend = 15
        self.model.visual.rgba.haze = [0.15, 0.25, 0.35, 1]

        # prepare length
        # we must divide length by 2
        # since geom `plane` takes half of the length as argument
        self.length = length / 2
        if width is None:
            self.width = length
        else:
            self.width = width / 2

        # sky texture
        self.skybox = self.model.asset.add(
            "texture",
            name="sky",
            type="skybox",
            builtin="gradient",
            width=512,
            height=512,
            rgb1=[0.3, 0.5, 0.7],
            rgb2=[0, 0, 0],
        )
        # ground texture
        chequered = self.model.asset.add(
            "texture",
            name="grid",
            type="2d",
            builtin="checker",
            width=512,
            height=512,
            mark="cross",
            rgb1=[0.2, 0.3, 0.4],
            rgb2=[0.1, 0.15, 0.2],
            markrgb=[0.8, 0.8, 0.8],
        )
        # ground material
        grid = self.model.asset.add(
            "material",
            name="grid",
            texture=chequered,
            texrepeat=[1, 1],
            texuniform=True,
            reflectance=reflectance,
        )
        # ground
        self.model.worldbody.add(
            "geom",
            name="platform",
            type="plane",
            pos=[0, 0, 0],
            size=[self.length, self.width, 1],
            material=grid,
            rgba=[1, 1, 1, 1],
            condim=condim,
        )
        # light
        self.model.worldbody.add(
            "light",
            name="light",
            directional=False,
            diffuse=[0.8, 0.8, 0.8],
            pos=[0, 0, self.length],
            dir=[0, 0, -1],
        )
