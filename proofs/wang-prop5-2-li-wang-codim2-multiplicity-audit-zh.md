# Wang Proposition 5.2 的一重性问题

## Wang--Li 余一维证明能否推广到 Kähler 四维流形中的余二维曲面？

> **最终判定。** 不能从 Wang Proposition 5.2 原文所列条件
> \(\eta=*F_t^*\omega>\delta\) 与
> \(|A|^2\le C/(t_0-t)\)
>
> 严格推出 blow-up 平面的 varifold 重数等于 \(1\)，也不能把 Wang--Li 在
> \(\mathbb R^3\) 中的证明逐字推广到这里。Type-I 条件给出的是**逐 sheet 的光滑紧性**；
> Wang 的消失恒等式给出的是**极限支撑为平面**。这两者都不计数有多少张 sheet
> 同时塌到该平面上。
>
> Wang--Li 的反证法本质地使用余维一：法向纤维是一维，嵌入 sheets 能写成严格有序的
> 标量图 \(u^{(1)}<\cdots<u^{(m)}\)，从而最高层与最低层之差
> \(u^+-u^->0\) 是正的标量抛物方程解。余二维中图函数取值于二维法向平面，既无
> top/bottom 全序，也没有由 \(\eta>\delta\) 选出的实法线。用向量差的模长替代会产生
> 一个无法控制的“相位能量”项，\(L\)-稳定性反证随即失效。
>
> 因此，本报告不给出一个不存在的无条件证明；它给出：原证明的可成立部分、精确断点、
> 一个覆盖反例说明原文的 immersed 假设不能蕴含一重性，以及一个足以严格修补延拓论证的
> degree-one 单图条件版定理。

**报告日期：** 2026 年 8 月 18 日  
**审计文献：** Mu-Tao Wang (2001), Proposition 5.2；Haozhao Li--Bing Wang (2019), Sections 4 and 5。  
**补充核对：** Li--Wang 关于 Type-I mean curvature 的一重性论文（arXiv:1811.08654v2）。  
**Danus 配置：** 7 个机器人；high 3 个、xhigh 4 个；模型 gpt-5.6-sol。  
**范畴约定：** 奇点出现前研究经典光滑平均曲率流；varifold 只用来记录推前面积和 blow-up 重数。

---

## 1. 要证明的句子与三个不同层次

设

$$
F:\Sigma^2\times[0,t_0)\longrightarrow M^4\hookrightarrow\mathbb R^N
$$

是 Wang Proposition 5.2 中的经典平均曲率流。以 \((y_0,t_0)\) 为中心作抛物放缩

$$
F_i(p,s)
=\lambda_i\left(
\iota\circ F\left(p,t_0+\frac{s}{\lambda_i^2}\right)-\iota(y_0)
\right),
\qquad s<0,
\tag{1.1}
$$

其中 \(\lambda_i\to\infty\)。对选出的 \(s_i\to-1\)，记 \(V_i\) 为切片
\(F_i(\Sigma,s_i)\) 的典范推前整数 varifold。

必须区分下列三个结论：

| 层次 | 正确含义 | Wang 的论证能否给出 |
|---|---|---|
| A. 逐 sheet 正则性 | 每个选中的局部参数分支有 \(C^\infty\) 子列 | 能 |
| B. 极限支撑 | 极限的光滑支撑是二维线性平面 \(P\) | 在完整性和全局曲率界下能 |
| C. 极限权重 | 完整 varifold 是 \(|P|\) 而非 \(m|P|\) | 原条件不能给出 |

“smooth convergence”若不明确写成“完整曲面是一张图”，通常允许多图收敛：

$$
F_i(\Sigma,s_i)\cap\pi^{-1}(U)
=\bigsqcup_{a=1}^{m}
\{x+u_i^a(x):x\in U\},
\qquad u_i^a\longrightarrow0.
\tag{1.2}
$$

此时每一张图都光滑趋于 \(P\)，但面积公式给出

$$
V_i\longrightarrow m|P|.
\tag{1.3}
$$

因此 A 和 B 不包含 C。

## 2. Type-I 条件究竟给出了什么

第二基本形式在放缩 (1.1) 下满足

