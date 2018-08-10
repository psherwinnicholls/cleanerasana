// iife — Immediately-invoked function expression
// read: it'll work itself on page load

(function() {
  "use strict";

  // cleanAsana by default
  setEnabled(true);

  // when we notice a change in chrome storage
  chrome.storage.onChanged.addListener(function(changes) {
    // set cleanasana to the new value (true/false)
    setEnabled(changes.enabled.newValue);
  });

  function cleanAsana() {

    // make sure we've set the local store to true
    chrome.storage.sync.set({enabled: true});

    // change the background image
    var backgroundImage =
      "https://images.pexels.com/photos/991438/pexels-photo-991438.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260";

    // create a new style sheet
    var sheet = document.createElement("style");

    // give it an id (so we can delete it later)
    sheet.id = "cleanstylesheet";

    // close the sidebar by default by programatically clicking on the burger icon
    var ExpandSidebarButton = document.getElementsByClassName('ExpandSidebarButton');
    var sidebarIsOpen = ExpandSidebarButton[0].classList.contains('ExpandSidebarButton--shouldHide');
    if(sidebarIsOpen){
      ExpandSidebarButton[0].click();
    }



    // add these styles to the stylesheet
    sheet.innerHTML = `
      /* change font colour */
      .TopbarPageHeaderStructure-title, .BoardColumnHeader, .ProjectPageHeader-projectName, .ClarifiedNavigationHeaderView-title{
        color:white;
      }

      /* background image */
      #asana_main{
         background-image:url( ${backgroundImage} );
         background-size: cover;
      }

      /* hide ALL of this */
      .SidebarTeamMembersList, .ClarifiedNavigationHeaderView-titleRightElement, .team-feed, .teamFeedView-emptyStateCard, .team-page-description, .messageComposerView-previewView, .Facepile .SidebarTopNavLinks-myTasksButton, .SidebarTopNavLinks-notificationsButton, .SidebarTopNavLinks-notificationsButton, .SidebarTopNavLinks-myDashboardButton, .SidebarRecentsAndFavorites, .SidebarReports, .BoardBody-descriptionLink, .FloatingSelect, .pageTopbarView-globalActions, .Tab:nth-last-child(-n+4), .projectHeaderFacepile-content, .TopbarPageHeaderStructure-titleRightElement, .TaskStoryFeed, .CommentComposer-avatar, .FollowersBar, .HeartButton {
        display:none;
      }

      /* transparent navbar */
      .page-topbar{
        background:rgba(255,255,255,0);
      }`;

    // add the stylesheet to the page
    document.body.appendChild(sheet);
  }

  // choose whether to clean asana or not
  function setEnabled(enabled) {
    if (enabled) {
      cleanAsana();
    } else {
      var stylesheet = document.getElementById("cleanstylesheet");
      document.body.removeChild(stylesheet);
    }
  }
})();
