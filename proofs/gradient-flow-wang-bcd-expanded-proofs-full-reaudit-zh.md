# HLS 梯度流 Wang 型 B、C、D 报告的逐证明再审计

## 对全部公式链、附加条件、环境分类、覆盖度与反例的独立复核

**被审计文件**　`gradient-flow-wang-bcd-expanded-proofs-and-d-manifold-generalization-zh.pdf`  \
**对象**　$\beta>0$ 的 Han--Li--Sun（HLS）$L_\beta$ 负梯度流  \
**解的范畴**　首个奇异时刻以前的紧致经典光滑浸入解  \
**审计方法**　原文公式复算、Danus 七单元独立核验、反例搜索、量词与尺度审计  \
**日期**　2026 年 8 月 23 日

---

## 0. 总判定

### 0.1 审计等级

本文使用四种判定：

- **通过**：结论及证明链成立，仅可能有无损的记号省略；
- **补细节后通过**：命题成立，但原报告没有证明某个标准而非平凡的步骤；
- **修正后通过**：原文字面陈述有错误或条件不足，必须替换为本文给出的版本；
- **仅为说明**：只能说明某种逻辑危险，不能作为 HLS 流中的反例。

### 0.2 逐节总表

| 原报告部分 | 判定 | 本次审计的关键结论 |
|---|---|---|
| §1.1 速度与能量 | 通过 | $f_\beta$ 分解、第一变分、加权范数等价均正确 |
| §1.2 角下界 | 修正记号后通过 | 下界只在空间最小点成立；应定义右下 Dini 导数并作 ODE 比较 |
| §2 B 型定理 | 修正两尺度后通过 | HLS Corollary 4.2 有 $0<r<\rho$ 两个尺度；原报告把外围尺度误缩成了 $r$ |
| §3.1 高阶估计 | 原证有缺口；加条件后通过 | HLS 主符号是法丛耦合系统，不能直接写成标量 $a^{ij}$；需另验 Bernstein 能量层级 |
| §3.2 $L^2\to L^\infty$ | 修正排字后通过 | 原式 (3.19) 漏写反斜线；另可加强为 $|f_\beta|\le2\sqrt2|A|$，无需角下界 |
| §3.3 LS 锁定 | 原 LS 输入不足；加条件后通过 | 须指定解析梯度映射、弱目标空间、Fredholm 指标 $0$、范数比较及正常图规范 |
| §4 C 型定理 | 原条件不足；修订后通过 | 除注入半径桥梁外，还须加入 Bernstein 层级，并精确化 LS 的 Banach/Fredholm 输入 |
| §5.1 产品双校准 | 通过 | 任意紧有向曲面乘积都有两张相反定向平行 Kähler 形式 |
| §5.2 正 Einstein 分类 | 通过 | 在两张形式均为全局张量时，紧致连通环境确为同尺度 $S^2\times S^2$ |
| §5.3 局部产品 | 修正后通过 | 没有全局投影时不能陈述“一层图”；只能谈平行分布或叶空间 |
| §6.1 任意法向流 | 通过 | 面积变分项与 Weingarten 切向项精确抵消 |
| §6.2 MCF 双角方程 | 通过 | 曲率系数 $A_K,B_K$ 及条件 (6.20) 正确 |
| §6.3 HLS 余项 | 修正一句后通过 | 应有 $\mathcal D_\omega H=\Delta\eta+$ MCF 反应项；$\mathcal R_\pm$ 含 $\nabla A$ 且无符号 |
| §6.4 余项机制 | 通过但属于假设 | 余项吸收条件是充分条件，不是 HLS 原文的自动结论 |
| §7 抽象 D | 补全算子与正则性后通过 | covering、logistic、斜率、有限长度与光滑收敛链成立；需显式假设 (G1a) |
| §8.1--8.2 | 通过 | 单连通基底给一层图；Jacobian 恒等式正确 |
| §8.3 弱端点 | 修正后通过 | $J=-1$ 的决定性问题是 $c=0$ 与 PDE 退化；不能笼统声称积分必发散 |
| §9 时间重参数 | 通过 | 空间常角给严格正的时间速度，且 $\int_0^\infty a=\infty$ |
| §10.1、10.3、10.4、10.6、10.7 | 通过 | 反例或抽象模型完成其声明的逻辑任务 |
| §10.2 覆盖例 | 修正后通过 | 原例不是嵌入；本文补入真正的嵌入 $d$ 层投影例 |
| §10.5 集中例 | 仅为说明 | 原文没有构造 HLS 解，只说明没有尺度桥梁时 $L^2$ 不控制 $L^\infty$ |

因此，原报告的主干可以保留为一组**条件性定理**，但“所有证明均无跳步”不成立：B 必须恢复双尺度；C 必须新增 Bernstein 层级并精确化 LS 输入；D 必须显式保留高阶正则性与 HLS 余项假设。此外还要修正 §8.3、§10.2、§10.5 的逻辑等级。

---

## 1. 第 1 节：速度、能量与角下界

令

$$
c=\cos\alpha>0,\qquad s=\sin\alpha,
\qquad D=c^2+\beta s^2,
$$

并令

$$
V=(e_2\alpha)v_3+(e_1\alpha)v_4.
$$

### 1.1 速度分解的逐项检查

HLS 速度为

$$
f_\beta=\frac{c^2H-\beta s^2V}{D}.
\tag{A1}
$$

为核查这里没有漏掉一个 $c$，在 HLS 适配标架中

$$
\begin{aligned}
Je_1&=ce_2+sv_3,&
Je_2&=-ce_1-sv_4,\\
Jv_3&=-se_1+cv_4,&
Jv_4&=se_2-cv_3.
\end{aligned}
\tag{A1a}
$$

由 $\nabla c=-s\nabla\alpha$ 直接计算

$$
\bigl(J(J\nabla c)^\top\bigr)^\perp
=cs^2\bigl[(e_2\alpha)v_3+(e_1\alpha)v_4\bigr]
=cs^2V.
\tag{A1b}
$$

把 (A1b) 代回 HLS 原始速度

$$
\frac{c^3H-\beta\bigl(J(J\nabla c)^\top\bigr)^\perp}{cD}
$$

正好得到 (A1)。

于是

$$
\begin{aligned}
f_\beta-H
&=\frac{c^2H-\beta s^2V-(c^2+\beta s^2)H}{D}\\
&=-\frac{\beta s^2}{D}(H+V).
\end{aligned}
\tag{A2}
$$

令 $b_\beta=\beta s^2/D$，便得

$$
\boxed{f_\beta=H-b_\beta(H+V).}
\tag{A3}
$$

每个系数和幂次均与 HLS 流方程一致，故原报告 (1.3)--(1.6) **通过**。

### 1.2 第一变分与耗散恒等式

HLS 第一变分外部输入是

$$
dL_\beta(F)[Z]
=-(\beta+1)\int_\Sigma
\frac{D}{c^{\beta+2}}\langle f_\beta,Z\rangle d\mu.
\tag{A4}
$$

定义

$$
\langle Z_1,Z_2\rangle_{W,F}
=(\beta+1)\int_\Sigma
\frac{D}{c^{\beta+2}}\langle Z_1,Z_2\rangle d\mu,
\tag{A5}
$$

则沿 $\partial_tF=f_\beta$，链式法则直接给

$$
\frac d{dt}L_\beta(F_t)
=-\|f_\beta(F_t)\|_{W,t}^2.
\tag{A6}
$$

若 $c\ge\delta>0$，则

$$
\min\{1,\beta\}\le D\le\max\{1,\beta\},
\qquad
1\le c^{-\beta-2}\le\delta^{-\beta-2},
$$

所以

$$
(\beta+1)\min\{1,\beta\}\|Z\|_2^2
\le\|Z\|_W^2
\le(\beta+1)\max\{1,\beta\}\delta^{-\beta-2}\|Z\|_2^2.
\tag{A7}
$$

原报告 (1.7)--(1.14) **通过**。注意 (A4) 是原论文输入；报告证明的是从 (A4) 到 (A6)--(A7) 的应用。

### 1.3 明确定义 Dini 导数后的角下界

原报告写 $D^-m(t)$，却没有说明方向和上下极限。这里令

$$
m(t)=\min_{x\in\Sigma}c(x,t),
\qquad
D_+m(t)=\liminf_{h\downarrow0}
\frac{m(t+h)-m(t)}h .
\tag{A8}
$$

必须注意：所需不等式只在 $c(\cdot,t)$ 的空间最小点成立，不能把它未经证明地升级为全空间的标量抛物不等式。设 $x\in\Sigma$ 是该时刻的最小点。若 $0<c(x,t)<1$，则 $\nabla c=0$ 推出 $\nabla\alpha=0$，因而 $V=0$；若 $c=1$，同一结论由角方程的连续延拓取得。HLS 角演化式在此点给

