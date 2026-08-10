# 局部高斯密度小于 2 与第一类奇点延拓：严格证明及适用边界

## 结论先行

题目中的两个命题只有在区分下列两种流以后才是严格的。

1. 当 Han--Li--Sun 流的参数为 $\beta=0$ 时，方程就是辛曲面的普通平均曲率流。此时，在 Wang Proposition 5.2 的假设上增加“每个候选第一类奇点的局部高斯密度严格小于 $2$”，可以严格补上其证明中单重性的一步，从而推出流越过首奇异时刻光滑延拓。
2. 当 $\beta>0$ 时，Han--Li--Sun 的方程不是平均曲率流，White 的平均曲率流正则性定理不能直接使用。原论文明确把排除该新流的第一类奇点留作后续问题。因此，单写普通高斯密度 $\Theta<2$ 目前不能从该论文推出延拓；可直接严格推出延拓的条件是论文自身的加权量 $\Psi$ 在某一小尺度满足 $\Psi<1+\varepsilon_{\rm HLS}$。

下面分别给出完整命题与证明。

## 1. 记号与局部密度

设 $M^4$ 为紧 Kähler 曲面，并固定等距嵌入 $M\hookrightarrow\mathbb R^N$。令

$$
F:\Sigma\times[0,T)\longrightarrow M
$$

为闭定向曲面的光滑平均曲率流，$T<\infty$ 为首个奇异时刻。记

$$
\eta=*F_t^*\omega=\cos\alpha.
$$

在 $(X_0,T)$ 附近取截断函数 $\psi$，令 $\psi\equiv1$ 于 $X_0$ 的一个较小球内。二维后向热核为

$$
\rho_{X_0,T}(Y,t)
=\frac{1}{4\pi(T-t)}
\exp\!\left(-\frac{|Y-X_0|^2}{4(T-t)}\right).
$$

局部高斯密度定义为

$$
\Theta(X_0,T)
:=\lim_{t\uparrow T}
\int_{\Sigma_t}\psi\,\rho_{X_0,T}\,d\mu_t.
\tag{1.1}
$$

在固定光滑环境流形中，局部 Huisken 单调性保证该极限存在，并且它等于任一切流在 $(0,0)$ 的高斯密度；极限与截断函数在 $X_0$ 附近的具体选择无关。

定义候选第一类奇点集合 $\Sigma_{\mathrm I}$ 为所有满足下列条件的 $(X_0,T)$：存在 $x_j\in\Sigma$、$t_j\uparrow T$，使

$$
F(x_j,t_j)\to X_0,
\qquad |A|(x_j,t_j)\to\infty,
$$

并且流在 $T$ 前满足第一类上界。若全局有

$$
\sup_{\Sigma_t}|A|^2\le \frac{C}{T-t},
\tag{1.2}
$$

则首时刻的每个真正奇点均属于 $\Sigma_{\mathrm I}$。

## 2. 普通辛平均曲率流的严格延拓定理

### 定理 2.1（密度小于 2 的第一类延拓）

设 $M^4$ 为紧 Kähler 曲面，$F:\Sigma\times[0,T)\to M$ 是闭定向曲面的光滑平均曲率流，$T$ 是首个奇异时刻。假设：

1. 存在 $\delta>0$，使 $\eta=*F_t^*\omega\ge\delta$ 于 $\Sigma\times[0,T)$；
2. 存在 $C<\infty$，使第一类估计 (1.2) 成立；
3. 对每个 $(X_0,T)\in\Sigma_{\mathrm I}$，有
   $$
   \Theta(X_0,T)<2.
   \tag{2.1}
   $$

则存在 $\varepsilon>0$，使 $F$ 光滑延拓到 $\Sigma\times[0,T+\varepsilon)$。

### 证明

反设 $T$ 不能延拓。由标准延拓判据，必有

$$
\limsup_{t\uparrow T}\sup_{\Sigma_t}|A|=\infty.
\tag{2.2}
$$

于是可取 $x_j\in\Sigma$、$t_j\uparrow T$ 使曲率趋于无穷。由于 $M$ 紧，取子列后

$$
F(x_j,t_j)\longrightarrow X_0\in M.
$$

由 (1.2)，$(X_0,T)\in\Sigma_{\mathrm I}$。

#### 第一步：第一类切流是整数重平面之和

在 $(X_0,T)$ 作抛物缩放

$$
F_s^\lambda(x)
=\lambda\bigl(F(x,T+\lambda^{-2}s)-X_0\bigr),
\qquad s<0,
\tag{2.3}
$$

并记相应积分 Brakke 子列极限为 $\mathcal T$。第一类界给出缩放后第二基本形式的局部一致控制；Wang Proposition 5.2 中由 Kähler 角演化方程和局部加权单调公式得到的耗散消失说明，在适当时间切片上，极限的角缺陷和均曲率项消失。结合积分紧性，切流的一个非零时间切片具有形式

