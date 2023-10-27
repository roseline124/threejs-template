# threejs-template

### Project Structure

```
.
├── public
│   ├── css
│   └── models
├── src
│   ├── loading.ts
│   ├── main.ts
│   ├── models
│   ├── objects
│   ├── scene
│   ├── utils
└── tsconfig.json
```

- public: static resources location
- src
    - loading: loading manager to control loading screen
    - main: customize camera, renderer. add objects to scene.
    - scene: main scene. you can load scene model.
    - objects: add 3d obejct and update object in every frame.
    - models: interface, class to abstract.


