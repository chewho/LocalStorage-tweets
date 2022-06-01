const tweetList = document.getElementById("tweet-list");

eventListeners();

function eventListeners() {
  // Form submission
  document.querySelector("#form").addEventListener("submit", newTweet);

  // Remove tweet from the list
  tweetList.addEventListener("click", removeTweet);

  // Document
  document.addEventListener("DOMContentLoaded", localStorageOnLoad);
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

  // Add to local storage
  addTweetLocalStorage(tweet);

  // Clear the form
  this.reset();
}

function removeTweet(e) {
  if (e.target.classList.contains("remove-tweet")) {
    e.target.parentElement.remove();
  }

  // Remove from storage
  removeTweetLocalStorage(e.target.parentElement.textContent);
}

// Add tweets into the local storage
function addTweetLocalStorage(tweet) {
  let tweets = getTweetsFromStorage();

  // Add the tweet into the array
  tweets.push(tweet);

  // Convert tweet array into string
  localStorage.setItem("tweets", JSON.stringify(tweets));
}

function getTweetsFromStorage() {
  let tweets;
  const tweetsLS = localStorage.getItem("tweets");
  if (localStorage.getItem("tweets") === null) {
    tweets = [];
  } else {
    tweets = JSON.parse(tweetsLS);
  }
  return tweets;
}

// Print local storage tweets on load
function localStorageOnLoad() {
  let tweets = getTweetsFromStorage();

  // Loop throught storage and print the vaults
  tweets.forEach(function (tweet) {
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
  });
}

// Remove tweets from local storage
function removeTweetLocalStorage(tweet) {
  // Get tweets from storage
  let tweets = getTweetsFromStorage();

  // Remove the X from the tweet
  const tweetDelete = tweet.substring(0, tweet.length - 1);

  // Loop throught the tweets and remove equal
  tweets.forEach(function (tweetLS, index) {
    if (tweetDelete === tweetLS) {
      tweets.splice(index, 1);
    }
  });

  // Save the data
  localStorage.setItem("tweets", JSON.stringify(tweets));
}
