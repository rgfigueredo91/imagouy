// Created with Motiva Layama v1.5 https://www.motivacg.com/layama

function getLayamaCameras()
{
   var layamaCameras = new BABYLON.SmartArray(0);
   layamaCameras.push({n: "casa_lago0000", a: "CoronaCamera001", p: new BABYLON.Vector3(4611.1, 179.625, -367.457), l: new BABYLON.Vector3(4611.07, 179.625, -364.917)});
   layamaCameras.push({n: "casa_lago0001", a: "CoronaCamera002", p: new BABYLON.Vector3(4739.22, 247.581, -21.8272), l: new BABYLON.Vector3(4739.19, 247.581, -19.2873)});
   layamaCameras.push({n: "casa_lago0002", a: "CoronaCamera003", p: new BABYLON.Vector3(4739.22, 247.581, 413.642), l: new BABYLON.Vector3(4739.19, 247.581, 416.182)});
   layamaCameras.push({n: "casa_lago0003", a: "CoronaCamera004", p: new BABYLON.Vector3(4012.8, 247.581, 420.526), l: new BABYLON.Vector3(4012.78, 247.581, 423.066)});
   layamaCameras.push({n: "casa_lago0004", a: "CoronaCamera005", p: new BABYLON.Vector3(4007.87, 247.581, -58.8583), l: new BABYLON.Vector3(4007.85, 247.581, -56.3183)});
   layamaCameras.push({n: "casa_lago0005", a: "CoronaCamera006", p: new BABYLON.Vector3(4441.48, 247.581, -58.5126), l: new BABYLON.Vector3(4441.48, 247.581, -55.9726)});
   layamaCameras.push({n: "casa_lago0006", a: "CoronaCamera007", p: new BABYLON.Vector3(4441.48, 247.581, 178.407), l: new BABYLON.Vector3(4441.48, 247.581, 180.947)});
   return layamaCameras;
}

function getLayamaResolutions()
{
   var layamaResolutions = new BABYLON.SmartArray(0);
   layamaResolutions.push("2048");
   layamaResolutions.push("1024");
   return layamaResolutions;
}

function getOnScreenLogoUsage()
{
   return 6;
}

function getLayamaControls()
{
   return {defMove: false, defRot: 1, altMove: true, altRot: 2};
}

