<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title>JSON</title>
		<script>
			//遍历JSON对象
			var myJson = { 'name' : '刘兵' , 'age' : 18  };
			for( var key in myJson ){
			    document.write( key+' : '+myJson[key]+"<br>" );  
			}
			//遍历JSON数组
			var wqJson = [	{'name':'张三','age':19},
							{'name':'李四','age':20},
							{'name':'王五','age':21},
						]
			for(var i =0;i<wqJson.length;i++){
			    for(var j in wqJson[i]){
			        document.write(j+":"+wqJson[i][j]+"<br>")
			    }
			}
		</script>
	</head>
	<body>
	  
	</body>
	</html>