$$
\begin{aligned}
\partial_tc(x,t)
&\ge \Delta c(x,t)
-K_1\frac{c^2s^2}{D}\\
&\ge-\frac{K_1}{\beta}c(x,t),
\qquad
K_1\ge\sup_M|\operatorname{Ric}_M|,
\end{aligned}
\tag{A9}
$$

其中用了 $\Delta c(x,t)\ge0$、$D\ge\beta s^2$ 和 $c^2\le c$；当 $s=0$ 时曲率项本身为零。

现取实现上述下极限的序列 $h_j\downarrow0$，并令 $x_j$ 是 $t+h_j$ 时刻的最小点。紧致性允许再取子列使 $x_j\to x_\infty$；连续性说明 $x_\infty$ 是 $t$ 时刻的最小点。又因为

$$
\frac{m(t+h_j)-m(t)}{h_j}
\ge
\frac{c(x_j,t+h_j)-c(x_j,t)}{h_j},
$$

令 $j\to\infty$ 并结合 (A9)，得到

$$
D_+m(t)\ge-\frac{K_1}{\beta}m(t).
\tag{A9a}
$$

最后，经典流在任意紧时间段上光滑，故

$$
|m(t)-m(s)|
\le\sup_{x\in\Sigma}|c(x,t)-c(x,s)|
\le C|t-s|.
$$

所以 $m$ 局部 Lipschitz，因而绝对连续；在几乎处处的可微时刻，(A9a) 就是 $m'+(K_1/\beta)m\ge0$。乘以积分因子并积分可得

$$
\boxed{
\min_{\Sigma_t}c
\ge e^{-K_1t/\beta}\min_{\Sigma_0}c.}
\tag{A10}
$$

又因 $c^{-\beta}\ge1$ 且 (A6) 给出 $L_\beta$ 单调不增，

$$
\operatorname{Area}(\Sigma_t)
\le L_\beta(F_t)
\le L_\beta(F_0).
\tag{A11}
$$

所以原报告 (1.17)--(1.19) 的结论正确；严格版本应把未定义的 $D^-$ 替换为上述 $D_+$ 及其最小点证明。

---

## 2. 第 2 节：B 型低密度延拓

### 2.1 外部输入的逻辑地位

本节使用两个外部定理：

1. 若 $\sup_{[0,T)}|A|<\infty$，则 HLS 流延过 $T$；
2. HLS Corollary 4.2：在角下界、允许的 $p$ 和两个尺度 $0<r<\rho$ 下，若流在外围柱 $P(X_0,t_0;8\rho)$ 的 $t<t_0$ 部分光滑，正常坐标与截断合法，且中心密度 $\Psi_p(X_0,t_0;t_0-r^2)<1+\varepsilon$，则

   $$
   \sup_{P(X_0,t_0;r/2)}|A|\le C_0/r.
   \tag{B0}
   $$

它们不是报告自行证明的内容。审计只检查后续应用有没有越过这些输入的量词。

### 2.2 命题 2.1 的终端覆盖论证

由 (A10)，对 $0\le t<T$ 有统一下界

$$
c(\cdot,t)\ge
e^{-K_1T/\beta}\min_{\Sigma_0}c=: \delta_T>0.
\tag{B1}
$$

若每个 $X\in M$ 有 $r_X>0$ 使

$$
\Psi_p(X,T;T-r_X^2)<1+\varepsilon_{\rm HLS},
\tag{B2}
$$

原报告把外围尺度写成了 $r_X$，并不精确。正确应用是固定

$$
\rho=\rho_*>r_X
$$

作为 HLS 外尺度；假设 $8\rho_*<R_{\rm cut}$ 且 $(8\rho_*)^2<T$ 保证外柱合法。于是 Corollary 4.2 给

$$
|A(q,t)|\le C_{\rm HLS}/r_X
\tag{B3}
$$

当 $F_t(q)\in B_{r_X/2}(X)$ 且 $T-r_X^2/4<t<T$。

球族 $\{B_{r_X/4}(X)\}_{X\in M}$ 覆盖紧致 $M$。取有限子覆盖 $X_1,\ldots,X_N$，并令

$$
\tau=\min_i r_i^2/4,
\qquad C_T=\max_i C_{\rm HLS}/r_i.
\tag{B4}
$$

任意 $t\in(T-\tau,T)$、$q\in\Sigma$ 均落在某个内球，因此 (B3) 给 $|A(q,t)|\le C_T$。早期紧时间段由经典光滑性控制，故延拓准则适用。该证明的空间覆盖、时间交集和常数量词均正确，判定为 **通过**。

这里 $T$ 不需要是已有时间片；$\Psi_p(X,T;T-r^2)$ 只使用 $T-r^2<T$ 的曲面。必须保留外尺度 $\rho_*$ 的柱不越过 $t=0$，并把原报告“闭外围柱位于已有经典流区域”改成“其 $t<T$ 部分光滑”。命题 2.1 经此两尺度修正后通过。

### 2.3 定理 2.2 的未知终点尺度

定义

$$
r_S(t)=\min\left\{r_S,\frac{\sqrt t}{32}\right\}.
$$

则

$$
(8r_S(t))^2\le64\frac{t}{32^2}=\frac t{16}<t,
\tag{B5}
$$

为满足原定理的严格 $r<\rho$，在每个中心取

$$
\rho_S(t)=2r_S(t).
$$

则

$$
t-(8\rho_S(t))^2
=t-256r_S(t)^2
\ge\frac34t>0.
\tag{B5a}
$$

选择一个明确定义的统一正常坐标半径 $r_{\rm H}$，并要求 $16r_S<r_{\rm H}$，即可保证外空间球合法。原报告使用更强的 $r_S<r_{\rm H}/32$ 也足够，但必须先定义 $r_{\rm H}$。若反设 $T_{\max}=T<\infty$，取 $S>T$；在 $T/2\le t<T$ 上

$$
r_S(t)\ge
\min\left\{r_S,\frac{\sqrt{T/2}}{32}\right\}=:r_*>0.
\tag{B6}
$$

在中心 $(F_t(x),t)$ 应用正则性，中心自身属于结论柱，故

$$
|A(x,t)|\le C_{\rm HLS}/r_*
\qquad(T/2\le t<T).
\tag{B7}
$$

再与 $[0,T/2]$ 上的经典界合并即可延拓。原证明在补入 $\rho_S(t)=2r_S(t)$ 的外尺度后 **通过**，但条件非常强：它要求每个已有中心、每个已有正时间都满足相同的低密度阈值；报告没有证明这种密度条件由普通几何假设自动产生。

---

## 3. 第 3 节：高阶正则性、$L^2$ 升级与 LS 锁定

### 3.1 引理 3.1：原来的标量 Bernstein 证明不能成立

在 $c\ge\delta$ 的 Grassmann 紧子集上，HLS 速度确实对第二基本形代数线性：

$$
f_\beta=P(T\Sigma)A.
\tag{C1}
$$

但这并不推出原报告 (3.4) 所写的标量主系数 $a^{ij}$。HLS 的符号计算给出的是作用在法丛分量上的耦合椭圆系统；一般形状为

$$
(\mathcal LA)^{\mathsf A}
=\mathsf a^{ij\mathsf A}{}_{\mathsf B}
\nabla_i\nabla_jA^{\mathsf B}+\text{低阶项},
\tag{C2}
$$

而不是 $a^{ij}\nabla_i\nabla_jA^{\mathsf A}$。即使系统满足 Legendre--Hadamard 强椭圆性，一般抛物系统也没有作用于 $|\nabla^mA|^2$ 的标量最大值原理。因此原报告从 (3.4) 直接写出 (3.6)--(3.7) 的步骤并非“少写交换项”，而是一个真正的证明缺口。

一个可直接核验、并足以恢复结论的安全条件如下。

**标量 Bernstein 能量层级条件。** 存在同一个标量算子

$$
\mathscr P
=\partial_t-a^{ij}\nabla_i\nabla_j-X^i\nabla_i,
\qquad
\lambda g^{ij}\le a^{ij}\le\Lambda g^{ij},
\qquad |X|\le B,
\tag{C3}
$$

使对 $u_m:=|\nabla^mA|^2$、每个 $m\ge0$ 都有

$$
\mathscr Pu_m
\le-\lambda u_{m+1}
+C_m(1+u_m)
+P_m(u_0,\ldots,u_{m-1}),
\tag{C4}
$$

