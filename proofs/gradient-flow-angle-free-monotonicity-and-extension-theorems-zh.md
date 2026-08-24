# HLS 梯度流的角度无关高斯公式与条件性延拓定理

## 精确平方完成、尺度补偿、强迫项正则性，以及“不出现 Kähler 角”的准确边界

**研究对象**　Han--Li--Sun 的 $\beta$-辛临界曲面泛函负梯度流（简称 HLS 梯度流）  \
**解的范畴**　首个奇异时刻以前的紧致、经典、光滑、嵌入解  \
**环境**　先在 $\mathbb R^4$ 证明精确公式，再给出 Kähler 四流形的等距外嵌版本  \
**审计方法**　原文符号复算、Danus 十二工人交叉核验、尺度与反例审计  \
**日期**　2026 年 8 月 24 日

---

## 0. 结论先行

### 0.1 能不能做到？

答案分成两层。

| 问题 | 严格结论 |
|---|---|
| 能否得到完全不以 Kähler 角为权的单调公式？ | **能。** 对任意经典法向流，以实际速度缺陷 $W=\partial_tF-H$ 平方完成，可得到精确的“负平方 + $\frac14|W|^2$”恒等式及一整套补偿单调量。 |
| 能否由这些公式单独推出光滑延拓？ | **不能。** 圆缩球已有 $W=0$ 且密度 $4/e<2$，仍然形成奇点。 |
| 能否得到假设中不写 $\cos\alpha$ 的延拓定理？ | **能。** 需加入局部平坦性/质量隙和次临界强迫控制；对固定紧致经典 HLS 流，一致抛物性由初始严格辛、有限 $T$ 和 HLS 最大值原理自动得到。 |
| 这是否真正摆脱了 Kähler 角退化？ | **只对单条有限时经典轨道成立。** 抛物常数仍依赖初始最小角；不能得到对趋近 Lagrangian 的一族初值统一的估计。 |

因此，本文给出的正确成果是：

1. 一套真正角度无关的精确高斯恒等式、局部公式、尾部补偿量和尺度单调量；
2. HLS 速度缺陷的最佳角度无关代数估计
   $$
   |W_\beta|^2\le \frac32 b_\beta^2|A|^2<\frac32|A|^2;
   $$
3. 一个以面积比、次临界 $L_t^qL_x^p$ 强迫和平坦性/质量隙为显式条件的严格延拓定理；固定紧致 HLS 流所需的一致抛物性由原方程自动提供；
4. 一个以补偿密度接近 $1$ 为入口、但明确列出切流紧致与无质量损失条件的密度版延拓定理；
5. 两个阻止“无条件去角化”的精确反例：圆缩球和一族平坦嵌入辛环面。

本文中的“新”是指**对本项目新建立并严格整理的一套工具链**。强迫平均曲率流的单调性与正则性已有广泛文献；未经完整文献查新，不把这些恒等式宣称为数学史上的首次发现。

---

## 1. 记号与号约定

设 $\Sigma^m$ 为紧致无边界流形，

$$
F:\Sigma\times [a,T)\longrightarrow\mathbb R^N
$$

是一族经典光滑浸入。通过时间依赖微分同胚消去切向速度后，可设实际速度为法向量：

$$
f:=\partial_tF\in N\Sigma_t,
\qquad \Sigma_t=F_t(\Sigma).
$$

采用

$$
H=\Delta_{\Sigma_t}F
$$

作为平均曲率向量的号约定，并定义**速度缺陷**

$$
W:=f-H.
\tag{1.1}
$$

固定顶点 $(y,T)\in\mathbb R^N\times\mathbb R$，令

$$
\tau=T-t,
\qquad X=F-y,
\qquad
\rho_{y,T}(F,t)=(4\pi\tau)^{-m/2}
\exp\!\left(-\frac{|X|^2}{4\tau}\right),
\tag{1.2}
$$

以及

$$
Z=\frac{X^\perp}{2\tau},
\qquad
I_{y,T}(t)=\int_{\Sigma_t}\rho_{y,T}\,d\mu_t.
\tag{1.3}
$$

除非特别说明，所有内积、法向投影和曲率均在时刻 $t$ 的诱导几何中计算。

---

## 2. 核心恒等式：任意经典法向流的高斯平方完成

### 定理 2.1（精确角度无关高斯恒等式）

在 §1 的假设下，

$$
\boxed{
\begin{aligned}
I_{y,T}'(t)
&=-\int_{\Sigma_t}\rho\,
\langle H+Z,f+Z\rangle\,d\mu_t\\
&=-\int_{\Sigma_t}\rho
\left|H+\frac W2+Z\right|^2d\mu_t
+\frac14\int_{\Sigma_t}\rho|W|^2d\mu_t.
\end{aligned}}
\tag{2.1}
$$

公式不使用复结构、辛形式或 Kähler 角。系数 $1/4$ 是代数恒等式中的最佳系数。

### 证明

第一变分公式给出

$$
\partial_t d\mu_t=-\langle H,f\rangle d\mu_t.
\tag{2.2}
$$

因为 $\tau'= -1$ 且 $\partial_tX=f$，沿移动曲面微分 (1.2) 得

$$
\partial_t\rho
=\rho\left(
\frac m{2\tau}-\frac{|X|^2}{4\tau^2}
-\frac{\langle X,f\rangle}{2\tau}
\right).
\tag{2.3}
$$

又有

$$
\nabla^{\Sigma_t}\rho=-\frac{\rho}{2\tau}X^\top.
\tag{2.4}
$$

对 $X^\top$ 求散度。由 $\operatorname{div}_{\Sigma_t}X=m$ 以及
$X^\perp$ 的 Weingarten 项，得到

$$
\operatorname{div}_{\Sigma_t}X^\top=m+\langle X,H\rangle.
\tag{2.5}
$$

故

$$
\begin{aligned}
\Delta_{\Sigma_t}\rho
&=-\frac1{2\tau}\operatorname{div}_{\Sigma_t}(\rho X^\top)\\
&=\rho\left(
-\frac m{2\tau}
+\frac{|X^\top|^2}{4\tau^2}
-\frac{\langle X,H\rangle}{2\tau}
\right).
\end{aligned}
\tag{2.6}
$$

把 (2.3) 与 (2.6) 相加，并利用 $H,f$ 为法向量，得到

