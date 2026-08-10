# 加权高斯密度严格小于 2 能否推出梯度流延拓？

## 结论

对 Han--Li--Sun 的一般 $\beta$-辛临界曲面梯度流（$\beta>0$），仅假设候选第一类奇点处的 **weighted Gaussian density 严格小于 $2$**，目前仍不能从现有定理严格推出所述延拓命题。准确地说：

1. Han--Li--Sun 的 $\varepsilon$-正则性定理要求某个有限尺度上的加权量严格满足
   $$
   \Psi_p(X_0,T;T-r^2)<1+\varepsilon_{\rm HLS},
   \tag{1.1}
   $$
   其中只知道 $\varepsilon_{\rm HLS}>0$。把该常数减小为 $\min\{\varepsilon_{\rm HLS},1/2\}$ 后定理仍成立，所以可始终取 $0<\varepsilon_{\rm HLS}<1$。区间 $(1+\varepsilon_{\rm HLS},2)$ 非空，故 $\Psi_p<2$ 不蕴含 (1.1)。
2. 即使把“加权密度”理解为终端极限，并额外假定切锥由整数重平面组成，严格小于 $2$ 至多强制总重数为 $1$；单个非全纯常角平面的加权密度仍可取 $(1,2)$ 中的值，并不自动等于 $1$。
3. 对 $\beta>0$，流速一般不等于平均曲率向量，White 的平均曲率流正则性定理不能直接替代 Han--Li--Sun 的 (1.1)。该论文也明确把排除这种新流的第一类奇点留作后续问题。

所以，现有结果下不存在从“weighted Gaussian density $<2$”到所述延拓性质的严谨证明。能直接严格证明的正确条件是 (1.1)，或终端加权密度严格小于 $1+\varepsilon_{\rm HLS}$。以下给出完整论证和严格阈值分析。

## 1. 流、加权量与两种可能的条件

Han--Li--Sun 考虑的流为

$$
\partial_tF
=\frac{\cos^2\alpha\,H-\beta\sin^2\alpha\,V}
{\cos^2\alpha+\beta\sin^2\alpha},
\qquad \beta\ge0,
\tag{1.2}
$$

其中 $\alpha$ 是 Kähler 角。仅当 $\beta=0$ 时，(1.2) 才是平均曲率流 $\partial_tF=H$。在 $\cos\alpha\ge\delta>0$ 下，取 $p\ge p_0(\beta,\delta)$，论文使用的局部加权高斯量是

$$
\Psi_p(X_0,t_0;t)
=\int_{\Sigma_t}\phi(F)\,\rho_{X_0,t_0}(F,t)
\frac{1}{\cos^p\alpha}\,d\mu_t,
\tag{1.3}
$$

其中 $\phi$ 是在 $X_0$ 附近等于 $1$ 的截断函数，$\rho$ 是二维后向热核。

“weighted Gaussian density $<2$”有两种可能含义：

- **有限尺度条件：** 对某个 $r>0$，$\Psi_p(X_0,T;T-r^2)<2$；
- **终端密度条件：** 假定相应极限存在，并记
  $$
  \Theta_p^w(X_0,T)
  :=\lim_{r\downarrow0}\Psi_p(X_0,T;T-r^2)<2.
  \tag{1.4}
  $$

这两个解释都不足以由 Han--Li--Sun 的现成定理推出延拓。有限尺度版本不能达到 (1.1)；终端版本在排除多重性后仍留下第 2 节的角权障碍。

## 2. 严格小于 2 的加权平面切锥分析

下面的引理精确说明数值 $2$ 能给出什么。它只使用整数重数与 $0<\cos\alpha\le1$，不调用任何未证明的正则性结论。

### 引理 2.1（$D_p<2$ 强制总重数为一，但不强制加权密度为一）

设某个切锥可写成有限个整数重平面的和

$$
\mathcal C=\sum_{j=1}^N m_j|P_j|,
\qquad m_j\in\mathbb N,
\tag{2.1}
$$

并且 Kähler 角沿吹起收敛到各平面上的常数 $c_j=\cos\alpha_{P_j}\in(0,1]$，从而加权密度可识别为

$$
D_p(\mathcal C)=\sum_{j=1}^N m_jc_j^{-p}.
\tag{2.2}
$$

若 $D_p(\mathcal C)<2$，则总重数 $\sum_jm_j=1$，即只有一个单重平面，且其 $c$ 满足
   $$
   c^{-p}<2\quad\Longleftrightarrow\quad c>2^{-1/p}.
   \tag{2.3}
   $$

反之，任意满足 $c>2^{-1/p}$ 的单重常角平面都满足 $D_p<2$；当 $c<1$ 时，仍有 $D_p=c^{-p}>1$。

#### 证明

因为 $0<c_j\le1$ 且 $p>0$，有 $c_j^{-p}\ge1$。因此

$$
\sum_{j=1}^Nm_j
\le\sum_{j=1}^Nm_jc_j^{-p}
=D_p(\mathcal C)<2.
\tag{2.4}
$$

