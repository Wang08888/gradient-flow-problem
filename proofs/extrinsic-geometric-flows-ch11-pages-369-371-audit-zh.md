# 《Extrinsic Geometric Flows》第 11 章第 369–371 页证明审计

## Hamilton 对 Huisken 凸超曲面收缩定理证明的独立核查

**审计对象**：Ben Andrews、Bennett Chow、Christine Guenther、Mat Langford，*Extrinsic Geometric Flows*，Graduate Studies in Mathematics 206，AMS，2020，第 11 章印刷页 369–371。  
**源文件**：`Extrinsic Geometric Flows (Ben Andrews, Bennett Chow, Christine Guenther etc）.pdf`，PDF 页 398–400。  
**审计方式**：逐页核对原文、独立重算缩放律和 Huisken 单调性公式，并以 Danus 形式化事实校验器复核关键代数命题。  
**报告日期**：2026 年 8 月 12 日。

> **总裁决**  
> 书中要证明的 Huisken 定理及 Hamilton 证明路线是正确的；但第 369–371 页的印刷证明不能按原文逐式成立。至少有三处必须显式修正：式 (11.19)–(11.20) 的时间幂号、式 (11.22) 中遗漏的高斯权重，以及平移缩放后高斯中心的错配。此外，永恒极限、嵌入性和全局光滑收敛需要补写若干标准紧性与凸性论证。完成这些修正后，证明成立。

最终分类为：

\[
\boxed{\text{在修正三处明确错误，并补充标准紧性论证后成立。}}
\]

---

## 1. 审计范围与证明目标

该段证明处理一个紧致、严格凸的欧氏超曲面平均曲率流

\[
X:M^n\times[0,T)\longrightarrow \mathbb R^{n+1},
\qquad \partial_tX=-H\nu,
\]

并使用保持的曲率夹逼

\[
h_{ij}\ge \alpha H g_{ij},\qquad \alpha>0,
\]

证明有限灭绝时间 (T) 前不存在非球形奇性；选取适当的灭绝中心 (p_\infty) 后，归一化流

\[
\widetilde X(\cdot,\tau)
=\frac{X(\cdot,t)-p_\infty}{\sqrt{2n(T-t)}},
\qquad
\tau=-\frac1{2n}\log\!\left(1-\frac tT\right),
\]

应当在重参数化后光滑收敛到单位圆球。

第 369–371 页的逻辑由三段组成：

1. 排除 Type-II 曲率爆破，从而得到 Type-I 上界；
2. 用 Type-I 抛物缩放提取紧致自收缩极限，并证明该极限为圆球；
3. 以反证法得到无迹第二基本形及其导数的归一化衰减，再调用第 8.4.4 节完成全流收敛。

---

## 2. 结论总表

| 位置 | 原文关键步骤 | 判定 | 审计结论 |
|---|---|---|---|
| p.369 | Type-II 点选取及第一轮缩放 | **正确** | 缩放区间、曲率界及基点归一化正确 |
| p.369 | 提取永恒极限 | **标准但省略** | 需在任意固定双侧时间区间上使用内部导数估计及对角子列 |
| p.369 | 对极限应用 Theorem 11.20 | **标准但省略** | Theorem 11.11 先给 proper immersion；需由严格凸性和完备性补出 embeddedness |
| p.369 | avoidance 排除紧致永恒极限 | **正确** | 紧致切片可被大球包围，而球有限时灭绝，与永恒向前存在矛盾 |
| p.369 | 式 (11.19)–(11.20) | **明确错误** | ((T-t)) 的幂应为 (+(m+1))，不是 (-(m+1)) |
| p.370 | 第二轮 Type-I 缩放及曲率界 | **正确** | (|II_j|^2\le H_j^2\le C^2/(1-t)) 的缩放正确 |
| p.370 | 极限紧致及全局光滑收敛 | **标准但省略** | 先局部收敛；极限紧致后，穷竭像最终覆盖整个极限，才可升级为全局收敛 |
| p.370 | 式 (11.22) 的单调性等式 | **明确错误** | 左端遗漏严格正的反向热核高斯权重 |
| p.370 | 高斯中心 (q_j) | **明确错误** | 书中的缩放平移中心与高斯中心不相容，必须改用 \(\widehat q_j\) 或整体再平移 |
| p.370 | 从积分趋零推出自收缩方程 | **修正后正确** | 在紧集上利用正高斯权重、光滑收敛和非负连续性即可 |
| p.370 | Lemma 11.21 判定圆球 | **正确** | 修正前序后，紧致、局部严格凸的自收缩子满足引理条件 |
| p.371 | 反证排除高阶非球性 | **修正后正确** | 必须使用改正后的正幂缩放量 |
| p.371 | “proceed as in Section 8.4.4” | **标准但过度压缩** | 还需写出中心选择、(C^0) 控制、度量非退化与重参数化 |

