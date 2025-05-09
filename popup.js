chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
  const videoId = tabs[0].url.split("v=")[1].split("&")[0];
  
  chrome.storage.local.get([videoId], function(result) {
    const viewCount = result[videoId] || 0;
    document.getElementById('watchCount').textContent = `You have watched this video ${viewCount} times.`;
  });
});