左端是严格小于 $2$ 的正整数，故只能等于 $1$。(2.1) 因而只能含一个重数为 $1$ 的平面，且 (2.3) 由 $c^{-p}<2$ 得到。反向命题直接代入 $D_p=c^{-p}$ 即得。证毕。

### 推论 2.2（单重性仍不足以达到 HLS 阈值）

$D_p<2$ 排除了二重平面，并在 (2.2) 的额外识别假设下推出一个单重平面；但它不能推出 $D_p=1$。其加权密度可以是区间 $[1,2)$ 中的任意值 $c^{-p}$。具体地，给定 $0<\varepsilon<1$，取任意

$$
1+\varepsilon<c^{-p}<2
\tag{2.5}
$$

的 $c\in(2^{-1/p},(1+\varepsilon)^{-1/p})$，便得到一个单重常角平面，同时满足 $D_p<2$ 和 $D_p>1+\varepsilon$。所以除非再证明 $c=1$，否则不能保证 $D_p<1+\varepsilon_{\rm HLS}$。

这里所需的常角平面确实对每个 $c\in(0,1]$ 都存在。令 $\mathbb C^2=\mathbb R^4$ 的标准正交基为 $e_1,e_2,e_3,e_4$，满足 $Je_1=e_2$、$Je_3=e_4$，并取有向平面

$$
P_c=\operatorname{span}\left\{e_1,
c e_2+\sqrt{1-c^2}\,e_3\right\}.
\tag{2.6}
$$

式中两生成向量是单位正交向量，且标准 Kähler 形式满足

$$
\omega\!\left(e_1,c e_2+\sqrt{1-c^2}\,e_3\right)=c.
\tag{2.7}
$$

故 $P_c$ 的 Kähler 角余弦恰为 $c$。又因 $P_c$ 是仿射平面，$A=H=0$，且 $\alpha$ 为常数、$V=0$，所以它也是 (1.2) 的静态平面模型。

这里的平面例子是对“由严格小于 $2$ 自动推出加权密度一或 HLS 小量条件”的严格模型障碍；它本身不是一个产生有限时奇点的反例。因此严谨结论是：现有假设不足以闭合证明，而不是声称已经构造了违反延拓命题的奇异流。

## 3. 为什么第一类曲率界和辛性下界没有补上缺口

假设

$$
\cos\alpha=*F_t^*\omega\ge\delta>0,
\qquad |A_t|^2\le\frac{C}{T-t}
\tag{3.1}
$$

提供了抛物吹起的尺度不变曲率控制，并保证权 $\cos^{-p}\alpha$ 有界。但这两条本身不包含下列任何一个结论：

- 切锥必为相对于原 Kähler 结构的全纯平面；
- 切锥必为单重；
- $\Theta_p^w<2$ 能改善为 $\Theta_p^w<1+\varepsilon_{\rm HLS}$；
- 对 (1.2) 存在“加权密度等于一即正则”的 White 型定理。
- 在曲率真正爆破时，存在与 $|A|^2\le C/(T-t)$ 相匹配的下爆破率，从而可选取一个在 Type-I 尺度上仍保持非平坦的光滑极限。

Han--Li--Sun 的 Theorem 5.7 给出 $\lambda$-切锥由有限个平面组成，但其正式表述没有给出上述单重正则性桥接。其证明中的“holomorphic curve in $\mathbb C^2$”也不能未经说明就改写为“相对于原 Kähler 结构的每个极限平面均有 $\cos\alpha=1$”，因为非全纯常角平面可相对于另一正交复结构成为复直线。该论文导言又明确指出：要排除 (1.2) 的第一类奇点，还需推导第二基本形式的演化方程并与单调公式结合，并将此问题留待后续研究。因此不能把 Wang Proposition 5.2 对普通辛平均曲率流的论证原样搬到 $\beta>0$。

## 4. 当前可以严格证明的延拓定理

### 定理 4.1（Han--Li--Sun 阈值下的延拓）

设 $M$ 为紧 Kähler 曲面，$\Sigma$ 为闭曲面，$F:\Sigma\times[0,T)\to M$ 是 (1.2) 的光滑解，并且 $\cos\alpha\ge\delta>0$。令 $\varepsilon_{\rm HLS}>0$ 为 Han--Li--Sun Corollary 4.2 中的常数。假设对每个可能的奇异空间点 $X_0$，存在 $r_{X_0}>0$ 使

$$
\Psi_p(X_0,T;T-r_{X_0}^2)<1+\varepsilon_{\rm HLS}.
\tag{4.1}
$$

则存在 $\varepsilon>0$，使 $F$ 光滑延拓到 $[0,T+\varepsilon)$。

这里不需要另用第一类上界 $|A|^2\le C/(T-t)$；若保留该假设，结论当然仍成立。

#### 证明

由 Han--Li--Sun Corollary 4.2，(4.1) 给出以 $(X_0,T)$ 为中心的一个抛物邻域，在其中第二基本形式具有尺度相应的一致上界；特别地，$(X_0,T)$ 是正则点。

反设 $|A|$ 在 $t\uparrow T$ 时不一致有界。则可取 $(x_i,t_i)$，其中 $t_i\uparrow T$ 且

