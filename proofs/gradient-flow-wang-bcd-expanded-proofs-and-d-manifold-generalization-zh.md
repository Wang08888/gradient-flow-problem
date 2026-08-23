# HLS 梯度流中 Wang 型 B、C、D 定理的逐式证明与 D 型环境流形推广

## 完整条件、每一步演算、产品流形分类与反例边界

**对象**　Han--Li--Sun 的 $L_\beta$ 负梯度流，$\beta>0$  \
**解的范畴**　首个奇异时刻以前的紧致经典光滑浸入解  \
**基础报告**　`gradient-flow-wang-bcd-complete-conditions-and-proofs-zh.pdf`  \
**目的**　把基础报告中所有证明展开，并回答定理 D 的环境 $M$ 可以推广到哪些流形  \
**核验日期**　2026 年 8 月 23 日

---

## 0. 逻辑图和假设标签

全文使用以下逻辑链：

$$
\boxed{\text{加权低密度}}
\Longrightarrow
\boxed{|A|\text{ 一致有界}}
\Longrightarrow
\boxed{\text{高阶预紧性}}
\tag{0.2}
$$

$$
\boxed{\int |A|^2\le C\|f_\beta\|_W^2}
+
\boxed{\text{非坍缩}}
\Longrightarrow
\boxed{\|A_t\|_\infty\to0}
\Longrightarrow
\boxed{\text{C 型全测地极限}};
\tag{0.3}
$$

$$
\boxed{\mathscr P_\pm\eta_\pm\ge\kappa\eta_\pm(1-\eta_\pm^2)}
\Longrightarrow
\boxed{\eta_\pm\to1}
\Longrightarrow
\boxed{|du_t|\to0}
\Longrightarrow
\boxed{\text{D 型水平极限}}.
\tag{0.4}
$$

其中 (0.2) 是 HLS 的 $\varepsilon$-正则性输入，(0.3) 是本文为 C 补入的曲率强制性，(0.4) 是本文为 D 补入的双角标量结构。三者不能互相替代。

## 1. 基本公式全部展开

设 $(M^4,\bar g,J,\omega)$ 是紧 Kähler 曲面，$F_t:\Sigma^2\to M$ 是闭有向曲面的经典浸入。取适配正交标架

$$
\{e_1,e_2\}\subset T\Sigma_t,
\qquad
\{v_3,v_4\}\subset N\Sigma_t.
$$

记

$$
c=\cos\alpha=*F_t^*\omega>0,
\qquad s=\sin\alpha,
\qquad D=c^2+\beta s^2,
\tag{1.1}
$$

以及

$$
V=(e_2\alpha)v_3+(e_1\alpha)v_4.
\tag{1.2}
$$

HLS 负梯度流是

$$
\boxed{
\partial_tF=f_\beta
=\frac{c^2H-\beta s^2V}{D}.}
\tag{1.3}
$$

等价地，令

$$
b_\beta=\frac{\beta s^2}{D},
\tag{1.4}
$$

则

$$
f_\beta-H
=\frac{c^2H-\beta s^2V-DH}{D}
=-\frac{\beta s^2(H+V)}D,
\tag{1.5}
$$

所以

$$
\boxed{f_\beta=H-b_\beta(H+V).}
\tag{1.6}
$$

公式 (1.6) 将在双角演化中精确显示普通 MCF 与 HLS 流的差别。

### 1.1 能量恒等式与加权范数

定义

$$
L_\beta(F)=\int_\Sigma c^{-\beta}\,d\mu.
\tag{1.7}
$$

HLS 的第一变分公式说明，对任意法向变分 $Z$，

$$
dL_\beta(F)[Z]
=-(\beta+1)\int_\Sigma
\frac{D}{c^{\beta+2}}\langle f_\beta,Z\rangle\,d\mu.
\tag{1.8}
$$

令

$$
\langle Z_1,Z_2\rangle_{W,F}
=(\beta+1)\int_\Sigma
\frac{D}{c^{\beta+2}}
\langle Z_1,Z_2\rangle\,d\mu,
\tag{1.9}
$$

则 (1.8) 正是

$$
dL_\beta(F)[Z]=-\langle f_\beta,Z\rangle_{W,F}.
\tag{1.10}
$$

沿 $\partial_tF=f_\beta$ 取 $Z=f_\beta$，逐项得到

$$
\begin{aligned}
\frac d{dt}L_\beta(F_t)
&=dL_\beta(F_t)[\partial_tF_t]\\
&=dL_\beta(F_t)[f_\beta]\\
&=-(\beta+1)\int_{\Sigma_t}
\frac{D}{c^{\beta+2}}|f_\beta|^2\,d\mu_t\\
&=-\|f_\beta(F_t)\|_{W,t}^2.
\end{aligned}
\tag{1.11}
$$

若 $c\ge\delta>0$，则因 $c^2+s^2=1$，

$$
D=c^2+\beta s^2
=\beta+(1-\beta)c^2.
\tag{1.12}
$$

因此

$$
\min\{1,\beta\}\le D\le\max\{1,\beta\},
\qquad
1\le c^{-\beta-2}\le\delta^{-\beta-2}.
\tag{1.13}
$$

把 (1.13) 代入 (1.9)，对任意法向场 $Z$ 得

$$
\boxed{
(\beta+1)\min\{1,\beta\}\|Z\|_{L^2}^2
\le\|Z\|_W^2
\le(\beta+1)\max\{1,\beta\}\delta^{-\beta-2}\|Z\|_{L^2}^2.}
\tag{1.14}
$$

这一步解释了后文为什么有限 $W$-长度可以转成有限 $L^2$-长度。

### 1.2 Kähler 角的有限视界下界

设 $K_1\ge\sup_M|\operatorname{Ric}_M|$。HLS 的角演化式在空间最小点给出下 Dini 导数不等式

$$
D^-m(t)\ge-\frac{K_1}{\beta}m(t),
\qquad
m(t)=\min_{\Sigma_t}c.
\tag{1.15}
$$

令 $z(t)=e^{K_1t/\beta}m(t)$。由乘积法则，

$$
D^-z(t)
=e^{K_1t/\beta}
\left(D^-m(t)+\frac{K_1}{\beta}m(t)\right)
\ge0.
\tag{1.16}
$$

所以 $z(t)\ge z(0)$，即

$$
\boxed{
\min_{\Sigma_t}c
\ge e^{-K_1t/\beta}\min_{\Sigma_0}c.}
\tag{1.17}
$$

特别地，对每个有限 $S$，

$$
c\ge\delta_S
:=e^{-K_1S/\beta}\min_{\Sigma_0}c>0
\quad(0\le t\le S).
\tag{1.18}
$$

还因为 $0<c\le1$，有 $c^{-\beta}\ge1$，故

$$
\boxed{
\operatorname{Area}(\Sigma_t)
=\int_{\Sigma_t}1\,d\mu_t
\le L_\beta(F_t)
\le L_\beta(F_0).}
\tag{1.19}
$$

## 2. HLS 正则性输入和 B 型定理的完整证明

### 2.1 抛物柱、加权密度与尺度

记

$$
P(X_0,t_0;r)
=B_r(X_0)\times(t_0-r^2,t_0].
\tag{2.1}
$$

在 $X$ 的正常坐标中取统一截断 $\phi_X$，定义

$$
\Psi_p(X,t;s)
=\int_{\Sigma_s}c^{-p}\phi_X(F)
\frac{e^{-|F-X|^2/[4(t-s)]}}{4\pi(t-s)}\,d\mu_s,
\qquad s<t.
\tag{2.2}
$$

以下两条只作为准确引用的 HLS 输入，不在本文重证其吹起反证和单调公式。

**HLS 延拓准则。** 若经典解定义于 $[0,T)$ 且

$$
\sup_{0\le t<T}\|A_t\|_{L^\infty}<\infty,
\tag{2.3}
$$

则存在 $\varepsilon>0$ 使解光滑延到 $[0,T+\varepsilon)$。

**HLS $\varepsilon$-正则性。** 固定合法 $p$ 和 $c\ge\delta>0$。存在

$$
\varepsilon_{\rm HLS}=\varepsilon_{\rm HLS}(p,\delta,M)>0,
\qquad C_{\rm HLS}<\infty,
\tag{2.4}
$$

使得只要外围柱 $P(X_0,t_0;8r)$ 位于已有经典流区域、正常坐标与截断合法，并且

$$
\Psi_p(X_0,t_0;t_0-r^2)<1+\varepsilon_{\rm HLS},
\tag{2.5}
$$

就有

$$
\boxed{
\sup_{P(X_0,t_0;r/2)}|A|
\le\frac{C_{\rm HLS}}r.}
\tag{2.6}
$$

HLS 原文 Corollary 4.2 的区域确为 $r/2$；把它读成 $2r$ 会反转尺度。

### 2.2 终端逐点低密度推出延拓

**命题 2.1。** 设最大经典 HLS 流定义于 $[0,T)$，$T<\infty$。令

$$
\delta_T=e^{-K_1T/\beta}\min_{\Sigma_0}c>0.
\tag{2.7}
$$

取统一截断半径 $R_{\rm cut}$，使 $2R_{\rm cut}<\operatorname{inj}(M)$。取

$$
p\ge p_0(\beta,\delta_T,M),
\qquad
8\rho_*<\min\{R_{\rm cut},\sqrt T\}.
\tag{2.8}
$$

假设对每个 $X\in M$ 存在 $r_X\in(0,\rho_*)$，满足

$$
\Psi_p(X,T;T-r_X^2)
<1+\varepsilon_{\rm HLS}(p,\delta_T,M).
\tag{2.9}
$$

则流延过 $T$。

**证明。**

1. 由 (1.17)，对所有 $t<T$ 有 $c(\cdot,t)\ge\delta_T$。

