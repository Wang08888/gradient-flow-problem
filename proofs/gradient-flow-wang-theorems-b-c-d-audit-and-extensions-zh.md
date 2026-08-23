# Wang 定理 B、C、D 与推论 D 的严格审计

## Han--Li--Sun $L_\beta$ 梯度流的可证类似版本、障碍与修正条件

**研究对象**　实四维 Kähler 流形中紧致有向曲面的经典光滑流  
**比较对象**　Mu-Tao Wang（JDG 57, 2001）的 Theorems B, C, D 与 Corollary D  
**梯度流**　Han--Li--Sun（AIHP 41, 2024）的 $L_\beta$ 负梯度流  
**审计日期**　2026 年 8 月 23 日  
**核验方式**　原文逐页核对、后续原始文献交叉核对、Danus 7 个工作单元（high $\times3$，xhigh $\times4$）与独立验证器

---

> **总判定。** Wang 的 B 证明有真实的“单个图分支/整个 varifold”重数缺口，故不能按原文直接视为完整证明；C 的能量主干可修复，但末尾的 $\varepsilon$-正则性与 Simon 收敛省略了必要输入；D 在连通情形可严格修复，并被后来的图形平均曲率流定理独立支持，但不连通版本为假；推论 D 的正确条件是 $|\operatorname{Jac}f|<1$，而不是仅有符号意义的 $\operatorname{Jac}f<1$。对一般 $\beta>0$ 的 $L_\beta$ 梯度流，这四个结论不会仅凭两校准正性自动成立。本文给出两个严格层次：精确时间重参数版本，以及加权密度/耗散/收敛结构条件版本。

## 0. 结论矩阵

| 命题 | 2001 年原文审计 | 本报告的严格结论 |
|---|---|---|
| Wang B | Proposition 6.1 只分析一个局部图分支，却把整条放缩曲面的高斯质量判为 $1$；另有环境紧致性表述不一致 | 原文证明不完整；加“分支局部化/单位密度”及有界几何条件后成立 |
| Wang C | Proposition 7.2 的曲率商估计可用；末尾 Ilmanen--Simon 两步写得过快 | 在紧致有界几何、局部非坍缩及正常图规范下可补成完整证明 |
| Wang D | “By Theorem A” 是错误引用；A 不给全时间存在 | 连通时成立；可由强最大值原理转成严格面积递减图，再用 Tsui--Wang；不连通时有反例 |
| Corollary D | “Jacobian less than one” 有歧义 | 正确形式是 $|\operatorname{Jac}f|<1$；仅 $\operatorname{Jac}f<1$ 为假 |
| 一般 $\beta>0$ 梯度流 | 不是 MCF，第二校准量没有 Wang 的标量方程 | 无条件类比不能推出；本文给出时间重参数版与一般结构条件版 |

这里“证明不完整”不等同于已经构造出原结论的反例；它表示原文给出的论证不足以推出所声明的全一般性结论。本文只把经过证明的修正版作为定理使用。

---

## 1. 两类流与记号

设 $F_t:\Sigma^2\to M^4$ 是闭曲面的定向浸入，$A$、$H$、$d\mu_t$ 分别为第二基本形、平均曲率向量和诱导面积元。

### 1.1 Wang 的平均曲率流

Wang 考虑

$$
\partial_tF=H.
\tag{1.1}
$$

若 $\Omega$ 是平行校准二形式，记

$$
\eta_\Omega=*_{\Sigma_t}F_t^*\Omega,
\qquad |\eta_\Omega|\le1.
\tag{1.2}
$$

Theorem B 使用一对定向相反的平行校准形式 $\omega',\omega''$，并记

$$
\eta'=*\omega',\qquad \eta''=*\omega'',\qquad \mu=\eta'+\eta''.
\tag{1.3}
$$

### 1.2 Han--Li--Sun 的 $L_\beta$ 梯度流

固定 Kähler 形式 $\omega$，令

$$
c=\cos\alpha=*F_t^*\omega,qquad s=\sin\alpha,
$$

$$
D=c^2+\beta s^2,qquad
V=(e_2\alpha)v_3+(e_1\alpha)v_4.
\tag{1.4}
$$

其负梯度流的法向速度为

$$
\boxed{
f_\beta=\partial_tF
=\frac{c^2H-\beta s^2V}{c^2+\beta s^2}.}
\tag{1.5}
$$

当 $\beta=0$ 时才有 $f_0=H$。当 $\beta>0$ 时，即使 $c>0$，一般仍有 $V\ne0$，而且 $c^2/D$ 依赖空间点，因此 (1.5) 通常既不是 MCF，也不是 MCF 的时间重参数。

论文已经证明：自身 Kähler 角 $c$ 的正性保持；有限时间内 $c$ 有正下界；$|A|$ 一致有界时可延拓；并有加权单调公式及 $\varepsilon$-正则性。它没有证明“两个任意平行校准角的正性推出全时间存在”。

---

## 2. Wang Theorem B：缺口在哪里

### 2.1 原证明的有效部分