$$
V=\sum_{j=1}^{J}m_j|P_j|,
\qquad m_j\in\mathbb N,
\tag{2.4}
$$

其中 $P_j\subset T_{X_0}M\simeq\mathbb R^4$ 是经过原点的二维平面；相同平面应先合并其重数。这里真正可由紧性得到的是“有限个整数重平面的和”，而不是未经论证的“单重平面”。条件 $\eta\ge\delta$ 正是 Wang 加权耗散估计中保持一致正性的条件。

#### 第二步：$\Theta<2$ 强制单重

每个二维平面的归一化高斯积分等于 $1$：

$$
\frac1{4\pi}\int_{P_j}e^{-|Y|^2/4}\,d\mathcal H^2(Y)
=\frac1{4\pi}\int_{\mathbb R^2}e^{-|y|^2/4}\,dy
=1.
\tag{2.5}
$$

故由 (2.4) 及高斯积分对测度的线性性，

$$
\Theta(X_0,T)
=\frac1{4\pi}\int e^{-|Y|^2/4}\,d\|V\|(Y)
=\sum_{j=1}^{J}m_j.
\tag{2.6}
$$

右端为正整数。由 (2.1)，它只能等于 $1$。所以 $J=1$、$m_1=1$，即每个这样的切流是单重静态平面，并且

$$
\Theta(X_0,T)=1.
\tag{2.7}
$$

#### 第三步：White 局部正则性排除该点

White 局部正则性定理给出常数 $\varepsilon_W>0$：若某时空点的高斯密度小于 $1+\varepsilon_W$，则该点有一个抛物邻域，其中曲率满足尺度不变上界，因而该点为正则点。由 (2.7)，

$$
\Theta(X_0,T)=1<1+\varepsilon_W,
$$

故 $(X_0,T)$ 是正则点。这与产生 (2.2) 的曲率爆破序列趋向 $(X_0,T)$ 矛盾。

因此 $T$ 时不存在奇点。等价地，$|A|$ 在 $[0,T)$ 上一致有界；否则重复上述取点过程又会得到矛盾。闭曲面的平均曲率流延拓判据遂给出某个 $\varepsilon>0$，使流光滑延拓到 $[0,T+\varepsilon)$。证毕。

### 备注 2.2（阈值的尖锐性）

严格不等式不能换成 $\Theta\le2$。若 $P$ 是一个平面，则 $2|P|$ 的高斯密度恰为 $2$，但它不是单重平面。几何上可用平坦复二维环面中的平坦辛二维环面的二重覆盖实现这一现象；参数域仍可连通。因此“连通浸入”本身也不能代替密度条件。

### 备注 2.3（Wang Proposition 5.2 的准确作用）

Wang 的证明在最后写道极限是 multiplicity one plane，然后调用 White 定理。对一般浸入，前面的“取连通分支”只能说明每个光滑极限分支是平面，并不自动排除多个分支或同一平面的多重覆盖。假设 $\Theta<2$ 通过 (2.6) 精确补上这一处单重性缺口；它比直接假设“切流单重”更内在，也比全局熵小于 $2$ 更局部。

## 3. Han--Li--Sun 一般 $\beta$-梯度流

Han--Li--Sun 的流为

$$
\partial_tF
=f
=\frac{\cos^2\alpha\,H-\beta\sin^2\alpha\,V}
{\cos^2\alpha+\beta\sin^2\alpha},
\qquad \beta\ge0,
\tag{3.1}
$$

其中 $V=\partial_2\alpha\,v_3+\partial_1\alpha\,v_4$。只有 $\beta=0$ 时 (3.1) 才等于 $\partial_tF=H$。

原论文定义

$$
\Psi(X_0,t_0;t)
=\int_{\Sigma_t}\frac{1}{\cos^p\alpha}\,\phi(F),
\rho_{X_0,t_0}(F,t)\,d\mu_t,
\qquad p\ge p_0,
\tag{3.2}
$$

并证明如下两条：

- Corollary 4.2：存在 $\varepsilon_{\rm HLS}>0$，若对某个 $r>0$ 有
  $$
  \Psi(X_0,t_0;t_0-r^2)<1+\varepsilon_{\rm HLS},
  \tag{3.3}
  $$
  则 $(X_0,t_0)$ 为 (3.1) 的正则点；
- Theorem 3.1：若 $|A|$ 一致有界，则 (3.1) 可光滑延拓。

因此可以无条件从该论文得到下述正确版本。

### 定理 3.1（一般 $\beta$-流的论文内延拓准则）

