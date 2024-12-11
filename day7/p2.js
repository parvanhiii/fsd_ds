const fetchData = new Promise((resolve, reject) => {
    console.log("Fetching Data.......");
    let success = true;
    setTimeout(() => {
        if (success) {
            resolve("Data sent successfully");
        } else {
            reject("Data failed to send");
        }
    }, 3000);
});

fetchData
    .then((message) => {
        console.log("Data Received: " + message); // Output when the promise is resolved
    })
    .catch((err) => {
        console.log("Failed to fetch data: " + err); // Output when the promise is rejected
    });