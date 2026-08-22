# $\beta>0$ 时 $L_\beta$ 梯度流的曲率最大值原理

## 可验证的附加条件、严格证明与适用边界

**研究对象：** Han--Li--Sun 的 $L_\beta$ 梯度流  
**解的范畴：** 首个奇异时刻以前的紧致经典光滑解  
**审查日期：** 2026 年 8 月 22 日  
**核验方式：** Danus 7 个独立工作单元；主符号、最大点喷射、变分公式与反例交叉审查

---

## 摘要

设 $F_t:\Sigma^2\to (M^4,\bar g,J,\omega)$ 是 Han--Li--Sun 的 $L_\beta$ 梯度流，$\beta>0$，并假设

$$
\cos\alpha\ge\delta>0.
$$

令

$$
Q(t)=\max_\Sigma |A_t|^2.
$$

一般情形下，第二基本形的两个法向分量满足一致强抛物但非标量的耦合系统，所以不能仅从 $\cos\alpha\ge\delta$ 推出

$$
D^+Q(t)\le C\bigl(Q(t)+1\bigr)^2.
$$

本报告给出三个严格可用的补充条件。

1. **角向二阶 Bernstein 条件：** 只在 $|A|^2$ 的空间最大点控制单位曲率方向 $A/|A|$ 的二阶转动，即
   $$
   \left|\nabla^2\!\left(\frac{A}{|A|}\right)\right|
   \le K\bigl(|A|^2+\Lambda^2\bigr).
   $$
   这是针对 $\beta>0$ 耦合缺陷的推荐条件；它允许径向二阶导数不受控，因为径向部分在最大点具有正确符号。
2. **尺度正确的二阶曲率条件：** 在最大点假设
   $$
   |\nabla^2A|\le K(|A|+\Lambda)^3.
   $$
   这是更容易陈述、但更强的充分条件。
3. **真正恢复标量最大值原理的几何条件：** 若第二基本形始终取值于一个空间平行的第一法线丛，或每个时间片的 Kähler 角在空间上为常数，则耦合主部投影为同一个标量一致椭圆算子，从而得到标准最大值原理。该法向直线允许随时间转动。

报告同时证明：强抛物性、$\cos\alpha$ 接近 $1$、点态法向秩一以及任意零阶加权二次范数都不足以单独恢复最大值原理。最后说明上述条件与原审计报告定理 6.2 的衔接方式。本文不使用 Chen--Li 或 Mu-Tao Wang 论文中有争议的 Type I 排除论证。

> **核心结论。** 对一般 $\beta>0$ 流，最合适的结论不是宣称原始 $|A|^2$ 自动满足标量最大值原理，而是：在角向二阶振荡受尺度正确控制时，最大点计算仍然给出定理 6.2 所需的 Dini 微分不等式。

## 1. 记号与梯度流

令 $\alpha$ 为 Kähler 角，记

$$
c=\cos\alpha,\qquad s=\sin\alpha,
$$

$$
D=c^2+\beta s^2,
\qquad
a=\frac{c^2}{D},
\qquad
d=\frac{\beta s^2}{D}=1-a.
\tag{1.1}
$$

在适配正交标架 $\{e_1,e_2,\nu_3,\nu_4\}$ 中，法向速度可写为

$$
f=aH-dZ,
\qquad
Z=(e_2\alpha)\nu_3+(e_1\alpha)\nu_4.
\tag{1.2}
$$

写

$$
A_{ij}=h^3_{ij}\nu_3+h^4_{ij}\nu_4.
$$

适配标架恒等式为

$$
e_1\alpha=-(h^4_{11}+h^3_{12}),
\qquad
e_2\alpha=-(h^4_{12}+h^3_{22}).
\tag{1.3}
$$

所以速度分量恰为

$$
f^3=a h^3_{11}+h^3_{22}+d h^4_{12},
\qquad
f^4=h^4_{11}+a h^4_{22}+d h^3_{12}.
\tag{1.4}
$$

由 $c\ge\delta$ 可得

$$
a\ge a_0:=
\frac{\delta^2}{\delta^2+\beta(1-\delta^2)}>0.
\tag{1.5}
$$

固定一个背景逆长度尺度 $\Lambda\ge0$，使流所经过区域满足

$$
|\bar{\mathrm{Rm}}|\le\Lambda^2,
\qquad
|\bar\nabla\bar{\mathrm{Rm}}|\le\Lambda^3.
\tag{1.6}
$$