在 $\eta',\eta''\ge\delta>0$ 时，Wang 得到

$$
(\partial_t-\Delta)\mu\ge 2\delta |A|^2-C.
\tag{2.1}
$$

局部化的后向热核计算进一步给出：对奇点候选 $(y_0,t_0)$，可以选择放缩因子 $\lambda_j\to\infty$ 和 $s_j\to-1$，使任意固定紧集 $K\Subset\mathbb R^N$ 上

$$
\int_{\Sigma^{\lambda_j}_{s_j}\cap K}|A_j|^2\,d\mu_j\longrightarrow0.
\tag{2.2}
$$

两校准正下界还使局部乘积投影的 Jacobian 有正下界，因而每个局部分支都可写成斜率一致有界的图。

这些步骤本身并不产生一重性问题。

### 2.2 真正的逻辑断点

原文随后选取投影原像的**一个连通分支** $S_t$，把它写成图 $u_t$，并证明该分支的放缩极限是一个线性图。由此只能推出

$$
|S^{\lambda_j}_{s_j}|\rightharpoonup |P|,
\tag{2.3}
$$

其中 $P$ 是一张重数一平面。它不能推出整条曲面满足

$$
|\Sigma^{\lambda_j}_{s_j}|\rightharpoonup |P|.
\tag{2.4}
$$

不同图分支可同时进入缩小邻域并趋于同一平面。最简单的测度模型是

$$
|P+\varepsilon_j\nu|+|P-\varepsilon_j\nu|
\rightharpoonup 2|P|.
\tag{2.5}
$$

每个近似分支都是重数一，极限仍可有重数二。故原文从“所选分支是线性图”直接写出整条曲面的高斯质量为 $1$，并据此调用 White 正则性，缺少排除其余分支的论证。嵌入性本身也不能抽象地排除 varifold 极限的重数聚集。

### 2.3 单张图吹起的一重性引理

**引理 2.1（经 Danus 独立验证）。** 设

$$
\Gamma_j=\{(x,u_j(x)):x\in B_{R_j}(0)\subset\mathbb R^2\},
\qquad R_j\to\infty,
$$

且

$$
\sup_j\|Du_j\|_{L^\infty}\le L,
\qquad
\int_{\Gamma_j\cap K}|A_j|^2d\mu_j\to0
$$

对每个紧集 $K\Subset\mathbb R^4$ 成立。若 $\Gamma_j$ 有点趋于原点，则取子列后

$$
|\Gamma_j|\rightharpoonup |P|
$$

为过原点的一张重数一平面；相应归一化二维高斯积分趋于 $1$。

**证明。** 由一致斜率，图的面积密度与 $1$ 一致等价，且

$$
c_L|D^2u_j|\le |A_j|\le C_L|D^2u_j|.
$$

所以 $D^2u_j\to0$ 于 $L^2_{\rm loc}$。对 $v_j=\partial_ku_j$ 使用 Poincaré 不等式，并在同心球上作对角子列，得到一个常矩阵 $C$ 使

$$
Du_j\to C\quad\hbox{于 }L^2_{\rm loc}.
$$

趋于原点的图上点与一致 Lipschitz 界给出 $u_j(0)\to0$；Arzelà--Ascoli 遂给出 $u_j\to Cx$ 局部一致。面积密度

$$
G(Q)=\sqrt{\det(I+Q^TQ)}
$$

在 $|Q|\le L$ 上 Lipschitz，因此 $G(Du_j)\to G(C)$ 于 $L^1_{\rm loc}$。这给出恰好系数一的图测度收敛。最后一致 Lipschitz 界给高斯尾部的一致可积性，故高斯积分趋于平面值 $1$。∎

注意：引理只证明**所选单张图**的一重性，恰好说明原证明为什么不能把结论自动提升到所有分支之和。

### 2.4 可严格使用的 B 修正版

**定理 B\***（分支局部化版）。设环境在流所经过区域有一致有界几何，并且对每个有限候选时空点 $(y_0,T)$，存在一个乘积柱及有限个参数域，使靠近 $(y_0,T)$ 的流逐分支表示为 proper 的嵌入图；图斜率一致有界，分支边界与较小柱保持正距离。若

$$
\eta',\eta''\ge\delta_T>0
$$

在每个有限区间 $[0,T)$ 成立，则经典 MCF 不会在有限时间形成曲率奇点，因而全时间存在。

**证明。** 假设 $T<\infty$ 是首个奇异时刻。对每个可能在 $y_0$ 聚集的参数分支，使用支撑在较小柱内的截断函数重做 (2.1) 的加权估计。分支边界不进入支撑区，因此没有边界通量；(2.2) 对每个分支成立。引理 2.1 给出该分支的单位高斯密度，而不是整条多分支 varifold 的单位密度。White 的局部正则性于是逐分支给出 $y_0$ 附近的曲率界。候选参数点组成紧集，用有限个分支柱覆盖，得到

$$
\sup_{0\le t<T}\|A_t\|_{L^\infty}<\infty.
$$

