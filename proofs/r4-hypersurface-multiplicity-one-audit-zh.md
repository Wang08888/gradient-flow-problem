# $\mathbb R^4$ 中嵌入超曲面平均曲率流一重性猜想

> **严格核查报告：公开状态、可证明上界、近似模型与核心障碍**
>
> **结论先行。** 对任意光滑紧致嵌入初始超曲面 $M_0^3\subset\mathbb R^4$，证明其首个奇异时刻的所有切流均为单位重数，仍是 Ilmanen 一重性猜想在高维中的公开情形。当前不能给出无条件证明，也没有已知的、满足题设全部条件的高重数反例。对固定 $M_0$，可以严格证明每个切流正则 sheet 的整数重数满足 $1\le q\le\lfloor\lambda(M_0)\rfloor$。
>
> 若 $V_{-1}^{\infty}=m|\Sigma|$，则有 $mF_{0,1}(\Sigma)=\Theta(x_0,T)\le\lambda(M_0)$，以及更精确的 $m\le\lfloor\lambda(M_0)/F_{0,1}(\Sigma)\rfloor$。

**报告日期：** 2026 年 8 月 11 日\
**核查方式：** Danus 多路证明审计与 verifier 事实图交叉验证；随后逐项复核原始论文和公式。

---

## 摘要

本报告审计下列猜想：由光滑、紧致、无边界、嵌入的 $M_0^3\subset\mathbb R^4$ 出发的最大光滑平均曲率流，在有限首个奇异时刻的任意奇异点、任意抛物放缩序列下所得切流，是否必为单位重数。

审计结论分四层。

| 问题 | 严格结论 |
|---|---|
| 一般 $M^3\subset\mathbb R^4$ 的猜想能否按现有理论证明？ | 不能；截至本报告日期仍是公开问题 |
| 对固定初始面，能否控制重数？ | 能；$q\le\lfloor\lambda(M_0)\rfloor$，光滑整片时有更精确的熵商上界 |
| 是否知道与 $M_0$ 无关的最佳有限上界？ | 不知道；若猜想为真则最佳值是 $1$，但这正是待证内容 |
| 是否有题设类中的高重数反例？ | 没有已知反例；存在任意重数的抽象 Brakke 模型与多种近似模型，但均缺少题设中的至少一项关键性质 |

特别地，初始熵满足 $\lambda(M_0)<2$ 时，整数性立即给出所有切流正则点处重数为 $1$。平均凸或 $\alpha$-Andrews 非坍缩流也已有单位重数结论。另一方面，仅有嵌入性、紧致性、连通性、固定拓扑型或 Type-I 第二基本形估计，都不能通过单纯的紧性论证确定 sheet 数。

## 1. 猜想的准确公开状态

令

$$
M_s^{(i)}=lambda_i
\bigl(M_{T+\lambda_i^{-2}s}-x_0\bigr),
\qquad s<0,
$$

并设其局部 Brakke 极限为 $\mathcal T=\{V_s^\infty\}_{s<0}$。题设要求

$$
\theta^3(\|V_s^\infty\|,x)=1
$$

在每个负时刻、对 $\|V_s^\infty\|$ 几乎处处的正则点成立。

Haslhofer 在 2025 年的综述第 5.2 节把下列陈述明确列为 Conjecture 5.10：嵌入超曲面平均曲率流的所有 blow-up limit 均为一重。该文同时指出，Bamler-Kleiner 在 $\mathbb R^3$ 中的证明依赖纯二维积分估计，处理更高维需要本质上新的思想。因此，本报告所研究的 $M^3\subset\mathbb R^4$ 正是尚未被该定理覆盖的第一个高维超曲面情形。

Bamler-Kleiner 的定理对象是 $\mathbb R^3$ 中的二维曲面流，不能仅把维数符号从 $2$ 换成 $3$ 后用于本题。Li-Wang 在 Type-I **平均曲率**条件下的一重性定理同样只针对 $\mathbb R^3$ 中闭嵌入曲面；其证明中的二维可去奇点和积分控制也不能自动升维。