$$
|A_i|^2(p,s)
=\lambda_i^{-2}
|A|^2\left(p,t_0+\frac{s}{\lambda_i^2}\right)
\le \frac{C}{-s}.
\tag{2.1}
$$

故对任意紧负时间区间

$$
[a,b]\Subset(-\infty,0)
$$

都有一致曲率界。标准抛物内部估计进一步给出：对每个 \(k\ge0\) 及稍小的时空柱，

$$
|\nabla^k A_i|\le C_{k,a,b,R}.
\tag{2.2}
$$

结合局部面积控制和基点选择，可以对每个局部参数分支使用 Arzelà--Ascoli 与图表示，
得到逐 sheet 的 \(C^\infty_{\mathrm{loc}}\) 收敛。

但 (2.1)--(2.2) 是每张 sheet 上的张量估计。它们不含

$$
\#\bigl(\pi_P^{-1}(x)\cap F_i(\Sigma,s_i)\bigr),
\tag{2.3}
$$

也不含法向投影的覆盖次数。因此“曲率各阶一致有界”不能单独推出一重。

### 2.1 嵌入性也不是一个紧性定理

每个 \(i\) 的嵌入性只说明同一时刻的 sheets 不真正相交；它不阻止它们之间的距离
趋于零。取两张高度为 \(\pm\varepsilon_i\) 的平面盘，并在半径 \(R_i\to\infty\)
之外用固定尺度的光滑颈连接，便得到连通嵌入曲面。对每个固定紧球，充分大的 \(i\)
只看见两张曲率为零的平面图；于是局部 varifold 极限是 \(2|P|\)。

这个例子不是某一条平均曲率流的时间切片序列；它严格否定的是下面这个被误用的
“紧性原理”：

$$
\text{连通嵌入}+C^\infty\text{ 局部几何界}
\quad\not\Longrightarrow\quad
\text{一张极限图}.
\tag{2.4}
$$

## 3. Wang 的极限方程可以严格得到平面支撑

Wang 的加权恒等式和选时论证给出极限上的曲率组合消失，继而得到

$$
H_\infty=0,
\qquad
\nabla\eta_\infty=0.
\tag{3.1}
$$

Huisken 型单调公式同时给出 shrinker 方程

$$
H_\infty+\frac12F_\infty^\perp=0.
\tag{3.2}
$$

所以

$$
F_\infty^\perp=0.
\tag{3.3}
$$

下面把“支撑为平面”的部分补全。

### 引理 3.1（有界曲率的光滑锥支撑为平面）

设 \(F:\mathcal S^2\to\mathbb R^N\) 是连通、完备的光滑等距浸入，且

$$
\sup_S|A|<\infty,
\qquad
F^\perp=0.
\tag{3.4}
$$

则 \(F(S)\) 的支撑是经过原点的二维线性平面。

#### 证明

由 \(F^\perp=0\)，位置向量 \(F\) 是切向量。令 \(X\) 是满足

$$
dF(X)=F
$$

的切向量场。沿 \(X\) 的积分曲线 \(\gamma(t)\)，有

$$
\frac d{dt}F(\gamma(t))=F(\gamma(t)),
$$

故

$$
F(\gamma(t))=e^tF(\gamma(0)).
\tag{3.5}
$$

对 \(t\le0\)，轨道的像保持在一个有界欧氏球内；由完备性和
\(|X|=|F|\) 的至多线性增长，负向流对每个有限时间存在。因此像在所有收缩
\(D_r(x)=rx\)、\(0<r\le1\) 下不变。

第二基本形式在欧氏伸缩下的范数满足

$$
|A_{D_rF(S)}|(rF(p))=r^{-1}|A_{F(S)}|(F(p)).
\tag{3.6}
$$

而 \(D_rF(S)=F(S)\)。若 \(|A|(p)>0\)，令 \(r\downarrow0\)，(3.6) 与全局
曲率上界矛盾。因此 \(A\equiv0\)。连通完备的二维全测地欧氏浸入的像是一个
完整仿射平面；又 (3.5) 的收缩中心是原点，所以该仿射平面经过原点。证毕。

### 3.2 平面支撑不含权重信息

设该平面为 \(P\)。整数 varifold 极限一般只能写成

$$
V_\infty=m|P|,
\qquad m\in\mathbb N.
\tag{3.7}
$$