若环境紧致，可以选取一个固定 $\Lambda$。将度量归一化后可令 $\Lambda=1$。

## 2. 第二基本形的精确变分公式

采用约定

$$
A(X,Y)=(\bar\nabla_XY)^\perp,
$$

以及

$$
\bar R(X,Y)Z
=\bar\nabla_X\bar\nabla_YZ
-\bar\nabla_Y\bar\nabla_XZ
-\bar\nabla_{[X,Y]}Z.
$$

对任意法向速度 $f$，固定曲面坐标下有

$$
D_t^\perp A_{ij}
=(\nabla^\perp)^2_{ij}f
-A_{ik}g^{k\ell}\langle A_{j\ell},f\rangle
+\bigl(\bar R(f,e_i)e_j\bigr)^\perp.
\tag{2.1}
$$

同时

$$
\partial_tg_{ij}=-2\langle A_{ij},f\rangle.
\tag{2.2}
$$

把两个逆度量的变化也计算进去，得到无省略项的恒等式

$$
\boxed{
\begin{aligned}
\partial_t|A|^2
={}&2\langle A,(\nabla^\perp)^2f\rangle\\
&+2\sum_{i,j,k}
\langle f,A_{ik}\rangle
\langle A_{ij},A_{jk}\rangle\\
&+2\sum_{i,j}
\left\langle A_{ij},
\bigl(\bar R(f,e_i)e_j\bigr)^\perp
\right\rangle .
\end{aligned}}
\tag{2.3}
$$

特别地，

$$
\partial_t|A|^2
\le
2|A|\,|(\nabla^\perp)^2f|
+2|A|^3|f|
+2|A|\,|\bar{\mathrm{Rm}}|\,|f|.
\tag{2.4}
$$

在 $c\ge\delta$ 的 Grassmann 丛区域，速度可以写成

$$
f=P(A),
\tag{2.5}
$$

其中 $P$ 是由切平面平滑决定的线性束映射，而且

$$
|P|\le C,
\qquad
|\nabla P|\le C|A|,
\qquad
|\nabla^2P|\le C(|\nabla A|+|A|^2).
\tag{2.6}
$$

常数只依赖于 $\beta,\delta$ 和固定背景几何。

## 3. 主符号与真正的困难

对每个固定切向指标 $(i,j)$，令

$$
U_{ij}=
\begin{pmatrix}h^3_{ij}\\ h^4_{ij}\end{pmatrix}.
$$

经过 Codazzi 交换后，第二基本形方程的主部是

$$
D_tU_{ij}
=
\begin{pmatrix}
a\nabla_{11}+\nabla_{22}&d\nabla_{12}\\
d\nabla_{12}&\nabla_{11}+a\nabla_{22}
\end{pmatrix}U_{ij}
+\mathcal R_{ij}.
\tag{3.1}
$$

其主符号为

$$
P(\xi)
=a|\xi|^2I
+d
\begin{pmatrix}\xi_2\\ \xi_1\end{pmatrix}
\begin{pmatrix}\xi_2&\xi_1\end{pmatrix},
\tag{3.2}
$$

特征值恰好是

$$
a|\xi|^2,
\qquad |\xi|^2.
\tag{3.3}
$$

因此系统一致强抛物。将非标量部分记为

$$
\mathscr D(p,q)
=
\left(
\nabla_{22}p+\nabla_{12}q,
\nabla_{12}p+\nabla_{11}q
\right).
\tag{3.4}
$$

则可将完整方程示意地写成

$$
D_tA=a\Delta A+d\mathscr DA+\mathcal R,
\tag{3.5}
$$

并且

$$
|\mathcal R|
\le C_R\left[
(|A|+\Lambda)|\nabla A|
+(|A|+\Lambda)^3
\right].
\tag{3.6}
$$

这里 $\mathcal R$ 包含系数导数、三次反应项、环境曲率与曲率导数项。

### 3.1 强抛物性为什么不够

冻结 $a\in(0,1)$，令 $d=1-a$，考虑

$$
L_a(u,v)
=\left(
a u_{11}+u_{22}+d v_{12},
d u_{12}+v_{11}+a v_{22}
\right).
$$

在原点附近取

$$
u=1-\frac{\varepsilon}{2}(x_1^2+x_2^2),
\qquad
v=Mx_1x_2.
\tag{3.7}
$$

