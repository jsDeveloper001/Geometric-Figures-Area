// Area of Triangle
function calculateTriangle() {
  let triangleBase = document.getElementById("triangleBase");
  let triangleHeight = document.getElementById("triangleHeight");

  if (triangleBase.value && triangleHeight.value) {
    const Area =
      0.5 * parseFloat(triangleBase.value) * parseFloat(triangleHeight.value);

    document.getElementById("triangleArea").innerText = Area;
  } else {
    alert("input should be number");
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
    alert("input should be number");
  }
  rectangleWidth.value = "";
  rectangleLength.value = "";
}