经典 MCF 延拓定理与高阶抛物估计把流延过 $T$，矛盾。∎

因此，Wang B 的几何思路可以通过“逐分支 White 正则性”修复；但这一步没有写在原文中，而且 Theorem B 的印刷表述也没有重申 Proposition 6.1 所用的环境紧致性。严格引用时应加入紧致/有界几何及上述分支局部化条件，或直接加入每个分支的单位密度条件。

---

## 3. Wang Theorem C：能量衰减与收敛的完整补法

假设环境闭、具有有界几何，且两校准量在全流上满足

$$
\eta',\eta''\ge1-\varepsilon.
\tag{3.1}
$$

### 3.1 曲率商估计

Wang 的 Proposition 7.2 取

$$
\mu=\eta'+\eta'',qquad Q=\frac{|A|^2}{\mu^p}.
$$

当先选 $p$ 足够大、再选 $\varepsilon$ 足够小时，计算给出

$$
(\partial_t-\Delta-W\cdot\nabla)Q
\le -cQ^2+C_1Q+C_2,
\qquad c>0.
\tag{3.2}
$$

紧致最大值原理给 $Q$、从而 $|A|$ 的全时间一致上界。非负 Einstein 曲率下，$\eta',\eta''$ 的最小值不减，所以 (3.1) 从初始时刻保持。于是即使不调用有争议的 B，(3.2) 与经典延拓定理本身也排除有限时刻曲率爆破。

### 3.2 从校准缺陷得到 $L^2$ 曲率耗散

令

$$
\Phi(t)=\int_{\Sigma_t}(2-\mu)\,d\mu_t\ge0.
\tag{3.3}
$$

在近校准区，Wang 的计算给

$$
(\partial_t-\Delta)\mu\ge c_0\mu|A|^2,
\qquad \mu\ge2-2\varepsilon.
\tag{3.4}
$$

由于 MCF 满足 $\partial_td\mu_t=-|H|^2d\mu_t$，闭曲面上

$$
\begin{aligned}
\Phi'(t)
&=\int_{\Sigma_t}\bigl[-\partial_t\mu-(2-\mu)|H|^2\bigr]d\mu_t\\
&\le-c_0\int_{\Sigma_t}\mu|A|^2d\mu_t\\
&\le-c_0(2-2\varepsilon)\int_{\Sigma_t}|A|^2d\mu_t.
\end{aligned}
\tag{3.5}
$$

所以

$$
\int_0^\infty\int_{\Sigma_t}|A|^2d\mu_tdt<\infty.
\tag{3.6}
$$

记 $E(t)=\int|A|^2$。由 $|A|$ 一致有界、标准演化不等式和面积单调性，有

$$
E'(t)\le C.
\tag{3.7}
$$

若存在 $t_j\to\infty$ 及 $\delta>0$ 使 $E(t_j)\ge\delta$，则 (3.7) 强迫 $E\ge\delta/2$ 保持在每个 $t_j$ 前一个固定长度区间上。取互不相交子列即与 (3.6) 矛盾。因此

$$
E(t)\longrightarrow0.
\tag{3.8}
$$

### 3.3 从总曲率到点态曲率

高阶 MCF 估计在 $t\ge1$ 给 $\sup|\nabla A|\le L$。近校准图结构给一致局部非坍缩：存在 $v_0,r_0>0$，使

$$
\operatorname{Area}B_t(p,r)\ge v_0r^2
\quad(0<r\le r_0).
\tag{3.9}
$$

若 $|A|(p_j,t_j)\ge\delta$，取

$$
r_*=min\{r_0,\delta/(2L)\},
$$

则 $B_{t_j}(p_j,r_*)$ 上 $|A|\ge\delta/2$，从而

$$
E(t_j)\ge\frac{\delta^2}{4}v_0r_*^2>0,
$$

与 (3.8) 矛盾。故

$$
\sup_{\Sigma_t}|A|\longrightarrow0.
\tag{3.10}
$$

这一步也可由二维 Ilmanen 型抛物 $\varepsilon$-正则性完成；必须说明小量是局部时空的尺度不变量，而非只写“small $\varepsilon$ regularity”。

### 3.4 唯一光滑极限

一致曲率和高阶估计给出取子列后的光滑收敛（允许固定参数化规范）到某紧致浸入 $F_\infty$。由 (3.10)，

$$
A_\infty\equiv0,
$$

故极限全测地。Einstein 度量在调和坐标中实解析；在 $F_\infty$ 的正常图切片中，面积泛函是实解析泛函，其梯度是经过规范固定的平均曲率算子。Łojasiewicz--Simon 不等式于是把一个光滑聚点提升为整条轨道的唯一光滑极限。

因此 C 的数学结论在这些明确条件下成立；原文的最后两句话应展开为“局部抛物正则性 $\to$ 光滑预紧性 $\to$ 正常图规范 $\to$ Łojasiewicz--Simon”，而不能仅凭“metrics are analytic”直接结束。

---

## 4. Wang Theorem D 与 Corollary D

