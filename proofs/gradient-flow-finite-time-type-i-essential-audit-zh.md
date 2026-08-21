# $L_\beta$ 梯度流的有限时奇性与 Type-I essential 性

## 原命题的否定、严格的条件化定理与截至 2026 年的文献审计

**对象：** X. Han, J. Li, J. Sun, *Gradient flow for $\beta$-symplectic critical surfaces*（AIHP C, 2024）中的流 (1.1)  
**审计日期：** 2026 年 8 月 21 日  
**核验方法：** Danus 多角色独立审查；原论文逐页核对；出版社、DOI、arXiv 与所给 *Extrinsic Geometric Flows* 原文交叉检索

---

## 摘要

本文审查两个要求：

1. 证明 Han–Li–Sun 的 $L_\beta$ 梯度流必在有限时间爆破；
2. 证明该梯度流是 “Type I essential”。

严格结论是：**这两个无条件命题都不能成立。** 第一条被驻定全纯曲线直接反驳；原论文定理 1.5 还给出一整类非驻定初值的全局存在与收敛。第二条在语法上也需修正：*Type-I* 是有限时奇点的曲率上界类型，而 *type-I essential* 在 Andrews–Chow–Guenther–Langford 的定义中是一个时空点列的性质，不是整条流的性质。更重要的是：当 $\beta=0$ 时该流就是辛平均曲率流，Chen–Li 与 Wang 已在相应假设下证明它**不产生 Type I 奇点**；当 $\beta>0$ 时，Han–Li–Sun 明确把第二基本形式演化方程和 Type I 排除留作后续问题。

本文随后给出两个可完全证明的替代结果。

- 若能在能量次水平集上建立统一的梯度耗散间隙 $D_\beta\ge d_0>0$，则最大光滑时间必为有限，并且 $|A|$ 必爆破。
- 若有限最大时间 $T$ 已知，并补充最大曲率微分不等式
  $$D^+Q\le C(Q+1)^2,\qquad Q(t)=\max_{\Sigma_t}|A|^2,$$
  则得到必要的下爆破率 $Q(t)\ge c/(T-t)$。若再假定 Type I 上界 $Q(t)\le C_I/(T-t)$，取每时刻曲率最大点便得到 type-I essential 点列。

这些条件把三个不同问题清楚分开：**是否在有限时间奇异、奇异是否为 Type I、以及所选点列是否 essential。**

## 1. 流、能量与延拓准则

令 $(M^4,\bar g,J,\omega)$ 为 Kähler 曲面，$F_t:\Sigma^2\to M$ 为闭定向曲面的光滑辛浸入，Kähler 角由

$$
F_t^*\omega=\cos\alpha\,d\mu_t,
\qquad \cos\alpha>0
$$

定义。对 $\beta\ge0$，Han–Li–Sun 考察

$$
L_\beta(F)=\int_\Sigma \cos^{-\beta}\!\alpha\,d\mu
$$

的负梯度流

$$
\partial_tF=f
=\frac{\cos^3\!\alpha\,H-
\beta\bigl(J(J\nabla\cos\alpha)^\top\bigr)^\perp}
{\cos\alpha\bigl(\cos^2\!\alpha+\beta\sin^2\!\alpha\bigr)}.
\tag{1.1}
$$

原论文第 3 节还将其写成

$$
f=\frac{\cos^2\!\alpha\,H-\beta\sin^2\!\alpha\,V}
{\cos^2\!\alpha+\beta\sin^2\!\alpha},
\tag{1.2}
$$

其中 $V=(\partial_2\alpha)v_3+(\partial_1\alpha)v_4$（在适配正交标架中）。当 $\beta=0$ 时，(1.1) 就是通常的辛平均曲率流 $\partial_tF=H$。

沿光滑解有严格的能量恒等式

$$
\frac{d}{dt}L_\beta(F_t)
=-(\beta+1)\int_{\Sigma_t}
\frac{\cos^2\!\alpha+\beta\sin^2\!\alpha}
{\cos^{\beta+2}\!\alpha}|f|^2\,d\mu_t.
\tag{1.3}
$$

记右端正量为