故本题的正确数学回答不是一份无条件证明，而应是：公开状态判定、可证上界、条件定理、近似模型和缺失桥梁的严格分离。

## 2. 熵给出的无条件重数上界

### 2.1 定义

对三维整数 varifold $V$，定义 Gaussian $F$-泛函

$$
F_{y,\tau}(V)
=
(4\pi\tau)^{-3/2}
\int e^{-|x-y|^2/(4\tau)}\,d\|V\|(x),
\qquad \tau>0.
$$

光滑超曲面 $M$ 的熵为

$$
\lambda(M)=
\sup_{y\in\mathbb R^4,\,\tau>0}F_{y,\tau}(|M|).
$$

Huisken 单调公式给出

$$
\lambda(M_t)\le\lambda(M_0),
\qquad 0\le t<T.
\tag{2.1}
$$

### 2.2 正则 sheet 重数的上界

**定理 2.1。** 设 $V_s^\infty$ 是题设中的任意切流。若 $x$ 是某个切片的正则点，且该点附近

$$
V_s^\infty=q|\Gamma|
$$

其中 $\Gamma$ 是光滑嵌入超曲面，$q\in\mathbb N$，则

$$
1\le q\le\lfloor\lambda(M_0)\rfloor.
\tag{2.2}
$$

**证明。** 熵在平移与伸缩下不变。由 (2.1)，每个重标度切片的熵不超过 $\lambda(M_0)$；局部 varifold 收敛和 Gaussian 截断后令截断半径趋于无穷，得到

$$
\lambda(V_s^\infty)\le\lambda(M_0).
\tag{2.3}
$$

在 $x$ 附近把中心取为 $x$，令尺度 $\tau\downarrow0$。Gaussian 核是近似恒等核，且 $\Gamma$ 在 $x$ 光滑，因此

$$
\lim_{\tau\downarrow0}F_{x,\tau}(V_s^\infty)=q.
$$

由熵是所有中心和尺度的上确界，

$$
q\le\lambda(V_s^\infty)
\le\lambda(M_0).
$$

再用 $q$ 的正整数性即得 (2.2)。证毕。

若 $M_0$ 不连通，上界还可细化：避免原理和缩圆球屏障说明，一个固定局部切流只能由某一个初始连通分支 $C_0^\alpha$ 贡献。因此以上证明中的 $\lambda(M_0)$ 可以替换为 $\lambda(C_0^\alpha)$；特别地，只要每个初始连通分支的熵都小于 $2$，所有切流正则点仍为一重。

### 2.3 光滑 self-shrinker 切片的精确上界

**定理 2.2。** 若

$$
V_{-1}^\infty=m|\Sigma|,
\qquad m\in\mathbb N,
$$

其中 $\Sigma^3\subset\mathbb R^4$ 是非空、光滑、适当嵌入且具有多项式面积增长的 self-shrinker，则

$$
mF_{0,1}(\Sigma)=\Theta(x_0,T)
\le\lambda(M_0),
\tag{2.4}
$$

从而

$$
m\le
\left\lfloor
\frac{\lambda(M_0)}{F_{0,1}(\Sigma)}
\right\rfloor
\le\lfloor\lambda(M_0)\rfloor.
\tag{2.5}
$$

**证明。** Huisken 单调公式在 $(x_0,T)$ 的极限等于 Gaussian density。抛物伸缩不改变对应的 Gaussian 积分，故

$$
\begin{aligned}
\Theta(x_0,T)
&=F_{0,1}(V_{-1}^\infty)\\
&=mF_{0,1}(|\Sigma|).
\end{aligned}
$$

另一方面，定义熵时允许中心 $(x_0,T)$ 所对应的选择，因此单调性给出

$$
\Theta(x_0,T)\le\lambda(M_0).
$$

最后，self-shrinker 的熵在其自然中心和尺度取得，且在任一正则点作小尺度 Gaussian 极限得到密度 $1$，所以