对每个 \(m\ge1\)，\(m|P|\) 都满足

$$
H=0,
\qquad
F^\perp=0,
\qquad
\nabla\eta=0.
\tag{3.8}
$$

这些方程只看支撑和切平面，不含 varifold 的整数权函数。二维 Gaussian 质量则是

$$
\frac1{4\pi}\int_P e^{-|x|^2/4}\,d\mathcal H^2=1,
$$

从而

$$
\frac1{4\pi}\int e^{-|x|^2/4}\,d\|m|P|\|=m.
\tag{3.9}
$$

所以 Wang 原文从“plane”到“Gaussian integral \(=1\)”之间恰好缺少 \(m=1\)。

## 4. Wang--Li 在 \(\mathbb R^3\) 中真正使用的机制

用户所附 Wang--Li 2019 论文的 Theorem 4.1 研究闭嵌入曲面的重标度流

$$
\left(\frac{\partial x}{\partial t}\right)^\perp
=-\left(H-\frac12\langle x,n\rangle\right)n,
\tag{4.1}
$$

并假设

$$
d(\Sigma_t,0)\le D,
\qquad
\max_{\Sigma_t}|H|\le\Lambda_0e^{-t/2}.
\tag{4.2}
$$

这不是单独的 Type-I-\(A\) 假设。论文先得到平面极限的多重光滑收敛，再用下列
余一维结构排除 \(m\ge2\)。

这一差别可以直接从归一化看出。若
\(\tau=-\log(T-t)\)、\(\widetilde F=(T-t)^{-1/2}(F-y_0)\)，则

$$
|\widetilde H|=\sqrt{T-t}\,|H|,
\qquad
|\widetilde A|=\sqrt{T-t}\,|A|.
\tag{4.2a}
$$

未缩放的 \(|H|\le C_0\) 给出
\(|\widetilde H|\le C_0e^{-\tau/2}\)，正是 (4.2) 的衰减；而
\(|A|^2\le C_I/(T-t)\) 只给

$$
|\widetilde H|\le\sqrt2\,|\widetilde A|
\le\sqrt{2C_I},
\tag{4.2b}
$$

没有 \(\tau\to\infty\) 的衰减。因此 2019 论文的 Theorem 4.1 不能仅因
Wang 具有 Type-I-\(A\) 界就直接调用。

### 4.1 标量全序

把极限平面旋转成

$$
P=\{x_3=0\}\subset\mathbb R^3.
$$

在正则区域，每条竖直法线与各 sheet 各交一次，并能按唯一的 \(x_3\) 坐标排序：

$$
u_i^{(1)}<u_i^{(2)}<\cdots<u_i^{(m)}.
\tag{4.3}
$$

嵌入性保证不等式严格。令

$$
u_i^-=u_i^{(1)},
\qquad
u_i^+=u_i^{(m)},
\qquad
h_i=u_i^+-u_i^->0.
\tag{4.4}
$$

这对应 Wang--Li 2019 的 (4.29)--(4.36)。

### 4.2 正标量方程与 Harnack

两张标量图的方程相减后，\(h_i\) 满足一致抛物的标量线性方程；误差系数随
\(i\to\infty\) 消失。归一化

$$
w_i(x,t)=\frac{h_i(x,t)}{h_i(x_0,t_*)}>0
\tag{4.5}
$$

后，标量 Harnack 不等式给出局部上下界。极限 \(w>0\) 满足平面上的

$$
\partial_tw=Lw,
\qquad
L=\Delta-\frac12\langle x,\nabla\cdot\rangle+\frac12.
\tag{4.6}
$$

这些是 Wang--Li 2019 的 (4.45)--(4.48) 与 Proposition 4.9 的核心。

### 4.3 正性推出 \(L\)-稳定，平面却不 \(L\)-稳定

令 \(v=\log w\)。对紧支撑 \(\phi\)，加权分部积分给出

$$
-\int_P\phi L\phi\,e^{-|x|^2/4}\ge0.
\tag{4.7}
$$

论文先在去掉有限奇点的区域证明 (4.7)，再用二维对数 cutoff 穿过奇点；这对应
Lemmas 4.16--4.17。另一方面取大球 cutoff \(\phi_R\)，有