$$
(\partial_t+\Delta_{\Sigma_t})\rho
=-\rho\bigl(|Z|^2+\langle Z,H+f\rangle\bigr).
\tag{2.7}
$$

$\Sigma$ 闭且无边界，因此 $\int_{\Sigma_t}\Delta_{\Sigma_t}\rho\,d\mu_t=0$。结合 (2.2) 与 (2.7)，

$$
\begin{aligned}
I'(t)
&=\int_{\Sigma_t}(\partial_t\rho-\rho\langle H,f\rangle)d\mu_t\\
&=-\int_{\Sigma_t}\rho
\bigl(|Z|^2+\langle Z,H+f\rangle+\langle H,f\rangle\bigr)d\mu_t\\
&=-\int_{\Sigma_t}\rho\langle H+Z,f+Z\rangle d\mu_t.
\end{aligned}
\tag{2.8}
$$

最后，$f=H+W$，且逐点有

$$
-\langle H+Z,f+Z\rangle
=-\left|H+\frac W2+Z\right|^2+\frac14|W|^2.
\tag{2.9}
$$

代回 (2.8) 即得 (2.1)。因为 (2.9) 是精确平方完成，$1/4$ 不能统一减小。证毕。

### 校验

当 $f=H$ 时 $W=0$，(2.1) 退化为 Huisken 公式

$$
I'(t)=-\int_{\Sigma_t}\rho
\left|H+\frac{X^\perp}{2(T-t)}\right|^2d\mu_t.
\tag{2.10}
$$

这同时校验了号与因子 $2$。

---

## 3. 由核心恒等式产生的一整套单调量

令

$$
q(t)=\int_{\Sigma_t}\rho|W|^2d\mu_t,
\qquad
S(t)=\int_{\Sigma_t}\rho
\left|H+\frac W2+Z\right|^2d\mu_t.
\tag{3.1}
$$

则 (2.1) 就是

$$
I'(t)=-S(t)+\frac14q(t).
\tag{3.2}
$$

### 3.1 向前补偿量

对 $b\in[a,T)$，定义

$$
\Phi_b(t)=I(t)-\frac14\int_b^tq(s)\,ds.
\tag{3.3}
$$

则

$$
\Phi_b'(t)=-S(t)\le0.
\tag{3.4}
$$

所以 $\Phi_b$ 单调不增。注意：一般的 $I(t)$ 本身并不单调。

### 3.2 尾部补偿量与无权密度

若

$$
\int_b^Tq(t)\,dt<\infty,
\tag{3.5}
$$

定义

$$
\Psi(t)=I(t)+\frac14\int_t^Tq(s)\,ds.
\tag{3.6}
$$

则同样有 $\Psi'=-S\le0$。由于 $\Psi\ge0$ 且单调，$\lim_{t\uparrow T}\Psi(t)$ 存在；(3.5) 又使尾积分趋于零，因此

$$
\boxed{
\Theta(y,T):=\lim_{t\uparrow T}
\int_{\Sigma_t}\rho_{y,T}\,d\mu_t
}
\tag{3.7}
$$

存在且有限。此外，积分 (3.4) 得

$$
\int_b^T\!\int_{\Sigma_t}\rho
\left|H+\frac W2+
\frac{(F-y)^\perp}{2(T-t)}\right|^2d\mu_tdt<\infty.
\tag{3.8}
$$

这里得到的是**未加 Kähler 角权的高斯密度**。

### 3.3 尺度补偿量

令 $t=T-r^2$，

$$
Q(r)=q(T-r^2),
\qquad
\mathcal S(r)=S(T-r^2).
$$

定义

$$
\mathcal G(r)=I(T-r^2)+\frac12\int_0^r uQ(u)\,du.
\tag{3.9}
$$

由链式法则和 (3.2)，

$$
\mathcal G'(r)
=-2rI'(T-r^2)+\frac r2Q(r)
=2r\mathcal S(r)\ge0.
\tag{3.10}
$$

所以 $\mathcal G$ 随空间尺度 $r$ 单调不减；等价地，它随向奇点缩小的尺度单调不增。这是最适合放缩论证的形式。

### 3.4 局部时空截断公式

令 $\phi:\mathbb R^N\times[a,T)\to[0,\infty)$ 光滑紧支撑，并定义沿流的物质导数

$$
D_t\phi=\partial_t\phi+\langle D\phi,f\rangle.
$$

对 $I_\phi(t)=\int\rho\phi\,d\mu_t$，重复 §2 的计算并利用闭流形上的自伴性

$$
\int\phi\Delta_\Sigma\rho\,d\mu
=\int\rho\Delta_\Sigma(\phi\circ F)\,d\mu,
$$

得到精确式

$$
\boxed{
\begin{aligned}
I_\phi'(t)
={}&-\int\rho\phi
\left|H+\frac W2+Z\right|^2d\mu
+\frac14\int\rho\phi|W|^2d\mu\\
&+\int\rho\bigl(D_t\phi-\Delta_{\Sigma_t}(\phi\circ F)\bigr)d\mu.
\end{aligned}}
\tag{3.11}
$$

记最后一项的被积函数正部为

$$
R_\phi^+(t)=\int\rho
\bigl(D_t\phi-\Delta_{\Sigma_t}(\phi\circ F)\bigr)_+d\mu.
$$

若 $\int^T\int\rho\phi|W|^2<\infty$ 且 $\int^TR_\phi^+<\infty$，则

$$
I_\phi(t)+\frac14\int_t^T\!\int\rho\phi|W|^2
+\int_t^TR_\phi^+(s)\,ds
\tag{3.12}
$$

单调不增。公式 (3.11) 明确展示了局部化所需的全部截断误差；不能把全局公式直接当作局部 $\varepsilon$-正则性定理。

---

## 4. HLS 梯度流的专门化与最佳速度缺陷估计

### 4.1 HLS 速度

设环境为 Kähler 四流形，$\alpha$ 为 Kähler 角，

$$
c=\cos\alpha>0,
\qquad s=\sin\alpha,
\qquad D=c^2+\beta s^2,
$$

并令

$$
V=(e_2\alpha)v_3+(e_1\alpha)v_4.
$$

HLS 流的法向速度是