$$
F_{0,1}(\Sigma)=\lambda(\Sigma)\ge1.
$$

代入即得 (2.5)。证毕。

**推论 2.3。** 若 $\lambda(M_0)<2$，则所有切流在其正则部分均为单位重数。特别地，若 $V_{-1}^\infty=m|\Sigma|$，则 $m=1$。

这里必须保留严格不等号。若仅有 $\lambda(M_0)\le2$，上述整数论证只给出 $m\le2$。

若 $\Sigma$ 还是紧致连通的，可以进一步加强。记

$$
\Lambda_3
=\lambda\bigl(S^3_{\sqrt6}\bigr)
=\frac32\sqrt{6\pi}\,e^{-3/2}
\approx1.45265.
$$

**定理 2.4（紧致 shrinker 的改进上界）。** 若定理 2.2 中的 $\Sigma$ 紧致且连通，则

$$
m\le
\left\lfloor\frac{\lambda(M_0)}{\Lambda_3}\right\rfloor.
\tag{2.6}
$$

特别地，若 $\lambda(M_0)<2\Lambda_3\approx2.9053$，则 $m=1$。

**证明。** 紧致连通嵌入超曲面 $\Sigma^3\subset\mathbb R^4$ 由 Jordan-Brouwer 分离定理可定向，故

$$
H_3(\Sigma;\mathbb Z)\cong\mathbb Z.
$$

Hershkovits-White 的 sharp entropy bound 因而给出

$$
F_{0,1}(\Sigma)=\lambda(\Sigma)
\ge\lambda(S^3_{\sqrt6})=\Lambda_3.
$$

与 (2.4) 合并即得 (2.6)。证毕。

## 3. “重数最多是多少”的准确回答

对一个**固定**初始面，当前可无条件证明的数值答案是

$$
m\le
\left\lfloor
\frac{\lambda(M_0)}{F_{0,1}(\Sigma)}
\right\rfloor,
$$

而一般正则 sheet 有 $q\le\lfloor\lambda(M_0)\rfloor$。

若 $\Sigma$ 已知紧致连通，则定理 2.4 还给出更显式的

$$
m\le\left\lfloor\lambda(M_0)/\Lambda_3\right\rfloor.
$$

若要求一个与 $M_0$ 完全无关的常数，则当前理论没有给出已知最佳有限值。不能据此断言不存在 universal bound：若一重性猜想成立，最佳 universal bound 就是 $1$。准确说法是：

1. 实际切流在题设类中的重数上确界目前未知；
2. 已知证明只给出依赖初始熵的上界；
3. 光滑紧致连通嵌入三维超曲面的熵可以任意大，所以熵方法本身不可能产生与初始面无关的常数。

第三点可由一个直接构造看出。取 $m$ 个彼此很近的平行 $S^3$ 副本，在极小区域用细颈依次连接并光滑化。所得超曲面仍可取为光滑、紧致、连通、嵌入且微分同胚于 $S^3$；当副本间距和颈半径趋于零时，varifold 局部收敛到 $m|S^3|$，其某个 Gaussian 积分趋于 $mF(S^3)$。令 $m\to\infty$，初始熵无统一上界。

此构造是初始几何序列，不是一个平均曲率流的有限首奇点切流，因此它只排除“从静态嵌入性或拓扑直接得到统一熵界”的路线，并不反驳一重性猜想。

## 4. 嵌入性和光滑收敛为何不自动给出一重

设 $P\subset\mathbb R^4$ 是一个三维平面，取两张平行图

$$
P_i^+=P+\varepsilon_i\nu,
\qquad
P_i^-=P-\varepsilon_i\nu,
\qquad \varepsilon_i\downarrow0.
$$

每个 $P_i^+\cup P_i^-$ 都是光滑嵌入超曲面，并且每张 sheet 的第二基本形及所有高阶导数都为零；然而

$$
|P_i^+|+|P_i^-|
\longrightarrow2|P|
$$

