var jsonComicData = [
    {
        "name": "My Hexschool",
        "comicCover": "comicCover_home.jpg",
        "genres": "Fusce/vehicula/dolor",
        "author": "Namae Shiranai",
        "status": "Ongoing",
        "rate": 4,
        "summary": "If your banker breaks, you snap; if your apothecary by mistake sends you poison in your pills, you die. <br><br>Therefore, I say, I saw that this situation of mine was the precise situation of every mortal that has this Siamese connexion with a plurality of other mortals. ",
        "chapter": [
            {
                "title": "Chapter 1: The F2E Challenge Start!" ,
                "comicImg_big": ["storyboard-1.png", "storyboard-2.png", "storyboard-3.png", "storyboard-4.png", "storyboard-5.png", "storyboard-6.png", "storyboard-7.png", "storyboard-8.png", "storyboard-9.png", "storyboard-10.png", "storyboard-11.png", "storyboard-12.png"],
                "comicImg_small": ["storyboard_small-1.jpg", "storyboard_small-2.png", "storyboard_small-3.png", "storyboard_small-4.png", "storyboard_small-5.png", "storyboard_small-6.png", "storyboard_small-7.png", "storyboard_small-8.png", "storyboard_small-9.png", "storyboard_small-10.png", "storyboard_small-11.png", "storyboard_small-12.png"]
            },
            {
                "title": "Chapter 2: Todo List is Going Crazy!" ,
                "comicImg_big": ["storyboard-1.png", "storyboard-2.png", "storyboard-3.png", "storyboard-4.png", "storyboard-5.png", "storyboard-6.png", "storyboard-7.png", "storyboard-8.png", "storyboard-9.png", "storyboard-10.png", "storyboard-11.png", "storyboard-12.png"],
                "comicImg_small": ["storyboard_small-1.jpg", "storyboard_small-2.png", "storyboard_small-3.png", "storyboard_small-4.png", "storyboard_small-5.png", "storyboard_small-6.png", "storyboard_small-7.png", "storyboard_small-8.png", "storyboard_small-9.png", "storyboard_small-10.png", "storyboard_small-11.png", "storyboard_small-12.png"]
            }
        ]
    }
];

var jsonAdData = {
    "imgName": ["ad-1", "ad-2", "ad-3"]
};

// 當前使用的UI Style是哪一個
var currentUiStyle = "brightColorUi";

// 當前頁數是第幾頁
var currentPage = 1;
var currentChapter = 1;
var comicData = jsonComicData[0];

// 定時隨機更換廣告的計時器
var adTimer;
var adInterval = 2000;