原点是 $u^2+v^2$ 的严格局部最大点，但

$$
2\langle (u,v),L_a(u,v)\rangle(0)
=2\bigl[dM-\varepsilon(a+1)\bigr].
\tag{3.8}
$$

当 $M\to\infty$ 时，该量任意大。用小球截断可以把它变成紧支撑光滑例子，并保持原点为全局最大点。

所以 $a\ge a_0>0$、主符号对称、存在正定 symmetrizer，均不能单独给出原始范数的标量最大值原理。

## 4. 推荐条件：控制曲率方向的二阶转动

本节给出针对耦合缺陷的主要定理。它比控制整个 $\nabla^2A$ 更弱：只控制单位方向 $A/|A|$ 的二阶变化。

从最大点计算看，逻辑上最弱的直接结构条件是：在每个 $|A|^2$ 最大点，存在统一 $K_D$ 使

$$
2d\langle A,\mathscr DA\rangle
\le a_0|\nabla A|^2
+K_D(|A|^2+\Lambda^2)^2.
\tag{4.0}
$$

条件 (4.0) 正好控制非标量缺陷的正部。下面的角向条件是一个更几何、更容易解释的充分条件，并将在证明中推出 (4.0)。

### 定理 4.1（角向二阶条件推出最大曲率 Dini 不等式）

设 $F_t$ 是定义在 $[0,T)$ 上的紧致经典 $L_\beta$ 梯度流，$\beta>0$，并满足 $\cos\alpha\ge\delta>0$ 与 (1.6)。令

$$
u=|A|^2,
\qquad
Q(t)=\max_\Sigma u(\cdot,t),
\qquad
\mathcal M_t=\{x:u(x,t)=Q(t)\}.
$$

假设存在 $K<\infty$，使得对每个 $t<T$、每个 $x\in\mathcal M_t$，只要 $Q(t)>0$，就在 $x$ 的邻域定义

$$
\rho=|A|,
\qquad
\Omega=\frac{A}{|A|},
$$

并有尺度正确的角向估计

$$
\boxed{
|\nabla^2\Omega|(x,t)
\le K\bigl(Q(t)+\Lambda^2\bigr).}
\tag{4.1}
$$

则存在

$$
C=C(\beta,\delta,K,C_R)<\infty
$$

使得

$$
\boxed{
D^+Q(t)
\le C\bigl(Q(t)+\Lambda^2\bigr)^2.}
\tag{4.2}
$$

归一化 $\Lambda=1$ 后，这正是

$$
D^+Q(t)\le C(Q(t)+1)^2.
$$

### 证明

若 $Q(t)=0$，则 $A\equiv0$，结论在该时刻直接成立。以下设 $Q(t)>0$，固定 $x\in\mathcal M_t$。因为 $\rho$ 在 $x$ 达到最大值，

$$
\nabla\rho(x,t)=0,
\qquad
\nabla^2\rho(x,t)\le0.
\tag{4.3}
$$

把 $A=\rho\Omega$ 代入耦合算子。由于 $\nabla\rho=0$，在 $x$ 有

$$
\begin{aligned}
\langle A,\mathscr DA\rangle
={}&\rho\,c^{ij}\nabla_{ij}\rho
+\rho^2\langle\Omega,\mathscr D\Omega\rangle,
\end{aligned}
\tag{4.4}
$$

其中 $c^{ij}$ 由

$$
c^{ij}\xi_i\xi_j
=\langle\Omega,\sigma_{\mathscr D}(\xi)\Omega\rangle
$$

定义。由 (3.2)，

$$
\sigma_{\mathscr D}(\xi)
=
\begin{pmatrix}\xi_2\\ \xi_1\end{pmatrix}
\begin{pmatrix}\xi_2&\xi_1\end{pmatrix}
\ge0.
\tag{4.5}
$$

所以 $c^{ij}$ 半正定。结合 (4.3)，(4.4) 的径向项非正：

$$
\rho\,c^{ij}\nabla_{ij}\rho\le0.
\tag{4.6}
$$

剩余的角向项满足

$$
\langle A,\mathscr DA\rangle
\le C\rho^2|\nabla^2\Omega|
\le CK\rho^2(\rho^2+\Lambda^2).
\tag{4.7}
$$

另一方面，由 (3.5)，并将诱导度量的时间变化并入低阶项，得到

