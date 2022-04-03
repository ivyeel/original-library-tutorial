//ライブラリ作成
const myOriginalLibrary = (a, b) => {
    return console.log(a + b);
};

// myOriginalLibrary(1,2);

//誰でも使える形にエクスポート、今回は動作テストなし
module.exports = myOriginalLibrary;