其中 $P_m$ 是固定的非负多项式；并且所有系数界在所考察的滑动时间区间上一致。这个条件可以来自另外完成的系统能量配方，也可以由一个带统一常数的规范化抛物 Schauder 理论替代，但它**不能**只由“$c\ge\delta$ 且符号椭圆”一句自动获得。

现在严格证明 (C3)--(C4) 的确给出原引理结论。以 $u_0=|A|^2\le K_0^2$ 为归纳起点。假设 $u_0,\ldots,u_{m-1}$ 在 $t\ge t_0+\tau/2$ 上已有统一界；于是 (C4) 对 $m,m-1$ 化为

$$
\mathscr Pu_m\le-\lambda u_{m+1}+C_mu_m+C,
\qquad
\mathscr Pu_{m-1}\le-\lambda u_m+C.
\tag{C5}
$$

取

$$
0<\sigma\le\min\left\{\frac\tau2,1\right\},
\qquad
K=\frac{2+C_m\sigma}{\lambda},
$$

并在任意滑动区间 $[s,s+\sigma]$ 上令

$$
Q=(t-s)u_m+Ku_{m-1},
\qquad s\ge t_0+\tau/2.
\tag{C5a}
$$

由 (C5)，

$$
\begin{aligned}
\mathscr PQ
&\le
\bigl[1+C_m(t-s)-K\lambda\bigr]u_m
-\lambda(t-s)u_{m+1}+C(1+K+\sigma)\\
&\le-u_m+C'.
\end{aligned}
\tag{C5b}
$$

若 $Q$ 的时空最大值在 $t=s$，则由 $u_{m-1}$ 的归纳界控制；若在 $t>s$，标量抛物最大值原理给 $0\le\mathscr PQ$，所以该点 $u_m\le C'$。后一情形中 $u_{m-1}$ 已有统一界，故最大点的 $Q\le\sigma C'+K\sup u_{m-1}$；两种情形都给

$$
\sup_{t\in[s+\sigma/2,s+\sigma]}u_m(t)\le C_{m,\sigma}.
\tag{C5c}
$$

令 $s$ 逐段滑动便覆盖 $t\ge t_0+\tau$，完成归纳。最后对 (C1) 求 $m$ 次导数；$\nabla^jP$ 只含 $A,\ldots,\nabla^{j-1}A$，所以也得到 $|\nabla^mf_\beta|\le C_m$。

因此：原引理 3.1 **不能按原证明通过**；加入 (C3)--(C4) 或等价的统一系统抛物正则性后，结论和上面的证明成立。

### 3.2 引理 3.2：时空 $L^2$ 到点态曲率

令

$$
E(t)=\int_{\Sigma_t}|A|^2d\mu_t.
$$

法向速度满足 $\partial_td\mu=-\langle H,f_\beta\rangle d\mu$，故

$$
\begin{aligned}
E'(t)
={}&2\int\langle D_t^\perp A,A\rangle d\mu
-\int|A|^2\langle H,f_\beta\rangle d\mu\\
={}&2\int\langle(\nabla^\perp)^2f_\beta,A\rangle d\mu
+\int A*A*A*f_\beta\,d\mu\\
&+\int\bar R*A*f_\beta\,d\mu
-\int|A|^2\langle H,f_\beta\rangle d\mu.
\end{aligned}
\tag{C6}
$$

HLS 适配标架给

$$
e_1\alpha=h^4_{11}+h^3_{12},
\qquad
e_2\alpha=h^4_{12}+h^3_{22}.
$$

因此

$$
|V|^2
=(e_1\alpha)^2+(e_2\alpha)^2
\le2|A|^2,
\qquad |H|^2\le2|A|^2.
$$

又因 $0\le c^2/D\le1$、$0\le\beta s^2/D\le1$，直接得到比原报告更强、且不依赖角下界的估计

$$
|f_\beta|
\le |H|+|V|
\le2\sqrt2|A|.
\tag{C7}
$$

在原引理的面积、$A$、$\nabla^2f_\beta$ 等统一界下，(C6) 给 $|E'|\le C_E$。非负、可积且一致 Lipschitz 的函数必趋于零：否则存在 $E(t_j)\ge\varepsilon$，在固定长度的互不交区间上仍有 $E\ge\varepsilon/2$，与 $\int E<\infty$ 矛盾。

若 $|A|(p_j,t_j)\ge\varepsilon$，由 $|\nabla A|\le K$，在

$$
r_*:=\min\{r_0,\varepsilon/(2K)\}
$$

的内蕴球上有

$$
\bigl||A|(q,t_j)-|A|(p_j,t_j)\bigr|
\le Kd_{g_{t_j}}(p_j,q)\le\varepsilon/2.
\tag{C8}
$$

再由非坍缩得到

$$
E(t_j)\ge\frac{\varepsilon^2}{4}v_0r_*^2>0,
$$

矛盾。因此 $\|A_t\|_\infty\to0$。原报告 (3.19) 把 `\le` 排成了普通字母 `le`；修正为 (C8) 后，证明 **通过**。

### 3.3 引理 3.3：LS 有限长度与唯一极限

原报告从“正常图泛函实解析、Hessian Fredholm”直接写出加权 $L^2$ 型 LS 不等式，这一步条件不完整。一个足够的严格输入是：

1. 有稠密连续嵌入的 Banach 空间 $\mathcal V\hookrightarrow\mathcal Z$，正常切片是 $\mathcal V$ 中零截面的开邻域；
2. $\mathcal E:\mathcal U\subset\mathcal V\to\mathbb R$ 及其梯度映射
   $\mathcal E':\mathcal U\to\mathcal Z^*$ 实解析；
3. $\mathcal E''(0):\mathcal V\to\mathcal Z^*$ 是 Fredholm 指标 $0$；
4. 在该切片内，存在 $C_W$ 使
   $ \|\mathcal E'(V)\|_{\mathcal Z^*}\le C_W\|f_\beta(F_V)\|_W $。

标准 Łojasiewicz--Simon 定理此时给出某 $\theta\in(0,1/2]$、$C_L>0$：

$$
|\mathcal E(V)-\mathcal E(0)|^{1-\theta}
\le C_L\|f_\beta(F_V)\|_W.
\tag{C8a}
$$

也可以把 (C8a) 直接列为命题假设。仅有一个未指定映射空间和指标的“Fredholm Hessian”不能推出 (C8a)。

设

$$
e(t)=L_\beta(F_t)-L_\beta(F_\infty)\ge0.
$$

子列收敛和能量单调性给 $e(t)\downarrow0$。若某时刻 $e=0$，由耗散恒等式可知以后 $f_\beta=0$，结论立即成立。以下设 $e>0$。LS 不等式与 (A6) 给

$$
-\frac d{dt}e^\theta
=\theta e^{\theta-1}\|f_\beta\|_W^2
\ge\frac\theta{C_L}\|f_\beta\|_W.
\tag{C9}
$$

积分得

$$
\int_{t_1}^{t_2}\|f_\beta\|_Wdt
\le\frac{C_L}{\theta}e(t_1)^\theta.
\tag{C10}
$$

正常图规范速度假设

$$
\|\partial_tV_t\|_{L^2(F_\infty)}
\le C_G\|f_\beta(F_t)\|_W
\tag{C11}
$$

于是给出 $L^2$ 有限长度。该速度比较并非纯形式：若 $\widetilde F_t=\exp_{F_\infty}V_t$ 且 $\|V_t\|_{C^1}$ 足够小，令

$$
\mathcal A_t
=P_t^\perp\circ
d(\exp_{F_\infty})_{V_t}\big|_{\text{纤维方向}}
:N_{F_\infty}\Sigma\longrightarrow N_{\widetilde F_t}\Sigma .
$$

在零截面上 $\mathcal A_t=I$，故小邻域内它统一可逆，而且

$$
\mathcal A_t(\partial_tV_t)
=\bigl(\partial_t\widetilde F_t\bigr)^\perp
=f_\beta\circ\varphi_t.
$$

两张图的面积元亦统一等价，因此得到 (C11)。如果没有进入固定正常切片或没有 $C^1$ 小性，则不能无条件使用这一比较。

现取已经进入正常切片半径一半的收敛子列时刻 $t_j$。高阶一致界与插值给

$$
\|V_t-V_{t_j}\|_{C^{2,\alpha}}
\le C
\|V_t-V_{t_j}\|_{L^2}^{\sigma}.
\tag{C12}
$$