$$
D_\beta(t):=-\frac{d}{dt}L_\beta(F_t)\ge0.
\tag{1.4}
$$

原论文证明：辛性在光滑存在期间保持；在每个有限时间区间上 $\cos\alpha$ 有正下界。其定理 3.1 给出延拓准则：若最大光滑区间为 $[0,T)$ 且

$$
\sup_{0\le t<T}\max_{\Sigma_t}|A|^2<\infty,
\tag{1.5}
$$

则流可光滑延拓越过 $T$。因此，对有限最大时间只能推出

$$
\limsup_{t\uparrow T}Q(t)=\infty,
\qquad Q(t):=\max_{\Sigma_t}|A|^2.
\tag{1.6}
$$

注意 (1.6) 是**定性爆破**，不包含任何 $(T-t)^{-1}$ 量级信息。

## 2. 第一项要求为何为假：显式驻定反例

### 定理 2.1（无条件有限时间爆破命题不成立）

对每个 $\beta\ge0$，存在紧 Kähler 曲面中的闭嵌入辛曲面，使 (1.1) 的解在所有 $t\ge0$ 光滑存在且 $|A|\equiv0$。所以不能证明“所有 $L_\beta$ 梯度流都在有限时间爆破”。

### 证明

取平坦椭圆曲线

$$
E=\mathbb C/(\mathbb Z+i\mathbb Z)
$$

和紧平坦 Kähler 曲面 $M=E\times E$。令

$$
\Sigma=E\times\{0\}\subset M
$$

并取自然包含 $F_0:\Sigma\hookrightarrow M$。乘积 Levi-Civita 联络保持两个因子的切丛分解，所以对 $X,Y\in T\Sigma$，$\bar\nabla_XY$ 仍切于第一因子。因而

$$
A(X,Y)=(\bar\nabla_XY)^\perp=0,
\qquad H=\operatorname{tr}A=0.
$$

$\Sigma$ 是复曲线。取复定向后 $J(T\Sigma)=T\Sigma$，故

$$
\cos\alpha=1,
\qquad \sin\alpha=0,
\qquad \nabla\cos\alpha=0.
$$

代入 (1.1)，分子为零、分母为一，所以 $f=0$。于是

$$
F(x,t)=F_0(x),\qquad t\in[0,\infty)
$$

是驻定光滑解，且 $Q(t)=0$。这直接否定普遍有限时间爆破命题。$\square$

同样可以取 $(M,\Sigma)=(\mathbb{CP}^2,\mathbb{CP}^1)$ 配 Fubini–Study 结构。更一般地，任意全纯曲线由 $\omega$ 校准，故是极小曲面；它对所有 $\beta$ 都是 $\beta$-辛临界曲面，从而给出驻定解。

### 2.2 原论文自身给出的非驻定全局解

Han–Li–Sun 定理 1.5 证明：若环境是紧的正标量曲率 Kähler–Einstein 曲面，而且闭辛初始曲面满足

$$
\cos\alpha>1-\varepsilon_0,
$$

则对每个 $\beta\ge0$，流全局存在并在无穷时趋于全纯曲线。因此，无条件有限时奇性不仅被一个平衡点反驳，还与论文的稳定性主定理直接冲突。

## 3. Type I 与 type-I essential：必须区分的两个量词

*Extrinsic Geometric Flows* 第 11.5 节是在欧氏超曲面平均曲率流

$$
X:M^n\times[0,T)\to\mathbb R^{n+1}
$$

的语境中定义这些概念。

### 定义 3.1（Type I / Type II 奇点）

有限时奇异解称为 Type I，若

$$
\sup_{M\times[0,T)}(T-t)|II|^2<\infty;
\tag{3.1}
$$

若该上确界为无穷，则称为 Type II。

### 定义 3.2（type-I essential 点列）

先假设解具有 Type I 奇点。若 $t_j\uparrow T$ 且

$$
\sqrt{T-t_j}\,|II|(x_j,t_j)\ge c>0,
\tag{3.2}
$$

则点列 $(x_j,t_j)$ 称为 type-I essential；若左端趋于零，则称为 type-I inessential。

所以“这个流是 type-I essential”不是该书的原始定义。合乎语法的命题应是：

