# Wang Proposition 5.2 中光滑收敛与一重性的严格审计

> **审计对象**：Mu-Tao Wang, *Mean Curvature Flow of Surfaces in Einstein Four-Manifolds*, Section 5, Proposition 5.2，特别是论文第 323--324 页从曲率一致有界到平面切流、Gaussian density 等于 1 的推理。
>
> **审计结论**：第一类曲率界确实给出重标度曲率一致有界；配合高阶导数估计可得到局部光滑子列收敛；极限方程可以推出极限的几何支撑是平面。但是，嵌入性、连通性和光滑支撑收敛本身均不自动确定积分 varifold 的整数重数。原文在“平面支撑”与“multiplicity one”之间需要一个独立的一重性输入。若补充标准 Gaussian density 严格小于 2，或等价的局部单张图收敛，则可严格完成 density 等于 1、White 正则性以及延拓论证。

**报告日期**：2026 年 8 月 11 日  
**验证方式**：Danus 已完成项目事实交叉验证，加上 Wang、Huisken 与 White 原始文献逐项复核。

---

## 摘要

本文审计下面的推理链：

$$
\begin{aligned}
\text{Type-I 曲率界}
&\Longrightarrow \text{重标度曲率及其导数一致有界},\\
&\Longrightarrow \text{光滑收敛到平面},\\
&\Longrightarrow \Theta(y_0,t_0)=1
\Longrightarrow \text{正则并延拓}.
\end{aligned}
$$

精确结论如下。

| 推理步骤 | 审计判定 | 需要的说明 |
|---|---:|---|
| Type-I 界推出重标度后 $|A^\lambda|$ 一致有界 | 成立 | 只在固定负时间紧区间上成立 |
| 高阶导数估计与光滑子列紧性 | 成立 | 依赖 Huisken 型抛物正则性与局部面积控制 |
| 极限方程推出极限支撑为平面 | 成立 | 这是支撑集层面的结论 |
| 光滑平面支撑自动推出 multiplicity one | 不成立 | 必须排除多张 sheets 塌到同一平面 |
| 一重平面推出 Gaussian density 等于 1 | 成立 | $m$ 重平面的 density 等于 $m$ |
| density 等于 1 推出正则并延拓 | 成立 | 使用 White 局部正则性与标准延拓定理 |

因此，本文不否定 Proposition 5.2 的数学结论本身；本文证明的是：**原文所展示的紧性与极限方程尚不足以单独证明 multiplicity one。** 若存在适用于该高余维 Kähler 情形的额外一重性定理，则可以补上缺口；原文所引 Huisken 结果本身没有提供该结论。

## 1. 原命题与关键段落

Wang Proposition 5.2 考虑定向曲面的平均曲率流

$$
F:\Sigma\times[0,t_0)\longrightarrow M^4\hookrightarrow\mathbb R^N,
$$

并假设

$$
\eta_t=*F_t^*\omega>\delta>0,
\qquad
|A_t|^2\leq \frac{C}{t_0-t}.
\tag{1.1}
$$

结论是 $F$ 可以光滑延拓越过 $t_0$。

需要首先强调：论文的一般设定使用的是一族 **immersions**。Proposition 5.2 的正式陈述没有加入 embeddedness；论文在另一个特殊结果 Theorem D 中才明确另外使用 embedded 假设。因此，“流从始至终都是嵌入”若在某个应用中成立，是原命题之外的附加条件。

原文证明在选取 $\lambda_i\to\infty$ 及 $s_i\to-1$ 后写道：第一类界使 $\Sigma_{s_i}^{\lambda_i}$ 的第二基本形一致有界；按 Huisken [3] 的方法，高阶协变导数也有界；因此

$$
\Sigma_{s_i}^{\lambda_i}\longrightarrow \Sigma_{-1}^{\infty}
\tag{1.2}
$$

光滑收敛。随后原文从极限方程得到 $F^\perp=0$，并称极限是 multiplicity-one plane，进而计算 Gaussian integral 为 1。

审计的核心问题正是：由 (1.1)--(1.2) 和嵌入性，是否已经严格得到单位重数？

## 2. 第一类曲率界在抛物放缩下的精确含义

以 $(y_0,t_0)$ 为中心定义抛物放缩

