# 两张近重合平面盘与远处固定尺度光滑颈

## 一个真正满足经典平均曲率流的二重局部极限反例，以及它不能证明什么

**结论日期：2026 年 8 月 19 日**  
**问题背景：** 检验“连通、嵌入、曲率一致有界并光滑收敛”是否足以排除极限 varifold 的高重数。

> **核心判决。** 可以严格造出一列光滑、闭、连通、嵌入的经典平均曲率流
> \(\{M_t^i\}_{0\le t\le\tau}\subset\mathbb R^3\)，它们有与 \(i\) 无关的存在时间和全部曲率导数界，但在每个固定紧集上由两张图光滑趋于同一静态平面，因而在局部 varifold 意义下有 \(|M_t^i|\rightharpoonup2|P|\)。
> 连接两张图的颈始终位于趋向无穷远处。这个例子严格否定“连通嵌入 + 光滑局部紧性 \(\Rightarrow\) 一重极限”。但是，它不是同一条流在有限首奇异时刻的切流，因而不是 Wang Proposition 5.2 的 Type-I 反例。

---

## 1. 三个必须分开的命题层次

令 \(P=\mathbb R^2\times\{0\}\subset\mathbb R^3\)。本报告分别处理：

| 层次 | 是否能严格构造 | 结论 |
|---|---:|---|
| 一列真正的经典 MCF，局部极限为 \(2|P|\) | 能 | 用两张近平面盘和远处固定尺度颈构造；统一短时光滑存在且曲率一致有界 |
| 一列永恒、静态的经典 MCF，局部极限为 \(2|P|\) | 能 | 用缩放并平移的 catenoid；代价是颈处全局曲率发散 |
| 一条紧致嵌入流在有限首个 Type-I 奇点处具有二重平面切流 | 本构造没有给出 | 这需要把所有放缩切片耦合到同一条原流，远强于任意流序列的局部紧性 |

因此，下文所称“反例”只针对第一行中那个错误的紧性推断。

---

## 2. 固定尺度颈的初始曲面

### 2.1 一个固定的 U 形母线模板

这里先只在二维母线半平面中工作。坐标 \(u\) 表示从拼接圆柱向外增加的径向距离，\(z\) 是高度。我们的目标是构造一条弧：从 \((0,h)\) 水平向右出发，在 \(u>0\) 一侧完成一次半转弯，再水平向左到达 \((0,-h)\)。随后把它沿径向平移并绕 \(z\)-轴旋转，才得到曲面上的连接颈。

#### 第一步：明确选出平滑转角函数

令
\[
b(x)=
\begin{cases}
0,&x\le0,\\
\exp(-1/x),&x>0,
\end{cases}
\qquad
S(x)=\frac{b(x)}{b(x)+b(1-x)}.
\tag{2.0a}
\]
则 \(S\) 在实轴上光滑，在 \(x\le0\) 时等于 \(0\)，在 \(x\ge1\) 时等于 \(1\)。在 \(0<x<1\) 上，
\[
\frac{d}{dx}\log\frac{b(x)}{b(1-x)}
=\frac1{x^2}+\frac1{(1-x)^2}>0,
\]
故 \(S\) 非降；直接交换分母中的两项又得到
\[
S(1-x)=1-S(x).
\]
取
\[
\eta_0(s)=S(2s-\tfrac12),
\qquad 0\le s\le1.
\tag{2.0b}
\]
于是 \(\eta_0=0\) 于 \([0,1/4]\)，\(\eta_0=1\) 于 \([3/4,1]\)，且
\[
\eta_0(1-s)=1-\eta_0(s).
\tag{2.0c}
\]
把
\[
\alpha(s)=-\pi\eta_0(s)
\]
理解为母线的切向角。它在起始四分之一区间恒为 \(0\)，在中间区间从 \(0\) 平滑转到 \(-\pi\)，在最后四分之一区间恒为 \(-\pi\)。

#### 第二步：积分单位方向，并归一化竖直落差