$$
-\int_P\phi_RL\phi_R e^{-|x|^2/4}
=\int_P\left(|\nabla\phi_R|^2-\frac12\phi_R^2\right)e^{-|x|^2/4}<0
\tag{4.8}
$$

当 \(R\) 足够大。这与 (4.7) 矛盾，故 \(m=1\)。

### 4.4 Type-I mean curvature 版本仍然使用同一余一结构

Li--Wang 后来的 Type-I mean curvature 论文假设

$$
|H|\le\frac\Lambda{\sqrt{T-t}}
$$

并得到 self-shrinker 的一重收敛。其证明更长，但关键函数仍是 top sheet 与 bottom
sheet 的正标量高度差；该文 (3.33)--(3.36) 明确写出这个差及其标量方程。

因此，“三维欧氏空间证明”并不是只靠 Type-I 与 smooth convergence；它还依赖
超曲面的法向一维性和环境补集被曲面分成两侧这一事实。

## 5. 为什么余二维没有 top/bottom

在 \(P^2\subset\mathbb R^4\) 上，一张法向图写成

$$
x\longmapsto x+u(x),
\qquad
u(x)\in P^\perp\cong\mathbb R^2.
\tag{5.1}
$$

两张图的差 \(u^+-u^-\) 是二维向量，非零只表示 sheets 不相交。二维向量没有与
坐标无关的全序。与此同时，二维曲面不把 \(\mathbb R^4\) 的局部补集分成“上侧”和
“下侧”，故 Wang--Li 的 thin-part 体积也没有同样的拓扑含义。

### 5.1 Kähler 角不选择实法线

令 \((e_1,e_2)\) 是定向正交切标架，

$$
\eta=\langle Je_1,e_2\rangle,
\qquad 0<\eta<1,
\qquad s=\sqrt{1-\eta^2}.
$$

定义

$$
e_3=\frac{Je_1-\eta e_2}{s},
\qquad
e_4=\frac{Je_2+\eta e_1}{s}.
\tag{5.2}
$$

则 \((e_3,e_4)\) 是法平面的正交标架，而

$$
\pi_N(Je_1)=se_3,
\qquad
\pi_N(Je_2)=se_4.
\tag{5.3}
$$

旋转切标架会同时旋转 \((e_3,e_4)\)，所以 (5.2) 没有选出不依赖标架的实直线。
在 \(\eta=1\) 时障碍更明显：\(P\) 是复直线，保持 \(P\) 逐点不动的 \(U(1)\) 可把
复法线中的每条实直线旋转成任意另一条，却保持 \(g,J,P,\eta\) 全部不变。

故

$$
\eta>\delta
\quad\not\Longrightarrow\quad
\text{法丛约化为一条带定向的实线丛}.
\tag{5.4}
$$

### 5.2 一个显式的 symplectic 旋转分离

在平坦 Kähler 四环面

$$
\mathbb T^4=\mathbb R^4/\mathbb Z^4,
\qquad
\omega=dx_1\wedge dx_2+dy_1\wedge dy_2
$$

中，取

$$
S_0=(x_1,x_2,0,0)
$$

和

$$
S_\varepsilon=
\bigl(x_1,x_2,
\varepsilon\cos(2\pi x_1),
\varepsilon\sin(2\pi x_1)\bigr).
\tag{5.5}
$$

当 \(0<\varepsilon<1/4\) 时，它们是互不相交的嵌入二维环面。第二张图的切向量为

$$
F_1=(1,0,-2\pi\varepsilon\sin(2\pi x_1),
2\pi\varepsilon\cos(2\pi x_1)),
\quad
F_2=(0,1,0,0),
$$

故

$$
\eta_{S_\varepsilon}
=\frac{\omega(F_1,F_2)}{|F_1\wedge F_2|}
=\frac1{\sqrt{1+4\pi^2\varepsilon^2}}>0.
\tag{5.6}
$$

然而两 sheet 的法向分离

$$
\varepsilon(\cos(2\pi x_1),\sin(2\pi x_1))
\tag{5.7}
$$

绕法向圆旋转一周。对任意固定非零法向量 \(\nu\)，其在 \(\nu\) 上的标量投影都有
零点并改变符号。因此正 Kähler 角不提供一个全局正的标量高度差。