以下两球面均取单位圆度量。令

$$
a=*\omega_1,qquad b=*\omega_2,qquad
\eta_+=a+b,qquad \eta_-=a-b.
\tag{4.1}
$$

### 4.1 强最大值原理与图结构

Wang 第 8 节给出

$$
(\partial_t-\Delta)\eta_+
=\eta_+\bigl(Q_++1-\eta_+^2\bigr),
\tag{4.2}
$$

$$
(\partial_t-\Delta)\eta_-
=\eta_-\bigl(Q_-+1-\eta_-^2\bigr),
\tag{4.3}
$$

其中 $Q_\pm\ge0$ 是第二基本形分量的平方和。若 $\Sigma$ 连通，初始时

$$
a\ge|b|,
$$

且至少一点严格，则 $\eta_\pm\ge0$ 且两者都不恒为零。强抛物最大值原理给

$$
\eta_+(x,t)>0,qquad \eta_-(x,t)>0
\quad(t>0).
\tag{4.4}
$$

于是 $a=(\eta_++\eta_-)/2>0$，即 $\pi_1\circ F_t$ 的有向 Jacobian 为正。它是紧致连通曲面到 $S^2$ 的 proper 局部微分同胚，故为覆盖；$S^2$ 单连通使覆盖只有一层。因此每个 $t>0$ 时

$$
F_t(\Sigma)=\operatorname{graph}(f_t),qquad f_t:S^2\to S^2.
\tag{4.5}
$$

### 4.2 图上的精确 Jacobian 公式

设 $\lambda_1,\lambda_2$ 是 $df$ 的奇异值，$J_f$ 是有向 Jacobian，令

$$
D_f=\sqrt{(1+\lambda_1^2)(1+\lambda_2^2)}.
$$

在由第一投影定向的图上，直接代入正交图基得到

$$
*\omega_1=\frac1{D_f},
\qquad
*\omega_2=\frac{J_f}{D_f}.
\tag{4.6}
$$

因此

$$
*\omega_1>|*\omega_2|
\quad\Longleftrightarrow\quad
|J_f|<1.
\tag{4.7}
$$

二维时 $|J_f|=\lambda_1\lambda_2$，所以这恰是严格面积递减。

### 4.3 全时间存在与极限

原文写“By Theorem A, we have existence for all time”，这是错误引用：Theorem A 只给 symplectic 性保持及声称排除 Type I，并不给全时间存在。正确修复有两条：

1. 在 $t>0$ 后使用修正后的 Theorem B；或
2. 直接使用 Tsui--Wang 的图形 MCF 定理：严格面积递减的球面图保持为严格面积递减图、全时间存在并光滑趋于常值图。

第二条不依赖 Proposition 6.1 的多分支问题，因此是 D 的独立确认。

另外，从 (4.2)--(4.3) 可直接识别极限。固定 $t_0>0$，记 $m_\pm=\min\eta_\pm(\cdot,t_0)>0$。与

$$
\ell_\pm'=\ell_\pm(1-\ell_\pm^2),
\qquad \ell_\pm(t_0)=m_\pm
$$

比较，得

$$
\eta_\pm(x,t)\ge
\left[1+(m_\pm^{-2}-1)e^{-2(t-t_0)}\right]^{-1/2}.
\tag{4.8}
$$

又 $\eta_\pm\le1$，所以 $\eta_\pm\to1$ 一致成立，进而 $*\omega_1\to1$。若 $F_{t_j}$ 光滑趋于 $F_\infty$，则 $*F_\infty^*\omega_1=1$。校准等号迫使每个极限切平面完全水平，故

$$
d(\pi_2\circ F_\infty)=0.
$$

连通性给 $\pi_2\circ F_\infty\equiv p$，再用第一投影覆盖论证得到

$$
F_\infty(\Sigma)=S^2\times\{p\}.
\tag{4.9}
$$

### 4.4 两个必须写明的反例

**不连通反例。** 取 $p\ne q$，令

$$
\Sigma=(S^2\times\{p\})\sqcup(S^2\times\{q\}).
$$

两分支均满足 $*\omega_1=1,*\omega_2=0$ 且全测地，MCF 静止；它不会收敛到单个 $S^2\times\{r\}$。因此 D 必须假设 $\Sigma$ 连通，或把结论改成逐连通分支收敛。

**有符号 Jacobian 反例。** 取取向反转等距映射 $r:S^2\to S^2$。其 $J_r\equiv-1<1$，但图是全测地且 MCF 静止，不会趋于常值图。这证明推论 D 若只按字面理解为 $J_f<1$，则为假；正确条件是 $|J_f|<1$。

---

## 5. 为什么一般 $\beta>0$ 不能直接照搬 Wang

### 5.1 任意法向速度下的校准变分

**命题 5.1（经 Danus 独立验证）。** 若 $\Omega$ 是平行二形式，$F_t$ 以任意法向速度 $f$ 演化，则在有向正交切标架 $e_1,e_2$ 下