> 该流在 $T$ 发生 Type I 奇点，并存在一个 type-I essential 点列。

该书的这一节以余维一为背景；对当前余维二曲面，Smoczyk 的高余维 MCF 综述使用相同的 essential 爆破条件 $|A|^2(x_j,t_j)\ge\delta/(T-t_j)$。因此本文只把 (3.2) 当作**曲率尺度定义**移植过来，不把书中依赖余维一的 self-shrinker 分类定理一并移植。

还要注意两层逻辑互不包含：

- Type I 条件 (3.1) 是**曲率上界** $Q(t)\le C_I/(T-t)$；
- essential 条件 (3.2) 是沿某点列的**曲率下界**。

单有上界不自动给出下界；单有下界也不能排除 $Q(t)$ 以 $(T-t)^{-2}$ 等更快速度增长，从而成为 Type II。

## 4. 第二项要求在已知理论中的真实状态

### 4.1 $\beta=0$：已知结论与要求相反

当 $\beta=0$ 时，(1.1) 化为辛平均曲率流。Chen–Li（2001）和 Wang（2001）在各自论文的假设下独立证明辛流不产生 Type I 奇点。Wang 的结论适用于四维 Kähler–Einstein 背景中的紧辛曲面；Chen–Li 的定理 4.7 使用其文中的曲率与 Kähler 角假设。

因此在这些标准假设下：若最大时间 $T<\infty$，可能的奇性只能是 Type II，而不可能是 Type I，更谈不上从一个 Type I 奇点抽取 type-I essential 点列。

### 4.2 $\beta>0$：原论文明确没有完成 Type I 分类

Han–Li–Sun 证明了：

- 辛性保持；
- 加权单调公式；
- $\varepsilon$-正则性；
- 非空 $\lambda$-切锥是有限个平面的并；
- 全纯曲线附近的全局存在与收敛。

但论文在定理 1.5 后明确说明：要定义有限时奇性的类型，首先需要推导第二基本形式的演化方程；将来再结合单调公式考察 Type I 的排除。这意味着从该论文不能推出：

$$
Q(t)\le \frac{C}{T-t},
\qquad
Q(t)\ge \frac{c}{T-t},
\qquad\text{或无 Type I 奇点。}
$$

截至本报告检索日期，在所检索的一手来源中没有发现已经补全一般 $\beta>0$ 情形上述缺口的后续定理。这个表述是检索结论，而非“不存在任何论文”的逻辑证明。

### 4.3 $\lambda$-切锥不是自动可替换的 MCF 切流

原论文以

$$
F_\lambda(x,s)=\lambda\bigl(F(x,T+\lambda^{-2}s)-X_0\bigr)
\tag{4.1}
$$

进行抛物放缩，并证明相应非空 $\lambda$-切锥是有限平面并。这个结论非常重要，但不能仅凭“支撑是平面”得到 Type I 矛盾，原因包括：

1. 论文首先得到的是测度/varifold 层面的平坦切锥，而 essential 条件是标记点处的点态曲率下界；
2. 需要统一高阶导数估计，才能把点态曲率传到光滑极限；
3. 需要控制放缩中心，使 essential 点在极限坐标中不逃向无穷远；
4. 多重平面或多个相交平面不能直接触发密度接近 $1$ 的正则性定理；
5. 对 $\beta>0$ 的流，不能未经证明套用纯 MCF 的 self-shrinker 切流结论。

一个简单的静态序列说明“平坦 varifold 极限 + $|A|$ 一致有界”仍不够。取非零 $\phi\in C_c^\infty(\mathbb R^2)$，满足 $\nabla\phi(0)=0$、$\nabla^2\phi(0)\ne0$，令

$$
u_i(x)=\varepsilon_i^2\phi(x/\varepsilon_i),
\qquad \varepsilon_i\downarrow0.
$$

其图像以单重 varifold 和 $C^1$ 收敛到平面，$|A_i|$ 一致有界，但 $A_i(0)$ 不趋于零，因为 $\nabla^2u_i(0)=\nabla^2\phi(0)$；同时三阶导数为 $O(\varepsilon_i^{-1})$。因此高阶/抛物紧性不是可省略的技术细节。