这个例子只检验几何输入，不声称两张图本身形成一个平均曲率流。

## 6. 向量高度差为何不能替代正标量高度差

即使能选出两张 sheets，其差也只能归一化为法丛截面 \(W\)。在平面极限且法丛平凡
时，形式极限方程是逐分量的

$$
\partial_tW
=\left(\Delta-\frac12x\cdot\nabla+\frac12\right)W.
\tag{6.1}
$$

设 \(W\ne0\)，写

$$
W=re,
\qquad r=|W|,
\qquad |e|=1,
\qquad v=\log r.
$$

把 (6.1) 与 \(e\) 内积，直接计算得

$$
\partial_tv
=\Delta v-\frac12x\cdot\nabla v
+|\nabla v|^2-|\nabla e|^2+\frac12.
\tag{6.2}
$$

与正标量情形相比，多出了

$$
-|\nabla e|^2.
\tag{6.3}
$$

对 (6.2) 做 Wang--Li 的加权 \(\log\) 分部积分，精确得到

$$
-\int\phi L\phi\,e^{-|x|^2/4}
\ge
-\int\phi^2\partial_tv\,e^{-|x|^2/4}
-\int\phi^2|\nabla e|^2e^{-|x|^2/4},
\tag{6.4}
$$

即使对时间积分并利用 \(v\) 的端点控制消去第一项，第二个负误差仍然存在，因而得不到
非负的 \(L\)-稳定性。

这个误差不是技术幻觉。在 \(P\cong\mathbb R^2\) 上取

$$
W(x_1,x_2)=(x_1,x_2).
\tag{6.5}
$$

则 \(LW=0\)，且 \(W\) 在 \(P\setminus\{0\}\) 上不消失，但其方向沿圆周旋转。
所以“存在一个不消失的向量 Jacobi 场”并不等于“存在一个正标量 Jacobi 函数”，
也不能推出平面的标量 \(L\)-稳定性。

## 7. 原文 immersed 假设下的一重性反例

Wang Proposition 5.2 的陈述只写 orientable surface mean curvature flow，并未把每个
\(F_t\) 假设为嵌入。此时多重覆盖给出一个完全精确的反例，说明原条件不可能蕴含
“每个平面 blow-up 都是一重”。

### 命题 7.1（任意覆盖重数的经典静态流）

令 \(M=\mathbb C^2/\Lambda\) 为平坦紧 Kähler 四维实流形，令
\(E\subset M\) 是一个全测地复椭圆曲线。取连通的、保持定向的 \(q\) 重无分支覆盖

$$
\pi:\Sigma\longrightarrow E,
\qquad q\ge2,
$$

并令

$$
F_t=\iota_E\circ\pi
\qquad (t\ge0).
\tag{7.1}
$$

则 \(F_t\) 是经典静态平均曲率流，且

$$
A\equiv0,
\qquad H\equiv0,
\qquad \eta\equiv1.
\tag{7.2}
$$

所以对任意 \(t_0>0\)、任意 \(C>0\)，都有

$$
|A|^2\le\frac C{t_0-t}
\qquad(0\le t<t_0).
\tag{7.3}
$$

然而其典范推前 varifold 是

$$
V_{F_t}=q|E|.
\tag{7.4}
$$

在任意 \(y_0\in E\) 处作抛物放缩，局部极限为

$$
q|T_{y_0}E|.
\tag{7.5}
$$

#### 证明

覆盖前复合把诱导度量、第二基本形式、平均曲率向量和 Kähler 角全部拉回，故
(7.2)--(7.3) 成立。对任意 varifold 测试函数 \(\Phi\)，面积公式给出

$$
\int_\Sigma
\Phi(F_t(p),dF_t(T_p\Sigma))\,d\mu_{F_t}(p)
=q\int_E\Phi(x,T_xE)\,d\mathcal H^2(x),
$$

即 (7.4)。最后在平坦局部坐标中放缩，\(E\) 光滑趋于其切平面，覆盖次数保持为
\(q\)，得到 (7.5)。证毕。

### 7.2 反例的边界