---

## 3. 印刷页 369：Type-II 排除

### 3.1 最大点选择与第一轮抛物缩放

令

\[
S_j=T-\frac1j,
\]

并取 ((x_j,t_j)) 使

\[
H^2(x_j,t_j)(S_j-t_j)
=\max_{M\times[0,S_j]}H^2(x,t)(S_j-t).
\]

设

\[
\lambda_j=H(x_j,t_j),\qquad
T_j=\lambda_j^2(S_j-t_j),\qquad
\sigma_j=\lambda_j^2t_j,
\]

以及

\[
X_j(x,t)=\lambda_j\bigl(X(x,t_j+\lambda_j^{-2}t)-X(x_j,t_j)\bigr).
\]

在原流严格凸的背景下 (H>0)，故 (lambda_j) 定义无歧义。若 Type-II 情形成立，则

\[
T_j\to\infty,qquad t_j\to T,qquad
\lambda_j\to\infty,qquad \sigma_j\to\infty.
\]

最大点性质给出

\[
H_j^2(x,t)\le \frac{T_j}{T_j-t},
\qquad t\le T_j,
\]

而凸性给出 (|II_j|^2\le H_j^2)。在每个固定时间区间 ([-A,A]) 上，右端随 (j\to\infty) 一致有界，因此可结合局部高阶导数估计和对角线方法提取定义在整个 ((-infty,infty)) 上的光滑极限。

**判定：正确，但永恒极限的双侧紧性论证应当补写。**

### 3.2 从 proper immersion 到 properly embedded

书中 Theorem 11.11 的直接输出是 proper immersion；而 Theorem 11.20 的表述要求 properly embedded。两者之间不能只凭名称替换，但在当前凸性背景下可由标准论证补足：

1. proper immersion 导出完备性；
2. 曲率夹逼在光滑极限中保留：
   \[
   h_{ij,\infty}\ge \alpha H_\infty g_{ij,\infty};
   \]
3. 基点满足 (H_\infty(x_\infty,0)=1)，结合强最大值原理得到 (H_\infty>0)；
4. 因而极限局部严格凸；
5. 由书中 Theorem 5.18，或 Hadamard–Stoker / van Heijenoort 型全局凸性定理，完备局部严格凸超曲面是边界型嵌入凸超曲面。

补上这座桥后，可应用 Theorem 11.20 将永恒、严格凸极限识别为平移孤立子。

**判定：标准但省略。**

### 3.3 avoidance 排除紧致极限

若该 properly embedded 极限在某一时刻紧致，则 properness 使参数流形也紧致。把该切片放入足够大的圆球内，并令圆球按平均曲率流收缩。avoidance 原理要求极限流始终留在收缩球内；但圆球在有限向前时间灭绝，这与极限流对所有正时间光滑存在矛盾。因此该极限非紧致。

另一方面，正曲率夹逼与 Theorem 11.20 会迫使平移孤立子紧致，构成矛盾。故 Type-II 被排除，得到 Type-I 估计

\[
\max_M H^2(\cdot,t)\le \frac{C^2}{T-t}.
\]

**判定：正确。**

---