$$
\boxed{
\partial_t\eta_\Omega
=\Omega(\nabla_{e_1}^\perp f,e_2)
-\Omega(\nabla_{e_2}^\perp f,e_1).}
\tag{5.1}
$$

**证明。** 在固定曲面坐标中写 $X_i=F_*\partial_i$、$q=\sqrt{\det g}$ 及 $N=\Omega(X_1,X_2)$，则 $\eta_\Omega=N/q$。平行性和无挠性给

$$
\partial_tN
=\Omega(\bar\nabla_{X_1}f,X_2)
+\Omega(X_1,\bar\nabla_{X_2}f).
$$

又 $\partial_tq=-\langle H,f\rangle q$。把

$$
\bar\nabla_Xf=-S_fX+\nabla_X^\perp f
$$

代入，两个切向 Weingarten 项之和为 $-\eta_\Omega\langle H,f\rangle$，正好与面积元求导产生的项抵消，余下即 (5.1)。∎

### 5.2 HLS 速度的精确缺陷项

令

$$
b=\frac{\beta\sin^2\alpha}{\cos^2\alpha+\beta\sin^2\alpha}.
$$

则

$$
f_\beta=H-b(H+V).
\tag{5.2}
$$

定义

$$
\mathcal D_\Omega Z
=\Omega(\nabla_{e_1}^\perp Z,e_2)
-\Omega(\nabla_{e_2}^\perp Z,e_1).
$$

结合 Wang 对 $\mathcal D_\Omega H$ 的 Laplacian--Codazzi 公式，得到

$$
\begin{aligned}
(\partial_t-\Delta)\eta_\Omega
={}&|A|^2\eta_\Omega
-2\sum_k\Omega(A(e_k,e_1),A(e_k,e_2))\\
&+\sum_k\Omega((R(e_k,e_1)e_k)^\perp,e_2)\\
&-\sum_k\Omega((R(e_k,e_2)e_k)^\perp,e_1)\\
&-\mathcal D_\Omega\bigl(b(H+V)\bigr).
\end{aligned}
\tag{5.3}
$$

最后一项展开为

$$
-b\mathcal D_\Omega(H+V)
-(e_1b)\Omega(H+V,e_2)
+(e_2b)\Omega(H+V,e_1).
\tag{5.4}
$$

它含 $\nabla H$、$\nabla V$ 及 $\nabla b$，与主部同阶，没有固定符号。对定义 HLS 流的那一个 $\omega$，Kähler 代数产生特殊抵消，论文由此证明 $c=*\omega>0$ 保持；对第二个任意平行校准形式并无这种抵消。因此

$$
\eta'_0,\eta''_0>0
\quad\not\Longrightarrow\quad
\eta'_t,\eta''_t>0
$$

作为现有公式的自动推论，更不能自动推出全时间存在或收敛。

这就是一般 $\beta>0$ 版本的核心障碍，而不仅是“证明技术还不够”。

---

## 6. 第一层：精确时间重参数版本

### 6.1 时间变换定理

**定理 6.1（经 Danus 独立验证）。** 设

$$
\partial_tF=a(t)H,
\qquad 0<a_0\le a(t)\le a_1<\infty.
\tag{6.1}
$$

定义

$$
\tau(t)=\int_0^ta(s)ds,
\qquad G(x,\tau)=F(x,t(\tau)).
\tag{6.2}
$$

则

$$
\partial_\tau G=H_G.
\tag{6.3}
$$

且 $a_0t\le\tau(t)\le a_1t$，故有限/无限时间、每个时间片的几何性质和无穷远光滑极限在两条流之间完全对应。

**证明。** $\tau$ 严格递增且 $dt/d\tau=1/a$；相应时间的两个浸入完全相同，故诱导度量与 $H$ 相同。链式法则给

$$
\partial_\tau G=\partial_tF\frac{dt}{d\tau}=aH\frac1a=H.
$$

端点比较由积分得到。若原 $t$-流在有限 $T$ 最大，而 MCF 能延过有限 $\tau(T)$，则相应时间片给原流 $|A|$ 的一致上界；HLS 延拓定理使原流延过 $T$，矛盾。其余结论由时间映射共尾性直接得到。∎

### 6.2 HLS 流何时满足该条件

一个明确的充分条件是：**每个演化时间片上** Kähler 角空间常数，

$$
\alpha(x,t)=\theta(t),qquad \cos\theta(t)\ge\delta>0.
\tag{6.4}
$$

此时 $V=0$，且

$$
f_\beta=a(t)H,qquad
a(t)=\frac{\cos^2\theta(t)}{\cos^2\theta(t)+\beta\sin^2\theta(t)},
\tag{6.5}
$$

$$
\frac{\delta^2}{\delta^2+\beta(1-\delta^2)}
\le a(t)\le1.
\tag{6.6}
$$

这里必须假设 (6.4) 对所有时间成立；单有初始 Kähler 角常数并没有在本文中被证明会传播。

### 6.3 B、C、D、推论 D 的轨道版

在 (6.1) 下可作如下严格转移。