2. 因 $r_X<\rho_*$，
   $$
   8r_X<8\rho_*<R_{\rm cut},
   \qquad
   (8r_X)^2<64\rho_*^2<T.
   \tag{2.10}
   $$
   故
   $$
   T-(8r_X)^2>0,
   \tag{2.11}
   $$
   从而外围时间柱不越过初始时刻；空间球也留在统一正常坐标和截断范围内。

3. 对每个 $X$ 应用 (2.6)，得到
   $$
   |A(q,t)|\le\frac{C_{\rm HLS}}{r_X}
   \tag{2.12}
   $$
   只要
   $$
   F_t(q)\in B_{r_X/2}(X),
   \qquad T-r_X^2/4<t<T.
   \tag{2.13}
   $$

4. 球族 $\{B_{r_X/4}(X):X\in M\}$ 覆盖紧流形 $M$。取有限子覆盖
   $$
   M=\bigcup_{i=1}^N B_{r_i/4}(X_i).
   \tag{2.14}
   $$
   令
   $$
   \tau=\min_{1\le i\le N}\frac{r_i^2}{4}>0,
   \qquad
   C_T=\max_{1\le i\le N}\frac{C_{\rm HLS}}{r_i}<\infty.
   \tag{2.15}
   $$

5. 任取 $t\in(T-\tau,T)$ 和 $q\in\Sigma$。由 (2.14)，存在 $i$ 使
   $$
   F_t(q)\in B_{r_i/4}(X_i)\subset B_{r_i/2}(X_i).
   \tag{2.16}
   $$
   又 $t>T-\tau\ge T-r_i^2/4$，所以 (2.13) 成立，继而
   $$
   |A(q,t)|\le C_T.
   \tag{2.17}
   $$

6. 在紧时间段 $[0,T-\tau]$ 上，经典光滑性和 $\Sigma$ 紧致给出另一个有限上界。与 (2.17) 合并得 (2.3)，故 HLS 延拓准则把流延过 $T$。证毕。

### 2.3 不依赖未知终点的 B 型定理

对每个有限视界 $S>0$，定义

$$
r_S(t)=\min\left\{r_S,\frac{\sqrt t}{32}\right\}.
\tag{2.18}
$$

注意

$$
(8r_S(t))^2
\le64\frac{t}{32^2}
=\frac t{16}<t,
\tag{2.19}
$$

所以外围柱的最早时间严格大于 $0$。

**定理 2.2（B$_\beta$）。** 设 $F_t$ 的最大经典存在时间是 $T_{\max}$。假设对每个有限 $S>0$，存在

$$
\delta_S>0,
\quad p_S\ge p_0(\beta,\delta_S,M),
\quad0<r_S<r_{\rm H}/32,
\tag{2.20}
$$

使对所有 $0<t<\min\{S,T_{\max}\}$ 和 $x\in\Sigma$，

$$
c(x,t)\ge\delta_S,
\tag{2.21}
$$

$$
\Psi_{p_S}
\bigl(F_t(x),t;t-r_S(t)^2\bigr)
<1+\varepsilon_{\rm HLS}(p_S,\delta_S,M).
\tag{2.22}
$$

则 $T_{\max}=\infty$。

**证明。** 反设 $T_{\max}=T<\infty$，取 $S>T$。当 $T/2\le t<T$ 时，

$$
r_S(t)
\ge r_*:=\min\left\{r_S,\frac{\sqrt{T/2}}{32}\right\}>0.
\tag{2.23}
$$

在中心 $(F_t(x),t)$ 和尺度 $r_S(t)$ 应用 (2.6)。该中心本身属于
$P(F_t(x),t;r_S(t)/2)$，故

$$
|A(x,t)|
\le\frac{C_{\rm HLS}}{r_S(t)}
\le\frac{C_{\rm HLS}}{r_*}.
\tag{2.24}
$$

(2.19) 保证外围时间缓冲合法，而 $r_S<r_{\rm H}/32$ 保证空间缓冲合法。在 $[0,T/2]$ 上曲率由经典光滑性有界，于是

$$
\sup_{0\le t<T}\|A_t\|_\infty<\infty.
\tag{2.25}
$$

延拓准则与最大性矛盾。证毕。

## 3. 从曲率界到光滑预紧性的逐步证明

### 3.1 高阶 Bernstein 估计

**引理 3.1。** 假设在 $[t_0,\infty)$ 上

$$
c\ge\delta>0,
\qquad |A|\le K_0,
\tag{3.1}
$$

且环境有各阶有界几何。则对每个 $m\ge1$ 和 $\tau>0$，存在 $C_m<\infty$ 使

$$
\sup_{t\ge t_0+\tau}
\left(|\nabla^mA|+|\nabla^mf_\beta|\right)
\le C_m.
\tag{3.2}
$$

**证明。**

1. 在 $c\ge\delta$ 的 Grassmann 丛紧子集上，$f_\beta$ 对 $A$ 线性，可写成
   $$
   f_\beta=P(T\Sigma)A.
   \tag{3.3}
   $$
   $P$ 的系数是切平面的光滑函数。HLS 的主符号计算给出一致椭圆矩阵 $a^{ij}$，满足
   $$
   \lambda g^{ij}\xi_i\xi_j
   \le a^{ij}\xi_i\xi_j
   \le\Lambda g^{ij}\xi_i\xi_j,
   \tag{3.4}
   $$
   其中可取一个只依赖 $(\beta,\delta)$ 的 $\lambda>0$。

2. 法向速度的一般变分公式给
   $$
   D_t^\perp A=(\nabla^\perp)^2f_\beta
   +A*A*f_\beta+\bar R*f_\beta,
   \tag{3.5}
   $$
   其中星号表示由度量作有限次缩并。把 (3.3) 代入并交换协变导数，主项为 $a^{ij}\nabla_i\nabla_jA$，其余项仅含 $A$、环境曲率和低阶导数。

3. 对 $m$ 次协变导数重复交换，得到
   $$
   \begin{aligned}
   &(\partial_t-a^{ij}\nabla_i\nabla_j)|\nabla^mA|^2\\
   &\qquad\le-\lambda|\nabla^{m+1}A|^2
   +C_m(1+|\nabla^mA|^2)
   +C_m\!\sum_{\substack{i_1+\cdots+i_q\le m\\i_j<m}}
   \prod_{j=1}^q|\nabla^{i_j}A|^2.
   \end{aligned}
   \tag{3.6}
   $$
   负项来自
   $$
   -2a^{ij}\langle\nabla_i\nabla^mA,
   \nabla_j\nabla^mA\rangle
   \le-2\lambda|\nabla^{m+1}A|^2,
   \tag{3.7}
   $$
   其余交换项用 Young 不等式吸收一半负项后得到 (3.6)。

4. $m=0$ 已由假设控制。假设 $0,\ldots,m-1$ 阶已控制，(3.6) 的最后一项便有统一上界。对滑动时间区间 $[s,s+\tau]$ 使用
   $$
   Q_m=(t-s)^m|\nabla^mA|^2
   +\sum_{j=0}^{m-1}C_{m,j}(t-s)^j|\nabla^jA|^2
   \tag{3.8}
   $$
   并递归选择 $C_{m,j}$，最大值原理给
   $$
   \sup_{t\in[s+\tau/2,s+\tau]}|\nabla^mA|^2\le C_m.
   \tag{3.9}
   $$
   常数不依赖 $s$，故可覆盖所有 $t\ge t_0+\tau$。

5. 最后对 (3.3) 求 $m$ 次导数。$\nabla^jP$ 是 $A,\ldots,\nabla^{j-1}A$ 的光滑组合，因此已得界给出 $|\nabla^mf_\beta|\le C_m$。证毕。

### 3.2 时空 $L^2$ 曲率升级到点态曲率

**引理 3.2。** 假设对 $t\ge t_0$ 有 $c\ge\delta>0$，

$$
\operatorname{Area}(\Sigma_t)\le A_0,
\qquad
|A|+|\nabla A|+|\nabla^2f_\beta|\le K,
\tag{3.10}
$$

并且存在 $v_0,r_0>0$ 使

$$
\operatorname{Area}_{g_t}B_{g_t}(p,r)\ge v_0r^2
\quad(0<r\le r_0).
\tag{3.11}
$$

若

$$
\int_{t_0}^\infty\int_{\Sigma_t}|A|^2\,d\mu_tdt<\infty,
\tag{3.12}
$$

则

$$
\int_{\Sigma_t}|A|^2d\mu_t\to0,
\qquad
\|A_t\|_\infty\to0.
\tag{3.13}
$$

**证明。** 令 $E(t)=\int_{\Sigma_t}|A|^2d\mu_t$。法向速度下

$$
\partial_td\mu_t=-\langle H,f_\beta\rangle d\mu_t.
\tag{3.14}
$$

由 (3.5)，

$$
\begin{aligned}
E'(t)
&=2\int\langle D_t^\perp A,A\rangle d\mu_t
-\int|A|^2\langle H,f_\beta\rangle d\mu_t\\
&=2\int\langle(\nabla^\perp)^2f_\beta,A\rangle d\mu_t\\
&\quad+\int A*A*A*f_\beta\,d\mu_t
+\int\bar R*A*f_\beta\,d\mu_t
-\int|A|^2\langle H,f_\beta\rangle d\mu_t.
\end{aligned}
\tag{3.15}
$$

由 $|H|\le\sqrt2|A|$ 及 $|\nabla c|\le2|A|$，在 $s>0$ 处有 $s|V|=|\nabla c|$，故 $s^2|V|\le2|A|$；该乘积估计在 $s=0$ 处由连续性延拓。因此 $c\ge\delta$ 和 (1.3) 给

$$
|f_\beta|
\le\delta^{-2}(\sqrt2+2\beta)|A|.
\tag{3.15a}
$$