$$
f_\beta=\frac{c^2H-\beta s^2V}{D}.
\tag{4.1}
$$

置

$$
a_\beta=\frac{c^2}{D},
\qquad
b_\beta=\frac{\beta s^2}{D},
\qquad a_\beta+b_\beta=1,
\tag{4.2}
$$

则

$$
f_\beta=a_\beta H-b_\beta V,
\qquad
W_\beta=f_\beta-H=-b_\beta(H+V).
\tag{4.3}
$$

把 (4.3) 代入 (2.1)，得到 HLS 的无角权公式

$$
\boxed{
\begin{aligned}
\frac d{dt}\int_{\Sigma_t}\rho\,d\mu_t
={}&-\int_{\Sigma_t}\rho
\left|H-\frac{b_\beta}{2}(H+V)+Z\right|^2d\mu_t\\
&+\frac14\int_{\Sigma_t}\rho,b_\beta^2|H+V|^2d\mu_t.
\end{aligned}}
\tag{4.4}
$$

“无角权”指积分中没有 $c^{-p}$。系数 $b_\beta$ 仍然是实际 HLS 速度的一部分，不能从流方程中删掉。

### 定理 4.1（最佳角度无关点态估计）

在 HLS 适配正交标架中，

$$
\boxed{
|f_\beta|^2\le
\left(a_\beta^2+1+\frac12b_\beta^2\right)|A|^2
\le2|A|^2,
}
\tag{4.5}
$$

并且

$$
\boxed{
|W_\beta|^2\le\frac32b_\beta^2|A|^2
<\frac32|A|^2
}
\tag{4.6}
$$

只要曲面严格辛且 $A\ne0$。常数 $\sqrt2$ 与 $\sqrt{3/2}$ 分别是所有严格辛角上不能减小的统一常数。

### 证明

写

$$
u_1=h_{11}^3,\quad u_2=h_{12}^3,\quad u_3=h_{22}^3,
\qquad
z_1=h_{11}^4,\quad z_2=h_{12}^4,\quad z_3=h_{22}^4.
$$

由于 $h_{ij}^\gamma$ 关于 $i,j$ 对称，

$$
|A|^2=u_1^2+u_3^2+2u_2^2+z_1^2+z_3^2+2z_2^2.
\tag{4.7}
$$

HLS 适配标架恒等式为

$$
e_1\alpha=-(z_1+u_2),
\qquad
e_2\alpha=-(z_2+u_3).
\tag{4.8}
$$

于是

$$
H=(u_1+u_3)v_3+(z_1+z_3)v_4,
\tag{4.9}
$$

$$
V=-(z_2+u_3)v_3-(z_1+u_2)v_4,
\tag{4.10}
$$

并发生关键消去：

$$
H+V=(u_1-z_2)v_3+(z_3-u_2)v_4.
\tag{4.11}
$$

由 (4.1)--(4.2)，

$$
f_\beta=
(a_\beta u_1+u_3+b_\beta z_2)v_3
+(z_1+a_\beta z_3+b_\beta u_2)v_4.
\tag{4.12}
$$

在带权内积 $r_1s_1+r_2s_2+2r_3s_3$ 下应用 Cauchy--Schwarz：

$$
(a_\beta u_1+u_3+b_\beta z_2)^2
\le\left(a_\beta^2+1+\frac12b_\beta^2\right)
(u_1^2+u_3^2+2z_2^2),
$$

第二个法向分量同理。两式相加得 (4.5) 第一式。因 $a_\beta=1-b_\beta$，

$$
a_\beta^2+1+\frac12b_\beta^2
=2-2b_\beta+\frac32b_\beta^2\le2
\quad(0\le b_\beta<1),
$$

得到第二式。

由 (4.3) 与 (4.11)，

$$
|W_\beta|^2=b_\beta^2
\bigl((u_1-z_2)^2+(z_3-u_2)^2\bigr).
$$

再次使用带权 Cauchy--Schwarz，

$$
(u_1-z_2)^2\le\frac32(u_1^2+2z_2^2),
\qquad
(z_3-u_2)^2\le\frac32(z_3^2+2u_2^2).
$$

加上 (4.7) 中其余非负项即得 (4.6)。令相应分量与 Riesz 向量成比例可逼近等号；当 $c\downarrow0$ 时 $b_\beta\uparrow1$，故统一常数不能下降。证毕。

### 推论 4.2（曲率尾控制密度存在）

若在欧氏环境中

$$
\int_{t_*}^T\!\int_{\Sigma_t}
\rho_{y,T}|A|^2d\mu_tdt<\infty,
\tag{4.13}
$$

则由 (4.6)

$$
\int_{t_*}^Tq(t)dt
\le\frac32\int_{t_*}^T\!\int\rho|A|^2<\infty.
$$

因此 §3 的补偿单调性、无权密度极限和耗散结论全部成立。这里没有假设 Kähler 角下界；结论也只到“密度存在与耗散”，还没有延拓。

---

## 5. 次临界 $L_t^qL_x^p$ 条件、尺度与缺陷消失

### 5.1 抛物尺度

对 $k$ 维流，在 $(x_0,t_0)$ 处作尺度 $r$ 的放缩

$$
F^{(r)}(p,s)=\frac{F(p,t_0+r^2s)-x_0}{r}.
\tag{5.1}
$$

则

$$
H^{(r)}=rH,
\qquad f^{(r)}=rf,
\qquad W^{(r)}=rW,
\qquad d\mu_s^{(r)}=r^{-k}d\mu_t.
\tag{5.2}
$$

若

$$
\|W\|_{L_t^qL_\mu^p(P_r(z))}
=\left[\int_{t_0-r^2}^{t_0}
\left(\int_{\Sigma_t\cap B_r(x_0)}|W|^p,d\mu_t\right)^{q/p}dt
\right]^{1/q},
$$

则

$$
\|W^{(r)}\|_{L_s^qL_{\mu^{(r)}}^p(P_R)}
=r^\zeta\|W\|_{L_t^qL_\mu^p(P_{Rr})},
\qquad
\zeta=1-\frac{k}{p}-\frac2q.
\tag{5.3}
$$

所以 $\zeta>0$ 是强迫在放缩下消失的次临界区间。对曲面 $k=2$，条件是

$$
\boxed{\frac2p+\frac2q<1.}
\tag{5.4}
$$

