$(function(){
	//下拉菜单进入时打开
	$(".dropdown-toggle").on("mouseover",function(){      
		$(this).dropdown("toggle")
	 });
	 //下拉菜单离开时关闭
	$("#myMenu").on("mouseout",function(){
		$(this).dropdown("toggle")
	 });

	$(window).on("resize",function(){
		//1.1 获取窗口的宽度
		var clientW=$(window).width();
		//console.log(clientW);
		//1.2　设置临界值
		var isShowBigImage=clientW>=800;
		//console.log(isShowBigImage);
		//1.3获取所有的item
		var $allItems=$("#lb-carousel .item");
		//console.log($allItems)
		
		//1.4 遍历
		$allItems.each(function(index,item){
			//1.4.1 取出图片路径
			var src=isShowBigImage ? $(item).data("lg-img") : $(item).data("sm-img")
			var imgUrl='url("' + src +'")';
			
			//1.4.2 设置背景
			$(item).css({ 
				backgroundImage:imgUrl
			});
			//1.4.3 设置img标签
			if(!isShowBigImage){
				var $img="<img src='"+ src +"'>";
				$(item).empty().append($img);
			}
			else{
				$(item).empty();
			}
		});
		
	})
	//
	$(window).trigger("resize");
	
	//工具提示
	
	  $('[data-toggle="tooltip"]').tooltip()
	//4导航处理
	var allList = $(".mynav li");
	//console.log(allList.length);
	//4.1 到达指定位置"关于我们"
	 $(allList[2]).on("click" ,function(){
		$("html,body").animate({scrollTop:$("#lb_hot").offset().top},1000);
			 
	 })
	
})