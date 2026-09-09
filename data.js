var APP_DATA = {
  "scenes": [
    {
      "id": "0-bedroom-type-6",
      "name": "Bedroom (type 6)",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.038934267929105815,
        "pitch": -0.005639270480301661,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": 1.1819729722368155,
          "pitch": 0.2731047992231428,
          "rotation": 0,
          "target": "1-bathroom-type-6"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-bathroom-type-6",
      "name": "Bathroom (type 6)",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.8933631867301752,
          "pitch": 0.10634646227240552,
          "rotation": 0,
          "target": "0-bedroom-type-6"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Permas Hotel",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
