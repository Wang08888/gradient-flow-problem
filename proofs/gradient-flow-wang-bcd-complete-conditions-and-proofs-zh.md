# 一般 $\beta>0$ 梯度流中 Wang 型 B、C、D 命题的完整条件与严格证明

## 对旧报告中条件性命题的闭合、尺度修正与适用边界

**研究对象**　Han--Li--Sun 的 $L_\beta$ 负梯度流，$\beta>0$\
**解的范畴**　首个奇异时刻以前的紧致经典光滑解\
**比较对象**　Mu-Tao Wang（2001）的 Theorems B、C、D 与 Corollary D\
**审计目标**　补全 `gradient-flow-wang-theorems-b-c-d-audit-and-extensions-zh.pdf` 第 7--8 节的全部量词与证明桥梁\
**核验日期**　2026 年 8 月 23 日

---

> **总判定。** 对一般 $\beta>0$，仅有两个校准角为正仍不能推出 Wang 的 B、C、D。可以严格闭合的版本有三层：第一层是 HLS 加权密度给出的 B 型延拓定理；第二层在此基础上加入曲率--梯度强制性、局部非坍缩和解析梯度结构，得到 C 型全测地收敛；第三层在 $S^2\times S^2$ 中加入双角标量抛物--logistic 不等式，得到 D 型图形化与水平切片收敛。若速度恰为 $a(t)H$，则另有一个不需要上述新 PDE 结构的精确时间重参数版本。

## 0. 旧稿中必须修正的四点

| 旧稿写法 | 严格修正 |
|---|---|
| HLS Corollary 4.2 给 $P(X_0,t_0;2r)$ 上的曲率界 | 原 PDF 是 $P(X_0,t_0;r/2)$；旧稿的 $2r$ 是 OCR 误读 |
| 固定尺度密度条件从 $t=r^2$ 开始即可 | 还要保证 HLS 所需的正常坐标及外围抛物柱位于已存在的时间区间；本文用 $r(t)=\min\{r_*,\sqrt t/32\}$ 明确解决 |
| D 型弱条件 $*\omega_1\ge|*\omega_2|$ 可直接作为 HLS 初值 | 若流由 $\omega_+=\omega_1+\omega_2$ 定义，还必须有 $*\omega_+>0$；图上 $J_f=-1$ 会令 $\cos\alpha=0$，$L_\beta$ 流根本未定义 |
| C、D 共用“耗散 + LS”条件包 | C 需要曲率耗散以迫使 $A\to0$；D 的 logistic 角度已经迫使图斜率趋零，所以 D 不需要另加 $\int|A|^2$ 耗散，只需正则性、预紧性和解析锁定 |

本文所有新增条件都标出其逻辑用途，不声称它们已由 HLS 原文自动证明，也不声称它们是最弱条件。

## 1. 流、能量和 HLS 的两项正则性输入

设 $(M^4,\bar g,J,\omega)$ 是紧 Kähler 曲面，$F_t:\Sigma^2\to M$ 是闭有向曲面的经典解。记

$$
c=\cos\alpha=*F_t^*\omega>0,
\qquad s=\sin\alpha,
\qquad D=c^2+\beta s^2,
$$

$$
V=(e_2\alpha)v_3+(e_1\alpha)v_4.
$$

HLS 流为

$$
\boxed{
\partial_tF=f_\beta
=\frac{c^2H-\beta s^2V}{c^2+\beta s^2}.}
\tag{1.1}
$$

令

$$
L_\beta(F)=\int_\Sigma c^{-\beta}\,d\mu.
$$

沿经典解有

$$
\frac{d}{dt}L_\beta(F_t)
=-(\beta+1)\int_{\Sigma_t}
\frac{c^2+\beta s^2}{c^{\beta+2}}|f_\beta|^2\,d\mu_t.
\tag{1.2}
$$

把右侧的加权范数记为 $\|f_\beta\|_{W,t}^2$。若 $c\ge\delta>0$，则有明确的范数等价

$$
(\beta+1)\min\{1,\beta\}\|Z\|_{L^2(\Sigma_t)}^2
\le \|Z\|_{W,t}^2
\le(\beta+1)\max\{1,\beta\}\delta^{-\beta-2}
\|Z\|_{L^2(\Sigma_t)}^2.
\tag{1.3}
$$

### 1.1 延拓准则

HLS Theorem 3.1 表明：若最大光滑区间为 $[0,T)$ 且

$$
\sup_{0\le t<T}\|A_t\|_{L^\infty}<\infty,
\tag{1.4}
$$

则流可光滑延过 $T$。

### 1.2 加权密度与正确的尺度结论

在 $X\in M$ 的正常坐标中取 HLS 截断函数 $\phi_X$，定义

$$
\Psi_p(X,t;s)
=\int_{\Sigma_s}c^{-p}\phi_X(F)
\frac{e^{-|F-X|^2/[4(t-s)]}}{4\pi(t-s)}\,d\mu_s,
\qquad s<t.
\tag{1.5}
$$

由紧性和有界几何，可固定 $r_{\rm H}>0$，使所有中心、所有不超过 $r_{\rm H}$ 的尺度都可使用统一正常坐标、截断和 HLS Corollary 4.2。其精确结论是：当 $p$ 合法、$c\ge\delta$ 且

$$
\Psi_p(X_0,t_0;t_0-r^2)<1+\varepsilon_{\rm HLS},
\tag{1.6}
$$

同时外围抛物柱包含在光滑流区域内时，