具体地，取闭的 $C^{2,\alpha}$ 切片球 $\overline B_R$ 紧含于 LS 邻域。令 $j$ 足够大，使 $\|V_{t_j}\|_{C^{2,\alpha}}<R/4$，并使 (C10)--(C12) 给出的全部未来位移小于 $R/4$。若存在首次时刻 $T_*$ 使 $\|V_{T_*}\|_{C^{2,\alpha}}=R$，则三角不等式反而给 $\|V_{T_*}\|_{C^{2,\alpha}}<R/2$，矛盾。因此以后永不离开。令 $t_2\to\infty$ 后得到固定参考 $L^2$ 中的 Cauchy 性，再用高阶插值提升到 $C^\infty$。

故引理在 (C8a)、连续正常切片规范和 (C11) 下成立；仅有模糊的解析/Fredholm 声明、LS 和能量耗散，不能控制重参数或临界流形方向的真实漂移。

---

## 4. 第 4 节：C 型定理

### 4.1 条件是否足够

原定理列出的五组条件还不够，因为第二步只给 $|A|$ 界，而原引理 3.1 没有从 HLS 耦合主符号推出高阶界。必须加入第六项“(C3)--(C4) 的标量 Bernstein 能量层级，或一套具有统一常数的等价系统抛物正则性”；同时把原第五项的“解析 Fredholm 切片”强化为 §3.3 的精确 Banach 空间、指数 $0$ Fredholm 映射、(C8a) 范数比较及连续规范。此后证明链为：

1. 双角最大值原理保持不变量区；
2. 统一低密度条件按 §2 的双尺度、可容许 $p$ 与 $t>0$ 版本应用，给全时间存在及固定正尺度上的 $|A|$ 界；
3. 新增的 Bernstein/系统正则性条件给 $\nabla^mA$ 界；
4. 曲率--梯度强制性与耗散给 $\int_0^\infty\!\int|A|^2<\infty$；
5. 非坍缩和引理 3.2 给 $\|A_t\|_\infty\to0$；
6. 参数化紧致性给全测地子列极限；
7. LS 切片锁定整条轨道。

### 4.2 原报告遗漏的参数化紧致性桥梁

Gauss 方程和 $|A|\le K$ 给诱导 Gaussian 曲率统一界

$$
|K_{g_t}|\le C(M,K).
\tag{D1}
$$

局部面积下界

$$
\operatorname{Area}_{g_t}B_{g_t}(p,r)\ge v_0r^2
\quad(0<r\le r_0)
\tag{D2}
$$

与 (D1) 通过二维 Cheeger--Gromov--Taylor 注入半径估计给

$$
\operatorname{inj}(\Sigma,g_t)\ge i_0>0.
\tag{D3}
$$

(A11) 的总面积上界再给固定尺度球的统一有限覆盖数。对 Gauss 方程反复求导，$\nabla^mA$ 与环境有界几何给出诱导曲率的全部协变导数界。Cheeger--Gromov 紧致性于是给出微分同胚 $\varphi_j:\Sigma_\infty\to\Sigma$，使 $\varphi_j^*g_{t_j}$ 光滑收敛到正定度量 $g_\infty$。把浸入改写为 $F_{t_j}\circ\varphi_j$ 后，

$$
|dF_{t_j}|^2_{\varphi_j^*g_{t_j}}=2,
\qquad
\bar\nabla dF_{t_j}=A_{t_j},
$$

而更高阶 $\bar\nabla^mdF_{t_j}$ 由 $\nabla^{m-1}A_{t_j}$、环境曲率及低阶项控制。环境紧致，故 Arzelà--Ascoli 对角法给

$$
F_{t_j}\circ\varphi_j\longrightarrow F_\infty
\quad\text{光滑收敛}.
\tag{D4}
$$

的全局光滑收敛。极限仍满足 $F_\infty^*\bar g=g_\infty$，所以是浸入；这一步同时完成了局部图片的兼容与拼接，不能只用“有限覆盖后取子列”一句替代。

因为 $\|A_{t_j}\|_\infty\to0$，极限满足 $A_\infty=0$。由

$$
|\nabla c|\le2|A|
$$

可知极限角为常数，故 $V_\infty=0$；又 $H_\infty=0$，从而 $f_\beta(F_\infty)=0$。最后用 §3.3 锁定整条轨道。

因此 C 型定理 **不能在原五项条件下原样通过**；加入上述第六项并补全参数化紧致性桥梁后通过。必须强调：高阶 Bernstein 层级、曲率--梯度强制性、非坍缩、解析 Fredholm 切片和规范速度比较都不是能量恒等式自动给出的性质。

---

## 5. 第 5 节：产品双校准与正 Einstein 分类

### 5.1 任意有向曲面乘积

令

$$
(M,g)=(B^2,g_B)\times(N^2,g_N).
$$

二维定向度量的 $90^\circ$ 旋转分别记为 $J_B,J_N$。Levi--Civita 联络保持度量和定向，所以

$$
\nabla^BJ_B=0,
\qquad \nabla^NJ_N=0.
$$

于是

$$
J_+=(J_B,J_N),
\qquad J_-=(J_B,-J_N)
\tag{E1}
$$

是两个平行正交复结构，其 Kähler 形式为

$$
\omega_+=\pi_B^*\omega_B+\pi_N^*\omega_N,
\qquad
\omega_-=\pi_B^*\omega_B-\pi_N^*\omega_N.
\tag{E2}
$$

Wirtinger 不等式给 $|\omega_\pm|_P\le1$，故两者均为 comass $1$ 的平行校准，并诱导相反四维定向。原报告此部分 **通过**；原式 (5.5) 多了一个右竖线，仅是排字错误。

### 5.2 正 Einstein 情形为什么没有非平凡商

设 $(M^4,g)$ 紧致连通，$\operatorname{Ric}=\lambda g$、$\lambda>0$，且有两张全局平行正交复结构 $J_+,J_-$，诱导相反定向。

在定向四维内积空间中，自对偶和反自对偶二形式对应的 $\mathfrak{so}(3)_+$、$\mathfrak{so}(3)_-$ 彼此对易，因此

$$
J_+J_-=J_-J_+.
\tag{E3}
$$

定义

$$
P=-J_+J_-.
$$

则 $P^2=I$，且 $P$ 正交、自伴、平行。相反复定向意味着 $P$ 的 $\pm1$ 特征空间各为实二维；记为 $E_1,E_2$。它们给出

$$
TM=E_1\oplus E_2
\tag{E4}
$$

的正交平行分裂。完备单连通覆盖上的 de Rham 定理给

$$
(\widetilde M,\widetilde g)
=(B_1^2,g_1)\times(B_2^2,g_2).
\tag{E5}
$$

比较产品 Ricci 张量与 $\lambda\widetilde g$：

$$
K_1g_1\oplus K_2g_2
=\lambda g_1\oplus\lambda g_2,
$$

故 $K_1=K_2=\lambda$。于是

$$
\widetilde M=S^2_\lambda\times S^2_\lambda.
\tag{E6}
$$

任意 deck 变换保持从 $M$ 拉回的 $J_+$、$J_-$，故保持 $P$ 以及两个特征分布，不能交换因子。它写成

$$
\gamma=(\gamma_1,\gamma_2),
\qquad
\gamma_i\in\operatorname{Isom}^+(S^2_\lambda).
\tag{E7}
$$

这里“保向”来自 $\gamma$ 保持限制在 $E_i$ 上的复结构。每个 $S^2$ 保向等距是旋转，存在不动点 $x_i$；因此 $(x_1,x_2)$ 是 $\gamma$ 的不动点。deck 作用自由，故 $\gamma$ 只能是恒等。于是

$$
\boxed{(M,g)\cong S^2_\lambda\times S^2_\lambda.}
\tag{E8}
$$

原命题 5.1 **通过**。结论依赖“两张结构都是 $M$ 上的全局张量”；若 deck 变换只保持无序结构集合、交换因子或把 $J$ 送到 $-J$，则这些结构不能同时下降成命题所假设的两张全局复结构。

这个限制不是形式性的。对角 antipodal 变换

$$
\gamma(x,y)=(-x,-y)
$$

在 $S^2\times S^2$ 上自由、等距，商空间仍是紧致正 Einstein 流形；它保持产品 involution $P$，却把两张 $J_\pm$ 都送到 $-J_\pm$。所以若只假设局部产品或全局 $P$，非平凡商确实存在；命题 5.1 排除它们所用的是两张 $J_\pm$ 分别下降这一更强条件。

同一论证也给出完整的非正情形。若只假设完备、连通以及两张全局相反定向平行正交复结构，则

$$
(M,g)cong
\bigl((\Sigma_1,g_1)\times(\Sigma_2,g_2)\bigr)/\Gamma,
\tag{E8a}
$$