作为局部 integral varifold 收敛。把两张 sheet 的连接颈放到趋于无穷远的位置，还可以使每个近似超曲面连通，而任意固定紧集仍只看到两张趋于同一支撑的平行图。

所以必须区分：

- **支撑光滑收敛：** 极限支撑是光滑的 $P$；
- **带 $m$ 张图的光滑收敛：** 每张图都光滑趋于 $P$，但 $m$ 可能大于 $1$；
- **单张 degree-one 收敛：** 局部恰好只有一张图，这才直接给出重数 $1$。

Type-I 第二基本形估计

$$
|A|\le\frac{C_A}{\sqrt{T-t}}
\tag{4.1}
$$

在抛物重标度后给出

$$
|A_{M_s^{(i)}}|
\le\frac{C_A}{\sqrt{-s}},
\tag{4.2}
$$

因此在 $s=-1$ 附近的固定负时间区间上有一致曲率界。标准局部紧性定理可以把一个已知具有光滑支撑的 varifold 极限升级为带整数 sheet 数的光滑图形收敛，但 (4.2) 不负责证明 sheet 数等于 $1$。

这也解释了为什么“极限是光滑嵌入平面，所以 density 是 $1$”不是完整论证。若作为 varifold 有

$$
V=m|P|,
$$

则极限支撑仍是光滑嵌入平面，但

$$
\Theta(V,0)=m.
$$

## 5. 一个可严格闭合的最小附加条件

下面给出 Danus 审计中得到的一个清晰条件定理。它刻画高维证明当前缺失的“防止 sheets 在归一化尺度上塌合”的估计。

对 $x\in M_t$，令 $\sigma_M(x,t)$ 为从 $x$ 看见另一个局部分支所需的最小半径；若不存在则取 $+\infty$。记

$$
\rho_{(x_0,T)}(x,t)
=
(4\pi(T-t))^{-3/2}
e^{-|x-x_0|^2/(4(T-t))},
$$

以及 $a_-:=\min\{a,0\}$。

**定理 5.1（Type-I 曲率加对数分离下界）。** 假设 (4.1) 成立，并假设存在 $C<\infty$ 使所有 $t<T$ 均有

$$
\int_{M_t}
\left(
\log\frac{\sigma_M(x,t)}{\sqrt{T-t}}
\right)_-
\rho_{(x_0,T)}(x,t)\,d\mathcal H^3(x)
\ge-C.
\tag{5.1}
$$

设 $t_i=T-\lambda_i^{-2}$，并且

$$
\lambda_i(M_{t_i}-x_0)
\longrightarrow m|\Sigma|
$$

局部 varifold 收敛，其中 $\Sigma$ 非空且光滑嵌入。则该收敛取子列后为带 $m$ 张图的局部光滑收敛，并且 $m=1$。

**证明。** 由 (4.2)，在 $s=-1$ 邻近有统一第二基本形界；结合已给定的有限重 varifold 极限和局部抛物紧性，可取子列得到带 $m$ 张图的光滑收敛。

反设 $m\ge2$。取 $\Sigma$ 上一个 Gaussian 测度为正的紧区域 $K$。在 $K$ 上至少两张相邻图之间的距离 $d_i$ 一致趋于零，因此这些图上相应点的重标度分离半径满足

$$
\lambda_i\sigma_M(x,t_i)\le c,d_i\longrightarrow0.
$$

由于 $\sqrt{T-t_i}=\lambda_i^{-1}$，有

$$
\frac{\sigma_M(x,t_i)}{\sqrt{T-t_i}}
=\lambda_i\sigma_M(x,t_i)
\longrightarrow0.
$$

故该区域上负对数趋于 $-\infty$。光滑图收敛保证该区域的重标度 Gaussian 面积一致下有正下界。先截断负对数，再用 Fatou 引理并令截断高度趋于无穷，得到 (5.1) 左端沿 $t_i$ 趋于 $-\infty$，与统一下界矛盾。因此 $m=1$。证毕。