$$
\partial_tu
=a\Delta u-2a|\nabla A|^2
+2d\langle A,\mathscr DA\rangle
+2\langle A,\mathcal R\rangle.
\tag{4.8}
$$

由 (3.6) 与 Young 不等式，

$$
\begin{aligned}
2|A|\,|\mathcal R|
&\le C\rho(\rho+\Lambda)|\nabla A|
+C\rho(\rho+\Lambda)^3\\
&\le a_0|\nabla A|^2
+C(\rho^2+\Lambda^2)^2.
\end{aligned}
\tag{4.9}
$$

因为 $a\ge a_0$，将 (4.7)--(4.9) 代回可得

$$
\partial_tu(x,t)
\le a\Delta u(x,t)
-a_0|\nabla A|^2(x,t)
+C(Q(t)+\Lambda^2)^2.
\tag{4.10}
$$

在空间最大点 $\Delta u(x,t)\le0$，所以

$$
\partial_tu(x,t)
\le C(Q(t)+\Lambda^2)^2.
\tag{4.11}
$$

最后证明从最大点估计到 Dini 导数的传递。取 $h_m\downarrow0$ 实现上右极限，并取 $x_m$ 使

$$
u(x_m,t+h_m)=Q(t+h_m).
$$

由 $\Sigma$ 紧致，取子列使 $x_m\to x_\infty$。因为

$$
Q(t+h_m)-Q(t)
\le u(x_m,t+h_m)-u(x_m,t),
$$

光滑性与一致连续性给出 $x_\infty\in\mathcal M_t$，并且

$$
D^+Q(t)
\le\partial_tu(x_\infty,t)
\le C(Q(t)+\Lambda^2)^2.
$$

定理得证。$\square$

### 4.2 为什么该条件是尺度正确的

在抛物放缩下，$|A|$ 具有逆长度量纲，而 $\Omega=A/|A|$ 无量纲。因此

$$
|\nabla^2\Omega|
\quad\text{和}\quad
|A|^2+\Lambda^2
$$

都具有逆长度平方量纲。条件 (4.1) 不引入错误尺度。

### 4.3 一个更简单但更强的版本

若不希望使用 $A/|A|$，可以直接假设在所有最大点

$$
\boxed{
|\nabla^2A|
\le K(|A|+\Lambda)^3.}
\tag{4.12}
$$

则

$$
|\langle A,\mathscr DA\rangle|
\le C|A||\nabla^2A|
\le C K(|A|+\Lambda)^4,
$$

其余证明与上面相同。因此 (4.12) 也推出 (4.2)。

注意：只控制 $|\nabla A|$ 不够。例 (3.7) 在最大点满足 $\nabla A=0$，但混合二阶导数仍可使曲率增长任意大。

## 5. 最弱的直接速度条件

若目标仅仅是得到定理 6.2 所需的 Dini 不等式，而不要求一个空间标量微分不等式，则可以使用更直接的条件。

### 定理 5.1（最大集合上的速度 Hessian 条件）

在定理 4.1 的几何背景下，假设存在 $K<\infty$，使每个 $x\in\mathcal M_t$ 都满足

$$
|f|(x,t)\le K(|A|(x,t)+\Lambda),
\tag{5.1}
$$

$$
|(\nabla^\perp)^2f|(x,t)
\le K(|A|(x,t)+\Lambda)^3.
\tag{5.2}
$$

则

$$
D^+Q(t)
\le24K(Q(t)+\Lambda^2)^2.
\tag{5.3}
$$

### 证明

在最大点令 $r=|A|+\Lambda$。由精确公式 (2.3)，

$$
\partial_t|A|^2
\le2|A|\,|(\nabla^\perp)^2f|
+2|A|^3|f|
+2|A|\Lambda^2|f|
\le6Kr^4.
$$

又因为

$$
(|A|+\Lambda)^4
\le4(|A|^2+\Lambda^2)^2,
$$

所以

$$
\partial_t|A|^2
\le24K(Q+\Lambda^2)^2.
$$

应用定理 4.1 证明中的最大点 Dini 引理即得结论。$\square$

对当前 $L_\beta$ 流，$f=P(A)$ 自动给出 $|f|\le C|A|$。因此真正新增的内容只是 (5.2)。条件只需在当前最大集合上成立，不需要在整个曲面上一致成立。

