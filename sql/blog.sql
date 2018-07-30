/*
Navicat MySQL Data Transfer

Source Server         : lod
Source Server Version : 50553
Source Host           : localhost:3306
Source Database       : blog

Target Server Type    : MYSQL
Target Server Version : 50553
File Encoding         : 65001

Date: 2018-07-30 18:30:17
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
  `src` varchar(300) NOT NULL COMMENT '图片地址',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=12 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of album_picture_table
-- ----------------------------
INSERT INTO `album_picture_table` VALUES ('1', '1', '/upload/2.jpg');
INSERT INTO `album_picture_table` VALUES ('2', '1', '/upload/5.jpg');
INSERT INTO `album_picture_table` VALUES ('3', '2', '/upload/8.jpg');
INSERT INTO `album_picture_table` VALUES ('4', '3', '/upload/9.jpg');
INSERT INTO `album_picture_table` VALUES ('5', '4', '/upload/5.jpg');
INSERT INTO `album_picture_table` VALUES ('6', '5', '/upload/4.jpg');
INSERT INTO `album_picture_table` VALUES ('7', '6', '/upload/5.jpg');
INSERT INTO `album_picture_table` VALUES ('8', '7', '/upload/5.jpg');
INSERT INTO `album_picture_table` VALUES ('9', '8', '/upload/5.jpg');
INSERT INTO `album_picture_table` VALUES ('10', '9', '/upload/5.jpg');
INSERT INTO `album_picture_table` VALUES ('11', '10', '/upload/5.jpg');

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
) ENGINE=MyISAM AUTO_INCREMENT=13 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of album_table
-- ----------------------------
INSERT INTO `album_table` VALUES ('1', '1《古剑》小师妹迪丽热巴清新写真宛若小仙女bb', '游览普陀山一天时间足够了，如果考虑到还要来还愿，那就没必要一次把所有的地方都去到，如果只是单纯的旅游，那就把最重要的地方看看就可以了，普陀山并不是以景色著称的。普陀山上住宿餐饮价格都非常贵，住宿还好说，毕竟供不应求嘛，尤其是节假日，想要提前预定都不一定有房间，餐饮更是离谱，一般都是岛外四五倍的价格。所以建议大家像我们一样住在朱家尖，莲花路是朱家尖镇的中心，比较繁华热闹，住宿餐饮都集中在那里，岛上游玩去庙里体验素斋就可以啦。', '49', '2018-07-26 13:36:11');
INSERT INTO `album_table` VALUES ('2', '上戏校花迪丽热巴清新写真宛若小仙女\r\n', 'afddhfdfdasd', '7', '2018-07-17 13:36:14');
INSERT INTO `album_table` VALUES ('3', 'sdfhjds福德', '速度快解放后空间大书法家', '45', '0000-00-00 00:00:00');
INSERT INTO `album_table` VALUES ('4', '似懂非4懂反攻倒算', '电饭锅地方我认为', '2', '0000-00-00 00:00:00');
INSERT INTO `album_table` VALUES ('5', '个推广团队福特', '请问退换货', '0', '0000-00-00 00:00:00');
INSERT INTO `album_table` VALUES ('6', '神鼎飞丹砂', '个人购房', '0', '0000-00-00 00:00:00');
INSERT INTO `album_table` VALUES ('7', '阿斯顿撒多', '阿斯顿撒的无', '0', '0000-00-00 00:00:00');
INSERT INTO `album_table` VALUES ('8', '阿萨德股份风格的', '阿萨德饭饭惹 ', '0', '');
INSERT INTO `album_table` VALUES ('9', '9冠福股份', '顺德区奥所多', '0', '');
INSERT INTO `album_table` VALUES ('10', '大风大雨', '尔尔规范', '0', '');
INSERT INTO `album_table` VALUES ('11', '安海医院', '谭耀文', '0', '');
INSERT INTO `album_table` VALUES ('12', '三顿饭如意投', '太热问问', '0', '');

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
INSERT INTO `article_table` VALUES ('1', 'express ejs 模板继承的问题\r\nexpress ejs 模板继承的问题', '2018-07-24', '', '0', '；是检索还是更新；是顺序检索还是随机检索等。\r\n另外“流入的数据流”要指出其来源，“流出的数据流”要指出其去向。\r\n⑤处理过程：数据流图中功能块的说明\r\n数据字典中只需要描述处理过程的说明性信息，通常包括以下内容：\r\n处理过程描述={处理过程名，说明，输入:{数据流}，输出:{数', '1,2', '6', '教程上说默认情况下所有的模板都继承自layout.ejs\r\n可是我新下的express安装后，views文件夹只有index.ejs\r\n查了下说express3.0已经把layout概念移除了\r\n那我怎样做到继承呢', '1', '/upload/11.jpg');
INSERT INTO `article_table` VALUES ('2', 'mysql建表的时候为什么int长度设成11\r\n', '2018-07-24', '', '0', '简要说明”中主要说明该处理过程的功能及处理要求。功能是指该处理过程用来做什么（而不是怎么做）；处理要求包括处理频度要求，如单位时间里处理多少事务，多少数据量，响应时间要求等，这些处理要求是后面物理设计的输入及性能评价的标准。', '2,3', '2', '您好，int(m),integer(m) 32位整数（4字节....)\r\n其实这个m跟INT能表示的范围没有关系，只要你选择了INT，INT是用4个字节表示，1个字节8位，若表示无符号数时可以表示的范围是 0 ------- 232-1 ，你可以存储任何在这个范围内的数字。\r\n但也不是说跟表示完全没关系，mysql中有个zerofll,当建表时选择了0 填充之后存储就会有很大的不同，这时如果你选择的是int(4) 你存储12则数据库中存储的是0012，如果填写12345，此时超过了他的指定宽度则按原样存储。', '1', '/upload/12.jpg');
INSERT INTO `article_table` VALUES ('3', '呜呜', '2018-07-25', '', '0', '数据项是不可再分的数据单位。对数据项的描述通常包括以下内容：\r\n数据项描述={数据项名，数据项含义说明，别名，数据类型，长度，\r\n取值范围，取值含义，与其他数据项的逻辑关系}\r\n其中“取值范围”、“与其他数据项的逻辑关系”定义了数据的完整', '2', '5', '22', '2', '');
INSERT INTO `article_table` VALUES ('4', '热一热同个地方斯蒂芬', '2018-07-25', '', '0', '数据字典是数据库的重要组成部分。它存放有数据库所用的有关信息，对用户来说是一组只读的表。数据字典内容包括：\r\n1、数据库中所有模式对象的信息，如表、视图、簇、及索引等。', '0', '1', '214而', '1', '');
INSERT INTO `article_table` VALUES ('5', 'L先生', '2018-07-27', 'L先生', '0', '通勤路上，听听节目，看看新闻，刷刷朋友圈和知乎；\r\n\r\n到了公司，接着前一天的工作做下去，填填表格，写写PPT，开个会，一天就过去了；\r\n\r\n下班路上，看点小说换换脑子，或者刷几篇公众号……', '0', '1', '你会不会有这样的感觉：\r\n\r\n\r\n\r\n碰到问题，总感觉思维转不过弯来；\r\n\r\n头脑风暴，别人能想出很多点子，自己却一个都想不到；\r\n\r\n考虑东西总是不周全，被指出之后才惊觉「我怎么没想到」……\r\n\r\n\r\n\r\n这些，经常能从读者口中听到。\r\n\r\n\r\n\r\n其实，这很正常。\r\n\r\n\r\n\r\n我们都知道，大脑和肌肉一样，需要不断锻炼，才能活化它的运转效率和机能。\r\n\r\n\r\n\r\n但是，在现实中，我们每天，其实都是在遵循着习惯和经验生活。\r\n\r\n\r\n\r\n通勤路上，听听节目，看看新闻，刷刷朋友圈和知乎；\r\n\r\n到了公司，接着前一天的工作做下去，填填表格，写写PPT，开个会，一天就过去了；\r\n\r\n下班路上，看点小说换换脑子，或者刷几篇公众号……\r\n\r\n\r\n\r\n想一想，你有多久，没有主动思考过，而是被动接受信息，被动按照习惯的模式去工作和生活？\r\n\r\n\r\n\r\n习惯让我们遵循最简单的路径，一方面节省我们的精力，另一方面，却也在让我们的大脑停滞下来。\r\n\r\n\r\n\r\n这就是我强调「深度思考」的原因。\r\n\r\n\r\n\r\n只有践行深度思考，才能最大程度地抵抗我们的惯性，让我们不再平庸下去。\r\n\r\n\r\n\r\n如果你没有太多深度思考的机会，不要紧，一步步来。\r\n\r\n先养成主动思考的习惯，慢慢的，让大脑开始运转起来。\r\n\r\n\r\n\r\n今天，分享几个切实有效的小技巧，能帮你在生活中，逐步锻炼自己的大脑。\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n1. 建立边界意识\r\n\r\n\r\n\r\n掌控我们的大脑，第一步，就是要重新找回，对它发号施令的权力。\r\n\r\n\r\n\r\n很多同学经常问我：在网上浏览信息的过程中，经常一个接一个地打开网页，思维一不小心就飘了出去，到头来感觉什么都没得到，却白白浪费了大把时间，怎么破？\r\n\r\n\r\n\r\n其实，这个问题，根源就在于，没有建立起「边界意识」。\r\n\r\n\r\n\r\n什么是边界意识？简单来说就是：\r\n\r\n我想要什么？我为什么要？我需要做什么？\r\n\r\n\r\n\r\n也就是说：你对自己的需求和念头，必须拥有非常清晰的认知 —— 你会清楚地知道，哪些东西是你需要的，哪些是你不需要的。\r\n\r\n\r\n\r\n但是，所有的互联网产品，都有一个特点：它们在拼命地争夺你的时间和注意力。\r\n\r\n\r\n\r\n标题党，智能推荐，超链接，预加载，瀑布流，沉浸式体验……它们想要的，就是让你不断地打开一条又一条消息，沉浸在它们为你创造的「信息流」刺激中。\r\n\r\n', '2', '/upload/2.jpg');
INSERT INTO `article_table` VALUES ('6', '程序员如何写文档', '', '', '0', '风格飒沓 佛挡杀佛司法所地方', '', '0', '第四，尽量不要直接在文档中贴代码，而换之以伪代码、流程图等形式。 \r\n也许是为了省事，很多程序员喜欢将工程代码直接粘贴到文档中，这不仅会占用大量的文档篇幅，而且会降低文档的可读性。试想，一个从没有接触过代码的人，如何能够看懂你在文档中给出的代码？即使对于有经验的程序员来说，一眼看到你写出来的程序，也不见得能够一下就明白的。 \r\n如果你写的代码确实很好，想给别人看，那么在正文中可以只给出设计思想、流程图等，而在附录中给出完整的代码。\r\n\r\n以上几点写文档的建议是本人在写文档过程中的一些心得体会，不见得都正确，大家可以参考。总的说来，文档的编写要遵循简单易懂的原则，要用最直接明了的方式来表达作者本人的意思。 \r\n爱因斯坦曾说过：“科学家应该使用最简单的手段达到他们的结论，并排除一切不能被认识到的事物”。也就是说，简单就是美。这个“简单”的原则同样可以应用到文档编写中，应用到所有的软件开发项目中。\r\n\r\n', '0', '');
INSERT INTO `article_table` VALUES ('7', 'mysql limit 分页', '', '', '0', '，假设数据库表student存在13条数据。', '', '0', '代码示例:\r\n语句1：select * from student limit 9,4\r\n语句2：slect * from student limit 4 offset 9\r\n// 语句1和2均返回表student的第10、11、12、13行 ，第一个参数表示从该参数的下一条数据开始，第二个参数表示每次返回的数据条数。\r\n//语句2中的4表示返回4行，9表示从表的第十行开始\r\n\r\n例2，通过limit和offset 或只通过limit可以实现分页功能。\r\n假设 pageSize表示每页要显示的条数，pageNumber表示页码，那么 返回第pageNumber页，每页条数为pageSize的sql语句：\r\n \r\n\r\n代码示例:\r\n语句3：select * from studnet limit (pageNumber-1)*pageSize,pageSize\r\n语句4：select * from student limit pageSize offset (pageNumber-1)*pageSize\r\n\r\n ', '0', '');
INSERT INTO `article_table` VALUES ('8', 'linux安装', '', '', '0', '简介：软件安装对于操作系统来说是常用的操作，那如何在Linux中使用命令进行软件安装呢？本课程就带你来了解Linux中的软件如何进行安装、卸载、升级等管理。课程内容包括rpm命令管理、yum在线管理、源码包管理和脚本安装包。', '', '0', '简介：软件安装对于操作系统来说是常用的操作，那如何在Linux中使用命令进行软件安装呢？本课程就带你来了解Linux中的软件如何进行安装、卸载、升级等管理。课程内容包括rpm命令管理、yum在线管理、源码包管理和脚本安装包。', '0', '');
INSERT INTO `article_table` VALUES ('9', '一个使用node框架express写的博客\r\n9一个使用node框架express写的博客\r\n', '', '', '0', '一个使用node框架express写的博客\r\n', '', '0', '一个使用node框架express写的博客\r\n', '0', '');
INSERT INTO `article_table` VALUES ('10', '俗话说，再穷不能穷教育，再苦不能苦孩子。\r\n\r\n', '', '', '0', '俗话说，再穷不能穷教育，再苦不能苦孩子。\r\n\r\n街道上，人群中，我见识过许多家长的教育，说实话，我觉得很痛心。\r\n\r\n我不明白，有些家长为什么会放任孩子的任性，孩子想要的玩具，要不就是开口就买，或者打骂孩子一顿，弄得孩子哭哭啼啼，我并不认为，这样的教育，会对孩子的成长有利。\r\n\r\n我自认为，孩子有想要的玩具，这很正常，我小的时候，我想要芭比娃娃，美丽的皇冠，我也哭，我也闹，甚至在超市的专柜面前不走了。我的父母并没有立即做出决定，而是耐心的教导我，告诉我，大人挣钱，是不容易的，久而久之，我在想买一件物品时，必定是先看标价。', '', '0', '俗话说，再穷不能穷教育，再苦不能苦孩子。\r\n\r\n街道上，人群中，我见识过许多家长的教育，说实话，我觉得很痛心。\r\n\r\n我不明白，有些家长为什么会放任孩子的任性，孩子想要的玩具，要不就是开口就买，或者打骂孩子一顿，弄得孩子哭哭啼啼，我并不认为，这样的教育，会对孩子的成长有利。\r\n\r\n我自认为，孩子有想要的玩具，这很正常，我小的时候，我想要芭比娃娃，美丽的皇冠，我也哭，我也闹，甚至在超市的专柜面前不走了。我的父母并没有立即做出决定，而是耐心的教导我，告诉我，大人挣钱，是不容易的，久而久之，我在想买一件物品时，必定是先看标价。', '0', '');
INSERT INTO `article_table` VALUES ('11', '《文章》包括各种文体的著作、作品，如诗歌、戏剧、小说、科学论文，记叙文、议论文、说明文、应用文等等。“千古文章未尽才”“文章千古事”“文章憎命', '', '', '0', '《文章》包括各种文体的著作、作品，如诗歌、戏剧、小说、科学论文，记叙文、议论文、说明文、应用文等等。“千古文章未尽才”“文章千古事”“文章憎命', '', '0', '《文章》包括各种文体的著作、作品，如诗歌、戏剧、小说、科学论文，记叙文、议论文、说明文、应用文等等。“千古文章未尽才”“文章千古事”“文章憎命', '0', '');

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