**B$_\beta^{\rm orb}$。** 若对应 MCF 满足定理 B\* 的有界几何、两校准正下界和分支局部化条件，则 HLS 流全时间存在。

**C$_\beta^{\rm orb}$。** 若对应 MCF 满足第 3 节的近双校准、非负曲率、局部非坍缩和正常图--Simon 条件，则 HLS 流光滑收敛到同一全测地曲面。

**D$_\beta^{\rm orb}$。** 在 $S^2\times S^2$ 中，若 $\Sigma$ 连通且 $*\omega_1\ge|*\omega_2|$、至少一点严格，则 HLS 流全时间存在并趋于某个 $S^2\times\{p\}$。

**Corollary D$_\beta^{\rm orb}$。** 若初始面是 $f:S^2\to S^2$ 的图且 $|\operatorname{Jac}f|<1$，则在轨道条件 (6.1) 下，图通过 HLS 流光滑变形到常值图。

**证明。** 定理 6.1 表明两个流拥有完全相同的时间片，只是时钟不同。将第 2--4 节相应 MCF 结论逐项搬运即可；$a_0>0$ 保证 $t\to\infty$ 当且仅当 $\tau\to\infty$。∎

这一层是精确等价定理，但它是一个受限不变量类，并不代表一般 $\beta>0$ HLS 流。

---

## 7. 第二层：一般 $\beta>0$ 的加权密度延拓定理

HLS 的加权量为

$$
\Psi_p(X,t;s)
=\int_{\Sigma_s}c^{-p}\phi_X(F)
\frac{e^{-|F-X|^2/[4(t-s)]}}{4\pi(t-s)}d\mu_s,
\qquad s<t.
\tag{7.1}
$$

这里距离在 $X$ 的正常坐标中表示，$\phi_X$ 是论文的局部截断。

**定理 7.1（有限视界加权密度准则，经 Danus 独立验证）。** 设 $F$ 是紧致 Kähler 曲面中闭曲面的最大经典 HLS $\beta$-流，$\beta>0$，最大时间为 $T_{\max}$。假设对每个有限 $S>0$，存在

$$
\delta_S>0,quad p_S\ge p_0(\beta,\delta_S,M),
\quad r_S>0,quad\varepsilon_S>0,
$$

其中 $r_S$ 小于统一正常坐标半径且 $r_S<\sqrt S/4$，使

$$
c\ge\delta_S
\quad\hbox{于 }0\le t<\min\{S,T_{\max}\},
\tag{7.2}
$$

并且对所有 $r_S^2\le t<\min\{S,T_{\max}\}$ 及所有 $X\in F_t(\Sigma)$，

$$
\Psi_{p_S}(X,t;t-r_S^2)<1+\varepsilon_S,
\tag{7.3}
$$

其中 $\varepsilon_S$ 是 HLS Corollary 4.2 的许可常数。则

$$
T_{\max}=\infty.
$$

**证明。** 若 $T_{\max}<\infty$，取 $S=2T_{\max}$。HLS $\varepsilon$-正则性由 (7.2)--(7.3) 给

$$
|A|(X,t)\le C_0/r_S
\quad(r_S^2\le t<T_{\max}).
$$

早期紧时间片 $[0,r_S^2]$ 上曲率由光滑性有界，故 $[0,T_{\max})$ 上 $|A|$ 一致有界。HLS Theorem 3.1 将流延过 $T_{\max}$，矛盾。∎

该条件只使用已经存在的较早时间片，不假设“流可延拓”，因而不是循环条件。另一方面，因 $\Psi_p$ 含 $c^{-p}$，(7.3) 通常强迫候选点附近近乎 holomorphic；它是明确充分条件，不声称最弱。

由此得到真正的一般 $\beta$ 的 B 型命题：两校准正性若另有独立演化不等式保持，再加 (7.2)--(7.3)，则全时间存在。关键是：全时间存在来自加权密度小量，而不是仅来自两校准正性。

---

## 8. 一般 $\beta>0$ 的 C、D 型结构定理

为避免把结论藏进假设，下面给出可以逐项检验的条件包。

### 8.1 结构条件

设 $\eta_\pm=*\Omega_\pm$，其中 $\Omega_\pm$ 是两平行校准形式。要求：

1. **双角最大值结构。** 存在一致椭圆算子 $\mathcal L_t$ 和有界漂移 $B_\pm$，使近校准区中
   $$
   (\partial_t-\mathcal L_t-B_\pm\cdot\nabla)\eta_\pm\ge0.
   \tag{8.1}
   $$
   对 D 型弱初值，要求更强的
   $$
   (\partial_t-\mathcal L_t-B_\pm\cdot\nabla)\eta_\pm
   \ge\kappa\eta_\pm(1-\eta_\pm^2),\quad\kappa>0.
   \tag{8.2}
   $$