$$
F^\lambda(x,s)
=\lambda\bigl(F(x,t_0+\lambda^{-2}s)-y_0\bigr),
\qquad s<0.
\tag{2.1}
$$

记放缩后的切片为 $\Sigma_s^\lambda$。长度放大 $\lambda$ 倍时，第二基本形范数缩小 $\lambda^{-1}$ 倍，故

$$
|A^\lambda|^2(x,s)
=\lambda^{-2}|A|^2
\left(x,t_0+\frac{s}{\lambda^2}\right).
\tag{2.2}
$$

由 (1.1)，只要 $t_0+s/\lambda^2\in[0,t_0)$，便有

$$
\begin{aligned}
|A^\lambda|^2(x,s)
&\leq
\lambda^{-2}
\frac{C}{t_0-(t_0+s/\lambda^2)}\\
&=\frac{C}{-s}.
\end{aligned}
\tag{2.3}
$$

因此对每个

$$
[a,b]\Subset(-\infty,0),
$$

当 $\lambda$ 充分大时，

$$
\sup_{s\in[a,b]}|A^\lambda|^2
\leq\frac{C}{-b}.
\tag{2.4}
$$

这一计算完全正确，但它只控制归一化尺度上的负时间区间。它并不说明原流在 $t\uparrow t_0$ 时曲率有界，因为

$$
|A|^2(x,t)
=\lambda^2|A^\lambda|^2(x,s)
$$

仍允许以 $(t_0-t)^{-1}$ 的速度发散。标准缩圆球和缩圆柱都是第一类奇点，其负时间切流光滑，但原中心仍然奇异。因此，“放缩后光滑”本身不是原点正则性的证明。

## 3. 高阶导数估计和“光滑收敛”的准确范畴

在 (2.4) 的曲率控制、适当局部面积控制和抛物内部估计下，可以得到

$$
|\nabla^k A^{\lambda_i}|
\leq C_{k,K}
\tag{3.1}
$$

在固定负时间和空间紧集上的一致估计。于是可以选取子列，使局部曲面在重参数化后以 $C^\infty$ 方式收敛。

Huisken 1990 的 Proposition 2.3 给出重标度第二基本形高阶导数估计；Proposition 3.4 给出到一个非空光滑浸入极限的子列收敛。两者都没有陈述：相关面积测度或 Brakke 切流以单位权重收敛。

这里必须区分三种陈述：

1. **支撑集光滑**：极限的几何支撑是光滑子流形；
2. **多张图的光滑收敛**：在极限平面上方存在 $m$ 张互不相交的图，每张都光滑趋于零；
3. **单张 degree-one 光滑收敛**：整个相关局部曲面恰好是一张图，没有其他 sheet。

第二种情形的极限支撑仍是光滑平面，但相应 integral varifold 的重数是 $m$。只有第三种陈述直接给出 multiplicity one。曲率及其导数有界只提供局部图半径与逐张紧性，不负责证明 sheet 数等于一。

## 4. 极限方程确实推出平面支撑

Wang 的加权单调性论证在所选时刻 $s_i\to-1$ 给出

$$
Q:=
(h_{31k}-h_{42k})^2
+(h_{32k}+h_{41k})^2
=0
\tag{4.1}
$$

于光滑极限切片。利用第二基本形的对称性，可从 (4.1) 得到

$$
H=0,
\qquad
\nabla\eta=0.
\tag{4.2}
$$

另一方面，Huisken 单调公式的等号情形给出 shrinker 方程

$$
H+\frac12F^\perp=0.
\tag{4.3}
$$

结合 (4.2)--(4.3)，得到

$$
F^\perp=0.
\tag{4.4}
$$

式 (4.4) 表示位置向量处处切于极限支撑，因而极限支撑沿径向伸缩不变。一个连通、无边界、在锥顶光滑的二维锥支撑必为一个二维线性平面 $P$。所以

$$
\operatorname{spt}V_{-1}=P
\tag{4.5}
$$

这一支撑层面的结论成立。

但是 integral varifold 的完整结论一般只能写成

$$
V_{-1}=m|P|,
\qquad m\in\mathbb N,
\tag{4.6}
$$

而 (4.1)--(4.5) 不决定整数 $m$。事实上，对任意 $m\ge2$，静态 varifold $m|P|$ 同样满足

$$
A=H=F^\perp=\nabla\eta=Q=0.
$$

