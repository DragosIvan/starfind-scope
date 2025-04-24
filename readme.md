# Starfind Scope /call command generator

alt1:

- Make sure alt1 is running
- Navigate, in your browser or the alt1 browser, to this address: https://dragosivan.github.io/starfind-scope/
- Click the button to install the app in alt1.
- Give the necessary permissions
- Open the app
- Right-click on "Alt1 Toolkit" in-game, in the top-right corner, and make sure "Show current world" is checked
- Use your telescope
- Click the button
- Enjoy! The app automatically copies the /call command, so all you need to do is go to discord and paste it!

![Text copied successfully](success.png)

![Text not copied successfully](error.png)

Dev mode:

```sh
# to initialize the repo and install dependencies
npm ci
# build - This builds the files in a "docs" folder, because I'm using Github Pages to deploy the app
npm run build
# dev-server - Use this in order to test locally
npm run serve
```

You must open localhost:9000 in the Alt1 browser and click the `add app` button that appears in order to get access to alt1 functionalities.
