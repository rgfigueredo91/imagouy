// Created with Motiva Layama v1.5 https://www.motivacg.com/layama

function getLayamaCameras()
{
   var layamaCameras = new BABYLON.SmartArray(0);
   layamaCameras.push({n: "interior0000", a: "VRayCam004", p: new BABYLON.Vector3(1149.5, 128.398, -901.6), l: new BABYLON.Vector3(1249.5, 128.398, -901.576)});
   layamaCameras.push({n: "interior0001", a: "VRayCam005", p: new BABYLON.Vector3(1499.16, 128.398, -815.037), l: new BABYLON.Vector3(1399.16, 128.398, -815.062)});
   layamaCameras.push({n: "interior0002", a: "VRayCam006", p: new BABYLON.Vector3(1445.71, 128.398, -1161.42), l: new BABYLON.Vector3(1445.73, 128.398, -1061.42)});
   return layamaCameras;
}

function getLayamaResolutions()
{
   var layamaResolutions = new BABYLON.SmartArray(0);
   layamaResolutions.push("2048");
   layamaResolutions.push("1024");
   return layamaResolutions;
}

function getLayamaControls()
{
   return {defMove: false, defRot: 1, altMove: true, altRot: 2};
}

