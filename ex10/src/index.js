function myFunction() {
    var myMusic = {
        001: {
            artist: "Billy Joel",
            title: "Piano Man",
            release_year: 1973,
            formats: {
                1: "CD",
                2: "81",
                3: "LP"
            },
            gold: true
        },
        002: {
            // Add a record here
            artist: "Eric Clapton",
            title: "I Still Do",
            release_year: 2016,
            formats: {
                1: "CD",
                2: "USB",
                3: "LP"
            },
            gold: false
        }
    };
    return myMusic
}

myFunction()[2];
module.exports = myFunction;