$$
\boxed{
\sup_{P(X_0,t_0;r/2)}|A|
\le\frac{C_{\rm HLS}}r.}
\tag{1.7}
$$

这里的半径是 $r/2$，不是 $2r$。

## 2. 完整的 B 型定理：非循环的有限视界密度条件

### 命题 2.1（终端逐点加权低密度推出延拓）

设经典 HLS 流定义于 $[0,T)$，$T<\infty$。取 $K_1\ge\sup_M|\operatorname{Ric}_M|$，并令

$$
\delta_T=e^{-K_1T/\beta}\min_{\Sigma_0}\cos\alpha_0>0.
\tag{2.0}
$$

固定 $R_{\rm cut}>0$ 使 $2R_{\rm cut}<\operatorname{inj}(M)$，并在每个 $X\in M$ 选取支撑于 $B_{2R_{\rm cut}}(X)$、在 $B_{R_{\rm cut}}(X)$ 等于 $1$ 的统一截断。取

$$
p\ge p_0(\beta,\delta_T),
\qquad
8\rho_*<\min\{R_{\rm cut},\sqrt T\}.
\tag{2.0a}
$$

若对每个 $X\in M$ 都存在 $r_X\in(0,\rho_*)$，使

$$
\Psi_p(X,T;T-r_X^2)
<1+\varepsilon_{\rm HLS}(p,\delta_T,M),
\tag{2.0b}
$$

则流可光滑延过 $T$。

#### 证明

HLS Corollary 2.4 给 $c\ge\delta_T$。由 (2.0a)，每个测试尺度所需的正常坐标、截断和外围抛物柱都在合法区域内。HLS Corollary 4.2 因而给每个 $X\in M$ 一个终端正则柱；更具体地，在

$$
F_t(q)\in B_{r_X/2}(X),
\qquad T-r_X^2/4<t<T
$$

时有

$$
|A|\le C_{\rm HLS}/r_X.
$$

空间球族 $\{B_{r_X/4}(X):X\in M\}$ 覆盖紧流形 $M$；取有限子覆盖 $B_{r_i/4}(X_i)$。令

$$
\tau=\min_i r_i^2/4>0,
\qquad
C_T=\max_i C_{\rm HLS}/r_i<\infty.
$$

若 $T-\tau<t<T$，任意 $F_t(q)$ 落在某个 $B_{r_i/4}(X_i)$ 内，从而 $|A(q,t)|\le C_T$。较早的紧时间段由经典光滑性控制；HLS Theorem 3.1 遂将流延过 $T$。$\square$

下面把命题 2.1 改写成完全不预知 $T_{\max}$ 的全局充分条件。

定义

$$
r_S(t)=\min\left\{r_S,\frac{\sqrt t}{32}\right\}.
\tag{2.1}
$$

常数 $32$ 不是最佳常数；它只用于保证以 $r_S(t)$ 为核心尺度时，HLS 所需的外围空间--时间缓冲仍位于 $[0,t]$ 内。

### 定理 2.2（一般 $\beta>0$ 的 B 型加权密度延拓）

设 $F_t$ 是最大经典 HLS 流，最大时间为 $T_{\max}\in(0,\infty]$。假设对每个有限 $S>0$，存在

$$
\delta_S>0,
\qquad
p_S\ge p_0(\beta,\delta_S,M),
\qquad
0<r_S<r_{\rm H}/32,
\tag{2.2}
$$

以及 HLS 许可常数

$$
\varepsilon_S
=\varepsilon_{\rm HLS}(\beta,p_S,\delta_S,M)>0,
\tag{2.3}
$$

使得：

1. 对所有 $0\le t<\min\{S,T_{\max}\}$，有
   $$c(\cdot,t)\ge\delta_S;\tag{2.4}$$
2. 对所有 $0<t<\min\{S,T_{\max}\}$ 和所有 $x\in\Sigma$，
   $$
   \Psi_{p_S}
   \bigl(F_t(x),t;t-r_S(t)^2\bigr)
   <1+\varepsilon_S;
   \tag{2.5}
   $$
3. 正常坐标和截断按 HLS Theorem 3.3--Corollary 4.2 的同一约定选取。

则

$$
\boxed{T_{\max}=\infty.}
\tag{2.6}
$$

#### 证明

反设 $T_{\max}=T<\infty$，取任意 $S>T$。当 $t\in[T/2,T)$ 时，

$$
r_S(t)\ge
r_*:=\min\left\{r_S,\frac{\sqrt{T/2}}{32}\right\}>0.
\tag{2.7}
$$

由 (2.4)--(2.5) 和 HLS Corollary 4.2，在每个中心 $(F_t(x),t)$ 使用尺度 $r_S(t)$，得到

$$
|A|(x,t)
\le\frac{C_{\rm HLS}}{r_S(t)}
\le\frac{C_{\rm HLS}}{r_*},
\qquad T/2\le t<T.
\tag{2.8}
$$

这里中心时刻属于 $P(F_t(x),t;r_S(t)/2)$，所以 (1.7) 确实控制所需的 $|A|(x,t)$。$\sqrt t/32$ 的选择保证外围抛物柱不会越过初始时刻；$r_S<r_{\rm H}/32$ 保证正常坐标与截断合法。

在紧时间段 $[0,T/2]$ 上，经典光滑性与 $\Sigma$ 紧致给出 $|A|$ 的上界。与 (2.8) 合并，

$$
\sup_{0\le t<T}\|A_t\|_{L^\infty}<\infty.
$$