其中 $\Sigma_i$ 是完备单连通有向曲面，$\Gamma\subset\operatorname{Isom}^+(\Sigma_1)\times\operatorname{Isom}^+(\Sigma_2)$ 自由、适当不连续地作用；反之这样的商上两张产品复结构均可下降。若再有 $\operatorname{Ric}=\lambda g$，则两因子的 Gaussian 曲率均恒为 $\lambda$。当 $\lambda=0$ 时平坦四环面给出非平凡紧商；当 $\lambda<0$ 时两个闭双曲曲面的乘积亦给出非平凡紧商。只有 $\lambda>0$ 时，保向球面等距变换的不动点论证迫使 $\Gamma$ 平凡。故“正 Einstein”在第 5.2 节中是实质条件，而不是装饰。

### 5.3 放宽 Einstein 后的准确范围

任意全局产品 $B\times N$ 都有 (E2)，但这只给角代数。D 型收敛还要有：

$$
\mathscr P_\pm\eta_\pm
\ge\kappa\eta_\pm(1-\eta_\pm^2),
\qquad \kappa>0,
\tag{E9}
$$

以及统一 HLS 正则性。若 $M$ 只是局部产品，且没有全局投影 $M\to B$，则“成为 $B$ 上的一层图”没有定义。此时最多可陈述切平面趋向某个平行二维分布；要得到全局叶极限，仍需全局叶空间或纤维化假设。因此原报告“适当局部产品”一句只能作为研究方向，不能列为已经证明的 D 环境。

对普通 MCF，第 6.2 节给出一个完全可检验的产品族。记

$$
k_B^-:=\inf_BK_B,
\qquad
k_N^-:=\inf_NK_N,
\qquad
k_N^+:=\sup_NK_N.
$$

若

$$
k_B^-\ge k_N^+,
\qquad
k_B^-+k_N^->0,
\tag{E10}
$$

则可取 $0<2\kappa\le k_B^-+k_N^-$，从而 (F7) 在整个乘积上成立。条件 (E10) 强迫 $K_B>0$，所以 Gauss--Bonnet 给 $B\cong S^2$，但不限制 $N$ 的拓扑类型。事实上，对任意紧有向曲面 $(N,g_N)$，取曲率为常数 $K>\|K_N\|_\infty$ 的圆球 $S^2_K$，则

$$
M=S^2_K\times N
$$

满足 (E10)。因此在不要求 Einstein 时，普通 MCF 的 D 型环境远不止 $S^2\times S^2$；第二因子可以是球面、环面或任意高亏格曲面。对 $\beta>0$ 的 HLS 流，这些环境仍只自动提供 MCF 反应项，必须另外验证 (F9) 的余项吸收与统一正则性。

若仍要求 Einstein，则 $K_B=K_N=\lambda$。正 logistic 常数要求 $\lambda>0$，遂回到第 5.2 节的同尺度 $S^2\times S^2$；平坦或负 Einstein 产品虽有双校准，却不具备这里所需的正 logistic 反应。

---

## 6. 第 6 节：双角演化的逐项复算

### 6.1 平行二形式沿任意法向流

令 $\eta=\Omega(e_1,e_2)$，$\bar\nabla\Omega=0$，$\partial_tF=f\perp T\Sigma$。在正交坐标点，

$$
\partial_t(F^*\Omega)(\partial_1,\partial_2)
=\Omega(\bar\nabla_{e_1}f,e_2)
+\Omega(e_1,\bar\nabla_{e_2}f).
\tag{F1}
$$

另一方面

$$
F^*\Omega=\eta\,d\mu,
\qquad
\partial_td\mu=-\langle H,f\rangle d\mu,
$$

故左端是

$$
(\partial_t\eta-\eta\langle H,f\rangle)d\mu.
\tag{F2}
$$

Weingarten 分解

$$
\bar\nabla_{e_i}f
=\nabla_{e_i}^\perp f
-\sum_j\langle f,A(e_i,e_j)\rangle e_j
$$

在 (F1) 中产生切向和 $-\eta\langle H,f\rangle$，与 (F2) 精确抵消，得到

$$
\boxed{
\partial_t\eta
=\Omega(\nabla_{e_1}^\perp f,e_2)
-\Omega(\nabla_{e_2}^\perp f,e_1).}
\tag{F3}
$$

原报告 (6.2)--(6.8) **通过**。

### 6.2 普通 MCF 的产品双角方程

对 $f=H$，并进一步假设 $\Omega$ 是某个平行正交复结构的 Kähler 形式，Codazzi、$\bar\nabla\Omega=0$ 和平方配方给 Wang 恒等式

$$
(\partial_t-\Delta)\eta
=\eta Q+(1-\eta^2)\operatorname{Ric}_M(Je_1,e_2),
\qquad Q\ge0.
\tag{F4}
$$

在同一适配标架中，原报告列出的平方项逐项等于

$$
\begin{aligned}
Q_+
&=\sum_{k=1}^2
\left[(h^3_{k1}-h^4_{k2})^2
+(h^4_{k1}+h^3_{k2})^2\right],\\
Q_-
&=\sum_{k=1}^2
\left[(h^3_{k1}+h^4_{k2})^2
+(h^4_{k1}-h^3_{k2})^2\right].
\end{aligned}
\tag{F4a}
$$

利用 $h^\alpha_{ij}=h^\alpha_{ji}$，(F4a) 与原报告 (6.10)--(6.11) 只是项次排列不同，完全相同，且显然非负。

在 $B\times N$ 上令

$$
a=*F^*\omega_B,
\quad b=*F^*\omega_N,
\quad \eta_+=a+b,
\quad \eta_-=a-b.
$$

因为

$$
\operatorname{Ric}_M=K_Bg_B\oplus K_Ng_N,
$$

所以

$$
\begin{aligned}
\operatorname{Ric}(J_+e_1,e_2)
&=K_Ba+K_Nb
=A_K\eta_++B_K\eta_-,\\
\operatorname{Ric}(J_-e_1,e_2)
&=K_Ba-K_Nb
=B_K\eta_++A_K\eta_-,
\end{aligned}
\tag{F5}
$$

其中

$$
A_K=\frac{K_B+K_N}{2},
\qquad B_K=\frac{K_B-K_N}{2}.
$$

代入 (F4)：

$$
\boxed{
\begin{aligned}
(\partial_t-\Delta)\eta_+
&=\eta_+Q_+
+(1-\eta_+^2)(A_K\eta_++B_K\eta_-),\\
(\partial_t-\Delta)\eta_-
&=\eta_-Q_-
+(1-\eta_-^2)(B_K\eta_++A_K\eta_-).
\end{aligned}}
\tag{F6}
$$

若

$$
K_B(x)+K_N(y)\ge2\kappa>0,
\qquad K_B(x)\ge K_N(y)
\tag{F7}
$$

对所有 $(x,y)$ 成立，且 $\eta_\pm\ge0$，则 $A_K\ge\kappa$、$B_K\ge0$，从而

$$
(\partial_t-\Delta)\eta_\pm
\ge\kappa\eta_\pm(1-\eta_\pm^2).
\tag{F8}
$$

原报告 (6.9)--(6.21) **通过**。常曲率时 (F7) 等价于 $K_B\ge|K_N|$ 且 $K_B+K_N>0$。

### 6.3 HLS 余项不能被曲率消掉

先固定**定义 HLS 泛函与速度的那一张** Kähler 形式 $\omega_0$（产品应用中通常取 $\omega_0=\omega_+$）；下文的 $c,V,b_\beta$ 全部相对于这张 $\omega_0$ 定义，而 $\eta_\pm$ 仍分别由 $\omega_\pm$ 测量。由 (A3) 与 (F3) 的线性性，令 $W=H+V$，则

$$
\partial_t\eta_\pm
=\mathcal D_{\omega_\pm}H
-\mathcal D_{\omega_\pm}(b_\beta W).
$$

乘积法则给

$$
\mathcal R_\pm
=-b_\beta\mathcal D_{\omega_\pm}W
-(e_1b_\beta)\omega_\pm(W,e_2)
+(e_2b_\beta)\omega_\pm(W,e_1).
\tag{F9}
$$

因此 HLS 的精确方程是

$$
\boxed{
\begin{aligned}
(\partial_t-\Delta)\eta_+
&=\eta_+Q_+
+(1-\eta_+^2)(A_K\eta_++B_K\eta_-)+\mathcal R_+,\\
(\partial_t-\Delta)\eta_-
&=\eta_-Q_-
+(1-\eta_-^2)(B_K\eta_++A_K\eta_-)+\mathcal R_-.
\end{aligned}}
\tag{F10}
$$