## 4. 第一处明确错误：式 (11.19)–(11.20) 的幂号

书中定义

\[
A_0(t)=\max_M|\mathring{II}|^2,
\qquad
A_m(t)=\max_M|\nabla^mII|^2\quad(m\ge1).
\]

原文把应证明的衰减写成

\[
\limsup_{t\uparrow T}(T-t)^{-(m+1)}A_m(t)=0,
\]

并以相同负幂写其否定。这里的指数符号与抛物缩放不相容。

在空间伸缩 (X\mapsto\lambda X) 下，

\[
|\nabla^mII_\lambda|^2
=\lambda^{-2(m+1)}|\nabla^mII|^2.
\]

第二轮缩放使用

\[
\lambda_j=(T-t_j)^{-1/2},
\]

因此在缩放时刻 (t=0)，

\[
A_{m,j}(0)
=\lambda_j^{-2(m+1)}A_m(t_j)
=(T-t_j)^{m+1}A_m(t_j).
\]

正确版本必须是

\[
\boxed{
\limsup_{t\uparrow T}(T-t)^{m+1}A_m(t)=0
}
\tag{11.19 corrected}
\]

若其失败，则存在 (arepsilon>0) 和 (t_j\uparrow T) 使

\[
\boxed{
(T-t_j)^{m+1}A_m(t_j)\ge\varepsilon.
}
\tag{11.20 corrected}
\]

这才等价于缩放流在 (t=0) 上的相应非球性量具有统一正下界，并可与圆球极限矛盾。若坚持书中负幂，缩放后的下界反而趋于 (0)，无法排除圆球。

**判定：明确的排版/公式错误，且对反证闭环有实质影响。**

---

## 5. 印刷页 370：Type-I 缩放与紧致极限

取任意 (t_j\uparrow T)，选择 (x_j\in M) 使

\[
H(x_j,t_j)=\max_M H(\cdot,t_j),
\]

并定义

\[
\lambda_j=(T-t_j)^{-1/2},
\]

\[
X_j(x,t)=\lambda_j
\bigl(X(x,t_j+\lambda_j^{-2}t)-X(x_j,t_j)\bigr).
\]

该流定义在

\[
t\in(-\sigma_j,1),
\qquad \sigma_j=\lambda_j^2t_j\to\infty.
\]

Type-I 估计缩放为

\[
|II_j|^2\le H_j^2\le \frac{C^2}{1-t}.
\]

在每个 ((-infty,b])、(b<1) 的固定紧时间区间上，右端一致有界。配合内部高阶导数估计及对角线方法，可得到定义在 ((-infty,1)) 上的光滑极限。

Lemma 8.3 提供

\[
\max_M H^2(\cdot,t)\ge \frac1{2(T-t)},
\]

所以

\[
H_j(x_j,0)=\sqrt{T-t_j}\max_MH(\cdot,t_j)\ge\frac1{\sqrt2}.
\]

极限非平凡；再由夹逼和强最大值原理得到 (H_\infty>0)，从而极限严格凸。补上第 3.2 节中的全局嵌入性桥梁后，Theorem 11.20 迫使极限紧致。

这里还有一个常被忽略的逻辑顺序：Theorem 11.11 首先只给基于穷竭集的局部光滑收敛；在极限已知紧致后，极限的一个有限穷竭集已经是整个流形，所以足够大的 (j) 上收敛可升级为全局光滑收敛。这一升级确保后面对全局最大值 (A_{m,j}(0)) 的使用没有“逃向无穷远”的问题。

**判定：结论正确，但内部估计、嵌入性和局部到全局的升级均应补写。**

---

## 6. 第二处明确错误：Huisken 单调性公式遗漏高斯权重

Huisken 单调性公式的耗散项是加权平方积分，不是无权平方积分。若原始终点为 ((p_\infty,T))，则

\[
\Phi_{p_\infty,T}(x,t)
=[4\pi(T-t)]^{-n/2}
\exp\!\left(-\frac{|X(x,t)-p_\infty|^2}{4(T-t)}\right),
\]