### 定理 5.1（面积比下的高斯缺陷估计）

假设局部面积比满足

$$
\mu_t(B_R(x))\le E_1\omega_kR^k
\tag{5.5}
$$

且 $p>2,q>2,\zeta>0$。则存在只依赖 $k,p,E_1$ 的常数 $C$，使

若 $\chi_r$ 是支撑在 $B_{2r}(x_0)$、在 $B_r(x_0)$ 上等于 $1$ 的标准截断，则

$$
\boxed{
\int_{t_0-r^2}^{t_0}\!\int_{\Sigma_t}
\chi_r\rho_{x_0,t_0}|W|^2d\mu_tdt
\le C r^{2\zeta}
\|W\|_{L_t^qL_\mu^p(P_{2r}(x_0,t_0))}^2.
}
\tag{5.6}
$$

若面积比与 $L^{p,q}$ 范数在全空间控制，则可取 $\chi_r\equiv1$，并把右端换成同一时间段上的全局范数。

### 证明

固定 $t$，令 $\tau=t_0-t$。在截断支撑内，空间 Hölder 不等式给

$$
\int\chi_r\rho|W|^2d\mu
\le
\left(\int_{B_{2r}}|W|^p d\mu\right)^{2/p}
\left(\int_{B_{2r}}\rho^{p/(p-2)}d\mu\right)^{1-2/p}.
\tag{5.7}
$$

用半径 $\sqrt\tau$ 的球和二进环带分解空间。由 (5.5) 与高斯指数衰减，

$$
\int\rho^{p/(p-2)}d\mu
\le C E_1\tau^{-k/(p-2)}.
\tag{5.8}
$$

将 (5.8) 提到 $1-2/p$ 次方，得到

$$
\int\chi_r\rho|W|^2d\mu
\le C E_1^{1-2/p}
\tau^{-k/p}
\left(\int|W|^p d\mu\right)^{2/p}.
\tag{5.9}
$$

再在时间上以指数 $q/2$ 和 $q/(q-2)$ 使用 Hölder：

$$
\begin{aligned}
\int_0^{r^2}\tau^{-k/p}
\|W(\tau)\|_{L^p}^2d\tau
&\le \|W\|_{L_t^qL_x^p}^2
\left(\int_0^{r^2}
\tau^{-\frac{qk}{p(q-2)}}d\tau\right)^{(q-2)/q}\\
&=C r^{2(1-k/p-2/q)}
\|W\|_{L_t^qL_x^p}^2.
\end{aligned}
\tag{5.10}
$$

积分收敛恰等价于 $\zeta>0$。这证明 (5.6)。证毕。

### 5.2 后果

若 $W\in L_t^qL_x^p$ 且 (5.4) 成立，则每个固定中心的高斯缺陷尾能量趋于零；在局部范数具有统一绝对连续模时，所有固定大小的放缩柱上

$$
W^{(r)}\longrightarrow0
\quad\text{于 }L_s^qL_x^p.
\tag{5.11}
$$

因此任何具有足够紧致性且无质量损失的切流都满足**无强迫**的平均曲率流方程。这个结论不自动保证切流是一重平面；还需要质量隙或密度间隙。

---

## 6. 切流结论的准确量词

设 $r_i\downarrow0$，以 (5.1) 形成放缩流。假设：

1. 放缩流在局部整数 Brakke 意义下收敛到 $\mathcal T=\{V_s^\infty\}_{s<0}$；
2. 高斯质量无损，即放缩高斯积分收敛到极限切流的高斯积分；
3. 平均曲率平方满足所需的下半连续性；
4. (3.5) 在中心 $(x_0,T)$ 成立。

由 §3 的尺度不变性，任意 $s_1<s_2<0$ 上

$$
\int_{s_1}^{s_2}\!\int\rho_0|W_i|^2d\mu_s^i ds\longrightarrow0,
\tag{6.1}
$$

并且

$$
\int_{s_1}^{s_2}\!\int\rho_0
\left|H_i+\frac{z^\perp}{2(-s)}+\frac{W_i}{2}\right|^2d\mu_s^i ds
\longrightarrow0.
\tag{6.2}
$$

用 $|A|^2\le2|A+B|^2+2|B|^2$ 去掉 $W_i/2$，再取下极限，得到

$$
H_\infty+\frac{z^\perp}{2(-s)}=0
\quad d\|V_s^\infty\|ds\text{-几乎处处}.
\tag{6.3}
$$

所以切流是无强迫自相似收缩 Brakke 流。必须保留前述紧致性与无损假设；有限缺陷能量本身不制造 varifold 紧致性、不保持一重性，也不排除非平面 self-shrinker。

---

## 7. 为什么高斯公式本身不能给延拓

### 7.1 圆缩球：$W=0$、密度 $<2$，仍然奇异

取

$$
\Sigma_t=S^2_{2\sqrt{T-t}}\subset\mathbb R^3.
$$

这是标准平均曲率流，故 $W=0$。在灭点 $(0,T)$，$|F|^2=4\tau$，面积为 $16\pi\tau$，于是

$$
I(t)=(4\pi\tau)^{-1}e^{-1}(16\pi\tau)=\frac4e<2.
\tag{7.1}
$$

但

$$
|A|^2=\frac1{2\tau}\longrightarrow\infty.
\tag{7.2}
$$

因此下列任一条件都不能单独推出延拓：缺陷能量有限、密度存在、$W=0$、Type I 曲率界、或者密度 $<2$。这个例子反驳的是普遍逻辑；它不是标准 $\mathbb C^2$ 中的紧致严格辛 HLS 流。

### 7.2 平坦辛环面：密度与曲率不控制 HLS 椭圆性

在平坦 Kähler 环面

$$
T^4=\mathbb R^4/\mathbb Z^4,
\qquad
\omega=dx_1\wedge dx_2+dy_1\wedge dy_2
$$

中，对整数 $m\ge1$ 定义

$$
F_m:T^2\to T^4,
\qquad
F_m(s,t)=([s,t],[ms,0]).
\tag{7.3}
$$

第一分量保持 $(s,t)$，故 $F_m$ 是嵌入。其切向量为

$$
E_1=(1,0,m,0),
\qquad E_2=(0,1,0,0),
$$