## 5. 怎样添加条件才能严格迫使有限最大时间

下面给出一个只用能量恒等式、拓扑辛面积和延拓准则即可闭合的充分条件。

### 定理 5.1（统一耗散间隙推出有限最大时间）

设 $F_t$ 是 (1.1) 的闭辛光滑解，最大光滑区间为 $[0,T_{\max})$。记

$$
\Omega:=\int_\Sigma F_0^*\omega>0.
$$

假设存在 $d_0>0$，使得沿全部光滑时刻

$$
D_\beta(t)
=(\beta+1)\int_{\Sigma_t}
\frac{\cos^2\!\alpha+\beta\sin^2\!\alpha}
{\cos^{\beta+2}\!\alpha}|f|^2\,d\mu_t
\ge d_0.
\tag{5.1}
$$

则

$$
T_{\max}\le \frac{L_\beta(F_0)-\Omega}{d_0}<\infty.
\tag{5.2}
$$

并且

$$
\limsup_{t\uparrow T_{\max}}\max_{\Sigma_t}|A|^2=\infty.
\tag{5.3}
$$

### 证明

因为 $d\omega=0$ 且 $F_t$ 是同一个浸入的光滑同伦，

$$
\int_\Sigma F_t^*\omega=\int_\Sigma F_0^*\omega=\Omega.
\tag{5.4}
$$

又因 $0<\cos\alpha\le1$、$\beta\ge0$，逐点有

$$
\cos^{-\beta}\!\alpha\ge1\ge\cos\alpha.
$$

所以

$$
L_\beta(F_t)
\ge\operatorname{Area}(\Sigma_t)
\ge\int_{\Sigma_t}\cos\alpha\,d\mu_t
=\Omega.
\tag{5.5}
$$

由 (1.3) 和 (5.1)，对每个 $t<T_{\max}$，

$$
L_\beta(F_t)
=L_\beta(F_0)-\int_0^tD_\beta(s)\,ds
\le L_\beta(F_0)-d_0t.
\tag{5.6}
$$

联立 (5.5)–(5.6) 得

$$
t\le\frac{L_\beta(F_0)-\Omega}{d_0}.
$$

若 $T_{\max}=\infty$，取任意大的 $t$ 即矛盾，故 (5.2) 成立。若 (5.3) 不成立，则 $|A|$ 在 $[0,T_{\max})$ 一致有界，原论文定理 3.1 将流延拓越过最大时间，矛盾。$\square$

### 5.2 怎样把 (5.1) 写成几何假设

(5.1) 是沿轨道的动力学条件。一个更结构化、但仍很强的版本是：在由初值可达的能量次水平集

$$
\mathcal S(F_0,\delta)
=\left\{F:\ \Omega\le L_\beta(F)\le L_\beta(F_0),\ 
\min_\Sigma\cos\alpha\ge\delta\right\}
$$

上假设没有 $\beta$-临界曲面，也没有 Palais–Smale 退化，并且存在统一梯度间隙

$$
\inf_{F\in\mathcal S(F_0,\delta)}
(\beta+1)\int_{\Sigma}
\frac{\cos^2\!\alpha+\beta\sin^2\!\alpha}
{\cos^{\beta+2}\!\alpha}|f|^2\,d\mu
\ge d_0>0.
\tag{5.7}
$$

若轨道保持在该集合内，则定理 5.1 立即适用。驻定全纯曲线说明，任何足以推出有限时奇性的条件都必须排除 $f=0$ 及其附近可能使耗散趋零的轨道。

必须强调：本报告没有把 (5.7) 声称为最弱初值条件。它是一个可检验逻辑、证明完整的充分条件；从简单的拓扑类型或初始 Kähler 角推出 (5.7) 是另一个尚未解决的强问题。

## 6. 怎样添加条件才能得到 essential 点列

有限时延拓失败只给出 $Q(t)$ 无界。要得到抛物尺度下界，需要一个曲率增长控制。

### 引理 6.1（反向 ODE 爆破率）

设 $Q:[0,T)\to[0,\infty)$ 局部绝对连续，$T<\infty$，且

$$
\limsup_{t\uparrow T}Q(t)=\infty.
$$