并有

\[
\frac d{dt}\int_M\Phi_{p_\infty,T}\,d\mu_t
=-
\int_M
\left|
H-\frac{\langle X-p_\infty,\nu\rangle}{2(T-t)}
\right|^2
\Phi_{p_\infty,T}\,d\mu_t.
\]

原书 p.370 的式 (11.22) 在左端省略了 (Phi)。省略后等式一般不成立；例如即便流是圆形自收缩子，只要终点中心或终止时间不匹配，无权平方积分也不会等于高斯面积之差。

在缩放变量中，正确的积分恒等式应写为

\[
\begin{aligned}
&\int_a^b\int_M
\left(
H_j-
\frac{\langle X_j-\widehat q_j,N_j\rangle}{2(1-t)}
\right)^2
\Phi^j_{\widehat q_j,1}\,d\mu_{j,t}\,dt\\
&\qquad=
\Theta_{p_\infty,T}(t_j+\lambda_j^{-2}a)
-
\Theta_{p_\infty,T}(t_j+\lambda_j^{-2}b),
\end{aligned}
\tag{11.22 corrected}
\]

其中

\[
\Phi^j_{q,1}(x,t)
=[4\pi(1-t)]^{-n/2}
\exp\!\left(
-\frac{|X_j(x,t)-q|^2}{4(1-t)}
\right).
\]

**判定：明确错误；必须恢复严格正的高斯权重。**

---

## 7. 第三处明确错误：缩放平移中心与高斯中心错配

缩放流以

\[
c_j=X(x_j,t_j)
\]

为平移中心：

\[
X_j=\lambda_j(X-c_j).
\]

若仍追踪原始固定终点 ((p_\infty,T))，则缩放后的正确高斯中心必须是

\[
\boxed{
\widehat q_j=\lambda_j(p_\infty-c_j)
=\lambda_j\bigl(p_\infty-X(x_j,t_j)\bigr).
}
\]

但是书中另取固定参数点 (x_\infty)，令

\[
p_j=X(x_\infty,t_j),
\qquad q_j=\lambda_j(p_\infty-p_j).
\]

除非 (c_j=p_j)，否则 (q_j) 在当前坐标系中对应的原始中心是

\[
c_j+p_\infty-p_j,
\]

而不是 (p_\infty)。因此原书所写的高斯面积差与左端缺陷项并不对应同一终点。

有两种等价修补方式：

1. 保持缩放定义不变，直接把所有 (q_j) 改为 (widehat q_j)；
2. 先记
   \[
   r_j=\lambda_j(p_j-c_j)=X_j(x_\infty,0),
   \]
   在已知极限紧致、收敛全局后 (r_j) 有界，取子列后整体再平移，并一致地把中心改为 (q_j+r_j=\widehat q_j)。

第一种写法最直接。

**判定：明确的坐标中心错误。**

---

## 8. 从修正后的单调性公式到自收缩圆球

固定

\[
-\infty<a<b<1.
\]

对应的原始时间

\[
t_j+\lambda_j^{-2}a,qquad
t_j+\lambda_j^{-2}b
\]

都趋于 (T)。高斯面积 (Theta_{p_\infty,T}(t)) 单调，因而在 (t\uparrow T) 时有极限；所以修正后式 (11.22) 的右端趋于 (0)。

在任意紧空间区域和 ([a,b]) 上，光滑收敛使缺陷项、度量与面积元收敛；高斯权重严格为正。于是极限满足

\[
\int_a^b\int_K
\left(
H_\infty-
\frac{\langle X_\infty-q_\infty,N_\infty\rangle}{2(1-t)}
\right)^2
\Phi_{q_\infty,1}\,d\mu_{\infty,t}\,dt=0.
\]

由于被积函数非负且连续，得到逐点自收缩方程

\[
H_\infty-
\frac{\langle X_\infty-q_\infty,N_\infty\rangle}{2(1-t)}=0.
\]

