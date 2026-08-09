# （5.5）式的严格推导结果

> Fixed-cutoff 端点极限、moving-cutoff 缺口与最强可证修正版定理

## 1. 精确问题 statement

目标是解释 printed page 1104 的 equation (5.5) 是否能从前文严格推出。核心对象如下。对 $t<t_0$，

$$
\rho_{X_0,t_0}(F,t)=\frac{1}{4\pi(t_0-t)}
\exp\!\left(-\frac{|F-X_0|^2}{4(t_0-t)}\right),
$$

并且对一个 fixed original-coordinate cutoff $\phi\in C_c^\infty(B_{2r}(X_0))$、$\phi=1$ on $B_r(X_0)$，

$$
\Psi(X_0,t_0;t)=
\int_{\Sigma_t}(\cos\alpha)^{-p}\phi(F)\rho_{X_0,t_0}(F,t)\,d\mu_t .
$$

Theorem 3.3 的 relevant estimate 是

$$
\frac{d}{dt}\left(e^{c_1\sqrt{t_0-t}}\Psi(X_0,t_0;t)\right)
\le
-\text{nonnegative square terms}
+c_2e^{c_1\sqrt{t_0-t}}
$$

其中关键点是 right side 有 one-sided positive error。Section 5 在 first singular point $(X_0,T)$ 附近使用

$$
F_\lambda(x,s)=\lambda(F(x,T+\lambda^{-2}s)-X_0),\qquad
d\mu_s^\lambda=\lambda^2d\mu_{T+\lambda^{-2}s},
$$

并写 $w_\lambda=(\cos\alpha_\lambda)^{-p}$。printed equation (5.5) 的 literal endpoint quantity 是

$$
G_\lambda(s)=e^{c_1\sqrt{T-(T+\lambda^{-2}s)}}
\int_{\Sigma_s^\lambda}
w_\lambda\,\phi_R(F_\lambda)\,(-s)^{-1}
e^{-|F_\lambda|^2/[4(-s)]}\,d\mu_s^\lambda ,
$$

其中 $\phi_R$ is a compact cutoff fixed in scaled coordinates。要证明或诊断的是：对 fixed $-1<s_1<s_2<0$，

$$
G_\lambda(s_2)-G_\lambda(s_1)\to0\qquad(\lambda\to\infty).
$$

当前 continuation 要求的是 remaining moving-cutoff lemma 的 full proof；结论是：literal compact-scaled-cutoff lemma 在 full Section 5 compact first-singular-flow context 下尚未被证明，也没有 full-hypothesis counterexample；已证明的是 fixed-original-cutoff correction。

## 2. 主要数学进展

（status: **proven**）Fixed quantity 的 terminal limit 是严格成立的。设 $Q:[a,T)\to[0,\infty)$ locally absolutely continuous，并满足

$$
Q'(t)\le c_2e^{c_1\sqrt{T-t}}
$$

for almost every $t<T$。令

$$
A(t)=\int_t^T c_2e^{c_1\sqrt{T-u}}\,du,\qquad M(t)=Q(t)+A(t).
$$

则 $A(t)\to0$ as $t\uparrow T$，且

$$
M'(t)=Q'(t)-c_2e^{c_1\sqrt{T-t}}\le0.
$$

所以 $M$ monotone decreasing 且 bounded below by $0$，从而 $M(t)$ 有 finite one-sided limit。于是 $Q(t)=M(t)-A(t)$ 也有 finite one-sided limit。由此若 $t_\lambda(s)=T+\lambda^{-2}s$，则 fixed $s_1,s_2<0$ 给出

$$
Q(t_\lambda(s_2))-Q(t_\lambda(s_1))\to0.
$$

这完全处理了 one-sided inequality 和 positive error term 的问题。

（status: **proven**）正确的 fixed-cutoff rescaled endpoint theorem 如下。固定一个 original-coordinate cutoff $\chi\in C_c^\infty(B_{2r}(X_0))$，$\chi=1$ on $B_r(X_0)$，定义

$$
Q_\chi(t)=e^{c_1\sqrt{T-t}}\Psi_\chi(X_0,T;t).
$$

在 scaled variables 中使用 expanding cutoff

$$
\chi^\lambda(Y)=\chi(X_0+\lambda^{-1}Y).
$$

则