若几乎处处有

$$
Q'(t)\le aQ(t)^2+bQ(t)+c,
\qquad a,b,c\ge0,
\tag{6.1}
$$

记 $K=a+b+c$，则 $K>0$，并且

$$
Q(t)+1\ge\frac1{K(T-t)}.
\tag{6.2}
$$

特别地，当 $T-t\le1/(2K)$ 时，

$$
Q(t)\ge\frac1{2K(T-t)}.
\tag{6.3}
$$

### 证明

若 $K=0$，则 $Q'\le0$，与 $Q$ 无界矛盾。令 $Y=Q+1>0$。由于 $Q\ge0$，

$$
Y'=Q'\le aQ^2+bQ+c\le K(Q+1)^2=KY^2.
$$

故几乎处处

$$
\left(\frac1Y\right)'=-\frac{Y'}{Y^2}\ge-K.
$$

固定 $t<T$ 并取 $t<s<T$，积分得

$$
\frac1{Y(s)}\ge\frac1{Y(t)}-K(s-t).
$$

由 $\limsup Q=\infty$，可取 $s_j\uparrow T$ 使 $Y(s_j)\to\infty$。令 $j\to\infty$，得到

$$
0\ge\frac1{Y(t)}-K(T-t),
$$

即 (6.2)。若 $T-t\le1/(2K)$，则

$$
Q(t)=Y(t)-1
\ge\frac1{K(T-t)}-1
\ge\frac1{2K(T-t)}.
$$

引理得证。$\square$

### 定理 6.2（有限奇性 + 曲率微分不等式 + Type I 上界推出 essential 点列）

设 $F_t$ 是 (1.1) 的闭辛光滑解，$[0,T)$ 为有限最大区间。假设：

1. $Q(t)=\max_{\Sigma_t}|A|^2$ 局部绝对连续，并满足
   $$D^+Q(t)\le C(Q(t)+1)^2;\tag{6.4}$$
2. 奇性为 Type I，即
   $$Q(t)\le\frac{C_I}{T-t}.\tag{6.5}$$

则对任意充分靠近 $T$ 的 $t_j\uparrow T$，取 $x_j\in\Sigma$ 使

$$
|A|^2(x_j,t_j)=Q(t_j),
$$

便有

$$
\frac1{\sqrt{2C}}
\le\sqrt{T-t_j}\,|A|(x_j,t_j)
\le\sqrt{C_I}.
\tag{6.6}
$$

因此 $(x_j,t_j)$ 是适配于该余维二 $L_\beta$ 流的 type-I essential 点列。

### 证明

由延拓准则，有限最大时间蕴含 $\limsup_{t\uparrow T}Q(t)=\infty$。令 $Y=Q+1$。由 (6.4)，在几乎处处可微的时刻有 $Y'\le CY^2$；完全重复引理 6.1 的倒数积分论证，先得

$$
Q(t)+1=Y(t)\ge\frac1{C(T-t)}.
$$

故当 $T-t\le1/(2C)$ 时，

$$
Q(t)\ge\frac1{2C(T-t)}
$$

（常数可按采用的写法重新命名）。在最大点 $x_j$ 开平方即得 (6.6) 左端；(6.5) 给出右端。左端正的统一常数正是 essential 条件。$\square$

### 6.3 这一结论没有证明什么

定理 6.2 没有从原论文现有结论推出 (6.4) 或 (6.5)：它精确列出了缺失条件。

- (6.4) 是从第二基本形式演化方程、统一抛物性与最大值原理通常希望得到的估计；Han–Li–Sun 正是把该演化方程留作后续工作。
- (6.5) 本身就是 Type I 假设，不能从下爆破率推出。
- 对 $\beta=0$，在 Chen–Li/Wang 的辛 MCF 假设下，(6.5) 与无 Type I 定理冲突，所以定理 6.2 的前提不会同时成立。

## 7. 若目标其实是“排除 Type I”，还缺哪些桥梁

可能的反证框架是：假定 $\beta>0$ 流在 $T$ 为 Type I；用定理 6.2 型估计选取 essential 点；以 $\lambda_j=(T-t_j)^{-1/2}$ 放缩。由尺度关系