这里不需要先处理全局高斯尾部：局部积分已经足以推出方程；而极限紧致后，收敛本身也已升级为全局。

极限同时是紧致、局部严格凸的自收缩超曲面，故 Lemma 11.21 适用，极限必为缩小圆球。

**判定：在恢复高斯权重并修正中心后成立。**

---

## 9. 印刷页 371：高阶圆化与最终收敛

假设修正后的式 (11.19) 对某个最小 (m) 失败。则可取 (t_j\uparrow T) 使

\[
(T-t_j)^{m+1}A_m(t_j)\ge\varepsilon.
\]

对相应 Type-I 缩放，左端正是 (A_{m,j}(0))。上一节已经说明，取子列后缩放流全局光滑收敛到圆球。圆球满足

\[
\mathring{II}=0,
\qquad
\nabla^mII=0\quad(m\ge1),
\]

因此

\[
A_{m,j}(0)\longrightarrow0,
\]

与统一正下界 (arepsilon) 矛盾。于是对所有 (m\ge0)，修正后的式 (11.19) 成立。

原文随后一句 “proceed as in Section 8.4.4” 指向正确，但论证高度压缩。完整收尾至少还应说明：

1. 由内外球或轨迹控制确定唯一灭绝中心 (p_\infty)；
2. 用 (sqrt{2n(T-t)}) 归一化，使标准缩小球极限半径为 (1)；
3. 用 (m=0) 的无迹曲率衰减控制形状接近圆球；
4. 用所有高阶衰减和抛物估计得到 (C^\infty) 控制；
5. 控制度量非退化并选择时间依赖微分同胚，消除切向漂移；
6. 得到重参数化后的全族，而不仅仅是子列，光滑收敛到单位球。

若只用 ((T-t)^{-1/2}) 缩放，标准球极限半径是 (sqrt{2n})；“单位球”需要额外除以 (sqrt{2n})。

**判定：证明方向正确，但需调用并展开第 8.4.2–8.4.4 节中的标准收尾。**

---

## 10. 修正后的完整证明链

下列版本保留 Hamilton 证明的核心思路，同时补足必要逻辑接口：

1. **曲率夹逼与凸性保持。** 严格凸性和 (h_{ij}\ge\alpha Hg_{ij}) 沿流保持。
2. **排除 Type-II。** 按 p.369 选择最大点并作第一轮缩放；在固定双侧时间区间上用曲率界和内部导数估计提取完备 eternal 极限。
3. **补足嵌入性。** 极限 proper、完备且严格局部凸，由全局凸性定理成为 properly embedded；Theorem 11.20 把它识别为平移孤立子。
4. **avoidance 矛盾。** Theorem 11.20 迫使该孤立子紧致，而紧致 eternal-forward 平均曲率流与缩小球屏障矛盾。因此原流是 Type-I。
5. **第二轮缩放。** 取任意 (t_j\uparrow T)，以 ((T-t_j)^{-1/2}) 缩放；Type-I 界给出每个 (b<1) 上的一致曲率和高阶导数控制。
6. **紧致非平凡极限。** Lemma 8.3 保证基点曲率不退化；夹逼、强最大值原理和全局凸性定理给出紧致严格凸 embedded 极限；局部收敛升级为全局收敛。
7. **正确应用 Huisken 单调性。** 使用固定原始终点 ((p_\infty,T))、正确缩放中心 (widehat q_j) 及高斯权重 (Phi^j_{widehat q_j,1})。端点高斯面积差趋于 (0)，推出极限自收缩方程。
8. **识别圆球。** Lemma 11.21 说明紧致局部严格凸自收缩子是圆球。
9. **反证所有归一化非球性衰减。** 使用正确正幂
   \[
   (T-t)^{m+1}A_m(t)\to0.
   \]
   否则缩放后的统一正下界与全局光滑圆球极限矛盾。
10. **全流圆化。** 按第 8.4.2–8.4.4 节选取灭绝中心、归一化并重参数化，得到 (C^\infty) 收敛到单位圆球。