结合 (3.10)、环境紧性和面积上界，(3.15) 给

$$
|E'(t)|\le C_E.
\tag{3.16}
$$

若 $E(t_j)\ge\varepsilon>0$ 且 $t_j\to\infty$，当 $C_E>0$ 时由 Lipschitz 性，

$$
E(t)\ge\varepsilon/2
\quad\text{只要}\quad
|t-t_j|\le\varepsilon/(2C_E).
\tag{3.17}
$$

取相互不交的子列区间，(3.17) 会使 $\int_{t_0}^\infty E(t)dt=\infty$，与 (3.12) 矛盾。若 $C_E=0$，$E$ 为常数而可积，也只能为零。因此 $E(t)\to0$。

再反设存在 $p_j,t_j$ 使 $|A|(p_j,t_j)\ge\varepsilon$。若 $K>0$，令

$$
r_*=\min\left\{r_0,\frac{\varepsilon}{2K}\right\};
\tag{3.18}
$$

若 $K=0$，取 $r_*=r_0$。沿从 $p_j$ 出发的长度不超过 $r_*$ 的最短测地线，

$$
\bigl||A|(q,t_j)-|A|(p_j,t_j)\bigr|
\le Kd_{g_{t_j}}(p_j,q)le\varepsilon/2.
\tag{3.19}
$$

故球上 $|A|\ge\varepsilon/2$，由 (3.11)，

$$
E(t_j)
\ge\int_{B(p_j,r_*)}|A|^2d\mu_{t_j}
\ge\frac{\varepsilon^2}{4}v_0r_*^2>0,
\tag{3.20}
$$

与 $E(t_j)\to0$ 矛盾。证毕。

### 3.3 正常切片、Łojasiewicz--Simon 不等式与唯一极限

令 $F_\infty$ 是一个 $\beta$-临界浸入。把邻近浸入写成正常图

$$
F_u(x)=\exp_{F_\infty(x)}u(x),
\qquad u\in\Gamma(NF_\infty),
\tag{3.21}
$$

并用微分同胚消去切向重参数方向。若环境和 $L_\beta$ 实解析，则

$$
\mathcal E(u)=L_\beta(F_u)
\tag{3.22}
$$

是正常切片上的解析泛函。其 Hessian 的主部是由 HLS 主符号给出的二阶一致椭圆算子；在紧 $\Sigma$ 上，它作为

$$
L:C^{2,\alpha}(NF_\infty)\longrightarrow C^{0,\alpha}(NF_\infty)
\tag{3.23}
$$

是 Fredholm。抽象 Łojasiewicz--Simon 定理于是给出邻域 $\mathcal U$、$\theta\in(0,1/2]$ 和 $C_L$，使

$$
|L_\beta(F)-L_\beta(F_\infty)|^{1-\theta}
\le C_L\|f_\beta(F)\|_W.
\tag{3.24}
$$

**引理 3.3。** 假设流模去重参数后光滑预紧，有子列光滑趋于 $F_\infty$，并且在正常图规范 $\widetilde F_t=F_t\circ\varphi_t$ 中

$$
\|\partial_t\widetilde F_t\|_{L^2}
\le C_G\|f_\beta(F_t)\|_W.
\tag{3.25}
$$

若 (3.24) 成立，则整条规范流光滑收敛到 $F_\infty$。

**证明。** 子列收敛和能量单调性给

$$
e(t):=L_\beta(F_t)-L_\beta(F_\infty)\downarrow0.
\tag{3.26}
$$

在 $\mathcal U$ 内，(1.11) 给 $e'=-\|f_\beta\|_W^2$。于是

$$
\begin{aligned}
-\frac d{dt}e(t)^\theta
&=\theta e^{\theta-1}\|f_\beta\|_W^2\\
&=\theta\frac{\|f_\beta\|_W^2}{e^{1-\theta}}\\
&\ge\frac{\theta}{C_L}\|f_\beta\|_W,
\end{aligned}
\tag{3.27}
$$

其中最后一步正是 (3.24)。积分得

$$
\int_{t_1}^{t_2}\|f_\beta\|_Wdt
\le\frac{C_L}{\theta}
\left(e(t_1)^\theta-e(t_2)^\theta\right)
\le\frac{C_L}{\theta}e(t_1)^\theta.
\tag{3.28}
$$

结合 (3.25)，

$$
\|\widetilde F_{t_2}-\widetilde F_{t_1}\|_{L^2}
\le\frac{C_GC_L}{\theta}e(t_1)^\theta.
\tag{3.29}
$$

从收敛子列取 $t_j$，使 $\widetilde F_{t_j}$ 位于 $\mathcal U$ 的半径一半处，并使右侧任意小。高阶一致界与 Gagliardo--Nirenberg 插值给某 $\sigma\in(0,1)$：

$$
\|\widetilde F_t-\widetilde F_{t_j}\|_{C^{2,\alpha}}
\le C
\|\widetilde F_t-\widetilde F_{t_j}\|_{L^2}^{\sigma}.
\tag{3.30}
$$

若存在首次离开 $\mathcal U$ 的时刻，(3.29)--(3.30) 表明到该时刻的 $C^{2,\alpha}$ 位移仍小于到边界的距离，矛盾。因此轨道永远留在 $\mathcal U$。令 $t_2\to\infty$，(3.29) 表明轨道在 $L^2$ 中 Cauchy；再由 (3.30) 及其高阶版本得到每个 $C^k$ 中 Cauchy，极限因子列唯一性只能是 $F_\infty$。证毕。

## 4. C 型定理：完整条件和无跳步证明

设 $\Omega_+,\Omega_-$ 是两张平行、comass 为 $1$ 的二形式，

$$
\eta_\pm=*F_t^*\Omega_\pm.
\tag{4.1}
$$

**定理 4.1（C$_\beta$）。** 假设：

1. **双角不变量区。** 初始 $\eta_\pm\ge1-\varepsilon_0$，并在该区域内
   $$
   \mathscr P_\pm\eta_\pm\ge0,
   \qquad
   \mathscr P_\pm
   =\partial_t-a_\pm^{ij}\nabla_i\nabla_j-X_\pm^i\nabla_i,
   \tag{4.2}
   $$
   其中
   $$
   \lambda g^{ij}\le a_\pm^{ij}\le\Lambda g^{ij},
   \qquad |X_\pm|\le B.
   \tag{4.3}
   $$

2. **统一 HLS 正则性。** 存在固定 $\delta,p,r>0$，令
   $$
   \widehat r(t)=\min\{r,\sqrt t/32\},
   \tag{4.4}
   $$
   对所有已有时刻和中心均有 $c\ge\delta$ 及
   $$
   \Psi_p(F_t(x),t;t-\widehat r(t)^2)
   <1+\varepsilon_{\rm HLS}(p,\delta,M).
   \tag{4.5}
   $$

3. **曲率--梯度强制性。** 存在 $C_D,t_1$ 使
   $$
   \int_{\Sigma_t}|A|^2d\mu_t
   \le C_D\|f_\beta(F_t)\|_{W,t}^2
   \quad(t\ge t_1).
   \tag{4.6}
   $$

4. **局部非坍缩。** 存在 $v_0,r_0>0$ 使
   $$
   \operatorname{Area}_{g_t}B_{g_t}(p,\rho)
   \ge v_0\rho^2
   \quad(t\ge t_1,\ 0<\rho\le r_0).
   \tag{4.7}
   $$

5. **解析正常切片。** 环境与泛函在 $c>0$ 区域实解析，正常 Hessian 是 Fredholm，且规范速度满足 (3.25)。

则流全时间存在，并在重参数后光滑收敛到一个全测地 $\beta$-临界浸入。

**证明。**

**第一步：保持双角区域。** 对 $w_\pm=\eta_\pm-(1-\varepsilon_0)$，有 $\mathscr P_\pm w_\pm\ge0$ 且 $w_\pm(0)\ge0$。若出现负值，弱最大值原理在首次负最小值给矛盾。因此

$$
\eta_\pm(\cdot,t)\ge1-\varepsilon_0.
\tag{4.8}
$$

**第二步：全时间存在和高阶控制。** (4.4)--(4.5) 正是定理 2.2 的统一版本，故 $T_{\max}=\infty$。当

$$
t\ge t_*=32^2r^2,
\tag{4.9}
$$

有 $\widehat r(t)=r$，从 (2.6) 得

$$
\sup_{t\ge t_*}|A_t|\le C_{\rm HLS}/r.
\tag{4.10}
$$

较早紧时间段亦有界，故全时间曲率一致有界。引理 3.1 给正时间后全部高阶界；(1.19) 给统一面积上界。

**第三步：时空 $L^2$ 曲率有限。** 对 (4.6) 积分并用 (1.11)：

$$
\begin{aligned}
\int_{t_1}^T\!\int_{\Sigma_t}|A|^2d\mu_tdt
&\le C_D\int_{t_1}^T\|f_\beta\|_W^2dt\\
&=C_D\bigl(L_\beta(F_{t_1})-L_\beta(F_T)\bigr)\\
&\le C_D L_\beta(F_{t_1}).
\end{aligned}
\tag{4.11}
$$

令 $T\to\infty$ 得

$$
\int_{t_1}^\infty\int|A|^2<\infty.
\tag{4.12}
$$

高阶界给引理 3.2 所需的 $|\nabla A|+|\nabla^2f_\beta|$ 界，(4.7) 给非坍缩，故

$$
\boxed{\|A_t\|_\infty\to0.}
\tag{4.13}
$$

**第四步：构造光滑子列极限。** 固定小 $\rho<r_0/8$。取极大互不相交的内蕴 $\rho$-球。每个球由 (4.7) 至少有面积 $v_0\rho^2$，而总面积由 (1.19) 不超过 $L_\beta(F_0)$，所以球数不超过

