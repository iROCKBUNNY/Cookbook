// common.js

// updated at
function updateVersion(timestamp) {
    $('#updated-at img').attr('src', 'https://img.shields.io/badge/Updated-' + encodeURIComponent(moment(timestamp).fromNow()) + '-brightgreen.svg');
};
var updateAt = $('meta[name=updated_at]').attr('content');
updateVersion(updateAt);
setInterval(function () {
    updateVersion(updateAt);
}, 60000);