因此，极限方程不可能单独排除多重平面。

## 5. 嵌入性为何不自动给出单位重数

### 5.1 连通嵌入曲面的两层塌缩模型

取 $P=\{z=0\}\subset\mathbb R^3$，并令

$$
\varepsilon_i\downarrow0,
\qquad
R_i\uparrow\infty.
$$

构造一个旋转对称的光滑嵌入球面 $\Gamma_i$，使其在圆柱 $r\le R_i$ 内恰好由两个平坦圆盘组成：

$$
z=\varepsilon_i,
\qquad
z=-\varepsilon_i.
\tag{5.1}
$$

在 $R_i\le r\le R_i+L$ 内，用一个固定的光滑过渡轮廓把两张盘分别缓慢抬高和降低到 $z=1$ 与 $z=-1$，再用平移到半径约 $R_i+L$ 的固定光滑外侧轮廓将两层连接。所有过渡轮廓可预先固定，端点取无限阶平坦，故对每个 $k$ 存在与 $i$ 无关的 $C_k$ 使

$$
\sup_{\Gamma_i}|\nabla^kA_{\Gamma_i}|\le C_k.
\tag{5.2}
$$

每个 $\Gamma_i$ 都光滑、紧致、连通、嵌入，并微分同胚于同一个 $S^2$。但是对任意固定紧集 $K\subset\mathbb R^3$，当 $i$ 充分大时，$K$ 看不到外侧连接部分，只看到 (5.1) 的两张平坦图。

令 $\Phi$ 是二维 varifold 空间上的任意紧支撑连续测试函数。当 $i$ 足够大时，连接部分在 $\Phi$ 的空间支撑之外，故

$$
\begin{aligned}
&\int_{\Gamma_i}
\Phi(x,T_x\Gamma_i)\,d\mathcal H^2(x)\\
&=\int_P\Phi(y+\varepsilon_i\nu,P)\,d\mathcal H^2(y)
+\int_P\Phi(y-\varepsilon_i\nu,P)\,d\mathcal H^2(y),
\end{aligned}
\tag{5.3}
$$

其中积分实际只发生在 $\Phi$ 的紧支撑内。由一致连续性和控制收敛，

$$
|\Gamma_i|\longrightarrow2|P|
\quad\text{局部 varifold 收敛}.
\tag{5.4}
$$

这说明即使具有下列全部性质：

- 每个近似曲面都是嵌入的；
- 曲面连通并来自固定紧拓扑类型；
- 第二基本形及所有高阶导数一致有界；
- 极限支撑是光滑嵌入平面；

仍然可能出现重数二。嵌入性只说明两个 sheets 在每个有限 $i$ 时不相交；它不提供与 $i$ 无关的正 sheet separation。

### 5.2 该模型的严格适用范围

上述 $\Gamma_i$ 是一个几何紧性反例序列，而不是已经构造出的某一个紧平均曲率流趋近奇点的时间切片。因此它证明的是：

> 仅凭 Wang 段落中列出的曲率紧性、连通性和嵌入性，不能推出 multiplicity one。

它不证明 Proposition 5.2 的结论为假，也不证明存在满足全部 symplectic 流条件的多重平面奇点。若平均曲率流方程、拓扑或辛结构还隐含一个独立的一重性机制，则必须把该机制作为单独定理写出并验证。

局部辛条件本身并不排除多重数：若 $P\subset\mathbb C^2$ 是复平面，则每一张平移平面都满足 $\eta=1$，而 $m|P|$ 仍满足所有平坦极限方程。因此 Kähler 角正下界不能仅通过极限方程决定 $m$。

## 6. Gaussian density 精确记录重数

二维后向热核在重标度时间 $s=-1$ 上为

$$
G(x)=\frac1{4\pi}e^{-|x|^2/4}.
\tag{6.1}
$$

对任意二维线性平面 $P$，取极坐标可得

$$
\begin{aligned}
\int_PG\,d\mathcal H^2
&=\frac1{4\pi}
\int_0^{2\pi}\int_0^\infty
e^{-r^2/4}r\,dr\,d\theta\\
&=1.
\end{aligned}
\tag{6.2}
$$

若切流为 $V_{-1}=m|P|$，则

$$
\Theta(y_0,t_0)
=\int G\,d\|V_{-1}\|
=m\int_PG\,d\mathcal H^2
=m.
\tag{6.3}
$$