这一定理不是原猜想的证明，因为当前尚不能从任意紧致嵌入 $M_0^3\subset\mathbb R^4$ 推出 (5.1)。它把缺口精确定位为一个尺度不变的 sheet-separation 积分控制。

## 6. 已证明的一重性子情形

### 6.1 低熵

由推论 2.3，

$$
\lambda(M_0)<2
\quad\Longrightarrow\quad
\text{所有切流正则点重数为 }1.
$$

这是对原命题最直接、完全严格且维数无关的充分条件。

### 6.2 平均凸或 $\alpha$-Andrews 非坍缩

White 的平均凸流结构定理与 Haslhofer-Kleiner 的局部理论适用于本题的维数。对紧致平均凸初始超曲面，在首个奇异点出现的切流是单位权的缩圆球或广义缩圆柱。因而原猜想在此类中成立。

### 6.3 低熵下的通用小扰动

Chodosh-Mantoulidis-Schulze 证明：在 $\mathbb R^4$ 中，熵不超过 $2$ 的闭嵌入超曲面经过任意小的适当光滑扰动后，可使所得流只出现单位重数的球形或圆柱形 generic singularities。这是关于扰动后 generic flow 的结果，不是对给定原始流的无条件证明。

### 6.4 熵与 current 奇偶性

若重标度边界 currents 在光滑双侧极限 $\Sigma$ 的管状邻域内收敛到非零 current，则 varifold 重数 $m$ 必为奇数；偶数层会在定向 current 中相消。结合熵界可得

$$
\lambda(M_0)<3
\quad\text{且 current 极限非零}
\quad\Longrightarrow\quad m=1.
$$

这说明 current 结构能检测奇偶性，但单独不能区分 $1$ 与 $3$。

### 6.5 最终全局有序图收敛到紧致 shrinker

还存在一个不依赖二维拓扑的条件判据。设归一化流在所有充分大的 rescaled time $\tau$ 上，都能写成同一个紧致双侧 self-shrinker $\Sigma_c$ 上的全局有序正规图，并且这些图在 $C^4$ 中趋于零。若至少有上下两张图，令其高度差为 $u_{\rm gap}>0$。两张 rescaled MCF 图的方程相减得到

$$
\partial_\tau u_{\rm gap}
=L_{\Sigma_c}u_{\rm gap}
+P^{ij}\nabla_i\nabla_j u_{\rm gap}
+B^i\nabla_i u_{\rm gap}
+C u_{\rm gap},
$$

其中误差系数随 $\tau\to\infty$ 一致趋于零，而

$$
L_{\Sigma_c}
=\Delta-\frac12\langle x,\nabla\cdot\rangle
+|A|^2+\frac12.
$$

对正 gap 作 Gaussian 加权积分；分部积分后，常数势 $1/2$ 迫使其 Gaussian 质量最终至少指数增长。这与所有图在 $C^4$ 中趋于零矛盾。因此这种**全时间尾部、全局有序、紧致支撑**的收敛必为一重。

这一判据比“取一列时刻光滑收敛”强得多。一般切流紧性只给出子列和局部多图，尚不能自动提供它所要求的全局图结构、时间尾部收敛与统一归一化。

## 7. 任意重数模型与“真正反例”的区别

目前没有已知的光滑、紧致、无边界、嵌入 $M_0^3\subset\mathbb R^4$，其有限首个奇异时刻切流具有重数 $m\ge2$。下面的模型说明哪些弱信息不能排除高重数，但它们都不反驳原猜想。

