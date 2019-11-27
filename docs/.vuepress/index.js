const utils = {
    genSidebar: function (title, children = [''], collapsable = true, sidebarDepth = 2) {
    return {
        title,
        collapsable,
        sidebarDepth,
        children
        }
    }
  };
  
  module.exports = utils;