这个流在 \(t_0\) 是正则的，不是有限时奇点；它不否定“在额外嵌入性下，某类真正
有限时 Type-I 奇点也许具有一重性”的更强猜想。它精确否定的是：从 Wang 原陈述的
immersed 条件、连通性、\(\eta>\delta\)、Type-I 界、平面支撑方程本身推出一重性。

若只把像集 \(E\) 人为赋予单位 Hausdorff 权重，就已经丢掉了原参数化浸入的覆盖信息；
这种改定义不能证明关于 immersed flow 推前密度的结论。

## 8. 对“加入嵌入性”的严格结论

若额外要求每个 \(t<t_0\) 的 \(F_t\) 都是嵌入，则第 7 节的覆盖反例被排除，但仍只能
得到：

1. 每个未放缩切片诱导单位密度 varifold；
2. Type-I 界给出局部光滑多图紧性；
3. 极限支撑是平面；
4. 极限整数权重 \(m\) 尚未由这些事实确定。

单位密度不在 varifold 收敛下封闭，多张互不相交图可以塌到同一支撑。因此单独加入
嵌入性并没有补上 Wang--Li 所用的标量正性。

本报告没有构造一个满足 Wang 全部 symplectic 条件的**嵌入有限时 Type-I 奇点**反例，
故不把这个更强的动态命题宣判为假。严格判定是：所附 Wang--Li 定理及 Wang 原有
等式不能证明它；若要成立，需要一个新的高余维一重性定理或额外 sheet-counting 假设。

## 9. 可严格成立的余二维修补条件

下面给出一个不依赖法向排序的条件版。它直接用法向投影次数计数 sheets。

### 定理 9.1（degree-one 单图条件下的单位平面定理）

设 \(V_i\) 是 Wang 选出的重标度切片 varifold，且其光滑支撑局部趋于二维平面
\(P\subset\mathbb R^N\)。假设：

1. **缓冲 degree one。** 对每个 \(R>1\)，充分大的 \(i\) 存在定向嵌入源片
   \(\Gamma_{i,R}\)，使管状法向投影
   $$
   p_{i,R}:\Gamma_{i,R}\longrightarrow D_{2R}:=P\cap B_{2R}(0)
   \tag{9.1}
   $$
   是 proper、保持定向的局部微分同胚，且
   $$
   \deg p_{i,R}=1;
   \tag{9.2}
   $$
2. **图收敛。** (9.1) 给出的法向图 \(u_{i,R}:D_{2R}\to P^\perp\) 在
   \(D_{2R}\) 的紧子集上 \(C^1\) 趋于零；
3. **完整质量。** 在内球 \(B_R\) 中
   $$
   V_i\lfloor B_R
   =|\Gamma_{i,R}|\lfloor B_R+W_{i,R},
   \qquad W_{i,R}\ge0,
   \tag{9.3}
   $$
   且
   $$
   \|W_{i,R}\|(B_R)\longrightarrow0;
   \tag{9.4}
   $$
4. **统一二次面积增长。** 存在 \(C_A\) 使
   $$
   \|V_i\|(B_\rho(0))\le C_A\rho^2
   \qquad(\rho\ge1)
   \tag{9.5}
   $$
   对所有 \(i\) 成立。

则

$$
V_i\longrightarrow|P|
$$

局部 varifold 收敛，并且完整 Gaussian 质量满足

$$
\lim_{i\to\infty}
\frac1{4\pi}\int e^{-|x|^2/4}\,d\|V_i\|=1.
\tag{9.6}
$$

#### 证明

proper 局部微分同胚是覆盖映射。对正则值 \(x\in D_{2R}\)，次数公式为

$$
1=\deg p_{i,R}
=\sum_{y\in p_{i,R}^{-1}(x)}
\operatorname{sgn}\det dp_{i,R}(y).
\tag{9.7}
$$

每一项因保持定向而等于 \(+1\)，所以每条纤维恰有一个点。因此 \(p_{i,R}\) 是
微分同胚，\(\Gamma_{i,R}\) 是恰好一张向量值法向图。

对支撑在 \(B_R\) 中的连续 varifold 测试函数 \(\Psi\)，图面积公式给出

$$
|\Gamma_{i,R}|(\Psi)
=\int_{D_{2R}}
\Psi(x+u_{i,R}(x),T_{i,R}(x))J_{i,R}(x)\,d\mathcal H^2(x).
\tag{9.8}
$$