$$
G_\lambda^\chi(s)
=
e^{c_1\lambda^{-1}\sqrt{-s}}
\int_{\Sigma_s^\lambda}
w_\lambda\,\chi(X_0+\lambda^{-1}F_\lambda)
(-s)^{-1}e^{-|F_\lambda|^2/[4(-s)]}\,d\mu_s^\lambda
$$

满足 exact identity

$$
G_\lambda^\chi(s)=4\pi Q_\chi(T+\lambda^{-2}s).
$$

proof sketch：用

$$
T-t=\lambda^{-2}(-s),\qquad
F-X_0=\lambda^{-1}F_\lambda,\qquad
d\mu_s^\lambda=\lambda^2d\mu_t.
$$

Kähler angle 在 positive homothety 下 invariant，因为 numerator $\omega(u,v)$ 和 area denominator 都乘以 $\lambda^2$，所以 $w_\lambda=w$。于是 unnormalized scaled Gaussian factor 精确变成 $4\pi\rho_{X_0,T}$。因此 $4\pi$ 只是 common normalization factor；若使用 normalized kernel $[4\pi(-s)]^{-1}$，这个因子消失。因为 $Q_\chi(t)$ has a common terminal limit，epsilon proof 直接给出

$$
G_\lambda^\chi(s_2)-G_\lambda^\chi(s_1)\to0.
$$

（status: **proven**）printed cutoff 与 fixed cutoff 不是同一个对象。literal expression 中

$$
\phi_R(F_\lambda)=\phi_R(\lambda(F-X_0))
$$

在 original coordinates 中对应 moving cutoff

$$
\chi_{R,\lambda}(X)=\phi_R(\lambda(X-X_0)).
$$

它 supported in $B_{2R/\lambda}(X_0)$，equal to $1$ on $B_{R/\lambda}(X_0)$，随 $\lambda$ 改变。fixed terminal-limit argument 只控制一个 fixed $Q_\chi$，不能自动控制 moving family $Q_{R,\lambda}$。抽象上，即使每个 $Q_\lambda$ 都 nonnegative、has terminal limit、并满足 $Q_\lambda'\le0$，也可能有

$$
Q_\lambda(T+\lambda^{-2}s_2)-Q_\lambda(T+\lambda^{-2}s_1)\not\to0.
$$

因此 individual terminal limits for a moving family are insufficient；需要 uniform bridge。

（status: **proven**）standalone literal moving-cutoff lemma 是假的。取 flat symplectic plane $P=\mathbb R^2\times\{0\}\subset\mathbb C^2$，stationary flow $F(x,t)=x$。此时 $\cos\alpha=1$，$H=0$，所有 curvature/flow-energy terms vanish，且 $\Sigma_s^\lambda=P$。对 nontrivial radial compact cutoff $\phi_R$，

$$
I(s)=\int_P\phi_R(Y)(-s)^{-1}
e^{-|Y|^2/[4(-s)]}\,dA(Y).
$$

full uncut integral 恒等于 $4\pi$，但 compact-cut integral 不必 constant。写 $a=-s$，change variables $Y=\sqrt a\,Z$ 得

$$
I(-a)=\int_P\phi_R(\sqrt a\,Z)e^{-|Z|^2/4}\,dA(Z).
$$

若 $s_1<s_2<0$，则 $a_1>a_2$。选择 radial nonincreasing cutoff，使 transition annulus 被两种 scales 分开，则

$$
I(s_2)>I(s_1).
$$

于是

$$
G_\lambda(s)=e^{c_1\lambda^{-1}\sqrt{-s}}I(s)
$$

给出 positive endpoint defect。这个 plane 不是 full Section 5 counterexample，因为它 noncompact、没有 finite first singular time，且 $X_0$ 不是 singular point。

（status: **proven / conditional**）若 actual endpoint weighted Radon measures 在 $s_1,s_2$ 都 weakly converge 到同一个 nonzero two-dimensional cone measure，则 literal compact-scaled-cutoff endpoint difference 反而通常有 positive limit。原因很简单：对 compact continuous test function

$$
Y\mapsto \phi_R(Y)(-s_i)^{-1}e^{-|Y|^2/[4(-s_i)]},
$$

weak convergence 直接传递 integrals。对 two-homogeneous cone，radial scaling 又给出 compact cutoff 的 $s$-dependence。此结论是 conditional obstruction，不是 full counterexample，因为 same-limit conical convergence 不能 circularly 用 later tangent-cone theorem 来提供。

## 3. 主要障碍

唯一真正的 wall 是 moving cutoff 的 order-one annular flux。把

