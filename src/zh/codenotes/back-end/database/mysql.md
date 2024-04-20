---
# 当前页面内容标题
title: 数据库练习
# 当前页面图标
icon: mysql
# 分类
category:
  - 后端
  - 数据库
# 标签
tag:
  - mysql
  - 导航
sticky: false
# 是否收藏在博客主题的文章列表中，当填入数字时，数字越大，排名越靠前。
star: false
# 是否将该文章添加至文章列表中
article: false
# 是否将该文章添加至时间线中
timeline: false
---



# 数据库练习

> ​	数据库练习的一些实验

## 实验一

### 1. 创建库

```mysql
-- 创建数据库，其数据库名称为邓世强22408050241
CREATE DATABASE 邓世强22408050241;
```

### 2. 创建表

```mysql
-- 创建教师表
DROP TABLE IF EXISTS t;
CREATE TABLE t (
	tno VARCHAR ( 32 ) PRIMARY KEY COMMENT '教师号',
	tn VARCHAR ( 20 ) COMMENT '姓名',
	sex CHAR ( 2 ) CHECK(sex = '男' or sex = '女') COMMENT '性别',
	age TINYINT COMMENT '年龄',
	prof VARCHAR ( 10 ) COMMENT '职称',
	sal INT COMMENT '工资',
	comm INT COMMENT '岗位津贴',
	dept VARCHAR ( 20 ) COMMENT '系名'
);
SELECT * FROM t;
-- 创建学生表
DROP TABLE IF EXISTS s;
CREATE TABLE s (
	sno VARCHAR ( 32 ) PRIMARY KEY COMMENT '学号',
	sn VARCHAR ( 20 ) COMMENT '姓名',
	sex CHAR ( 2 ) CHECK(sex = '男' or sex = '女') COMMENT '性别',
	birthday DATE COMMENT '出生日期',
	dept VARCHAR ( 20 ) COMMENT '系名'
);
-- 创建课程表
DROP TABLE IF EXISTS c;
CREATE TABLE c (
	cno VARCHAR ( 32 ) PRIMARY KEY COMMENT '课程号',
	cn VARCHAR ( 20 ) COMMENT '课程名',
	time TINYINT COMMENT '课时数',
	credit TINYINT COMMENT '学分',
	prevCno VARCHAR ( 32 ) COMMENT '先行课',
	FOREIGN KEY (prevCno) REFERENCES c(cno) 
);
-- 创建选课表
DROP TABLE IF EXISTS sc;
CREATE TABLE sc (
	sno VARCHAR ( 32 ) COMMENT '学号',
	cno VARCHAR ( 32 ) COMMENT '课程号',
	tno VARCHAR ( 32 ) COMMENT '教师号',
	score TINYINT COMMENT '成绩',
	FOREIGN KEY(sno) REFERENCES s(sno),
	FOREIGN KEY(cno) REFERENCES c(cno),
	FOREIGN KEY(tno) REFERENCES t(tno)
);
-- 创建授课表
DROP TABLE IF EXISTS tc;
CREATE TABLE tc (
	tno VARCHAR ( 32 ) COMMENT '教师号',
	cno VARCHAR ( 32 ) COMMENT '课程号',
	weekday char(4) COMMENT '周几',
	preriod TINYINT COMMENT '节次',
	room VARCHAR(20) COMMENT '教室',
	eval VARCHAR(256) COMMENT '评价',
	FOREIGN KEY(tno) REFERENCES t(tno),
	FOREIGN KEY(cno) REFERENCES c(cno)
);
```

### 3. 插入数据