HLS Theorem 3.1 将流延过 $T$，与最大性矛盾。故 $T_{\max}=\infty$。$\square$

### 2.2 为什么条件非循环

(2.5) 只计算已经存在的较早切片 $t-r_S(t)^2\ge0$；它没有使用 $t$ 之后的曲面，也没有预设 $t$ 是正则点。其代价是该条件很强，且不由“双校准正性”自动推出。

HLS 的 Kähler 角估计在每个有限视界通常已给出某个 $\delta_S$；真正新增的核心是统一的小加权密度 (2.5)。定理 2.2 是比命题 2.1 更强、但量词不依赖未知终点的可检验版本。

## 3. 三个收敛引理

下面把旧稿中“标准估计”“小能量推出点态小量”“Simon 收敛”三句话展开。

### 引理 3.1（统一曲率界后的高阶控制）

设 $c\ge\delta>0$，环境具有各阶有界几何，且在 $[t_0,\infty)$ 上 $|A|\le K_0$。则对每个 $m\ge1$ 和每个 $\tau>0$，存在

$$
C_m=C_m(\beta,\delta,K_0,\tau,M,F_{t_0})
$$

使

$$
\sup_{t\ge t_0+\tau}
\bigl(|\nabla^mA|+|\nabla^mf_\beta|\bigr)
\le C_m.
\tag{3.1}
$$

#### 证明

在 $c\ge\delta$ 的 Grassmann 丛紧区域，(1.1) 可写成

$$
f_\beta=P(T\Sigma)A,
$$

其中 $P$ 对 $A$ 线性、系数关于切平面光滑，主符号的特征值介于

$$
a_0=\frac{\delta^2}{\delta^2+\beta(1-\delta^2)}
\quad\text{和}\quad1
$$

之间。用 DeTurck 规范固定浸入方程的重参数退化后，得到一致强抛物的二阶拟线性系统。$|A|$ 和背景几何的界控制该系统的系数；在每个时间柱 $[t-\tau,t]$ 上应用内点 Schauder 估计并迭代，即得 (3.1)。由于常数与柱的右端时刻无关，估计对所有 $t\ge t_0+\tau$ 一致。$\square$

### 引理 3.2（时空 $L^2$ 曲率到点态曲率）

设对 $t\ge t_0$ 有：

$$
\operatorname{Area}(\Sigma_t)\le A_0,
\qquad
|A|+|\nabla A|+|\nabla^2f_\beta|\le K,
\tag{3.2}
$$

并存在 $v_0,r_0>0$，使每个内蕴球满足

$$
\operatorname{Area}_{g_t}B_{g_t}(p,r)
\ge v_0r^2,
\qquad0<r\le r_0.
\tag{3.3}
$$

若

$$
\int_{t_0}^{\infty}
\int_{\Sigma_t}|A|^2\,d\mu_tdt<\infty,
\tag{3.4}
$$

则

$$
\int_{\Sigma_t}|A|^2d\mu_t\longrightarrow0,
\qquad
\|A_t\|_{L^\infty}\longrightarrow0.
\tag{3.5}
$$

#### 证明

令 $E(t)=\int|A|^2d\mu_t$。任意法向速度下

$$
\partial_td\mu_t=-\langle H,f_\beta\rangle d\mu_t
$$

且 $D_t^\perp A$ 的主项是 $(\nabla^\perp)^2f_\beta$；其余项由 $A,f_\beta$ 和环境曲率代数构成。因此 (3.2) 与面积上界给

$$
|E'(t)|\le C_E.
\tag{3.6}
$$

若有 $t_j\to\infty$ 和 $\varepsilon>0$ 使 $E(t_j)\ge\varepsilon$，则 (3.6) 给出长度至少 $\varepsilon/(2C_E)$ 的相邻时间区间，其上 $E\ge\varepsilon/2$。取互不相交子列即与 (3.4) 矛盾，故 $E(t)\to0$。

再反设 $|A|(p_j,t_j)\ge\varepsilon$。令

$$
r_*=\min\{r_0,\varepsilon/(2K)\}.
$$

由 $|\nabla A|\le K$，球 $B_{g_{t_j}}(p_j,r_*)$ 上有 $|A|\ge\varepsilon/2$。于是

$$
E(t_j)
\ge\frac{\varepsilon^2}{4}v_0r_*^2>0,
$$

与 $E(t_j)\to0$ 矛盾。$\square$

### 引理 3.3（解析梯度不等式锁定唯一极限）

设一条全局 HLS 流在模去重参数后光滑预紧，并有光滑子列趋于临界浸入 $F_\infty$。假设在 $F_\infty$ 的正常切片中存在 $\theta\in(0,1/2]$、$C_L>0$ 和邻域 $\mathcal U$，使

$$
|L_\beta(F)-L_\beta(F_\infty)|^{1-\theta}
\le C_L\|f_\beta(F)\|_W.
\tag{3.7}
$$

并且正常图规范 $\widetilde F_t=F_t\circ\varphi_t$ 满足

$$
\|\partial_t\widetilde F_t\|_{L^2}
\le C_G\|f_\beta(F_t)\|_W.
\tag{3.8}
$$

则整条流模去重参数后光滑收敛到 $F_\infty$。

#### 证明

$L_\beta(F_t)$ 单调且子列收敛给

$$
e(t):=L_\beta(F_t)-L_\beta(F_\infty)\downarrow0.
$$

在 $\mathcal U$ 内，由 (1.2) 和 (3.7)，