$$
N_0\le\frac{L_\beta(F_0)}{v_0\rho^2}.
\tag{4.14}
$$

放大两倍的球覆盖 $\Sigma_t$。曲率与高阶界把每个浸入片写成统一大小、统一 $C^m$ 界的欧氏图。有限图片、环境紧性和对角子列法给 $t_j\to\infty$、微分同胚 $\varphi_j$ 以及光滑极限

$$
F_{t_j}\circ\varphi_j\to F_\infty.
\tag{4.15}
$$

**第五步：极限全测地且临界。** 由 (4.13)--(4.15)，

$$
A_\infty\equiv0,
\qquad H_\infty\equiv0.
\tag{4.16}
$$

因为 $\bar\nabla\omega=0$，在一点取 $\nabla e_i=0$ 后

$$
e_k(c)
=\omega(A(e_k,e_1),e_2)
+\omega(e_1,A(e_k,e_2)),
\tag{4.17}
$$

故 $|\nabla c|\le2|A|$。在极限上 $c$ 为常数，因而 $\alpha$ 为常数，$V_\infty=0$。代入 (1.3)，

$$
f_\beta(F_\infty)=0.
\tag{4.18}
$$

**第六步：从子列到整轨道。** 在 $F_\infty$ 的解析正常切片中使用 (3.24)，规范速度由假设 5 控制。引理 3.3 给出整条规范轨道光滑收敛。证毕。

---

## 5. 哪些环境流形具有 D 型产品结构

### 5.1 任意有向曲面乘积上的两张平行校准

令 $(B^2,g_B)$、$(N^2,g_N)$ 是紧致连通有向 Riemann 曲面，体积形式分别为 $\omega_B,\omega_N$。在

$$
M=B\times N,
\qquad \bar g=g_B\oplus g_N
\tag{5.1}
$$

上定义

$$
\omega_+=\pi_B^*\omega_B+\pi_N^*\omega_N,
\qquad
\omega_-=\pi_B^*\omega_B-\pi_N^*\omega_N.
\tag{5.2}
$$

二维有向度量的旋转 $90^\circ$ 复结构记为 $J_B,J_N$。因为 Levi--Civita 联络保持度量和定向，

$$
\nabla^B J_B=0,
\qquad
\nabla^N J_N=0.
\tag{5.3}
$$

所以

$$
J_+=(J_B,J_N),
\qquad
J_-=(J_B,-J_N)
\tag{5.4}
$$

都是平行复结构，其 Kähler 形式就是 $\omega_\pm$。两者诱导相反的四维定向。对任意有向正交二平面 $P$，Wirtinger 不等式给

$$
|\omega_\pm|_P|\le1,
\tag{5.5}
$$

故 $\omega_\pm$ 均为 comass $1$ 的平行校准。可见双角代数并不要求两因子等曲率，也不要求 Einstein。

### 5.2 Wang 原始正 Einstein 框架的刚性分类

**命题 5.1。** 设 $(M^4,g)$ 是紧致连通有向正 Einstein 流形，

$$
\operatorname{Ric}_M=\lambda g,
\qquad \lambda>0,
\tag{5.6}
$$

并有两个平行正交复结构 $J_+,J_-$，其 Kähler 形式诱导相反定向。则

$$
\boxed{(M,g)\cong S^2_{\lambda}\times S^2_{\lambda}}
\tag{5.7}
$$

等距成立；这里每个因子的 Gaussian 曲率为 $\lambda$。特别地，在这些完整原始假设下不存在新的紧致 $M$。

**证明。**

1. 在有向四维欧氏空间中，$\mathfrak{so}(4)=\mathfrak{so}(3)_+\oplus\mathfrak{so}(3)_-$；自对偶二形式对应第一直和项，反自对偶二形式对应第二直和项，两项彼此对易。因此方向相反的 $J_+,J_-$ 满足
   $$
   J_+J_-=J_-J_+.
   \tag{5.8}
   $$

2. 定义
   $$
   P=-J_+J_-.
   \tag{5.9}
   $$
   由 (5.8) 和 $J_\pm^2=-I$，
   $$
   P^2=J_+J_-J_+J_-=J_+^2J_-^2=I.
   \tag{5.10}
   $$
   $P$ 还是正交对称算子。相反定向排除 $J_-=\pm J_+$，故 $P$ 的 $+1$ 与 $-1$ 特征空间各为二维。

3. 因 $J_\pm$ 平行，$P$ 平行。令
   $$
   E_1=\ker(P-I),
   \qquad E_2=\ker(P+I).
   \tag{5.11}
   $$
   则 $TM=E_1\oplus E_2$ 是正交平行分裂。对 $X,Y\in\Gamma(E_i)$，$\nabla_XY\in E_i$，故两分布可积且叶片全测地。

4. 在完备单连通覆盖 $(\widetilde M,\widetilde g)$ 上，de Rham 分裂定理给
   $$
   (\widetilde M,\widetilde g)
   =(B_1^2,g_1)\times(B_2^2,g_2).
   \tag{5.12}
   $$

5. 产品 Ricci 张量为
   $$
   \operatorname{Ric}_{\widetilde M}
   =K_1g_1\oplus K_2g_2.
   \tag{5.13}
   $$
   与 $\operatorname{Ric}=\lambda g$ 比较得到
   $$
   K_1\equiv K_2\equiv\lambda.
   \tag{5.14}
   $$
   完备单连通正定曲率二维空间形唯一是 $S^2_\lambda$，故
   $$
   \widetilde M=S^2_\lambda\times S^2_\lambda.
   \tag{5.15}
   $$

6. 还需排除有限商。任一 deck 变换保持从 $M$ 拉回的 $J_+,J_-$，因而保持 $P$ 及 $E_1,E_2$，可写成
   $$
   \gamma=(\gamma_1,\gamma_2),
   \qquad \gamma_i\in\operatorname{Isom}^+(S^2_\lambda).
   \tag{5.16}
   $$
   每个保向圆球等距都是 $SO(3)$ 旋转并有不动点 $x_i$。于是 $(x_1,x_2)$ 是 $\gamma$ 的不动点。非平凡 deck 变换不可能有不动点，故 deck 群平凡，得到 (5.7)。证毕。

### 5.3 放宽 Einstein 条件后出现的环境

一旦不要求 (5.6)，以下环境都具有 (5.2) 的双校准结构：

- 不同半径的 $S^2_{K_1}\times S^2_{K_2}$；
- 正曲率二球与平坦环面的乘积 $B^2\times T^2$；
- 正曲率二球与负曲率曲面的乘积 $B^2\times\Sigma_g$；
- 任意两个紧有向曲面的产品，乃至保持两平行分布的适当局部产品。

但是“双校准存在”只提供 $|\eta_\pm|\le1$ 和图投影的代数解释；D 的收敛还需要下一节的曲率反应与 HLS 余项控制。

## 6. 双角方程：从一般变分到可检验的曲率条件

### 6.1 平行二形式沿任意法向流的第一变分

设 $\Omega$ 是平行二形式，

$$
\eta=*F^*\Omega=\Omega(e_1,e_2),
\tag{6.1}
$$

且 $\partial_tF=f$ 为法向速度。用局部坐标 $\partial_iF$ 计算

$$
\partial_t(F^*\Omega)(\partial_1,\partial_2)
=\Omega(\bar\nabla_{\partial_1}f,\partial_2F)
+\Omega(\partial_1F,\bar\nabla_{\partial_2}f).
\tag{6.2}
$$

另一方面

$$
F^*\Omega=\eta\,d\mu,
\qquad
\partial_td\mu=-\langle H,f\rangle d\mu,
\tag{6.3}
$$

所以在 $e_1,e_2$ 正交归一处

$$
\partial_t(F^*\Omega)
=(\partial_t\eta-\eta\langle H,f\rangle)d\mu.
\tag{6.4}
$$

把 $\bar\nabla_{e_i}f$ 分解成法向与切向部分：

$$
\bar\nabla_{e_i}f
=\nabla_{e_i}^\perp f
-\sum_j\langle f,A(e_i,e_j)\rangle e_j.
\tag{6.5}
$$

(6.2) 中两个切向项之和恰为

$$
-\eta\langle f,A(e_1,e_1)+A(e_2,e_2)\rangle
=-\eta\langle f,H\rangle,
\tag{6.6}
$$

与 (6.4) 的面积项抵消，得到精确公式

$$
\boxed{
\partial_t\eta
=\Omega(\nabla_{e_1}^\perp f,e_2)
-\Omega(\nabla_{e_2}^\perp f,e_1).}
\tag{6.7}
$$

定义一阶算子

$$
\mathcal D_\Omega Z
=\Omega(\nabla_{e_1}^\perp Z,e_2)
-\Omega(\nabla_{e_2}^\perp Z,e_1).
\tag{6.8}
$$

于是 $\partial_t\eta=\mathcal D_\Omega f$。

### 6.2 普通 MCF 的双角方程

取 $f=H$。对 (6.1) 求两次空间导数，使用 $\bar\nabla\Omega=0$、Codazzi 方程并配方，得到 Wang 的公式

$$
(\partial_t-\Delta)\eta
=\eta Q+(1-\eta^2)\operatorname{Ric}_M(Je_1,e_2),
\tag{6.9}
$$

其中 $J$ 是 $\Omega$ 对应的正交复结构，$Q$ 是平方和。

对 $\omega_\pm$，可取

$$
Q_+=\sum_{k=1}^2
\left[(h^3_{1k}-h^4_{2k})^2
+(h^3_{2k}+h^4_{1k})^2\right]\ge0,
\tag{6.10}
$$

$$
Q_-=\sum_{k=1}^2
\left[(h^4_{1k}-h^3_{2k})^2
+(h^4_{2k}+h^3_{1k})^2\right]\ge0.
\tag{6.11}
$$

