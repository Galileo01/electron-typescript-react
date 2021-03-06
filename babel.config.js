module.exports = {
  presets: [
    '@babel/preset-env',
    '@babel/preset-react',
    '@babel/preset-typescript'
  ],
  plugins: [
    [
        'import', //按需加载 ant design
        { libraryName: 'antd', libraryDirectory: 'es', style: 'css' },
        //设置为true 会报错，需要另外开启 js 把less 转化为内  css，这里直接使用css 简单设置
    ],
],
}