\(C^1\) 收敛给出 \(T_{i,R}\to P\) 与 \(J_{i,R}\to1\)。结合 (9.3)--(9.4)，

$$
V_i(\Psi)\longrightarrow|P|(\Psi).
\tag{9.9}
$$

这证明局部单位重数收敛。

还须处理非紧 Gaussian 权。令

$$
\Phi(x)=\frac1{4\pi}e^{-|x|^2/4}.
$$

在二进环带

$$
A_k=B_{2^{k+1}R}\setminus B_{2^kR}
$$

上，由 (9.5) 有

$$
\int_{A_k}\Phi\,d\|V_i\|
\le \frac{C_A}{4\pi}
4^{k+1}R^2e^{-4^kR^2/4}.
\tag{9.10}
$$

右端对 \(k\) 可求和，且总和在 \(R\to\infty\) 时趋于零，并与 \(i\) 无关。
因此 Gaussian 尾部一致消失。固定 \(R\) 使用 (9.9)，再令 \(R\to\infty\)，得到

$$
\lim_i\int\Phi\,d\|V_i\|
=\int_P\Phi\,d\mathcal H^2=1.
$$

证毕。

### 9.2 为什么四个条件不能随便删

- 只对“选中的一张图”算 degree one 而没有 (9.3)--(9.4)，会漏掉其他 sheets；
- degree one 若没有正 Jacobian，\(+,+,-\) 三张 sheet 的代数次数仍可等于 \(1\)；
- 没有缓冲半径 \(2R>R\)，sheet 可以从圆盘侧边界进入；
- 局部 varifold 收敛不能直接测试非紧 Gaussian，故需要 (9.5) 或等价的 Gaussian
  tail tightness。

正 Kähler 角在切平面定向已经固定后，可以帮助保证投影 Jacobian 最终同号；它仍不
给出总次数 \(1\) 或剩余质量消失。

## 10. 条件版延拓命题

### 定理 10.1（Wang Proposition 5.2 的经典嵌入修补版）

设 \((M^4,g,J,\omega)\) 是紧 Kähler 流形，\(\Sigma\) 闭、连通、定向，并设

$$
F:\Sigma\times[0,t_0)\to M
$$

是经典平均曲率流，且每个 \(F_t\) 都是嵌入。假设

$$
\eta_t\ge\delta>0,
\qquad
|A_t|^2\le\frac{C_I}{t_0-t}.
\tag{10.1}
$$

再假设对每个终端支撑点 \(y_0\)，Wang 的能量消失 blow-up 序列满足定理 9.1 的
四个条件。则 \(F\) 可光滑延拓越过 \(t_0\)。

#### 证明

第一步，曲面上

$$
|H|\le\sqrt2|A|
\le\frac{\sqrt{2C_I}}{\sqrt{t_0-t}}.
$$

因此对 \(0\le s<t<t_0\)，

$$
\sup_{p\in\Sigma}d_M(F(p,t),F(p,s))
\le2\sqrt{2C_I}
\left(\sqrt{t_0-s}-\sqrt{t_0-t}\right).
\tag{10.2}
$$

故 \(F_t\) 一致趋于连续终端映射 \(F_{t_0}\)，终端像紧致。

第二步，对任意 \(y_0\in F_{t_0}(\Sigma)\)，Wang 的极限方程和引理 3.1 给出平面
支撑；定理 9.1 给出单位重数和

$$
\Theta(y_0,t_0)=1.
\tag{10.3}
$$

第三步，在经典 proper embedded 平均曲率流的适用类别中，White 局部正则性定理把
单位 Gaussian 密度点判为正则点。于是每个终端支撑点都有曲率有界的抛物邻域。

第四步，终端像紧致，取有限子覆盖，得到某个 \(\tau>0\) 使

$$
\sup_{\Sigma\times[t_0-\tau,t_0)}|A|<\infty.
\tag{10.4}
$$

标准抛物导数估计控制所有 \(\nabla^kA\)，故 \(F_t\) 光滑趋于 \(t=t_0\) 的光滑嵌入，
再由短时间存在定理从该切片重新启动。证毕。

