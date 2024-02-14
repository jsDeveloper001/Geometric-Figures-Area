// Area of Triangle
function calculateTriangle() {
  let triangleBase = document.getElementById("triangleBase");
  let triangleHeight = document.getElementById("triangleHeight");

  if (triangleBase.value && triangleHeight.value) {
    const Area =
      0.5 * parseFloat(triangleBase.value) * parseFloat(triangleHeight.value);

    document.getElementById("triangleArea").innerText = Area;
  } else {
    alert("input must be numbers");
  }
  triangleBase.value = "";
  triangleHeight.value = "";
}

// Area of Rectangle
function calculateRectangle() {
  let rectangleWidth = document.getElementById("rectangleWidth");
  let rectangleLength = document.getElementById("rectangleLength");

  if (rectangleWidth.value && rectangleLength.value) {
    const Area =
      parseFloat(rectangleWidth.value) * parseFloat(rectangleLength.value);

    document.getElementById("rectangleArea").innerText = Area;
  } else {
    alert("input must be numbers");
  }
  rectangleWidth.value = "";
  rectangleLength.value = "";
}

// Area of Parallelogram
function calculateParallelogram() {
  let parallelogramBase = document.getElementById("parallelogramBase");
  let parallelogramHeight = document.getElementById("parallelogramHeight");

  if (parallelogramBase.value && parallelogramHeight.value) {
    const Area =
      parseFloat(parallelogramBase.value) *
      parseFloat(parallelogramHeight.value);

    document.getElementById("parallelogramArea").innerText = Area;
  } else {
    alert("input must be numbers");
  }
  parallelogramBase.value = "";
  parallelogramHeight.value = "";
}

// Area of Rhombus
function calculateRhombus() {
  let RhombusD1 = document.getElementById("RhombusD1");
  let RhombusD2 = document.getElementById("RhombusD2");
  if (RhombusD1.value && RhombusD2.value) {
    const Area =
      0.5 * parseFloat(RhombusD1.value) * parseFloat(RhombusD2.value);

    document.getElementById("rhombusArea").innerText = Area;
  } else {
    alert("input must be numbers");
  }
  RhombusD1.value = "";
  RhombusD2.value = "";
}

// Area of Pentagon
function calculatePentagon() {
  let pentagonPerimeter = document.getElementById("pentagonPerimeter");
  let pentagonBase = document.getElementById("pentagonBase");
  if (pentagonPerimeter.value && pentagonBase.value) {
    const Area =
      0.5 *
      parseFloat(pentagonPerimeter.value) *
      parseFloat(pentagonBase.value);

    document.getElementById("pentagonArea").innerText = Area;
  } else {
    alert("input must be numbers");
  }
  pentagonPerimeter.value = "";
  pentagonBase.value = "";
}

// Area of Rhombus
function calculateEllipse() {
  let ellipseAaxis = document.getElementById("ellipseA-axis");
  let ellipseBaxis = document.getElementById("ellipseB-axis");
  if (ellipseAaxis.value && ellipseBaxis.value) {
    const PI = Math.PI;
    const Area =
      PI * parseFloat(ellipseAaxis.value) * parseFloat(ellipseBaxis.value);

    document.getElementById("ellipseArea").innerText = Area.toFixed(2);
  } else {
    alert("input must be numbers");
  }
  ellipseAaxis.value = "";
  ellipseBaxis.value = "";
}