$$
\chi_{R,\lambda}(X)=\phi_R(\lambda(X-X_0))
$$

代入 fixed-cutoff calculation 时，$D\chi_{R,\lambda}$ scales like $\lambda$，$D^2\chi_{R,\lambda}$ scales like $\lambda^2$。在 parabolic time window $t=T+\lambda^{-2}s$ 中，$\rho_t=\lambda^2\rho_s$，$d\mu_t=\lambda^{-2}d\mu_s^\lambda$，$dt=\lambda^{-2}ds$，这些 powers 正好 cancel，留下

$$
\int_{s_1}^{s_2}\!\int_{\Sigma_s^\lambda}
w_\lambda\rho_s
\Big[
D\phi_R(F_\lambda)\!\cdot v_\lambda
+\Delta_{\Sigma_s^\lambda}(\phi_R\circ F_\lambda)
+2\langle\nabla\log\rho_s,\nabla(\phi_R\circ F_\lambda)\rangle
\Big]\,d\mu_s^\lambda ds.
$$

该 integral supported in fixed scaled annulus $R<|F_\lambda|<2R$，没有 small $\lambda$ factor，也没有 sign。local area bounds 只给 fixed-time compactness；zero velocity/zero curvature heuristics 也不够，因为 stationary plane 上 pure spatial heat-kernel flux already equals the nonzero endpoint defect。later time-independent tangent-cone convergence 不能作为 pre-(5.5) proof，因为它依赖由 (5.5) 推出的 estimates。

## 4. Approach timeline

| stage | question addressed | conclusion established | effect on the approach |
|---|---|---|---|
| fixed terminal quantity | Does one-sided estimate imply a finite terminal limit? | yes, by adding the integrable future error tail | validates the common-limit argument for one fixed cutoff |
| exact rescaling | What does the fixed original cutoff become after blow-up? | $\chi(F)$ becomes $\chi(X_0+\lambda^{-1}F_\lambda)$, with a harmless $4\pi$ factor | gives a rigorous corrected endpoint formula |
| literal scaled cutoff | Is $\phi_R(F_\lambda)$ the same fixed-cutoff object? | no; it is $\chi_{R,\lambda}(F)$ in original coordinates | exposes the missing uniform moving-family step |
| model obstruction | Is fixed compact scaled cutoff harmless? | no; flat stationary plane gives positive endpoint defect | disproves standalone lemma, but not full compact singular-flow case |
| annular flux audit | Can scaling make moving-cutoff errors small? | no; leading cutoff terms are order-one on a fixed scaled annulus | identifies the exact missing bridge |
| fixed-time compactness | Can earlier estimates give some compactness? | yes, fixed-time local Radon compactness | insufficient to compare two endpoint measures |

## 5. Current status & next step

literal compact-scaled-cutoff version of equation (5.5) is not proved from the available pre-(5.5) material. The strongest unconditional corrected theorem is the fixed-original-cutoff version above. No full compact first-singular-flow counterexample has been established. The remaining actionable lemma is the following uniform moving-cutoff bridge.

### Remaining lemma：uniform moving-cutoff bridge

Let $(\Sigma_t,F(\cdot,t))$ be a compact beta-symplectic critical surface flow smooth for $t<T$, let $(X_0,T)$ be a singular spacetime point, fix $R>0$, fix $\phi_R\in C_c^\infty(B_{2R}(0))$ with $\phi_R=1$ on $B_R(0)$, and set
\[
\chi_{R,\lambda}(X)=\phi_R(\lambda(X-X_0)).
\]
For
\[
Q_{R,\lambda}(t)=e^{c_1\sqrt{T-t}}
\int_{\Sigma_t}(\cos\alpha)^{-p}\chi_{R,\lambda}(F)
\rho_{X_0,T}(F,t)\,d\mu_t,
\]
let
\[
L_{R,\lambda}=\lim_{t\uparrow T}Q_{R,\lambda}(t),
\]
assuming this limit exists from the one-sided estimate for each fixed $\lambda$. Prove, noncircularly and uniformly at the parabolic scale, that for every fixed $-1<s_1<s_2<0$,
\[
Q_{R,\lambda}(T+\lambda^{-2}s_i)-L_{R,\lambda}\to0
\quad(i=1,2).
\]
Equivalently, prove the annular cutoff-flux terms supported on
\[
R<|F_\lambda|<2R
\]
are $o(1)$, or cancel, as $\lambda\to\infty$.