所以正确的逻辑是

$$
\text{平面支撑 + 重数 }m
\Longrightarrow
\Theta=m,
\tag{6.4}
$$

而不是“平面支撑自动推出 $\Theta=1$”。

这也直接解释 White 正则性为什么需要一重性。White 定理在 Gaussian density ratio 充分接近 1 时给出局部曲率控制。若 $m\ge2$，则 (6.3) 位于正则阈值之外，不能调用该定理。

## 7. 加入 density 小于 2 后的严格延拓定理

### 定理 7.1（平面切流与低密度条件下的延拓）

设

$$
F:\Sigma\times[0,t_0)\longrightarrow M^4
$$

是紧定向曲面在实四维 Kähler 流形中的光滑平均曲率流，并满足

$$
*F_t^*\omega\ge\delta>0,
\qquad
|A_t|^2\le\frac{C}{t_0-t}.
\tag{7.1}
$$

假设 Wang 的放缩与极限方程论证适用于每个终端支撑点，并推出每个相关 tangent flow 的支撑为一个二维平面。再假设每个候选点满足标准 Gaussian density 的尖锐界

$$
\Theta(y_0,t_0)<2.
\tag{7.2}
$$

则存在 $\varepsilon>0$，使平均曲率流光滑延拓到

$$
[0,t_0+\varepsilon).
$$

#### 证明

固定一个终端支撑点 $(y_0,t_0)$。由 (7.1) 的第一类界、局部面积控制、高阶导数估计和子列紧性，取得 tangent flow。按定理假设，其时间 $-1$ 切片支撑是平面 $P$。积分 varifold 的整数性给出

$$
V_{-1}=m|P|,
\qquad m\in\mathbb N.
\tag{7.3}
$$

由 Gaussian 积分的缩放不变性和 (6.3)，

$$
\Theta(y_0,t_0)=m.
\tag{7.4}
$$

结合 (7.2)，正整数 $m$ 满足 $m<2$，故

$$
m=1,
\qquad
\Theta(y_0,t_0)=1.
\tag{7.5}
$$

令 $\varepsilon_{\rm W}>0$ 为 White 局部正则性常数。由

$$
1<1+\varepsilon_{\rm W},
$$

White 定理给出 $(y_0,t_0)$ 邻域内的尺度不变曲率控制，故该点正则。

对每个终端支撑点重复上述论证，可得所有终端支撑点正则。由于 $\Sigma$ 紧致，取有限个正则抛物邻域覆盖流在 $t_0$ 附近的终端支撑，从而得到

$$
\sup_{\Sigma\times[t_0-\tau,t_0)}|A|<\infty
\tag{7.6}
$$

对某个 $\tau>0$ 成立。再结合早期紧时间区间上的光滑性，得到

$$
\sup_{\Sigma\times[0,t_0)}|A|<\infty.
$$

标准平均曲率流延拓定理遂给出某个 $\varepsilon>0$，使流光滑延拓至 $[0,t_0+\varepsilon)$。证毕。

### 备注 7.2（最小的缺失桥梁）

在已经证明切流是整数重平面的前提下，(7.2) 是排除 $m\ge2$ 的自然尖锐数值条件。还可以用下列任一条件替代：

1. tangent flow 已知为 unit-weight plane；
2. 放缩切片在每个固定紧集上恰好是一张 degree-one 正规图；
3. 面积测度或 varifold 已知收敛到 $|P|$；
4. 另有一个确实适用于二维曲面在实四维 Kähler 流形中之平均曲率流的一重性定理。

现代文献中，嵌入平均曲率流的一重性本身通常是深刻定理，而不是嵌入性的形式推论。例如 Bamler--Kleiner 的结果针对 $\mathbb R^3$ 中嵌入曲面，不能不经论证直接移植到这里的高余维情形。

## 8. 若“光滑收敛”明确是单张收敛，则原计算成立

为说明充分条件，设在每个紧集 $K\Subset P$ 上，整个相关局部切片最终恰好是一张正规图

$$
X_i(p)=p+u_i(p),
\qquad
\|u_i\|_{C^k(K)}\longrightarrow0
\quad\text{对每个 }k.
\tag{8.1}
$$

其面积 Jacobian $J_i$ 一致趋于 1。对紧支撑连续函数 $\phi$，面积公式给出

