/*
Navicat MySQL Data Transfer

Source Server         : useinf
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : useinf

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2018-12-24 18:00:51
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for goodlist
-- ----------------------------
DROP TABLE IF EXISTS `goodlist`;
CREATE TABLE `goodlist` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) DEFAULT NULL,
  `price` int(255) DEFAULT NULL,
  `url` varchar(255) DEFAULT NULL,
  `categroy` varchar(255) DEFAULT NULL,
  `time` varchar(255) DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=57 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of goodlist
-- ----------------------------
INSERT INTO `goodlist` VALUES ('23', '男士休闲时尚长裤 黑色9903', '552', '../img/goodlist/3.jpg', '时尚长裤', '2018-12-14', '0');
INSERT INTO `goodlist` VALUES ('24', '休闲裤 窄脚赤耳 轻弹 男款 卡其色', '564', '../img/goodlist/4.jpg', '时尚长裤', '2018-12-12', '0');
INSERT INTO `goodlist` VALUES ('25', '加绒保暖弹力休闲裤88252637 男款?', '576', '../img/goodlist/5.jpg', '加绒保暖', '2018-12-13', '1');
INSERT INTO `goodlist` VALUES ('26', '加绒保暖加厚弹力休闲裤88252646 男', '588', '../img/goodlist/6.jpg', '加绒保暖', '2018-12-14', '1');
INSERT INTO `goodlist` VALUES ('27', '加绒保暖弹力休闲裤88252637 男款?', '600', '../img/goodlist/7.jpg', '加绒保暖', '2018-12-15', '1');
INSERT INTO `goodlist` VALUES ('28', '加绒保暖加厚弹力休闲裤88252646 男', '612', '../img/goodlist/8.jpg', '加绒保暖', '2018-12-16', '1');
INSERT INTO `goodlist` VALUES ('29', '加绒保暖弹力休闲裤88252637 男款?', '624', '../img/goodlist/9.jpg', '加绒保暖', '2018-12-17', '1');
INSERT INTO `goodlist` VALUES ('30', '男士休闲时尚长裤 黑色9904', '337', '../img/goodlist/10.jpg', '修身直筒', '2018-12-18', '0');
INSERT INTO `goodlist` VALUES ('31', '男士休闲长裤 修身直筒 18FMS-K003?', '648', '../img/goodlist/1.jpg', '修身直筒', '2018-12-14', '1');
INSERT INTO `goodlist` VALUES ('32', '男士休闲长裤 修身直筒 18FMS-K002 ', '660', '../img/goodlist/2.jpg', '修身直筒', '2018-12-12', '0');
INSERT INTO `goodlist` VALUES ('33', '男士休闲时尚长裤 黑色9903', '399', '../img/goodlist/3.jpg', '时尚长裤', '2018-12-13', '0');
INSERT INTO `goodlist` VALUES ('34', '休闲裤 窄脚赤耳 轻弹 男款 卡其色', '684', '../img/goodlist/4.jpg', '时尚长裤', '2018-12-14', '1');
INSERT INTO `goodlist` VALUES ('35', '加绒保暖弹力休闲裤88252637 男款?', '696', '../img/goodlist/5.jpg', '加绒保暖', '2018-12-15', '1');
INSERT INTO `goodlist` VALUES ('36', '加绒保暖加厚弹力休闲裤88252646 男', '708', '../img/goodlist/6.jpg', '加绒保暖', '2018-12-16', '1');
INSERT INTO `goodlist` VALUES ('37', '加绒保暖弹力休闲裤88252637 男款?', '232', '../img/goodlist/7.jpg', '加绒保暖', '2018-12-17', '1');
INSERT INTO `goodlist` VALUES ('38', '加绒保暖加厚弹力休闲裤88252646 男', '732', '../img/goodlist/8.jpg', '加绒保暖', '2018-12-18', '1');
INSERT INTO `goodlist` VALUES ('39', '加绒保暖弹力休闲裤88252637 男款?', '744', '../img/goodlist/9.jpg', '加绒保暖', '2018-12-14', '0');
INSERT INTO `goodlist` VALUES ('40', '男士休闲时尚长裤 黑色9904', '756', '../img/goodlist/10.jpg', '时尚长裤', '2018-12-12', '1');
INSERT INTO `goodlist` VALUES ('41', '休闲裤 窄脚赤耳 轻弹 男款 卡其色', '768', '../img/goodlist/1.jpg', '修身直筒', '2018-12-13', '0');
INSERT INTO `goodlist` VALUES ('7', '休闲裤 窄脚赤耳 轻弹 男款 卡其色', '768', '../img/goodlist/1.jpg', '修身直筒', '2018-12-13', '0');

-- ----------------------------
-- Table structure for shopcar
-- ----------------------------
DROP TABLE IF EXISTS `shopcar`;
CREATE TABLE `shopcar` (
  `id` int(4) unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `price` int(10) NOT NULL,
  `num` int(4) NOT NULL,
  `total` int(6) NOT NULL,
  `url` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=1001 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of shopcar
-- ----------------------------
INSERT INTO `shopcar` VALUES ('30', '男士休闲时尚长裤 黑色9904', '337', '44', '14828', '../img/goodlist/10.jpg');
INSERT INTO `shopcar` VALUES ('27', '加绒保暖弹力休闲裤88252637 男款?', '600', '20', '12000', '../img/goodlist/7.jpg');
INSERT INTO `shopcar` VALUES ('31', '男士休闲时尚长裤 黑色9904', '337', '45', '15165', '../img/goodlist/10.jpg');
INSERT INTO `shopcar` VALUES ('29', '男士休闲时尚长裤 黑色9904', '337', '44', '14828', '../img/goodlist/10.jpg');
INSERT INTO `shopcar` VALUES ('28', '男士休闲时尚长裤 黑色9904', '337', '44', '14828', '../img/goodlist/10.jpg');
INSERT INTO `shopcar` VALUES ('26', '加绒保暖弹力休闲裤88252637 男款?', '600', '20', '12000', '../img/goodlist/7.jpg');
INSERT INTO `shopcar` VALUES ('32', '男士休闲时尚长裤 黑色9904', '337', '45', '15165', '../img/goodlist/10.jpg');

-- ----------------------------
-- Table structure for student
-- ----------------------------
DROP TABLE IF EXISTS `student`;
CREATE TABLE `student` (
  `id` int(255) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `age` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=28 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of student
-- ----------------------------
INSERT INTO `student` VALUES ('1', '贝贝', '1');
INSERT INTO `student` VALUES ('2', '小百货商场', '2');
INSERT INTO `student` VALUES ('3', '新手教程', '3');
INSERT INTO `student` VALUES ('4', '贝贝菜鸟设计出', '4');
INSERT INTO `student` VALUES ('5', '贝贝', '5');
INSERT INTO `student` VALUES ('6', '贝贝', '6');
INSERT INTO `student` VALUES ('7', '贝贝', '7');
INSERT INTO `student` VALUES ('8', '贝贝', '8');
INSERT INTO `student` VALUES ('9', '贝贝', '9');
INSERT INTO `student` VALUES ('10', '贝贝', '10');
INSERT INTO `student` VALUES ('11', '贝贝', '11');
INSERT INTO `student` VALUES ('12', '贝贝', '12');
INSERT INTO `student` VALUES ('13', '贝贝', '13');
INSERT INTO `student` VALUES ('14', '贝贝', '14');
INSERT INTO `student` VALUES ('15', '贝贝', '15');
INSERT INTO `student` VALUES ('16', '贝贝', '16');
INSERT INTO `student` VALUES ('17', '贝贝', '17');
INSERT INTO `student` VALUES ('18', '贝贝', '18');
INSERT INTO `student` VALUES ('19', '贝贝', '19');
INSERT INTO `student` VALUES ('20', '贝贝', '20');
INSERT INTO `student` VALUES ('21', '贝贝', '21');
INSERT INTO `student` VALUES ('22', '贝贝', '22');
INSERT INTO `student` VALUES ('23', '贝贝', '23');
INSERT INTO `student` VALUES ('24', '贝贝', '24');
INSERT INTO `student` VALUES ('25', '贝贝', '25');
INSERT INTO `student` VALUES ('26', '贝贝', '26');
INSERT INTO `student` VALUES ('27', '贝贝', '27');

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(4) unsigned NOT NULL AUTO_INCREMENT,
  `username` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `admin` varchar(255) DEFAULT NULL,
  `sex` varchar(255) DEFAULT NULL,
  `score` int(10) DEFAULT NULL,
  `joinTime` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=70 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('8', 'liu325523', '123456', '0', '男', '43', '2018-10-19');
INSERT INTO `user` VALUES ('7', 'a12345667', '123456', '0', '女', '35', '2018-10-31');
INSERT INTO `user` VALUES ('6', 'a123456', '123456', '0', '男', '78', '2018-10-8');
INSERT INTO `user` VALUES ('5', '用', '123', '0', '女', '70', '2018-10-16');
INSERT INTO `user` VALUES ('4', 'liu', '123', '0', '女', '43', '2018-10-15');
INSERT INTO `user` VALUES ('48', '杨', '123', '0', '男', '99', '2018-10-20');
INSERT INTO `user` VALUES ('2', 'mingming', '123456', '0', '女', '78', '2018-10-13');
INSERT INTO `user` VALUES ('3', 'alice', '123456', '0', '男', '35', '2018-10-14');
INSERT INTO `user` VALUES ('9', 'liu', '123', '0', '女', '70', '2018-10-20');
INSERT INTO `user` VALUES ('10', '刘伟英', '123', '0', '男', '90', '2018-10-21');
INSERT INTO `user` VALUES ('11', '用', '123456', '0', '女', '88', '2018-10-13');
INSERT INTO `user` VALUES ('12', 'a24567878', '123456', '0', '男', '78', '2018-10-13');
INSERT INTO `user` VALUES ('13', 'a36790089', '123456', '0', '女', '35', '2018-10-14');
INSERT INTO `user` VALUES ('14', 'liu325523', '123', '0', '男', '43', '2018-10-15');
INSERT INTO `user` VALUES ('15', 'liu325523', '123', '0', '女', '70', '2018-10-16');
INSERT INTO `user` VALUES ('16', 'liu6666', '123456', '0', '男', '78', '2018-10-8');
INSERT INTO `user` VALUES ('17', '用', '123456', '0', '女', '35', '2018-10-31');
INSERT INTO `user` VALUES ('18', 'a24567878', '123456', '0', '男', '43', '2018-10-19');
INSERT INTO `user` VALUES ('19', '用', '123', '0', '女', '70', '2018-10-20');
INSERT INTO `user` VALUES ('20', 'a24567878', '123', '0', '男', '90', '2018-10-21');
INSERT INTO `user` VALUES ('21', 'a36790089', '123456', '0', '女', '88', '2018-10-13');
INSERT INTO `user` VALUES ('22', 'liu325523', '123456', '0', '男', '78', '2018-10-13');
INSERT INTO `user` VALUES ('69', '刘欢', '666777', null, '男', '99', '2018-12-04');
SET FOREIGN_KEY_CHECKS=1;