| 模型 | 可实现重数 | 满足什么 | 缺少什么 |
|---|---:|---|---|
| $m|S^3_{\sqrt{-6s}}|$ | 任意 $m$ | 精确 self-similar integral Brakke flow | 未知是否来自题设单位密度紧流的首奇点 |
| $m$ 个近邻 $S^3$ 加细颈 | 任意 $m$ | 每项光滑、紧致、连通、嵌入，可固定拓扑型 | 只是静态序列，不是同一流的切片 |
| $m$ 个平行超平面的静态流 | 任意 $m$ | 光滑嵌入、单位密度、Brakke 等式 | 非紧致，且通常不连通；只是流的序列 |
| Chen-Sun 例子乘 $\mathbb R$ | $2$ | 实际连通嵌入 $M^3\subset\mathbb R^4$ 流，长时趋于双平面 | 非紧致、无限时间，不是有限首奇点切流 |
| 紧致凸 ancient pancake 的后向 blow-down | $2$ | 单个实际紧致嵌入 ancient flow | 发生在 $t\to-\infty$ 的 blow-down，不是有限首奇点 tangent flow |

圆球还有一个有用的排错计算。若从半径

$$
0<R_1<R_2<\cdots<R_m
$$

的同心圆球并出发，则

$$
r_k(t)^2=R_k^2-6t.
$$

首个奇异时刻 $T=R_1^2/6$ 只有最内球消失。以 $(0,T)$ 放缩时，最内球变为标准缩圆球，其余球半径在重标度后趋于无穷，故该切流仍是一重。不同同心球不会在同一个首奇点简单叠成高重数球。

更一般地，紧致初始超曲面的不同连通分支也不能靠彼此靠近来制造同一局部切流。避免原理保持不同初始分支之间的正距离；再配合缩圆球屏障可证明，在任一固定重标度时空柱内，充分大的放缩至多看见一个初始连通分支。因此潜在高重数必须来自同一个连通分支内部的多 sheet 塌合。

## 8. 高维证明的核心障碍

### 8.1 二维临界积分不能直接升维

对 $n$ 维超曲面作空间伸缩 $M\mapsto\lambda M$，有

$$
\int_{\lambda M}|A|^p\,d\mu
=\lambda^{n-p}
\int_M|A|^p\,d\mu.
$$

二维时 $p=2$ 临界；三维时临界指数变成 $p=3$。Bamler-Kleiner 方法控制坏集、颈区和分离尺度所用的二维积分结构，在 $n=3$ 不再尺度不变。高维需要新的 $L^3$ 型曲率控制、坏集容量估计或等价替代物。

### 8.2 分离函数的微分不等式不够

在多张图区域，最上层与最下层的距离满足线性化平均曲率流方程；适当的分离半径还可满足

$$
(\partial_t-\Delta)\log\sigma\ge0
$$

的弱意义不等式。这个局部不等式本身并不阻止归一化分离趋于零，因为还需要控制非图形区、颈区和时间增长模式。定理 5.1 中的 Gaussian 加权对数下界正是缺失的全局积分输入。

### 8.3 正 Jacobi 场不自动推出稳定性矛盾

多重光滑收敛常产生正的 sheet-gap 函数。形式上线性化后得到 shrinker Jacobi 方程，但“存在正的时间依赖解”不等于 self-shrinker 的 Gaussian $L$-稳定性。圆缩球上存在指数增长的正模态，说明若没有统一归一化或次指数 Gaussian 质量控制，不能直接调用“不存在 $L$-稳定 shrinker”得到矛盾。

### 8.4 varifold 和 current 分别丢失什么

varifold 保留整数重数但丢失定向与 sheet 标签；整数 current 保留定向，却可能让相反定向的邻近 sheets 相消。模 $2$ 信息最多检测重数奇偶，不能由此判定 $m=1$。证明必须增加一个真正的非塌合或分离机制。

### 8.5 Type-I 曲率界只解决紧性，不解决计数

第一类 $|A|$ 界给出重标度曲率与高阶导数紧性；它能证明极限支撑光滑，甚至得到带有限 sheet 数的 $C^\infty$ 收敛。但是 sheet 间距离可以趋于零而每张 sheet 的曲率始终有界，所以这条路线在“$m$ 等于多少”处停止。

## 9. 最终判定

对用户提出的猜想，严格结论如下。