```mysql
-- 插入学生信息
INSERT INTO s(sno, sn, sex, birthday, dept) 
	VALUES 
('s1', '赵亦', '女', '1995-01-01', '计算机'),
('s2','钱尔', '男','1996-01-10','信息'),
('s3','张小明', '男','1995-12-10','信息'),
('s4','李思', '男','1995-06-01','自动化'),
('s5','周武', '男','1994-12-01','计算机'),
('s6','邓世强', '男','1997-05-02','物理');
-- 插入教师信息
INSERT INTO t(tno, tn, sex, age, prof, sal, comm, dept) 
	VALUES
('t5', '张兰', '女', 39, '副教授', '1300','2000', '信息'),
('t4', '张雪', '女', 51, '教授', '1600','3000', '自动化'),
('t3', '刘伟', '男', 30, '讲师', '900', '1200', '计算机'),
('t2', '王平', '男', 28, '教授', '1900','2200', '信息'),
('t1', '李力', '男', 47, '教授', '1500','3000', '计算机');


-- 插入课程数据
INSERT INTO c(cno, cn, time, credit, prevCno) 
	VALUES 
('c1','程序设计', 60, 3 , null),
('c2','微机原理', 60, 3 , 'c1'),
('c3','数据库', 90, 4 , 'c1'),
('c5','高等数学', 80, 4 , null),
('c4','数据结构', 80, 4 , 'c1'),
('c6','普通物理', 90, 4 , null);
```

## 实验二

### 表及数据操作

```mysql
SELECT * from t;
-- 把学生“周武”的年龄改为19，系别改为“信息”
UPDATE s SET birthday = date_sub(now(), INTERVAL 30 YEAR), dept = '信息' where sn = '周武';
-- 将教师“王平”的职称改为“副教授”
UPDATE t SET prof = '副教授' where tn = '王平';

-- 删除你自已添加的一些数据行或删除周武和王平两行，注意：删除之前请先备份，以便出错后恢复。
drop TABLE t_temp, s_temp;
CREATE TABLE t_temp (
	tno VARCHAR ( 32 ) PRIMARY KEY COMMENT '教师号',
	tn VARCHAR ( 20 ) COMMENT '姓名',
	sex CHAR ( 2 ) CHECK(sex = '男' or sex = '女') COMMENT '性别',
	age TINYINT COMMENT '年龄',
	prof VARCHAR ( 10 ) COMMENT '职称',
	sal INT COMMENT '工资',
	comm INT COMMENT '岗位津贴',
	dept VARCHAR ( 20 ) COMMENT '系名'
);
CREATE TABLE s_temp (
	sno VARCHAR ( 32 ) PRIMARY KEY COMMENT '学号',
	sn VARCHAR ( 20 ) COMMENT '姓名',
	sex CHAR ( 2 ) CHECK(sex = '男' or sex = '女') COMMENT '性别',
	birthday datetime COMMENT '出生日期',
	dept VARCHAR ( 20 ) COMMENT '系名'
);
-- 备份表
INSERT INTO s_temp SELECT *  from s; 
INSERT INTO t_temp SELECT *  from t; 
-- 删除记录
DELETE FROM s WHERE sn = '周武';
DELETE FROM t WHERE tn = '王平';

SELECT t.tn, t.tno, tc.cno, c.cn FROM t INNER JOIN tc ON tc.tno = t.tno INNER JOIN c ON tc.cno = c.cno;
-- 用命令为sc表及tc表输入一些数据
INSERT INTO sc(sno, cno, tno, score) 
	VALUES 
('s1', 'c3', 't1', 59),
('s1', 'c2', 't2', 80),
('s1', 'c1', 't2', 80),

('s2', 'c1', 't1', 88),
('s2', 'c4', 't4', 58),
('s2', 'c3', 't3', 61),

('s3', 'c1', 't2', 97),
('s3', 'c4', 't4', 88),
('s3', 'c2', 't2', 80),
('s3', 'c5', 't1', 81),

('s4', 'c4', 't4', 49),
('s4', 'c2', 't2', 69),
('s4', 'c1', 't3', 73),

('s5', 'c5', 't1', 83),

('s6', 'c5', 't1', 80),
('s6', 'c6', 't5', 90);

INSERT INTO tc (tno, cno, weekday, preriod, room) VALUES 
('t1', 'c3', '周一', 2, '#1A0102'),
('t1', 'c1', '周二', 3, '#1A0402'),
('t1', 'c5', '周三', 1, '#1A0101'),
('t3', 'c3', '周一', 2, '#1A0103'),
('t3', 'c1', '周二', 3, '#1A0404'),
('t2', 'c2', '周一', 1, '#1A0204'),
('t2', 'c1', '周二', 1, '#1A0201'),
('t5', 'c6', '周二', 1, '#1A0203'),
('t4', 'c4', '周三', 3, '#1A0405');
```

