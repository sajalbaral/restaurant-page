import dippedImg from "./dipped.jpg";

export function loadHome() {
  const homeContainer = document.createElement("div");
  homeContainer.className = "home";

  const p1 = document.createElement("p");
  p1.innerText = "getcha wings from us today!";

  const p2 = document.createElement("p");
  p2.innerText = "made with passion since 3 B.C";

  const img = document.createElement("img");
  img.src = dippedImg;
  img.alt = "wings dipped in ranch";

  const p3 = document.createElement("p");
  p3.innerText = "order online or visit us!";

  homeContainer.append(p1, p2, img, p3);

  return homeContainer;
}
