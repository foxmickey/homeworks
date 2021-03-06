// 加 md5 及_ad3adf1等样式的后缀
fis.match('*.{js,css,png,gif,jpg}', {
  useHash: true
});
// 启用 fis-spriter-csssprites 插件 
fis.match('::packager', {
  spriter: fis.plugin('csssprites')
});

// 寻找js并将其定位
fis.match('*.js', {
  optimizer: fis.plugin('uglify-js'),
  release: '/$0'
});

// 寻找特定的单个文件  优先级最高
fis.match('jquery.min.js', {
  optimizer: fis.plugin('uglify-js'),
  release: '/js/jquery.js'
});

// 对 CSS 进行图片合并
fis.match('/css/*.css', {
  useSprite: true,
  optimizer: fis.plugin('clean-css'),
  release: '/$0'
});

// 转移images文件夹下的文件至指定位置
fis.match('image/*', {
  release: '/allclass/$0'
});
