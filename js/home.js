$(document).ready(function() {
    
    // 定時更換廣告
    adTimer = setInterval(changeAd, adInterval);

    //*****************************************************
    //在首頁時，判斷選了哪章
    $('.goComicChapter1').click(function(event)
    {
        currentChapter = 1;
    });

    $('.goComicChapter2').click(function(event)
    {
        currentChapter = 2;
    });
    
    //*****************************************************
    // 隨機廣告
    function changeAd()
    {
        $('.ad_BeforeComicData').attr("src", "img/" + getRandomAd() + ".png");
        $('.ad_AfterComicData').attr("src", "img/" + getRandomAd() + ".png");
        
        $('.ad_BeforeControlBar').attr("src", "img/" + getRandomAd() + ".png");
        $('.ad_AfterControlBar').attr("src", "img/" + getRandomAd() + ".png");
        $('.ad_AfterFooter').attr("src", "img/" + getRandomAd() + ".png");

    }
    
    function getRandomAd()
    {
        // 產生一個 0 ~ 2.999999的值
        var num = Math.random() * 3;
        // 無條件捨去小數點
        num = Math.floor(num);
        // 隨機決定一個廣告圖片名稱
        return jsonAdData.imgName[num];
    }

});