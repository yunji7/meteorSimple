/**
 * Created by android on 2017/3/29.
 */


var postsData = [
    {
        title: 'Introducing',
        url: 'http://sachagreif.com/introducing-telescope/',

    },
    {
        title: 'Meteor',
        url: 'http://meteor.com',

    },
    {
        title: 'The Meteor Book',
        url: 'http://themeteorbook.com',

    }
];

Template.postsList.helpers({
    posts: postsData
});



Template.postItem.helpers({
    domain: function() {
        var a = document.createElement('a');
        a.href = this.url;
        // console.log(a);
        // console.log(this);
        // console.log(a.hostname);
        return a.hostname;
    }
});