## 6. 真正恢复标量最大值原理的几何条件

### 定理 6.1（空间平行第一法线丛）

在定理 4.1 的背景下，进一步假设沿整个流存在秩一法丛

$$
L_t\subset N\Sigma_t,
$$

使得局部存在单位截面 $\nu$ 满足

$$
A=B\otimes\nu,
\qquad
\nabla^\perp\nu=0.
\tag{6.1}
$$

法向直线 $L_t$ 可以随时间转动；不要求 $D_t^\perp\nu=0$。

则存在一个标量一致椭圆算子

$$
\mathcal L=b^{ij}\nabla_{ij},
\qquad
a_0g^{ij}\le b^{ij}\le g^{ij},
\tag{6.2}
$$

使

$$
(\partial_t-\mathcal L)|A|^2
\le C(|A|^2+\Lambda^2)^2.
\tag{6.3}
$$

因而原始 $|A|^2$ 满足真正的标量最大值原理，并且

$$
D^+Q(t)\le C(Q(t)+\Lambda^2)^2.
\tag{6.4}
$$

### 证明

在适配法向标架中写

$$
\nu=r\nu_3+s\nu_4,
\qquad r^2+s^2=1.
$$

把 (3.1) 投影到 $\nu$。由于每个切向分量都沿同一个平行法向方向，所得标量主系数矩阵是

$$
(b^{ij})
=
\begin{pmatrix}
ar^2+s^2&drs\\
drs&r^2+as^2
\end{pmatrix}.
\tag{6.5}
$$

其迹与行列式分别为

$$
\operatorname{tr}b=1+a,
\qquad
\det b=a.
$$

所以两个特征值恰为 $a$ 和 $1$。特别地，(6.2) 成立。相同的 $\mathcal L$ 作用于 $B$ 的每个切向分量，故

$$
(\partial_t-\mathcal L)|B|^2
=-2b^{ij}\langle\nabla_iB,\nabla_jB\rangle
+\text{低阶项}.
\tag{6.6}
$$

低阶项由 (3.6) 控制。用 $b\ge a_0g$ 和 Young 不等式吸收含 $|\nabla B|$ 的项，得到

$$
(\partial_t-\mathcal L)|B|^2
\le-a_0|\nabla B|^2
+C(|B|^2+\Lambda^2)^2.
$$

因为 $|B|=|A|$，即得 (6.3)--(6.4)。$\square$

时间转动不会改变上述投影：由 $|\nu|=1$ 有

$$
\langle D_t^\perp\nu,\nu\rangle=0,
$$

所以把 $D_t(q_{ij}\nu)$ 投影到 $\nu$ 时仍只留下 $\partial_tq_{ij}$。

> 条件 (6.1) 必须理解为沿流的结构条件。仅仅在初始时刻法向秩一，或每一点都存在一个随位置旋转的法向直线，并不足以推出结论。

### 命题 6.2（由非退化秩一条件得到空间平行性）

固定一个时间片。假设

$$
A_{ij}=h_{ij}\nu,
\qquad
\det(h_{ij})\ne0,
\tag{6.7}
$$

并令 $\mu$ 为与 $\nu$ 正交的单位法向量。若环境 Codazzi 强迫项满足

$$
\left\langle
(\bar R(e_1,e_2)e_k)^\perp,\mu
\right\rangle=0,
\qquad k=1,2,
\tag{6.8}
$$

则 $\nabla^\perp\nu=0$。

事实上，令

$$
\omega_i=\langle\nabla_i^\perp\nu,\mu\rangle.
$$

把 Codazzi 方程投影到 $\mu$，得到

$$
h_{jk}\omega_i-h_{ik}\omega_j=0.
$$

取 $(i,j)=(1,2)$ 及 $k=1,2$，得到关于 $(\omega_1,\omega_2)$ 的系数矩阵

$$
\begin{pmatrix}
h_{12}&-h_{11}\\
h_{22}&-h_{12}
\end{pmatrix},
$$

其行列式为 $\det(h_{ij})\ne0$，所以 $\omega_1=\omega_2=0$。这给出了从“法向秩一”升级到定理 6.1 所需“空间平行法向线”的一个可核验入口。该条件仍须在所研究的全部时间片上成立。

### 反例 6.3（点态秩一不够）

令

$$
z=(\cos\theta,\sin\theta).
$$