1. **一般命题尚未证明。** 它是 Ilmanen 一重性猜想在 $M^3\subset\mathbb R^4$ 中的公开情形；不能把 $\mathbb R^3$ 曲面定理直接升维。
2. **固定初始面的最佳直接上界来自熵。** 正则 sheet 重数满足 $q\le\lfloor\lambda(M_0)\rfloor$；若 $V_{-1}=m|\Sigma|$，则有精确熵商上界 (2.5)。
3. **没有已知题设类高重数反例。** 抽象 Brakke 流、静态嵌入序列、无限时间极限和 ancient blow-down 可出现任意重数或重数二，但都不是所要求的有限首奇点 tangent flow。
4. **嵌入性不等于极限一重。** 嵌入 sheets 可以在保持曲率有界时塌到同一光滑支撑；光滑支撑与 unit-weight varifold 是不同结论。
5. **一个明确的最小桥梁是尺度不变分离估计。** 例如 (5.1) 的 Gaussian 加权对数分离下界，配合 Type-I 曲率紧性即可严格推出 $m=1$；当前难点是从一般三维嵌入流导出这类估计。

因此，现阶段最准确的研究目标不是声称完成整个猜想，而是证明三维版本的关键分离积分估计，或建立一个可替代它的临界 $L^3$ 曲率与坏集容量理论。

## 参考文献

**[1]** R. Haslhofer, *Mean Curvature Flow through Singularities*, arXiv:2510.01355, Section 5.2, Conjecture 5.10. [arXiv](https://arxiv.org/abs/2510.01355)

**[2]** R. H. Bamler and B. Kleiner, *On the Multiplicity One Conjecture for Mean Curvature Flows of Surfaces*, arXiv:2312.02106. [arXiv](https://arxiv.org/abs/2312.02106)

**[3]** G. Huisken, *Asymptotic Behavior for Singularities of the Mean Curvature Flow*, Journal of Differential Geometry 31 (1990), 285-299. DOI: 10.4310/jdg/1214444099.

**[4]** T. H. Colding and W. P. Minicozzi II, *Generic Mean Curvature Flow I: Generic Singularities*, Annals of Mathematics 175 (2012), 755-833. arXiv:0908.3788.

**[5]** B. White, *The Nature of Singularities in Mean Curvature Flow of Mean-Convex Sets*, Journal of the American Mathematical Society 16 (2003), 123-138. DOI: 10.1090/S0894-0347-02-00406-X.

**[6]** R. Haslhofer and B. Kleiner, *Mean Curvature Flow of Mean Convex Hypersurfaces*, arXiv:1304.0926.

**[7]** O. Chodosh, C. Mantoulidis and F. Schulze, *Mean Curvature Flow with Generic Low-Entropy Initial Data II*, arXiv:2309.03856.

**[8]** H. Li and B. Wang, *On Ilmanen's Multiplicity-One Conjecture for Mean Curvature Flow with Type-I Mean Curvature*, arXiv:1811.08654.

**[9]** H. Li and B. Wang, *The Extension Problem of the Mean Curvature Flow (I)*, arXiv:1608.02832.

**[10]** B. White, *Currents and Flat Chains Associated to Varifolds, with an Application to Mean Curvature Flow*, Duke Mathematical Journal 148 (2009), 41-62; arXiv:0805.2003.

**[11]** J. Chen and A. Sun, *Mean Curvature Flow with Multiplicity 2 Convergence*, arXiv:2312.17457.

**[12]** T. Bourni, M. Langford and G. Tinaglia, *Convex Ancient Solutions to Mean Curvature Flow*, arXiv:1907.03932.

**[13]** O. Hershkovits and B. White, *Sharp Entropy Bounds for Self-Shrinkers in Mean Curvature Flow*, Geometric and Functional Analysis 29 (2019), 757-789; arXiv:1803.00637.

**[14]** Z. Lin and A. Sun, *Bifurcation of Perturbations of Non-Generic Closed Self-Shrinkers*, arXiv:2004.07787.
