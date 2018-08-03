(function() {
  "use strict";

  chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    console.log(request.enabled);
    setEnabled(request.enabled);
  });

  function cleanAsana() {
    var backgroundImage =
      "https://images.pexels.com/photos/991438/pexels-photo-991438.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260";

    var sheet = document.createElement("style");
    sheet.id = "cleanstylesheet";

    var sidebar = document.getElementsByClassName('sidebar-mountNode')
    sidebar[0].classList.add('is-collapsed');

    var sidebarButton = document.getElementsByClassName('ExpandSidebarButton')
    sidebarButton[0].classList.remove('ExpandSidebarButton--shouldHide')

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
         .SidebarTeamMembersList, .ClarifiedNavigationHeaderView-titleRightElement, .team-feed, .teamFeedView-emptyStateCard, .team-page-description, .messageComposerView-previewView, .Facepile .SidebarTopNavLinks-myTasksButton, .SidebarTopNavLinks-notificationsButton, .SidebarTopNavLinks-notificationsButton, .SidebarTopNavLinks-myDashboardButton, .SidebarRecentsAndFavorites, .SidebarReports, .BoardBody-descriptionLink, .FloatingSelect, .pageTopbarView-globalActions, .Tab:nth-last-child(-n+3), .projectHeaderFacepile-content, .TopbarPageHeaderStructure-titleRightElement {
            display:none;
         }

         /* transparent navbar */
         .page-topbar{
            background:rgba(255,255,255,0);
         }`;

    document.body.appendChild(sheet);
  }
  function setEnabled(enabled) {
    if (enabled) {
      cleanAsana();
      console.log("tidy");
    } else {
      var stylesheet = document.getElementById("cleanstylesheet");
      document.body.removeChild(stylesheet);
      console.log("remove");
    }
  }


})();
