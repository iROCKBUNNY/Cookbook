// common.js

// updated at
moment.locale('zh-cn');
function updateVersion(timestamp) {
    $('#updated-at img').attr('src', 'https://img.shields.io/badge/%E6%9B%B4%E6%96%B0%E4%BA%8E-' + encodeURIComponent(moment(timestamp).fromNow()) + '-brightgreen.svg');
};
var updateAt = $('meta[name=updated_at]').attr('content');
updateVersion(updateAt);
setInterval(function () {
    updateVersion(updateAt);
}, 60000);