2. **正则性结构。** 第 7 节的有限视界密度条件成立；若需无穷远一致几何，则对所有充分大时间可取同一个 $r,\delta,p,\varepsilon$。
3. **曲率耗散结构。** 存在有下界的非负缺陷泛函 $\mathcal Q(t)$ 及 $c_*>0$，使
   $$
   \mathcal Q'(t)\le-c_*\int_{\Sigma_t}|A|^2d\mu_t.
   \tag{8.3}
   $$
   一个等价可检验替代是
   $$
   \int|A|^2\le C\mathscr D_\beta(t),
   \qquad
   \mathscr D_\beta(t)=-\frac{d}{dt}L_\beta(\Sigma_t),
   \tag{8.4}
   $$
   因 $L_\beta$ 单调且有下界，(8.4) 立即给时空总曲率有限。
4. **局部非坍缩与高阶控制。** 固定尺度球面积有下界，且 $|A|$ 一致有界后，流的高阶抛物估计给 $|\nabla^kA|$ 的一致界。
5. **唯一极限结构。** Kähler 数据实解析；每个光滑聚点附近存在固定正常图规范，$L_\beta$ 满足相应 Łojasiewicz--Simon 不等式。

(8.1)--(8.5) 是新增条件；HLS 原论文只自动提供自身 Kähler 角的正性、曲率有界延拓和加权 $\varepsilon$-正则性，不自动提供第二校准角的 (8.1)、曲率耗散 (8.3) 或两角的 (8.2)。

### 8.2 条件 C$_\beta$

**定理 8.1。** 若初始时 $\eta_\pm>1-\varepsilon$，且 (8.1)、(8.3)--(8.5) 及无穷远统一的密度条件成立，则 HLS $\beta$-流全时间存在，并光滑收敛到一个全测地 $\beta$-临界曲面。

**证明。** (8.1) 保持近校准区。定理 7.1 给全时间存在，而统一尺度版本给 $|A|$ 的全时间一致界；高阶控制给光滑预紧性。(8.3) 或 (8.4) 给

$$
\int_0^\infty E(t)dt<\infty,
\qquad E(t)=\int_{\Sigma_t}|A|^2d\mu_t.
$$

由一致高阶界和 $\operatorname{Area}(\Sigma_t)\le L_\beta(\Sigma_0)$，$E$ 的时间导数有统一上界；固定宽度能量尖峰论证给 $E(t)\to0$。局部非坍缩和 $|\nabla A|$ 界再给 $\sup|A|\to0$。任何光滑聚点因此全测地。最后正常图规范下的 Łojasiewicz--Simon 不等式排除不同子列趋于不同聚点，并给整条流的光滑收敛。∎

### 8.3 条件 D$_\beta$ 与推论

**定理 8.2。** 在 $S^2\times S^2$ 中，设 $\Sigma$ 连通，初始时

$$
*\omega_1\ge|*\omega_2|
$$

且至少一点严格。若两校准量满足 (8.2)，并且第 7 节密度条件及 (8.3)--(8.5) 成立，则 HLS $\beta$-流全时间存在、对每个 $t>0$ 保持为图，并光滑收敛到某个 $S^2\times\{p\}$。

**证明。** (8.2) 的强最大值原理给 $\eta_\pm>0$，故第 4.1 节覆盖论证使每个正时间片为一层图。标量 logistic 比较给 $\eta_\pm\to1$。正则性、耗散和 Łojasiewicz--Simon 条件如定理 8.1 给唯一光滑极限；$*\omega_1\to1$ 后，第 4.3 节的校准等号论证把极限识别为水平切片。∎

**推论 8.3。** 若 $f:S^2\to S^2$ 满足 $|\operatorname{Jac}f|<1$，且从其图出发的 HLS 流满足定理 8.2 的新增结构条件，则图在 HLS 流中光滑变形到常值图。

这就是一般 $\beta>0$ 下对 Wang D/Corollary D 的严谨条件版。它清楚显示还需证明的核心是 (8.2)--(8.3)，而不是 varifold 记号本身。

---

## 9. HLS 论文已经给出的真正“单角 C 型”结果

Han--Li--Sun Theorem 6.1 证明了一个不同但重要的结果：在正标量曲率的紧致 Kähler--Einstein 曲面中，若定义流的那一个 Kähler 角满足

$$
\cos\alpha>1-\varepsilon_0,
$$

则流全时间存在，并趋于 holomorphic curve。它不是 Wang C 的“两反向校准 $\to$ 全测地曲面”。

其全局存在部分使用加权密度和 $\varepsilon$-正则性，是有效的。收敛句可补充如下。论文得到指数衰减

$$
\int_{\Sigma_t}\frac{\sin^2\alpha}{\cos\alpha}d\mu_t
\le Ce^{-\gamma t},
\tag{9.1}
$$

及

$$
\int_t^{t+1}\int_{\Sigma_s}(|H|^2+|V|^2)d\mu_sds
\le Ce^{-\gamma t}.
\tag{9.2}
$$

加权正则性已给 $|A|$ 一致有界；一致抛物性继而给所有高阶界，且近 holomorphic 图给局部非坍缩。由

$$
|f_\beta|\le |H|+|V|
$$

