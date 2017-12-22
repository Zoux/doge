/**
 * doge
 * v1.0
 *
 * ------------
 *
 * 内容结构：
 *
 * --- 字符串模块
 * ------ trim(str, type)         去除空格
 * ------ changeCase(str, type)   大小写转换
 * ------ replace(str, find, rep) 关键词替换
 */


const doge = {
  /**
   * trim(str, type)
   *
   * @str     {string} 待处理的字符串
   * @type    {number} 1-前后空格 2-所有空格 3-前空格 4-后空格
   *
   * @return  {string} 处理后的字符串
   */
  trim(str, type = 1) {
    switch (type) {
      case 1:
        return str.replace(/(^\s*)|(\s*$)/g, '');
      case 2:
        return str.replace(/\s+/g, '');
      case 3:
        return str.replace(/(^\s*)/g, '');
      case 4:
        return str.replace(/(\s*$)/g, '');
      default:
        return str;
    }
  },

  /**
   * changeCase(str, type)
   *
   * @str     {string} 待处理的字符串
   * @type    {number} 1-全部大写 2-全部小写 3-首字母大写 4-大小写转换
   *
   * @return  {string} 处理后的字符串
   */
  changeCase(str, type = 1) {
    switch (type) {
      case 1:
        return str.toUpperCase();
      case 2:
        return str.toLowerCase();
      case 3:
        return str.replace(/\b\w+\b/g, word => word.substring(0, 1).toUpperCase() + word.substring(1).toLowerCase());
      case 4:
        const toggleCase = str => {
          let result = '';
          str.split('').forEach(item => {
            if (/^([a-z]+)/.test(item)) {
              result += item.toUpperCase();
            } else if (/^([A-Z]+)/.test(item)) {
              result += item.toLowerCase();
            } else {
              result += item;
            }
          });
          return result;
        };
        return toggleCase(str);
      default:
        return str;
    }
  },

  /**
   * replace(str, find, rep)
   *
   * @str     {string} 待处理的字符串
   * @find    {string} 被替换的关键词
   * @rep     {any}    替换为什么
   *
   * @return  {string} 处理后的字符串
   */
  replace(str, find, rep) {
    const RegExpResult = new RegExp(find, 'g');
    return str.replace(RegExpResult, rep);
  },
};

console.log(
  doge.replace('哈哈哈aaa', 'a', {})
);
