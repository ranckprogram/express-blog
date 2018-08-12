/*
Navicat MySQL Data Transfer

Source Server         : lod
Source Server Version : 50553
Source Host           : localhost:3306
Source Database       : blog

Target Server Type    : MYSQL
Target Server Version : 50553
File Encoding         : 65001

Date: 2018-08-12 12:11:59
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for about_table
-- ----------------------------
DROP TABLE IF EXISTS `about_table`;
CREATE TABLE `about_table` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(32) NOT NULL,
  `summary` varchar(255) DEFAULT NULL COMMENT '摘要',
  `content` text NOT NULL,
  `src` varchar(300) NOT NULL COMMENT '头像',
  `follow` varchar(300) NOT NULL COMMENT '微信二维码',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of about_table
-- ----------------------------
INSERT INTO `about_table` VALUES ('1', 'ranck', '，一个80后草根女站长！09年入行。一直潜心研究web前端技术，一边工作一边积累经验，分享一些个人博客模板，以及SEO优化等心得。', '杨青，女，一个80后草根女站长！09年入行。一直潜心研究web前端技术，一边工作一边积累经验，分享一些个人博客模板，以及SEO优化等心得。我入行早，大家也亲切的叫我“青姐”。\r\n\r\nSEO奋斗了将近两年时间，个人博客网站百度排名也从之前的30页后，排到了第一页。期间有很多的不容易，但是都没有放弃过。入了这一行，就深深的喜欢上它。我喜欢一句话“冥冥中该来则来，无处可逃”。\r\n\r\n近几年我也发现个人博客排前几页的也有很多是我做过的模板，感谢各位站长的欣赏，我仔细看过他们的网站。他们在我原模板的基础上有修改，而且他们做的原创内容都是值得一读的。有时候甚至排名都超过了我个人博客网站的排名。\r\n\r\n现在很多人向我请教如何做好SEO，我想说的是，一是“代码”，一定要简单，布局要合理。二是“内容”，一定要有原创，伪原创也是可以的。三是“持续”，这是一个持续性过程，一定要有耐心，SEO不是马上生效的。\r\n\r\n自从入了这一行，也交到了不少朋友，QQ群也不断的壮大起来，280998807(交流群 已满员)  280998843（技术群），群里的小伙伴们也很积极的帮助新朋友解决问题，如果你想加入我们，这个大家庭的门，永远给你敞开！另外微信群已于2018.4.13日开通（已满100，只接受群主邀请，可加我个人微信进群 。我的个人微信号 yangqq_1987）', '/upload/11.jpg', '/upload/weixin.gif');

-- ----------------------------
-- Table structure for album_picture_table
-- ----------------------------
DROP TABLE IF EXISTS `album_picture_table`;
CREATE TABLE `album_picture_table` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `album_id` int(11) NOT NULL,
  `pic_id` int(255) NOT NULL COMMENT '上传的图片的ID',
  `src` varchar(300) NOT NULL COMMENT '图片地址',
  `title` varchar(300) NOT NULL COMMENT '图片名字',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=49 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of album_picture_table
-- ----------------------------
INSERT INTO `album_picture_table` VALUES ('39', '44', '34', '', '');
INSERT INTO `album_picture_table` VALUES ('40', '45', '35', '', '');
INSERT INTO `album_picture_table` VALUES ('41', '46', '36', '', '');
INSERT INTO `album_picture_table` VALUES ('42', '46', '37', '', '');
INSERT INTO `album_picture_table` VALUES ('43', '47', '48', '', '');
INSERT INTO `album_picture_table` VALUES ('44', '47', '49', '', '');
INSERT INTO `album_picture_table` VALUES ('45', '48', '48', '', '');
INSERT INTO `album_picture_table` VALUES ('46', '48', '49', '', '');
INSERT INTO `album_picture_table` VALUES ('47', '48', '50', '', '');
INSERT INTO `album_picture_table` VALUES ('48', '48', '51', '', '');

-- ----------------------------
-- Table structure for album_table
-- ----------------------------
DROP TABLE IF EXISTS `album_table`;
CREATE TABLE `album_table` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `describe` varchar(255) NOT NULL,
  `like` int(32) NOT NULL DEFAULT '0',
  `time` varchar(32) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=49 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of album_table
-- ----------------------------
INSERT INTO `album_table` VALUES ('38', '相册一', '啊哈哈哈', '0', '2018-08-12');
INSERT INTO `album_table` VALUES ('39', '相册一', '啊哈哈哈', '0', '2018-08-12');
INSERT INTO `album_table` VALUES ('40', '新·', '为单位', '0', '2018-08-12');
INSERT INTO `album_table` VALUES ('41', '123', '13', '0', '2018-08-12');
INSERT INTO `album_table` VALUES ('42', '乐山一日游', '我和小女朋友', '0', '2018-08-12');
INSERT INTO `album_table` VALUES ('43', '乐山一日游', '我和小女朋友', '0', '2018-08-12');
INSERT INTO `album_table` VALUES ('44', '1', '1', '0', '2018-08-12');
INSERT INTO `album_table` VALUES ('45', '12313', '13123', '0', '2018-08-12');
INSERT INTO `album_table` VALUES ('46', '乐山一日游', '我和她', '0', '2018-08-12');
INSERT INTO `album_table` VALUES ('47', 'hahah ', 'success', '0', '2018-08-12');
INSERT INTO `album_table` VALUES ('48', '四川到处游', 'success', '1', '2018-08-12');

-- ----------------------------
-- Table structure for article_category_table
-- ----------------------------
DROP TABLE IF EXISTS `article_category_table`;
CREATE TABLE `article_category_table` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(32) NOT NULL COMMENT '分类名称',
  `type` tinyint(32) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of article_category_table
-- ----------------------------
INSERT INTO `article_category_table` VALUES ('1', '学无止境', '1');
INSERT INTO `article_category_table` VALUES ('2', '日记', '2');
INSERT INTO `article_category_table` VALUES ('3', '慢生活', '3');

-- ----------------------------
-- Table structure for article_table
-- ----------------------------
DROP TABLE IF EXISTS `article_table`;
CREATE TABLE `article_table` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `date` varchar(10) NOT NULL,
  `author` varchar(32) NOT NULL COMMENT '作者',
  `read` int(11) NOT NULL DEFAULT '0',
  `summary` varchar(300) NOT NULL COMMENT '摘要',
  `labels` varchar(11) NOT NULL COMMENT '多个labe',
  `like` int(11) NOT NULL DEFAULT '0',
  `content` text NOT NULL,
  `category` tinyint(16) NOT NULL COMMENT '文章类型\r\n',
  `src` varchar(300) NOT NULL COMMENT '图片',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=12 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of article_table
-- ----------------------------

-- ----------------------------
-- Table structure for label_table
-- ----------------------------
DROP TABLE IF EXISTS `label_table`;
CREATE TABLE `label_table` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(32) NOT NULL,
  `type` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of label_table
-- ----------------------------
INSERT INTO `label_table` VALUES ('1', 'ranck博客', '1');
INSERT INTO `label_table` VALUES ('2', 'ranck世界', '2');
INSERT INTO `label_table` VALUES ('3', '彼岸花开', '3');

-- ----------------------------
-- Table structure for picture_table
-- ----------------------------
DROP TABLE IF EXISTS `picture_table`;
CREATE TABLE `picture_table` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `filename` varchar(300) NOT NULL,
  `path` varchar(300) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=52 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of picture_table
-- ----------------------------
INSERT INTO `picture_table` VALUES ('28', 'timg', 'upload/86a218a200f7f73896cf1b4395d5ff6b.jpg');
INSERT INTO `picture_table` VALUES ('29', '文文', 'upload/6ccd9dd3e1d546c5d7edc6739f3cb4b3.jpg');
INSERT INTO `picture_table` VALUES ('30', '文文', 'upload/58abf6dc01393dcad7ace92dc7075cc2.jpg');
INSERT INTO `picture_table` VALUES ('31', 'timg', 'upload/ec4432bf8195eb061d2f51b24e921051.jpg');
INSERT INTO `picture_table` VALUES ('32', '文文', 'upload/59666239236c8f669c8efeb9e222f782.jpg');
INSERT INTO `picture_table` VALUES ('33', 'timg', 'upload/55d8b90b81a1c8bb74abb5e6e25c2a8e.jpg');
INSERT INTO `picture_table` VALUES ('34', '文文', 'upload/23b4b442b1746d1f2d8ff2c34eea0493.jpg');
INSERT INTO `picture_table` VALUES ('35', '文文', 'upload/d40a87d65984da00a195d9ac5201b951.jpg');
INSERT INTO `picture_table` VALUES ('36', 'bVuLWV', '/upload/f59bb35395bba352af91e410bc232db5.png');
INSERT INTO `picture_table` VALUES ('37', '文文', '/upload/a33a9d85e7602ee81d530d72bba8dd2b.jpg');
INSERT INTO `picture_table` VALUES ('38', '文文', '/upload/1b1937a4a1573f70ea391499b64340d1.jpg');
INSERT INTO `picture_table` VALUES ('39', '文文', '/upload/4b958115ac072c3fa4dba32d0bb9d918.jpg');
INSERT INTO `picture_table` VALUES ('40', '文文', '/upload/12e606cbed668a3a8dad97d412526e56.jpg');
INSERT INTO `picture_table` VALUES ('41', '文文', '/upload/6037203154681ad144370c7ffba78fff.jpg');
INSERT INTO `picture_table` VALUES ('42', 'timg', '/upload/7093d339e9807ed43ce5558df84134da.jpg');
INSERT INTO `picture_table` VALUES ('43', '文文', '/upload/a3ab622b30786f49ac4749ae3064583e.jpg');
INSERT INTO `picture_table` VALUES ('44', '文文', '/upload/978a74709dfdf3c1a52f4b3e69a5bfd8.jpg');
INSERT INTO `picture_table` VALUES ('45', '文文', '/upload/54a6318e1c523be61795f391f498aa0b.jpg');
INSERT INTO `picture_table` VALUES ('46', 'timg (3)', '/upload/a849fd82adf406949c86a0765b6eabcf.jpg');
INSERT INTO `picture_table` VALUES ('47', 'timg (3)', '/upload/242317944a726bdfc81d0a56f61acfcb.jpg');
INSERT INTO `picture_table` VALUES ('48', '文文', '/upload/3e90187b0963218db6a7869998899111.jpg');
INSERT INTO `picture_table` VALUES ('49', '文文', '/upload/f44ce11dedfc7ec64269da768ddd0c16.jpg');
INSERT INTO `picture_table` VALUES ('50', 'timg (3)', '/upload/f47cac59e76de70a39cb8019a9de550f.jpg');
INSERT INTO `picture_table` VALUES ('51', 'timg (2)', '/upload/884c42d405921ac9b2ec1c46a07ca5d7.jpg');
