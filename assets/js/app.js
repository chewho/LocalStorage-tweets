const tweetList = document.getElementById("tweet-list");

eventListeners();

function eventListeners() {
  // Form submission
  document.querySelector("#form").addEventListener("submit", newTweet);
}

function newTweet(e) {
  e.preventDefault();

  // Read the textarea value
  const tweet = document.getElementById("tweet").value;

  // Create the remove button
  const removeBtn = document.createElement("a");
  removeBtn.classList = "remove-tweet";
  removeBtn.textContent = "X";

  // Create an <li> element
  let li = document.createElement("li");
  li.textContent = tweet;
  tweetList.appendChild(li);

  // Add the remove button to each tweet
  li.appendChild(removeBtn);

  // Add to the list
  tweetList.appendChild(li);
}