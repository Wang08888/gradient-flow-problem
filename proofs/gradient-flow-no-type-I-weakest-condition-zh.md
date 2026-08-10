# 梯度流不产生第一类奇点的最弱自然加权密度条件

## 结论

如果不预先限制“条件”的形式，则“绝对最弱的充分条件”没有良定义：任意两个充分条件可以取析取而得到更弱的充分条件，甚至“该流没有第一类奇点”本身就是一个循环的必要充分条件。

在下列合理限定下，可以给出一个精确答案：

- 只使用 Han--Li--Sun 的局部加权高斯量 $\Psi_p$；
- 只调用其 Corollary 4.2 的 $\varepsilon$-正则性；
- 条件只施加在一条曲率爆破序列的空间积聚点上。

在这一类别中，量词最弱的直接正则性判据是：**一旦存在曲率爆破，只需能从某一条曲率爆破序列中选出一个空间积聚点 $X_*$ 和一个可容许尺度 $r_*>0$，使**

$$
\Psi_p(X_*,T;T-r_*^2)<1+\varepsilon_{\rm HLS}.
\tag{0.1}
$$

不需要要求所有候选点满足条件，不需要终端密度极限存在，也不需要要求所有充分小尺度都满足小量条件。严格说来，这是一条“若发生爆破，则可找到一个 HLS-small 点尺度对”的反证型正则性条件；它会排除该时刻的一切曲率奇点，因而特别排除第一类奇点。

## 1. 设定与非循环的曲率爆破积聚集

考虑 Han--Li--Sun 的 $\beta$-辛临界曲面梯度流

$$
\partial_tF
=\frac{\cos^2\alpha\,H-\beta\sin^2\alpha\,V}
{\cos^2\alpha+\beta\sin^2\alpha},
\qquad \beta\ge0,
\tag{1.1}
$$

其中 $F:\Sigma\times[0,T)\to M^4$，$\Sigma$ 为闭曲面，$M$ 为紧 Kähler 曲面，并假设

$$
\cos\alpha=*F_t^*\omega\ge\delta>0.
\tag{1.2}
$$

令

$$
Q(t):=\max_{x\in\Sigma}|A|^2(x,t).
\tag{1.3}
$$

若 $T$ 是第一类奇异时刻，则按定义

$$
\limsup_{t\uparrow T}Q(t)=\infty,
\qquad
\sup_{0\le t<T}(T-t)Q(t)<\infty.
\tag{1.4}
$$

为了避免直接量化“奇点”造成循环，定义曲率爆破积聚集

$$
\mathcal B_T:=
\left\{
X\in M:\begin{array}{l}
\text{存在 }t_j\uparrow T\text{ 与 }x_j\in\Sigma,\ 
|A|(x_j,t_j)\to\infty,\\
F(x_j,t_j)\to X
\end{array}
\right\}.
\tag{1.5}
$$

这是完全由 $T$ 前的光滑流和曲率爆破序列定义的集合，并未预先把任何点称为奇点。若 $Q(t)$ 无界，则可选 $t_j\uparrow T$ 使 $Q(t_j)\to\infty$，再取 $x_j$ 为相应曲率最大点；由 $M$ 紧，$F(x_j,t_j)$ 有收敛子列，故

$$
Q(t)\text{ 无界}\quad\Longrightarrow\quad\mathcal B_T\ne\varnothing.
\tag{1.6}
$$

## 2. 最弱自然的一尺度条件

令 $p$ 处于 Han--Li--Sun 单调性公式与 Corollary 4.2 所允许的范围。其局部加权高斯量为

$$
\Psi_p(X_0,t_0;t)
=\int_{\Sigma_t}
\frac{1}{\cos^p\alpha}\,\phi(F)\,
\rho_{X_0,t_0}(F,t)\,d\mu_t.
\tag{2.1}
$$

称 $r>0$ 对 $(X_0,T)$ **可容许**，若 $T-r^2\ge0$，相关抛物邻域位于 Corollary 4.2 的光滑局部设定内，并且截断函数满足 HLS 的支撑条件（特别是第 3 节构造中的 $0<2r<i_M$）。记所有这种尺度为 $\mathcal R(X_0,T)$。下文 $\varepsilon_{\rm HLS}>0$ 取 Corollary 4.2 的常数；它依赖于 $p,\delta$ 与环境流形。

