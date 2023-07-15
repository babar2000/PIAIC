const modesOfTransportation: string[] = ["car", "motorcycle", "bicycle", "train"];

for (let i = 0; i < modesOfTransportation.length; i++) {
  const mode: string = modesOfTransportation[i];

  switch (mode) {
    case "car":
      console.log("I would like to own a Tesla car.");
      break;
    case "motorcycle":
      console.log("I would like to own a Honda motorcycle.");
      break;
    case "bicycle":
      console.log("I enjoy riding a mountain bike.");
      break;
    case "train":
      console.log("I find train travel very comfortable.");
      break;
    default:
      console.log("I have no preference for this mode of transportation.");
      break;
  }
}
