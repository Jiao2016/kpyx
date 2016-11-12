function hitPix(canvas, obj1, obj2) {
  var ctx = canvas.getContext('2d');
  //先进行矩形碰撞的检测
  if (obj1.x + obj1.width < obj2.x || obj2.x + obj2.width < obj1.x || obj1.y + obj1.height < obj2.y || obj2.y + obj2.height < obj1.y) {
    return false;
  }
  //先找到左边缘最小的
  var minx = obj1.x < obj2.x ? obj1.x : obj2.x;
  //再找到右边缘最大的
  var maxx = obj1.x + obj1.width > obj2.x + obj2.width ? obj1.x + obj1.width : obj2.x + obj2.width;
  //先找到上边缘最小的
  var miny = obj1.y < obj2.y ? obj1.y : obj2.y;
  //再找到下边缘最大的
  var maxy = obj1.y + obj1.height > obj2.y + obj2.height ? obj1.y + obj1.height : obj2.y + obj2.height;
  //把整个区域清空
  ctx.clearRect(minx, miny, maxx - minx, maxy - miny);
  //单独绘制第一个对象
  obj1.draw();
  //获取整个范围内的数据
  var data1 = ctx.getImageData(minx, miny, maxx - minx, maxy - miny);
  //再次清空
  ctx.clearRect(minx, miny, maxx - minx, maxy - miny);
  obj2.draw();
  var data2 = ctx.getImageData(minx, miny, maxx - minx, maxy - miny);
  obj1.draw();
  //data1 和data2 分别是单独绘制图形一和图形2时候的像素数据
  var length = data1.data.length;
  for (var i = 3; i < length; i += 4) {
    if (data1.data[i] > 0 && data2.data[i] > 0) {
      return true;
    }
  }
}