## 实验三 

### 简单查询

```mysql
-- 查询计算机系的所有教师
SELECT * FROM t WHERE dept = '计算机';

-- 查询所有女同学的姓名，年龄
SELECT sn 姓名, FLOOR(DATEDIFF(NOW(),birthday) / 365) as 年龄 FROM s WHERE sex = '女';

-- 查询计算机系教师开设的所有课程的课程号和课程名
SELECT DISTINCT c.cno 课程号, c.cn 课程名 FROM t, c, tc where c.cno = tc.cno and tc.tno = t.tno and t.dept = '计算机';

-- 查询年龄在18~20岁（包括18和30）之间的所有学生的信息
SELECT *, FLOOR(DATEDIFF(NOW(),birthday) / 365) age FROM s WHERE FLOOR(DATEDIFF(NOW(),birthday) / 365) BETWEEN 18 and 30;

-- 查询年龄小于20岁的所有男同学的学号和姓名
SELECT sno 学号, sn as '姓名' FROM s where FLOOR(DATEDIFF(NOW(),birthday) / 365) < 20;

-- 查询姓“李”的所有学生的姓名、年龄和性别
SELECT sn as '姓名', FLOOR(DATEDIFF(NOW(),birthday) / 365) age, sex 性别 FROM s where sn like '李%';

-- 查询所有女同学所选课程的课程号
SELECT c.cno from s, sc, c WHERE s.sex = '女' and s.sno = sc.sno and sc.cno = c.cno;

-- 查询至少有一门成绩高于90分的学生姓名和年龄
SELECT DISTINCT sn 姓名, FLOOR(DATEDIFF(NOW(),birthday) / 365) 年龄 FROM s, sc WHERE s.sno = sc.sno and score > 90;

-- 查询选修“微机原理”的所有学生的姓名和成绩
SELECT s.sn 姓名, score 成绩 FROM s, sc, c WHERE s.sno = sc.sno and sc.cno = c.cno and c.cn = '微机原理';

-- 试算所有“数据库”成绩统一增加10%后（超过100分按100计算），全班平均分是多少？（注意：请不要修改原始成绩）
SELECT AVG( CASE WHEN  score > 90  THEN 100 ELSE score * 1.1 END) 平均成绩 from sc, c where c.cn = '数据库' AND sc.cno = c.cno;
	
-- 试算所有“数据结构”成绩60分以下的统一增加10分后，仍有多少人不及格
SELECT COUNT(1) from sc, c where c.cn = '数据结构' AND sc.cno = c.cno AND (score + 10) < 60;	
```

## 实验四

### 多表查询