诱导面积元为 $\sqrt{1+m^2}\,dsdt$，而 $F_m^*\omega=ds\wedge dt$，所以

$$
c_m=\cos\alpha_m=(1+m^2)^{-1/2}.
\tag{7.4}
$$

像是平坦全测地子环面，故

$$
A=H=V=f_\beta=W_\beta=0.
$$

每点的未加权无穷小高斯密度为 $1$，但 HLS 权密度 $c_m^{-p}=(1+m^2)^{p/2}$ 发散。更关键的是，HLS 最小归一化主符号特征值为

$$
\lambda_m=\frac{c_m^2}{c_m^2+\beta(1-c_m^2)}
=\frac1{1+\beta m^2}\longrightarrow0.
\tag{7.5}
$$

所以即使“嵌入、一重、完全平坦、$W=0$、密度 $1$、最优面积比”全部成立，也推不出一个对该类流统一的 HLS 抛物常数。

---

## 8. HLS 主符号：真正无法绕过的条件

在 HLS 适配标架中，对法向扰动 $\eta$ 和协向量 $\xi$，规范化后的法向主符号二次型为

$$
\begin{aligned}
\langle\sigma(Df_\beta)(\xi)\eta,\eta\rangle
=\frac1D\Bigl\{
c^2|\xi|^2|\eta|^2
+\beta\bigl(
\langle\eta,Je_2\rangle\xi_1
-\langle\eta,Je_1\rangle\xi_2
\bigr)^2
\Bigr\}.
\end{aligned}
\tag{8.1}
$$

其两个归一化特征值为

$$
1,
\qquad
\lambda_\beta(c)=\frac{c^2}{c^2+\beta(1-c^2)}.
\tag{8.2}
$$

因此，对 $\beta>0$，存在统一 $\lambda_0>0$ 使系统一致抛物，当且仅当存在 $\delta>0$ 使

$$
c=\cos\alpha\ge\delta.
\tag{8.3}
$$

量化地，

$$
c\ge\delta
\quad\Longrightarrow\quad
\lambda_\beta(c)\ge
\frac{\delta^2}{\delta^2+\beta(1-\delta^2)},
\tag{8.4}
$$

而 $\lambda_\beta(c)\ge\lambda_0$ 蕴含

$$
c^2\ge
\frac{\lambda_0\beta}{1-\lambda_0+\lambda_0\beta}.
\tag{8.5}
$$

这证明一个不可回避的边界：对任意一族 HLS 解，统一的一致抛物常数与统一角下界定量等价。§7.2 还说明该常数不能由 $A,W$、密度或面积比推出。

不过，对**一条固定的紧致经典 HLS 流**，还可使用 HLS 原文的有限时最大值估计。若环境满足 $|\operatorname{Ric}_M|\le K$，初始曲面严格辛，并置

$$
m_0=\min_\Sigma\cos\alpha(\cdot,0)>0,
$$

则 HLS Corollary 2.4 给出

$$
\min_\Sigma\cos\alpha(\cdot,t)
\ge m_0e^{-Kt/\beta}
\ge m_0e^{-KT/\beta}>0
\quad(0\le t<T).
\tag{8.6}
$$

结合 (8.4)，这条固定轨道在任意有限时间区间自动一致抛物。因此，下面的 HLS 延拓定理无需把 (8.3) 或 (9.4) 另列为假设。必须同时记住：所得常数依赖 $m_0$，故对 $m_0\downarrow0$ 的一族初值并不统一。

---

## 9. 第一套严格延拓定理：平坦性—强迫—抛物性版本

下面给出可直接使用、假设中不出现 Kähler 角的版本。它把几何测度正则性和 HLS 系统正则性明确分成两步。

### 定理 9.1（角度无关表述的局部延拓准则）

设 $(M^4,g,J)$ 是紧致 Kähler 四流形，$F:\Sigma^2\times[0,T)\to M$ 是紧致曲面的经典光滑嵌入 HLS 梯度流，$T<\infty$。固定等距嵌入 $i:M\hookrightarrow\mathbb R^N$，记 $\bar F=i\circ F$、$V_t=|\bar F_t(\Sigma)|$。若 $H_M$ 是 $M$ 内平均曲率，$E$ 如 (11.1)，定义欧氏速度缺陷

$$
U:=\partial_t\bar F-H_{\mathbb R^N}
=di(f_\beta-H_M)-E.
\tag{9.0}
$$

把端点轨迹集定义为

$$
S_T=\{x:\text{存在 }t_i\uparrow T, x_i\in\bar F_{t_i}(\Sigma), x_i\to x\}.
$$

假设存在

$$
p>2,\qquad q>2,\qquad
\zeta=1-\frac2p-\frac2q>0,
\tag{9.1}
$$

以及常数 $E_1>0$，使得：

1. **面积比：** 对所有所考察的局部球，
   $$
   \|V_t\|(B_r(x))\le E_1\pi r^2.
   \tag{9.2}
   $$
2. **次临界强迫：** $U\in L_t^qL_{\|V_t\|}^p$；因而每个小柱上的尺度量 $r^\zeta\|U\|_{p,q}$ 一致趋于零。由于 $M$ 紧且 $E$ 有界，内禀条件 $f_\beta-H_M\in L_t^qL_x^p$ 是一个充分条件。
3. **端点非消失与一层质量隙：** 对每个 $x\in S_T$，存在 $R_x>0$、二维平面 $P_x$、$\nu_x>0$ 及径向截断 $\phi_{x,R_x}$；若
   $$
   c_\phi R_x^2=\int_{x+P_x}\phi_{x,R_x}^2d\mathcal H^2,
   $$
   则
   $$
   \|V_{T-R_x^2}\|(\phi_{x,R_x}^2)
   \le(2-\nu_x)c_\phi R_x^2,
   \qquad
   \liminf_{t\uparrow T}\|V_t\|(\phi_{x,R_x}^2)
   \ge\nu_xc_\phi R_x^2.
   \tag{9.2a}
   $$
   第一式是严格小于两层的质量隙，第二式排除端点处流消失；取截断和常数满足强迫 Brakke 端时图正则性定理的标准支撑要求。
