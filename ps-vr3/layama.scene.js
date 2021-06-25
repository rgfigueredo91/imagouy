// Created with Motiva Layama v1.5 https://www.motivacg.com/layama

function getLayamaCameras()
{
   var layamaCameras = new BABYLON.SmartArray(0);
   layamaCameras.push({n: "interior0002", a: "VRayCam007", p: new BABYLON.Vector3(1143.37, 128.398, -903.888), l: new BABYLON.Vector3(1243.37, 128.398, -903.863)});
   layamaCameras.push({n: "interior0000", a: "VRayCam005", p: new BABYLON.Vector3(1499.16, 128.398, -815.037), l: new BABYLON.Vector3(1399.16, 128.398, -815.062)});
   layamaCameras.push({n: "interior0001", a: "VRayCam006", p: new BABYLON.Vector3(1445.71, 128.398, -1161.42), l: new BABYLON.Vector3(1445.73, 128.398, -1061.42)});
   layamaCameras.push({n: "interior0003", a: "VRayCam008", p: new BABYLON.Vector3(1126.23, 128.398, -760.16), l: new BABYLON.Vector3(1226.23, 128.398, -760.135)});
   layamaCameras.push({n: "interior0004", a: "VRayCam009", p: new BABYLON.Vector3(1324.52, 128.398, -760.16), l: new BABYLON.Vector3(1424.52, 128.398, -760.135)});
   layamaCameras.push({n: "interior0005", a: "VRayCam010", p: new BABYLON.Vector3(1214.11, 128.398, -1030.59), l: new BABYLON.Vector3(1314.11, 128.398, -1030.57)});
   layamaCameras.push({n: "interior0006", a: "VRayCam011", p: new BABYLON.Vector3(1240.19, 128.398, -1175.92), l: new BABYLON.Vector3(1340.19, 128.398, -1175.9)});
   layamaCameras.push({n: "interior0007", a: "VRayCam012", p: new BABYLON.Vector3(1330.36, 128.398, -1042.26), l: new BABYLON.Vector3(1430.36, 128.398, -1042.24)});
   layamaCameras.push({n: "interior0008", a: "VRayCam013", p: new BABYLON.Vector3(1330.36, 128.398, -902.094), l: new BABYLON.Vector3(1430.36, 128.398, -902.069)});
   layamaCameras.push({n: "interior0009", a: "VRayCam014", p: new BABYLON.Vector3(1494.77, 128.398, -1029.51), l: new BABYLON.Vector3(1594.77, 128.398, -1029.49)});
   layamaCameras.push({n: "interior0010", a: "VRayCam015", p: new BABYLON.Vector3(1494.77, 128.398, -687.894), l: new BABYLON.Vector3(1594.77, 128.398, -687.869)});
   layamaCameras.push({n: "interior0011", a: "VRayCam016", p: new BABYLON.Vector3(1494.77, 128.398, -940.267), l: new BABYLON.Vector3(1594.77, 128.398, -940.242)});
   return layamaCameras;
}

function getLayamaResolutions()
{
   var layamaResolutions = new BABYLON.SmartArray(0);
   layamaResolutions.push("512");
   layamaResolutions.push("512");
   return layamaResolutions;
}

function getLayamaControls()
{
   return {defMove: false, defRot: 1, altMove: true, altRot: 2};
}