### 条件 (W)（一个曲率爆破积聚点处的一尺度小量）

若 $\mathcal B_T\ne\varnothing$，则存在

$$
X_*\in\mathcal B_T,
\qquad r_*\in\mathcal R(X_*,T),
\tag{2.2}
$$

使

$$
\Psi_p(X_*,T;T-r_*^2)<1+\varepsilon_{\rm HLS}.
\tag{2.3}
$$

等价地，条件 (W) 是如下蕴含：

$$
\mathcal B_T\ne\varnothing
\quad\Longrightarrow\quad
\inf_{X\in\mathcal B_T}
\inf_{r\in\mathcal R(X,T)}
\Psi_p(X,T;T-r^2)
<1+\varepsilon_{\rm HLS},
\tag{2.4}
$$

右端的严格不等式保证确实存在一对 $(X_*,r_*)$ 达到阈值以下；不要求下确界被取到。若 $\mathcal B_T=\varnothing$，(W) 按蕴含的通常约定自动成立；此时由 (1.6) 的逆否命题，曲率本来就是有界的。

## 3. 排除第一类奇点的定理

### 定理 3.1（最弱自然 HLS 一点一尺度判据）

设 $F$ 满足第 1 节的假设。若在时间 $T$ 条件 (W) 成立，则

$$
\sup_{\Sigma\times[0,T)}|A|<\infty.
\tag{3.1}
$$

因而 $T$ 不是第一类奇异时刻；事实上，Han--Li--Sun Theorem 3.1 还给出某个 $\eta>0$，使流光滑延拓到 $[0,T+\eta)$。

#### 证明