$$
|A|(x_i,t_i)\longrightarrow\infty.
\tag{4.2}
$$

令 $X_i=F(x_i,t_i)$。由 $M$ 的紧性，取子列使 $X_i\to X_0\in M$。若 $(X_0,T)$ 为正则点，则存在 $r>0$ 和 $K<\infty$，使 $|A|\le K$ 于某个包含所有充分大 $i$ 的 $(X_i,t_i)$ 的抛物邻域，和 (4.2) 矛盾。因此 $(X_0,T)$ 必是一个可能的奇异点。

按假设，该点满足 (4.1)；Corollary 4.2 又断言它是正则点，仍为矛盾。故

$$
\sup_{\Sigma\times[0,T)}|A|<\infty.
\tag{4.3}
$$

最后应用 Han--Li--Sun Theorem 3.1 的延拓判据，得到某个 $\varepsilon>0$，使解光滑延拓到 $[0,T+\varepsilon)$。证毕。

### 推论 4.2（终端加权密度版本）

在定理 4.1 的其余假设下，若对每个可能的奇异点，(1.4) 的极限存在且

$$
\Theta_p^w(X_0,T)<1+\varepsilon_{\rm HLS},
\tag{4.4}
$$

则流可延拓越过 $T$。

#### 证明

由极限定义，(4.4) 对每个 $X_0$ 给出充分小的 $r_{X_0}>0$，使 (4.1) 成立。应用定理 4.1 即得结论。证毕。

注意这里必须是严格不等式；仅有 $\Theta_p^w\le1+\varepsilon_{\rm HLS}$ 时，极限定义并不能保证某个有限尺度严格落在阈值以下。

## 5. 在额外量子化假设下，严格小于 2 何时可用

若另行证明了以下桥接结论：每个相关切锥满足 (2.1)--(2.2)，且所有 $c_j=1$，并且加权终端密度等于该整数总重数，那么

$$
\Theta_p^w<2
\quad\Longrightarrow\quad
\Theta_p^w=1.
\tag{5.1}
$$

此时由终端极限定义可在充分小的有限尺度上得到 $\Psi_p<1+\varepsilon_{\rm HLS}$，再用 Corollary 4.2 与定理 4.1 即可完成延拓。问题在于“所有相关 $c_j=1$”以及“终端加权密度等于该整数平面和的加权密度”这两个桥接结论并不是 Han--Li--Sun 论文对一般 $\beta>0$ 已经给出的结果。严格号在这里只解决整数总重数问题，尚未解决 Kähler 角权及极限识别问题。

## 6. 与 $\beta=0$ 的区别

当 $\beta=0$ 时，(1.2) 是普通辛平均曲率流。在 Wang Proposition 5.2 的设定中，$\cos\alpha\ge\delta>0$ 与第一类界 (3.1) 已被用于排除第一类奇点；此时延拓结论不需要额外的 weighted-density-$<2$ 假设。

若改走“平面切流 + White 正则性”的密度路线，则标准（非加权）高斯密度严格小于 $2$ 可由整数重数推出密度为 $1$，再用 White 定理得到正则性。因而严格的 $<2$ 对 $\beta=0$ 足以完成该路线；但这不能自动移植到 $\beta>0$。

## 7. 可直接采用的命题表述

对一般 $\beta>0$，建议把命题写为：

**命题（局部加权低密度下的延拓）** 设 $F:\Sigma\times[0,T)\to M^4$ 是闭曲面在紧 Kähler 曲面中的 $\beta$-辛临界曲面梯度流，且 $\cos\alpha\ge\delta>0$。令 $p\ge p_0(\beta,\delta)$。若对每个可能的奇异点 $(X_0,T)$，存在 $r_{X_0}>0$ 使

$$
\Psi_p(X_0,T;T-r_{X_0}^2)<1+\varepsilon_{\rm HLS},
$$

则存在 $\varepsilon>0$，使该流光滑延拓到 $[0,T+\varepsilon)$。

若要保留“加权密度严格小于 $2$”这一表述，则必须把它降格为尚需额外桥接定理的条件，不能在现阶段将其陈述为一般 $\beta>0$ 情形已经证明的充分条件。

## 参考文献

**[1]** X. Han, J. Li and J. Sun, *Gradient Flow for $\beta$-Symplectic Critical Surfaces*, Ann. Inst. H. Poincaré C Anal. Non Linéaire 41 (2024), 1083--1116；尤其 Theorem 3.1、Corollary 4.2、Theorem 5.7 及导言末关于第一类奇点的说明。

**[2]** M.-T. Wang, *Mean Curvature Flow of Surfaces in Einstein Four-Manifolds*, J. Differential Geom. 57 (2001), 301--338；尤其 Proposition 5.2。

**[3]** B. White, *A Local Regularity Theorem for Mean Curvature Flow*, Ann. of Math. 161 (2005), 1487--1519。

**[4]** J. Chen and J. Li, *Singularities of Codimension Two Mean Curvature Flow of Symplectic Surfaces*, arXiv:math/0208227；尤其 Theorem 5.1。