### 10.2 这不是循环论证，但确实是新增假设

定理 9.1 的 degree-one 与完整质量条件是可检验的几何 sheet-counting 条件；它们不把
结论“Gaussian density \(=1\)”直接写进假设，所以证明不是同义反复。但这些条件也
不能由 (10.1) 自动导出，因而它们是对 Wang Proposition 5.2 的真正补充，而不是对
原文一句话的释义。

## 11. Danus 七机器人交叉审计摘要

本次 Danus 调用使用 7 个机器人：

| 类别 | 数量 | 主要任务 |
|---|---:|---|
| high | 3 | 支撑分类、覆盖反例、紧性与重数分离 |
| xhigh | 4 | Wang--Li 证明链、Kähler 法向线障碍、条件版定理、反例核验 |

独立结果的共同部分是：

1. Type-I 与高阶估计只给逐 sheet 紧性；
2. \(F^\perp=0\) 在相应完整性条件下给平面支撑，但不决定整数权重；
3. \(\eta>\delta\) 不选实法线；
4. Wang--Li 的正标量高度差没有无条件余二维替代；
5. immersed 覆盖反例严格否定原假设蕴含一重性；
6. 完整 degree-one 单图、剩余质量消失与 Gaussian 尾部控制足以修补密度计算。

交叉核验还发现一个符号细节：由 \(\pi_N\circ J\) 得到的是缩放等距同构；其相对于
不同法丛定向约定可能保持或反转定向。本文没有使用这个符号，只使用“它不选出实直线”
这一与定向约定无关的结论。

## 12. 最终结论

对用户要求的“把三维欧氏空间证明推广并证明 Wang Proposition 5.2 的 Type-I blow-up
重数为 \(1\)”应作如下严格回答：

1. **原样推广不可行。** Wang--Li 的核心是余一维标量排序、正高度差、标量 Harnack
   和 \(L\)-稳定性；余二维缺少第一个输入。
2. **Kähler 角没有补回这个输入。** 即使 \(\eta=1\)，法向 \(U(1)\) 旋转对称性仍排除
   任何典范实法线。
3. **Wang 可严格得到平面支撑。** Type-I 紧性与消失恒等式在相应完整性条件下给出
   \(P\)，但完整极限仍只能写成 \(m|P|\)。
4. **原 immersed 陈述不能蕴含一重性。** 静态复环面的任意有限覆盖满足全部点态条件，
   而平面 blow-up 重数等于覆盖次数。
5. **加入嵌入性仍不等于已经证明。** 它排除覆盖反例，却不从紧性层面排除 sheets 合并；
   本报告不声称已知一个满足全部 symplectic 条件的嵌入有限时反例。
6. **可以严格修补。** 加入完整 degree-one 单图、无剩余质量及二次面积增长后，
   Gaussian 密度严格等于 \(1\)，White 正则性和紧性给出延拓。

所以，本报告的数学产出不是一个错误的“无条件一重性证明”，而是对可证明范围的精确
划界，以及一个无跳步的可成立替代定理。

## 参考文献

**[1]** M.-T. Wang, *Mean Curvature Flow of Surfaces in Einstein Four-Manifolds*,
Journal of Differential Geometry **57** (2001), 301--338. Proposition 5.2,
尤其 pp. 316, 323--324. DOI: 10.4310/jdg/1090348113; arXiv:math/0110019.

**[2]** H. Li and B. Wang, *The Extension Problem of the Mean Curvature Flow (I)*,
Inventiones Mathematicae **218** (2019), 721--777. Theorem 4.1,
equations (4.29)--(4.48), Proposition 4.9, Lemmas 4.16--4.17, Theorem 5.1.
DOI: 10.1007/s00222-019-00893-2; arXiv:1608.02832.

**[3]** H. Li and B. Wang, *On Ilmanen's Multiplicity-One Conjecture for Mean
Curvature Flow with Type-I Mean Curvature*, arXiv:1811.08654v2 (2021).
Theorems 1.2--1.3 and equations (3.33)--(3.36).

**[4]** B. White, *A Local Regularity Theorem for Mean Curvature Flow*,
Annals of Mathematics **161** (2005), 1487--1519. DOI: 10.4007/annals.2005.161.1487.