```mysql
-- 查询至少选修课程号为“c2”和“c4”两门课程的学生的学号 
SELECT sno FROM sc WHERE cno='c2' AND sno IN(SELECT sno FROM sc WHERE cno = 'c4');

-- 查询选修了“高等数学”或“普通物理”的学生姓名
SELECT DISTINCT s.sn 姓名 FROM s, sc, c WHERE s.sno = sc.sno and sc.cno = c.cno and (c.cn = '高等数学' or c.cn = '普通物理');
-- 查询选修了王平老师所讲授所有课程的学生的学号和成绩
SELECT sc.sno, sc.score FROM sc WHERE sc.sno in (
	SELECT sc.sno FROM sc 
	INNER JOIN t ON t.tno = sc.tno
	WHERE t.tn='王平' GROUP BY sc.sno     
	HAVING count(sc.cno)=
	(SELECT count(tc.cno) FROM tc 
			INNER JOIN c ON c.cno = tc.cno 
			INNER JOIN t ON t.tno = tc.tno 
			WHERE t.tn = '王平' )
);
-- 查询未选修王老师所讲授任意课程的学生的学号和成绩
SELECT 
	sc.sno, sc.score 
FROM 
	sc 
WHERE 
	sc.sno 
NOT IN(
	SELECT 
		sc.sno 
	FROM 
		sc 
	INNER JOIN t ON t.tno = sc.tno
	WHERE t.tn='王平' GROUP BY sc.sno);
-- 查询选修了“计算机”系教师所讲授的课程的学生姓名和成绩 
SELECT s.sn, sc.score FROM s INNER JOIN sc ON s.sno = sc.sno WHERE sc.tno in(
	SELECT sc.tno FROM t INNER JOIN sc ON sc.tno = t.tno WHERE t.dept = '计算机'
);
-- 查询学号比“张小明”同学大而年龄比他小的学生姓名 
SELECT 
	s1.sn,  FLOOR(DATEDIFF(NOW(),s1.birthday) / 365) age 
FROM 
	s s1 INNER JOIN s s2 
	ON 
		FLOOR(DATEDIFF(NOW(),s1.birthday) / 365) < FLOOR(DATEDIFF(NOW(),s2.birthday) / 365) 
	AND 
		s1.sno > s2.sno 
WHERE 
	s2.sn = '张小明';
	
-- 查询年龄大于所有女同学年龄的男学生的姓名和年龄 
SELECT sn, FLOOR(DATEDIFF(NOW(),s.birthday) / 365) age FROM s WHERE FLOOR(DATEDIFF(NOW(),s.birthday) / 365) > 
(SELECT MAX(FLOOR(DATEDIFF(NOW(),s1.birthday) / 365)) age from  s s1 WHERE s1.sex = '女') AND s.sex = '男';

-- 查询未选修“高等数学”的学生的学号和姓名 
SELECT s.sno, s.sn FROM s WHERE s.sno NOT IN (SELECT sno FROM c, sc WHERE c.cno = sc.cno AND c.cn = '高等数学');

-- 查询不是计算机系教师所讲授的课程的课程名和课程号 
SELECT c.cn, c.cno FROM c WHERE c.cno NOT IN (SELECT DISTINCT cno FROM t, sc WHERE t.tno = sc.tno AND t.dept = '计算机');

-- 查询未选修“c2”号课程的学生的学号和姓名 
SELECT s.sno, s.sn FROM s WHERE s.sno NOT IN (SELECT sc.sno FROM sc WHERE sc.cno = 'c2');

-- 从学生表和教师表可以了解到哪些院系名称 chatgpt
SELECT DISTINCT dept FROM (
  SELECT dept FROM s
  UNION ALL
  SELECT dept FROM t
) AS departments;

-- 查询哪些学生所选的课程是由本院系的教师教的，列举学生姓名、课程名和教师名 chatgpt
SELECT s.sn AS 学生姓名, c.cn AS 课程名, t.tn AS 教师名
FROM s
JOIN sc ON s.sno = sc.sno
JOIN c ON sc.cno = c.cno
JOIN tc ON c.cno = tc.cno AND sc.tno = tc.tno
JOIN t ON tc.tno = t.tno AND s.dept = t.dept

-- 如果在同一个班上课就认定为同学，请列举所有可能的同学关系，至少包含三列：学生姓名、同学姓名、共同课程名。

-- 由于课程有上下承接关系，请列举课程先后关系，必须先上的在前，后上的在后，无承接关系的不列举	
```



## 实验五

### 统计查询