$$
|A_{\lambda_j}|^2=\lambda_j^{-2}|A|^2,
$$

原时刻 $t_j$ 对应 $s=-1$，且

$$
|A_{\lambda_j}|(x_j,-1)\ge c>0.
\tag{7.1}
$$

若同时能证明放缩流在标记点附近局部光滑收敛到一张平面，那么极限曲率应为零，与 (7.1) 矛盾。要把这个框架写成定理，至少需补充：

1. 适用于 (1.1) 的 $|A|^2$ 演化/最大值不等式；
2. Type I 放缩后的统一局部高阶曲率估计；
3. essential 点与切锥中心之间的有界距离控制；
4. 指向光滑极限的局部紧性，而不只是 Radon 测度收敛；
5. 极限与原论文 $\lambda$-切锥的识别；
6. 多重性或局部高斯密度控制，使标记点位于单张光滑平面上。

因此“切锥是平面并”是反证的重要终点之一，却不是全部证明。

## 8. 结论矩阵：原要求、反例与最小证明包

| 目标 | 原论文现有结论是否足够 | 严格结论 | 可用的附加条件包 |
|---|---|---|---|
| 所有初值有限时爆破 | 否 | 假；全纯曲线驻定，且定理 1.5 有全局收敛解 | 必须排除临界点与低耗散轨道；例如统一耗散间隙 (5.1)/(5.7) |
| 有限最大时间时 $|A|$ 爆破 | 是 | 真，由定理 3.1 的逆否命题 | 只需 $T<\infty$ |
| 必有 $(T-t)^{-1}$ 下爆破率 | 否 | 不能由定性延拓推出 | 补 (6.4) 或等价的点态曲率演化不等式 |
| 奇性必为 Type I | 否 | $\beta=0$ 的标准辛 MCF 反而排除 Type I；$\beta>0$ 未证明 | 必须直接证明或假设 (6.5) |
| 存在 type-I essential 点列 | 否 | 它是点列性质，不是流的标签 | $T<\infty$ + (6.4) + Type I 上界；取曲率最大点 |
| 用平坦切锥排除 Type I | 否 | 当前仍有光滑紧性、中心、重数等缺口 | 增加第 7 节的六项桥梁条件 |

## 9. 文献核验与边界

### 9.1 直接依据