$$
-\frac d{dt}e(t)^\theta
=\theta e^{\theta-1}\|f_\beta\|_W^2
\ge\frac{\theta}{C_L}\|f_\beta\|_W.
\tag{3.9}
$$

故只要轨道留在 $\mathcal U$，

$$
\int_{t_1}^{t_2}\|f_\beta\|_Wdt
\le\frac{C_L}{\theta}e(t_1)^\theta.
\tag{3.10}
$$

从收敛子列中选 $t_j$，使 $\widetilde F_{t_j}$ 到 $\partial\mathcal U$ 的 $L^2$ 距离大于 (3.8)--(3.10) 所允许的总路程。若轨道首次离开 $\mathcal U$，其路程必须达到该边界距离，却又严格小于它，矛盾。因此轨道被锁在 $\mathcal U$，且有有限 $L^2$ 长度。于是 $\widetilde F_t$ 在 $L^2$ 中 Cauchy；与所有高阶一致界插值得到每个 $C^k$ 中 Cauchy，故光滑收敛。$\square$

若 $M,J,\omega$ 实解析，则 $L_\beta$ 在 $c>0$ 的正常图切片中为解析泛函；其梯度线性化是二阶椭圆 Fredholm 算子。抽象 Łojasiewicz--Simon 定理给出 (3.7)，正常图切片给 (3.8)。因此“解析 + 正常 Fredholm 切片”是可检验的结构条件，而不是预先假设唯一极限。

## 4. 完整的 C 型定理

设 $\Omega_+,\Omega_-$ 是两张平行、comass 为 $1$ 的校准二形式，记

$$
\eta_\pm=*F_t^*\Omega_\pm,
\qquad -1\le\eta_\pm\le1.
$$

### 定理 4.1（曲率--梯度强制条件下的 C 型收敛）

设环境是紧实解析 Kähler 四流形，$F_t$ 是最大经典 HLS $\beta$-流。假设：

**(C1) 双角不变量区。** 存在 $\varepsilon_0\in(0,1)$，初始时

$$
\eta_\pm(\cdot,0)\ge1-\varepsilon_0,
\tag{4.1}
$$

且在区域 $\eta_\pm\ge1-\varepsilon_0$ 中存在算子

$$
\mathscr P_\pm
=\partial_t-a_\pm^{ij}\nabla_i\nabla_j-X_\pm^i\nabla_i,
\tag{4.2}
$$

满足

$$
\lambda g^{ij}\le a_\pm^{ij}\le\Lambda g^{ij},
\qquad |X_\pm|\le B,
\qquad
\mathscr P_\pm\eta_\pm\ge0.
\tag{4.3}
$$

**(C2) 统一加权正则性。** 存在固定 $\delta,p,r,\varepsilon$，使 $c\ge\delta>0$，$p$ 合法，且定理 2.1 的密度条件对所有时间以同一组常数成立。

**(C3) 曲率--梯度强制性。** 存在 $C_D,t_1$，使对 $t\ge t_1$，

$$
\int_{\Sigma_t}|A|^2d\mu_t
\le C_D\|f_\beta(F_t)\|_{W,t}^2.
\tag{4.4}
$$

**(C4) 局部非坍缩。** 存在 $v_0,r_0>0$，使所有 $t\ge t_1$、$p\in\Sigma$、$0<\rho\le r_0$ 满足

$$
\operatorname{Area}_{g_t}B_{g_t}(p,\rho)
\ge v_0\rho^2.
\tag{4.5}
$$

则流全时间存在，并在重参数后光滑收敛到一个全测地 $\beta$-临界曲面。

#### 证明

第一步，(4.3) 的弱最大值原理保持 (4.1)：若某角第一次越过 $1-\varepsilon_0$，在首次空间最小点其时间导数非正、梯度为零、Hessian 半正定，与 $\mathscr P_\pm\eta_\pm\ge0$ 矛盾。

第二步，(C2) 和定理 2.2 给全时间存在；同一尺度的 (1.7) 给 $|A|$ 的全时间一致界。引理 3.1 给正时间以后的全部高阶界。又由 $c^{-\beta}\ge1$，

$$
\operatorname{Area}(\Sigma_t)
\le L_\beta(F_t)
\le L_\beta(F_0).
\tag{4.6}
$$

第三步，把 (4.4) 对时间积分，并用能量恒等式 (1.2)，得

$$
\int_{t_1}^{\infty}\int_{\Sigma_t}|A|^2d\mu_tdt
\le C_D\bigl(L_\beta(F_{t_1})-\inf L_\beta\bigr)<\infty.
\tag{4.7}
$$

引理 3.2 于是给

$$
\|A_t\|_{L^\infty}\longrightarrow0.
\tag{4.8}
$$

第四步，面积上界、局部非坍缩及全部高阶界给有限张统一浸入图覆盖；Langer--Cheeger--Gromov 紧性产生 $t_j\to\infty$、微分同胚 $\varphi_j$ 和光滑极限

$$
F_{t_j}\circ\varphi_j\longrightarrow F_\infty.
\tag{4.9}
$$

由 (4.8)，$A_\infty\equiv0$。适配标架公式表明 $\nabla\alpha$ 是 $A$ 的线性组合，故同时有 $\nabla\alpha_\infty=0$、$V_\infty=0$；又 $H_\infty=0$，所以 $f_\beta(F_\infty)=0$。极限既全测地又是 $\beta$-临界点。

最后，实解析性和正常 Fredholm 切片给引理 3.3 的 Łojasiewicz--Simon 不等式。引理 3.3 把子列收敛提升为整条轨道的唯一光滑收敛。$\square$