令
\[
J=\int_0^1\sin(\pi\eta_0(s))\,ds.
\]
在 \(1/4<s<3/4\) 内有 \(0<\eta_0<1\)，故 \(J>0\)。置
\[
\ell=\frac2J,
\]
并定义
\[
\begin{aligned}
U(s)&=\ell\int_0^s\cos(\pi\eta_0(v))\,dv,\\
V(s)&=1-\ell\int_0^s\sin(\pi\eta_0(v))\,dv.
\end{aligned}
\tag{2.0d}
\]
因此
\[
(U'(s),V'(s))
=\ell\bigl(\cos(\pi\eta_0(s)),-\sin(\pi\eta_0(s))\bigr),
\qquad
\sqrt{U'^2+V'^2}=\ell.
\tag{2.0e}
\]
所以参数速度恒定，切向角正是 \(\alpha(s)\)。选择 \(\ell=2/J\) 的唯一作用，是让总竖直下降量恰好等于 \(2\)：
\[
V(1)=1-\ell J=-1.
\tag{2.0f}
\]

#### 第三步：逐项验证端点、朝向和单射性

由 (2.0c)，
\[
\cos(\pi\eta_0(1-s))=-\cos(\pi\eta_0(s)).
\]
故余弦积分在 \([0,1]\) 上抵消，从而
\[
U(0)=U(1)=0,
\qquad
(U(0),V(0))=(0,1),
\qquad
(U(1),V(1))=(0,-1).
\tag{2.0g}
\]
此外：

| 参数位置 | \(\eta_0\) | 速度 \((U',V')\) | 几何意义 |
|---|---:|---:|---|
| \(0\le s\le1/4\) | \(0\) | \((\ell,0)\) | 从上端点沿水平直线向右 |
| \(1/4<s<3/4\) | 从 \(0\) 增到 \(1\) | 切向角从 \(0\) 转到 \(-\pi\) | 在右侧向下转弯 |
| \(3/4\le s\le1\) | \(1\) | \((-\ell,0)\) | 沿水平直线向左到下端点 |

函数 \(V\) 不增，并在中间转弯段严格下降。在上、下两个水平段内，\(V\) 虽分别恒定，但 \(U\) 严格单调。因此曲线没有自交。另一方面，\(U\) 在 \([0,1/2]\) 上非降；结合对称关系 \(U(1-s)=U(s)\)，得到
\[
U(s)>0\qquad(0<s<1).
\tag{2.0h}
\]
所以除两个端点外，整条弧严格位于拼接线 \(u=0\) 的右侧。

#### 第四步：固定高度尺度

