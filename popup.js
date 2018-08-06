
// see if it's enabled from local storage
chrome.storage.sync.get('enabled', function(data){
  // if not set yet
  if(chrome.runtime.lastError){
    // set it to true
    chrome.storage.sync.set({enabled: true});
    return;
  } else{
    // if it is set, check/uncheck the checkbox accordingly
    document.getElementById('toggle').checked = data.enabled;
    switchEnabled();
  }
})

function switchEnabled(){
  // get toggle, wait til it's clicked
  document.getElementById('toggle').addEventListener('click', function(e){
    // set enabled to true/false
    var enabled = e.target.checked
    console.log(enabled)
    // sync that value with local storage
    chrome.storage.sync.set({enabled: enabled});
  })
}