原报告在 (6.22) 后说“$\mathcal D_{\omega_\pm}H$ 正是 (6.16) 的右端”，少了一个 Laplacian。准确关系是

$$
\mathcal D_{\omega_\pm}H
=\Delta\eta_\pm+\mathcal M_\pm.
\tag{F10a}
$$

其中 $\mathcal M_\pm$ 表示 (F6) 右端除 $\Delta\eta_\pm$ 外的 MCF 反应项。补上 Laplacian 后才得到 (F10)；最终方程本身是正确的。$W$ 对 $A$ 代数线性，而 $\mathcal D W$ 含 $\nabla A$；所以 $\mathcal R_\pm$ 与 $\Delta\eta_\pm$ 同属主阶，且无固定符号。环境曲率只能控制 (F10) 的 MCF 反应部分。原报告这一关键判断 **修正后通过**。

余项吸收 $\mathcal R_\pm\ge-\eta_\pm Q_\pm$、精确轨道 $H+V=0$、或 $f_\beta=a(t)H$ 都确实是充分机制；但前者是新增的微分假设，不能由 $M$ 的曲率单独推出。空间常 Kähler 角产生最后一种机制时，必须假设角在**整个流的每个时间片**上为空间常数；原报告没有证明这一性质由初值自动保持，且应交叉引用第 9 节而不是第 10 节。

---

## 7. 第 7 节：抽象 D 定理

### 7.1 必须补全的一致抛物条件

“一致椭圆算子”应明确表示存在常数 $0<\lambda\le\Lambda<\infty$、$B_0<\infty$，使

$$
\lambda g^{ij}\xi_i\xi_j
\le a_\pm^{ij}\xi_i\xi_j
\le\Lambda g^{ij}\xi_i\xi_j,
\qquad |X_\pm|\le B_0.
\tag{G1}
$$

这里“统一 HLS 正则性”也必须展开为：流全时间经典存在，并对每个 $m\ge0$ 有

$$
\sup_{t\ge t_0}\|\nabla^mA_t\|_{C^0}\le K_m<\infty,
\tag{G1a}
$$

或由双尺度低密度条件与 (C3)--(C4) 推出同一结论。在 (G1)、(G1a)、logistic 不等式及原初值条件下，原定理成立。

### 7.2 正性、有限覆盖和固定覆盖规范

把负角不等式写成

$$
(\mathscr P_--\kappa(1-\eta_-^2))\eta_-\ge0.
$$

弱最大值原理保持 $\eta_-\ge0$；连通性、强最大值原理和“初值不恒零”给

$$
\eta_-(x,t)>0\qquad(t>0).
\tag{G2}
$$

同理 $\eta_+>0$。第一投影 $h_t=\pi_B\circ F_t$ 的有向 Jacobian 为

$$
*F_t^*\omega_B=\frac{\eta_++\eta_-}{2}>0,
\tag{G3}
$$

故 $h_t$ 是局部保向微分同胚。紧致源使其 proper，因此是有限覆盖。覆盖度等于拓扑度，在同伦 $h_t$ 中不变。

固定 $t_0>0$ 和 $p=h_{t_0}$。由 $dh_t$ 可逆，时变向量场

$$
dh_t(Y_t)=-\partial_th_t
\tag{G4}
$$

在每个有限时间区间光滑存在。紧致性允许逐段延拓到所有 $t\ge t_0$。其流 $\varphi_t$ 满足

$$
h_t\circ\varphi_t=p,
$$

所以

$$
F_t\circ\varphi_t=(p,u_t).
\tag{G5}
$$

原报告 covering 与规范构造 **通过**。

### 7.3 logistic 屏障与斜率

令 $m_\pm=\min\eta_\pm(\cdot,t_0)>0$。ODE

$$
\ell'=\kappa\ell(1-\ell^2),
\qquad \ell(t_0)=m
$$

的显式解为

$$
\ell(t)=\left[1+(m^{-2}-1)e^{-2\kappa(t-t_0)}\right]^{-1/2}.
\tag{G6}
$$

比较原理给 $\eta_\pm\ge\ell_\pm$，从而

$$
0\le1-\eta_\pm\le C e^{-2\kappa(t-t_0)}.
\tag{G7}
$$

以固定度量 $p^*g_B$ 计算 $du_t$ 的奇异值 $\lambda_1,\lambda_2$ 和有号 Jacobian $J_u$。图恒等式是

$$
D_u=\sqrt{(1+\lambda_1^2)(1+\lambda_2^2)},
\qquad
\eta_\pm=\frac{1\pm J_u}{D_u},
\tag{G8}
$$

且

$$
a:=\frac{\eta_++\eta_-}{2}=D_u^{-1}.
$$

由 (G7) 得 $1-a\le Ce^{-2\kappa t}$；当 $a\ge1/2$ 时

$$
D_u^2-1=a^{-2}-1\le C(1-a)\le Ce^{-2\kappa t}.
$$

又

$$
D_u^2-1=\lambda_1^2+\lambda_2^2+\lambda_1^2\lambda_2^2,
$$

故

$$
\boxed{\|du_t\|_{C^0}\le Ce^{-\kappa t}.}
\tag{G9}
$$

这部分逐式 **通过**。

### 7.4 从斜率到唯一光滑极限的补充细节

固定覆盖规范中，图的法空间为

$$
N\operatorname{graph}(du)
=\{(-du^*z,z):z\in TN\}.
$$

当 $|du|$ 有统一界时，$z\mapsto\Pi^\perp(0,z)$ 的逆范数有统一界。产品联络给

$$
A(dG(v),dG(w))
=\Pi^\perp(0,(\nabla du)(v,w)).
\tag{G10}
$$

由此 $|\nabla du|\le C|A|$。反复微分 (G10)，最高阶项始终是 $\Pi^\perp(0,\nabla^{m+1}du)$；其余项只含较低阶 $du$ 和 $\nabla^jA$。归纳得到 $u_t$ 的全部统一 $C^m$ 界。这补上原报告“这些界给 $u_t$ 的统一 $C^m$ 界”的省略。

插值给

$$
\|\nabla^2u_t\|_{C^0}\le Ce^{-\kappa t/2},
\qquad
\|A_t\|_{C^0}\le Ce^{-\kappa t/2}.
\tag{G11}
$$

由 (C7)，$|f_\beta|\le C|A|$。固定第一分量的规范速度满足

$$
\partial_tu_t
=d\pi_N(f_\beta)
-du_t(dp)^{-1}d\pi_B(f_\beta),
\tag{G12}
$$

因此

$$
\|\partial_tu_t\|_{C^0}
\le Ce^{-\kappa t/2}.
\tag{G13}
$$

时间可积性使 $u_t$ 在 $C^0$ 中 Cauchy。其极限 $u_\infty$ 满足 $du_\infty=0$；源连通，故 $u_\infty\equiv q$。高阶一致界和插值把收敛提升到 $C^\infty$。

所以定理 7.1 在补明 (G1) 和图导数归纳后 **通过**。若覆盖度为 $d>1$，参数化极限是 $(p,q)$，推前 varifold 的质量为 $d|B\times\{q\}|$；若 $d=1$，才是一层图。

这里 (G13) 不能省略。仅由 $du_t\to0$ 只能知道每个时间片趋近某个空间常值图，不能阻止该常值在 $N$ 中随时间漂移。例如

$$
u_t(x)=q(\log(1+t))\in S^1
$$

对每个 $t$ 都有 $du_t=0$，却有两个不同的时间子列极限。原报告之所以得到唯一 $q$，真正原因是 (G13) 的时间可积性，而不只是斜率趋零。

---

## 8. 第 8 节：$S^2\times S^2$、Jacobian 与 Corollary D

### 8.1 一层图结论

定理 7.1 已给第一投影为连通有限覆盖。$S^2$ 单连通，所以该覆盖只能是一层；因此正时间曲面是 $S^2\to S^2$ 的图，并收敛到水平切片。此处确实不需要另加嵌入性：一层 covering 本身就是微分同胚，图映射自动嵌入。原推论 8.1 **通过**。

### 8.2 有号 Jacobian 的端点

对图 $u:B\to N$，

$$
u^*\omega_N=J_u\omega_B,
$$

并有

$$
\eta_+=\frac{1+J_u}{D_u},
\qquad
\eta_-=\frac{1-J_u}{D_u}.
\tag{H1}
$$

因为 $D_u>0$，逐点等价关系为

$$
\eta_+>0\Longleftrightarrow J_u>-1,
\qquad
\eta_-\ge0\Longleftrightarrow J_u\le1.
\tag{H2}
$$

并且 $\eta_-\not\equiv0$ 等价于 $J_u<1$ 至少在一点。故条件