### 4.2 各条件的地位

- (C1) 是 Wang 的“双校准接近 $1$”在一般 $\beta$ 流中的正确替代；HLS 只自动控制定义流的那一个 Kähler 角。
- (C2) 负责全时间存在和统一曲率；它不能由 (C1) 自动推出。
- (C3) 排除非全测地的 $\beta$-临界聚点，是 C 型结论的实质新增条件。
- (C4) 是从积分小曲率升级为点态小曲率所需的防坍缩条件。在产品图形情形，它可由统一图斜率与固定基底几何推出。

## 5. 完整的 D 型定理：双角 logistic 结构

令

$$
M=(S^2,\omega_1)\times(S^2,\omega_2)
$$

取单位圆度量，并令 HLS 流由 Kähler 形式

$$
\omega_+=\omega_1+\omega_2
$$

定义。记

$$
a=*\omega_1,
\qquad b=*\omega_2,
\qquad
\eta_+=a+b=*\omega_+,
\qquad
\eta_-=a-b=*\omega_-.
\tag{5.1}
$$

$\omega_\pm$ 均为 comass $1$ 的平行校准，故 $|\eta_\pm|\le1$。

### 定理 5.1（条件完整的 $D_\beta$）

设 $\Sigma$ 连通，且初始经典 HLS 数据满足

$$
\eta_+>0,
\qquad
\eta_-\ge0,
\qquad
\eta_-\not\equiv0.
\tag{5.2}
$$

假设：

**(D1) 双角 logistic 结构。** 在整个经典存在区间，存在一致椭圆算子和有界漂移

$$
\mathscr P_\pm
=\partial_t-a_\pm^{ij}\nabla_i\nabla_j-X_\pm^i\nabla_i
$$

及常数 $\kappa>0$，使

$$
\mathscr P_\pm\eta_\pm
\ge\kappa\eta_\pm(1-\eta_\pm^2).
\tag{5.3}
$$

**(D2) 统一加权正则性。** 定理 4.1 的 (C2) 成立，即 HLS 加权密度小量以同一尺度对所有时间成立。

则流全时间存在；每个 $t>0$ 的像都是一层图

$$
\operatorname{graph}(u_t),
\qquad u_t:S^2\to S^2,
$$

并且存在 $p\in S^2$，使

$$
\operatorname{graph}(u_t)
\longrightarrow S^2\times\{p\}
$$

光滑成立。

#### 证明

**步骤 1：正性。** 因 $\eta_+(cdot,0)>0$ 且 $\Sigma$ 紧，$\min\eta_+(0)>0$。对 $\eta_-$，把 (5.3) 写成

$$
\mathscr P_-\eta_--q(x,t)\eta_-\ge0,
\qquad q=\kappa(1-\eta_-^2),
$$

其中 $q$ 有界。强抛物最大值原理和 $\eta_-\not\equiv0$ 给

$$
\eta_+(x,t)>0,
\qquad
\eta_-(x,t)>0,
\qquad t>0.
\tag{5.4}
$$

**步骤 2：一层图。** 由

$$
a=\frac{\eta_++\eta_-}{2}>0,
$$

第一投影 $\pi_1\circ F_t:\Sigma\to S^2$ 的有向 Jacobian 为正，故它是局部微分同胚。紧致性使其 proper；连通性使其成为连通覆盖。由于 $S^2$ 单连通，该覆盖只有一层，所以 $\pi_1\circ F_t$ 是微分同胚。因而 $F_t(\Sigma)$ 是唯一映射 $u_t:S^2\to S^2$ 的图；这一步本身也排除了图的 varifold 高重数。

**步骤 3：logistic 下界。** 固定 $t_0>0$，令

$$
m_\pm=\min_\Sigma\eta_\pm(\cdot,t_0)>0.
$$

令 $\ell_\pm$ 解

$$
\ell_\pm'=\kappa\ell_\pm(1-\ell_\pm^2),
\qquad \ell_\pm(t_0)=m_\pm.
$$

空间常函数 $\ell_\pm$ 与 (5.3) 的比较原理给 $\eta_\pm\ge\ell_\pm$，而

$$
\ell_\pm(t)=
\left[
1+(m_\pm^{-2}-1)e^{-2\kappa(t-t_0)}
\right]^{-1/2}.
\tag{5.5}
$$

结合 $\eta_\pm\le1$，得到

$$
\eta_\pm\longrightarrow1
\quad\text{一致成立。}
\tag{5.6}
$$

**步骤 4：全时间正则性。** (D2) 与定理 2.2 给全时间存在，并由固定尺度的 (1.7) 给 $|A|$ 一致上界。引理 3.1 给全部高阶界。

**步骤 5：图斜率趋零。** 设 $\lambda_1,\lambda_2$ 是 $du_t$ 的奇异值，$J_{u_t}$ 是有向 Jacobian，并令

$$
D_u=\sqrt{(1+\lambda_1^2)(1+\lambda_2^2)}.
$$

由图上的正交基直接计算，

$$
a=\frac1{D_u},
\qquad
b=\frac{J_{u_t}}{D_u},
\qquad
\eta_\pm=\frac{1\pm J_{u_t}}{D_u}.
\tag{5.7}
$$

(5.6) 给 $a=(\eta_++\eta_-)/2\to1$，所以 $D_u\to1$。于是

$$
\lambda_1^2+\lambda_2^2+\lambda_1^2\lambda_2^2
=D_u^2-1\longrightarrow0,
$$

即