反设 (3.1) 不成立。因为流在每个紧子区间 $[0,T']$、$T'<T$ 上光滑且 $\Sigma$ 紧，曲率只能在 $t\uparrow T$ 时无界。由 (1.6)，$\mathcal B_T\ne\varnothing$。条件 (W) 因而给出 $X_*\in\mathcal B_T$ 与可容许尺度 $r_*$，使 (2.3) 成立。再由 $X_*\in\mathcal B_T$ 的定义，存在 $t_j\uparrow T$ 和 $x_j\in\Sigma$ 使

$$
|A|(x_j,t_j)\longrightarrow\infty.
\tag{3.2}
$$

并且

$$
F(x_j,t_j)\longrightarrow X_*.
\tag{3.3}
$$

同时，条件 (W) 给出的尺度满足

$$
\Psi_p(X_*,T;T-r_*^2)<1+\varepsilon_{\rm HLS}.
\tag{3.4}
$$

由 Han--Li--Sun Corollary 4.2，在较小抛物邻域

$$
P(X_*,T;r_*/2)
=B_{r_*/2}(X_*)\times(T-r_*^2/4,T]
\tag{3.5}
$$

内有

$$
|A|\le\frac{C_0}{r_*}.
\tag{3.6}
$$

根据 (3.3) 且 $t_j\uparrow T$，充分大的 $j$ 满足

$$
(F(x_j,t_j),t_j)\in P(X_*,T;r_*/2).
\tag{3.7}
$$

于是 (3.6) 给出

$$
|A|^2(x_j,t_j)\le\frac{C_0^2}{r_*^2},
\tag{3.8}
$$

与 (3.2) 矛盾。故 (3.1) 成立。Theorem 3.1 随即给出越过 $T$ 的光滑延拓。特别地，(1.4) 不可能成立，所以没有第一类奇点。证毕。

### 备注 3.2

证明没有使用第一类上界 $Q(t)\le C/(T-t)$。原因是条件 (W) 直接排除了曲率爆破。因此，若只在满足第一类上界的假想时刻要求 (W)，它便是“排除第一类奇点”的条件；若对每个有限候选奇异时刻都要求 (W)，则它排除所有有限时曲率奇点。

## 4. 为什么这是该类别中的最弱条件

Corollary 4.2 的直接输入正是“在一个点、一个尺度上严格小于 $1+\varepsilon_{\rm HLS}$”。反证时，一旦 (W) 选出 $X_*\in\mathcal B_T$，$X_*$ 的定义本身就提供一条收敛到它的爆破序列；局部曲率界与该序列直接矛盾。因此只需一个这样的点，而不需覆盖其余爆破聚点。增加下列任一要求都会使条件变强，而不是证明所必需：

- 要求每个 $X\in\mathcal B_T$ 都满足小量条件；
- 要求每个候选第一类点都满足小量条件；
- 要求所有充分小的尺度都满足小量条件；
- 要求终端加权密度极限存在并小于阈值；
- 要求 $\Theta_p^w<2$ 后再证明密度量子化。

因此，在“用 $\Psi_p$ 的数值不等式直接触发 HLS Corollary 4.2”这一指定证明机制内，(W) 已把量词减到证明真正使用的最小程度：一条曲率爆破子列的一个积聚点和一个尺度。

这不是集合论意义上的绝对最弱充分条件。可以另加与密度无关的几何条件，或取不同充分条件的析取，得到与 (W) 不可比较或形式上更弱的条件。

## 5. 与终端密度条件的强弱关系

固定一个点 $X$，考虑下列条件：

$$
\begin{aligned}
\text{(A)}\;&\exists r\in\mathcal R(X,T):
\Psi_p(X,T;T-r^2)<1+\varepsilon_{\rm HLS};\\
\text{(B)}\;&\liminf_{r\downarrow0}
\Psi_p(X,T;T-r^2)<1+\varepsilon_{\rm HLS};\\
\text{(C)}\;&\Theta_p^w(X,T):=\lim_{r\downarrow0}
\Psi_p(X,T;T-r^2)<1+\varepsilon_{\rm HLS}.
\end{aligned}
\tag{5.1}
$$

直接由定义有

$$
\text{(C)}\Longrightarrow\text{(B)}\Longrightarrow\text{(A)}.
\tag{5.2}
$$

(A) 就是 Corollary 4.2 的一尺度输入，并不需要极限存在。因此，以终端密度 (C) 为假设虽然更容易表述，却不是最弱版本。

上一份审计已经证明

$$
\Theta_p^w<2
\nRightarrow
\Theta_p^w<1+\varepsilon_{\rm HLS}.
\tag{5.3}
$$

单重常 Kähler 角平面的加权密度可以严格位于

$$
(1+\varepsilon_{\rm HLS},2).
\tag{5.4}
$$

所以 weighted Gaussian density $<2$ 不能代替条件 (W)。

## 6. 推荐写入正文的命题

**命题（一个曲率爆破积聚点处的一尺度加权低密度判据）**
设 $F:\Sigma\times[0,T)\to M^4$ 是闭曲面在紧 Kähler 曲面中的 $\beta$-辛临界曲面梯度流，且 $\cos\alpha\ge\delta>0$；$p$ 取 HLS 正则性理论允许的值。定义 $\mathcal B_T$ 如 (1.5)。假设：若 $\mathcal B_T\ne\varnothing$，则存在 $X_*\in\mathcal B_T$ 及一个可容许尺度 $r_*>0$，满足

$$
\Psi_p(X_*,T;T-r_*^2)<1+\varepsilon_{\rm HLS}.
$$

则 $|A|$ 在 $[0,T)$ 上一致有界，流可光滑延拓越过 $T$；特别地，$T$ 不可能是第一类奇异时刻。

为了把它表述成一族流的先验条件，可以写成：“对每个满足第一类曲率上界的有限候选时刻 $T$，条件 (W) 成立。”

## 参考文献

**[1]** X. Han, J. Li and J. Sun, *Gradient Flow for $\beta$-Symplectic Critical Surfaces*, Ann. Inst. H. Poincaré C Anal. Non Linéaire 41 (2024), 1083--1116；尤其 Theorem 3.1、Theorem 4.1 与 Corollary 4.2。

**[2]** M.-T. Wang, *Mean Curvature Flow of Surfaces in Einstein Four-Manifolds*, J. Differential Geom. 57 (2001), 301--338；尤其 Proposition 5.2。