$$
-1<J_u\le1,
\qquad J_u<1\text{ 至少一点}
\tag{H3}
$$

正好对应定理 7.1 的初始角条件；更干净的 $|J_u|<1$ 是其严格版本。

### 8.3 对 $J=-1$ 的必要修正

若某点 $J_u=-1$，则由 (H1) 有 $c=\eta_+=0$。这已经离开 HLS 论文所研究的严格辛区域 $c>0$，角坐标、加权梯度结构与一致抛物性均不能按原理论使用。因此必须严格排除 $J=-1$。

原报告说“$c^{-\beta}$ 发散，因此 $L_\beta$ 发散”，这句话若理解为积分必为无穷则不正确。若局部 $c(r)\asymp r^k$，二维面积元约为 $r,dr,d\theta$，则

$$
\int_0^\varepsilon c(r)^{-\beta}r\,dr
\asymp\int_0^\varepsilon r^{1-k\beta}\,dr,
\tag{H4}
$$

它在 $k\beta<2$ 时仍可能有限。正确理由是 **HLS 经典辛流的定义域要求逐点 $c>0$，而不是积分必然发散**。故 §8.3 判定为 **修正后通过**。

### 8.4 同伦结论

若 $u_t\to q$ 光滑，取 $t(s)=s/(1-s)$ 并令

$$
U(x,s)=u_{t(s)}(x),\quad s<1;
\qquad U(x,1)=q,
$$

则光滑收敛保证 $U$ 在 $s=1$ 连续。故 $u_0$ 同伦于常值映射。原推论的同伦构造 **通过**。

---

## 9. 第 9 节：精确时间重参数化

假设

$$
f_\beta=a(t)H,
\qquad 0<a(t)\le a_1.
$$

定义

$$
\tau(t)=\int_0^ta(s)ds.
$$

由于 $a>0$，$\tau$ 严格递增。在其值域内，令 $G(x,\tau)=F(x,t(\tau))$，则

$$
\partial_\tau G
=\partial_tF\frac{dt}{d\tau}
=a(t)H\frac1{a(t)}=H_G.
\tag{I1}
$$

若 HLS 在有限 $T$ 奇异，则 $\tau(T)\le a_1T<\infty$。对应 MCF 若在该闭有限时间段光滑，则其 $|A|$ 有界；同一时间片族的 HLS 曲率亦有界，与延拓准则矛盾。故原定理 9.1 **通过**。

若 Kähler 角在每个时间片上空间常数 $c(t)>0$，则 $V=0$ 且

$$
a(t)=\frac{c(t)^2}{c(t)^2+\beta(1-c(t)^2)}.
\tag{I2}
$$

闭曲面的辛面积恒定：

$$
\mathcal S_\omega
=\int_\Sigma F_t^*\omega
=c(t)\operatorname{Area}(\Sigma_t).
$$

而

$$
\frac d{dt}\operatorname{Area}(\Sigma_t)
=-a(t)\int|H|^2d\mu_t.
$$

微分辛面积恒等式得到

$$
c'(t)\operatorname{Area}(\Sigma_t)
=c(t)a(t)\int|H|^2d\mu_t\ge0.
\tag{I3}
$$

因此 $c(t)\ge c(0)>0$。函数

$$
q(c)=\frac{c^2}{c^2+\beta(1-c^2)}
$$

满足

$$
q'(c)=\frac{2\beta c}{[c^2+\beta(1-c^2)]^2}>0,
$$

故 $a(t)\ge a(0)>0$，从而 $\tau(t)\ge a(0)t\to\infty$。原 §9.1 **通过**。空间常角必须是沿整个流的假设；报告没有证明它从初值自动保持。

---

## 10. 第 10 节：逐个反例与逻辑模型

### 10.1 平坦秩一图

在 $T^2\times T^2$ 中，仿射图

$$
u(x,y)=(mx,0),\qquad m\in\mathbb Z\setminus\{0\},
$$

满足 $A=H=0$、$J_u=0$，且

$$
\eta_+=\eta_-=(1+m^2)^{-1/2}>0.
$$

角常数使 $V=0$，故 $f_\beta=0$。它严格说明：双角正、产品结构和能量递减本身不产生趋向水平切片的结论。该反例 **通过**。

当 $0<q<1$ 时，缩放对角图 $(S,g)\to(S,g)\times(S,q^2g)$ 同样全测地且静止，

$$
\eta_+=1,
\qquad
\eta_-=\frac{1-q^2}{1+q^2}>0.
$$

取正、负常曲率分别检验曲率顺序与曲率和条件，计算亦正确。

### 10.2 原覆盖例不是嵌入；嵌入修正版

原报告的

$$
F=(p,q):\widehat B\to B\times N
$$

在 $p$ 为 $d>1$ 层覆盖时把同一纤维的 $d$ 个点全部送到 $(b,q)$，所以不是嵌入。它只能证明“一般浸入允许 $d$ 重水平参数化”，不能单独证明“嵌入性不迫使第一投影度数为一”。

真正的嵌入例可在平坦四环面中构造。对任意整数 $d\ge2$，定义

$$
F([x_1,x_2])
=([dx_1,x_2],[x_1,0]).
\tag{J1}
$$

若 $F(x)=F(y)$，第二分量给 $x_1-y_1\in\mathbb Z$，第一分量的第二坐标给 $x_2-y_2\in\mathbb Z$，故 $x=y$；所以 $F$ 是嵌入。第一投影

$$
p_d([x_1,x_2])=[dx_1,x_2]
$$

却是 $d$ 层覆盖。相对于 $p_d^*g_{T^2}$，第二分量的奇异值是 $d^{-1},0$，因此

$$
\eta_+=\eta_-=\frac1{\sqrt{1+d^{-2}}}>0.
\tag{J2}
$$

其像是平坦 $T^4$ 的仿射子环面，所以 $A=H=V=f_\beta=0$。这严格证明 **嵌入性本身不等于第一投影度数一**。

注意 (J1) 不满足正 logistic 反应，因为角恒定且小于一；它不反驳定理 7.1，而只审计覆盖度的拓扑逻辑。

### 10.3 连通性

两个不同水平切片的并是静止解，但不收敛为一个切片。因此若源不连通，结论必须逐分支陈述。该反例 **通过**。

### 10.4 能量耗散不控制 $A$

在 $\mathbb{CP}^1\times\mathbb{CP}^1$ 中，二次全纯图

$$
F=\bigl(\operatorname{id},[z_0:z_1]\mapsto[z_0^2:z_1^2]\bigr)
$$

是嵌入复曲线，故 $c=1$、$H=V=f_\beta=0$。在仿射坐标原点，图为 $w\mapsto(w,w^2)$；Fubini--Study Christoffel 符号在该点为零，而第二分量二阶导数非零，所以 $A\not\equiv0$。于是

$$
\|f_\beta\|_W=0,
\qquad \int|A|^2>0.
$$

这否定了“能量耗散自动推出曲率--梯度强制性”。原反例 **通过**。

### 10.5 曲率集中段落的准确地位

函数列可满足

$$
\|A_j\|_\infty=1,
\qquad
\operatorname{supp}A_j\subset B_{r_j},
\qquad r_j\downarrow0,
$$

却有 $\|A_j\|_2\to0$。这说明单靠泛函分析，$L^2$ 小不能推出 $L^\infty$ 小；需要梯度界和体积非坍缩形成固定尺度球。

但是原报告没有把这些 $A_j$ 实现为同一个 HLS 流的第二基本形，也没有验证 Gauss--Codazzi 约束。因此 §10.5 只能标为 **说明尺度桥梁的必要性**，不是 HLS 反例。

### 10.6 Riccati 上界

不等式

$$
D^+Q\le C(Q+\Lambda^2)^2
$$

只给爆破速度的上控制；满足等号的标量 ODE 本身可以有限时间爆破。因此它不能推出全时间有界、$Q\to0$ 或双角收敛。该逻辑判断 **通过**。

### 10.7 LS 与不可见方向漂移

在 $[0,1]\times S^1$ 上令 $E(r,\vartheta)=r^2/2$，取

$$
x(t)=(r_0e^{-t},[t]).
$$

则

$$
|E|^{1/2}\le|\nabla E|,
\qquad
-\frac d{dt}E=|\nabla E|^2,
$$

但角变量无限旋转，轨道不收敛，而且

$$
\frac{|\dot x|}{|\nabla E|}
=\sqrt{1+r^{-2}}\to\infty.
$$

它不是 HLS 反例，而是严格的有限维解析模型：LS 加精确耗散仍不足以控制能量不可见方向，故规范真实速度比较不能省略。原报告对该模型的定位正确。

