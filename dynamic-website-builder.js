function timeFormat(monthsOld) {
    if (monthsOld >= 12) {
        let years = Math.floor(monthsOld / 12);
        return years + ' ' + (years === 1 ? 'year ago' : 'years ago');
    }
    else {
        return monthsOld + ' ' + (monthsOld === 1 ? 'month ago' : 'months ago');
    }
}

function createCard(title, views, monthsOld, duration, thumbnail, chName) {
    if (views >= 1000) {
        views = views / 1000 + 'K'
    }
    else if (views >= 1000000) {
        views = views / 1000000 + 'M'
    }
    else { console.log(views = ('No' + views)) }


    document.querySelector('.title').innerHTML = title;
    document.querySelector('.views').innerHTML = views + ' ' + 'views';
    document.querySelector('.monthsOld').innerHTML = timeFormat(monthsOld);
    document.querySelector('.duration').innerHTML = duration;
    document.querySelector('img').src = thumbnail;
    document.querySelector('.child1').innerHTML = chName + ' ' + '&#10004';

};
createCard('JavaScript Exercise 13 - Dynamic Website Builder | Sigma Web Development Course - Tutorial #73', 114000, 24, '32:13', 'https://i.ytimg.com/vi/CO_DAXswOrc/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLAbDeaG5nlgOfmj0aGOejvuL6680Q', 'CodeWithHarry');