记

$$
a=*F^*\omega_B,
\qquad b=*F^*\omega_N,
\qquad
\eta_+=a+b,
\qquad \eta_-=a-b.
\tag{6.12}
$$

设 $K_B,K_N$ 是两因子的 Gaussian 曲率。在产品上

$$
\operatorname{Ric}_M
=K_Bg_B\oplus K_Ng_N.
\tag{6.13}
$$

因而

$$
\begin{aligned}
\operatorname{Ric}_M(J_+e_1,e_2)
&=K_Ba+K_Nb\\
&=\frac{K_B+K_N}{2}\eta_+
+\frac{K_B-K_N}{2}\eta_-,
\end{aligned}
\tag{6.14}
$$

以及

$$
\begin{aligned}
\operatorname{Ric}_M(J_-e_1,e_2)
&=K_Ba-K_Nb\\
&=\frac{K_B-K_N}{2}\eta_+
+\frac{K_B+K_N}{2}\eta_-.
\end{aligned}
\tag{6.15}
$$

代入 (6.9)：

$$
\boxed{
\begin{aligned}
(\partial_t-\Delta)\eta_+
&=\eta_+Q_+
+(1-\eta_+^2)(A_K\eta_++B_K\eta_-),\\
(\partial_t-\Delta)\eta_-
&=\eta_-Q_-
+(1-\eta_-^2)(B_K\eta_++A_K\eta_-),
\end{aligned}}
\tag{6.16}
$$

其中

$$
A_K=\frac{K_B+K_N}{2},
\qquad
B_K=\frac{K_B-K_N}{2}.
\tag{6.17}
$$

若沿整个产品有

$$
A_K\ge\kappa>0,
\qquad B_K\ge0,
\tag{6.18}
$$

且 $\eta_\pm\ge0$，则从 (6.16) 逐项丢掉非负量得到

$$
(\partial_t-\Delta)\eta_\pm
\ge\kappa\eta_\pm(1-\eta_\pm^2).
\tag{6.19}
$$

(6.18) 等价于开头的曲率条件

$$
K_B(x)+K_N(y)\ge2\kappa,
\qquad K_B(x)\ge K_N(y)
\quad\forall(x,y)\in B\times N.
\tag{6.20}
$$

在常曲率情形，它包含 Wang 图流文献中的

$$
K_B\ge|K_N|,
\qquad K_B+K_N>0.
\tag{6.21}
$$

### 6.3 HLS 流中出现的精确余项

由 (1.6)、(6.7) 的线性性，

$$
\partial_t\eta_\pm
=\mathcal D_{\omega_\pm}H
-\mathcal D_{\omega_\pm}
\bigl(b_\beta(H+V)\bigr).
\tag{6.22}
$$

第一项正是 (6.16) 的右端。令 $W=H+V$，则乘积法则给

$$
\begin{aligned}
\mathcal R_\pm
&:=-\mathcal D_{\omega_\pm}(b_\beta W)\\
&=-b_\beta\mathcal D_{\omega_\pm}W
-(e_1b_\beta)\omega_\pm(W,e_2)
+(e_2b_\beta)\omega_\pm(W,e_1).
\end{aligned}
\tag{6.23}
$$

因此真正的 HLS 双角方程是

$$
\boxed{
\begin{aligned}
(\partial_t-\Delta)\eta_+
&=\eta_+Q_+
+(1-\eta_+^2)(A_K\eta_++B_K\eta_-)
+\mathcal R_+,\\
(\partial_t-\Delta)\eta_-
&=\eta_-Q_-
+(1-\eta_-^2)(B_K\eta_++A_K\eta_-)
+\mathcal R_-.
\end{aligned}}
\tag{6.24}
$$

$W$ 对 $A$ 为一阶量，而 $\mathcal D W$ 含 $\nabla A$；它与 $\Delta\eta$ 同属最高阶，且没有固定符号。这就是不能把 Wang 的 MCF 最大值原理直接移植到 $\beta>0$ 的确切位置。

### 6.4 三个足以恢复 D1 的可检验机制

以下任一机制都能把 (6.24) 变成 D 所需的 logistic 不等式。

1. **余项吸收条件。** 若 (6.18) 成立且
   $$
   \mathcal R_\pm\ge-\eta_\pm Q_\pm,
   \tag{6.25}
   $$
   则直接由 (6.24) 得 (6.19)。更一般地，只要存在 $\kappa_0>0$ 使
   $$
   \mathcal R_+
   \ge-\eta_+Q_+
   -(A_K\eta_++B_K\eta_--\kappa_0\eta_+)(1-\eta_+^2),
   \tag{6.26}
   $$
   且对负号有对应不等式，就得到系数 $\kappa_0$ 的 logistic 下界。

2. **精确 MCF 轨道。** 若沿流 $H+V=0$，则由 (1.6) 有 $f_\beta=H$，所以 $\mathcal R_\pm=0$，完全回到 MCF。

3. **空间常数时间缩放。** 若
   $$
   f_\beta=a(t)H,
   \qquad a(t)\ge a_0>0,
   \tag{6.27}
   $$
   则任意几何量的一阶变分对速度线性，故
   $$
   (\partial_t-a(t)\Delta)\eta_\pm
   \ge a(t)\kappa\eta_\pm(1-\eta_\pm^2)
   \ge a_0\kappa\eta_\pm(1-\eta_\pm^2).
   \tag{6.28}
   $$
   每个时间片 Kähler 角空间常数是产生 (6.27) 的一个充分条件，详见第 10 节。

结论是：满足 (6.20) 的环境给出正确的**曲率反应**，但对于 $\beta>0$，还必须逐流验证 (6.25)、(6.26) 或 (6.27)。不存在“只改变 $M$ 就自动消失的”一般性论证。

## 7. 推广后的 D 定理：一层图与有限覆盖同时处理

### 7.1 完整命题

**定理 7.1（产品流形上的抽象 D$_\beta$）。** 设 $M=B^2\times N^2$ 如 (5.1)，$\Sigma$ 紧致连通。令

$$
\eta_\pm=*F_t^*\omega_\pm.
\tag{7.1}
$$

假设初值满足

$$
\eta_+(\cdot,0)>0,
\qquad
\eta_-(\cdot,0)\ge0,
\qquad
\eta_-(\cdot,0)\not\equiv0.
\tag{7.2}
$$

再假设：

1. 在全部经典存在区间有一致椭圆算子
   $$
   \mathscr P_\pm
   =\partial_t-a_\pm^{ij}\nabla_i\nabla_j-X_\pm^i\nabla_i
   \tag{7.3}
   $$
   和 $\kappa>0$，满足
   $$
   \mathscr P_\pm\eta_\pm
   \ge\kappa\eta_\pm(1-\eta_\pm^2).
   \tag{7.4}
   $$

2. 第 4 节条件 2 的统一 HLS 正则性成立。

则流全时间存在。对每个 $t>0$，

$$
h_t:=\pi_B\circ F_t:\Sigma\to B
\tag{7.5}

$$
是一个有限覆盖，其覆盖度 $d$ 与 $t$ 无关。固定任意 $t_0>0$ 后，可取一族微分同胚 $\varphi_t$ 使

$$
F_t\circ\varphi_t=(p,u_t),
\qquad
p:\Sigma\to B
\tag{7.6}
$$

为固定 $d$ 层覆盖。存在 $q\in N$ 使

$$
F_t\circ\varphi_t\longrightarrow(p,q)
\quad\text{在 }C^\infty\text{ 中成立。}
\tag{7.7}
$$

因而：

- 若 $d=1$，则 $F_t(\Sigma)$ 是 $u_t:B\to N$ 的一层图，并收敛到 $B\times\{q\}$；
- 若 $B$ 单连通，则自动 $d=1$；
- 若 $d>1$，极限是水平切片的 $d$ 重参数覆盖，作为整数 varifold 的极限为 $d|B\times\{q\}|$，不能写成一层图结论。

### 7.2 证明：正性和 covering

由于 $|\eta_\pm|\le1$，反应系数 $\kappa(1-\eta_\pm^2)$ 有界。把负角方程写成

$$
\mathscr P_-\eta_-
-\kappa(1-\eta_-^2)\eta_-
\ge0.
\tag{7.8}
$$

弱最大值原理保持 $\eta_-\ge0$，强最大值原理和“非恒零”给

$$
\eta_-(x,t)>0
\quad(t>0).
\tag{7.9}
$$

同理，由紧致性 $\min\eta_+(0)>0$，得到

$$
\eta_+(x,t)>0.
\tag{7.10}
$$

从 (6.12)，第一投影的有向 Jacobian 是

$$
a=*F_t^*\omega_B
=\frac{\eta_++\eta_-}{2}>0.
\tag{7.11}
$$

所以 $dh_t$ 处处可逆，$h_t$ 是局部微分同胚。$\Sigma$ 紧致使 $h_t$ proper；proper 局部微分同胚是 covering。$\Sigma$、$B$ 连通，覆盖层数是一个正整数。它在连续同伦 $h_t$ 中不变，故记为 $d$。

固定 $t_0>0$ 并令 $p=h_{t_0}$。因为 $dh_t$ 可逆，可解时变向量场

$$
dh_t(Y_t)=-\partial_th_t.
\tag{7.12}
$$

令 $\varphi_t$ 是 $Y_t$ 的流，$\varphi_{t_0}=\operatorname{id}$。则

$$
\frac d{dt}(h_t\circ\varphi_t)
=\partial_th_t\circ\varphi_t
+dh_t(Y_t)\circ\varphi_t=0.
\tag{7.13}
$$

故 $h_t\circ\varphi_t=p$，并可定义 $u_t=\pi_N\circ F_t\circ\varphi_t$，得到 (7.6)。

