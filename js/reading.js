$(document).ready(function() {
    
    // 檢查上一頁、下一頁是否要改變為首頁/末頁樣式
    changeComicPage(currentPage);
   
    // 定時更換廣告
    adTimer = setInterval(changeAd, adInterval);

    //*****************************************************
    //按下UI背景選擇器時的反應
    $('.uiStyleSelector').click(function(event)
    {        
        switch(currentUiStyle)
        {
            // 亮色背景UI
            case "brightColorUi":
                currentUiStyle = "darkColorUi";
                turnOnDarkColorUi(); 
                changeUiStyle(currentUiStyle);
                break;

            // 暗色背景UI
            case "darkColorUi":
                currentUiStyle = "brightColorUi";
                turnOnBrightColorUi();
                changeUiStyle(currentUiStyle); 
                break;

            // 其他狀況
            default:
                alert("UI Style 錯誤");
                break;
        }
    });

    //*****************************************************
    // 使用「下拉式選單」換頁
    $("#pageSelector").change(function()
    {
        currentChapter = Number($("#chapterSelector option:selected").val());
        changeComicPage(Number($("#pageSelector option:selected").val()));
    });

    //*****************************************************
    // 按下「上一頁」按鈕
    $('.prevBtn').click(function(event)
    {  
        if (currentPage > 1)
        {
            changeComicPage(currentPage - 1);
        }
        else
        {
            alert("此頁是第一頁");
        }
    });

    // 按下「下一頁」按鈕
    $('.nextBtn').click(function(event)
    {
        if (currentPage < comicData.chapter[currentChapter - 1].comicImg_big.length)
        {
            changeComicPage(currentPage + 1);
        } 
        else
        {
            alert("此頁已是最後一頁");
        }
    });

    //*****************************************************
    // 切換介面Style時改變相應成相應的style class
    function changeUiStyle(usingUiStyle)
    {              
        var changeUiCss = "css/" + usingUiStyle + ".css";
        $('#uiStyle').attr("href", changeUiCss);
    }

    // 切換至暗色背景開關的動畫
    function turnOnDarkColorUi()
    {
        $('.uiStyleSelectorBox_SwitchCube').stop().animate({'left':'22px'}, 100);
    }

    // 切換至亮色背景開關的動畫
    function turnOnBrightColorUi()
    {
        $('.uiStyleSelectorBox_SwitchCube').stop().animate({'left':'0px'}, 100);
    }

    //*****************************************************
    // 漫畫換頁
    function changeComicPage(newPageNumber)
    {       
        currentPage = newPageNumber;
        var newPageSrc = "img/" + comicData.chapter[currentChapter - 1].comicImg_big[newPageNumber - 1];
        $('.showComicArea img').attr("src", newPageSrc);
        
        // 檢查若是第一頁或最後一頁，換頁按鈕樣式會改變
        checkFirstAndLastPage();
        
        // 把下拉式選單的Page更新成新的頁面
        changeSelectOption();
    }

    // 若漫畫是第一頁或最後一頁，上一頁&下一頁按鈕改變樣式
    function checkFirstAndLastPage()
    {
        if (currentPage == 1)
        {
            $('.prevBtn').addClass("firstPageBtn");
            $('.nextBtn').removeClass("lastPageBtn");
        } 
        else if (currentPage == comicData.chapter[currentChapter - 1].comicImg_big.length)
        {
            $('.prevBtn').removeClass("firstPageBtn");
            $('.nextBtn').addClass("lastPageBtn");
        } 
        else 
        {
            $('.prevBtn').removeClass("firstPageBtn");
            $('.nextBtn').removeClass("lastPageBtn");
        }
    }

    // 把下拉式選單的Chapter跟Page的selected更新
    function changeSelectOption()
    {       
        document.getElementById("chapterSelector").options[currentChapter - 1].selected=true;
        document.getElementById("pageSelector").options[currentPage - 1].selected=true;
    }

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