4. **小高度超额：** 在同一柱中
   $$
   R_x^{-6}\int_{T-R_x^2}^{T}
   \int_{B_{R_x}(x)}
   \operatorname{dist}(y,x+P_x)^2\,d\|V_t\|(y)dt
   \le\varepsilon_*^2,
   \tag{9.3}
   $$
   其中 $\varepsilon_*$ 小于强迫 Brakke 图正则性定理的阈值。
5. **固定经典 HLS 轨道：** 初始曲面严格辛。

则 $F_t$ 在 $t=T$ 光滑收敛到一个光滑嵌入曲面 $F_T$，并存在 $\varepsilon>0$，使 HLS 梯度流唯一地光滑延拓到 $[0,T+\varepsilon)$。条件 1--4 不含 Kähler 角；条件 5 是 HLS 流本身的定义域条件，而非定量角下界。

### 证明

**第一步：把经典流写成单位密度强迫 Brakke 流。** 由于 $F_t$ 在 $t<T$ 嵌入，$V_t$ 是单位密度整数 varifold。由 (9.0)，欧氏实际速度为 $H_{\mathbb R^N}+U$。对任意非负 $\varphi\in C_c^1$，经典第一变分给

$$
\frac d{dt}\|V_t\|(\varphi)
=\int\bigl(\partial_t\varphi
+\nabla\varphi\cdot(H_{\mathbb R^N}+U)
-\varphi H_{\mathbb R^N}\cdot(H_{\mathbb R^N}+U)\bigr)d\|V_t\|.
\tag{9.5}
$$

这正是带强迫 $U$ 的 Brakke 不等式的等号情形。因此经典 HLS 流满足强迫 Brakke 正则性理论的演化输入。

**第二步：小尺度强迫自动变小。** 由 (9.1) 与 (5.3)，尺度为 $r$ 的放缩强迫范数为

$$
\|U^{(r)}\|_{p,q}=r^\zeta\|U\|_{p,q;P_r}.
\tag{9.6}
$$

全局 $L_t^qL_x^p$ 有限和积分的绝对连续性使右端在有限覆盖中一致趋于零。缩小每个 $R_x$ 后，它低于图正则性阈值。

**第三步：强迫 Brakke 图正则性。** (9.2)、假设 3、(9.3) 和 (9.6) 正是 Kasai--Tonegawa 与 Stuvard--Tonegawa 型局部正则性中的面积比、质量隙/非消失、时空高度和平移强迫条件。故在更小柱中，$\Sigma_t$ 是 $x+P_x$ 上的一层 $C^{1,\zeta}$ 图，且图范数直到 $t=T$ 一致有界。这里“一层”来自单位密度与小于两层的质量隙，而不是仅由嵌入性猜测出来。

**第四步：HLS 系统的抛物提升。** 由 (8.6) 及主符号计算 (8.2)，规范化 HLS 系统在 $[0,T)$ 自动有一个依赖初值但严格为正的一致抛物常数。在局部图规范中，HLS 方程是二阶拟线性法丛系统。图的 $C^{1,\zeta}$ 控制使系数有 Hölder 控制；对任意内缩柱应用系统 Schauder 估计，先得到统一 $C^{2,\zeta}$ 控制；对方程作空间和时间微分并迭代，得到每个 $k$ 的统一 $C^k$ 控制。于是图函数在 $t\uparrow T$ 时于 $C^\infty$ 收敛。

**第五步：拼接与短时存在。** $\Sigma$ 紧致，有限个内缩图柱覆盖端点曲面。局部极限在重叠处由 $t<T$ 的同一族图唯一地拼接为光滑嵌入 $F_T$。对一致抛物的 HLS 规范化系统应用经典拟线性抛物短时存在定理，从 $F_T$ 得到 $[T,T+\varepsilon)$ 上的解；与原解的唯一性使二者拼接。证毕。

### 备注 9.2

定理的几何测度部分可由 Stuvard--Tonegawa 的端时图正则性实现；其定理针对具有 $L_t^qL_x^p$ 传输/强迫项的单位密度 Brakke 流，使用的正是 $1-k/p-2/q>0$。这里没有把普通 MCF 的 White 定理直接误用于 HLS 强迫流。

### 备注 9.3

定理 9.1 的显式正则性条件没有写 Kähler 角；一致抛物性由 (8.6) 自动提供。因此它对单条有限时经典轨道确实不需要新增角下界假设。但估计常数仍依赖初始 $m_0$，故不是对接近 Lagrangian 的初值族一致的“几何去角化”。

---

## 10. 第二套延拓定理：补偿密度入口的条件版本

定理 9.1 的高度超额条件可以由“所有切流都是一重平面”的反证紧致性得到。为了避免偷用紧致性，下面把所需条件全部写出。

### 定理 10.1（补偿密度—切流—延拓）

保持定理 9.1 的经典嵌入、面积比、次临界强迫和固定经典 HLS 轨道假设。再假设对每个端点 $(x,T)$：

1. 所有抛物放缩序列都有局部整数 Brakke 收敛子列；
2. 放缩过程中高斯质量无损，并保持端点非消失；
3. 切流具有单位密度，或者有一个严格小于两层平面的质量隙；
4. 补偿密度满足
   $$
   \Theta_U(x,T)<1+\varepsilon_{\mathrm W},
   \qquad
   \Theta_U(x,T):=\lim_{t\uparrow T}
   \left[I_{x,T}(t)+\frac14\int_t^Tq^U_{x,T}(s)ds\right],
   \tag{10.1}
   $$
   其中 $q^U_{x,T}(s)=\int\rho_{x,T}|U|^2d\|V_s\|$，而
   $\varepsilon_{\mathrm W}$ 小于无强迫 MCF 的平面密度隙常数。

则结论与定理 9.1 相同：流在 $T$ 光滑，并可延拓越过 $T$。

### 证明

由次临界缩放 (5.11)，每个切流中的强迫消失。由 §6、紧致性和高斯质量无损，切流是无强迫 self-shrinking Brakke 流，其高斯质量等于 (10.1)；因为缺陷尾趋于零，补偿密度和未补偿密度有相同极限。

无强迫正则性理论的密度隙表明：若 self-shrinking 切流的密度小于 $1+\varepsilon_{\mathrm W}$，并且具有单位密度/一层质量隙，则它必须是静态的一重平面。若定理 9.1 的小时空高度超额在任意小尺度均失败，便可选取失败尺度放缩；紧致性给出一个切流，而极限为一重平面又迫使其高度超额趋于零，矛盾。因此每个端点在某个尺度满足 (9.3) 及一层质量条件。现在应用定理 9.1 即得延拓。证毕。