```mysql
-- 查询女同学的人数
SELECT count(1) 女同学人数 FROM s WHERE s.sex = '女';

-- 查询男同学的平均年龄
SELECT AVG(FLOOR(DATEDIFF(NOW(), birthday) / 365)) avg_age FROM s WHERE sex = '男'

-- 查询男、女同学各有多少人
SELECT sex, COUNT(1) FROM s GROUP BY sex;

-- 查询年龄大于女同学平均年龄的男学生的姓名和年龄
SELECT sn, FLOOR(DATEDIFF(NOW(), birthday) / 365) age FROM s WHERE sex = '男' AND FLOOR(DATEDIFF(NOW(), birthday) / 365) > (SELECT AVG(FLOOR(DATEDIFF(NOW(), birthday) / 365)) FROM s WHERE s.sex = '女')

-- 查询所有学生选修的课程门数
SELECT s.sno, s.sn, COUNT(s.sno) 选修课程数 FROM s INNER JOIN sc ON sc.sno = s.sno GROUP BY s.sno;

-- 查询每门课程的学生选修人数（只输出超过10人的课程）,要求输出课程号和课程名及选修人数,查询结果按人数降序排列，若人数相同，按课程号升序排列
SELECT sc.cno, c.cn, COUNT(sc.cno) 人数 FROM sc INNER JOIN c ON c.cno=sc.cno GROUP BY sc.cno HAVING COUNT(sc.cno) > 2 ORDER BY COUNT(sc.cno) DESC, sc.cno ASC;

-- 查询只选修了一门课程的学生学号和姓名
SELECT sc.sno, s.sn FROM s INNER JOIN sc on sc.sno = s.sno GROUP BY sc.sno HAVING COUNT(sc.sno) = 1;

-- 查询至少选修了两门课程的学生学
SELECT sc.sno, s.sn FROM s INNER JOIN sc on sc.sno = s.sno GROUP BY sc.sno HAVING COUNT(sc.sno) >1;

-- 查询至少讲授两门课程的教师姓名和其所在系
SELECT t.tn, t.dept FROM t INNER JOIN tc ON t.tno = tc.tno GROUP BY tc.tno HAVING COUNT(tc.tno) > 1; 

-- 查询高等数学课程的平均分
SELECT AVG(score) 高等数学平均分 FROM sc INNER JOIN c ON sc.cno = c.cno WHERE c.cn = '高等数学';

-- 查询每个学生的总分，要求输出学号和分数，并按分数由高到低排列，分数相同时按学号升序排列
SELECT sno, SUM(score) 总分 FROM sc GROUP BY sno ORDER BY SUM(score) DESC, sno ASC;

-- 查询各科成绩等级分布情况，即看每门课程A等多少人、B等多少人...

select 
    sc.cno, c.cn ,
    sum(case when sc.score >= 90 then 1 else 0 end) as A, -- 如果学生等级为A,则A这一列加1,否则加0
    sum(case when sc.score >= 80 && sc.score < 90 then 1 else 0 end) as B,
    sum(case when sc.score >= 70 && sc.score < 80 then 1 else 0 end) as C,
    sum(case when sc.score >= 60 && sc.score < 70 then 1 else 0 end) as D,
    sum(case when sc.score < 60 then 1 else 0 end) as E
    from c INNER JOIN sc ON c.cno = sc.cno GROUP BY sc.cno; 

-- 统计各科成绩等级分布情况存入新表statgrade，即看每门课程A等多少人、B等多少人...
CREATE TABLE statgrade select 
    sc.cno, c.cn ,
    sum(case when sc.score >= 90 then 1 else 0 end) as A, -- 如果学生等级为A,则A这一列加1,否则加0
    sum(case when sc.score >= 80 && sc.score < 90 then 1 else 0 end) as B,
    sum(case when sc.score >= 70 && sc.score < 80 then 1 else 0 end) as C,
    sum(case when sc.score >= 60 && sc.score < 70 then 1 else 0 end) as D,
    sum(case when sc.score < 60 then 1 else 0 end) as E
    from c INNER JOIN sc ON c.cno = sc.cno GROUP BY sc.cno; 
		
SELECT * from statgrade;

-- 统计各科课程号、课程名、选课人数、平均分、最高分、最低分，并存入新表statscore
CREATE TABLE statscore select 
    sc.cno 课程号, c.cn 课程名, COUNT(*) 选课人数, AVG(score) 平均分, MAX(score) 最高分, MIN(score) 最低分
    from c INNER JOIN sc ON c.cno = sc.cno GROUP BY sc.cno; 
SELECT * from statscore;
```