最后定义
\[
\gamma_h(s)=\bigl(hU(s),hV(s)\bigr),
\qquad
\mathcal C_h=\gamma_h([0,1]).
\tag{2.0i}
\]
则 \(\mathcal C_h\) 从 \((0,h)\) 连到 \((0,-h)\)，除端点外位于 \(u>0\)，并在两端分别与水平线 \(z=h\)、\(z=-h\) 完全重合一小段。其弧长速度是 \(h\ell\)，曲率可写成
\[
\kappa_h(s)=-\frac{\pi\eta_0'(s)}{h\ell}.
\tag{2.0j}
\]
因此曲率及任意阶弧长导数只依赖固定的 \(h\) 与 \(\eta_0\)，不依赖 \(i\)。

把 \(\mathcal C_h\) 平移为 \((2R_i,0)+\mathcal C_h\) 后，它从 \((2R_i,h)\) 出发，始终位于 \(r\ge2R_i\)，并回到 \((2R_i,-h)\)。这就是第 2.2 节所用的外侧 U 形母线。

> **固定尺度的准确含义：** \(h\)、\(\ell\) 和整条模板 \(\mathcal C_h\) 都不随 \(i\) 改变；随 \(i\) 改变的只有它被平移到半径 \(2R_i\) 的位置。绝不能把该模板整体缩小 \(\varepsilon_i\) 倍，否则曲率会按尺度律变成 \(O(\varepsilon_i^{-1})\)。

### 2.2 两张盘和远处连接颈

取
\[
R_i\longrightarrow\infty,
\qquad
\varepsilon_i\downarrow0.
\]
取固定光滑截断函数 \(\chi:\mathbb R\to[0,1]\)，满足
\[
\chi=0\quad\text{于 }(-\infty,1/4],
\qquad
\chi=1\quad\text{于 }[3/4,\infty).
\]
在 \(0\le r\le2R_i\) 上定义
\[
q_i(r)=
\begin{cases}
\varepsilon_i,&0\le r\le R_i,\\[2mm]
\varepsilon_i+(h-\varepsilon_i)
\chi\!\left(\dfrac{r-R_i}{R_i}\right),&R_i\le r\le2R_i.
\end{cases}
\tag{2.1}
\]
由于 \(\chi\) 在拼接端附近恒定，\(q_i\) 是光滑的，并且在 \(r=2R_i\) 附近恒等于 \(h\)。

在半平面 \(\{r\ge0\}\) 内取母线 \(\Gamma_i\)：

1. 沿上图 \((r,q_i(r))\) 从 \((0,\varepsilon_i)\) 走到 \((2R_i,h)\)；
2. 接上平移后的固定模板 \((2R_i,0)+\mathcal C_h\)，走到 \((2R_i,-h)\)；
3. 沿下图 \((r,-q_i(r))\) 反向走到 \((0,-\varepsilon_i)\)。

绕 \(z\)-轴旋转 \(\Gamma_i\)，得到曲面 \(M_0^i\subset\mathbb R^3\)。端点处母线水平地碰到旋转轴，故旋转后没有锥点。模板向 \(r>2R_i\) 一侧伸出而不自交，所以 \(M_0^i\) 光滑、闭、连通、嵌入，且拓扑为 \(S^2\)。特别地，
\[
M_0^i\cap\{r<R_i\}
=
\bigl(P+\varepsilon_i e_3\bigr)\cap\{r<R_i\}
\;\sqcup\;
\bigl(P-\varepsilon_i e_3\bigr)\cap\{r<R_i\}.
\tag{2.2}
\]

### 2.3 初始几何量的一致估计

由 (2.1)，对每个 \(j\ge1\)，
\[
\sup_{[R_i,2R_i]}|q_i^{(j)}|
\le C_jR_i^{-j}.
\tag{2.3}
\]
上、下平面盘上的第二基本形式恒为零；过渡图的所有导数由 (2.3) 一致控制；U 形颈是同一个固定模板的平移。

再检查旋转方向。若母线按弧长写成 \((r(s),z(s))\)，旋转曲面的两个主曲率是
\[
\kappa_{\mathrm{mer}}=r'z''-z'r'',
\qquad
\kappa_{\mathrm{rot}}=\frac{z'}{r}
\tag{2.4}
\]
（整体符号随法向选择而变）。所有非平坦部分都满足 \(r\ge R_i\)，所以第二项及其协变导数没有轴上奇性；在 \(r<R_i\) 上又有 \(z'=0\)。结合固定模板的界，得到：

### 引理 2.1（全局有界几何）

对每个整数 \(k\ge0\)，存在只依赖于 \(k,\chi,\mathcal C_h,h\) 的常数 \(C_k\)，使
\[
\sup_i\sup_{M_0^i}|\nabla^kA_i(0)|\le C_k.
\tag{2.5}
\]

这一步揭示固定尺度颈的作用：若颈宽也取为 \(\varepsilon_i\)，其转弯曲率通常是 \(O(\varepsilon_i^{-1})\)；现在颈模板没有缩放，故不存在这种爆炸。

---

## 3. 从这些初值出发的统一经典平均曲率流

对每个 \(i\)，令
\[
F_i:M^i\times[0,T_i)\longrightarrow\mathbb R^3,
\qquad
\partial_tF_i=\mathbf H_i,
\tag{3.1}
\]
是从 \(M_0^i\) 出发的最大经典平均曲率流，并写 \(M_t^i=F_i(M^i,t)\)。每个初值闭且光滑，故短时解存在。

### 3.1 共同存在时间

令
\[
K_0^2:=\sup_i\sup_{M_0^i}|A_i|^2<\infty.
\]
欧氏三维空间中曲面 MCF 的曲率演化式为
\[
(\partial_t-\Delta)|A|^2
=-2|\nabla A|^2+2|A|^4.
\tag{3.2}
\]
闭流上的最大值原理给出
\[
\frac{d^+}{dt}\sup_{M_t^i}|A|^2
\le2\left(\sup_{M_t^i}|A|^2\right)^2.
\]
与常微分方程比较得
\[
\sup_{M_t^i}|A|^2
\le\frac{K_0^2}{1-2K_0^2t}
\le2K_0^2,
\qquad
0\le t\le\tau:=\frac1{4K_0^2}.
\tag{3.3}
\]
若某个最大存在时间 \(T_i\le\tau\)，(3.3) 使 \(|A|\) 在 \([0,T_i)\) 一致有界；闭平均曲率流的标准延拓准则便允许越过 \(T_i\)，与最大性矛盾。因此
\[
T_i>\tau\qquad\text{对所有 }i.
\tag{3.4}
\]

注意，\(M_0^i\) 的两张盘虽然相距 \(2\varepsilon_i\to0\)，但这不缩短抽象浸入方程的存在时间；经典超曲面流的比较原理又保持嵌入性。

### 3.2 高阶导数界

一般的高阶演化不等式具有形式
\[
(\partial_t-\Delta)|\nabla^kA|^2
\le-2|\nabla^{k+1}A|^2
+C_k\!!
\sum_{a+b+c=k}
|\nabla^aA|\,|\nabla^bA|\,|\nabla^cA|\,|\nabla^kA|.
\tag{3.5}
\]
从 (2.5)、(3.3) 出发，逐阶用最大值原理和插值不等式，得到
\[
\sup_i\sup_{0\le t\le\tau}
\sup_{M_t^i}|\nabla^kA_i(t)|\le C'_k
\qquad(k=0,1,2,\ldots).
\tag{3.6}
\]
若希望避开端点处的插值书写，也可先在 \([0,\tau/2]\) 上完成估计；把 \(\tau\) 缩小一次即可得到上述闭区间版本。

---

## 4. 局部极限为什么恰好是二重静态平面

这是整个反例的关键，不能只用“颈很远”一句话代替。

### 4.1 远处部分在共同短时间内进不来

由曲面维数为二以及 (3.3)，
\[
|\mathbf H|^2\le2|A|^2\le4K_0^2,
\qquad
|F_i(p,t)-F_i(p,0)|\le2K_0t.
\tag{4.1}
\]
因此，一个在时刻 \(t\le\tau\) 位于固定球 \(B_L(0)\) 的物质点，在初始时刻必位于
\[
B_{L+2K_0\tau}(0).
\tag{4.2}
\]
当 \(i\) 足够大时，(4.2) 完全落在 (2.2) 的双平面区域内。初始过渡区和颈距离原点约为 \(R_i\)，不可能在这段共同时间内以有界法向速度进入固定球。

这并不是说抛物方程有有限传播速度；(4.1) 控制的是流中物质点的实际位移。远处几何仍可通过方程产生瞬时的微小影响，下一步用光滑紧性与唯一性识别其极限。

### 4.2 分别跟踪两张物质图

在上、下盘中心各取基点 \(p_i^+,p_i^-\)。由 (3.6)、局部面积界及诱导度量演化
\[
\partial_tg=-2\langle\mathbf H,A\rangle,
\tag{4.3}
\]
可以在任意固定的抛物紧集上对两列点化流分别应用经典 MCF 光滑紧致性。初始盘的内在半径趋向无穷大，所以每个点化极限都是定义在完整平面上的有界曲率经典流。其初值为
\[
F_\infty^pm(x,0)=(x,0),
\qquad x\in\mathbb R^2.
\tag{4.4}
\]

完整、有界第二基本形式的经典平均曲率流具有唯一性；静态平面 \(P_t=P\) 是从 (4.4) 出发的一个解。因此两个点化极限都只能是静态平面。结论不依赖子列，所以
\[
M_t^i\ \text{的上、下局部图分别于 }C^\infty_{\rm loc}\text{ 收敛到 }P,
\tag{4.5}
\]
并且该收敛在 \(t\in[0,\tau]\) 的紧子区间上一致。

局部面积界也可直接看出：由 (4.1)，\(B_L\) 中的时刻 \(t\) 部分来自初始的一个固定扩大球；该扩大球内只有两张平面盘，而固定物质子域的面积满足 \(\partial_td\mu=-|\mathbf H|^2d\mu\)，故其面积不增。

### 4.3 varifold 重数计算

设 \(\Phi\in C_c(G_2(\mathbb R^3))\) 是 Grassmann 丛上的连续测试函数。对充分大的 \(i\)，其支撑上只有上述两张图。逐图使用面积公式及 (4.5)，
\[
\begin{aligned}
\lim_{i\to\infty}|M_t^i|(\Phi)
&=\int_P\Phi(x,T_xP)\,d\mathcal H^2(x)
 +\int_P\Phi(x,T_xP)\,d\mathcal H^2(x)\\
&=2|P|(\Phi).
\end{aligned}
\tag{4.6}
\]
于是，对每个固定 \(t\in[0,\tau]\)，
\[
|M_t^i|\rightharpoonup2|P|
\quad\text{局部 varifold 意义下}.
\tag{4.7}
\]

我们得到本报告的主定理。

### 定理 4.1（固定尺度远颈的经典 MCF 二重极限）

存在 \(\tau>0\) 以及一列定义在 \([0,\tau]\) 上的光滑、闭、连通、嵌入经典平均曲率流 \(M_t^i\subset\mathbb R^3\)，使对每个 \(k\ge0\)
\[
\sup_i\sup_{0\le t\le\tau}\sup_{M_t^i}|\nabla^kA_i|<\infty,
\]
但其每个时间切片都满足
\[
|M_t^i|\rightharpoonup2|P|.
\]
作为支撑，每一张局部 sheet 都光滑收敛到 \(P\)；作为整数 varifold，两张 sheet 的质量相加成重数二。

若需要实四维环境，取全测地线性嵌入
\[
\iota:\mathbb R^3\hookrightarrow\mathbb R^4,
\qquad
\iota(x_1,x_2,x_3)=(x_1,x_2,x_3,0).
\]
因为 \(\mathbb R^3\times\{0\}\) 在 \(\mathbb R^4\) 中全测地，\(\iota(M_t^i)\) 的第二基本形式与平均曲率向量就是原来的量经 \(d\iota\) 推前。因此同一例子也是 \(\mathbb R^4\) 中余维二的经典曲面平均曲率流；但第 6 节说明它不能再满足全局严格正 Kähler 角。

---

## 5. 一个完全显式的静态版本：平移缩放 catenoid

固定 \(c_i=(i,0)\in\mathbb R^2\) 和 \(a_i=i^{-2}\)。定义 catenoid
\[
\mathcal K_i=
\left\{
(x,z):
z=\pm a_i\operatorname{arcosh}
\frac{|x-c_i|}{a_i},\quad |x-c_i|\ge a_i
\right\}.
\tag{5.1}
\]
等价参数化为
\[
X_i(u,\theta)=
\bigl(c_i+a_i\cosh u(\cos\theta,\sin\theta),\ a_iu\bigr).
\tag{5.2}
\]
它是完整、连通、嵌入的极小曲面，所以
\[
\mathcal K_i(t)=\mathcal K_i
\tag{5.3}
\]
是对所有 \(t\in\mathbb R\) 定义的经典平均曲率流。

在任意固定紧集 \(K\subset\mathbb R^2\) 上，令 \(\rho_i(x)=|x-c_i|\)。则 \(\rho_i\sim i\)，并且两张图的高度满足
\[
\sup_K|z_i^pm|
\le a_i\log\frac{C i}{a_i}
=O(i^{-2}\log i)\longrightarrow0,
\tag{5.4}
\]
而
\[
|Dz_i^pm|
=\frac{a_i}{\sqrt{\rho_i^2-a_i^2}}
=O(a_i/i)=O(i^{-3}).
\tag{5.5}
\]
反复微分 \(a_i\operatorname{arcosh}(\rho_i/a_i)\) 得到，对每个 \(k\ge1\)，
\[
\sup_K|D^kz_i^pm|\le C_{K,k}a_i i^{-k}\longrightarrow0.
\tag{5.6}
\]
所以两图都于 \(C^\infty(K)\) 收敛到零，面积公式再次给出
\[
|\mathcal K_i|\rightharpoonup2|P|.
\tag{5.7}
\]

但是 catenoid 的主曲率为
\[
\kappa_1=-\kappa_2
=\frac1{a_i\cosh^2u},
\qquad
\max_{\mathcal K_i}|A|=\frac{\sqrt2}{a_i}\to\infty.
\tag{5.8}
\]
因此，这个显式静态例子证明“嵌入与连通不保持极限重数一”，却不能替代定理 4.1 中的全局统一曲率构造。

---

## 6. 为什么它不能直接满足 Wang 的全局 Kähler 角条件

把闭曲面 \(M_0^i\) 任意嵌入标准
\(\mathbb C^2\cong\mathbb R^4\)，并不能令
\[
\eta=*F^*\omega\ge\delta>0
\tag{6.1}
\]
处处成立。事实上，标准辛形式是恰当的：
\[
\omega=dx_1\wedge dy_1+dx_2\wedge dy_2=d\lambda.
\]
若闭定向曲面满足 (6.1)，则一方面
\[
\int_\Sigma F^*\omega
=\int_\Sigma\eta\,d\mu
\ge\delta\operatorname{Area}(\Sigma)>0,
\tag{6.2}
\]
另一方面由 Stokes 定理
\[
\int_\Sigma F^*\omega
=\int_\Sigma d(F^*\lambda)=0,
\tag{6.3}
\]
矛盾。

因此，在欧氏 \(\mathbb C^2\) 中，“闭曲面 + 全局严格正 Kähler 角”本身就不可能。两盘远颈构造只能作为一般经典 MCF 的反例，不能被宣称为满足 Wang 全部假设的反例。

---

## 7. 紧 Kähler 四环面中的真正经典流类比

若目的是检验“经典流 + 嵌入 + 正 Kähler 角 + 全部曲率界”本身能否推出重数一，则紧平坦 Kähler 四环面上有一个完全显式的动态例子。

令
\[
\mathbb T^4=(\mathbb R/2\pi\mathbb Z)^4,
\qquad
\omega=dx_1\wedge dy_1+dx_2\wedge dy_2.
\]
固定整数 \(m\ge2\) 和 \(0<r_0<\pi/2\)。令
\[
r'=-\frac{r}{m^2+r^2},\qquad r(0)=r_0,
\tag{7.1}
\]
并定义
\[
F(\theta,\phi,t)=
\bigl(m\theta,\phi,r(t)\cos\theta,r(t)\sin\theta\bigr)
\pmod{2\pi}.
\tag{7.2}
\]

因 \(r(t)>0\) 对每个有限 \(t\) 成立，最后两个坐标恢复 \(\theta\)，第二坐标恢复 \(\phi\)，故每个有限时间切片都是嵌入环面。记 \(q=m^2+r^2\)，则
\[
g=q\,d\theta^2+d\phi^2,
\qquad
\mathbf H=-\frac r{m^2+r^2}n_1,
\qquad
\partial_tF=r'n_1=\mathbf H.
\tag{7.3}
\]
这确实是经典平均曲率流，而非任意变形。

又有
\[
F_t^*\omega=m\,d\theta\wedge d\phi,
\qquad
\eta_t=\frac m{\sqrt{m^2+r(t)^2}}
\ge\frac m{\sqrt{m^2+r_0^2}}>0,
\tag{7.4}
\]
并可逐阶计算
\[
|\nabla^kA_t|
=\frac{r(t)m^k}{(m^2+r(t)^2)^{k+1}}
\le\frac{r_0}{m^{k+2}}.
\tag{7.5}
\]
积分 (7.1) 得
\[
m^2\log r(t)+\frac12r(t)^2
=-t+m^2\log r_0+\frac12r_0^2,
\tag{7.6}
\]
所以 \(r(t)\downarrow0\) 仅发生在 \(t\to\infty\)。此时
\[
F_t\longrightarrow F_\infty(\theta,\phi)
=(m\theta,\phi,0,0),
\]
面积公式给出
\[
|F_t(\mathbb T^2)|\longrightarrow m|S|,
\qquad
S=\{(\alpha,\beta,0,0)\}.
\tag{7.7}
\]
取 \(m=2\) 即得到正 Kähler 角、嵌入经典 MCF 的二重极限。

但 (7.7) 是**无限时间**退化，并非有限时 Type-I 奇点。

---

## 8. 为什么这还不是有限时 Type-I 切流反例

切流的定义要求存在同一条原流 \(M_t\)、同一奇异时空点 \((x_0,T)\) 以及同一放缩序列 \(\lambda_i\to\infty\)，使
\[
M_s^{(i)}
=\lambda_i\bigl(M_{T+\lambda_i^{-2}s}-x_0\bigr)
\tag{8.1}
\]
收敛。定理 4.1 中的 \(M_t^i\) 是彼此不同的初值所产生的不同流；我们没有构造满足 (8.1) 的单一原流。两者之间缺少：

1. **跨尺度兼容性：** 第 \(i\) 个远颈必须是同一原流在第 \(i\) 个放缩尺度看到的几何；
2. **时间兼容性：** 所有切片必须来自 \(T+\lambda_i^{-2}s\)，不能任意逐项选择；
3. **奇点归一化：** 放缩中心必须真是首个有限奇异点，并满足 Type-I 曲率率；
4. **Wang 的结构条件：** 在 Kähler 情形还要保留全局正 Kähler 角及单调公式所需假设。

所以，“任意光滑流序列可出现 \(2|P|\)”只说明光滑紧性本身不读取重数；它不能推出“Wang 命题错误”，也不能证明存在 Type-I 二重切流。

---

## 9. 对原推理的精确修正

下列推理是错误的：
\[
\text{每个 }M_i\text{ 连通嵌入}
+\text{ 且 }|\nabla^kA_i|\text{ 一致有界}
\Longrightarrow
\text{极限平面重数为 }1.
\tag{9.1}
\]
定理 4.1 的颈逃向无穷远，使一个全局连通分支在固定球内出现两个局部连通分支；两张图可以同时收敛到同一支撑。正确结论只能是：每一张图都以重数一光滑收敛，而总 varifold 的重数等于落到同一支撑上的图片数。

若要从“极限支撑为平面”再推出密度 \(1\)，还必须另外证明某种**单图、次数一、密度小于二、或无残余质量**条件；这些条件不能由曲率界和嵌入性自动产生。

---

## 10. 最终结论

1. 两张高度 \(\pm\varepsilon_i\) 的大平面盘，在半径 \(R_i\to\infty\) 外用固定尺度光滑颈连接，确实可以作为一列光滑闭嵌入初值。
2. 它们产生定义在共同区间 \([0,\tau]\) 上的经典平均曲率流；全部曲率导数一致有界。
3. 对每个固定时间，局部 varifold 极限严格等于 \(2|P|\)，而非 \(|P|\)。
4. 平移缩放 catenoid 提供更显式的永恒静态版本，但其远处缩颈曲率发散。
5. 欧氏 \(\mathbb C^2\) 中的闭曲面不可能满足全局 \(*F^*\omega\ge\delta>0\)；紧 Kähler 四环面虽有二重无限时间极限，却不是 Type-I 奇点。
6. 因而已经严格造出的，是“经典流序列的二重局部极限反例”；尚未造出的，是“单条紧致嵌入流在有限首个 Type-I 奇点处的二重切流反例”。

---

## 参考框架与审计说明

- 闭流的有界第二基本形式延拓准则：Huisken 的经典准则；可参见 Liang Cheng，*On the extension to mean curvature flow in lower dimension*，arXiv:1304.2627 的引言陈述。
- 完整有界曲率解的唯一性：B.-L. Chen 与 L. Yin，*Uniqueness and pseudolocality theorems of the mean curvature flow*，Theorem 1.1，arXiv:math/0703694；欧氏环境自动满足其有界几何假设。
- 局部光滑紧致性：统一局部面积界、全部曲率导数界与点化穷竭上的 Arzelà--Ascoli/MCF 紧致性；一个可直接引用的局部版本见 Zhen Wang，arXiv:2109.01070，Lemma 2.7。
- varifold 重数：由每张局部图的面积公式逐图相加，而不是从支撑的光滑性读取。
- 本报告由 Danus 的 7 个审计机器人并行检查：\(3\) 个 `high` 与 \(4\) 个 `xhigh`，联动模型为 `gpt-5.6-sol`。机器人结论仅作为交叉审计；正文中的每一步仍按公式独立给出。