$$
\|du_t\|_{C^0}\longrightarrow0.
\tag{5.8}
$$

**步骤 6：指数平坦化给整轨道有限长度。** 由 (5.5)--(5.6)，存在 $C,\gamma>0$ 使

$$
\|du_t\|_{C^0}\le Ce^{-\gamma t}.
\tag{5.9}
$$

在任意 $[t_0,\infty)$ 上，(5.4) 使图方程一致抛物；曲率与高阶界转化为固定基底 $S^2$ 上 $u_t$ 的全部 $C^k$ 界。对 $du_t$ 使用 Gagliardo--Nirenberg 插值，例如

$$
\|\nabla^2u_t\|_{C^0}
\le C
\|du_t\|_{C^0}^{1/2}
\|\nabla^3u_t\|_{C^0}^{1/2},
$$

得到 $\|\nabla^2u_t\|_{C^0}\le Ce^{-\gamma t/2}$。图的第二基本形满足

$$
|A_t|\le C\bigl(|\nabla^2u_t|+|du_t|\bigr),
$$

而 (1.1) 在 $c\ge\delta$ 时给 $|f_\beta|\le C|A|$。把法向速度改写成固定图规范下的垂直速度只乘以一个由斜率控制的一致有界可逆矩阵，所以

$$
\|\partial_tu_t\|_{C^0}
\le Ce^{-\gamma t/2}.
\tag{5.10}
$$

因此 $\int_{t_0}^\infty\|\partial_tu_t\|_{C^0}dt<\infty$，$u_t$ 在 $C^0$ 中 Cauchy。由 (5.9)，其极限只能是某个常值映射 $p$。全部高阶一致界和插值再把收敛提升到 $C^\infty$。所以整条流而不只是一个子列收敛到 $S^2\times\{p\}$。$\square$

### 5.2 为什么 D 不再需要曲率耗散假设

C 型定理必须用 (4.4) 推出 $A\to0$。D 型定理中，(5.3) 已先给 $\eta_\pm\to1$，再由图公式和抛物插值得到 $du_t$、$A_t$、$\partial_tu_t$ 的指数衰减。真实图轨道因此具有有限 $C^0$ 长度，不会在水平切片族中漂移。所以 D 既不需要另设 $\int|A|^2$ 耗散，也不需要额外调用 Łojasiewicz--Simon。

## 6. 完整的 Corollary $D_\beta$

### 推论 6.1（严格面积递减图）

设 $u_0:S^2\to S^2$ 光滑并满足

$$
|\operatorname{Jac}u_0|<1
\quad\text{处处成立。}
\tag{6.1}
$$

取图定向并用 $\omega_+=\omega_1+\omega_2$ 定义 HLS $\beta$-流。若从该图出发的经典流满足定理 5.1 的新增条件 (D1)--(D2)，则流全时间存在、始终为图，并光滑收敛到常值图。因此 $u_0$ 经这条 HLS 图流光滑变形到常值映射。

#### 证明

由 (5.7)，

$$
\eta_\pm(0)
=\frac{1\pm\operatorname{Jac}u_0}{
\sqrt{(1+\lambda_1^2)(1+\lambda_2^2)}}>0.
$$

故定理 5.1 的初始条件成立，结论直接得到。$\square$

可以把 (6.1) 放宽为

$$
-1<\operatorname{Jac}u_0\le1
\quad\text{处处},
\qquad
\operatorname{Jac}u_0<1
\quad\text{至少一点},
\tag{6.2}
$$

因为这恰给 $\eta_+>0$、$\eta_-\ge0$ 且 $\eta_-\not\equiv0$。不能再允许某点 $\operatorname{Jac}u_0=-1$：在那里 $\eta_+=\cos\alpha=0$，而 $L_\beta$ 的辛定义域要求 $\cos\alpha>0$。

## 7. 精确时间重参数版本

下面给出一个更强但更受限的几何条件；在该条件下无需假设一般 $\beta$ 流的第二校准最大值结构。

### 定理 7.1（轨道等价的精确端点条件）

设沿 HLS 流有

$$
f_\beta=a(t)H,
\qquad 0<a(t)\le a_1<\infty.
\tag{7.1}
$$

定义

$$
\tau(t)=\int_0^ta(s)ds.
\tag{7.2}
$$

则 $G(x,\tau)=F(x,t(\tau))$ 满足普通 MCF：

$$
\partial_\tau G=H_G.
\tag{7.3}
$$

并有：

1. 若对应 MCF 不在有限 $\tau$ 奇异，则原流不在有限 $t$ 奇异；这里不需要 $a$ 的统一正下界。
2. 原流在 $t\to\infty$ 走遍 MCF 的全部无穷时间轨道，当且仅当
   $$\int_0^\infty a(t)dt=\infty.\tag{7.4}$$
3. 若 (7.4) 成立，则任何经严格修正的 MCF-B/C/D/Corollary D 结论都逐时间片转移到原流。
4. 若 $\int_0^\infty a<\infty$，原流只采样到有限 MCF 时刻 $\tau_\infty$；不能据此推出 Wang C/D 的无穷远极限。

#### 证明

$\tau$ 严格递增，且

$$
\partial_\tau G
=\partial_tF\frac{dt}{d\tau}
=aH\frac1a=H.
$$

若原流在有限 $T$ 失去光滑性，由 $a\le a_1$ 有 $\tau(T)\le a_1T<\infty$。对应 MCF 若可延过 $\tau(T)$，则其在该紧 $\tau$ 区间曲率有界；相同时间片使原流曲率亦有界，HLS Theorem 3.1 将原流延过 $T$，矛盾。其余结论由 $\tau(t)$ 的值域直接得到。$\square$