---

## 11. 修订后可直接引用的命题组

### 11.1 B$_\beta$

若经典 HLS 流在每个有限时间视界具有正角下界，并且在每次中心--时间应用中同时选择估计尺度 $r$ 和独立外围尺度 $\rho$，满足 $0<r<\rho$，使流在 $P(X,t;8\rho)$ 上光滑、外围柱不越过初始时刻，且在尺度 $r$ 上满足 HLS Corollary 4.2 的加权低密度阈值，则最大经典存在时间为无穷。第 2.2 节给出的充分版本对某个 $r_*>0$ 取

$$
r=r_S(t)=\min\{r_*,\sqrt t/32\},
\qquad
\rho=2r_S(t),
$$

从而 $(8\rho)^2=256r_S(t)^2\le t/4$。这里不能把 $\rho$ 直接删掉或与 $r$ 混成一个尺度。

### 11.2 C$_\beta$

在 B$_\beta$ 条件之外，若另有 (C3)--(C4) 的标量 Bernstein 能量层级（或带统一常数的等价系统抛物正则性）、曲率--梯度强制性、局部面积非坍缩、满足 §3.3 四项 Banach--Fredholm--范数兼容条件的解析正常切片，以及连续规范速度比较，则流模去重参数光滑收敛到一个全测地 $\beta$-临界浸入。原报告少了 Bernstein 层级，且 LS 输入写得不完整，故这些修订不能省略。

### 11.3 抽象 D$_\beta$

在紧有向曲面乘积 $B\times N$ 上，若双角满足具有明确系数界 (G1) 的统一 parabolic--logistic 不等式，且 (G1a) 的全时间高阶 HLS 正则性成立，则流收敛到水平切片的固定有限覆盖。覆盖度一或基底单连通时才得到一层图。

### 11.4 曲率自动产生 logistic 的边界

条件

$$
K_B-K_N\ge0,
\qquad K_B+K_N\ge2\kappa>0
$$

自动产生的是 **普通 MCF** 的 logistic 反应。对 $\beta>0$ HLS 流仍须验证 (F9) 的余项吸收，或证明 $f_\beta=a(t)H$。

### 11.5 环境分类

- 保持 Wang 原始“紧致、连通、正 Einstein、两张相反定向全局平行 Kähler 形式”时，环境只能是同尺度 $S^2\times S^2$；
- 放宽 Einstein 后，任意紧有向曲面乘积都有双校准；对普通 MCF，(E10) 给出包含所有 $S^2_K\times N$（$K>\|K_N\|_\infty$）的明确 D 型产品族；
- 对 HLS 流，环境曲率仍不能消掉 (F9) 的主阶余项，只有另行满足余项吸收和统一 HLS 正则性的流才有 D 结论；
- 只有局部产品而无全局投影时，不能陈述全局一层图。

---

## 12. 最终审计结论

1. 原报告第 1 节的角下界结论正确，但该下界只在空间最小点成立，不能写成未经证明的全空间抛物不等式；第 1.3 节已经用明确定义的右下 Dini 导数修复。
2. 原报告第 2 节引用的 HLS $\varepsilon$-正则性少写了外围尺度 $\rho$：原定理要求 $0<r<\rho$，并要求流存在于 $P(X,t;8\rho)$。因此原来的一尺度表述不能原样通过；第 2.1、2.2 与 11.1 节已经按双尺度版本修复。
3. 原报告第 3.1 节把 HLS 的法丛耦合主符号误写成标量 $a^{ij}$；一般抛物系统没有标量最大值原理。C 型定理必须新增 (C3)--(C4) 的 Bernstein 能量层级或等价系统正则性。
4. 修复上述缺口后，B、C、D 主命题在修订稿明确列出的强附加条件下成立；它们不是 HLS 原论文中 Wang 定理的无条件迁移。
5. 最关键的未自动证明部分仍是 HLS 余项、统一低密度、Bernstein 层级、曲率--梯度强制性和 LS 规范速度。
6. 第 5 节正 Einstein 刚性分类成立：在严格原始几何假设下没有新的紧致环境 $M$。
7. 第 8.3 节必须把“积分必发散”改成“离开严格辛定义域且方程退化”。
8. 第 10.2 节原覆盖例不是嵌入；(J1) 给出真正的嵌入 $d$ 层投影修正版。
9. 第 10.5 节是尺度集中说明，不是一个实际 HLS 流反例。
10. 所有其余公式链在本文补出的标准正则性步骤和明确量词下通过复核。

## Danus 再审计记录

本次重新调用 7 个 Danus 工作单元：high $\times3$、xhigh $\times4$。任务按原报告章节切分，分别复算速度与能量、B 的密度尺度、Bernstein 与 $L^2$ 升级、C 的 LS 锁定、正 Einstein 分类、双角方程和 D/覆盖/反例，共形成 36 条经验证事实。最重要的独立回执是：

- HLS Corollary 4.2 必须保留 $0<r<\rho$ 两个尺度；
- §3.1 的 HLS 主符号为法丛耦合系统，原标量最大值原理没有依据；
- §3.3 缺少解析梯度映射的目标空间、Fredholm 指标 $0$ 与耗散范数兼容；
- 正 Einstein 双复结构分类成立，但非正 Einstein 可有非平凡紧商；
- HLS 双角余项含法向速度的一阶导数，环境曲率不能自动消掉；
- 覆盖、Jacobian、时间规范和反例链在本文所列修正后闭合。

正文只采用能够由公式重建、通过 Danus 验证门或由明确外部定理支持的结论；最终选定的核心事实编号已记录在项目 TARGET.md。

## 参考文献

1. X. Han, J. Li, J. Sun, *Gradient flow for $\beta$-symplectic critical surfaces*, Ann. Inst. H. Poincaré Anal. Non Linéaire 41 (2024), 1083--1116. [DOI 10.4171/AIHPC/100](https://doi.org/10.4171/AIHPC/100).
2. M.-T. Wang, *Mean Curvature Flow of Surfaces in Einstein Four-Manifolds*, J. Differential Geom. 57 (2001), 301--338. [arXiv:math/0110019](https://arxiv.org/abs/math/0110019).
3. M.-T. Wang, *Long-time Existence and Convergence of Graphic Mean Curvature Flow in Arbitrary Codimension*, Invent. Math. 148 (2002), 525--543. [DOI 10.1007/s002220100201](https://doi.org/10.1007/s002220100201).
4. M.-P. Tsui, M.-T. Wang, *Mean Curvature Flows and Isotopy of Maps Between Spheres*, Comm. Pure Appl. Math. 57 (2004), 1110--1126. [arXiv:math/0302242](https://arxiv.org/abs/math/0302242).
5. L. Simon, *Asymptotics for a Class of Nonlinear Evolution Equations, with Applications to Geometric Problems*, Ann. of Math. 118 (1983), 525--571. [DOI 10.2307/2006981](https://doi.org/10.2307/2006981).
6. J. Langer, *A Compactness Theorem for Surfaces with $L_p$-bounded Second Fundamental Form*, Math. Ann. 270 (1985), 223--234. [DOI 10.1007/BF01456183](https://doi.org/10.1007/BF01456183).
7. J. Cheeger, M. Gromov, M. Taylor, *Finite Propagation Speed, Kernel Estimates for Functions of the Laplace Operator, and the Geometry of Complete Riemannian Manifolds*, J. Differential Geom. 17 (1982), 15--53. [Project Euclid](https://projecteuclid.org/journals/journal-of-differential-geometry/volume-17/issue-1/Finite-propagation-speed-kernel-estimates-for-functions-of-the-Laplace/10.4310/jdg/1214436699.full).
8. M. Kourganoff, *Similarity Structures and de Rham Decomposition*, arXiv:1507.05573 (2015). [arXiv](https://arxiv.org/abs/1507.05573).
9. X. Han, J. Li, J. Sun, *The Deformation of Symplectic Critical Surfaces in a Kähler Surface—I*, arXiv:1504.04138 (2015). [arXiv](https://arxiv.org/abs/1504.04138).
10. F. Rupp, *On the Łojasiewicz--Simon Gradient Inequality on Submanifolds*, arXiv:1907.09292 (2019). [arXiv](https://arxiv.org/abs/1907.09292).

### 审计边界

- 全文只研究奇点以前的经典光滑 HLS 流。
- HLS 延拓准则、HLS $\varepsilon$-正则性和抽象 Łojasiewicz--Simon 定理作为标明来源的外部输入。
- 本文审计“原报告是否从所列假设推出结论”，不宣称新增强假设已由 HLS 原方程自动验证。