### 重要限制

- 阈值必须是 $1+\varepsilon_{\mathrm W}$，不能替换为 $2$；§7.1 的 $S^2$ 已给出 $4/e<2$ 的反例。
- “嵌入”在每个 $t<T$ 成立，不自动保证切流一重；本定理明确另加单位密度或质量隙。
- 若缺少高斯质量无损，原流的密度不能直接等同于极限 varifold 的质量。
- 若缺少强迫的次临界消失，极限不必是无强迫 shrinker，不能调用无强迫密度隙。

### 定理 10.2（曲率尺度版的角度无关延拓准则）

还有一个不先假设小时空高度、而直接用曲率反证的版本。设 $F$ 是紧致 Kähler 四流形中的经典光滑紧致嵌入 HLS 流，$0\le t<T<\infty$，并固定等距嵌入 $M\hookrightarrow\mathbb R^N$。假设：

1. **曲率尺度紧致性：** 若 $t_j\uparrow T$、$Q_j=|A|(x_j,t_j)\to\infty$ 且 $Q_j$ 是终端时间片之前的曲率最大值，则以 $Q_j$ 放缩的流有子列在每个紧子集上光滑收敛到非空、完备、proper、一重的古代流，并保持基点归一化 $|A_\infty|(0,0)=1$。此假设包括所需的面积比、嵌入非塌缩、高阶导数估计与无质量损失。
2. **缺陷统一消失：** 对终端时空轨迹上的所有中心，或者
   $$
   \sup_z r^{1-2/p-2/q}\|W\|_{L_t^qL_x^p(P_r(z))}\longrightarrow0,
   \tag{10.2}
   $$
   或者相应的中心高斯 $L^2$ 缺陷能量统一趋于零。
3. **小尺度高斯比间隙：** 存在 $r_0>0$ 与
   $0<\varepsilon<\bar\varepsilon(N,2)$，使终端轨迹上所有半径不超过 $r_0$ 的未加权欧氏高斯比均不超过 $1+\varepsilon$；$\bar\varepsilon(N,2)$ 是 White 平面密度隙常数。

则 $\sup_{[0,T)}|A|<\infty$，从而 HLS 流可光滑延拓越过 $T$。

### 证明

若 $|A|$ 无界，按终端最大曲率选取 $(x_j,t_j)$ 并令 $r_j=Q_j^{-1}$。假设 1 给出定义在 $(-\infty,0]$ 上的光滑 proper 一重极限 $F_\infty$，且 $|A_\infty|(0,0)=1$。欧氏外嵌流的速度缺陷为

$$
U=di(W)-E,
$$

其中 $E$ 是固定外嵌第二基本形的切向迹。放缩后 $U_j=di_j(W_j)-r_jE$；第二项一致趋于零，假设 2 使第一项在每个紧柱上趋于零。由于流已光滑收敛，极限满足 $f_\infty=H_\infty$，即为真正的欧氏古代平均曲率流。

高斯比在平移和抛物放缩下不变。取极限流中任意中心和尺度，用光滑局部收敛及紧支撑高斯截断，再作单调穷竭，假设 3 传到极限，故极限流的每个高斯比均小于 $1+\bar\varepsilon(N,2)$。White 的密度隙刚性迫使该完备 proper 一重古代流为静态平面。这与 $|A_\infty|(0,0)=1$ 矛盾。故 $|A|$ 有界。HLS 的有限时角估计 (8.6) 给一致抛物，高阶估计和短时存在于是把流延拓越过 $T$。证毕。

定理 10.2 的价值是证明链非常短；代价是“曲率尺度光滑 proper 一重紧致性”本身是一个强而必须单独验证的几何假设，不能从经典嵌入性一句话推出。

---

## 11. Kähler 四流形中的等距外嵌版本

设 $i:(M,g)\hookrightarrow\mathbb R^N$ 是固定 $C^2$ 等距嵌入，$F_t:\Sigma^m\to M$ 的内禀速度和平均曲率分别为 $f,H_M$。令

$$
E=\sum_{j=1}^m II_M(e_j,e_j),
\tag{11.1}
$$

并把

$$
Z=\frac{(i\circ F-y)^{\perp_{\mathbb R^N}\Sigma}}{2\tau}
=di(Z_M)+Z_E
$$

按

$$
N^{\mathbb R^N}\Sigma
=di(N^M\Sigma)\oplus N^{\mathbb R^N}M
$$

正交分解。Gauss 公式给

$$
H_{\mathbb R^N}=di(H_M)+E,
\qquad
\partial_t(i\circ F)=di(f).
\tag{11.2}
$$

把 (11.2) 代入定理 2.1，并利用两个法向子空间正交，得到：

### 定理 11.1（黎曼环境精确公式）

$$
\boxed{
\begin{aligned}
I'(t)
={}&-\frac14\int\rho|H_M+f+2Z_M|^2d\mu
+\frac14\int\rho|f-H_M|^2d\mu\\
&-\int\rho|Z_E+E/2|^2d\mu
+\frac14\int\rho|E|^2d\mu.
\end{aligned}}
\tag{11.3}
$$

若把 $K$ 定义为 $II_M$ 的双线性算子范数上界，即
$|II_M(u,v)|\le K|u||v|$，则 $|E|\le mK$。令

$$
C=\frac{m^2K^2}{4},
\qquad
D(t)=\int\rho|f-H_M|^2d\mu,
$$

有

$$
I'(t)\le CI(t)+\frac14D(t).
\tag{11.4}
$$

因此

$$
e^{C(T-t)}I(t)
-\frac14\int_b^te^{C(T-s)}D(s)ds
\tag{11.5}
$$

单调不增。若 $\int_b^TD<\infty$，则尾部量

$$
e^{C(T-t)}I(t)
+\frac14\int_t^Te^{C(T-s)}D(s)ds
\tag{11.6}
$$

单调不增，且 $I(t)$ 有有限极限。

### 证明补充

欧氏平方中的两项分别分解为

$$
|H_{\mathbb R^N}+di(f)+2Z|^2
=|H_M+f+2Z_M|^2+|E+2Z_E|^2,
$$

