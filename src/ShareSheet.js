
import React from 'react';
import { Share } from '@capacitor/share';

function ShareSheet() {
    Share.share({
        title: 'See cool stuff',
        text: 'Really awesome thing you need to see right meow!!!',
        url: 'http://ionicframework.com/',
        dialogTitle: 'Share with buddies',
    });    
}

export default ShareSheet;