设 $F$ 是 (3.1) 在闭曲面上的光滑解，$T$ 为首个候选奇异时刻，并假设 $\cos\alpha\ge\delta>0$。若对每个可能的奇异空间点 $X_0$，存在一个尺度 $r_{X_0}>0$ 使 (3.3) 对 $(t_0,r)=(T,r_{X_0})$ 成立，则流光滑延拓越过 $T$。

#### 证明

Corollary 4.2 说明每个这样的 $(X_0,T)$ 都是正则点。若 $|A|$ 在 $t\uparrow T$ 时不一致有界，则取曲率爆破点列，并利用 $M$ 的紧性取空间极限 $X_0$；该点同时应为奇点和正则点，矛盾。因此 $|A|$ 一致有界，Theorem 3.1 给出延拓。证毕。

## 4. 为什么一般 $\beta>0$ 时不能把 (3.3) 仅替换为普通 $\Theta<2$

这一点是严格证明中最容易混淆之处。

1. White 定理适用于平均曲率流；当 $\beta>0$ 时，(3.1) 的速度一般不等于 $H$。
2. Han--Li--Sun Theorem 5.7 的正式结论是 $\lambda$-切锥为有限个平面的并，但并未把每个平面表述为相对于原 Kähler 结构的复直线。
3. 若某极限平面的 Kähler 角为常数 $c=\cos\alpha_P\in(0,1]$，它对普通高斯密度的贡献为 $1$，对 (3.2) 的加权贡献却是 $c^{-p}$。所以
   $$
   \Theta<2
   $$
   只强制普通 varifold 为单重平面，并不自动给出
   $$
   \Psi<1+\varepsilon_{\rm HLS}.
   $$
4. 原论文导言明确说明：要排除新流的第一类奇点，还需先推导第二基本形式的演化方程并结合单调公式；该问题留待后续研究。因此不能把 Wang Proposition 5.2 原样移植到 $\beta>0$。

若另加下列桥接假设之一，则 $\Theta<2$ 路线可以闭合：

- 已证明每个相关单重平面满足 $\cos\alpha_P=1$，且加权密度等于切锥的整数重数；或
- 已有适用于 (3.1) 的“普通高斯密度一蕴含正则”定理；或
- 直接把假设加强为 (3.3)，或令加权终端密度严格小于 $1+\varepsilon_{\rm HLS}$。

前两项不是 Han--Li--Sun 2024 论文现成给出的定理；第三项是当前可直接引用且逻辑闭合的版本。

## 5. 两类结论的对应关系

| 对象 | 可用正则性定理 | 密度条件 | 严格结论 |
|---|---|---|---|
| $\beta=0$，普通辛 MCF | White 局部正则性 | 标准局部高斯密度 $\Theta<2$，加上 Wang 的整数平面切流结论 | $\Theta$ 为正整数且小于 $2$，故为 $1$；可延拓 |
| $\beta>0$，Han--Li--Sun 梯度流 | Han--Li--Sun Corollary 4.2 | 某尺度上 $\Psi<1+\varepsilon_{\rm HLS}$ | 正则并由 Theorem 3.1 延拓 |
| $\beta>0$，只知普通 $\Theta<2$ | White 不可直接用 | 只能推出相关积分平面切锥总重数为 $1$ | 尚缺从普通密度一到该流正则性的桥梁 |

## 6. 可直接用于正文的合并表述

如果论文此处讨论的是普通辛平均曲率流，应使用定理 2.1，并把命题写成：

> 设 $F_t:\Sigma\to M^4$ 是闭定向曲面在紧 Kähler 曲面中的辛平均曲率流，$T$ 为首个奇异时刻。若 $*F_t^*\omega\ge\delta>0$、$|A_t|^2\le C/(T-t)$，并且每个候选第一类奇点 $(X_0,T)$ 满足 $\Theta(X_0,T)<2$，则存在 $\varepsilon>0$，使该流光滑延拓到 $[0,T+\varepsilon)$。

如果正文讨论的是一般 $\beta>0$ 梯度流，则应改用定理 3.1 的 $\Psi<1+\varepsilon_{\rm HLS}$ 条件；除非另行证明第 4 节列出的桥接定理，否则不应声称普通 $\Theta<2$ 已经足够。

## 参考文献

**[1]** M.-T. Wang, *Mean Curvature Flow of Surfaces in Einstein Four-Manifolds*, J. Differential Geom. 57 (2001), 301--338，尤其 Proposition 5.2。

**[2]** X. Han, J. Li and J. Sun, *Gradient Flow for $\beta$-Symplectic Critical Surfaces*, Ann. Inst. H. Poincaré C Anal. Non Linéaire 41 (2024), 1083--1116，尤其 Theorems 3.1, 4.1, 5.7 与 Corollary 4.2。

**[3]** B. White, *A Local Regularity Theorem for Mean Curvature Flow*, Ann. of Math. 161 (2005), 1487--1519。