若每个时间片上

$$
\alpha(x,t)=\theta(t),
\qquad \cos\theta(t)>0,
\tag{7.5}
$$

则 $V=0$ 且

$$
a(t)=\frac{\cos^2\theta(t)}
{\cos^2\theta(t)+\beta\sin^2\theta(t)}.
\tag{7.6}
$$

事实上，在沿流假设 (7.5) 下不必另加全时间 $\delta$。辛面积

$$
\mathcal S_\omega=\int_\Sigma F_t^*\omega
=\cos\theta(t)\operatorname{Area}(\Sigma_t)
$$

保持不变，而 $f_\beta=a(t)H$ 给

$$
\frac d{dt}\operatorname{Area}(\Sigma_t)
=-a(t)\int_{\Sigma_t}|H|^2d\mu_t.
$$

微分 $\mathcal S_\omega$ 得

$$
\theta_c'(t)\operatorname{Area}(\Sigma_t)
=\theta_c(t)a(t)\int|H|^2d\mu_t\ge0,
\qquad \theta_c(t):=\cos\theta(t).
\tag{7.7}
$$

所以 $\theta_c(t)\ge\theta_c(0)>0$。函数

$$
q\longmapsto\frac{q^2}{q^2+\beta(1-q^2)}
$$

在 $q\in(0,1]$ 上递增，故 $a(t)\ge a(0)>0$，从而 $\tau(t)\ge a(0)t$，(7.4) 自动成立。

必须把 (7.5) 假设在整个流上；“初始 Kähler 角为空间常数”一般不会传播。平坦复二维环面中的秩一图可在初始时有常 Kähler 角，而角演化式中的 $|\bar\nabla J_\Sigma|^2$ 随空间变化，使其第一时间导数立即变成非常数。

## 8. 为什么更弱的候选条件仍不够

### 8.1 双校准正性本身不够

对任意平行二形式 $\Omega$，一般法向速度 $f$ 满足

$$
\partial_t(*F^*\Omega)
=\Omega(\nabla_{e_1}^\perp f,e_2)
-\Omega(\nabla_{e_2}^\perp f,e_1).
$$

写

$$
f_\beta=H-b(H+V),
\qquad b=\frac{\beta\sin^2\alpha}{D},
$$

第二校准的 MCF 方程会多出

$$
-\mathcal D_\Omega\bigl(b(H+V)\bigr),
$$

其中含 $\nabla H,\nabla V,\nabla b$ 的同阶无符号项。因此 (C1)/(D1) 是真正的新增 PDE 条件。

### 8.2 角向二阶 Bernstein 条件不替代 B/C/D

条件

$$
\left|\nabla^2\left(\frac A{|A|}\right)\right|
\le K(|A|^2+\Lambda^2)
$$

可在 $|A|^2$ 最大点推出

$$
D^+\max|A|^2
\le C(\max|A|^2+\Lambda^2)^2.
$$

但该 ODE 只给有限奇性时的反向爆破下界，不能排除奇性，更不能给 $A\to0$ 或图斜率趋零。所以它不能代替 (C2)、(C3) 或 (D1)。

### 8.3 仅有 $L^2$ 曲率耗散不够

若没有 (4.5) 和 $|\nabla A|$ 界，曲率可集中在越来越小的区域，$\int|A|^2\to0$ 仍不能排除 $\sup|A|\not\to0$。引理 3.2 明确展示了需要补入的尺度桥梁。

### 8.4 不连通性与有符号 Jacobian

两个不同水平切片之并是静止解，故 D 必须要求连通，或把结论改成逐连通分支收敛。另一方面，单边条件 $\operatorname{Jac}u<1$ 允许大的负 Jacobian；它既不保证两个图校准角都正，也不保证 HLS 的 $\cos\alpha>0$。自然条件是 $|\operatorname{Jac}u|<1$，弱边界版则是 (6.2)。

### 8.5 能量耗散不能自动控制 $A$

取带乘积 Fubini--Study 结构的 $\mathbb{CP}^1\times\mathbb{CP}^1$，以及二次全纯映射

$$
f([z_0:z_1])=[z_0^2:z_1^2].
$$

其图是全纯曲线，所以 $c=1$、$H=V=f_\beta=0$，对每个 $\beta>0$ 都给出静止 HLS 流。但在仿射原点附近该图为 $z\mapsto(z,z^2)$，二阶导数的第二分量非零，故 $A\not\equiv0$。于是

$$
-\frac d{dt}L_\beta=0,
\qquad
\int_{\Sigma_t}|A|^2d\mu_t>0.
$$

这给出 (4.4) 不能从能量恒等式自动推出的显式反例。

### 8.6 为什么 LS 还必须控制真实速度

仅有 Łojasiewicz 不等式和平方速度耗散仍可能允许沿临界流形无限漂移。一个有限维模型是解析圆柱 $\mathbb R\times S^1$ 上

$$
E(r,\vartheta)=\frac12r^2,
\quad
r(t)=(r_0^{-2}+2t)^{-1/2},
\quad
\vartheta'(t)=r(t)^2.
$$

它满足 $|E|^{1/2}\le|\nabla E|$ 以及

$$
-E'(t)\ge\frac12|(r',\vartheta')|^2,
$$