$$
\int_{\Sigma_i}\phi\,d\mathcal H^2
=\int_P\phi(X_i(p))J_i(p)\,d\mathcal H^2(p)
\longrightarrow
\int_P\phi(p)\,d\mathcal H^2(p).
\tag{8.2}
$$

如果再有由单调公式提供的一致 Gaussian 尾部控制，则可以把紧支撑截断移除并得到

$$
\int_{\Sigma_i}G\,d\mathcal H^2
\longrightarrow
\int_PG\,d\mathcal H^2=1.
\tag{8.3}
$$

所以用户提出的“直接计算积分得到 density 1”在 **单张 degree-one 收敛已经被证明** 时完全正确。问题不在 Gaussian 积分计算，而在原文所引曲率紧性尚未证明“恰好一张”。

## 9. 为什么在尚未确定是奇点的 $(y_0,t_0)$ 处放缩

抛物放缩

$$
D_\lambda(y,t)
=\bigl(\lambda(y-y_0),\lambda^2(t-t_0)\bigr)
\tag{9.1}
$$

只是以一个候选时空点为中心的坐标和尺度变换，并不要求该点预先已知为奇点。其用途是诊断该点的局部几何：

- 若 $(y_0,t_0)$ 是正则支撑点，则放缩极限是其切平面的 multiplicity-one 静态流，density 为 1；
- 若该点不在终端支撑附近，放缩极限为空流，density 为 0；
- 若该点是奇点，放缩可能得到非平凡 shrinker，或得到具有更高整数重数的平坦切流。

Wang 的证明正是对任意候选 $y_0$ 放缩，试图从 density 得到正则性，从而反证不存在奇点。若一开始就假设该点正则，整个 blow-up 与 White 正则性步骤将成为循环论证。

## 10. 与 weighted Gaussian density 的关系

本文第 7 节使用的是标准、非加权 Gaussian density。若使用加权密度

$$
\Theta^w=\int w\,G\,d\|V\|,
$$

则必须检查权重。

- 若 $w\ge1$，例如某些 $\cos^{-p}\alpha$ 权重，则 $m\ge2$ 会强迫 $\Theta^w\ge2$；因此 $\Theta^w<2$ 可以排除多重数。但是还需验证 tangent density 与该加权量的极限识别。
- 若 $w=1-\eta$，则在全纯平面上 $w=0$，即使是 $m$ 重平面也可能给出零加权量；此时“weighted density 小于 2”完全不能排除 $m\ge2$。

因此任何以 weighted density 补全 Wang 论证的版本，都必须写清楚权重、极限存在性、切流识别以及它与标准 Gaussian density 的关系。

## 11. 最终判定

对用户提出的论证，最终结论可以概括为：

1. “Type-I 导致重标度第二基本形一致有界”正确；
2. “高阶导数有界并可抽取光滑极限”在标准局部紧性假设下正确；
3. “极限方程使极限支撑成为光滑平面”正确；
4. “由于每个原切片嵌入，所以该平面自动一重”不成立；
5. “若已经证明一重，则 Gaussian integral 为 1，White 正则性给出延拓”正确。

因此，原证明所缺的最小桥梁是 **unit multiplicity**，或等价的 **局部单张 degree-one 图收敛**。嵌入性和连通性本身不是这座桥梁。

## 参考文献

**[1]** M.-T. Wang, *Mean Curvature Flow of Surfaces in Einstein Four-Manifolds*, Journal of Differential Geometry 57 (2001), 301--338. DOI: 10.4310/jdg/1090348113; arXiv: math/0110019.

**[2]** G. Huisken, *Asymptotic Behavior for Singularities of the Mean Curvature Flow*, Journal of Differential Geometry 31 (1990), 285--299. DOI: 10.4310/jdg/1214444099.

**[3]** B. White, *A Local Regularity Theorem for Mean Curvature Flow*, Annals of Mathematics 161 (2005), 1487--1519. DOI: 10.4007/annals.2005.161.1487.

**[4]** H. Li and B. Wang, *The Extension Problem of the Mean Curvature Flow (I)*, arXiv:1608.02832.

**[5]** R. H. Bamler and B. Kleiner, *On the Multiplicity One Conjecture for Mean Curvature Flows of Surfaces*, arXiv:2312.02106.