## 实验六

### 视图操作

```mysql
-- view_s: 只允许看到学号，姓名，性别，院系这四列。
CREATE VIEW view_s AS SELECT sno, sn, sex, dept FROM s;
SELECT * FROM view_s;

-- view_cj:要求包含学号，姓名，课程名，成绩。
CREATE VIEW view_cj AS SELECT s.sno, sn, cn, score FROM s INNER JOIN sc ON s.sno = sc.sno INNER JOIN c ON sc.cno = c.cno;
SELECT * FROM view_cj;

-- view_kc:要求包含教师名，课程名，周几,节次，教室
CREATE VIEW view_kc AS SELECT t.tn 教师名, c.cn 课程名, tc.weekday 周几, tc.preriod 节次, tc.room 教室 FROM t INNER JOIN tc ON t.tno = tc.tno INNER JOIN c ON tc.cno = c.cno;

-- view_s1:要求从view_s的基础上创建，且只看到性别为男的记录，只包含学号，姓名，院系这三列。 
CREATE VIEW view_s1 AS SELECT sno, sn, dept FROM view_s WHERE sex = '男';

-- V_MAX_MIN(Cno,MAX,MIN),反映所有课程的课程号（Cno），最高成绩（MAX）和最低成绩MIN 
CREATE VIEW V_MAX_MIN AS SELECT sc.cno 课程号, MAX(score) 最高成绩, MIN(score) 最低成绩 FROM sc GROUP BY cno;

-- V_FAIL(Sname,Cname,score)，反映成绩不及格的学生名（Sname），课程名（Cname）和成绩（score） 
CREATE VIEW V_FAIL AS SELECT s.sn, c.cn, score FROM s INNER JOIN sc ON s.sno = sc.sno INNER JOIN c ON sc.cno = c.cno WHERE score < 60;

-- v_statgrade: 统计各科成绩等级分布情况，即看每门课程A等多少人、B等多少人
CREATE VIEW v_statgrade AS select * FROM statgrade;

-- v_statscore: 统计各科课程号、课程名、选课人数、平均分、最高分、最低分
CREATE VIEW v_statscore AS select * FROM statscore;

-- v_syear:统计各年份出生的人数分布情况，即：1996年出生人数、1997年人数...  后，修改基本数据后查看视图的数据是否变化，并尝试通过视图修改基表的数据
CREATE VIEW v_syear AS SELECT DATE_FORMAT(birthday, '%Y') year, COUNT(1) 人数 FROM s GROUP BY DATE_FORMAT(birthday, '%Y');

-- 将视图view_s中的性别列删除。并且增加年龄列，且只能看到年龄在18岁及以下的学生，并且确保用户基于视图的修改不会导致记录脱离本视图。
SELECT * FROM view_s;
ALTER VIEW view_s AS SELECT sno, sn, FLOOR(DATEDIFF(NOW(), birthday) / 365) age, dept FROM s WHERE FLOOR(DATEDIFF(NOW(), birthday) / 365) < 18;

-- 基于视图view_s插入新的记录，然后删除刚插入的记录(聚集函数视图不能插入)。
INSERT INTO view_s(sno, sn, dept)VALUES('s_v1', '张三', '电机');
DELETE view_s WHERE sno = 's_v1' 

-- 通过视图view_cj修改某学生的成绩。 
UPDATE view_cj set score = 71 WHERE sno = 's2' AND cn = '数据库';

-- 通过v_Fail视图修改学生成绩，如将某不及格成绩修改为60分。
UPDATE V_FAIL set score = 60 WHERE score < 60;
```

## 实验七

### 数据完整性