但 $\vartheta(t)$ 绕圆无限多次，轨道没有唯一极限。引理 3.3 的关键并非只写 (3.7)，而是同时使用精确梯度恒等式 (1.2) 和规范速度比较 (3.8)，从而得到真实轨道的有限长度。

## 9. 可直接引用的命题矩阵

| 目标 | 完整充分条件 | 结论 |
|---|---|---|
| 一般 $\beta>0$ 的 B 型延拓 | 每个有限视界的 $c$ 下界 + 带时间缓冲的 HLS 加权密度小量 | 全时间存在 |
| 一般 $\beta>0$ 的 C 型结论 | B 的统一尺度版 + 双角不变量区 + $\int|A|^2\le C\|f\|_W^2$ + 非坍缩 + 解析正常切片 | 光滑收敛到全测地 $\beta$-临界曲面 |
| $S^2\times S^2$ 的 D 型结论 | HLS 辛初值 + 双角 logistic 不等式 + 统一加权正则性 | 正时间为一层图并收敛到水平切片 |
| Corollary $D_\beta$ | $|\operatorname{Jac}u_0|<1$，再加 D 的两个新增结构条件 | 图流光滑变形到常值图 |
| 精确轨道转移 | $f_\beta=a(t)H$；无穷远结论另需 $\int_0^\infty a=\infty$ | 与经修正的 MCF 结论逐时间片等价 |

## 10. 最终结论

1. 旧报告的一般 $\beta>0$ 命题可以完成，但不能删掉“加权密度、曲率强制性、双角标量结构”这些新增输入。
2. B 型命题的最直接闭合方式是 HLS 自身的加权 $\varepsilon$-正则性；本文修正了 $r/2$ 尺度，并用 $r(t)=\min\{r_*,\sqrt t/32\}$ 消除了初始时间缓冲缺口。
3. C 型命题需要一个真正把能量梯度与第二基本形联系起来的强制条件 (4.4)。能量单调本身只控制 $f_\beta$，不控制 $A$。
4. D 型命题的核心是双角 logistic 不等式。它给强正性、覆盖度一、图斜率指数趋零；统一正则性与解析梯度锁定给唯一水平切片极限。
5. 对由 $\omega_1+\omega_2$ 定义的 HLS 流，弱 Jacobian 条件必须同时满足 $\operatorname{Jac}u>-1$；最干净的推论仍是 $|\operatorname{Jac}u|<1$。
6. 若能证明沿某不变量类 $f_\beta=a(t)H$，则时间重参数法是最强、最透明的版本；无穷远收敛的准确条件是 $\int_0^\infty a(t)dt=\infty$，而不必机械地要求 $a$ 有统一正下界。

### Danus 独立核验状态

本报告使用 7 个 Danus 工作单元（high $\times3$、xhigh $\times4$）分专题审计。通过独立 verifier 的关键模块包括：

- 终端逐点加权低密度 $\Rightarrow$ 有限覆盖曲率界 $\Rightarrow$ HLS 延拓；
- 时空 $L^2$ 曲率、时间一致连续、$|\nabla A|$ 界和局部非坍缩 $\Rightarrow\sup|A|\to0$；
- $\mathbb{CP}^1\times\mathbb{CP}^1$ 中非全测地静止全纯图反例；
- 双角 parabolic--logistic 不等式 $\Rightarrow$ 强正性、覆盖度一、图公式和斜率趋零；
- $f=a(t)H$ 的精确时间变换及 $\int_0^\infty a=\infty$ 的端点条件；
- “LS + 平方速度耗散”若缺少真实速度比较，仍可能沿临界流形漂移的反例。

未通过 verifier 或未由 HLS 原文证明的内容没有被包装成无条件结论；它们均保留为 (C1)、(C3)、(D1) 等新增假设。

---

## 参考文献

1. X. Han, J. Li, J. Sun, *Gradient flow for $\beta$-symplectic critical surfaces*, Ann. Inst. H. Poincaré Anal. Non Linéaire 41 (2024), 1083--1116. DOI: [10.4171/AIHPC/100](https://doi.org/10.4171/AIHPC/100).
2. M.-T. Wang, *Mean Curvature Flow of Surfaces in Einstein Four-Manifolds*, J. Differential Geom. 57 (2001), 301--338. DOI: [10.4310/jdg/1090348113](https://doi.org/10.4310/jdg/1090348113).
3. L. Simon, *Asymptotics for a Class of Nonlinear Evolution Equations, with Applications to Geometric Problems*, Ann. of Math. 118 (1983), 525--571. DOI: [10.2307/2006981](https://doi.org/10.2307/2006981).
4. J. Langer, *A Compactness Theorem for Surfaces with $L_p$-bounded Second Fundamental Form*, Math. Ann. 270 (1985), 223--234. DOI: [10.1007/BF01456183](https://doi.org/10.1007/BF01456183).
5. M.-P. Tsui, M.-T. Wang, *Mean Curvature Flows and Isotopy of Maps Between Spheres*, Comm. Pure Appl. Math. 57 (2004), 1110--1126. DOI: [10.1002/cpa.20022](https://doi.org/10.1002/cpa.20022).

### 审计边界

- 本文只研究经典 HLS 流，不把 Brakke 流或 varifold 延拓混入证明。
- (C1)、(C3)、(D1) 目前均是新增充分条件；报告没有宣称 HLS 原论文已经证明它们。
- 加权密度条件是可直接触发 HLS 正则性定理的充分条件，不声称最弱。
- Łojasiewicz--Simon 步骤在正常图/Fredholm 规范中使用；没有从“环境解析”一句话直接跳到唯一收敛。
