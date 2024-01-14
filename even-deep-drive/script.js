const parent = document.getElementById("parent");
const form = document.getElementById("form");
const button = document.getElementById("button");

parent.addEventListener("click", listener);

form.addEventListener("click", listener, true );

button.addEventListener("click", listener, true);

function listener(event) {
  // console.log(event)
  // console.log(event.target);
  // console.log(event.currentTarget); // this is the same as this
  // console.log(this); // this is the same as event.currentTarget
  // console.log(event.currentTarget.tagName); // this is the same as this.tagName
  console.log(this.tagName); // this is the same as event.currentTarget.tagName
}