```mysql
-- 将S表在学号创建为主键，将T表在教师号上创建主键，C表以课程号为主键，SC以学号与课程号为主键
ALTER TABLE s ADD CONSTRAINT sno PRIMARY KEY sno;
ALTER TABLE c ADD CONSTRAINT cno PRIMARY KEY cno;
ALTER TABLE sc ADD CONSTRAINT scno PRIMARY KEY (sno, cno);
-- 为TC表的教师号与课程号创建唯一约束
-- ALTER TABLE ADD CONSTRAINT UNIQUE();
ALTER TABLE tc ADD CONSTRAINT UNIQUE(tno, cno);

-- 为TC表增加ID_TC列，设置自动增加，种子为1，增量为1，并设置此列为主键。
ALTER TABLE tc ADD COLUMN ID_TC INT PRIMARY key auto_increment;

-- 创建S表和SC之间的参照关系（如：SC中的学号引用S中的学号，其它自己思考），
-- sc表的cno参照c表的课程号cno,
-- T与TC之间的参照关系，C表与TC表的参照关系，
-- 并输入一条不符合参照约束的记录，以验证这些参照约束是否有效。 
ALTER TABLE sc ADD CONSTRAINT fk_sno FOREIGN KEY (sno) REFERENCES s(sno);
ALTER TABLE sc ADD CONSTRAINT fk_cno FOREIGN KEY (cno) REFERENCES c(cno);
ALTER TABLE sc ADD CONSTRAINT fk_tno FOREIGN KEY (tno) REFERENCES t(tno);
ALTER TABLE tc ADD CONSTRAINT fk_tcno FOREIGN KEY (tno) REFERENCES t(tno);

-- 学生表设置性别的默认值“男”，年龄必须在14到40岁之间。性别必须为男或女。
ALTER TABLE s ADD CONSTRAINT checksex CHECK(sex = '男' or sex = '女'); 
-- ALTER TABLE s ADD CONSTRAINT checksex CHECK(sex = '男' or sex = '女'); 
ALTER TABLE s ADD CONSTRAINT sexdefault DEFAULT ('男') FOR sex; 
-- 选课表设置成绩必须在0～100之间。
ALTER TABLE sc ADD CONSTRAINT checkscore CHECK(score >= 0 and score <= 100);

-- 限定教师的岗位津贴：教授必为4000，副教授2000，讲师1500，助教1000
ALTER TABLE t ADD CONSTRAINT checkcomn CHECK(
	(prof = '教授' AND comm = 3000) OR
	(prof = '副教授' AND comm = 2000) OR
	(prof = '讲师' AND comm = 1500) OR
	(prof = '助教' AND comm = 1000)
);

-- 课时数至少是学分的17倍，如：3学分的课程至少要上52课时
ALTER TABLE c ADD CONSTRAINT checktime CHECK(time >= credit * 17);
-- 删除约束
ALTER TABLE c DROP CONSTRAINT checktime;
```

## 实验八

### 用户及权限管理 

```mysql


```



## 实验九

### 数据库完整性约束高级设置

```mysql
-- 修改前面的学生选课表SC与课程表C的联系（表示学生与课程的多对多联系），以便删除学生的同时，自动删除该生所有选课信息
CREATE TRIGGER del_s before DELETE ON s for each row DELETE FROM sc WHERE sc.sno = OLD.sno;

-- 修改课程表C、任课表TC、学生选课表SC之间的关系，禁止删除授课信息TC的同时级联删除所有相关选课SC，且不允许单独删除课程（如果已经安排老师上这门课）。


-- 给课程表添加限员personLimt和选课人数selectCnt字段
ALTER TABLE c ADD COLUMN personLimt TINYINT DEFAULT 60, ADD COLUMN selectCnt TINYINT DEFAULT 0;
-- 设置所有课程的选课人数不得超过限员人数。 
ALTER TABLE c ADD CONSTRAINT check_num CHECK(selectCnt <= personLimt);

SHOW TRIGGERS;
```