则 $|z|\equiv1$，并且 $z$ 在每一点都张成一维法向线。可在一点安排

$$
\theta=0,
\qquad
\nabla\theta=0,
\qquad
\theta_{12}=M.
$$

耦合主部对 $|z|^2$ 的贡献是 $2dM$，可任意大。这说明关键不是“秩一”，而是法向线不发生未受控的二阶旋转。

### 命题 6.4（空间常 Kähler 角）

若对每个 $t<T$ 都有

$$
\nabla\alpha(\cdot,t)\equiv0,
\tag{6.9}
$$

则 $Z=0$，且 $a=a(t)$ 在每个时间片上为空间常数。因此

$$
f=a(t)H.
$$

流只是具有时间依赖速度因子的平均曲率流。Simons 恒等式与 (2.1) 给出

$$
(\partial_t-a(t)\Delta)|A|^2
\le-2a(t)|\nabla A|^2
+C(|A|^2+\Lambda^2)^2.
\tag{6.10}
$$

故同样有 (6.4)。

这里必须假设 (6.9) 沿整个流成立；仅假设初始 Kähler 角为空间常数并不自动证明该性质被梯度流保持。

## 7. 为什么零阶加权范数不能解决一般情形

可能的尝试是寻找正定矩阵 $G$，以

$$
E_G=\langle GU,U\rangle
$$

替代 $|U|^2$。但冻结系数后，若希望对所有二阶喷射都有一个标量算子 $b^{ij}\partial_{ij}$ 使主部满足标量乘积公式，则比较 $U_{ij}$ 的系数必须有

$$
GP^{ij}=b^{ij}G.
\tag{7.1}
$$

因 $G$ 可逆，(7.1) 强迫

$$
P^{ij}=b^{ij}I.
$$

当 $d>0$ 时，

$$
P^{11}=\begin{pmatrix}a&0\\0&1\end{pmatrix}
$$

不是标量矩阵，所以不可能。即使允许 $G$ 依赖于切平面，在一个冻结点上同样受到这一代数障碍；$G$ 的导数只产生低阶项，不能消去自由的二阶喷射。

欧氏度量确实给出一个有用的积分能量恒等式，其耗散主项为

$$
a|\nabla U|^2
+d|\partial_1U_2+\partial_2U_1|^2.
$$

但这是积分或局部能量控制，不是点态最大值原理。二者不能混淆。

## 8. 条件强弱与使用建议

| 条件 | 是否给出 Dini 不等式 | 是否为真正标量最大值原理 | 评价 |
|---|---:|---:|---|
| $\cos\alpha\ge\delta$ 与强抛物性 | 否 | 否 | 原始假设不足 |
| $\sin\alpha$ 很小但非零 | 否 | 否 | 任意小 $d>0$ 仍可被大混合二阶喷射放大 |
| 仅有 $|\nabla A|$ Bernstein 控制 | 否 | 否 | 最大点可有 $\nabla A=0$ 而 $\nabla^2A$ 任意大 |
| 最大点角向条件 (4.1) | 是 | 最大点意义下成立 | **推荐，正好控制危险方向** |
| 最大点二阶条件 (4.12) | 是 | 不必形成全局标量 PDE | 简洁、较强、容易核验 |
| 最大点速度 Hessian 条件 (5.2) | 是 | 否 | 从精确变分公式看最直接 |
| 空间平行第一法线丛 | 是 | 是 | 非平凡的几何标量化条件；法线允许随时间转动 |
| 每片空间常 Kähler 角 | 是 | 是 | 退化为时间重参数化 MCF |
| $d=0$ | 是 | 是 | 对 $\beta>0$ 等价于全纯角，流实际上驻定 |

推荐的逻辑层次是：

1. 若研究一般 $\beta>0$ 流并只需定理 6.2，优先验证 (4.1) 或 (4.12)；
2. 若研究具有额外降维结构的流，使用定理 6.1；
3. 若已有速度的高阶估计，直接使用定理 5.1；
4. 不要把强抛物性或加权积分能量误写成点态标量最大值原理。

## 9. 与 Type I essential 条件的衔接

假设 $T<\infty$ 是首个奇异时刻，并且任一上述条件给出

$$
D^+Q(t)\le C(Q(t)+\Lambda^2)^2.
\tag{9.1}
$$