及一个标准时空插值：若 $|f_\beta|$ 在某点等于 $m$，一致的空间和时间导数界使它在空间半径、时间长度均与 $m$ 成比例的小柱内至少为 $m/2$，于是

$$
\int_{t}^{t+1}\int|f_\beta|^2\ge c m^5.
$$

结合 (9.2) 得

$$
\|f_\beta\|_{C^0(\Sigma_t)}\le Ce^{-\gamma' t}
$$

（缩小指数即可），从而

$$
\int_0^\infty\|f_\beta\|_{C^0}dt<\infty.
$$

所以 $F_t$ 在 $C^0$ 中为 Cauchy；高阶一致界和插值给光滑收敛。由 (9.1)，极限满足 $\cos\alpha\equiv1$，故为 holomorphic curve。

这补足了“曲率有界给延拓”与“整条轨道收敛”之间不应省略的桥梁。

---

## 10. 最终结论

1. Wang B 的原始全曲面密度 $1$ 推论不成立；一张图的重数一不能代表所有分支。B 在加入逐分支局部化/单位密度及有界几何条件后可严格证明。
2. Wang C 的曲率商和校准缺陷耗散是正确主干；补上非坍缩、高阶估计、光滑聚点、正常图规范和 Łojasiewicz--Simon 后得到完整收敛证明。
3. Wang D 的 “Theorem A” 应改为 B 或以后来的 Tsui--Wang 图形定理替代。连通性是必要条件；否则两个水平切片之并构成反例。
4. Corollary D 必须使用 $|\operatorname{Jac}f|<1$。有符号的单边条件 $\operatorname{Jac}f<1$ 不够。
5. 一般 $\beta>0$ HLS 流对第二校准量多出 (5.4) 的同阶无符号项，因此 Wang 的 B/C/D 不能无条件照搬。
6. 若 $f_\beta=a(t)H$ 且 $a$ 有正的双边界，则所有经修正的 MCF 结论通过时间变换完整转移。
7. 对真正一般的 $\beta>0$ 流，HLS 加权密度小量给出严格 B 型延拓；C/D 型结论还需双角最大值结构、曲率耗散和唯一极限结构。本文的定理 7.1、8.1、8.2 给出可直接核验的充分条件。

---

## 参考文献

1. M.-T. Wang, *Mean Curvature Flow of Surfaces in Einstein Four-Manifolds*, J. Differential Geom. 57 (2001), 301--338. [arXiv:math/0110019](https://arxiv.org/abs/math/0110019), [DOI](https://doi.org/10.4310/jdg/1090348113).
2. X. Han, J. Li, J. Sun, *Gradient flow for $\beta$-symplectic critical surfaces*, Ann. Inst. H. Poincaré Anal. Non Linéaire 41 (2024), 1083--1116. [EMS Press](https://ems.press/journals/aihpc/articles/12362953), [DOI](https://doi.org/10.4171/AIHPC/100).
3. M.-T. Wang, *Long-time Existence and Convergence of Graphic Mean Curvature Flow in Arbitrary Codimension*, Invent. Math. 148 (2002), 525--543. [arXiv:math/0112297](https://arxiv.org/abs/math/0112297), [DOI](https://doi.org/10.1007/s002220100201).
4. M.-P. Tsui, M.-T. Wang, *Mean Curvature Flows and Isotopy of Maps Between Spheres*, Comm. Pure Appl. Math. 57 (2004), 1110--1126. [arXiv:math/0302242](https://arxiv.org/abs/math/0302242).
5. B. White, *A Local Regularity Theorem for Mean Curvature Flow*, Ann. of Math. 161 (2005), 1487--1519. [DOI](https://doi.org/10.4007/annals.2005.161.1487).
6. L. Simon, *Asymptotics for a Class of Nonlinear Evolution Equations, with Applications to Geometric Problems*, Ann. of Math. 118 (1983), 525--571. [DOI](https://doi.org/10.2307/2006981).
7. D. M. DeTurck, J. L. Kazdan, *Some Regularity Theorems in Riemannian Geometry*, Ann. Sci. Éc. Norm. Supér. 14 (1981), 249--260. [Numdam](https://www.numdam.org/item/10.24033/asens.1405.pdf).
8. X. Han, J. Sun, *An $\varepsilon$-regularity Theorem for the Mean Curvature Flow*, 2011. [arXiv:1102.4800](https://arxiv.org/abs/1102.4800).

---

### 审计状态

- Danus 工作单元：7 个；类别为 high $\times3$、xhigh $\times4$。
- 已通过独立验证：任意法向速度校准变分、HLS 第二校准缺陷公式、时间重参数定理、单图一重吹起、Wang C 能量衰减、总曲率到点态曲率、Wang D 强最大值/图结构、HLS 加权密度延拓准则。
- 未作断言：仅由一般 $\beta>0$ 的双校准正性即可推出全时间存在；仅由嵌入性即可推出所有切流一重；Wang B 原文的全浸入版本已由后续文献无条件补全。