$$
|di(f)-H_{\mathbb R^N}|^2
=|f-H_M|^2+|E|^2.
$$

这给出 (11.3)。丢掉两个负平方并用 $|E|\le mK$ 得 (11.4)。对 (11.5)--(11.6) 直接求导，因

$$
\frac d{dt}e^{C(T-t)}=-Ce^{C(T-t)},
$$

正好消去 $CI$，结论成立。

在抛物放缩下，固定环境的 $II_M$ 是低阶误差并趋于零。定理 9.1 与 10.1 因而可以在有界几何的 Kähler 四流形中使用正常坐标和有限覆盖表述；外嵌项由 (11.3)--(11.6) 控制。

---

## 12. 可用于论文的命题层级

为避免把逻辑强弱混在一起，建议论文按下列层级陈述。

### 命题 A：无条件精确公式

定理 2.1、局部公式 (3.11) 和黎曼公式 (11.3)。这些只要求经典法向流，完全不依赖 Kähler 角。

### 命题 B：可验证的密度存在条件

假设高斯速度缺陷尾能量有限，或者在面积比下假设次临界 $L_t^qL_x^p$ 控制。得到补偿单调性、无权密度存在和切流耗散。HLS 中可用最佳估计 (4.6) 把它化为 $A$ 的条件。

### 命题 C：严格延拓

在 B 的基础上加入：单位密度、面积比、端点非消失以及一层质量隙/小时空高度超额。然后用强迫 Brakke 图正则性得到 $C^{1,\zeta}$；对固定的紧致有限时经典 HLS 轨道，一致抛物性由 (8.6) 自动成立，再用系统 Schauder 提升并延拓。

### 不应写成定理的说法

以下说法均不成立或没有被上述计算证明：

- “无权高斯密度 $<2$ 自动延拓”；
- “有限速度缺陷自动给单位重数”；
- “嵌入流的所有切流自动一重”；
- “$A$、$W$、面积比或密度控制自动阻止 HLS 主符号退化”；
- “所得估计对初始最小角趋于零的一族 HLS 流仍然一致”。

---

## 13. 与现有文献的关系

1. HLS 流方程、适配标架和原有加权局部公式来自 Han--Li--Sun，*Gradient flow for $\beta$-symplectic critical surfaces*，Annales de l'Institut Henri Poincaré C, 2024，DOI: `10.4171/AIHPC/100`。
2. 当 $W=0$ 时，定理 2.1 是 Huisken 的反向热核单调公式。
3. White 的局部正则性给无强迫 MCF 的密度接近 $1$ 正则机制；它不能未经转换直接用于 HLS 强迫流。
4. Kasai--Tonegawa 建立了带 $L_t^qL_x^p$ 传输项的 Brakke 流局部正则性；Stuvard--Tonegawa 给出包括端时在内的局部正则性，指数正是 $1-k/p-2/q>0$。
5. De Philippis--Gasparetto--Schulze 处理有界强迫下的 Brakke 正则性；这些文献支持定理 9.1 的几何测度步骤，但仍需要平坦性/质量条件，不能从补偿恒等式凭空产生。

---

## 14. Danus 交叉审计记录

本报告在 WSL 的 Danus 项目

`gradient-flow-anglefree-monotonicity-extension-20260823`

中并行核验。共调用 **12 个工人**：

| 类别 | 数量 | 任务 |
|---|---:|---|
| `gpt-5.6-sol high` | 4 | 欧氏/黎曼精确公式、HLS 符号、局部延拓链 |
| `gpt-5.6-sol xhigh` | 8 | 尺度与 $L^{p,q}$、反例、文献边界、公式族、切流、最佳常数、定理层级、红队审计 |

关键交叉修正是：早期未充分使用 HLS 适配标架中的消去，曾得到较差的 $|W_\beta|^2\le(11/2)|A|^2$；独立复算 (4.8)--(4.11) 后，最终确定最佳统一常数为 $3/2$。报告只采用纠正后的结果。

---

## 15. 参考文献与可核验链接

1. X. Han, J. Li, J. Sun, *Gradient flow for $\beta$-symplectic critical surfaces*, Ann. Inst. H. Poincaré C Anal. Non Linéaire 41 (2024), 1079--1113.  
   https://ems.press/journals/aihpc/articles/12362953
2. G. Huisken, *Asymptotic behavior for singularities of the mean curvature flow*, J. Differential Geom. 31 (1990), 285--299.  
   https://doi.org/10.4310/jdg/1214444099
3. B. White, *A local regularity theorem for mean curvature flow*, Ann. of Math. 161 (2005), 1487--1519.  
   https://annals.math.princeton.edu/2005/161-3/p07
4. K. Kasai, Y. Tonegawa, *A general regularity theory for weak mean curvature flow*, Calc. Var. Partial Differential Equations 50 (2014), 1--68.  
   https://arxiv.org/abs/1111.0824
5. S. Stuvard, Y. Tonegawa, *End-time regularity theorem for Brakke flows*, Math. Ann. 390 (2024), 5755--5791.  
   https://link.springer.com/article/10.1007/s00208-024-02826-8
6. G. De Philippis, C. Gasparetto, F. Schulze, *A short proof of Allard's and Brakke's regularity theorems*, Int. Math. Res. Not. 2024, 7594--7613.  
   https://academic.oup.com/imrn/article/2024/9/7594/7442067

---

## 16. 最终判定

可以为 HLS 梯度流建立一套不以 Kähler 角为权的高斯工具：精确平方完成式、全局与局部补偿单调量、尺度单调量、无权密度存在条件、次临界强迫消失以及黎曼外嵌版本。它们的共同核心是实际几何量

$$
W=\partial_tF^\perp-H,
$$

而不是 $\cos\alpha$。

但是，**单调公式不是延拓定理**。严格延拓还需强迫 Brakke 图正则性所要求的面积比、平坦性/质量隙、端点非消失与次临界强迫。对固定的紧致有限时经典 HLS 流，HLS 最大值原理自动给出 PDE 提升所需的一致抛物性，所以延拓命题的附加条件可以完全不写 Kähler 角。这个事实仍不产生对初始最小角趋于零的一族流统一的常数，也不是“允许经典轨道在有限时到达 Lagrangian 退化而仍然延拓”的定理。
