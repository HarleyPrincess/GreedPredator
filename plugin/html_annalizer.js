chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {
	//if (request == "Action") {
        //HtmlAnnalize();
        window.alert( "ぷぎゃーｗｗｗｗお前の正規表現へったくそやなマジｗｗｗｗｗｗｗ") ;
	//}
});

/*
function HtmlAnnalize()
{
        
    let pattern = RegExp(/https:\/\/i\.pinimg\.com[\/a-zA-Z0-9]+.jpg/g);
    let image_url_array = document.body.innerHTML.match(pattern);

    if( image_url_array != null )
    {
        var outStr = "URL：\n"
        image_url_array.forEach( url => 
        {
            outStr += url +"\n";
        } );

        //中身ゲロる
        window.alert(outStr);
        console.log(outStr);

    }else
    {
        window.alert( "ぷぎゃーｗｗｗｗお前の正規表現へったくそやなマジｗｗｗｗｗｗｗ") ;
    }

}*/