若流不能延拓，则 $Q(t)$ 必在 $T$ 前无界。ODE 比较说明曲率不可能比解 $y'=Cy^2$ 更早爆破，因此对充分接近 $T$ 的 $t$，

$$
Q(t)+\Lambda^2
\ge\frac{1}{C(T-t)}.
\tag{9.2}
$$

进一步靠近 $T$ 后可吸收固定的 $\Lambda^2$，得到

$$
Q(t)\ge\frac{c_0}{T-t}.
\tag{9.3}
$$

如果再另行假设 Type I 上界

$$
Q(t)\le\frac{C_I}{T-t},
\tag{9.4}
$$

并在每个时间选择曲率最大点 $x_t$，则

$$
\sqrt{T-t}\,|A|(x_t,t)\ge\sqrt{c_0}>0.
$$

所以这些最大点形成 type-I essential 点列。

必须强调：(4.1)、(4.12)、(5.2) 或 (6.1) 只补足定理 6.2 的最大曲率微分条件；它们本身并不证明 Type I 上界 (9.4)。因此不能把本报告解释成一般 $\beta>0$ 梯度流必为 Type I 的证明。

## 10. 最终定理版本

综合以上分析，可在后续论文中使用下述版本。

### 定理 10.1（适用于 $\beta>0$ 梯度流的最大曲率准则）

设 $F_t:\Sigma^2\to M^4$ 是紧 Kähler 曲面中的经典 $L_\beta$ 梯度流，$\beta>0$，定义于 $[0,T)$，并满足

$$
\cos\alpha\ge\delta>0.
$$

假设环境曲率及其一阶协变导数有界。令 $Q(t)=\max_\Sigma|A_t|^2$。如果下列任一条件成立：

1. 在每个 $|A|^2$ 最大点，
   $$
   \left|\nabla^2\left(A/|A|\right)\right|
   \le K(|A|^2+\Lambda^2);
   $$
2. 在每个 $|A|^2$ 最大点，
   $$
   |\nabla^2A|\le K(|A|+\Lambda)^3;
   $$
3. 在每个 $|A|^2$ 最大点，
   $$
   |(\nabla^\perp)^2f|\le K(|A|+\Lambda)^3;
   $$
4. 第二基本形始终取值于一个空间平行的秩一法丛；
5. 每个时间片的 Kähler 角在空间上为常数；

则 $Q$ 在 $[0,T)$ 上局部 Lipschitz，并存在只依赖于固定几何数据与相应条件常数的 $C$，使

$$
D^+Q(t)\le C(Q(t)+\Lambda^2)^2.
$$

因此在 $\Lambda=1$ 的归一化下，原审计报告定理 6.2 的条件

$$
D^+Q(t)\le C(Q(t)+1)^2
$$

成立。$\square$

## 11. 审查边界

- 本报告只讨论首个奇异时刻以前的经典光滑解，不使用 Brakke 流或弱解结构。
- 平行第一法线丛和空间常 Kähler 角均被作为沿流假设；本文没有声称它们由任意初值自动保持。
- 角向条件 (4.1) 是充分条件，不声称它在所有 $L_\beta$ 流中自动成立。
- 主喷射反例证明的是：不存在只依赖 $\beta,\delta$、背景有界几何和 $|A|$ 的普适原始范数最大值估计。它不排除某个特殊解因额外结构而满足 Dini 不等式。
- 本报告的论证不调用 Chen--Li 或 Mu-Tao Wang 关于 Type I 奇点的争议步骤。

## 参考文献

1. X. Han, J. Li, J. Sun, *Gradient flow for $\beta$-symplectic critical surfaces*, Ann. Inst. H. Poincaré C Anal. Non Linéaire 41 (2024), 1083--1116, DOI: 10.4171/AIHPC/100.
2. K. Liu, H. Xu, E. Zhao, *Mean curvature flow of higher codimension in Riemannian manifolds*, Math. Z. 277 (2014), 117--136, arXiv:1204.0107.
3. *$L_\beta$ 梯度流的有限时奇性与 Type-I essential 性：原命题的否定、严格的条件化定理与文献审计*, `gradient-flow-finite-time-type-i-essential-audit-zh.pdf`.

---

**Danus 配置：** 7 个工作单元，其中 3 个 high、4 个 xhigh。审查分支包括：精确法向变分、主符号、角向 Bernstein 条件、平行法线丛、加权范数障碍、最大点反例及最终逻辑审计。