[1] X. Han, J. Li, J. Sun, “Gradient flow for $\beta$-symplectic critical surfaces,” *Ann. Inst. H. Poincaré C Anal. Non Linéaire* 41 (2024), 1083–1116. DOI: [10.4171/AIHPC/100](https://doi.org/10.4171/AIHPC/100). [EMS 出版社全文](https://ems.press/journals/aihpc/articles/12362953).

[2] B. Andrews, B. Chow, C. Guenther, M. Langford, *Extrinsic Geometric Flows*, Graduate Studies in Mathematics 206, AMS, 2020. DOI: [10.1090/gsm/206](https://doi.org/10.1090/gsm/206). 第 11.5 节定义 Type I/II 与 type-I essential 点列。

[3] J. Chen, J. Li, “Mean Curvature Flow of Surface in 4-Manifolds,” *Adv. Math.* 163 (2001), 287–309. DOI: [10.1006/aima.2001.2008](https://doi.org/10.1006/aima.2001.2008). [出版社页面](https://www.sciencedirect.com/science/article/pii/S0001870801920080).

[4] M.-T. Wang, “Mean Curvature Flow of Surfaces in Einstein Four-Manifolds,” *J. Differential Geom.* 57 (2001), 301–338. DOI: [10.4310/jdg/1090348113](https://doi.org/10.4310/jdg/1090348113). [arXiv 原稿](https://arxiv.org/abs/math/0110019).

### 9.2 相邻的一手结果

[5] X. Han, J. Li, “The Mean Curvature Flow Approach to the Symplectic Isotopy Problem,” *J. Eur. Math. Soc.* 12 (2010), 505–527. DOI: [10.4171/JEMS/207](https://doi.org/10.4171/JEMS/207). 它给出接近全纯曲线时的辛 MCF 长期存在与收敛。

[6] X. Han, J. Li, “Singularities of Symplectic and Lagrangian Mean Curvature Flows,” *Front. Math. China* 4 (2009), 283–296. DOI: [10.1007/s11464-009-0018-4](https://doi.org/10.1007/s11464-009-0018-4). [arXiv](https://arxiv.org/abs/math/0611857).

[7] X. Han, J. Li, “The Second Type Singularity of Symplectic and Lagrangian Mean Curvature Flows,” [arXiv:0711.4566](https://arxiv.org/abs/0711.4566). 该路线研究可能的 Type II 爆破模型，不等于构造出原 $L_\beta$ 流的有限时 Type II 例子。

[8] X. Han, J. Li, J. Sun, “Gradient Flow of the $L_\beta$-Functional,” *Commun. Math. Res.* 37 (2021), 113–140. DOI: [10.4208/cmr.2020-0037](https://doi.org/10.4208/cmr.2020-0037). 该早期工作建立短时存在、延拓框架及 $\beta=1$ 的相关单调性。

[9] G. Huisken, “Asymptotic behavior for singularities of the mean curvature flow,” *J. Differential Geom.* 31 (1990), 285–299. [MPG 公开版本](https://pure.mpg.de/pubman/item/item_153359). 这是经典 MCF 的 Type I 放缩与自相似模型来源；它不能不加证明地移植到 $\beta>0$ 的修改流。

[10] B. White, “A local regularity theorem for mean curvature flow,” *Ann. of Math.* 161 (2005), 1487–1519. DOI: [10.4007/annals.2005.161.1487](https://doi.org/10.4007/annals.2005.161.1487). 高斯密度接近一的正则性是处理平面切流的重要工具，但需要满足其精确的 MCF 与密度假设。

[11] K. Smoczyk, “Mean curvature flow in higher codimension—introduction and survey,” in *Global Differential Geometry*, Springer Proceedings in Mathematics 17 (2012), 231–274. [arXiv:1104.3222](https://arxiv.org/abs/1104.3222). Definition 3.14 给出高余维 essential 爆破点列的曲率下界版本。

[12] J. Chen, X. Han, J. Li, J. Sun, “Tangent Flows of Symplectic Mean Curvature Flows,” *J. Math. Study* 59 (2026), 40–59. DOI: [10.4208/jms.v59n1.26.03](https://doi.org/10.4208/jms.v59n1.26.03). 该最新工作研究的是普通辛 MCF（即 $\beta=0$）的切流与 Type I$^*$，不能视作一般 $\beta>0$ 流的第二基本形式演化或 Type I 分类。

## 10. Danus 复核记录

本报告使用 7 个 Danus 工作代理并行审查：3 个 high 代理分别负责原论文逐条核对、有限时条件与曲率 ODE；4 个 xhigh 代理分别负责 $\beta=0$ 文献、$\beta>0$ 缩放缺口、截至 2026 年的后续检索和反例/逻辑审计。关键的驻定反例和反向 ODE 引理均经独立 verifier 判定为正确；未被原论文或一手文献支持的部分均保留为“附加假设”或“开放缺口”，没有包装成已知定理。

## 11. 最终结论

原要求不能按无条件形式证明。最精确的替代陈述是：

> **修正版。** 对 Han–Li–Sun 的 $L_\beta$ 梯度流，普遍有限时间爆破为假。若其最大光滑时间 $T<\infty$，则第二基本形式必无界。若进一步有 $D^+Q\le C(Q+1)^2$，则 $Q(t)\ge c/(T-t)$；若再有 Type I 上界 $Q(t)\le C_I/(T-t)$，则曲率最大点构成 type-I essential 点列。有限最大时间本身可由统一耗散间隙 $D_\beta\ge d_0>0$ 充分保证。对 $\beta=0$ 的标准辛 MCF，既有理论排除 Type I；对一般 $\beta>0$，Type I 分类或排除仍需要第二基本形式演化和光滑放缩紧性等新输入。

这一区分避免了三个常见的逻辑错误：把全局梯度流误认为必定有限时爆破，把 Type I 上界误认为 essential 下界，以及把平坦 varifold 切锥误认为已经得到带标记点曲率收敛的单重光滑平面。
