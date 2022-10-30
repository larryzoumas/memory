function getGameInfo(game_type) {
    let game_info = []

    switch (game_type) {
        case 'funnybunny':
            game_info['name'] = game_type
            game_info['title'] = 'Funny Bunny'
            game_info['cardsArray'] = [{
                'name': 'shell',
                'img': 'img/funnybunny/bunny_meeting.jpg'
            }, {
                'name': 'star',
                'img': 'img/funnybunny/cool_bunny.jpg'
            }, {
                'name': 'bobomb',
                'img': 'img/funnybunny/cutie_pie.jpg'
            }, {
                'name': 'mario',
                'img': 'img/funnybunny/cutie.jpg'
            }, {
                'name': 'luigi',
                'img': 'img/funnybunny/flower_eating_bunny.jpg'
            }, {
                'name': 'peach',
                'img': 'img/funnybunny/friends.jpg'
            }, {
                'name': '1up',
                'img': 'img/funnybunny/funny_bunnys.jpg'
            }, {
                'name': 'mushroom',
                'img': 'img/funnybunny/furry_furry.jpg'
            }, {
                'name': 'thwomp',
                'img': 'img/funnybunny/kissi_kissi.jpg'
            }, {
                'name': 'bulletbill',
                'img': 'img/funnybunny/little_bunny_jr.jpg'
            }, {
                'name': 'coin',
                'img': 'img/funnybunny/little_bun_bun.jpg'
            }, {
                'name': 'ZMF_Aolus.jpg',
                'img': 'img/funnybunny/little_bunny.jpg'
            }];
            break;
        case 'headphones':
            game_info['name'] = game_type
            game_info['title'] = 'Headphones'
            game_info['cardsArray'] = [{
                'name': 'shell',
                'img': 'img/headphones/Abyss_Diana_V2.png',
            },
                {
                    'name': 'star',
                    'img': 'img/headphones/Focal_Utopia.png',
                },
                {
                    'name': 'bobomb',
                    'img': 'img/headphones/Beyerdynamic_DT_1990_PRO.jpg',
                },
                {
                    'name': 'mario',
                    'img': 'img/headphones/Audeze_LCD_XC.jpg',
                },
                {
                    'name': 'luigi',
                    'img': 'img/headphones/Audeze_LCD_5.jpg',
                },
                {
                    'name': 'peach',
                    'img': 'img/headphones/Hifiman_Sundara.jpg',
                },
                {
                    'name': '1up',
                    'img': 'img/headphones/Focal_Elegia.jpg',
                },
                {
                    'name': 'mushroom',
                    'img': 'img/headphones/Dan_Clark_Aeon_Closed.jpg',
                },
                {
                    'name': 'thwomp',
                    'img': 'img/headphones/ZMF_Aolus.jpg',
                },
                {
                    'name': 'bulletbill',
                    'img': 'img/headphones/Sennheiser_800s.jpg',
                },
                {
                    'name': 'coin',
                    'img': 'img/headphones/Sennheiser_HD_600.jpg',
                },
                {
                    'name': 'ZMF_Aolus.jpg',
                    'img': 'img/headphones/Hifiman_Arya.jpg',
                },
            ]
            break;
        default:
            game_info['name'] = 'org'
            game_info['title'] = 'Nintendo'
            game_info['cardsArray'] = [{
                'name': 'shell',
                'img': 'img/org/blueshell.png'
            }, {
                'name': 'star',
                'img': 'img/org/star.png'
            }, {
                'name': 'bobomb',
                'img': 'img/org/bobomb.png'
            }, {
                'name': 'mario',
                'img': 'img/org/mario.png'
            }, {
                'name': 'luigi',
                'img': 'img/org/luigi.png'
            }, {
                'name': 'peach',
                'img': 'img/org/peach.png'
            }, {
                'name': '1up',
                'img': 'img/org/1up.png'
            }, {
                'name': 'mushroom',
                'img': 'img/org/mushroom.png'
            }, {
                'name': 'thwomp',
                'img': 'img/org/thwomp.png'
            }, {
                'name': 'bulletbill',
                'img': 'img/org/bulletbill.png'
            }, {
                'name': 'coin',
                'img': 'img/org/coin.png'
            }, {
                'name': 'goomba',
                'img': 'img/org/goomba.png'
            }];
    }

    return game_info
}


function getAllUrlParams(url) {

    // get query string from url (optional) or window
    var queryString = url ? url.split('?')[1] : window.location.search.slice(1);

    // we'll store the parameters here
    var obj = {};

    // if query string exists
    if (queryString) {

        // stuff after # is not part of query string, so get rid of it
        queryString = queryString.split('#')[0];

        // split our query string into its component parts
        var arr = queryString.split('&');

        for (var i = 0; i < arr.length; i++) {
            // separate the keys and the values
            var a = arr[i].split('=');

            // set parameter name and value (use 'true' if empty)
            var paramName = a[0];
            var paramValue = typeof (a[1]) === 'undefined' ? true : a[1];

            // (optional) keep case consistent
            paramName = paramName.toLowerCase();
            if (typeof paramValue === 'string') paramValue = paramValue.toLowerCase();

            // if the paramName ends with square brackets, e.g. colors[] or colors[2]
            if (paramName.match(/\[(\d+)?\]$/)) {

                // create key if it doesn't exist
                var key = paramName.replace(/\[(\d+)?\]/, '');
                if (!obj[key]) obj[key] = [];

                // if it's an indexed array e.g. colors[2]
                if (paramName.match(/\[\d+\]$/)) {
                    // get the index value and add the entry at the appropriate position
                    var index = /\[(\d+)\]/.exec(paramName)[1];
                    obj[key][index] = paramValue;
                } else {
                    // otherwise add the value to the end of the array
                    obj[key].push(paramValue);
                }
            } else {
                // we're dealing with a string
                if (!obj[paramName]) {
                    // if it doesn't exist, create property
                    obj[paramName] = paramValue;
                } else if (obj[paramName] && typeof obj[paramName] === 'string') {
                    // if property does exist and it's a string, convert it to an array
                    obj[paramName] = [obj[paramName]];
                    obj[paramName].push(paramValue);
                } else {
                    // otherwise add the property
                    obj[paramName].push(paramValue);
                }
            }
        }
    }

    return obj;
}