### 7.3 证明：logistic 屏障的显式解

取固定 $t_0>0$，令

$$
m_\pm=\min_\Sigma\eta_\pm(\cdot,t_0)>0.
\tag{7.14}
$$

解常微分方程

$$
\ell_\pm'=\kappa\ell_\pm(1-\ell_\pm^2),
\qquad \ell_\pm(t_0)=m_\pm.
\tag{7.15}
$$

令 $y=\ell^{-2}$，则

$$
y'=-2\ell^{-3}\ell'
=-2\kappa(\ell^{-2}-1)
=-2\kappa(y-1).
\tag{7.16}
$$

所以

$$
y(t)-1=(m_\pm^{-2}-1)e^{-2\kappa(t-t_0)},
\tag{7.17}
$$

即

$$
\ell_\pm(t)
=\left[1+(m_\pm^{-2}-1)e^{-2\kappa(t-t_0)}\right]^{-1/2}.
\tag{7.18}
$$

空间常函数 $\ell_\pm$ 满足 $\mathscr P_\pm\ell_\pm=\ell_\pm'$。比较原理给

$$
\eta_\pm(x,t)\ge\ell_\pm(t).
\tag{7.19}
$$

又 $\eta_\pm\le1$，故

$$
0\le1-\eta_\pm
\le1-\ell_\pm
\le1-\ell_\pm^2
\le C_0e^{-2\kappa(t-t_0)}.
\tag{7.20}
$$

### 7.4 证明：斜率、曲率和真实图速度衰减

以 $p^*g_B$ 为 $\Sigma$ 上固定基底度量，令 $\lambda_1,\lambda_2\ge0$ 是 $du_t$ 的奇异值，$J_{u_t}$ 是有向 Jacobian。取奇异向量 $a_i$，则图切向正交基为

$$
e_i=\frac{(a_i,du_t(a_i))}{\sqrt{1+\lambda_i^2}}.
\tag{7.21}
$$

令

$$
D_u=\sqrt{(1+\lambda_1^2)(1+\lambda_2^2)}.
\tag{7.22}
$$

直接代入两因子体积形式：

$$
a=*\omega_B=\frac1{D_u},
\qquad
b=*\omega_N=\frac{J_{u_t}}{D_u},
\tag{7.23}
$$

$$
\boxed{
\eta_\pm=\frac{1\pm J_{u_t}}{D_u}.}
\tag{7.24}
$$

由 (7.20)，

$$
1-a
=1-\frac{\eta_++\eta_-}{2}
\le C e^{-2\kappa t}.
\tag{7.25}
$$

当 $t$ 大时 $a\ge1/2$，于是

$$
D_u^2-1=a^{-2}-1
=\frac{(1-a)(1+a)}{a^2}
\le C(1-a)
\le Ce^{-2\kappa t}.
\tag{7.26}
$$

另一方面

$$
D_u^2-1
=\lambda_1^2+\lambda_2^2+\lambda_1^2\lambda_2^2,
\tag{7.27}
$$

故

$$
\boxed{\|du_t\|_{C^0}\le Ce^{-\kappa t}.}
\tag{7.28}
$$

统一 HLS 正则性先由定理 2.2 给全时间存在，再由固定正尺度的 (2.6) 给 $|A|$ 一致界；引理 3.1 给全部高阶界。在固定 covering 图规范中，这些界给 $u_t$ 的统一 $C^m$ 界。对张量 $du_t$ 用插值不等式

$$
\|\nabla du_t\|_{C^0}
\le C\|du_t\|_{C^0}^{1/2}
\left(\|\nabla^2du_t\|_{C^0}+\|du_t\|_{C^0}\right)^{1/2},
\tag{7.29}
$$

结合 (7.28) 得

$$
\|\nabla^2u_t\|_{C^0}\le Ce^{-\kappa t/2}.
\tag{7.30}
$$

产品中水平切片全测地，图的第二基本形满足

$$
|A_t|
\le C\bigl(|\nabla^2u_t|+|du_t|^2\bigr),
\tag{7.31}
$$

所以

$$
\|A_t\|_{C^0}\le Ce^{-\kappa t/2}.
\tag{7.32}
$$

由 $|H|\le\sqrt2|A|$、$s^2|V|\le2|A|$ 以及 $D\ge c^2\ge\delta^2$，(1.3) 给出安全的端点无奇性估计

$$
|f_\beta|
\le\delta^{-2}(\sqrt2+2\beta)|A|.
\tag{7.33}
$$

为保持第一分量等于 $p$，加入切向场 $Y_t$。由 (7.12)，固定图规范中的垂直速度为

$$
\partial_tu_t
=d\pi_N(f_\beta)
-du_t\,(dp)^{-1}d\pi_B(f_\beta).
\tag{7.34}
$$

$dp$ 是固定局部等距 covering 的微分，$du_t$ 有界，所以

$$
\|\partial_tu_t\|_{C^0}
\le C\|f_\beta\|_{C^0}
\le Ce^{-\kappa t/2}.
\tag{7.35}
$$

因此

$$
\int_{t_0}^\infty\|\partial_tu_t\|_{C^0}dt<\infty,
\tag{7.36}
$$

$u_t$ 在 $C^0$ 中 Cauchy。令极限为 $u_\infty$。由 (7.28)，$du_\infty=0$；$\Sigma$ 连通，故 $u_\infty\equiv q$。高阶一致界与插值把 $C^0$ 收敛提升到 $C^\infty$，得到 (7.7)。

最后，若 $d=1$，$p$ 是微分同胚；若 $B$ 单连通，任何连通 covering 都是一层。若 $d>1$，映射 $(p,q)$ 对水平切片恰覆盖 $d$ 次，故 varifold 推前质量为 $d$ 倍。定理证毕。

### 7.5 可直接使用的其他环境清单

结合第 6 节和定理 7.1，以下是严格的充分环境族；每一项仍需 HLS 余项条件 (6.25)/(6.26) 或精确时间缩放 (6.27)，以及统一 HLS 正则性。

1. **不同半径圆球乘积。** $B=S^2_{K_1}$、$N=S^2_{K_2}$，把曲率较大的因子放在第一位，并要求
   $$
   K_1\ge K_2,
   \qquad K_1+K_2>0.
   \tag{7.37}
   $$
   可取 $\kappa=(K_1+K_2)/2$。

2. **正曲率二球乘平坦环面。** 若 $\inf_BK_B>0$、$K_N\equiv0$，可取 $\kappa=\frac12\inf_BK_B$。

3. **正曲率二球乘负曲率曲面。** 若
   $$
   \inf_BK_B+\inf_NK_N>0,
   \qquad
   \inf_BK_B\ge\sup_NK_N,
   \tag{7.38}
   $$
   则 (6.20) 成立。比如 $K_B\equiv4$、$K_N\equiv-1$。

4. **一般变曲率乘积。** 只要全局满足 (6.20)，同一定理成立。该条件迫使第一因子有正 Euler 特征，因而 $B$ 拓扑上是 $S^2$；第二因子可以是任意亏格，只要曲率下界没有负得过强。

如果只知道 $M$ 是局部产品或商空间，却没有全局投影 $M\to B$，则“成为 $B$ 上的一层图”没有定义。此时可保留的结论是切平面趋向 $+1$ 平行分布，并在额外的全局叶空间/纤维化假设下收敛到一张平行校准叶。

---

> **先给结论。** 基础报告中的 B、C、D 只能作为带有明确附加条件的 HLS 梯度流定理，不能把普通平均曲率流的双 Kähler 角方程直接搬到 $\beta>0$。D 的“图形化并收敛到水平切片”不要求环境恰好是单位 $S^2\times S^2$：在任意紧致有向曲面乘积 $B^2\times N^2$ 上，只要双角满足统一 parabolic--logistic 不等式、HLS 加权正则性成立，并且第一投影覆盖度为 $1$，同一结论成立。若覆盖度为 $d>1$，正确结论是收敛到水平切片的 $d$ 重覆盖。若希望 logistic 项仅由环境曲率自动产生，则普通 MCF 中可取满足 $K_B(x)-K_N(y)\ge0$ 以及 $K_B(x)+K_N(y)\ge2\kappa>0$ 的产品；对真正的 $\beta>0$ HLS 流，还必须控制额外的三阶无符号余项。环境几何本身不能消掉该余项。特别地，在“正 Einstein + 两个方向相反的平行 Kähler 形式”这一 Wang 原始几何框架内，紧致连通环境事实上只能是同尺度的 $S^2\times S^2$；所谓其他流形来自放宽 Einstein 条件，或把 logistic 结构作为独立的可检验假设。


## 8. 原 $S^2\times S^2$ 型 D 与 Corollary D 的完整版本

### 8.1 D$_\beta$ 是推广定理的一层特例

**推论 8.1（$S^2\times S^2$ 上条件完整的 D$_\beta$）。** 令

$$
M=(S^2,g_1)\times(S^2,g_2),
\qquad \omega_\pm=\omega_1\pm\omega_2,
\tag{8.1}
$$

并用 $\omega_+$ 定义 HLS 流。设 $\Sigma$ 紧致连通，初值满足

$$
*\omega_+>0,
\qquad *\omega_-\ge0,
\qquad *\omega_-\not\equiv0.
\tag{8.2}
$$

若双角 logistic 条件 (7.4) 和统一 HLS 正则性成立，则流全时间存在，每个 $t>0$ 都是一层图

$$
\operatorname{graph}(u_t),
\qquad u_t:S^2\to S^2,
\tag{8.3}
$$

并光滑收敛到 $S^2\times\{q\}$。

**证明。** 定理 7.1 已给第一投影是连通有限覆盖。$S^2$ 单连通，所以覆盖度只能是 $1$。定理 7.1 的剩余结论直接给 (8.3) 和水平切片极限。注意本证明甚至不需要另设“嵌入”：覆盖度一自动使浸入成为图，从而成为嵌入。证毕。