这条修正链不改变定理陈述，也不改变 Hamilton 证明的几何策略；它只修复公式和书面省略。

---

## 11. Danus 独立事实校验记录

本次审计将关键代数命题拆成可独立验证的事实。下列事实已由 Danus 校验器接受：

| 事实编号 | 内容 |
|---|---|
| `42768acbd731ae8a` | (|\nabla^mII|^2) 在 (X\mapsto\lambda X) 下按 (lambda^{-2(m+1)}) 缩放，故 (11.19) 应使用正幂 |
| `9e124f57d097ac98` | 对式 (11.19)–(11.20) 正确缩放维数的独立复核 |
| `9be713abcb1f2fc3` | Huisken 单调性耗散项必须包含反向热核权重 |
| `3e0ae2115e2d7922` | 对遗漏高斯权重所导致错误的独立复核 |
| `8b173f0e6624d3db` | 在 (H>0) 的当前严格凸背景下，Type-II 最大点缩放参数的极限关系成立 |

有一条过度一般化、未写 (H>0) 的候选命题曾被拒绝；这不构成原书在当前上下文中的问题，因为严格凸紧致超曲面已给出 (H>0)。审计因此保留了原证明的上下文假设，没有把局部公式误写成无条件命题。

---

## 12. 最终裁决

### 12.1 关于定理

Huisken 的凸超曲面圆化定理本身成立，Hamilton 在此处采用的两次放缩、孤立子分类、Huisken 单调性和自收缩子分类路线也是可修复且有效的。

### 12.2 关于印刷证明

印刷页 369–371 **并非逐式正确**。以下三处属于必须更正的明确错误：

1. **式 (11.19)–(11.20)：** ((T-t)^{-(m+1)}) 应改为 ((T-t)^{m+1})；
2. **式 (11.22)：** 耗散积分中必须乘反向热核高斯权重；
3. **高斯中心：** 应使用 (widehat q_j=\lambda_j(p_\infty-X(x_j,t_j)))，或等价地统一重平移全部缩放流。

另有以下标准论证需要补写：

- 在固定双侧时间区间上提取 eternal 极限；
- 从 proper immersion、完备性与严格凸性得到 properly embedded；
- 极限紧致后把局部光滑收敛升级为全局光滑收敛；
- 按第 8.4.2–8.4.4 节完成灭绝中心、归一化、重参数化和全族收敛。

因此最准确的裁决是：

\[
\boxed{
\text{证明思路正确；原文含三处实质性公式错误，修正并补足标准引理后成立。}
}
\]

---

## 13. 参考文献与定位

1. Ben Andrews, Bennett Chow, Christine Guenther, Mat Langford, *Extrinsic Geometric Flows*, Graduate Studies in Mathematics 206, American Mathematical Society, 2020：Chapter 11, pp. 369–371；Theorem 11.11；Theorem 11.20；Lemma 11.21；Theorem 10.3 与 Corollary 10.5；Lemma 8.3；Sections 8.4.2–8.4.4；Theorem 5.18。
2. Richard S. Hamilton, “Convex hypersurfaces with pinched second fundamental form,” *Communications in Analysis and Geometry* **2** (1994), 167–172。
3. Gerhard Huisken, “Flow by mean curvature of convex surfaces into spheres,” *Journal of Differential Geometry* **20** (1984), 237–266。

---

## 附录：可直接用于勘误表的最短版本

**Erratum 1.** On p.369, equations (11.19) and (11.20), replace ((T-t)^{-(m+1)}A_m(t)) by ((T-t)^{m+1}A_m(t)).

**Erratum 2.** On p.370, the spacetime integral in (11.22) must include the backward heat-kernel factor (Phi^j_{q,1}).

**Erratum 3.** With the rescaling centered at (X(x_j,t_j)), replace (q_j=\lambda_j(p_\infty-X(x_\infty,t_j))) by

\[
\widehat q_j=\lambda_j(p_\infty-X(x_j,t_j)),
\]

or retranslate the rescaled flows consistently before applying Huisken monotonicity.

