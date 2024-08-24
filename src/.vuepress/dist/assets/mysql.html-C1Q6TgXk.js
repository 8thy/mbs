import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as n,o as a,e as i}from"./app-BhqM44vm.js";const e={},l=i(`<h1 id="数据库练习" tabindex="-1"><a class="header-anchor" href="#数据库练习"><span>数据库练习</span></a></h1><blockquote><p>​ 数据库练习的一些实验</p></blockquote><h2 id="实验一" tabindex="-1"><a class="header-anchor" href="#实验一"><span>实验一</span></a></h2><h3 id="_1-创建库" tabindex="-1"><a class="header-anchor" href="#_1-创建库"><span>1. 创建库</span></a></h3><div class="language-mysql line-numbers-mode" data-highlighter="shiki" data-ext="mysql" data-title="mysql" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>-- 创建数据库，其数据库名称为邓世强22408050241</span></span>
<span class="line"><span>CREATE DATABASE 邓世强22408050241;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-创建表" tabindex="-1"><a class="header-anchor" href="#_2-创建表"><span>2. 创建表</span></a></h3><div class="language-mysql line-numbers-mode" data-highlighter="shiki" data-ext="mysql" data-title="mysql" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>-- 创建教师表</span></span>
<span class="line"><span>DROP TABLE IF EXISTS t;</span></span>
<span class="line"><span>CREATE TABLE t (</span></span>
<span class="line"><span>	tno VARCHAR ( 32 ) PRIMARY KEY COMMENT &#39;教师号&#39;,</span></span>
<span class="line"><span>	tn VARCHAR ( 20 ) COMMENT &#39;姓名&#39;,</span></span>
<span class="line"><span>	sex CHAR ( 2 ) CHECK(sex = &#39;男&#39; or sex = &#39;女&#39;) COMMENT &#39;性别&#39;,</span></span>
<span class="line"><span>	age TINYINT COMMENT &#39;年龄&#39;,</span></span>
<span class="line"><span>	prof VARCHAR ( 10 ) COMMENT &#39;职称&#39;,</span></span>
<span class="line"><span>	sal INT COMMENT &#39;工资&#39;,</span></span>
<span class="line"><span>	comm INT COMMENT &#39;岗位津贴&#39;,</span></span>
<span class="line"><span>	dept VARCHAR ( 20 ) COMMENT &#39;系名&#39;</span></span>
<span class="line"><span>);</span></span>
<span class="line"><span>SELECT * FROM t;</span></span>
<span class="line"><span>-- 创建学生表</span></span>
<span class="line"><span>DROP TABLE IF EXISTS s;</span></span>
<span class="line"><span>CREATE TABLE s (</span></span>
<span class="line"><span>	sno VARCHAR ( 32 ) PRIMARY KEY COMMENT &#39;学号&#39;,</span></span>
<span class="line"><span>	sn VARCHAR ( 20 ) COMMENT &#39;姓名&#39;,</span></span>
<span class="line"><span>	sex CHAR ( 2 ) CHECK(sex = &#39;男&#39; or sex = &#39;女&#39;) COMMENT &#39;性别&#39;,</span></span>
<span class="line"><span>	birthday DATE COMMENT &#39;出生日期&#39;,</span></span>
<span class="line"><span>	dept VARCHAR ( 20 ) COMMENT &#39;系名&#39;</span></span>
<span class="line"><span>);</span></span>
<span class="line"><span>-- 创建课程表</span></span>
<span class="line"><span>DROP TABLE IF EXISTS c;</span></span>
<span class="line"><span>CREATE TABLE c (</span></span>
<span class="line"><span>	cno VARCHAR ( 32 ) PRIMARY KEY COMMENT &#39;课程号&#39;,</span></span>
<span class="line"><span>	cn VARCHAR ( 20 ) COMMENT &#39;课程名&#39;,</span></span>
<span class="line"><span>	time TINYINT COMMENT &#39;课时数&#39;,</span></span>
<span class="line"><span>	credit TINYINT COMMENT &#39;学分&#39;,</span></span>
<span class="line"><span>	prevCno VARCHAR ( 32 ) COMMENT &#39;先行课&#39;,</span></span>
<span class="line"><span>	FOREIGN KEY (prevCno) REFERENCES c(cno) </span></span>
<span class="line"><span>);</span></span>
<span class="line"><span>-- 创建选课表</span></span>
<span class="line"><span>DROP TABLE IF EXISTS sc;</span></span>
<span class="line"><span>CREATE TABLE sc (</span></span>
<span class="line"><span>	sno VARCHAR ( 32 ) COMMENT &#39;学号&#39;,</span></span>
<span class="line"><span>	cno VARCHAR ( 32 ) COMMENT &#39;课程号&#39;,</span></span>
<span class="line"><span>	tno VARCHAR ( 32 ) COMMENT &#39;教师号&#39;,</span></span>
<span class="line"><span>	score TINYINT COMMENT &#39;成绩&#39;,</span></span>
<span class="line"><span>	FOREIGN KEY(sno) REFERENCES s(sno),</span></span>
<span class="line"><span>	FOREIGN KEY(cno) REFERENCES c(cno),</span></span>
<span class="line"><span>	FOREIGN KEY(tno) REFERENCES t(tno)</span></span>
<span class="line"><span>);</span></span>
<span class="line"><span>-- 创建授课表</span></span>
<span class="line"><span>DROP TABLE IF EXISTS tc;</span></span>
<span class="line"><span>CREATE TABLE tc (</span></span>
<span class="line"><span>	tno VARCHAR ( 32 ) COMMENT &#39;教师号&#39;,</span></span>
<span class="line"><span>	cno VARCHAR ( 32 ) COMMENT &#39;课程号&#39;,</span></span>
<span class="line"><span>	weekday char(4) COMMENT &#39;周几&#39;,</span></span>
<span class="line"><span>	preriod TINYINT COMMENT &#39;节次&#39;,</span></span>
<span class="line"><span>	room VARCHAR(20) COMMENT &#39;教室&#39;,</span></span>
<span class="line"><span>	eval VARCHAR(256) COMMENT &#39;评价&#39;,</span></span>
<span class="line"><span>	FOREIGN KEY(tno) REFERENCES t(tno),</span></span>
<span class="line"><span>	FOREIGN KEY(cno) REFERENCES c(cno)</span></span>
<span class="line"><span>);</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-插入数据" tabindex="-1"><a class="header-anchor" href="#_3-插入数据"><span>3. 插入数据</span></a></h3><div class="language-mysql line-numbers-mode" data-highlighter="shiki" data-ext="mysql" data-title="mysql" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>-- 插入学生信息</span></span>
<span class="line"><span>INSERT INTO s(sno, sn, sex, birthday, dept) </span></span>
<span class="line"><span>	VALUES </span></span>
<span class="line"><span>(&#39;s1&#39;, &#39;赵亦&#39;, &#39;女&#39;, &#39;1995-01-01&#39;, &#39;计算机&#39;),</span></span>
<span class="line"><span>(&#39;s2&#39;,&#39;钱尔&#39;, &#39;男&#39;,&#39;1996-01-10&#39;,&#39;信息&#39;),</span></span>
<span class="line"><span>(&#39;s3&#39;,&#39;张小明&#39;, &#39;男&#39;,&#39;1995-12-10&#39;,&#39;信息&#39;),</span></span>
<span class="line"><span>(&#39;s4&#39;,&#39;李思&#39;, &#39;男&#39;,&#39;1995-06-01&#39;,&#39;自动化&#39;),</span></span>
<span class="line"><span>(&#39;s5&#39;,&#39;周武&#39;, &#39;男&#39;,&#39;1994-12-01&#39;,&#39;计算机&#39;),</span></span>
<span class="line"><span>(&#39;s6&#39;,&#39;邓世强&#39;, &#39;男&#39;,&#39;1997-05-02&#39;,&#39;物理&#39;);</span></span>
<span class="line"><span>-- 插入教师信息</span></span>
<span class="line"><span>INSERT INTO t(tno, tn, sex, age, prof, sal, comm, dept) </span></span>
<span class="line"><span>	VALUES</span></span>
<span class="line"><span>(&#39;t5&#39;, &#39;张兰&#39;, &#39;女&#39;, 39, &#39;副教授&#39;, &#39;1300&#39;,&#39;2000&#39;, &#39;信息&#39;),</span></span>
<span class="line"><span>(&#39;t4&#39;, &#39;张雪&#39;, &#39;女&#39;, 51, &#39;教授&#39;, &#39;1600&#39;,&#39;3000&#39;, &#39;自动化&#39;),</span></span>
<span class="line"><span>(&#39;t3&#39;, &#39;刘伟&#39;, &#39;男&#39;, 30, &#39;讲师&#39;, &#39;900&#39;, &#39;1200&#39;, &#39;计算机&#39;),</span></span>
<span class="line"><span>(&#39;t2&#39;, &#39;王平&#39;, &#39;男&#39;, 28, &#39;教授&#39;, &#39;1900&#39;,&#39;2200&#39;, &#39;信息&#39;),</span></span>
<span class="line"><span>(&#39;t1&#39;, &#39;李力&#39;, &#39;男&#39;, 47, &#39;教授&#39;, &#39;1500&#39;,&#39;3000&#39;, &#39;计算机&#39;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>-- 插入课程数据</span></span>
<span class="line"><span>INSERT INTO c(cno, cn, time, credit, prevCno) </span></span>
<span class="line"><span>	VALUES </span></span>
<span class="line"><span>(&#39;c1&#39;,&#39;程序设计&#39;, 60, 3 , null),</span></span>
<span class="line"><span>(&#39;c2&#39;,&#39;微机原理&#39;, 60, 3 , &#39;c1&#39;),</span></span>
<span class="line"><span>(&#39;c3&#39;,&#39;数据库&#39;, 90, 4 , &#39;c1&#39;),</span></span>
<span class="line"><span>(&#39;c5&#39;,&#39;高等数学&#39;, 80, 4 , null),</span></span>
<span class="line"><span>(&#39;c4&#39;,&#39;数据结构&#39;, 80, 4 , &#39;c1&#39;),</span></span>
<span class="line"><span>(&#39;c6&#39;,&#39;普通物理&#39;, 90, 4 , null);</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="实验二" tabindex="-1"><a class="header-anchor" href="#实验二"><span>实验二</span></a></h2><h3 id="表及数据操作" tabindex="-1"><a class="header-anchor" href="#表及数据操作"><span>表及数据操作</span></a></h3><div class="language-mysql line-numbers-mode" data-highlighter="shiki" data-ext="mysql" data-title="mysql" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>SELECT * from t;</span></span>
<span class="line"><span>-- 把学生“周武”的年龄改为19，系别改为“信息”</span></span>
<span class="line"><span>UPDATE s SET birthday = date_sub(now(), INTERVAL 30 YEAR), dept = &#39;信息&#39; where sn = &#39;周武&#39;;</span></span>
<span class="line"><span>-- 将教师“王平”的职称改为“副教授”</span></span>
<span class="line"><span>UPDATE t SET prof = &#39;副教授&#39; where tn = &#39;王平&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>-- 删除你自已添加的一些数据行或删除周武和王平两行，注意：删除之前请先备份，以便出错后恢复。</span></span>
<span class="line"><span>drop TABLE t_temp, s_temp;</span></span>
<span class="line"><span>CREATE TABLE t_temp (</span></span>
<span class="line"><span>	tno VARCHAR ( 32 ) PRIMARY KEY COMMENT &#39;教师号&#39;,</span></span>
<span class="line"><span>	tn VARCHAR ( 20 ) COMMENT &#39;姓名&#39;,</span></span>
<span class="line"><span>	sex CHAR ( 2 ) CHECK(sex = &#39;男&#39; or sex = &#39;女&#39;) COMMENT &#39;性别&#39;,</span></span>
<span class="line"><span>	age TINYINT COMMENT &#39;年龄&#39;,</span></span>
<span class="line"><span>	prof VARCHAR ( 10 ) COMMENT &#39;职称&#39;,</span></span>
<span class="line"><span>	sal INT COMMENT &#39;工资&#39;,</span></span>
<span class="line"><span>	comm INT COMMENT &#39;岗位津贴&#39;,</span></span>
<span class="line"><span>	dept VARCHAR ( 20 ) COMMENT &#39;系名&#39;</span></span>
<span class="line"><span>);</span></span>
<span class="line"><span>CREATE TABLE s_temp (</span></span>
<span class="line"><span>	sno VARCHAR ( 32 ) PRIMARY KEY COMMENT &#39;学号&#39;,</span></span>
<span class="line"><span>	sn VARCHAR ( 20 ) COMMENT &#39;姓名&#39;,</span></span>
<span class="line"><span>	sex CHAR ( 2 ) CHECK(sex = &#39;男&#39; or sex = &#39;女&#39;) COMMENT &#39;性别&#39;,</span></span>
<span class="line"><span>	birthday datetime COMMENT &#39;出生日期&#39;,</span></span>
<span class="line"><span>	dept VARCHAR ( 20 ) COMMENT &#39;系名&#39;</span></span>
<span class="line"><span>);</span></span>
<span class="line"><span>-- 备份表</span></span>
<span class="line"><span>INSERT INTO s_temp SELECT *  from s; </span></span>
<span class="line"><span>INSERT INTO t_temp SELECT *  from t; </span></span>
<span class="line"><span>-- 删除记录</span></span>
<span class="line"><span>DELETE FROM s WHERE sn = &#39;周武&#39;;</span></span>
<span class="line"><span>DELETE FROM t WHERE tn = &#39;王平&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>SELECT t.tn, t.tno, tc.cno, c.cn FROM t INNER JOIN tc ON tc.tno = t.tno INNER JOIN c ON tc.cno = c.cno;</span></span>
<span class="line"><span>-- 用命令为sc表及tc表输入一些数据</span></span>
<span class="line"><span>INSERT INTO sc(sno, cno, tno, score) </span></span>
<span class="line"><span>	VALUES </span></span>
<span class="line"><span>(&#39;s1&#39;, &#39;c3&#39;, &#39;t1&#39;, 59),</span></span>
<span class="line"><span>(&#39;s1&#39;, &#39;c2&#39;, &#39;t2&#39;, 80),</span></span>
<span class="line"><span>(&#39;s1&#39;, &#39;c1&#39;, &#39;t2&#39;, 80),</span></span>
<span class="line"><span></span></span>
<span class="line"><span>(&#39;s2&#39;, &#39;c1&#39;, &#39;t1&#39;, 88),</span></span>
<span class="line"><span>(&#39;s2&#39;, &#39;c4&#39;, &#39;t4&#39;, 58),</span></span>
<span class="line"><span>(&#39;s2&#39;, &#39;c3&#39;, &#39;t3&#39;, 61),</span></span>
<span class="line"><span></span></span>
<span class="line"><span>(&#39;s3&#39;, &#39;c1&#39;, &#39;t2&#39;, 97),</span></span>
<span class="line"><span>(&#39;s3&#39;, &#39;c4&#39;, &#39;t4&#39;, 88),</span></span>
<span class="line"><span>(&#39;s3&#39;, &#39;c2&#39;, &#39;t2&#39;, 80),</span></span>
<span class="line"><span>(&#39;s3&#39;, &#39;c5&#39;, &#39;t1&#39;, 81),</span></span>
<span class="line"><span></span></span>
<span class="line"><span>(&#39;s4&#39;, &#39;c4&#39;, &#39;t4&#39;, 49),</span></span>
<span class="line"><span>(&#39;s4&#39;, &#39;c2&#39;, &#39;t2&#39;, 69),</span></span>
<span class="line"><span>(&#39;s4&#39;, &#39;c1&#39;, &#39;t3&#39;, 73),</span></span>
<span class="line"><span></span></span>
<span class="line"><span>(&#39;s5&#39;, &#39;c5&#39;, &#39;t1&#39;, 83),</span></span>
<span class="line"><span></span></span>
<span class="line"><span>(&#39;s6&#39;, &#39;c5&#39;, &#39;t1&#39;, 80),</span></span>
<span class="line"><span>(&#39;s6&#39;, &#39;c6&#39;, &#39;t5&#39;, 90);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>INSERT INTO tc (tno, cno, weekday, preriod, room) VALUES </span></span>
<span class="line"><span>(&#39;t1&#39;, &#39;c3&#39;, &#39;周一&#39;, 2, &#39;#1A0102&#39;),</span></span>
<span class="line"><span>(&#39;t1&#39;, &#39;c1&#39;, &#39;周二&#39;, 3, &#39;#1A0402&#39;),</span></span>
<span class="line"><span>(&#39;t1&#39;, &#39;c5&#39;, &#39;周三&#39;, 1, &#39;#1A0101&#39;),</span></span>
<span class="line"><span>(&#39;t3&#39;, &#39;c3&#39;, &#39;周一&#39;, 2, &#39;#1A0103&#39;),</span></span>
<span class="line"><span>(&#39;t3&#39;, &#39;c1&#39;, &#39;周二&#39;, 3, &#39;#1A0404&#39;),</span></span>
<span class="line"><span>(&#39;t2&#39;, &#39;c2&#39;, &#39;周一&#39;, 1, &#39;#1A0204&#39;),</span></span>
<span class="line"><span>(&#39;t2&#39;, &#39;c1&#39;, &#39;周二&#39;, 1, &#39;#1A0201&#39;),</span></span>
<span class="line"><span>(&#39;t5&#39;, &#39;c6&#39;, &#39;周二&#39;, 1, &#39;#1A0203&#39;),</span></span>
<span class="line"><span>(&#39;t4&#39;, &#39;c4&#39;, &#39;周三&#39;, 3, &#39;#1A0405&#39;);</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="实验三" tabindex="-1"><a class="header-anchor" href="#实验三"><span>实验三</span></a></h2><h3 id="简单查询" tabindex="-1"><a class="header-anchor" href="#简单查询"><span>简单查询</span></a></h3><div class="language-mysql line-numbers-mode" data-highlighter="shiki" data-ext="mysql" data-title="mysql" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>-- 查询计算机系的所有教师</span></span>
<span class="line"><span>SELECT * FROM t WHERE dept = &#39;计算机&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>-- 查询所有女同学的姓名，年龄</span></span>
<span class="line"><span>SELECT sn 姓名, FLOOR(DATEDIFF(NOW(),birthday) / 365) as 年龄 FROM s WHERE sex = &#39;女&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>-- 查询计算机系教师开设的所有课程的课程号和课程名</span></span>
<span class="line"><span>SELECT DISTINCT c.cno 课程号, c.cn 课程名 FROM t, c, tc where c.cno = tc.cno and tc.tno = t.tno and t.dept = &#39;计算机&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>-- 查询年龄在18~20岁（包括18和30）之间的所有学生的信息</span></span>
<span class="line"><span>SELECT *, FLOOR(DATEDIFF(NOW(),birthday) / 365) age FROM s WHERE FLOOR(DATEDIFF(NOW(),birthday) / 365) BETWEEN 18 and 30;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>-- 查询年龄小于20岁的所有男同学的学号和姓名</span></span>
<span class="line"><span>SELECT sno 学号, sn as &#39;姓名&#39; FROM s where FLOOR(DATEDIFF(NOW(),birthday) / 365) &lt; 20;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>-- 查询姓“李”的所有学生的姓名、年龄和性别</span></span>
<span class="line"><span>SELECT sn as &#39;姓名&#39;, FLOOR(DATEDIFF(NOW(),birthday) / 365) age, sex 性别 FROM s where sn like &#39;李%&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>-- 查询所有女同学所选课程的课程号</span></span>
<span class="line"><span>SELECT c.cno from s, sc, c WHERE s.sex = &#39;女&#39; and s.sno = sc.sno and sc.cno = c.cno;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>-- 查询至少有一门成绩高于90分的学生姓名和年龄</span></span>
<span class="line"><span>SELECT DISTINCT sn 姓名, FLOOR(DATEDIFF(NOW(),birthday) / 365) 年龄 FROM s, sc WHERE s.sno = sc.sno and score &gt; 90;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>-- 查询选修“微机原理”的所有学生的姓名和成绩</span></span>
<span class="line"><span>SELECT s.sn 姓名, score 成绩 FROM s, sc, c WHERE s.sno = sc.sno and sc.cno = c.cno and c.cn = &#39;微机原理&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>-- 试算所有“数据库”成绩统一增加10%后（超过100分按100计算），全班平均分是多少？（注意：请不要修改原始成绩）</span></span>
<span class="line"><span>SELECT AVG( CASE WHEN  score &gt; 90  THEN 100 ELSE score * 1.1 END) 平均成绩 from sc, c where c.cn = &#39;数据库&#39; AND sc.cno = c.cno;</span></span>
<span class="line"><span>	</span></span>
<span class="line"><span>-- 试算所有“数据结构”成绩60分以下的统一增加10分后，仍有多少人不及格</span></span>
<span class="line"><span>SELECT COUNT(1) from sc, c where c.cn = &#39;数据结构&#39; AND sc.cno = c.cno AND (score + 10) &lt; 60;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="实验四" tabindex="-1"><a class="header-anchor" href="#实验四"><span>实验四</span></a></h2><h3 id="多表查询" tabindex="-1"><a class="header-anchor" href="#多表查询"><span>多表查询</span></a></h3><div class="language-mysql line-numbers-mode" data-highlighter="shiki" data-ext="mysql" data-title="mysql" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>-- 查询至少选修课程号为“c2”和“c4”两门课程的学生的学号 </span></span>
<span class="line"><span>SELECT sno FROM sc WHERE cno=&#39;c2&#39; AND sno IN(SELECT sno FROM sc WHERE cno = &#39;c4&#39;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>-- 查询选修了“高等数学”或“普通物理”的学生姓名</span></span>
<span class="line"><span>SELECT DISTINCT s.sn 姓名 FROM s, sc, c WHERE s.sno = sc.sno and sc.cno = c.cno and (c.cn = &#39;高等数学&#39; or c.cn = &#39;普通物理&#39;);</span></span>
<span class="line"><span>-- 查询选修了王平老师所讲授所有课程的学生的学号和成绩</span></span>
<span class="line"><span>SELECT sc.sno, sc.score FROM sc WHERE sc.sno in (</span></span>
<span class="line"><span>	SELECT sc.sno FROM sc </span></span>
<span class="line"><span>	INNER JOIN t ON t.tno = sc.tno</span></span>
<span class="line"><span>	WHERE t.tn=&#39;王平&#39; GROUP BY sc.sno     </span></span>
<span class="line"><span>	HAVING count(sc.cno)=</span></span>
<span class="line"><span>	(SELECT count(tc.cno) FROM tc </span></span>
<span class="line"><span>			INNER JOIN c ON c.cno = tc.cno </span></span>
<span class="line"><span>			INNER JOIN t ON t.tno = tc.tno </span></span>
<span class="line"><span>			WHERE t.tn = &#39;王平&#39; )</span></span>
<span class="line"><span>);</span></span>
<span class="line"><span>-- 查询未选修王老师所讲授任意课程的学生的学号和成绩</span></span>
<span class="line"><span>SELECT </span></span>
<span class="line"><span>	sc.sno, sc.score </span></span>
<span class="line"><span>FROM </span></span>
<span class="line"><span>	sc </span></span>
<span class="line"><span>WHERE </span></span>
<span class="line"><span>	sc.sno </span></span>
<span class="line"><span>NOT IN(</span></span>
<span class="line"><span>	SELECT </span></span>
<span class="line"><span>		sc.sno </span></span>
<span class="line"><span>	FROM </span></span>
<span class="line"><span>		sc </span></span>
<span class="line"><span>	INNER JOIN t ON t.tno = sc.tno</span></span>
<span class="line"><span>	WHERE t.tn=&#39;王平&#39; GROUP BY sc.sno);</span></span>
<span class="line"><span>-- 查询选修了“计算机”系教师所讲授的课程的学生姓名和成绩 </span></span>
<span class="line"><span>SELECT s.sn, sc.score FROM s INNER JOIN sc ON s.sno = sc.sno WHERE sc.tno in(</span></span>
<span class="line"><span>	SELECT sc.tno FROM t INNER JOIN sc ON sc.tno = t.tno WHERE t.dept = &#39;计算机&#39;</span></span>
<span class="line"><span>);</span></span>
<span class="line"><span>-- 查询学号比“张小明”同学大而年龄比他小的学生姓名 </span></span>
<span class="line"><span>SELECT </span></span>
<span class="line"><span>	s1.sn,  FLOOR(DATEDIFF(NOW(),s1.birthday) / 365) age </span></span>
<span class="line"><span>FROM </span></span>
<span class="line"><span>	s s1 INNER JOIN s s2 </span></span>
<span class="line"><span>	ON </span></span>
<span class="line"><span>		FLOOR(DATEDIFF(NOW(),s1.birthday) / 365) &lt; FLOOR(DATEDIFF(NOW(),s2.birthday) / 365) </span></span>
<span class="line"><span>	AND </span></span>
<span class="line"><span>		s1.sno &gt; s2.sno </span></span>
<span class="line"><span>WHERE </span></span>
<span class="line"><span>	s2.sn = &#39;张小明&#39;;</span></span>
<span class="line"><span>	</span></span>
<span class="line"><span>-- 查询年龄大于所有女同学年龄的男学生的姓名和年龄 </span></span>
<span class="line"><span>SELECT sn, FLOOR(DATEDIFF(NOW(),s.birthday) / 365) age FROM s WHERE FLOOR(DATEDIFF(NOW(),s.birthday) / 365) &gt; </span></span>
<span class="line"><span>(SELECT MAX(FLOOR(DATEDIFF(NOW(),s1.birthday) / 365)) age from  s s1 WHERE s1.sex = &#39;女&#39;) AND s.sex = &#39;男&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>-- 查询未选修“高等数学”的学生的学号和姓名 </span></span>
<span class="line"><span>SELECT s.sno, s.sn FROM s WHERE s.sno NOT IN (SELECT sno FROM c, sc WHERE c.cno = sc.cno AND c.cn = &#39;高等数学&#39;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>-- 查询不是计算机系教师所讲授的课程的课程名和课程号 </span></span>
<span class="line"><span>SELECT c.cn, c.cno FROM c WHERE c.cno NOT IN (SELECT DISTINCT cno FROM t, sc WHERE t.tno = sc.tno AND t.dept = &#39;计算机&#39;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>-- 查询未选修“c2”号课程的学生的学号和姓名 </span></span>
<span class="line"><span>SELECT s.sno, s.sn FROM s WHERE s.sno NOT IN (SELECT sc.sno FROM sc WHERE sc.cno = &#39;c2&#39;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>-- 从学生表和教师表可以了解到哪些院系名称 chatgpt</span></span>
<span class="line"><span>SELECT DISTINCT dept FROM (</span></span>
<span class="line"><span>  SELECT dept FROM s</span></span>
<span class="line"><span>  UNION ALL</span></span>
<span class="line"><span>  SELECT dept FROM t</span></span>
<span class="line"><span>) AS departments;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>-- 查询哪些学生所选的课程是由本院系的教师教的，列举学生姓名、课程名和教师名 chatgpt</span></span>
<span class="line"><span>SELECT s.sn AS 学生姓名, c.cn AS 课程名, t.tn AS 教师名</span></span>
<span class="line"><span>FROM s</span></span>
<span class="line"><span>JOIN sc ON s.sno = sc.sno</span></span>
<span class="line"><span>JOIN c ON sc.cno = c.cno</span></span>
<span class="line"><span>JOIN tc ON c.cno = tc.cno AND sc.tno = tc.tno</span></span>
<span class="line"><span>JOIN t ON tc.tno = t.tno AND s.dept = t.dept</span></span>
<span class="line"><span></span></span>
<span class="line"><span>-- 如果在同一个班上课就认定为同学，请列举所有可能的同学关系，至少包含三列：学生姓名、同学姓名、共同课程名。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>-- 由于课程有上下承接关系，请列举课程先后关系，必须先上的在前，后上的在后，无承接关系的不列举</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="实验五" tabindex="-1"><a class="header-anchor" href="#实验五"><span>实验五</span></a></h2><h3 id="统计查询" tabindex="-1"><a class="header-anchor" href="#统计查询"><span>统计查询</span></a></h3><div class="language-mysql line-numbers-mode" data-highlighter="shiki" data-ext="mysql" data-title="mysql" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>-- 查询女同学的人数</span></span>
<span class="line"><span>SELECT count(1) 女同学人数 FROM s WHERE s.sex = &#39;女&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>-- 查询男同学的平均年龄</span></span>
<span class="line"><span>SELECT AVG(FLOOR(DATEDIFF(NOW(), birthday) / 365)) avg_age FROM s WHERE sex = &#39;男&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>-- 查询男、女同学各有多少人</span></span>
<span class="line"><span>SELECT sex, COUNT(1) FROM s GROUP BY sex;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>-- 查询年龄大于女同学平均年龄的男学生的姓名和年龄</span></span>
<span class="line"><span>SELECT sn, FLOOR(DATEDIFF(NOW(), birthday) / 365) age FROM s WHERE sex = &#39;男&#39; AND FLOOR(DATEDIFF(NOW(), birthday) / 365) &gt; (SELECT AVG(FLOOR(DATEDIFF(NOW(), birthday) / 365)) FROM s WHERE s.sex = &#39;女&#39;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>-- 查询所有学生选修的课程门数</span></span>
<span class="line"><span>SELECT s.sno, s.sn, COUNT(s.sno) 选修课程数 FROM s INNER JOIN sc ON sc.sno = s.sno GROUP BY s.sno;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>-- 查询每门课程的学生选修人数（只输出超过10人的课程）,要求输出课程号和课程名及选修人数,查询结果按人数降序排列，若人数相同，按课程号升序排列</span></span>
<span class="line"><span>SELECT sc.cno, c.cn, COUNT(sc.cno) 人数 FROM sc INNER JOIN c ON c.cno=sc.cno GROUP BY sc.cno HAVING COUNT(sc.cno) &gt; 2 ORDER BY COUNT(sc.cno) DESC, sc.cno ASC;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>-- 查询只选修了一门课程的学生学号和姓名</span></span>
<span class="line"><span>SELECT sc.sno, s.sn FROM s INNER JOIN sc on sc.sno = s.sno GROUP BY sc.sno HAVING COUNT(sc.sno) = 1;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>-- 查询至少选修了两门课程的学生学</span></span>
<span class="line"><span>SELECT sc.sno, s.sn FROM s INNER JOIN sc on sc.sno = s.sno GROUP BY sc.sno HAVING COUNT(sc.sno) &gt;1;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>-- 查询至少讲授两门课程的教师姓名和其所在系</span></span>
<span class="line"><span>SELECT t.tn, t.dept FROM t INNER JOIN tc ON t.tno = tc.tno GROUP BY tc.tno HAVING COUNT(tc.tno) &gt; 1; </span></span>
<span class="line"><span></span></span>
<span class="line"><span>-- 查询高等数学课程的平均分</span></span>
<span class="line"><span>SELECT AVG(score) 高等数学平均分 FROM sc INNER JOIN c ON sc.cno = c.cno WHERE c.cn = &#39;高等数学&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>-- 查询每个学生的总分，要求输出学号和分数，并按分数由高到低排列，分数相同时按学号升序排列</span></span>
<span class="line"><span>SELECT sno, SUM(score) 总分 FROM sc GROUP BY sno ORDER BY SUM(score) DESC, sno ASC;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>-- 查询各科成绩等级分布情况，即看每门课程A等多少人、B等多少人...</span></span>
<span class="line"><span></span></span>
<span class="line"><span>select </span></span>
<span class="line"><span>    sc.cno, c.cn ,</span></span>
<span class="line"><span>    sum(case when sc.score &gt;= 90 then 1 else 0 end) as A, -- 如果学生等级为A,则A这一列加1,否则加0</span></span>
<span class="line"><span>    sum(case when sc.score &gt;= 80 &amp;&amp; sc.score &lt; 90 then 1 else 0 end) as B,</span></span>
<span class="line"><span>    sum(case when sc.score &gt;= 70 &amp;&amp; sc.score &lt; 80 then 1 else 0 end) as C,</span></span>
<span class="line"><span>    sum(case when sc.score &gt;= 60 &amp;&amp; sc.score &lt; 70 then 1 else 0 end) as D,</span></span>
<span class="line"><span>    sum(case when sc.score &lt; 60 then 1 else 0 end) as E</span></span>
<span class="line"><span>    from c INNER JOIN sc ON c.cno = sc.cno GROUP BY sc.cno; </span></span>
<span class="line"><span></span></span>
<span class="line"><span>-- 统计各科成绩等级分布情况存入新表statgrade，即看每门课程A等多少人、B等多少人...</span></span>
<span class="line"><span>CREATE TABLE statgrade select </span></span>
<span class="line"><span>    sc.cno, c.cn ,</span></span>
<span class="line"><span>    sum(case when sc.score &gt;= 90 then 1 else 0 end) as A, -- 如果学生等级为A,则A这一列加1,否则加0</span></span>
<span class="line"><span>    sum(case when sc.score &gt;= 80 &amp;&amp; sc.score &lt; 90 then 1 else 0 end) as B,</span></span>
<span class="line"><span>    sum(case when sc.score &gt;= 70 &amp;&amp; sc.score &lt; 80 then 1 else 0 end) as C,</span></span>
<span class="line"><span>    sum(case when sc.score &gt;= 60 &amp;&amp; sc.score &lt; 70 then 1 else 0 end) as D,</span></span>
<span class="line"><span>    sum(case when sc.score &lt; 60 then 1 else 0 end) as E</span></span>
<span class="line"><span>    from c INNER JOIN sc ON c.cno = sc.cno GROUP BY sc.cno; </span></span>
<span class="line"><span>		</span></span>
<span class="line"><span>SELECT * from statgrade;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>-- 统计各科课程号、课程名、选课人数、平均分、最高分、最低分，并存入新表statscore</span></span>
<span class="line"><span>CREATE TABLE statscore select </span></span>
<span class="line"><span>    sc.cno 课程号, c.cn 课程名, COUNT(*) 选课人数, AVG(score) 平均分, MAX(score) 最高分, MIN(score) 最低分</span></span>
<span class="line"><span>    from c INNER JOIN sc ON c.cno = sc.cno GROUP BY sc.cno; </span></span>
<span class="line"><span>SELECT * from statscore;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="实验六" tabindex="-1"><a class="header-anchor" href="#实验六"><span>实验六</span></a></h2><h3 id="视图操作" tabindex="-1"><a class="header-anchor" href="#视图操作"><span>视图操作</span></a></h3><div class="language-mysql line-numbers-mode" data-highlighter="shiki" data-ext="mysql" data-title="mysql" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>-- view_s: 只允许看到学号，姓名，性别，院系这四列。</span></span>
<span class="line"><span>CREATE VIEW view_s AS SELECT sno, sn, sex, dept FROM s;</span></span>
<span class="line"><span>SELECT * FROM view_s;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>-- view_cj:要求包含学号，姓名，课程名，成绩。</span></span>
<span class="line"><span>CREATE VIEW view_cj AS SELECT s.sno, sn, cn, score FROM s INNER JOIN sc ON s.sno = sc.sno INNER JOIN c ON sc.cno = c.cno;</span></span>
<span class="line"><span>SELECT * FROM view_cj;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>-- view_kc:要求包含教师名，课程名，周几,节次，教室</span></span>
<span class="line"><span>CREATE VIEW view_kc AS SELECT t.tn 教师名, c.cn 课程名, tc.weekday 周几, tc.preriod 节次, tc.room 教室 FROM t INNER JOIN tc ON t.tno = tc.tno INNER JOIN c ON tc.cno = c.cno;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>-- view_s1:要求从view_s的基础上创建，且只看到性别为男的记录，只包含学号，姓名，院系这三列。 </span></span>
<span class="line"><span>CREATE VIEW view_s1 AS SELECT sno, sn, dept FROM view_s WHERE sex = &#39;男&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>-- V_MAX_MIN(Cno,MAX,MIN),反映所有课程的课程号（Cno），最高成绩（MAX）和最低成绩MIN </span></span>
<span class="line"><span>CREATE VIEW V_MAX_MIN AS SELECT sc.cno 课程号, MAX(score) 最高成绩, MIN(score) 最低成绩 FROM sc GROUP BY cno;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>-- V_FAIL(Sname,Cname,score)，反映成绩不及格的学生名（Sname），课程名（Cname）和成绩（score） </span></span>
<span class="line"><span>CREATE VIEW V_FAIL AS SELECT s.sn, c.cn, score FROM s INNER JOIN sc ON s.sno = sc.sno INNER JOIN c ON sc.cno = c.cno WHERE score &lt; 60;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>-- v_statgrade: 统计各科成绩等级分布情况，即看每门课程A等多少人、B等多少人</span></span>
<span class="line"><span>CREATE VIEW v_statgrade AS select * FROM statgrade;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>-- v_statscore: 统计各科课程号、课程名、选课人数、平均分、最高分、最低分</span></span>
<span class="line"><span>CREATE VIEW v_statscore AS select * FROM statscore;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>-- v_syear:统计各年份出生的人数分布情况，即：1996年出生人数、1997年人数...  后，修改基本数据后查看视图的数据是否变化，并尝试通过视图修改基表的数据</span></span>
<span class="line"><span>CREATE VIEW v_syear AS SELECT DATE_FORMAT(birthday, &#39;%Y&#39;) year, COUNT(1) 人数 FROM s GROUP BY DATE_FORMAT(birthday, &#39;%Y&#39;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>-- 将视图view_s中的性别列删除。并且增加年龄列，且只能看到年龄在18岁及以下的学生，并且确保用户基于视图的修改不会导致记录脱离本视图。</span></span>
<span class="line"><span>SELECT * FROM view_s;</span></span>
<span class="line"><span>ALTER VIEW view_s AS SELECT sno, sn, FLOOR(DATEDIFF(NOW(), birthday) / 365) age, dept FROM s WHERE FLOOR(DATEDIFF(NOW(), birthday) / 365) &lt; 18;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>-- 基于视图view_s插入新的记录，然后删除刚插入的记录(聚集函数视图不能插入)。</span></span>
<span class="line"><span>INSERT INTO view_s(sno, sn, dept)VALUES(&#39;s_v1&#39;, &#39;张三&#39;, &#39;电机&#39;);</span></span>
<span class="line"><span>DELETE view_s WHERE sno = &#39;s_v1&#39; </span></span>
<span class="line"><span></span></span>
<span class="line"><span>-- 通过视图view_cj修改某学生的成绩。 </span></span>
<span class="line"><span>UPDATE view_cj set score = 71 WHERE sno = &#39;s2&#39; AND cn = &#39;数据库&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>-- 通过v_Fail视图修改学生成绩，如将某不及格成绩修改为60分。</span></span>
<span class="line"><span>UPDATE V_FAIL set score = 60 WHERE score &lt; 60;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="实验七" tabindex="-1"><a class="header-anchor" href="#实验七"><span>实验七</span></a></h2><h3 id="数据完整性" tabindex="-1"><a class="header-anchor" href="#数据完整性"><span>数据完整性</span></a></h3><div class="language-mysql line-numbers-mode" data-highlighter="shiki" data-ext="mysql" data-title="mysql" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>-- 将S表在学号创建为主键，将T表在教师号上创建主键，C表以课程号为主键，SC以学号与课程号为主键</span></span>
<span class="line"><span>ALTER TABLE s ADD CONSTRAINT sno PRIMARY KEY sno;</span></span>
<span class="line"><span>ALTER TABLE c ADD CONSTRAINT cno PRIMARY KEY cno;</span></span>
<span class="line"><span>ALTER TABLE sc ADD CONSTRAINT scno PRIMARY KEY (sno, cno);</span></span>
<span class="line"><span>-- 为TC表的教师号与课程号创建唯一约束</span></span>
<span class="line"><span>-- ALTER TABLE ADD CONSTRAINT UNIQUE();</span></span>
<span class="line"><span>ALTER TABLE tc ADD CONSTRAINT UNIQUE(tno, cno);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>-- 为TC表增加ID_TC列，设置自动增加，种子为1，增量为1，并设置此列为主键。</span></span>
<span class="line"><span>ALTER TABLE tc ADD COLUMN ID_TC INT PRIMARY key auto_increment;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>-- 创建S表和SC之间的参照关系（如：SC中的学号引用S中的学号，其它自己思考），</span></span>
<span class="line"><span>-- sc表的cno参照c表的课程号cno,</span></span>
<span class="line"><span>-- T与TC之间的参照关系，C表与TC表的参照关系，</span></span>
<span class="line"><span>-- 并输入一条不符合参照约束的记录，以验证这些参照约束是否有效。 </span></span>
<span class="line"><span>ALTER TABLE sc ADD CONSTRAINT fk_sno FOREIGN KEY (sno) REFERENCES s(sno);</span></span>
<span class="line"><span>ALTER TABLE sc ADD CONSTRAINT fk_cno FOREIGN KEY (cno) REFERENCES c(cno);</span></span>
<span class="line"><span>ALTER TABLE sc ADD CONSTRAINT fk_tno FOREIGN KEY (tno) REFERENCES t(tno);</span></span>
<span class="line"><span>ALTER TABLE tc ADD CONSTRAINT fk_tcno FOREIGN KEY (tno) REFERENCES t(tno);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>-- 学生表设置性别的默认值“男”，年龄必须在14到40岁之间。性别必须为男或女。</span></span>
<span class="line"><span>ALTER TABLE s ADD CONSTRAINT checksex CHECK(sex = &#39;男&#39; or sex = &#39;女&#39;); </span></span>
<span class="line"><span>-- ALTER TABLE s ADD CONSTRAINT checksex CHECK(sex = &#39;男&#39; or sex = &#39;女&#39;); </span></span>
<span class="line"><span>ALTER TABLE s ADD CONSTRAINT sexdefault DEFAULT (&#39;男&#39;) FOR sex; </span></span>
<span class="line"><span>-- 选课表设置成绩必须在0～100之间。</span></span>
<span class="line"><span>ALTER TABLE sc ADD CONSTRAINT checkscore CHECK(score &gt;= 0 and score &lt;= 100);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>-- 限定教师的岗位津贴：教授必为4000，副教授2000，讲师1500，助教1000</span></span>
<span class="line"><span>ALTER TABLE t ADD CONSTRAINT checkcomn CHECK(</span></span>
<span class="line"><span>	(prof = &#39;教授&#39; AND comm = 3000) OR</span></span>
<span class="line"><span>	(prof = &#39;副教授&#39; AND comm = 2000) OR</span></span>
<span class="line"><span>	(prof = &#39;讲师&#39; AND comm = 1500) OR</span></span>
<span class="line"><span>	(prof = &#39;助教&#39; AND comm = 1000)</span></span>
<span class="line"><span>);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>-- 课时数至少是学分的17倍，如：3学分的课程至少要上52课时</span></span>
<span class="line"><span>ALTER TABLE c ADD CONSTRAINT checktime CHECK(time &gt;= credit * 17);</span></span>
<span class="line"><span>-- 删除约束</span></span>
<span class="line"><span>ALTER TABLE c DROP CONSTRAINT checktime;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="实验八" tabindex="-1"><a class="header-anchor" href="#实验八"><span>实验八</span></a></h2><h3 id="用户及权限管理" tabindex="-1"><a class="header-anchor" href="#用户及权限管理"><span>用户及权限管理</span></a></h3><div class="language-mysql line-numbers-mode" data-highlighter="shiki" data-ext="mysql" data-title="mysql" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="实验九" tabindex="-1"><a class="header-anchor" href="#实验九"><span>实验九</span></a></h2><h3 id="数据库完整性约束高级设置" tabindex="-1"><a class="header-anchor" href="#数据库完整性约束高级设置"><span>数据库完整性约束高级设置</span></a></h3><div class="language-mysql line-numbers-mode" data-highlighter="shiki" data-ext="mysql" data-title="mysql" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>-- 修改前面的学生选课表SC与课程表C的联系（表示学生与课程的多对多联系），以便删除学生的同时，自动删除该生所有选课信息</span></span>
<span class="line"><span>CREATE TRIGGER del_s before DELETE ON s for each row DELETE FROM sc WHERE sc.sno = OLD.sno;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>-- 修改课程表C、任课表TC、学生选课表SC之间的关系，禁止删除授课信息TC的同时级联删除所有相关选课SC，且不允许单独删除课程（如果已经安排老师上这门课）。</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>-- 给课程表添加限员personLimt和选课人数selectCnt字段</span></span>
<span class="line"><span>ALTER TABLE c ADD COLUMN personLimt TINYINT DEFAULT 60, ADD COLUMN selectCnt TINYINT DEFAULT 0;</span></span>
<span class="line"><span>-- 设置所有课程的选课人数不得超过限员人数。 </span></span>
<span class="line"><span>ALTER TABLE c ADD CONSTRAINT check_num CHECK(selectCnt &lt;= personLimt);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>SHOW TRIGGERS;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,33),p=[l];function c(d,v){return a(),n("div",null,p)}const m=s(e,[["render",c],["__file","mysql.html.vue"]]),b=JSON.parse('{"path":"/zh/codenotes/back-end/database/mysql.html","title":"数据库练习","lang":"zh-CN","frontmatter":{"title":"数据库练习","icon":"mysql","category":["后端","数据库"],"tag":["mysql","导航"],"sticky":false,"star":false,"article":false,"timeline":false,"description":"数据库练习 ​ 数据库练习的一些实验 实验一 1. 创建库 2. 创建表 3. 插入数据 实验二 表及数据操作 实验三 简单查询 实验四 多表查询 实验五 统计查询 实验六 视图操作 实验七 数据完整性 实验八 用户及权限管理 实验九 数据库完整性约束高级设置","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/zh/codenotes/back-end/database/mysql.html"}],["meta",{"property":"og:site_name","content":"代码笔记"}],["meta",{"property":"og:title","content":"数据库练习"}],["meta",{"property":"og:description","content":"数据库练习 ​ 数据库练习的一些实验 实验一 1. 创建库 2. 创建表 3. 插入数据 实验二 表及数据操作 实验三 简单查询 实验四 多表查询 实验五 统计查询 实验六 视图操作 实验七 数据完整性 实验八 用户及权限管理 实验九 数据库完整性约束高级设置"}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-08-23T11:08:57.000Z"}],["meta",{"property":"article:author","content":"Mr.Bing"}],["meta",{"property":"article:tag","content":"mysql"}],["meta",{"property":"article:tag","content":"导航"}],["meta",{"property":"article:modified_time","content":"2024-08-23T11:08:57.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"WebPage\\",\\"name\\":\\"数据库练习\\",\\"description\\":\\"数据库练习 ​ 数据库练习的一些实验 实验一 1. 创建库 2. 创建表 3. 插入数据 实验二 表及数据操作 实验三 简单查询 实验四 多表查询 实验五 统计查询 实验六 视图操作 实验七 数据完整性 实验八 用户及权限管理 实验九 数据库完整性约束高级设置\\"}"]]},"headers":[{"level":2,"title":"实验一","slug":"实验一","link":"#实验一","children":[{"level":3,"title":"1. 创建库","slug":"_1-创建库","link":"#_1-创建库","children":[]},{"level":3,"title":"2. 创建表","slug":"_2-创建表","link":"#_2-创建表","children":[]},{"level":3,"title":"3. 插入数据","slug":"_3-插入数据","link":"#_3-插入数据","children":[]}]},{"level":2,"title":"实验二","slug":"实验二","link":"#实验二","children":[{"level":3,"title":"表及数据操作","slug":"表及数据操作","link":"#表及数据操作","children":[]}]},{"level":2,"title":"实验三","slug":"实验三","link":"#实验三","children":[{"level":3,"title":"简单查询","slug":"简单查询","link":"#简单查询","children":[]}]},{"level":2,"title":"实验四","slug":"实验四","link":"#实验四","children":[{"level":3,"title":"多表查询","slug":"多表查询","link":"#多表查询","children":[]}]},{"level":2,"title":"实验五","slug":"实验五","link":"#实验五","children":[{"level":3,"title":"统计查询","slug":"统计查询","link":"#统计查询","children":[]}]},{"level":2,"title":"实验六","slug":"实验六","link":"#实验六","children":[{"level":3,"title":"视图操作","slug":"视图操作","link":"#视图操作","children":[]}]},{"level":2,"title":"实验七","slug":"实验七","link":"#实验七","children":[{"level":3,"title":"数据完整性","slug":"数据完整性","link":"#数据完整性","children":[]}]},{"level":2,"title":"实验八","slug":"实验八","link":"#实验八","children":[{"level":3,"title":"用户及权限管理","slug":"用户及权限管理","link":"#用户及权限管理","children":[]}]},{"level":2,"title":"实验九","slug":"实验九","link":"#实验九","children":[{"level":3,"title":"数据库完整性约束高级设置","slug":"数据库完整性约束高级设置","link":"#数据库完整性约束高级设置","children":[]}]}],"git":{"createdTime":1724411337000,"updatedTime":1724411337000,"contributors":[{"name":"dsq","email":"93787944@qq.com","commits":1}]},"readingTime":{"minutes":14.61,"words":4382},"filePathRelative":"zh/codenotes/back-end/database/mysql.md","localizedDate":"2024年8月23日","autoDesc":true,"excerpt":"\\n<blockquote>\\n<p>​\\t数据库练习的一些实验</p>\\n</blockquote>\\n<h2>实验一</h2>\\n<h3>1. 创建库</h3>\\n<div class=\\"language-mysql line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"mysql\\" data-title=\\"mysql\\" style=\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes one-light one-dark-pro vp-code\\"><code><span class=\\"line\\"><span>-- 创建数据库，其数据库名称为邓世强22408050241</span></span>\\n<span class=\\"line\\"><span>CREATE DATABASE 邓世强22408050241;</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>"}');export{m as comp,b as data};