若两因子是单位圆球且速度是普通 MCF，(6.16) 中 $A_K=1,B_K=0$、$\mathcal R_\pm=0$，于是

$$
(\partial_t-\Delta)\eta_\pm
=\eta_\pm Q_\pm+\eta_\pm(1-\eta_\pm^2)
\ge\eta_\pm(1-\eta_\pm^2),
\tag{8.4}
$$

这正是 Wang 原始 D 的 logistic 计算。对 $\beta>0$，(8.4) 不能忽略 (6.23) 的 $\mathcal R_\pm$。

### 8.2 图上的有符号 Jacobian 恒等式

设 $u_0:B\to N$，取图定向。令 $J_{u_0}$ 是相对于 $\omega_B,\omega_N$ 的有符号 Jacobian，即

$$
u_0^*\omega_N=J_{u_0}\omega_B.
\tag{8.5}
$$

若 $du_0$ 的奇异值为 $\lambda_1,\lambda_2$，则

$$
|J_{u_0}|=\lambda_1\lambda_2,
\qquad
D_0=\sqrt{(1+\lambda_1^2)(1+\lambda_2^2)}.
\tag{8.6}
$$

由 (7.23)--(7.24)，

$$
*\omega_+=\frac{1+J_{u_0}}{D_0},
\qquad
*\omega_-=\frac{1-J_{u_0}}{D_0}.
\tag{8.7}
$$

因此逐点等价关系是

$$
*\omega_+>0
\Longleftrightarrow J_{u_0}>-1,
\tag{8.8}
$$

$$
*\omega_-\ge0
\Longleftrightarrow J_{u_0}\le1,
\tag{8.9}
$$

以及

$$
*\omega_-\not\equiv0
\Longleftrightarrow J_{u_0}<1
\text{ 至少在一点成立。}
\tag{8.10}
$$

### 8.3 完整 Corollary D$_\beta$

**推论 8.2。** 设 $u_0:S^2\to N^2$ 光滑，并满足干净的严格条件

$$
|J_{u_0}|<1
\quad\text{处处}.
\tag{8.11}
$$

若从图出发的 HLS 流满足定理 7.1 的 logistic 与统一正则性条件，则图流全时间存在并光滑收敛到常值图。因此 $u_0$ 通过图流同伦于常值映射。

**证明。** (8.11) 与 (8.7) 给 $*\omega_+>0$、$*\omega_->0$，所以定理 7.1 可用。基底 $S^2$ 单连通，故得到一层图和常值极限。令

$$
t(s)=\frac{s}{1-s},
\qquad0\le s<1,
\tag{8.12}
$$

并定义

$$
U(x,s)=u_{t(s)}(x),
\qquad U(x,1)=q.
\tag{8.13}
$$

由 $u_t\to q$ 的光滑收敛，$U$ 连续延到 $s=1$，给出从 $u_0$ 到常值映射的同伦。证毕。

严格条件可以放宽为

$$
-1<J_{u_0}\le1
\quad\text{处处},
\qquad
J_{u_0}<1
\quad\text{至少一点}.
\tag{8.14}
$$

$J=1$ 可在部分点出现：这只使 $*\omega_-=0$，强最大值原理会在正时间使其严格为正。相反，$J=-1$ 即使只在一个点出现，也使

$$
*\omega_+=\cos\alpha=0,
\tag{8.15}
$$

而 $c^{-\beta}$ 发散，HLS $L_\beta$ 流不在该初值上定义。因此 HLS 的弱边界版必须严格排除 $J=-1$。

## 9. 精确时间重参数：何时无需估计 HLS 余项

**定理 9.1。** 假设一个沿 HLS 流保持的不变量类满足

$$
f_\beta=a(t)H,
\qquad0<a(t)\le a_1<\infty.
\tag{9.1}
$$

定义

$$
\tau(t)=\int_0^ta(s)ds.
\tag{9.2}
$$

则同一时间片族以 $\tau$ 为参数满足普通 MCF。若对应 MCF 在所有有限 $\tau$ 上光滑，则 HLS 流没有有限 $t$ 奇点。并且 HLS 流在 $t\to\infty$ 走遍 MCF 的全部无穷时间轨道，当且仅当

$$
\int_0^\infty a(t)dt=\infty.
\tag{9.3}
$$

**证明。** 因 $a>0$，$\tau$ 严格递增。在其值域内令 $G(x,\tau)=F(x,t(\tau))$，则

$$
\partial_\tau G
=\partial_tF\frac{dt}{d\tau}
=a(t)H\frac1{a(t)}=H_G.
\tag{9.4}
$$

若 HLS 在有限 $T$ 奇异，则

$$
\tau(T)\le a_1T<\infty.
\tag{9.5}
$$

对应 MCF 若在 $[0,\tau(T)]$ 光滑，其第二基本形在该紧区间有界。同一时间片族使 HLS 的 $|A|$ 也有界，HLS 延拓准则遂把流延过 $T$，矛盾。

$\tau(t)$ 的值域是 $[0,\tau_\infty)$，其中

$$
\tau_\infty=\int_0^\infty a(t)dt.
\tag{9.6}
$$

故值域等于 $[0,\infty)$ 当且仅当 (9.3) 成立。若 $\tau_\infty<\infty$，原流只采样 MCF 到有限时刻 $\tau_\infty$，不能从 MCF 的 $\tau\to\infty$ 结论推出 HLS 极限。证毕。

### 9.1 空间常 Kähler 角自动给正时间速度下界

若每个时间片上

$$
\alpha(x,t)=\theta(t),
\qquad c(t)=\cos\theta(t)>0,
\tag{9.7}
$$

则 $\nabla\alpha=0$，所以 $V=0$，且

$$
f_\beta=a(t)H,
\qquad
a(t)=\frac{c(t)^2}{c(t)^2+\beta(1-c(t)^2)}.
\tag{9.8}
$$

闭曲面的辛面积由同伦不变性保持：

$$
\mathcal S_\omega
=\int_\Sigma F_t^*\omega
=c(t)\operatorname{Area}(\Sigma_t)
=\text{常数}.
\tag{9.9}
$$

另一方面，

$$
\frac d{dt}\operatorname{Area}(\Sigma_t)
=-\int\langle H,f_\beta\rangle d\mu_t
=-a(t)\int|H|^2d\mu_t.
\tag{9.10}
$$

微分 (9.9)：

$$
0=c'(t)\operatorname{Area}(\Sigma_t)
+c(t)\frac d{dt}\operatorname{Area}(\Sigma_t),
\tag{9.11}
$$

所以

$$
c'(t)\operatorname{Area}(\Sigma_t)
=c(t)a(t)\int|H|^2d\mu_t\ge0.
\tag{9.12}
$$

故 $c(t)\ge c(0)>0$。函数

$$
q(c)=\frac{c^2}{c^2+\beta(1-c^2)}
\tag{9.13}
$$

满足

$$
q'(c)=\frac{2\beta c}{\bigl(c^2+\beta(1-c^2)\bigr)^2}>0.
\tag{9.14}
$$

从而

$$
a(t)\ge a(0)>0,
\qquad
\tau(t)\ge a(0)t\to\infty.
\tag{9.15}
$$

在满足 (6.20) 的产品上，普通 MCF 的 D 型结论因而通过 $\tau$ 精确转移到这一 HLS 不变量类。必须强调，(9.7) 是沿整个流的假设；仅有初始角空间常数并不能从现有 HLS 公式自动推出其被保持。

## 10. 每个新增条件为何不能删除

### 10.1 双校准和面积递减本身不产生 D 结论

取平坦四环面

$$
M=T^2\times T^2
\tag{10.1}
$$

及仿射秩一映射

$$
u(x,y)=(mx,0)\pmod{\mathbb Z^2},
\qquad m\in\mathbb Z\setminus\{0\}.
\tag{10.2}
$$

其图是平坦 $T^4$ 中的线性子环面，故

$$
A=H=0.
\tag{10.3}
$$

$du$ 的奇异值为 $|m|,0$，所以 $J_u=0$，

$$
\eta_+=\eta_-=\frac1{\sqrt{1+m^2}}>0.
\tag{10.4}
$$

角为空间常数，故 $V=0$。由 (1.3)，

$$
f_\beta=0
\quad\text{对每个 }\beta>0.
\tag{10.5}
$$

这是满足 $|J_u|<1$ 的静止 HLS 图，却不是水平切片。它严格证明：没有正的 logistic 曲率反应时，任意产品、双角正性和面积递减都不足以推出 D。

还有一个同时检验“负曲率”和“正曲率因子顺序”的反例。令 $(S,g)$ 为闭有向曲面，第二因子取同一复结构和缩放度量 $q^2g$，其中 $0<q<1$。对角图

$$
F(x)=(x,x)\subset(S,g)\times(S,q^2g)
\tag{10.5a}
$$

的两个奇异值都等于 $q$，故

$$
D=1+q^2,
\qquad J=q^2,
\qquad
\eta_+=1,
\qquad
\eta_-=\frac{1-q^2}{1+q^2}>0.
\tag{10.5b}
$$

常数缩放不改变 Levi--Civita 联络，恒等映射的协变 Hessian 为零，所以对角图全测地；又 $\eta_+=1$，故 $H=V=f_\beta=0$。若 $g$ 的曲率为 $-1$，两因子曲率是 $-1,-q^{-2}$；若 $g$ 的曲率为 $1$，两因子曲率是 $1,q^{-2}$，即目标因子曲率更大。两种情形都给严格双角正却不趋于水平切片的静止解，说明 (6.20) 中“曲率和为正”及“第一因子曲率不小于第二因子”的方向都不是装饰条件。

### 10.2 覆盖度不能由嵌入直觉代替

设 $p:\widehat B\to B$ 是 $d>1$ 层有限覆盖，取常值 $q\in N$。浸入

$$
F=(p,q):\widehat B\to B\times N
\tag{10.6}

$$
满足

$$
\eta_+=\eta_-=1,
\qquad A=f_\beta=0.
\tag{10.7}
$$

它已经是水平极限，但作为 varifold 是 $d$ 重切片。故若基底非单连通且没有预设第一投影度数为 $1$，D 的最强正确结论只能是定理 7.1 的有限覆盖版本。

### 10.3 连通性不能删除

两个不同水平切片

$$
(B\times\{q_1\})\cup(B\times\{q_2\})
\tag{10.8}

$$
是静止解并满足每个分支 $\eta_\pm=1$，但不会收敛成一个切片。因此必须要求 $\Sigma$ 连通，或把结论逐连通分支表述。

### 10.4 能量耗散不控制第二基本形

在带乘积 Fubini--Study 度量的 $\mathbb{CP}^1\times\mathbb{CP}^1$ 中，取二次全纯映射

$$
f([z_0:z_1])=[z_0^2:z_1^2].
\tag{10.9}
$$

其图是复曲线，故 $c=1$、$H=V=f_\beta=0$。若图全测地，则局部正常坐标中其二阶喷射必须消失；但在仿射原点图为 $z\mapsto(z,z^2)$，第二分量二阶导数非零。因此

$$
A\not\equiv0,
\qquad
-\frac d{dt}L_\beta=0.
\tag{10.10}
$$

这说明 C 的强制条件 (4.6) 不能从能量恒等式自动推出。

### 10.5 只有时空 $L^2$ 曲率而无尺度桥梁仍不够

若没有 $|\nabla A|$ 和 (4.7)，可令曲率峰值保持为 $1$，而支撑半径趋于 $0$；则 $\int|A|^2\to0$ 仍与 $\sup|A|=1$ 相容。引理 3.2 的 (3.19)--(3.20) 正是阻止这种集中所需的定量桥梁。

### 10.6 角向二阶 Bernstein 条件不替代 B/C/D

令 $Q(t)=\max_{\Sigma_t}|A|^2$，上 Dini 导数定义为

$$
D^+Q(t)=\limsup_{h\downarrow0}
\frac{Q(t+h)-Q(t)}h.
\tag{10.11}
$$

某些角向二阶条件最多在最大点给

$$
D^+Q(t)\le C(Q(t)+\Lambda^2)^2.
\tag{10.12}

$$
该 Riccati 型上界本身容许有限时间爆破；它既不给 HLS 低密度，也不给 $Q\to0$，更不给双角趋于 $1$。所以它不能替代 (4.5)、(4.6) 或 (7.4)。

### 10.7 LS 不等式若不控制真实速度仍可能漂移

在解析圆柱

$$
\mathcal C=(0,1]\times S^1,
\qquad
E(r,\vartheta)=\frac12r^2
\tag{10.13}
$$

及曲线

$$
x(t)=(r_0e^{-t},[t]),
\qquad
0<r_0\le1.
\tag{10.14}
$$

产品度量下

$$
\nabla E=r\,\partial_r,
\qquad
|E|^{1/2}=\frac r{\sqrt2}\le|\nabla E|=r.
\tag{10.15}
$$

因为 $r'=-r$，能量甚至满足精确恒等式

$$
-\frac d{dt}E(x(t))=r(t)^2=|\nabla E(x(t))|^2.
\tag{10.16}
$$

然而取 $t_n=2\pi n$ 和 $s_n=\pi+2\pi n$，其角分量分别为 $[0]$ 和 $[\pi]$；即使在完备化 $[0,1]\times S^1$ 中，两子列也没有同一极限。真实速度为

$$
|\dot x(t)|=\sqrt{r(t)^2+1},
\qquad
\frac{|\dot x(t)|}{|\nabla E(x(t))|}
=\sqrt{1+r(t)^{-2}}\to\infty.
\tag{10.17}
$$

故即使 LS 与“能量等于梯度平方”的精确耗散都成立，若没有规范真实速度比较，轨道仍可沿能量不可见方向无限漂移。C 中的 (3.25) 不能删除。

## 11. 可直接引用的最终命题矩阵

| 目标 | 环境与完整条件 | 严格结论 |
|---|---|---|
| B$_\beta$ | 任意紧 Kähler 曲面；有限视界角下界；带 $\sqrt t/32$ 缓冲的 HLS 加权低密度 | 全时间经典存在 |
| C$_\beta$ | B 的统一版；双角不变量区；曲率--梯度强制；非坍缩；解析 Fredholm 正常切片 | 模去重参数光滑收敛到全测地 $\beta$-临界浸入 |
| 抽象 D$_\beta$ | 任意紧有向曲面乘积；双角 logistic；统一 HLS 正则性 | 收敛到水平切片的固定有限覆盖 |
| 一层 D$_\beta$ | 抽象 D 加第一投影度数 $1$；特别地基底单连通 | 正时间为一层图并光滑收敛到水平切片 |
| 曲率产生的 D1 | $K_B-K_N\ge0$、$K_B+K_N\ge2\kappa>0$，再加 HLS 余项吸收或 $f_\beta=a(t)H$ | 自动得到双角 logistic |
| Corollary D$_\beta$ | $-1<J_u\le1$ 且 $J_u<1$ 至少一点；推荐 $|J_u|<1$；再加 D 条件 | 图流同伦到常值映射 |
| 精确轨道转移 | $f_\beta=a(t)H$；无穷远结论另需 $\int_0^\infty a=\infty$ | 逐时间片等价于普通 MCF |

## 12. 最终回答

1. **如果“满足 D 的条件”指本文基础报告中的 D1+D2，那么 $M$ 不必是 $S^2\times S^2$。** 任意紧有向曲面乘积 $B\times N$ 都有双校准；若 D1+D2 成立且第一投影度数为 $1$，就得到一层图和水平切片收敛。

2. **如果要求 D1 由普通 MCF 的环境曲率自动推出，** 可以取所有满足 (6.20) 的产品。常曲率版本是 $K_B\ge|K_N|$ 且 $K_B+K_N>0$；它包括不同半径球面、球面乘平坦环面，以及正曲率足够大的球面乘负曲率曲面。

3. **如果研究真正的 $\beta>0$ HLS 流，** 上述曲率只控制 (6.24) 的 MCF 部分；还必须验证 HLS 余项 (6.23) 的吸收条件，或证明流处于 $f_\beta=a(t)H$ 的精确时间缩放类。当前没有依据把这一点仅由环境 $M$ 推出。

4. **如果坚持 Wang 原始正 Einstein 双 Kähler 假设，** 命题 5.1 表明紧致连通环境只能是同尺度 $S^2\times S^2$，因此在这个严格意义下没有其他 $M$。

5. **如果基底不单连通，** 不能无条件写成一层图；覆盖度 $d$ 是不可忽略的拓扑量。正确极限是 $d$ 重水平覆盖。嵌入性本身不替代覆盖度计算。

## Danus 核验记录

本报告调用 7 个 Danus 工作单元：high $\times3$、xhigh $\times4$。它们分别审计双角方程、环境分裂、B 的尺度量词、C 的 LS 锁定、D 的 logistic--covering 证明、Jacobian 端点和反例边界。最终只采用经过独立 verifier 通过、且能由正文公式重建的结论；任何尚未由 HLS 原文推出的内容均明确保留为余项吸收、统一密度或解析切片假设。

## 参考文献

1. X. Han, J. Li, J. Sun, *Gradient flow for $\beta$-symplectic critical surfaces*, Ann. Inst. H. Poincaré Anal. Non Linéaire 41 (2024), 1083--1116. [DOI 10.4171/AIHPC/100](https://doi.org/10.4171/AIHPC/100).
2. M.-T. Wang, *Mean Curvature Flow of Surfaces in Einstein Four-Manifolds*, J. Differential Geom. 57 (2001), 301--338. [arXiv:math/0110019](https://arxiv.org/abs/math/0110019).
3. M.-T. Wang, *Long-time Existence and Convergence of Graphic Mean Curvature Flow in Arbitrary Codimension*, Invent. Math. 148 (2002), 525--543. [DOI 10.1007/s002220100201](https://doi.org/10.1007/s002220100201).
4. M.-P. Tsui, M.-T. Wang, *Mean Curvature Flows and Isotopy of Maps Between Spheres*, Comm. Pure Appl. Math. 57 (2004), 1110--1126. [arXiv:math/0302242](https://arxiv.org/abs/math/0302242).
5. L. Simon, *Asymptotics for a Class of Nonlinear Evolution Equations, with Applications to Geometric Problems*, Ann. of Math. 118 (1983), 525--571. [DOI 10.2307/2006981](https://doi.org/10.2307/2006981).
6. J. Langer, *A Compactness Theorem for Surfaces with $L_p$-bounded Second Fundamental Form*, Math. Ann. 270 (1985), 223--234. [DOI 10.1007/BF01456183](https://doi.org/10.1007/BF01456183).

### 审计边界

- 全文只研究奇点前的经典光滑 HLS 流，不把 Brakke 流或弱 varifold 演化混入延拓证明。
- HLS $\varepsilon$-正则性、延拓准则和抽象 Łojasiewicz--Simon 定理作为准确陈述的外部输入；正文完整证明它们在 B/C/D 链中的每一步应用，但不复制这些原论文的全部证明。
- (4.6)、(6.25)/(6.26)、(7.4) 是新增充分条件，不宣称 HLS 原文已自动证明。
- 正 Einstein 分类针对两张**全局**平行 Kähler 形式；只有局部形式或允许 deck 变换交换结构时，必须另行分析商空间。
